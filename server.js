const crypto = require('crypto');
const express = require('express');
const bcrypt = require('bcryptjs');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const db = new Database(process.env.SAUTI_DB_PATH || path.join(__dirname, 'sauti_yangu.db'));
const PORT = process.env.PORT || 3000;
const SESSION_COOKIE = 'sauti_yangu_session';
const SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 30;
const CHALLENGES = new Set([
  'Autism',
  'Stammering',
  'Speech delay',
  'Aphasia',
  'Cleft palate',
  'Communication anxiety'
]);

app.disable('x-powered-by');
app.set('trust proxy', process.env.TRUST_PROXY === 'true');
app.use((req, res, next) => {
  res.set({
    'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  });
  if (req.path.startsWith('/api/')) {
    res.set('Cache-Control', 'no-store');
  }
  next();
});
app.use(express.json({ limit: '16kb' }));
app.use('/assets', express.static(path.join(__dirname, 'assets'), { dotfiles: 'deny' }));
const publicFiles = new Map([
  ['/styles.css', 'styles.css'],
  ['/app.js', 'app.js'],
  ['/manifest.webmanifest', 'manifest.webmanifest'],
  ['/sw.js', 'sw.js']
]);
app.get([...publicFiles.keys()], (req, res, next) => {
  res.sendFile(path.join(__dirname, publicFiles.get(req.path)), (error) => {
    if (error) next(error);
  });
});
app.get(['/', '/index.html'], (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'), (error) => {
    if (error) next(error);
  });
});

function initDatabase() {
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      challenge TEXT NOT NULL,
      bio TEXT DEFAULT '',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS friendships (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_id INTEGER NOT NULL,
      receiver_id INTEGER NOT NULL,
      status TEXT NOT NULL CHECK(status IN ('pending','accepted','declined')) DEFAULT 'pending',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(sender_id, receiver_id)
    );
  `);

  const columns = new Set(db.pragma('table_info(users)').map((column) => column.name));
  if (!columns.has('discoverable')) {
    db.exec('ALTER TABLE users ADD COLUMN discoverable INTEGER NOT NULL DEFAULT 0');
  }
  if (!columns.has('share_bio')) {
    db.exec('ALTER TABLE users ADD COLUMN share_bio INTEGER NOT NULL DEFAULT 0');
  }
  if (!columns.has('active')) {
    db.exec('ALTER TABLE users ADD COLUMN active INTEGER NOT NULL DEFAULT 1');
  }

  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      token_hash TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS sessions_user_id ON sessions(user_id);
    CREATE TABLE IF NOT EXISTS blocks (
      blocker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      blocked_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (blocker_id, blocked_id),
      CHECK (blocker_id != blocked_id)
    );
    CREATE TABLE IF NOT EXISTS reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      reporter_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      reported_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      reason TEXT NOT NULL,
      details TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','reviewed','dismissed')),
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      CHECK (reporter_id != reported_id)
    );
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      receiver_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      body TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS messages_conversation ON messages(sender_id, receiver_id, id);
  `);
}

function normalizeEmail(email) {
  return String(email).trim().toLowerCase();
}

function getModeratorIds() {
  return new Set((process.env.MODERATOR_IDS || '')
    .split(',')
    .map((id) => Number(id.trim()))
    .filter((id) => Number.isSafeInteger(id) && id > 0));
}

function isModerator(user) {
  return getModeratorIds().has(user.id);
}

function sanitizeUser(user, includePrivateSettings = false) {
  const sanitized = {
    id: user.id,
    name: user.name,
    challenge: user.challenge,
    bio: user.share_bio ? user.bio || '' : '',
    share_bio: Boolean(user.share_bio),
    discoverable: Boolean(user.discoverable)
  };
  if (includePrivateSettings) {
    sanitized.email = user.email;
    sanitized.bio = user.bio || '';
    sanitized.is_moderator = isModerator(user);
  }
  return sanitized;
}

function parseCookies(header = '') {
  return Object.fromEntries(header.split(';').map((part) => {
    const separator = part.indexOf('=');
    if (separator < 0) return ['', ''];
    const key = part.slice(0, separator).trim();
    const value = part.slice(separator + 1).trim();
    try {
      return [key, decodeURIComponent(value)];
    } catch {
      return [key, ''];
    }
  }).filter(([key]) => key));
}

