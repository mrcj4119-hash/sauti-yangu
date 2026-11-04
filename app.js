const STORAGE_KEYS = {
  language: 'sautiYanguLanguage',
  colorTheme: 'sautiYanguColorTheme',
  largeText: 'sautiYanguLargeText',
  phrases: 'sautiYanguPhrases'
};

const translations = {
  en: {
    navCommunity: 'Community', navRequests: 'Requests', navNetwork: 'My network',
    navMessages: 'Messages', languageLabel: 'Language', largerText: 'Larger text',
    smallerText: 'Default text', logout: 'Log out',
    colorThemeLabel: 'Colors', colorThemeNote: 'Colors are personal. Choose what feels comfortable; color is never the only cue.',
    themeCalm: 'Calm blue', themeWarm: 'Warm light', themeContrast: 'High contrast',
    authCopy: 'A supportive space to communicate, connect, and grow at your own pace.',
    login: 'Log in', createAccount: 'Create account', email: 'Email',
    password: 'Password', fullName: 'Full name', passwordHelp: 'Use at least 10 characters.',
    supportArea: 'Support area', shortBio: 'Short bio (optional)',
    enterPlatform: 'Enter platform', createMyAccount: 'Create my account',
    friends: 'Friends', requests: 'Requests', supportFocus: 'Support focus',
    safeCommunication: 'Safe, respectful communication',
    supportDescription: 'Connect at your own pace. Only people you accept can message you.',
    privacySettings: 'Privacy settings', discoverable: 'Show my profile in community discovery',
    privacyExplanation: 'Your profile is hidden from discovery unless you choose to show it. Your bio is private unless you choose to share it.',
    shareBio: 'Show my bio to community members', savePrivacy: 'Save privacy settings',
    blockedPeople: 'Blocked people', communityHub: 'Community hub',
    findYourPeople: 'Find your people in Sauti Yangu', speakMessageLabel: 'Type a message to speak',
    messagePlaceholder: 'Type a message you want to speak...',
    voiceLabel: 'Voice', speedLabel: 'Speaking speed', speak: 'Speak',
    clear: 'Clear', quickPhrases: 'Quick phrases',
    addPhraseLabel: 'Add your own phrase', addPhrase: 'Add phrase',
    removePhrase: 'Remove', removePhraseAria: 'Remove phrase: {text}',
    peopleSimilar: 'People with similar support areas', friendRequests: 'Friend requests',
    myNetwork: 'My network', privateConversations: 'Private conversations',
    messagesTitle: 'Messages with accepted friends',
    messagePrivacy: 'Messages are only available to you and your accepted friend. Block someone to end the conversation.',
    moderationQueue: 'Safety reports', messagePlaceholderLabel: 'Your message',
    sendMessage: 'Send message', reportTitle: 'Report a community member',
    reportReason: 'Reason', reportDetails: 'Details (optional)', submitReport: 'Submit report',
    noPeople: 'No people to show yet.', noRequests: 'No pending requests.',
    noFriends: 'Your accepted friends will appear here.',
    noConversations: 'Add an accepted friend to start a private conversation.',
    connect: 'Connect', accept: 'Accept', decline: 'Decline', message: 'Message',
    report: 'Report', block: 'Block', unblock: 'Unblock', reportUser: 'Report {name}',
    blockConfirm: 'Block {name}? This ends the friendship and deletes the conversation.',
    noBlockedPeople: 'You have not blocked anyone.',
    noReports: 'There are no pending safety reports.',
    reviewed: 'Mark reviewed', dismiss: 'Dismiss', reportBy: 'Reported by {name}',
    reportAbout: 'About {name}', reportSubmitted: 'Thank you. Your report was sent to the safety team.',
    reportFailed: 'Unable to submit report.', reportReviewed: 'Report marked reviewed.',
    reportDismissed: 'Report dismissed.', messageSent: 'Message sent.',
    profileSaved: 'Privacy settings saved.', requestSent: 'Friend request sent.',
    requestAccepted: 'Friend request accepted.', requestDeclined: 'Friend request declined.',
    personBlocked: 'Person blocked. Their conversation was deleted.',
    personUnblocked: 'Person unblocked.', speechUnsupported: 'Speech output is not available in this browser.',
    nothingToSpeak: 'Type or choose a phrase first.', speechStarted: 'Speaking.',
    phraseAdded: 'Phrase added.', phraseRemoved: 'Phrase removed.',
    phraseExists: 'That phrase is already in your quick phrases.',
    loadFailed: 'Could not load your community. Please try again.',
    networkFailed: 'Connection problem. Check your internet connection and try again.',
    other: 'Something went wrong. Please try again.',
    reportHarassment: 'Harassment or bullying', reportInappropriate: 'Inappropriate content',
    reportImpersonation: 'Impersonation', reportOther: 'Other safety concern',
    spokenHelp: 'I need help', spokenHungry: 'I am hungry', spokenThirsty: 'I am thirsty',
    spokenPain: 'I am in pain', spokenFamily: 'Please call my family',
    spokenWater: 'I need water', spokenToilet: 'I need the bathroom',
    spokenSlow: 'Please speak slowly', spokenBreak: 'I need a quiet break',
    spokenThanks: 'Thank you', challengeAutism: 'Autism',
    challengeStammering: 'Stammering', challengeDelay: 'Speech delay',
    challengeAphasia: 'Aphasia', challengeCleft: 'Cleft palate',
    challengeAnxiety: 'Communication anxiety',
    closeConversation: 'Close conversation', closeReport: 'Close report form',
    appHome: 'Sauti Yangu home', mainNavigation: 'Main navigation',
    speechLanguage: 'Interface and speech language', speechVoice: 'Speech voice',
    speechSpeed: 'Speaking speed', defaultVoice: 'Best available on this device',
    speechVoiceNote: 'Speech is synthesized by your device. Voice quality and language support depend on the voices installed there.'
  },
  sw: {
    navCommunity: 'Jamii', navRequests: 'Maombi', navNetwork: 'Mtandao wangu',
    navMessages: 'Ujumbe', languageLabel: 'Lugha', largerText: 'Maandishi makubwa',
    smallerText: 'Maandishi ya kawaida', logout: 'Toka',
    colorThemeLabel: 'Rangi', colorThemeNote: 'Kila mtu hupendelea rangi tofauti. Chagua mwonekano unaokufaa; rangi si ishara pekee.',
    themeCalm: 'Bluu tulivu', themeWarm: 'Mwanga wa joto', themeContrast: 'Tofauti kubwa',
    authCopy: 'Mahali pa kuwasiliana, kuungana na kukua kwa kasi yako mwenyewe.',
    login: 'Ingia', createAccount: 'Fungua akaunti', email: 'Barua pepe',
    password: 'Nenosiri', fullName: 'Jina kamili', passwordHelp: 'Tumia angalau herufi 10.',
    supportArea: 'Eneo la usaidizi', shortBio: 'Maelezo mafupi (si lazima)',
    enterPlatform: 'Ingia kwenye jukwaa', createMyAccount: 'Fungua akaunti yangu',
    friends: 'Marafiki', requests: 'Maombi', supportFocus: 'Lengo la usaidizi',
    safeCommunication: 'Mawasiliano salama na yenye heshima',
    supportDescription: 'Ungana kwa kasi yako. Watu unaowakubali pekee wanaweza kukutumia ujumbe.',
    privacySettings: 'Mipangilio ya faragha', discoverable: 'Onyesha wasifu wangu kwenye jumuiya',
    privacyExplanation: 'Wasifu wako umefichwa isipokuwa uchague kuuonyesha. Maelezo yako ni ya faragha isipokuwa uchague kuyashiriki.',
    shareBio: 'Onyesha maelezo yangu kwa wanajumuiya', savePrivacy: 'Hifadhi mipangilio ya faragha',
    blockedPeople: 'Watu waliozuiwa', communityHub: 'Kitovu cha jumuiya',
    findYourPeople: 'Pata watu wako katika Sauti Yangu', speakMessageLabel: 'Andika ujumbe ili usomwe kwa sauti',
    messagePlaceholder: 'Andika ujumbe unaotaka usomwe kwa sauti...',
    voiceLabel: 'Sauti', speedLabel: 'Kasi ya kuzungumza', speak: 'Sema',
    clear: 'Futa', quickPhrases: 'Ujumbe wa haraka',
    addPhraseLabel: 'Ongeza ujumbe wako', addPhrase: 'Ongeza ujumbe',
    removePhrase: 'Ondoa', removePhraseAria: 'Ondoa ujumbe: {text}',
    peopleSimilar: 'Watu wenye maeneo ya usaidizi yanayofanana', friendRequests: 'Maombi ya urafiki',
    myNetwork: 'Mtandao wangu', privateConversations: 'Mazungumzo ya faragha',
    messagesTitle: 'Ujumbe na marafiki waliokubaliwa',
    messagePrivacy: 'Ujumbe unaonekana kwako na kwa rafiki uliyemkubali pekee. Mzuie mtu ili kusitisha mazungumzo.',
    moderationQueue: 'Taarifa za usalama', messagePlaceholderLabel: 'Ujumbe wako',
    sendMessage: 'Tuma ujumbe', reportTitle: 'Ripoti mwanajumuiya',
    reportReason: 'Sababu', reportDetails: 'Maelezo (si lazima)', submitReport: 'Tuma ripoti',
    noPeople: 'Hakuna watu wa kuonyesha kwa sasa.', noRequests: 'Hakuna maombi yanayosubiri.',
    noFriends: 'Marafiki uliokubali wataonekana hapa.',
    noConversations: 'Kubali ombi la urafiki ili kuanza mazungumzo ya faragha.',
    connect: 'Ungana', accept: 'Kubali', decline: 'Kataa', message: 'Ujumbe',
    report: 'Ripoti', block: 'Zuia', unblock: 'Ondoa kizuizi', reportUser: 'Ripoti {name}',
    blockConfirm: 'Mzuie {name}? Urafiki utaisha na mazungumzo yatafutwa.',
    noBlockedPeople: 'Hujamzuia mtu yeyote.',
    noReports: 'Hakuna ripoti za usalama zinazosubiri.',
    reviewed: 'Weka kuwa imekaguliwa', dismiss: 'Ondoa', reportBy: 'Ameripotiwa na {name}',
    reportAbout: 'Kuhusu {name}', reportSubmitted: 'Asante. Ripoti yako imetumwa kwa timu ya usalama.',
    reportFailed: 'Imeshindikana kutuma ripoti.', reportReviewed: 'Ripoti imekaguliwa.',
    reportDismissed: 'Ripoti imeondolewa.', messageSent: 'Ujumbe umetumwa.',
    profileSaved: 'Mipangilio ya faragha imehifadhiwa.', requestSent: 'Ombi la urafiki limetumwa.',
    requestAccepted: 'Ombi la urafiki limekubaliwa.', requestDeclined: 'Ombi la urafiki limekataliwa.',
    personBlocked: 'Mtu amezuiwa. Mazungumzo yake yamefutwa.',
    personUnblocked: 'Kizuizi kimeondolewa.', speechUnsupported: 'Kivinjari hiki hakiwezi kusoma maandishi kwa sauti.',
    nothingToSpeak: 'Andika au chagua ujumbe kwanza.', speechStarted: 'Inazungumza.',
    phraseAdded: 'Ujumbe umeongezwa.', phraseRemoved: 'Ujumbe umeondolewa.',
    phraseExists: 'Ujumbe huo tayari upo kwenye ujumbe wa haraka.',
    loadFailed: 'Imeshindikana kupakia jumuiya. Jaribu tena.',
    networkFailed: 'Tatizo la muunganisho. Kagua intaneti na ujaribu tena.',
    other: 'Hitilafu imetokea. Jaribu tena.',
    reportHarassment: 'Unyanyasaji au uonevu', reportInappropriate: 'Maudhui yasiyofaa',
    reportImpersonation: 'Kuiga mtu mwingine', reportOther: 'Tatizo jingine la usalama',
    spokenHelp: 'Ninahitaji msaada', spokenHungry: 'Nina njaa', spokenThirsty: 'Nina kiu',
    spokenPain: 'Nina maumivu', spokenFamily: 'Tafadhali piga simu kwa familia yangu',
    spokenWater: 'Nahitaji maji', spokenToilet: 'Nahitaji kwenda chooni',
    spokenSlow: 'Tafadhali zungumza polepole', spokenBreak: 'Nahitaji mapumziko mahali tulivu',
    spokenThanks: 'Asante', challengeAutism: 'Autizimu',
    challengeStammering: 'Kigugumizi', challengeDelay: 'Kuchelewa kuzungumza',
    challengeAphasia: 'Afazia', challengeCleft: 'Kaakaa iliyopasuka',
    challengeAnxiety: 'Wasiwasi wa mawasiliano',
    closeConversation: 'Funga mazungumzo', closeReport: 'Funga fomu ya ripoti',
    appHome: 'Mwanzo wa Sauti Yangu', mainNavigation: 'Urambazaji mkuu',
    speechLanguage: 'Lugha ya kiolesura na sauti', speechVoice: 'Sauti ya kusoma',
    speechSpeed: 'Kasi ya kuzungumza', defaultVoice: 'Sauti bora inayopatikana kwenye kifaa hiki',
    speechVoiceNote: 'Sauti hutengenezwa na kifaa chako. Ubora wa sauti na lugha hutegemea sauti zilizosakinishwa kwenye kifaa.'
  }
};