function tokenDigest(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${SESSION_LIFETIME_SECONDS}${secure}`
  );
}

function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secure}`);
}

function createSession(userId, res) {
  db.prepare("DELETE FROM sessions WHERE expires_at <= datetime('now')").run();
  const token = crypto.randomBytes(32).toString('hex');
  db.prepare(`
    INSERT INTO sessions (token_hash, user_id, expires_at)
    VALUES (?, ?, datetime('now', '+30 days'))
  `).run(tokenDigest(token), userId);
  setSessionCookie(res, token);
}

function authenticatedUser(req) {
  const token = parseCookies(req.headers.cookie)[SESSION_COOKIE];
  if (!token) return null;
  const session = db.prepare(`
    SELECT u.*
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > datetime('now') AND u.active = 1
  `).get(tokenDigest(token));
  return session || null;
}

function requireAuth(req, res, next) {
  const user = authenticatedUser(req);
  if (!user) {
    return res.status(401).json({ message: 'Please log in to continue.' });
  }
  req.user = user;
  return next();
}

function requireModerator(req, res, next) {
  if (!isModerator(req.user)) {
    return res.status(403).json({ message: 'Moderator access is required.' });
  }
  return next();
}

function validId(value) {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function isBlocked(firstId, secondId) {
  return Boolean(db.prepare(`
    SELECT 1 FROM blocks
    WHERE (blocker_id = ? AND blocked_id = ?) OR (blocker_id = ? AND blocked_id = ?)
  `).get(firstId, secondId, secondId, firstId));
}

function areFriends(firstId, secondId) {
  return Boolean(db.prepare(`
    SELECT 1 FROM friendships
    WHERE status = 'accepted'
      AND ((sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?))
  `).get(firstId, secondId, secondId, firstId));
}

function getNetworkData(user) {
  const discover = db.prepare(`
    SELECT u.*
    FROM users u
    WHERE u.id != ? AND u.challenge = ? AND u.discoverable = 1 AND u.active = 1
      AND NOT EXISTS (
        SELECT 1 FROM friendships f
        WHERE f.status = 'pending'
          AND ((f.sender_id = ? AND f.receiver_id = u.id) OR (f.sender_id = u.id AND f.receiver_id = ?))
      )
      AND NOT EXISTS (
        SELECT 1 FROM friendships f
        WHERE f.status = 'accepted'
          AND ((f.sender_id = ? AND f.receiver_id = u.id) OR (f.sender_id = u.id AND f.receiver_id = ?))
      )
      AND NOT EXISTS (
        SELECT 1 FROM blocks b
        WHERE (b.blocker_id = ? AND b.blocked_id = u.id) OR (b.blocker_id = u.id AND b.blocked_id = ?)
      )
    ORDER BY u.name COLLATE NOCASE
  `).all(user.id, user.challenge, user.id, user.id, user.id, user.id, user.id, user.id);
  const requests = db.prepare(`
    SELECT u.* FROM friendships f JOIN users u ON u.id = f.sender_id
    WHERE f.receiver_id = ? AND f.status = 'pending' AND u.active = 1
      AND NOT EXISTS (SELECT 1 FROM blocks b WHERE b.blocker_id = ? AND b.blocked_id = u.id)
  `).all(user.id, user.id);
  const friends = db.prepare(`
    SELECT u.* FROM friendships f
    JOIN users u ON u.id = CASE WHEN f.sender_id = ? THEN f.receiver_id ELSE f.sender_id END
    WHERE (f.sender_id = ? OR f.receiver_id = ?) AND f.status = 'accepted' AND u.active = 1
      AND NOT EXISTS (
        SELECT 1 FROM blocks b
        WHERE (b.blocker_id = ? AND b.blocked_id = u.id) OR (b.blocker_id = u.id AND b.blocked_id = ?)
      )
  `).all(user.id, user.id, user.id, user.id, user.id);
  return {
    user: sanitizeUser(user, true),
    discover: discover.map((person) => sanitizeUser(person)),
    requests: requests.map((person) => sanitizeUser(person)),
    friends: friends.map((person) => sanitizeUser(person))
  };
}

function createRateLimiter({ windowMs, max, message }) {
  const attempts = new Map();
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const record = attempts.get(key);
    if (!record || record.resetAt <= now) {
      attempts.set(key, { count: 1, resetAt: now + windowMs });
      if (attempts.size > 10000) {
        for (const [ip, entry] of attempts) {
          if (entry.resetAt <= now) attempts.delete(ip);
        }
      }
      return next();
    }
    record.count += 1;
    if (record.count > max) {
      res.set('Retry-After', String(Math.ceil((record.resetAt - now) / 1000)));
      return res.status(429).json({ message });
    }
    return next();
  };
}