const phraseDefinitions = [
  { icon: 'help', key: 'spokenHelp', en: 'I need help', sw: 'Ninahitaji msaada' },
  { icon: 'restaurant', key: 'spokenHungry', en: 'I am hungry', sw: 'Nina njaa' },
  { icon: 'water_drop', key: 'spokenThirsty', en: 'I am thirsty', sw: 'Nina kiu' },
  { icon: 'medical_services', key: 'spokenPain', en: 'I am in pain', sw: 'Nina maumivu' },
  { icon: 'call', key: 'spokenFamily', en: 'Please call my family', sw: 'Tafadhali piga simu kwa familia yangu' },
  { icon: 'water', key: 'spokenWater', en: 'I need water', sw: 'Nahitaji maji' },
  { icon: 'wc', key: 'spokenToilet', en: 'I need the bathroom', sw: 'Nahitaji kwenda chooni' },
  { icon: 'slow_motion_video', key: 'spokenSlow', en: 'Please speak slowly', sw: 'Tafadhali zungumza polepole' },
  { icon: 'self_improvement', key: 'spokenBreak', en: 'I need a quiet break', sw: 'Nahitaji mapumziko mahali tulivu' },
  { icon: 'favorite', key: 'spokenThanks', en: 'Thank you', sw: 'Asante' }
];

const elements = {
  authView: document.getElementById('authView'),
  dashboardView: document.getElementById('dashboardView'),
  loginForm: document.getElementById('loginForm'),
  signupForm: document.getElementById('signupForm'),
  authError: document.getElementById('authError'),
  logoutBtn: document.getElementById('logoutBtn'),
  tabButtons: document.querySelectorAll('.tab-button'),
  userName: document.getElementById('userName'),
  userChallenge: document.getElementById('userChallenge'),
  userAvatar: document.getElementById('userAvatar'),
  totalFriends: document.getElementById('totalFriends'),
  pendingCount: document.getElementById('pendingCount'),
  discoverList: document.getElementById('discoverList'),
  requestList: document.getElementById('requestList'),
  friendList: document.getElementById('friendList'),
  conversationList: document.getElementById('conversationList'),
  discoverCount: document.getElementById('discoverCount'),
  requestCount: document.getElementById('requestCount'),
  friendCount: document.getElementById('friendCount'),
  quickPhraseList: document.getElementById('quickPhraseList'),
  voiceInput: document.getElementById('voiceInput'),
  voiceSpeakBtn: document.getElementById('voiceSpeakBtn'),
  voiceClearBtn: document.getElementById('voiceClearBtn'),
  voiceSelect: document.getElementById('voiceSelect'),
  speedRange: document.getElementById('speedRange'),
  speedValue: document.getElementById('speedValue'),
  speechStatus: document.getElementById('speechStatus'),
  appStatus: document.getElementById('appStatus'),
  privacyStatus: document.getElementById('privacyStatus'),
  blockedList: document.getElementById('blockedList'),
  moderationPanel: document.getElementById('moderationPanel'),
  reportList: document.getElementById('reportList'),
  conversationDialog: document.getElementById('conversationDialog'),
  conversationTitle: document.getElementById('conversationTitle'),
  conversationMessages: document.getElementById('conversationMessages'),
  messageForm: document.getElementById('messageForm'),
  messageInput: document.getElementById('messageInput'),
  messageStatus: document.getElementById('messageStatus'),
  reportDialog: document.getElementById('reportDialog'),
  reportForm: document.getElementById('reportForm'),
  reportStatus: document.getElementById('reportStatus')
};