const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many sign-in attempts. Please wait and try again.'
});
const writeLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 60,
  message: 'You are doing that too often. Please wait and try again.'
});

app.use('/api', (req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.method !== 'OPTIONS') {
    const origin = req.get('origin');
    if (origin) {
      try {
        if (new URL(origin).origin !== `${req.protocol}://${req.get('host')}`) {
          return res.status(403).json({ message: 'Cross-origin requests are not allowed.' });
        }
      } catch {
        return res.status(403).json({ message: 'Invalid request origin.' });
      }
    }
  }
  return next();
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Sauti Yangu backend is running.' });
});

app.post('/api/signup', loginLimiter, (req, res) => {
  const { name, email, password, challenge, bio = '' } = req.body || {};
  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || typeof challenge !== 'string') {
    return res.status(400).json({ message: 'Name, email, password, and support area are required.' });
  }
  const cleanName = name.trim();
  const normalizedEmail = normalizeEmail(email);
  if (!cleanName || cleanName.length > 80 || normalizedEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return res.status(400).json({ message: 'Enter a valid name and email address.' });
  }
  if (password.length < 10 || password.length > 200) {
    return res.status(400).json({ message: 'Password must be between 10 and 200 characters.' });
  }
  if (!CHALLENGES.has(challenge) || typeof bio !== 'string' || bio.length > 280) {
    return res.status(400).json({ message: 'Choose a valid support area and a bio of 280 characters or fewer.' });
  }
  const hashedPassword = bcrypt.hashSync(password, 12);
  try {
    const result = db.prepare(`
      INSERT INTO users (name, email, password, challenge, bio)
      VALUES (?, ?, ?, ?, ?)
    `).run(cleanName, normalizedEmail, hashedPassword, challenge, bio.trim());
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);
    createSession(user.id, res);
    return res.status(201).json({ user: sanitizeUser(user, true) });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }
    throw error;
  }
});