const state = {
  currentUser: null,
  network: { discover: [], requests: [], friends: [] },
  language: localStorageRead(STORAGE_KEYS.language, 'en') === 'sw' ? 'sw' : 'en',
  colorTheme: ['calm', 'warm', 'contrast'].includes(localStorageRead(STORAGE_KEYS.colorTheme, 'calm'))
    ? localStorageRead(STORAGE_KEYS.colorTheme, 'calm')
    : 'calm',
  voices: [],
  conversationUser: null,
  conversationTimer: null
};

function t(key, replacements = {}) {
  let value = translations[state.language][key] || translations.en[key] || key;
  for (const [name, replacement] of Object.entries(replacements)) {
    value = value.replace(`{${name}}`, replacement);
  }
  return value;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function materialIcon(name) {
  return `<svg class="material-icon" aria-hidden="true" focusable="false"><use href="/assets/material-icons.svg#${name}"></use></svg>`;
}

function setInlineStatus(element, message, kind = 'info') {
  element.classList.remove('status-error', 'status-success');
  if (!message) {
    element.replaceChildren();
    return;
  }
  const icon = kind === 'success' ? 'check_circle' : kind === 'error' ? 'error' : 'info';
  element.innerHTML = `${materialIcon(icon)}<span>${escapeHtml(message)}</span>`;
  element.classList.toggle('status-error', kind === 'error');
  element.classList.toggle('status-success', kind === 'success');
}

function challengeLabel(value) {
  const keys = {
    Autism: 'challengeAutism',
    Stammering: 'challengeStammering',
    'Speech delay': 'challengeDelay',
    Aphasia: 'challengeAphasia',
    'Cleft palate': 'challengeCleft',
    'Communication anxiety': 'challengeAnxiety'
  };
  return t(keys[value] || value);
}

function reportReasonLabel(value) {
  const keys = {
    Harassment: 'reportHarassment',
    'Inappropriate content': 'reportInappropriate',
    Impersonation: 'reportImpersonation',
    Other: 'reportOther'
  };
  return t(keys[value] || value);
}

function showAuthError(message) {
  setInlineStatus(elements.authError, message, 'error');
  elements.authError.classList.toggle('has-message', Boolean(message));
}

function showAppStatus(message, isError = false) {
  setInlineStatus(elements.appStatus, message, isError ? 'error' : 'success');
  elements.appStatus.classList.toggle('has-message', Boolean(message));
}

function localStorageRead(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : stored;
  } catch {
    return fallback;
  }
}

function localStorageWrite(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

async function apiRequest(path, options = {}) {
  let response;
  try {
    response = await fetch(`/api${path}`, {
      credentials: 'same-origin',
      ...options,
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {})
      }
    });
  } catch {
    throw new Error(t('networkFailed'));
  }
  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }
  if (!response.ok) {
    throw new Error(data.message || t('other'));
  }
  return data;
}

function getInitials(name) {
  return String(name || 'U')
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function emptyState(message) {
  return `<div class="empty-state">${escapeHtml(message)}</div>`;
}

function personMarkup(person, actionMarkup = '') {
  const name = escapeHtml(person.name);
  const bio = person.bio ? `<p>${escapeHtml(person.bio)}</p>` : '';
  return `<article class="user-card">
    <div class="user-meta">
      <div class="avatar small" aria-hidden="true">${escapeHtml(getInitials(person.name))}</div>
      <div><strong>${name}</strong><span>${escapeHtml(challengeLabel(person.challenge || ''))}</span></div>
    </div>
    ${bio}
    ${actionMarkup}
  </article>`;
}

function renderNetwork(data) {
  state.network = data;
  const { user, discover = [], requests = [], friends = [] } = data;
  state.currentUser = user;
  elements.userName.textContent = user.name;
  elements.userChallenge.textContent = challengeLabel(user.challenge);
  elements.userAvatar.textContent = getInitials(user.name);
  elements.totalFriends.textContent = String(friends.length);
  elements.pendingCount.textContent = String(requests.length);
  elements.discoverCount.textContent = String(discover.length);
  elements.requestCount.textContent = String(requests.length);
  elements.friendCount.textContent = String(friends.length);
  document.getElementById('discoverableToggle').checked = user.discoverable;
  document.getElementById('shareBioToggle').checked = user.share_bio;
  document.getElementById('profileBio').value = user.bio || '';

  elements.discoverList.innerHTML = discover.length
    ? discover.map((person) => personMarkup(person, `<div class="inline-actions">
        <button class="connect-btn" type="button" data-action="request" data-user-id="${person.id}">${materialIcon('person_add')}<span>${escapeHtml(t('connect'))}</span></button>
        <button class="secondary-btn small" type="button" data-action="report" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('flag')}<span>${escapeHtml(t('report'))}</span></button>
        <button class="decline-btn" type="button" data-action="block" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('block')}<span>${escapeHtml(t('block'))}</span></button>
      </div>`)).join('')
    : emptyState(user.discoverable ? t('noPeople') : t('discoverable'));

  elements.requestList.innerHTML = requests.length
    ? requests.map((person) => personMarkup(person, `<div class="inline-actions">
        <button class="accept-btn" type="button" data-action="accept" data-user-id="${person.id}">${materialIcon('check_circle')}<span>${escapeHtml(t('accept'))}</span></button>
        <button class="decline-btn" type="button" data-action="decline" data-user-id="${person.id}">${materialIcon('close')}<span>${escapeHtml(t('decline'))}</span></button>
        <button class="secondary-btn small" type="button" data-action="report" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('flag')}<span>${escapeHtml(t('report'))}</span></button>
        <button class="decline-btn" type="button" data-action="block" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('block')}<span>${escapeHtml(t('block'))}</span></button>
      </div>`)).join('')
    : emptyState(t('noRequests'));

  elements.friendList.innerHTML = friends.length
    ? friends.map((person) => personMarkup(person, `<div class="inline-actions">
        <button class="primary-btn small" type="button" data-action="message" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('send')}<span>${escapeHtml(t('message'))}</span></button>
        <button class="secondary-btn small" type="button" data-action="report" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('flag')}<span>${escapeHtml(t('report'))}</span></button>
        <button class="decline-btn" type="button" data-action="block" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">${materialIcon('block')}<span>${escapeHtml(t('block'))}</span></button>
      </div>`)).join('')
    : emptyState(t('noFriends'));

  elements.conversationList.innerHTML = friends.length
    ? friends.map((person) => `<button class="conversation-link" type="button" data-action="message" data-user-id="${person.id}" data-user-name="${escapeHtml(person.name)}">
        <span class="avatar small" aria-hidden="true">${escapeHtml(getInitials(person.name))}</span>
        ${materialIcon('send')}<span>${escapeHtml(t('message'))}: ${escapeHtml(person.name)}</span>
      </button>`).join('')
    : emptyState(t('noConversations'));
  loadBlockedUsers();
  if (user.is_moderator) {
    elements.moderationPanel.classList.remove('hidden');
    loadReports();
  } else {
    elements.moderationPanel.classList.add('hidden');
  }
}

async function loadNetwork() {
  try {
    const data = await apiRequest('/network');
    renderNetwork(data);
    showAppStatus('');
  } catch (error) {
    showAppStatus(error.message || t('loadFailed'), true);
  }
}

function showDashboard(user) {
  state.currentUser = user;
  elements.authView.classList.add('hidden');
  elements.dashboardView.classList.remove('hidden');
  document.getElementById('mainNavigation').classList.remove('hidden');
  elements.logoutBtn.classList.remove('hidden');
  loadNetwork();
}

async function loginUser(email, password) {
  const data = await apiRequest('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  showAuthError('');
  showDashboard(data.user);
}

async function signupUser(formData) {
  const data = await apiRequest('/signup', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
  showAuthError('');
  showDashboard(data.user);
}

async function handlePersonAction(action, userId, button) {
  try {
    if (action === 'request') {
      await apiRequest('/friends/request', {
        method: 'POST',
        body: JSON.stringify({ receiverId: Number(userId) })
      });
      showAppStatus(t('requestSent'));
    } else if (action === 'accept' || action === 'decline') {
      await apiRequest(`/friends/${action}`, {
        method: 'POST',
        body: JSON.stringify({ senderId: Number(userId) })
      });
      showAppStatus(action === 'accept' ? t('requestAccepted') : t('requestDeclined'));
    } else if (action === 'report') {
      document.getElementById('reportUserId').value = userId;
      elements.reportDialog.querySelector('#reportTitle').textContent = t('reportUser', {
        name: button.dataset.userName || ''
      });
      setInlineStatus(elements.reportStatus, '');
      elements.reportDialog.showModal();
      return;
    } else if (action === 'block') {
      const name = button.dataset.userName || '';
      if (!window.confirm(t('blockConfirm', { name }))) return;
      await apiRequest('/blocks', {
        method: 'POST',
        body: JSON.stringify({ userId: Number(userId) })
      });
      showAppStatus(t('personBlocked'));
    } else if (action === 'message') {
      await openConversation(Number(userId), button.dataset.userName || '');
      return;
    }
    await loadNetwork();
  } catch (error) {
    showAppStatus(error.message || t('other'), true);
  }
}

function speakMessage(text = elements.voiceInput.value, language = state.language) {
  const message = text.trim();
  if (!message) {
    setInlineStatus(elements.speechStatus, t('nothingToSpeak'), 'error');
    return;
  }
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    setInlineStatus(elements.speechStatus, t('speechUnsupported'), 'error');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(message);
  const requestedLanguage = language === 'sw' ? 'sw' : 'en';
  utterance.rate = Number(elements.speedRange.value);
  const selectedVoice = elements.voiceSelect.value;
  const voice = state.voices.find((item) => `${item.name}|${item.lang}` === selectedVoice)
    || (selectedVoice ? null : getBestAvailableVoice(requestedLanguage));
  utterance.lang = voice ? voice.lang : requestedLanguage === 'sw' ? 'sw-KE' : 'en-US';
  utterance.voice = voice;
  utterance.onstart = () => { setInlineStatus(elements.speechStatus, t('speechStarted'), 'success'); };
  utterance.onerror = (event) => {
    setInlineStatus(elements.speechStatus, event.error === 'canceled' ? '' : t('speechUnsupported'), 'error');
  };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function loadSavedPhrases() {
  try {
    const phrases = JSON.parse(localStorageRead(STORAGE_KEYS.phrases, '[]'));
    return Array.isArray(phrases)
      ? phrases.filter((phrase) => phrase && typeof phrase.text === 'string' && ['en', 'sw'].includes(phrase.lang))
      : [];
  } catch {
    return [];
  }
}

function renderPhrases() {
  const builtIn = phraseDefinitions.map((phrase) => ({
    icon: phrase.icon,
    text: t(phrase.key),
    language: state.language
  }));
  const custom = loadSavedPhrases().map((phrase) => ({
    icon: 'add',
    text: phrase.text,
    language: phrase.lang
  }));
  elements.quickPhraseList.innerHTML = [
    ...builtIn.map((phrase) =>
      `<button class="quick-btn" type="button" data-action="speak-phrase" data-phrase="${escapeHtml(phrase.text)}" data-language="${phrase.language}">
        ${materialIcon(phrase.icon)}<span>${escapeHtml(phrase.text)}</span>
      </button>`
    ),
    ...custom.map((phrase) =>
      `<div class="custom-phrase-card">
        <button class="quick-btn" type="button" data-action="speak-phrase" data-phrase="${escapeHtml(phrase.text)}" data-language="${phrase.language}">
          ${materialIcon(phrase.icon)}<span>${escapeHtml(phrase.text)}</span>
        </button>
        <button class="phrase-remove" type="button" data-action="remove-phrase" data-phrase="${escapeHtml(phrase.text)}" data-language="${phrase.language}" aria-label="${escapeHtml(t('removePhraseAria', { text: phrase.text }))}">${materialIcon('delete')}<span>${escapeHtml(t('removePhrase'))}</span></button>
      </div>`
    )
  ].join('');
}

function addCustomPhrase(event) {
  event.preventDefault();
  const input = document.getElementById('customPhraseInput');
  const text = input.value.trim();
  if (!text) return;
  const phrases = loadSavedPhrases();
  if (phrases.some((phrase) => phrase.text.toLocaleLowerCase() === text.toLocaleLowerCase() && phrase.lang === state.language)) {
    showAppStatus(t('phraseExists'), true);
    return;
  }
  phrases.push({ text, lang: state.language });
  if (!localStorageWrite(STORAGE_KEYS.phrases, JSON.stringify(phrases))) {
    showAppStatus(t('other'), true);
    return;
  }
  input.value = '';
  renderPhrases();
  showAppStatus(t('phraseAdded'));
}

function removeCustomPhrase(text, language) {
  const phrases = loadSavedPhrases().filter((phrase) => phrase.text !== text || phrase.lang !== language);
  if (!localStorageWrite(STORAGE_KEYS.phrases, JSON.stringify(phrases))) {
    showAppStatus(t('other'), true);
    return;
  }
  renderPhrases();
  showAppStatus(t('phraseRemoved'));
}

function updateVoices() {
  if (!('speechSynthesis' in window)) return;
  const previous = elements.voiceSelect.value;
  state.voices = window.speechSynthesis.getVoices();
  const preferredLanguage = state.language === 'sw' ? 'sw' : 'en';
  const matchingVoices = state.voices.filter((voice) => voice.lang.toLowerCase().startsWith(preferredLanguage));
  const voices = matchingVoices.length ? matchingVoices : state.voices;
  elements.voiceSelect.replaceChildren();
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = t('defaultVoice');
  elements.voiceSelect.append(defaultOption);
  const orderedVoices = [...voices].sort((first, second) =>
    scoreVoice(second, preferredLanguage) - scoreVoice(first, preferredLanguage)
  );
  for (const voice of orderedVoices) {
    const option = document.createElement('option');
    option.value = `${voice.name}|${voice.lang}`;
    option.textContent = `${voice.name} (${voice.lang})`;
    elements.voiceSelect.append(option);
  }
  if (previous && Array.from(elements.voiceSelect.options).some((option) => option.value === previous)) {
    elements.voiceSelect.value = previous;
  }
}

function scoreVoice(voice, preferredLanguage) {
  if (!voice.lang.toLowerCase().startsWith(preferredLanguage)) return -1;
  const name = voice.name.toLowerCase();
  return (/\b(natural|enhanced|premium)\b/.test(name) ? 20 : 0)
    + (voice.localService ? 5 : 0)
    + (voice.default ? 1 : 0);
}

function getBestAvailableVoice(language) {
  return state.voices
    .filter((voice) => voice.lang.toLowerCase().startsWith(language))
    .sort((first, second) => scoreVoice(second, language) - scoreVoice(first, language))[0] || null;
}

function applyLanguage(language) {
  state.language = language === 'sw' ? 'sw' : 'en';
  document.documentElement.lang = state.language;
  document.getElementById('uiLanguage').value = state.language;
  document.getElementById('colorTheme').value = state.colorTheme;
  const languageSaved = localStorageWrite(STORAGE_KEYS.language, state.language);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  showAuthError('');
  showAppStatus('');
  setInlineStatus(elements.privacyStatus, '');
  setInlineStatus(elements.speechStatus, '');
  setInlineStatus(elements.messageStatus, '');
  setInlineStatus(elements.reportStatus, '');
  if (!languageSaved) showAppStatus(t('other'), true);
  const fontButton = document.getElementById('fontSizeBtn');
  fontButton.textContent = document.body.classList.contains('large-text') ? t('smallerText') : t('largerText');
  renderPhrases();
  updateVoices();
  if (state.network.user) renderNetwork(state.network);
}

function applyColorTheme(theme) {
  const allowedThemes = new Set(['calm', 'warm', 'contrast']);
  state.colorTheme = allowedThemes.has(theme) ? theme : 'calm';
  document.documentElement.dataset.colorTheme = state.colorTheme;
  document.documentElement.style.colorScheme = state.colorTheme === 'contrast' ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]').content =
    state.colorTheme === 'contrast' ? '#050d18' : state.colorTheme === 'warm' ? '#fffdf8' : '#f1f5f4';
  document.getElementById('colorTheme').value = state.colorTheme;
  if (!localStorageWrite(STORAGE_KEYS.colorTheme, state.colorTheme)) {
    showAppStatus(t('other'), true);
  }
}

async function saveProfile() {
  try {
    await apiRequest('/profile', {
      method: 'PATCH',
      body: JSON.stringify({
        discoverable: document.getElementById('discoverableToggle').checked,
        share_bio: document.getElementById('shareBioToggle').checked,
        bio: document.getElementById('profileBio').value
      })
    });
    setInlineStatus(elements.privacyStatus, t('profileSaved'), 'success');
    await loadNetwork();
  } catch (error) {
    setInlineStatus(elements.privacyStatus, error.message || t('other'), 'error');
  }
}

async function loadBlockedUsers() {
  try {
    const { users } = await apiRequest('/blocks');
    elements.blockedList.innerHTML = users.length
      ? users.map((person) => `<li><span>${escapeHtml(person.name)}</span><button class="secondary-btn small" type="button" data-action="unblock" data-user-id="${person.id}">${materialIcon('lock_open')}<span>${escapeHtml(t('unblock'))}</span></button></li>`).join('')
      : `<li>${escapeHtml(t('noBlockedPeople'))}</li>`;
  } catch (error) {
    elements.blockedList.textContent = error.message || t('other');
  }
}

async function unblockUser(userId) {
  try {
    await apiRequest(`/blocks/${userId}`, { method: 'DELETE' });
    showAppStatus(t('personUnblocked'));
    await loadBlockedUsers();
    await loadNetwork();
  } catch (error) {
    showAppStatus(error.message || t('other'), true);
  }
}

async function loadReports() {
  try {
    const { reports } = await apiRequest('/moderation/reports');
    elements.reportList.innerHTML = reports.length
      ? reports.map((report) => `<article class="user-card">
          <strong>${escapeHtml(t('reportAbout', { name: report.reported_name }))}</strong>
          <p>${escapeHtml(t('reportBy', { name: report.reporter_name }))}</p>
          <p>${escapeHtml(reportReasonLabel(report.reason))}${report.details ? `: ${escapeHtml(report.details)}` : ''}</p>
          <div class="inline-actions">
            <button class="accept-btn" type="button" data-action="review-report" data-report-id="${report.id}" data-status="reviewed">${materialIcon('check_circle')}<span>${escapeHtml(t('reviewed'))}</span></button>
            <button class="decline-btn" type="button" data-action="review-report" data-report-id="${report.id}" data-status="dismissed">${materialIcon('close')}<span>${escapeHtml(t('dismiss'))}</span></button>
          </div>
        </article>`).join('')
      : emptyState(t('noReports'));
  } catch (error) {
    elements.reportList.textContent = error.message || t('other');
  }
}

async function reviewReport(reportId, status) {
  try {
    await apiRequest(`/moderation/reports/${reportId}`, {
      method: 'POST',
      body: JSON.stringify({ status })
    });
    showAppStatus(status === 'reviewed' ? t('reportReviewed') : t('reportDismissed'));
    await loadReports();
  } catch (error) {
    showAppStatus(error.message || t('other'), true);
  }
}

async function openConversation(friendId, friendName) {
  state.conversationUser = { id: friendId, name: friendName };
  elements.conversationTitle.textContent = `${t('message')}: ${friendName}`;
  setInlineStatus(elements.messageStatus, '');
  await refreshConversation();
  if (!elements.conversationDialog.open) {
    elements.conversationDialog.showModal();
    state.conversationTimer = window.setInterval(refreshConversation, 15000);
  }
}

async function refreshConversation() {
  if (!state.conversationUser) return;
  try {
    const { messages } = await apiRequest(`/messages/${state.conversationUser.id}`);
    elements.conversationMessages.innerHTML = messages.length
      ? messages.map((message) => `<article class="message-bubble${message.sender_id === state.currentUser.id ? ' mine' : ''}">
          <p>${escapeHtml(message.body)}</p><time>${escapeHtml(message.created_at)}</time>
        </article>`).join('')
      : emptyState(state.language === 'sw' ? 'Hakuna ujumbe bado. Anza mazungumzo.' : 'No messages yet. Start the conversation.');
    elements.conversationMessages.scrollTop = elements.conversationMessages.scrollHeight;
  } catch (error) {
    setInlineStatus(elements.messageStatus, error.message || t('other'), 'error');
  }
}

async function sendMessage(event) {
  event.preventDefault();
  if (!state.conversationUser) return;
  const body = elements.messageInput.value.trim();
  if (!body) return;
  try {
    await apiRequest(`/messages/${state.conversationUser.id}`, {
      method: 'POST',
      body: JSON.stringify({ body })
    });
    elements.messageInput.value = '';
    setInlineStatus(elements.messageStatus, t('messageSent'), 'success');
    await refreshConversation();
  } catch (error) {
    setInlineStatus(elements.messageStatus, error.message || t('other'), 'error');
  }
}

async function submitReport(event) {
  event.preventDefault();
  try {
    await apiRequest('/reports', {
      method: 'POST',
      body: JSON.stringify({
        userId: Number(document.getElementById('reportUserId').value),
        reason: document.getElementById('reportReason').value,
        details: document.getElementById('reportDetails').value
      })
    });
    setInlineStatus(elements.reportStatus, t('reportSubmitted'), 'success');
    elements.reportForm.reset();
    window.setTimeout(() => elements.reportDialog.close(), 1200);
  } catch (error) {
    setInlineStatus(elements.reportStatus, error.message || t('reportFailed'), 'error');
  }
}

function toggleAuthTab(tabName) {
  const loginVisible = tabName === 'login';
  elements.loginForm.classList.toggle('hidden', !loginVisible);
  elements.signupForm.classList.toggle('hidden', loginVisible);
  elements.tabButtons.forEach((button) => {
    const active = button.dataset.authTab === tabName;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  showAuthError('');
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  loginUser(email, password).catch((error) => showAuthError(error.message || t('other')));
}

function handleSignupSubmit(event) {
  event.preventDefault();
  const payload = {
    name: document.getElementById('signupName').value.trim(),
    email: document.getElementById('signupEmail').value.trim(),
    password: document.getElementById('signupPassword').value,
    challenge: document.getElementById('signupChallenge').value,
    bio: document.getElementById('signupBio').value.trim()
  };
  signupUser(payload).catch((error) => showAuthError(error.message || t('other')));
}

async function logout() {
  try {
    await apiRequest('/logout', { method: 'POST' });
  } catch (error) {
    showAppStatus(error.message || t('other'), true);
    return;
  }
  if (elements.conversationDialog.open) elements.conversationDialog.close();
  state.currentUser = null;
  state.network = { discover: [], requests: [], friends: [] };
  elements.dashboardView.classList.add('hidden');
  elements.authView.classList.remove('hidden');
  document.getElementById('mainNavigation').classList.add('hidden');
  elements.logoutBtn.classList.add('hidden');
  elements.loginForm.reset();
  elements.signupForm.reset();
  showAuthError('');
}

function handleDelegatedAction(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const { action, userId, phrase, language, reportId, status } = button.dataset;
  if (action === 'speak-phrase') {
    elements.voiceInput.value = phrase;
    speakMessage(phrase, language);
  } else if (action === 'remove-phrase') {
    removeCustomPhrase(phrase, language);
  } else if (action === 'unblock') {
    unblockUser(userId);
  } else if (action === 'review-report') {
    reviewReport(reportId, status);
  } else {
    handlePersonAction(action, userId, button);
  }
}

function initializeSpeech() {
  elements.speedRange.addEventListener('input', () => {
    elements.speedValue.value = `${Number(elements.speedRange.value).toFixed(2).replace(/0$/, '')}x`;
    elements.speedValue.textContent = elements.speedValue.value;
  });
  elements.voiceSpeakBtn.addEventListener('click', () => speakMessage());
  elements.voiceClearBtn.addEventListener('click', () => {
    elements.voiceInput.value = '';
    setInlineStatus(elements.speechStatus, '');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  });
  if ('speechSynthesis' in window) {
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
    updateVoices();
  }
}

function init() {
  const fontIsLarge = localStorageRead(STORAGE_KEYS.largeText, 'false') === 'true';
  document.body.classList.toggle('large-text', fontIsLarge);
  document.getElementById('fontSizeBtn').setAttribute('aria-pressed', String(fontIsLarge));
  document.getElementById('uiLanguage').addEventListener('change', (event) => applyLanguage(event.target.value));
  document.getElementById('colorTheme').addEventListener('change', (event) => applyColorTheme(event.target.value));
  document.getElementById('fontSizeBtn').addEventListener('click', (event) => {
    const enabled = document.body.classList.toggle('large-text');
    event.currentTarget.setAttribute('aria-pressed', String(enabled));
    event.currentTarget.textContent = t(enabled ? 'smallerText' : 'largerText');
    if (!localStorageWrite(STORAGE_KEYS.largeText, String(enabled))) {
      showAppStatus(t('other'), true);
    }
  });
  applyLanguage(state.language);
  applyColorTheme(state.colorTheme);
  elements.tabButtons.forEach((button) => {
    button.addEventListener('click', () => toggleAuthTab(button.dataset.authTab));
  });
  elements.loginForm.addEventListener('submit', handleLoginSubmit);
  elements.signupForm.addEventListener('submit', handleSignupSubmit);
  elements.logoutBtn.addEventListener('click', logout);
  elements.customPhraseForm = document.getElementById('customPhraseForm');
  elements.customPhraseForm.addEventListener('submit', addCustomPhrase);
  document.getElementById('saveProfileBtn').addEventListener('click', saveProfile);
  document.getElementById('discoverList').addEventListener('click', handleDelegatedAction);
  document.getElementById('requestList').addEventListener('click', handleDelegatedAction);
  document.getElementById('friendList').addEventListener('click', handleDelegatedAction);
  elements.conversationList.addEventListener('click', handleDelegatedAction);
  elements.quickPhraseList.addEventListener('click', handleDelegatedAction);
  elements.blockedList.addEventListener('click', handleDelegatedAction);
  elements.reportList.addEventListener('click', handleDelegatedAction);
  elements.reportForm.addEventListener('submit', submitReport);
  elements.messageForm.addEventListener('submit', sendMessage);
  elements.conversationDialog.addEventListener('close', () => {
    state.conversationUser = null;
    window.clearInterval(state.conversationTimer);
    state.conversationTimer = null;
    elements.messageInput.value = '';
  });
  initializeSpeech();
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((error) => {
        console.error('Service worker registration failed:', error);
      });
    });
  }
  apiRequest('/me')
    .then(({ user }) => { if (user) showDashboard(user); })
    .catch((error) => showAuthError(error.message || t('other')));
}

init();