app.post('/api/login', loginLimiter, (req, res) => {
  const { email, password } = req.body || {};
  if (typeof email !== 'string' || typeof password !== 'string' || !email.trim() || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  const user = db.prepare('SELECT * FROM users WHERE email = ? AND active = 1').get(normalizeEmail(email));
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  createSession(user.id, res);
  return res.json({ user: sanitizeUser(user, true) });
});

app.post('/api/logout', (req, res) => {
  const token = parseCookies(req.headers.cookie)[SESSION_COOKIE];
  if (token) {
    db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(tokenDigest(token));
  }
  clearSessionCookie(res);
  return res.json({ ok: true });
});

app.get('/api/me', (req, res) => {
  const user = authenticatedUser(req);
  res.json({ user: user ? sanitizeUser(user, true) : null });
});

app.get('/api/network', requireAuth, (req, res) => {
  res.json(getNetworkData(req.user));
});

app.patch('/api/profile', requireAuth, writeLimiter, (req, res) => {
  const { discoverable, share_bio: shareBio, bio } = req.body || {};
  if (typeof discoverable !== 'boolean' || typeof shareBio !== 'boolean' || typeof bio !== 'string' || bio.length > 280) {
    return res.status(400).json({ message: 'Provide valid privacy choices and a bio of 280 characters or fewer.' });
  }
  db.prepare(`
    UPDATE users SET discoverable = ?, share_bio = ?, bio = ? WHERE id = ?
  `).run(Number(discoverable), Number(shareBio), bio.trim(), req.user.id);
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  res.json({ user: sanitizeUser(user, true) });
});

app.post('/api/friends/request', requireAuth, writeLimiter, (req, res) => {
  const receiverId = validId(req.body && req.body.receiverId);
  if (!receiverId || receiverId === req.user.id) {
    return res.status(400).json({ message: 'Choose a valid community member.' });
  }
  const receiver = db.prepare('SELECT id FROM users WHERE id = ? AND active = 1 AND discoverable = 1').get(receiverId);
  if (!receiver || isBlocked(req.user.id, receiverId)) {
    return res.status(404).json({ message: 'That community member is not available.' });
  }
  const existing = db.prepare(`
    SELECT * FROM friendships
    WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
  `).get(req.user.id, receiverId, receiverId, req.user.id);
  if (existing) {
    if (existing.status === 'declined' && existing.sender_id === req.user.id) {
      db.prepare('UPDATE friendships SET status = ? WHERE id = ?').run('pending', existing.id);
      return res.status(201).json({ status: 'pending' });
    }
    return res.status(409).json({ message: 'A friend request already exists.' });
  }
  db.prepare(`
    INSERT INTO friendships (sender_id, receiver_id, status)
    VALUES (?, ?, 'pending')
  `).run(req.user.id, receiverId);
  return res.status(201).json({ status: 'pending' });
});

app.post('/api/friends/accept', requireAuth, writeLimiter, (req, res) => {
  const senderId = validId(req.body && req.body.senderId);
  if (!senderId || senderId === req.user.id) {
    return res.status(400).json({ message: 'Choose a valid friend request.' });
  }
  const update = db.prepare(`
    UPDATE friendships SET status = 'accepted'
    WHERE sender_id = ? AND receiver_id = ? AND status = 'pending'
  `).run(senderId, req.user.id);
  if (!update.changes) return res.status(404).json({ message: 'Pending request not found.' });
  return res.json({ status: 'accepted' });
});

app.post('/api/friends/decline', requireAuth, writeLimiter, (req, res) => {
  const senderId = validId(req.body && req.body.senderId);
  if (!senderId || senderId === req.user.id) {
    return res.status(400).json({ message: 'Choose a valid friend request.' });
  }
  const update = db.prepare(`
    UPDATE friendships SET status = 'declined'
    WHERE sender_id = ? AND receiver_id = ? AND status = 'pending'
  `).run(senderId, req.user.id);
  if (!update.changes) return res.status(404).json({ message: 'Pending request not found.' });
  return res.json({ status: 'declined' });
});

app.get('/api/blocks', requireAuth, (req, res) => {
  const users = db.prepare(`
    SELECT u.id, u.name FROM blocks b JOIN users u ON u.id = b.blocked_id
    WHERE b.blocker_id = ? ORDER BY u.name COLLATE NOCASE
  `).all(req.user.id);
  res.json({ users });
});

app.post('/api/blocks', requireAuth, writeLimiter, (req, res) => {
  const blockedId = validId(req.body && req.body.userId);
  if (!blockedId || blockedId === req.user.id) {
    return res.status(400).json({ message: 'Choose a valid community member.' });
  }
  const otherUser = db.prepare('SELECT id FROM users WHERE id = ?').get(blockedId);
  if (!otherUser) return res.status(404).json({ message: 'Community member not found.' });
  const blockUser = db.transaction(() => {
    db.prepare('INSERT OR IGNORE INTO blocks (blocker_id, blocked_id) VALUES (?, ?)').run(req.user.id, blockedId);
    db.prepare(`
      DELETE FROM friendships
      WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
    `).run(req.user.id, blockedId, blockedId, req.user.id);
    db.prepare(`
      DELETE FROM messages
      WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
    `).run(req.user.id, blockedId, blockedId, req.user.id);
  });
  blockUser();
  res.json({ ok: true });
});

app.delete('/api/blocks/:userId', requireAuth, writeLimiter, (req, res) => {
  const blockedId = validId(req.params.userId);
  if (!blockedId) return res.status(400).json({ message: 'Choose a valid community member.' });
  db.prepare('DELETE FROM blocks WHERE blocker_id = ? AND blocked_id = ?').run(req.user.id, blockedId);
  res.json({ ok: true });
});

app.post('/api/reports', requireAuth, writeLimiter, (req, res) => {
  const reportedId = validId(req.body && req.body.userId);
  const { reason, details = '' } = req.body || {};
  const allowedReasons = new Set(['Harassment', 'Inappropriate content', 'Impersonation', 'Other']);
  if (!reportedId || reportedId === req.user.id || !allowedReasons.has(reason) || typeof details !== 'string' || details.length > 1000) {
    return res.status(400).json({ message: 'Provide a valid report reason and optional details.' });
  }
  const reportedUser = db.prepare('SELECT id FROM users WHERE id = ?').get(reportedId);
  if (!reportedUser) return res.status(404).json({ message: 'Community member not found.' });
  const result = db.prepare(`
    INSERT INTO reports (reporter_id, reported_id, reason, details)
    VALUES (?, ?, ?, ?)
  `).run(req.user.id, reportedId, reason, details.trim());
  res.status(201).json({ id: result.lastInsertRowid, status: 'pending' });
});

app.get('/api/moderation/reports', requireAuth, requireModerator, (req, res) => {
  const reports = db.prepare(`
    SELECT r.id, r.reason, r.details, r.status, r.created_at,
      reporter.name AS reporter_name, reported.name AS reported_name
    FROM reports r
    JOIN users reporter ON reporter.id = r.reporter_id
    JOIN users reported ON reported.id = r.reported_id
    WHERE r.status = 'pending'
    ORDER BY r.created_at ASC, r.id ASC
  `).all();
  res.json({ reports });
});

app.post('/api/moderation/reports/:reportId', requireAuth, requireModerator, writeLimiter, (req, res) => {
  const reportId = validId(req.params.reportId);
  const { status } = req.body || {};
  if (!reportId || !['reviewed', 'dismissed'].includes(status)) {
    return res.status(400).json({ message: 'Choose a valid report action.' });
  }
  const result = db.prepare(`
    UPDATE reports SET status = ? WHERE id = ? AND status = 'pending'
  `).run(status, reportId);
  if (!result.changes) return res.status(404).json({ message: 'Pending report not found.' });
  res.json({ status });
});

app.get('/api/messages/:friendId', requireAuth, (req, res) => {
  const friendId = validId(req.params.friendId);
  if (!friendId || friendId === req.user.id || !areFriends(req.user.id, friendId) || isBlocked(req.user.id, friendId)) {
    return res.status(403).json({ message: 'Messages are only available with an accepted, unblocked friend.' });
  }
  const messages = db.prepare(`
    SELECT id, sender_id, receiver_id, body, created_at
    FROM messages
    WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
    ORDER BY id DESC LIMIT 100
  `).all(req.user.id, friendId, friendId, req.user.id).reverse();
  res.json({ messages });
});

app.post('/api/messages/:friendId', requireAuth, writeLimiter, (req, res) => {
  const friendId = validId(req.params.friendId);
  const body = req.body && req.body.body;
  if (!friendId || friendId === req.user.id || typeof body !== 'string' || !body.trim() || body.length > 2000) {
    return res.status(400).json({ message: 'Enter a message of 1 to 2000 characters.' });
  }
  if (!areFriends(req.user.id, friendId) || isBlocked(req.user.id, friendId)) {
    return res.status(403).json({ message: 'Messages are only available with an accepted, unblocked friend.' });
  }
  const result = db.prepare(`
    INSERT INTO messages (sender_id, receiver_id, body) VALUES (?, ?, ?)
  `).run(req.user.id, friendId, body.trim());
  const message = db.prepare(`
    SELECT id, sender_id, receiver_id, body, created_at FROM messages WHERE id = ?
  `).get(result.lastInsertRowid);
  res.status(201).json({ message });
});

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API route not found.' });
});
app.get('*', (req, res) => {
  if (path.extname(req.path)) {
    return res.status(404).send('Not found.');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

initDatabase();
app.listen(PORT, () => {
  console.log(`Sauti Yangu backend running on http://localhost:${PORT}`);
});
