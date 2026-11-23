/**
 * ==========================================================================
 * Persona 3 Reload - Portfolio Interaction & Animation Engine
 * Authentic Atlus Aesthetic (60fps, Zero-Latency Audio, Zero Bugs)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Data Structures & Configuration
// --------------------------------------------------------------------------
const colors = ["fill-button-1", "fill-button-2", "fill-button-3"];

const options = [
  {
    name: "PROJECT",
    description: "View Featured Works & Projects",
    rotation: -20,
    zIndex: 1,
    offsetX: -40,
    offsetY: 25,
    fontSize: "5.15rem",
    bannerScaleX: 1.07,
    bannerScaleY: 3.35,
    tag: "PORTFOLIO WORKS",
    summary: "Featured design works, interactive browser games & web applications",
    cards: [
      {
        title: "Creative Design Project",
        desc: "Bold visual identities, banners, key visuals, and promotional assets built with Canva & Figma."
      },
      {
        title: "Snake Game",
        desc: "Classic snake-eats-fruit browser game with customizable skins, maps, fruits, and local high scores."
      },
      {
        title: "StoneBound",
        desc: "Retro 2D side-scrolling browser platformer built with TypeScript, Phaser 3, Vite, and Firebase."
      },
      {
        title: "SkyBean Adventure & PRD Studio",
        desc: "3D tropical ocean platformer in Three.js and AI-powered PRD/GDD architecture studio in React."
      }
    ]
  },
  {
    name: "CERTIFICATE",
    description: "View Verified Certificates & Credentials",
    rotation: -12,
    zIndex: 2,
    offsetX: -65,
    offsetY: 30,
    fontSize: "3.75rem",
    bannerScaleX: 0.72,
    bannerScaleY: 3.05,
    tag: "CERTIFICATIONS",
    summary: "Continuous learning documented across Data Science, SQL, Python & Finance",
    cards: [
      {
        title: "Belajar Dasar Data Science",
        desc: "Dicoding Indonesia (2026) — Core data science workflow, analysis, and foundational concepts."
      },
      {
        title: "Belajar Dasar SQL",
        desc: "Dicoding Indonesia (2026) — Relational databases and Structured Query Language fundamentals."
      },
      {
        title: "Memulai Pemrograman dengan Python",
        desc: "Dicoding Indonesia (2026) — Python programming fundamentals for data and problem solving."
      },
      {
        title: "Personal Development & Financial Literacy",
        desc: "Dicoding Indonesia (2026) — Self-development strategy and introduction to financial literacy."
      }
    ]
  },
  {
    name: "ABOUT",
    description: "Analyst Profile, Education & Experience",
    rotation: -4,
    zIndex: 3,
    offsetX: -80,
    offsetY: 35,
    fontSize: "4.85rem",
    bannerScaleX: 1.02,
    bannerScaleY: 3.25,
    tag: "PROFILE & JOURNEY",
    summary: "Fatkhul Barri — Mathematics student at ITS interested in data science, analytics & creative work",
    cards: [
      {
        title: "Academic Background",
        desc: "Bachelor of Mathematics at Institut Teknologi Sepuluh Nopember (ITS), previously SMAN 3 Tuban."
      },
      {
        title: "Data & Market Curiosity",
        desc: "Inspired by Indonesian stock market analysis—turning raw data patterns into clear, actionable insights."
      },
      {
        title: "Experience & Toolkit",
        desc: "Creative Media, Event & IT Staff roles backed by SQL, Python, Java, Excel, Figma, and Canva."
      }
    ]
  },
  {
    name: "CONTACT",
    description: "Connect via Email & Social Channels",
    rotation: 5,
    zIndex: 4,
    offsetX: -85,
    offsetY: 40,
    fontSize: "4.65rem",
    bannerScaleX: 1.04,
    bannerScaleY: 3.2,
    tag: "COMMUNICATION CHANNELS",
    summary: "Open to data internships, junior analyst roles, freelance analysis & collaboration",
    cards: [
      {
        title: "Direct Mail & WhatsApp",
        desc: "fatkhulbarri15@gmail.com · +62 851-9832-3402 (Surabaya, East Java, Indonesia)"
      },
      {
        title: "GitHub, Kaggle & LinkedIn",
        desc: "github.com/FatkhulB · kaggle.com/flbarri · linkedin.com/in/fatkhulbarrii"
      }
    ]
  }
];

const slinkData = [
  {
    numeral: "I",
    title: "CREATIVE DESIGN PROJECT",
    fullTitle: "CREATIVE DESIGN PROJECT",
    subtitle: "Design Project · 2025 · Canva, Figma",
    type: "Design Project",
    year: "2025",
    tools: ["Canva", "Figma"],
    desc: "A collection of creative design work defined by bold compositions, dynamic layouts, and vibrant palettes. Blends energetic visuals with clean structure to create eye-catching banners, key visuals, and promotional assets.",
    image: "assets/projects/1.jpg",
    url: "https://canva.link/cng1zsi4jsuyj54",
    linkLabel: "Open Project"
  },
  {
    numeral: "II",
    title: "SNAKE GAME",
    fullTitle: "SNAKE GAME",
    subtitle: "Game · 2025 · HTML, CSS, JavaScript",
    type: "Game",
    year: "2025",
    tools: ["HTML", "CSS", "JavaScript"],
    desc: "A classic snake-eats-fruit game with a fresh twist. Customize snake skins, maps, and fruits, chase best scores saved locally, and enjoy vibrant eat animations with smooth responsive controls.",
    image: "assets/projects/2.jpg",
    url: "https://snakegames-alpha.vercel.app/",
    linkLabel: "Play Game"
  },
  {
    numeral: "III",
    title: "STONEBOUND",
    fullTitle: "STONEBOUND — THE SWORD THAT HATED HEROES",
    subtitle: "Game · 2026 · TypeScript, Phaser 3, Vite",
    type: "Game",
    year: "2026",
    tools: ["TypeScript", "Phaser 3", "Vite", "Firebase", "GitHub Actions", "Vitest"],
    desc: "A retro 2D side-scrolling browser platformer. Play as Pip or Pipa carrying Veyr, a legendary sword that refuses to be drawn. Explore The Buried Road, solve puzzles, telegraph enemy attacks, and defeat the boss.",
    image: "assets/projects/3.jpg",
    url: "https://fatkhulb.github.io/StoneBound/",
    linkLabel: "Play Game"
  },
  {
    numeral: "IV",
    title: "SKYBEAN ADVENTURE",
    fullTitle: "SKYBEAN ADVENTURE — TROPICAL OCEAN 3D PLATFORMER",
    subtitle: "Game · 2026 · Three.js, JS, Web Audio API",
    type: "Game",
    year: "2026",
    tools: ["Three.js", "JavaScript", "HTML5", "Tailwind CSS", "Web Audio API"],
    desc: "A high-performance 3D platformer set across tropical archipelagos inspired by Super Mario Odyssey. Explore 6 expansive themed islands with dynamic ocean waves, dodge obstacles, and master 12 heroes with unique skills.",
    image: "assets/projects/4.jpg",
    url: "https://fatkhulb.github.io/SkyBean/",
    linkLabel: "Play Game"
  },
  {
    numeral: "V",
    title: "PRD STUDIO",
    fullTitle: "PRD STUDIO",
    subtitle: "Design Project · 2026 · React, Tailwind, PostgreSQL",
    type: "Design Project",
    year: "2026",
    tools: ["React", "Tailwind CSS", "SVG", "Mermaid", "PostgreSQL"],
    desc: "A modern AI-powered platform for architecting structured PRDs, Game Design Documents (GDD), interactive SVG & Mermaid wireframes, AI coding assistant prompts, and PostgreSQL schemas.",
    image: "assets/projects/5.jpg",
    url: "https://fatkhulb.github.io/PRD-Studio/",
    linkLabel: "Open Project"
  }
];

const certTabsList = [
  { id: "all", code: "01", label: "ALL" },
  { id: "data", code: "02", label: "DATA SCIENCE" },
  { id: "sql", code: "03", label: "SQL" },
  { id: "python", code: "04", label: "PYTHON" },
  { id: "other", code: "05", label: "OTHER" }
];

const certItemsData = [
  {
    id: "cert-1",
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tag: "data",
    tagLabel: "DATA SCIENCE",
    image: "assets/certs/1.jpg",
    link: "https://dicoding.com/certificates/KEXLQRVKRPG2"
  },
  {
    id: "cert-2",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tag: "sql",
    tagLabel: "SQL",
    image: "assets/certs/2.jpg",
    link: "https://dicoding.com/certificates/98XW0M9M0XM3"
  },
  {
    id: "cert-3",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tag: "python",
    tagLabel: "PYTHON",
    image: "assets/certs/3.jpg",
    link: "https://dicoding.com/certificates/KEXLQRK5RPG2"
  },
  {
    id: "cert-4",
    title: "Belajar Strategi Pengembangan Diri",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tag: "soft",
    tagLabel: "SOFT SKILLS",
    image: "assets/certs/4.jpg",
    link: "https://dicoding.com/certificates/QLZ99LJL9Z5D"
  },
  {
    id: "cert-5",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tag: "finance",
    tagLabel: "FINANCE",
    image: "assets/certs/5.jpg",
    link: "https://dicoding.com/certificates/KEXLQKOVYPG2"
  },
  {
    id: "cert-6",
    title: "Mini Bootcamp : Introduction to Data Analytics Batch 14",
    issuer: "DQLab",
    year: "2026",
    tag: "data",
    tagLabel: "DATA SCIENCE",
    image: "assets/certs/dq1.jpg",
    link: "https://academy.dqlab.id/Certificate_check/result/DQLABMBINTLC14UPEROC"
  },
  {
    id: "cert-7",
    title: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: "2026",
    tag: "python",
    tagLabel: "PYTHON",
    image: "assets/certs/dq2.jpg",
    link: "https://academy.dqlab.id/Certificate_check/result/DQLABINTP1IKJBUK"
  },
  {
    id: "cert-8",
    title: "Study Case Bootcamp Data Analyst with SQL & Python",
    issuer: "DQLab",
    year: "2026",
    tag: "sql",
    tagLabel: "SQL",
    image: "assets/certs/dq3.jpg",
    link: "https://academy.dqlab.id/Certificate_check/result/DQLABMB14SPKTKSDU"
  },
  {
    id: "cert-9",
    title: "Study Case Bootcamp Data Analyst with Excel",
    issuer: "DQLab",
    year: "2026",
    tag: "other",
    tagLabel: "EXCEL",
    image: "assets/certs/dq4.jpg",
    link: "https://academy.dqlab.id/Certificate_check/result/DQLABMB14EXCTCKBQM"
  },
  {
    id: "cert-10",
    title: "Study Case Bootcamp Machine Learning & AI for Beginner",
    issuer: "DQLab",
    year: "2026",
    tag: "data",
    tagLabel: "MACHINE LEARNING",
    image: "assets/certs/dq5.jpg",
    link: "https://academy.dqlab.id/Certificate_check/result/DQLABMB14MAIUMRHGL"
  }
];

// --------------------------------------------------------------------------
// 2. Global State & DOM Element Cache
// --------------------------------------------------------------------------
let isLoaded = false;
let isStarted = false;
let selectedIndex = 0;
let isModalOpen = false;
let isProjectPageOpen = false;
let selectedSlinkIndex = 0;
let isSkillPageOpen = false;
let currentSkillTab = "all";
let isAboutPageOpen = false;
let currentAboutTab = "profile";
let isContactPageOpen = false;
let selectedContactIndex = 0;
let isWavyTransitionRunning = false;

// DOM Elements: Main Menu & Background
const bgVideoIntro = document.getElementById("background-video-intro") || document.getElementById("background-video");
const bgVideoLoop = document.getElementById("background-video-loop");
const optionsList = document.getElementById("options-list");
const sideNumber = document.getElementById("side-number");
const wavyTransitionPortal = document.getElementById("wavy-transition-portal");

// DOM Elements: Modal
const portfolioModal = document.getElementById("portfolio-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalCardsContainer = document.getElementById("modal-cards-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalFooterCloseBtn = document.getElementById("modal-footer-close-btn");

// DOM Elements: Project Screen (S.Link)
const projectPage = document.getElementById("project-page");
const slinkBgVideo = document.getElementById("slink-bg-video");
const slinkCardsContainer = document.getElementById("slink-cards-container");
const slinkConfirmBtn = document.getElementById("slink-confirm-btn");
const slinkBackBtn = document.getElementById("slink-back-btn");
const slinkPreviewImg = document.getElementById("slink-preview-img");
const slinkPreviewBadge = document.getElementById("slink-preview-badge");
const slinkPreviewTitle = document.getElementById("slink-preview-title");
const slinkPreviewDesc = document.getElementById("slink-preview-desc");
const slinkPreviewTools = document.getElementById("slink-preview-tools");
const slinkPreviewOpenBtn = document.getElementById("slink-preview-open-btn");

// DOM Elements: Skill Screen
const skillPage = document.getElementById("skill-page");
const skillBgVideo = document.getElementById("skill-bg-video");
const skillHeaderDiv = document.getElementById("skill-header-div");
const skillTabsNav = document.getElementById("skill-tabs-nav");
const p3rSkillsContainer = document.getElementById("p3r-skills-container");
const skillBackBtn = document.getElementById("skill-back-btn");
const skillTabPrevBtn = document.getElementById("skill-tab-prev-btn");
const skillTabNextBtn = document.getElementById("skill-tab-next-btn");

// DOM Elements: About Screen
const aboutPage = document.getElementById("about-page");
const aboutBgVideo = document.getElementById("about-bg-video");
const aboutHeaderDiv = document.getElementById("about-header-div");
const aboutBackBtn = document.getElementById("about-back-btn");
const aboutTabs = document.querySelectorAll(".p3r-about-tab");
const aboutPanels = document.querySelectorAll(".p3r-about-panel");

// DOM Elements: Contact Screen
const contactPage = document.getElementById("contact-page");
const contactBgVideo = document.getElementById("contact-bg-video");
const contactBackBtn = document.getElementById("contact-back-btn");
const contactMailRows = document.querySelectorAll(".p3r-mail-row");

// DOM Elements: Loading Screen & Opening Screen
const loadingScreen = document.getElementById("loading-screen");
const loadingIndicatorWrap = document.getElementById("loading-indicator-wrap");
const loadingStatusText = document.getElementById("loading-status-text");
const loadingStateText = document.getElementById("loading-state-text");
const openingScreen = document.getElementById("opening-screen");
const openingVideo = document.getElementById("opening-video");
const bgmLobbyEl = document.getElementById("bgm-lobby-el");
const toggleBgmBtn = document.getElementById("toggle-bgm-btn");
const toggleSfxBtn = document.getElementById("toggle-sfx-btn");

// --------------------------------------------------------------------------
// 3. Low-Latency Audio Engine (Matched to Folder 2 AudioProvider)
// --------------------------------------------------------------------------
let isBgmMuted = false;
let isSfxMuted = false;
let audioCtx = null;
let sfxAudioBuffer = null;
let confirmAudioBuffer = null;
let closeMenuAudioBuffer = null;
let openDetailAudioBuffer = null;
let closeDetailAudioBuffer = null;

const sfxAudioPool = [];
const confirmAudioPool = [];
const closeMenuAudioPool = [];
const openDetailAudioPool = [];
const closeDetailAudioPool = [];
let sfxPoolIndex = 0;
let confirmPoolIndex = 0;
let closeMenuPoolIndex = 0;
let openDetailPoolIndex = 0;
let closeDetailPoolIndex = 0;

if (bgmLobbyEl) {
  bgmLobbyEl.volume = 0.35;
  bgmLobbyEl.loop = true;
}

let bgmAutoplayArmed = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass({ latencyHint: "interactive" });
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function ensureBGM() {
  if (!isStarted || !bgmLobbyEl || isBgmMuted) return;
  bgmLobbyEl.loop = true;
  if (bgmLobbyEl.paused) {
    bgmLobbyEl.muted = false;
    bgmLobbyEl.volume = 0.35;
    const p = bgmLobbyEl.play();
    if (p !== undefined) {
      p.then(() => {
        if (window.p3rMusicPlayer && typeof window.p3rMusicPlayer.updateUI === "function") {
          window.p3rMusicPlayer.updateUI();
        }
      }).catch(() => {
        // Autoplay policy prevented immediate unmuted playback without prior user gesture.
        // Start muted playback immediately so media is running, and unmute on first gesture!
        bgmLobbyEl.muted = true;
        const mutedP = bgmLobbyEl.play();
        if (mutedP !== undefined) mutedP.catch(() => {});
      });
    }
  } else if (bgmLobbyEl.muted) {
    bgmLobbyEl.muted = false;
    bgmLobbyEl.volume = 0.35;
  }
}

function unlockAndPlayAudio() {
  if (!isStarted || !bgmLobbyEl || isBgmMuted) return;
  if (bgmLobbyEl.muted) {
    bgmLobbyEl.muted = false;
    bgmLobbyEl.volume = 0.35;
  }
  if (bgmLobbyEl.paused) {
    bgmLobbyEl.play().catch(() => {});
  }
  const ctx = getAudioContext();
  if (ctx && ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  if (window.p3rMusicPlayer && typeof window.p3rMusicPlayer.updateUI === "function") {
    window.p3rMusicPlayer.updateUI();
  }
}

// Continuous global listeners to ensure instant music play on ANY interaction once game is started
const audioGestureEvents = ["click", "pointerdown", "touchstart", "touchend", "mousedown", "keydown"];
audioGestureEvents.forEach((evt) => {
  window.addEventListener(evt, unlockAndPlayAudio, { passive: true });
  document.addEventListener(evt, unlockAndPlayAudio, { passive: true });
});

document.addEventListener("visibilitychange", () => {
  if (isStarted && !document.hidden && !isBgmMuted) ensureBGM();
});

function updateAudioToggleUI() {
  if (toggleBgmBtn) {
    const label = toggleBgmBtn.querySelector(".control-text");
    if (label) label.textContent = isBgmMuted ? "Music: OFF" : "Music: ON";
    toggleBgmBtn.classList.toggle("is-muted", isBgmMuted);
    toggleBgmBtn.setAttribute("aria-pressed", isBgmMuted ? "false" : "true");
  }
  if (toggleSfxBtn) {
    const label = toggleSfxBtn.querySelector(".control-text");
    if (label) label.textContent = isSfxMuted ? "SFX: OFF" : "SFX: ON";
    toggleSfxBtn.classList.toggle("is-muted", isSfxMuted);
    toggleSfxBtn.setAttribute("aria-pressed", isSfxMuted ? "false" : "true");
  }
  if (window.p3rMusicPlayer && typeof window.p3rMusicPlayer.updateUI === "function") {
    window.p3rMusicPlayer.updateUI();
  }
}

function toggleBGM() {
  isBgmMuted = !isBgmMuted;
  updateAudioToggleUI();
  if (bgmLobbyEl) {
    if (isBgmMuted) {
      bgmLobbyEl.pause();
    } else {
      ensureBGM();
    }
  }
  if (!isSfxMuted) playConfirmSFX();
}

function toggleSFX() {
  isSfxMuted = !isSfxMuted;
  updateAudioToggleUI();
  if (!isSfxMuted) {
    playConfirmSFX();
  }
}

// Pre-create light fallback HTMLAudioElement pools matching Folder 2 volumes
for (let i = 0; i < 2; i++) {
  const a = new Audio("sfx/ndt.mp3");
  a.preload = "auto";
  a.volume = 0.5;
  sfxAudioPool.push(a);

  const b = new Audio("sfx/sellect.mp3");
  b.preload = "auto";
  b.volume = 0.6;
  confirmAudioPool.push(b);

  const c = new Audio("sfx/back.mp3");
  c.preload = "auto";
  c.volume = 0.6;
  closeMenuAudioPool.push(c);

  const d = new Audio("sfx/odt.mp3");
  d.preload = "auto";
  d.volume = 0.6;
  openDetailAudioPool.push(d);

  const e = new Audio("sfx/cdt.mp3");
  e.preload = "auto";
  e.volume = 0.6;
  closeDetailAudioPool.push(e);
}

// Background buffer decoding for instantaneous hardware playback
async function loadAudioBuffers() {
  try {
    const [navRes, confirmRes, closeRes, odtRes, cdtRes] = await Promise.all([
      fetch("sfx/ndt.mp3"),
      fetch("sfx/sellect.mp3"),
      fetch("sfx/back.mp3"),
      fetch("sfx/odt.mp3"),
      fetch("sfx/cdt.mp3")
    ]);
    const ctx = getAudioContext();
    if (ctx) {
      if (navRes.ok && !sfxAudioBuffer) {
        sfxAudioBuffer = await ctx.decodeAudioData(await navRes.arrayBuffer());
      }
      if (confirmRes.ok && !confirmAudioBuffer) {
        confirmAudioBuffer = await ctx.decodeAudioData(await confirmRes.arrayBuffer());
      }
      if (closeRes.ok && !closeMenuAudioBuffer) {
        closeMenuAudioBuffer = await ctx.decodeAudioData(await closeRes.arrayBuffer());
      }
      if (odtRes.ok && !openDetailAudioBuffer) {
        openDetailAudioBuffer = await ctx.decodeAudioData(await odtRes.arrayBuffer());
      }
      if (cdtRes.ok && !closeDetailAudioBuffer) {
        closeDetailAudioBuffer = await ctx.decodeAudioData(await cdtRes.arrayBuffer());
      }
    }
  } catch (_) {}
}
loadAudioBuffers();

// Clean unified audio playback dispatcher
function playAudioChannel({
  buffer,
  staticElId,
  pool,
  getPoolIdx,
  setPoolIdx,
  volume = 0.6,
  onPlaySuccess
}) {
  if (isStarted && !isBgmMuted) {
    ensureBGM();
  }

  if (isSfxMuted) {
    return false;
  }

  const ctx = getAudioContext();
  if (ctx && ctx.state === "running" && buffer) {
    try {
      const source = ctx.createBufferSource();
      const gainNode = ctx.createGain();
      gainNode.gain.value = volume;
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
      if (onPlaySuccess) onPlaySuccess();
      return true;
    } catch (_) {}
  }

  const staticEl = document.getElementById(staticElId);
  if (staticEl) {
    try {
      staticEl.currentTime = 0;
      staticEl.volume = volume;
      const p = staticEl.play();
      if (p !== undefined) {
        p.then(() => { if (onPlaySuccess) onPlaySuccess(); }).catch(() => {});
      }
      return true;
    } catch (_) {}
  }

  if (pool && pool.length > 0) {
    try {
      const idx = getPoolIdx();
      const sound = pool[idx];
      sound.currentTime = 0;
      sound.volume = volume;
      const sp = sound.play();
      if (sp !== undefined) {
        sp.then(() => { if (onPlaySuccess) onPlaySuccess(); }).catch(() => {});
      }
      setPoolIdx((idx + 1) % pool.length);
      return true;
    } catch (_) {}
  }
  return false;
}

// --------------------------------------------------------------------------
// Persona 3 Reload Haptic Vibration & Screen Shake Triggers (MAIN MENU ONLY)
// --------------------------------------------------------------------------
function isMainMenuActive() {
  return isStarted && !isModalOpen && !isProjectPageOpen && !isSkillPageOpen && !isAboutPageOpen && !isContactPageOpen && !isWavyTransitionRunning;
}

function triggerSelectVibration() {
  if (!isMainMenuActive()) return;
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    try { navigator.vibrate(15); } catch (_) {}
  }
  const mainEl = document.querySelector(".p3r-main");
  if (mainEl) {
    mainEl.classList.remove("p3r-select-shake");
    void mainEl.offsetWidth;
    mainEl.classList.add("p3r-select-shake");
    setTimeout(() => {
      mainEl.classList.remove("p3r-select-shake");
    }, 130);
  }
}

function triggerConfirmVibration() {
  if (!isMainMenuActive()) return;
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    try { navigator.vibrate([25, 35, 45]); } catch (_) {}
  }
  const mainEl = document.querySelector(".p3r-main");
  if (mainEl) {
    mainEl.classList.remove("p3r-select-shake", "p3r-confirm-shake");
    void mainEl.offsetWidth;
    mainEl.classList.add("p3r-confirm-shake");
    setTimeout(() => {
      mainEl.classList.remove("p3r-confirm-shake");
    }, 300);
  }
}

function playSFX() {
  if (!isStarted) return;
  playAudioChannel({
    buffer: sfxAudioBuffer,
    staticElId: "sfx-navigation-el",
    pool: sfxAudioPool,
    getPoolIdx: () => sfxPoolIndex,
    setPoolIdx: (v) => { sfxPoolIndex = v; },
    volume: 0.5
  });
}

function playConfirmSFX() {
  playAudioChannel({
    buffer: confirmAudioBuffer,
    staticElId: "sfx-confirm-el",
    pool: confirmAudioPool,
    getPoolIdx: () => confirmPoolIndex,
    setPoolIdx: (v) => { confirmPoolIndex = v; },
    volume: 0.6
  });
}

function playCloseMenuSFX() {
  playAudioChannel({
    buffer: closeMenuAudioBuffer,
    staticElId: "sfx-close-menu-el",
    pool: closeMenuAudioPool,
    getPoolIdx: () => closeMenuPoolIndex,
    setPoolIdx: (v) => { closeMenuPoolIndex = v; },
    volume: 0.6
  });
}

function playOpenDetailSFX() {
  playAudioChannel({
    buffer: openDetailAudioBuffer,
    staticElId: "sfx-open-detail-el",
    pool: openDetailAudioPool,
    getPoolIdx: () => openDetailPoolIndex,
    setPoolIdx: (v) => { openDetailPoolIndex = v; },
    volume: 0.6
  });
}

function playCloseDetailSFX() {
  playAudioChannel({
    buffer: closeDetailAudioBuffer,
    staticElId: "sfx-close-detail-el",
    pool: closeDetailAudioPool,
    getPoolIdx: () => closeDetailPoolIndex,
    setPoolIdx: (v) => { closeDetailPoolIndex = v; },
    volume: 0.6
  });
}

// Early Audio Unlocker on First User Gesture
async function unlockAudioEngine() {
  const ctx = getAudioContext();
  if (ctx) {
    if (ctx.state !== "running") {
      try { await ctx.resume(); } catch (_) {}
    }
    try {
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
    } catch (_) {}
  }

  if (isStarted && !isBgmMuted) {
    ensureBGM();
  }
}

["pointerdown", "mousedown", "touchstart", "touchend", "click", "keydown", "focus"].forEach((evt) => {
  window.addEventListener(evt, unlockAudioEngine, { capture: true, passive: true });
});

// --------------------------------------------------------------------------
// 4. Cutout Ransom Letter Engine & Persona 3 Dynamic Blade Menu
// --------------------------------------------------------------------------
function createCutoutHtml(text, customSeed = 0) {
  // Tactile rotations (degrees) inspired by Persona ransom collage aesthetic
  const rotations = [-2.8, 2.2, -1.8, 3.2, -3.0, 1.5, -2.2, 2.6, -1.5, 3.0, -2.5, 2.0];
  // Alternating palette: tile-white, tile-black, tile-cyan, tile-blue
  const colorTiles = ["tile-white", "tile-black", "tile-cyan", "tile-blue"];
  
  const words = text.trim().split(/\s+/);
  let globalCharIndex = customSeed;

  return `<div class="p3r-cutout-group">` +
    words.map((word) => {
      const chars = word.split("").map((ch) => {
        const rot = rotations[globalCharIndex % rotations.length];
        const tile = colorTiles[globalCharIndex % colorTiles.length];
        globalCharIndex++;
        return `<span class="p3r-cutout-char ${tile}" style="--rot:${rot}deg;">${ch}</span>`;
      }).join("");
      return `<span class="p3r-cutout-word">${chars}</span>`;
    }).join(`<span class="p3r-cutout-space" style="display:inline-block;width:0.35em;"></span>`) +
  `</div>`;
}

let cachedOptionItems = [];

function renderOptions() {
  optionsList.innerHTML = "";
  cachedOptionItems = [];

  options.forEach((opt, index) => {
    const cutoutHtml = createCutoutHtml(opt.name, index * 2);

    const item = document.createElement("div");
    item.className = `option-item ${index === selectedIndex ? "selected" : ""}`;
    item.id = `option-item-${index}`;
    item.style.zIndex = index === selectedIndex ? 15 : opt.zIndex;

    item.innerHTML = `
      <button 
        class="option-hitbox" 
        data-index="${index}" 
        aria-label="${opt.name}"
        type="button">
        
        <!-- Unselected: Plain White Text (Awalnya Tidak Ada Style, Putih Polos Sesuai Permintaan) -->
        <div class="option-plain-wrap" aria-hidden="${index === selectedIndex ? "true" : "false"}">
          <span class="option-plain-text">${opt.name}</span>
        </div>

        <!-- Selected: Full Persona Jagged Comic Banner with Cutout Letters & Indicator -->
        <div class="option-styled-wrap" aria-hidden="${index === selectedIndex ? "false" : "true"}">
          <div class="persona-jagged-banner">
            <div class="banner-jagged-inner">
              ${cutoutHtml}
              <span class="selected-indicator-arrow" aria-hidden="true">▶</span>
            </div>
          </div>
        </div>
      </button>
    `;

    // Interactive event triggers
    const hitbox = item.querySelector(".option-hitbox");
    hitbox.addEventListener("mouseenter", () => {
      if (selectedIndex !== index) {
        setIndex(index);
      }
    });

    hitbox.addEventListener("click", (e) => {
      if (selectedIndex !== index) {
        setIndex(index);
      } else {
        handleOptionConfirm(index, e);
      }
    });

    optionsList.appendChild(item);
    cachedOptionItems.push(item);
  });
}

function setIndex(index) {
  if (index === selectedIndex && cachedOptionItems.length > 0) return;
  selectedIndex = index;

  playSFX();
  triggerSelectVibration();

  if (sideNumber) {
    sideNumber.textContent = (selectedIndex + 1).toString().padStart(2, "0");
  }

  // Speculatively preload the selected subpage's video just in time
  if (index === 0 && slinkBgVideo && slinkBgVideo.preload !== "auto") slinkBgVideo.preload = "auto";
  else if (index === 1 && skillBgVideo && skillBgVideo.preload !== "auto") skillBgVideo.preload = "auto";
  else if (index === 2 && aboutBgVideo && aboutBgVideo.preload !== "auto") aboutBgVideo.preload = "auto";
  else if (index === 3 && contactBgVideo && contactBgVideo.preload !== "auto") contactBgVideo.preload = "auto";

  for (let idx = 0; idx < cachedOptionItems.length; idx++) {
    const item = cachedOptionItems[idx];
    const isSelected = idx === selectedIndex;
    if (isSelected) {
      item.classList.add("selected");
      item.style.zIndex = 15;
    } else {
      item.classList.remove("selected");
      item.style.zIndex = options[idx].zIndex;
    }
    const plainWrap = item.querySelector(".option-plain-wrap");
    const styledWrap = item.querySelector(".option-styled-wrap");
    if (plainWrap) plainWrap.setAttribute("aria-hidden", isSelected ? "true" : "false");
    if (styledWrap) styledWrap.setAttribute("aria-hidden", isSelected ? "false" : "true");
  }
}

// --------------------------------------------------------------------------
// 5. Wavy Ripple Geometric Math & Screen Transition Engine
// --------------------------------------------------------------------------
function generateWavyPolygon(
  cx, 
  cy, 
  r, 
  numPoints = 72, 
  waves1 = 7, 
  amp1 = 0.085, 
  waves2 = 14, 
  amp2 = 0.035, 
  phase = 0.0, 
  scaleX = 1.25, 
  scaleY = 1.05
) {
  if (r <= 0.5) {
    const pt = `${cx.toFixed(1)}px ${cy.toFixed(1)}px`;
    return `polygon(${new Array(numPoints).fill(pt).join(", ")})`;
  }
  const points = [];
  const step = (2 * Math.PI) / numPoints;
  for (let i = 0; i < numPoints; i++) {
    const theta = i * step;
    const wave = 1.0 + amp1 * Math.sin(waves1 * theta + phase) + amp2 * Math.cos(waves2 * theta + phase * 1.6);
    const px = cx + r * wave * Math.cos(theta) * scaleX;
    const py = cy + r * wave * Math.sin(theta) * scaleY;
    points.push(`${px.toFixed(1)}px ${py.toFixed(1)}px`);
  }
  return `polygon(${points.join(", ")})`;
}

function calculateTargetRadius(origin) {
  const maxDist = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y)
  );
  return Math.ceil(maxDist * 1.85);
}

// Universal Origin Locators (Left-docked menu geometry)
function getOptionCenter(optionIndex, clickEvent, fallbackXRatio = 0.22, fallbackYRatio = 0.50) {
  if (clickEvent && typeof clickEvent.clientX === "number" && (clickEvent.clientX > 0 || clickEvent.clientY > 0)) {
    return { x: clickEvent.clientX, y: clickEvent.clientY };
  }

  const optionItem = document.getElementById(`option-item-${optionIndex}`) || document.querySelectorAll(".option-item")[optionIndex];
  if (optionItem) {
    const textEls = optionItem.querySelectorAll(".persona-jagged-banner, .option-plain-text, .p3r-cutout-group, .option-hitbox, .option-text");
    for (let i = 0; i < textEls.length; i++) {
      const tr = textEls[i].getBoundingClientRect();
      if (tr.width > 0 && tr.height > 0) {
        return {
          x: tr.left + tr.width * 0.5,
          y: tr.top + tr.height * 0.5
        };
      }
    }
    const ir = optionItem.getBoundingClientRect();
    if (ir.width > 0 && ir.height > 0) {
      return {
        x: ir.left + ir.width * 0.45,
        y: ir.top + ir.height * 0.5
      };
    }
  }

  return {
    x: window.innerWidth * fallbackXRatio,
    y: window.innerHeight * fallbackYRatio
  };
}

function getExitOrigin(buttonElOrId, fallbackX, fallbackY) {
  const btn = typeof buttonElOrId === "string" ? document.getElementById(buttonElOrId) : buttonElOrId;
  if (btn) {
    const r = btn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return {
        x: r.left + r.width * 0.5,
        y: r.top + r.height * 0.5
      };
    }
  }
  return {
    x: fallbackX !== undefined ? fallbackX : window.innerWidth - 120,
    y: fallbackY !== undefined ? fallbackY : window.innerHeight - 55
  };
}

// Named Aliases for Backward Compatibility & Direct Script Control (Updated for left-docked layout)
const getProjectOptionCenter = (evt) => getOptionCenter(0, evt, 0.22, 0.38);
const getSkillOptionCenter   = (evt) => getOptionCenter(1, evt, 0.22, 0.46);
const getAboutOptionCenter   = (evt) => getOptionCenter(2, evt, 0.22, 0.54);
const getContactOptionCenter = (evt) => getOptionCenter(3, evt, 0.22, 0.62);

const getProjectExitOrigin = () => getExitOrigin(slinkBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getSkillExitOrigin   = () => getExitOrigin(skillBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getAboutExitOrigin   = () => getExitOrigin(aboutBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getContactExitOrigin = () => getExitOrigin(contactBackBtn, window.innerWidth - 120, window.innerHeight - 55);

// Unified WAAPI Ripple Reveal & Close Transitions
function executeWavyReveal({
  pageEl,
  origin,
  bodyClass,
  videoEl,
  onStart,
  onComplete,
  duration = 520,
  easing = "cubic-bezier(0.2, 1, 0.35, 1)"
}) {
  if (!pageEl) {
    if (bodyClass) document.body.classList.add(bodyClass);
    if (onComplete) onComplete();
    return;
  }

  isWavyTransitionRunning = true;
  if (onStart) onStart();

  const targetRadius = calculateTargetRadius(origin);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");
  pageEl.setAttribute("aria-hidden", "false");
  pageEl.style.willChange = "clip-path";

  // Pause main menu background video while subpage is displayed to eliminate dual-video GPU decode load
  if (bgVideoLoop && !bgVideoLoop.paused) {
    bgVideoLoop.pause();
  }

  if (videoEl) {
    videoEl.currentTime = 0;
    videoEl.muted = true;
    videoEl.play().catch(() => {});
  }

  const anim = pageEl.animate([
    { 
      clipPath: generateWavyPolygon(origin.x, origin.y, 0, 48, 6, 0.08, 12, 0.03, 0.0, 1.25, 1.05) 
    },
    { 
      clipPath: generateWavyPolygon(origin.x + 18, origin.y - 10, targetRadius * 0.45, 48, 6, 0.085, 12, 0.03, 1.2, 1.25, 1.05),
      offset: 0.38
    },
    { 
      clipPath: generateWavyPolygon(origin.x + 8, origin.y - 4, targetRadius * 0.85, 48, 6, 0.07, 12, 0.02, 2.2, 1.20, 1.05),
      offset: 0.70
    },
    { 
      clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 48, 6, 0.04, 12, 0.012, 3.4, 1.15, 1.02) 
    }
  ], {
    duration: 440,
    easing,
    fill: "forwards"
  });

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning");
    pageEl.classList.add("active");
    pageEl.style.clipPath = "";
    pageEl.style.willChange = "";
    if (bodyClass) document.body.classList.add(bodyClass);
    try { anim.cancel(); } catch (_) {}
    isWavyTransitionRunning = false;
    if (onComplete) onComplete();
  };
}

function executeWavyClose({
  pageEl,
  exitOrigin,
  bodyClass,
  videoEl,
  onComplete,
  duration = 480,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)"
}) {
  playCloseMenuSFX();

  if (!pageEl) {
    if (bodyClass) document.body.classList.remove(bodyClass);
    isWavyTransitionRunning = false;
    return;
  }

  isWavyTransitionRunning = true;
  const targetRadius = calculateTargetRadius(exitOrigin);

  if (bodyClass) document.body.classList.remove(bodyClass);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");
  pageEl.style.willChange = "clip-path";

  const anim = pageEl.animate([
    { 
      clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, targetRadius, 48, 8, 0.07, 16, 0.02, 0.0, 1.15, 1.25) 
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x - 16, exitOrigin.y - 10, targetRadius * 0.80, 48, 8, 0.075, 16, 0.025, 1.0, 1.15, 1.25),
      offset: 0.32
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x - 22, exitOrigin.y - 14, targetRadius * 0.42, 48, 8, 0.08, 16, 0.025, 2.0, 1.15, 1.25),
      offset: 0.65
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, 0, 48, 8, 0.07, 16, 0.02, 3.0, 1.15, 1.25) 
    }
  ], {
    duration: 380,
    easing,
    fill: "forwards"
  });

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning", "active");
    pageEl.style.clipPath = "";
    pageEl.style.willChange = "";
    pageEl.setAttribute("aria-hidden", "true");
    if (videoEl) videoEl.pause();
    // Resume main menu loop video seamlessly
    if (bgVideoLoop && bgVideoLoop.paused) {
      bgVideoLoop.play().catch(() => {});
    }
    try { anim.cancel(); } catch (_) {}
    isWavyTransitionRunning = false;
    if (onComplete) onComplete();
  };
}

// --------------------------------------------------------------------------
// 6. Subpage: PROJECT (S.Link Cards Stack)
// --------------------------------------------------------------------------
function triggerProjectTitleAnimation() {
  const projectDiv = document.getElementById("slink-project-div");
  if (projectDiv) {
    projectDiv.classList.remove("animating");
    void projectDiv.offsetWidth;
    projectDiv.classList.add("animating");
  }
}

function renderSlinkCards() {
  if (!slinkCardsContainer) return;
  slinkCardsContainer.innerHTML = "";

  slinkData.forEach((item, idx) => {
    const card = document.createElement("button");
    const isActive = idx === selectedSlinkIndex;
    card.className = `slink-card ${isActive ? "active" : ""}`;
    card.id = `slink-card-${idx}`;
    card.setAttribute("role", "tab");
    card.setAttribute("aria-selected", isActive ? "true" : "false");
    card.style.setProperty("--card-idx", idx);

    card.innerHTML = `
      <div class="card-unified-row">
        <!-- Solid Sharp Box for Roman Numeral -->
        <div class="card-numeral-box">
          <span class="card-numeral-text">${item.numeral}</span>
        </div>

        <!-- Unified Main Body: Title & Caption Together -->
        <div class="card-main-body">
          <div class="card-title-text">${item.title}</div>
          <div class="card-subtitle-text">${item.subtitle}</div>
          <div class="card-red-accent" aria-hidden="true"></div>
        </div>
      </div>
    `;

    card.addEventListener("mouseenter", () => {
      if (isProjectPageOpen && !isWavyTransitionRunning && selectedSlinkIndex !== idx) {
        selectSlinkCard(idx);
      }
    });

    card.addEventListener("click", () => {
      if (isProjectPageOpen && !isWavyTransitionRunning) {
        selectSlinkCard(idx);
      }
    });

    slinkCardsContainer.appendChild(card);
  });
}

function updateProjectPreview(item) {
  if (!item) return;
  if (slinkPreviewImg && item.image) {
    slinkPreviewImg.src = item.image;
    slinkPreviewImg.alt = item.fullTitle || item.title;
  }
  if (slinkPreviewBadge) {
    slinkPreviewBadge.textContent = `${(item.type || "PROJECT").toUpperCase()} · ${item.year || ""}`;
  }
  if (slinkPreviewTitle) {
    slinkPreviewTitle.textContent = item.fullTitle || item.title;
  }
  if (slinkPreviewDesc) {
    slinkPreviewDesc.textContent = item.desc || "";
  }
  if (slinkPreviewTools) {
    slinkPreviewTools.innerHTML = (item.tools || [])
      .map((tool) => `<span class="slink-tool-chip">${tool}</span>`)
      .join("");
  }
  if (slinkPreviewOpenBtn) {
    slinkPreviewOpenBtn.textContent = `${(item.linkLabel || "OPEN PROJECT").toUpperCase()} ↗`;
  }
}

function selectSlinkCard(index, silent = false) {
  selectedSlinkIndex = index;
  const cards = document.querySelectorAll(".slink-card");
  cards.forEach((c, idx) => {
    if (idx === selectedSlinkIndex) {
      c.classList.add("active");
      c.setAttribute("aria-selected", "true");
    } else {
      c.classList.remove("active");
      c.setAttribute("aria-selected", "false");
    }
  });
  updateProjectPreview(slinkData[selectedSlinkIndex]);
  if (!silent) playSFX();
}

function confirmSlinkSelection() {
  const item = slinkData[selectedSlinkIndex];
  if (item && item.url && item.url !== "#") {
    playConfirmSFX();
    setTimeout(() => {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }, 180);
  } else {
    playConfirmSFX();
  }
}

// --------------------------------------------------------------------------
// Browser History & Seamless Back Navigation (Prevents about:blank in Chrome)
// --------------------------------------------------------------------------
let isHistoryNavigating = false;

function pushNavState(pageName) {
  if (isHistoryNavigating) return;
  try {
    const currentHash = (window.location.hash || "").replace("#", "");
    if (currentHash !== pageName) {
      history.pushState({ page: pageName }, "", "#" + pageName);
    }
  } catch (err) {}
}

function syncCloseToMainState() {
  if (isHistoryNavigating) return;
  try {
    if (!isProjectPageOpen && !isSkillPageOpen && !isAboutPageOpen && !isContactPageOpen) {
      const currentHash = (window.location.hash || "").replace("#", "");
      if (currentHash && currentHash !== "main") {
        history.replaceState({ page: "main" }, "", "#main");
      }
    }
  } catch (err) {}
}

function forceCloseAllSubpages() {
  isWavyTransitionRunning = false;
  if (isProjectPageOpen || (projectPage && projectPage.classList.contains("active"))) {
    isProjectPageOpen = false;
    if (projectPage) {
      projectPage.classList.remove("active", "circle-transitioning");
      projectPage.style.clipPath = "";
      projectPage.style.willChange = "";
      projectPage.setAttribute("aria-hidden", "true");
    }
    if (slinkBgVideo) { try { slinkBgVideo.pause(); } catch (_) {} }
  }
  if (isSkillPageOpen || (skillPage && skillPage.classList.contains("active"))) {
    isSkillPageOpen = false;
    if (skillPage) {
      skillPage.classList.remove("active", "circle-transitioning");
      skillPage.style.clipPath = "";
      skillPage.style.willChange = "";
      skillPage.setAttribute("aria-hidden", "true");
    }
    if (skillBgVideo) { try { skillBgVideo.pause(); } catch (_) {} }
  }
  if (isAboutPageOpen || (aboutPage && aboutPage.classList.contains("active"))) {
    isAboutPageOpen = false;
    if (aboutPage) {
      aboutPage.classList.remove("active", "circle-transitioning");
      aboutPage.style.clipPath = "";
      aboutPage.style.willChange = "";
      aboutPage.setAttribute("aria-hidden", "true");
    }
    if (aboutBgVideo) { try { aboutBgVideo.pause(); } catch (_) {} }
  }
  if (isContactPageOpen || (contactPage && contactPage.classList.contains("active"))) {
    isContactPageOpen = false;
    if (contactPage) {
      contactPage.classList.remove("active", "circle-transitioning");
      contactPage.style.clipPath = "";
      contactPage.style.willChange = "";
      contactPage.setAttribute("aria-hidden", "true");
    }
    if (contactBgVideo) { try { contactBgVideo.pause(); } catch (_) {} }
  }
  document.body.classList.remove(
    "project-screen-active",
    "skill-screen-active",
    "about-screen-active",
    "contact-screen-active"
  );
}

function handleInAppBackToMain() {
  if (isModalOpen) {
    closeModal();
    return;
  }
  if (typeof isMusicModalOpen !== "undefined" && isMusicModalOpen) {
    closeMusicModal();
    return;
  }
  const currentHash = (window.location.hash || "").replace("#", "");
  if (currentHash && currentHash !== "main" && currentHash !== "opening") {
    window.history.back();
  } else {
    forceCloseAllSubpages();
    if (currentHash !== "main") {
      try { history.replaceState({ page: "main" }, "", "#main"); } catch (_) {}
    }
  }
}

function openProjectPage(clickEvent) {
  if (isProjectPageOpen) return;
  isWavyTransitionRunning = false;
  isProjectPageOpen = true;
  selectedSlinkIndex = 0;
  pushNavState("project");
  playConfirmSFX();

  executeWavyReveal({
    pageEl: projectPage,
    origin: getProjectOptionCenter(clickEvent),
    bodyClass: "project-screen-active",
    videoEl: slinkBgVideo,
    onStart: () => {
      renderSlinkCards();
      selectSlinkCard(0, true);
      triggerProjectTitleAnimation();
    }
  });
}

function closeProjectPage() {
  if (!isProjectPageOpen) return;
  isWavyTransitionRunning = false;
  isProjectPageOpen = false;
  syncCloseToMainState();

  executeWavyClose({
    pageEl: projectPage,
    exitOrigin: getProjectExitOrigin(),
    bodyClass: "project-screen-active",
    videoEl: slinkBgVideo
  });
}

const playWavyCircleTransition = (clickEvent, onComplete) => {
  openProjectPage(clickEvent);
  if (onComplete) setTimeout(onComplete, 850);
};

// --------------------------------------------------------------------------
// 7. Subpage: CERTIFICATE (Certificates & Verified Credentials)
// --------------------------------------------------------------------------
function triggerSkillTitleAnimation() {
  if (skillHeaderDiv) {
    skillHeaderDiv.classList.remove("animating");
    void skillHeaderDiv.offsetWidth;
    skillHeaderDiv.classList.add("animating");
  }
}

function renderSkillsTabs() {
  if (!skillTabsNav) return;
  skillTabsNav.innerHTML = "";

  certTabsList.forEach((tab) => {
    const btn = document.createElement("button");
    const isActive = (tab.id === currentSkillTab);
    btn.className = `p3r-skill-tab ${isActive ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    btn.innerHTML = `
      <span class="p3r-tab-tag">${tab.code}</span>
      <span class="p3r-tab-label">${tab.label}</span>
    `;

    btn.addEventListener("click", () => {
      if (currentSkillTab !== tab.id) {
        setSkillTab(tab.id);
      }
    });

    skillTabsNav.appendChild(btn);
  });
}

function setSkillTab(tabId) {
  if (currentSkillTab === tabId) return;
  currentSkillTab = tabId;
  playSFX();
  if (skillTabsNav) {
    const tabs = skillTabsNav.querySelectorAll(".p3r-skill-tab");
    tabs.forEach((btn, idx) => {
      const tabData = certTabsList[idx];
      if (tabData) {
        const isActive = (tabData.id === currentSkillTab);
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      }
    });
  }
  renderSkillStats(currentSkillTab);
}

function prevSkillTab() {
  const currIdx = certTabsList.findIndex(t => t.id === currentSkillTab);
  const prevIdx = (currIdx - 1 + certTabsList.length) % certTabsList.length;
  setSkillTab(certTabsList[prevIdx].id);
}

function nextSkillTab() {
  const currIdx = certTabsList.findIndex(t => t.id === currentSkillTab);
  const nextIdx = (currIdx + 1) % certTabsList.length;
  setSkillTab(certTabsList[nextIdx].id);
}

let currentModalAnim = null;

function animateModalOpen(origin) {
  if (currentModalAnim) {
    try { currentModalAnim.cancel(); } catch (_) {}
    currentModalAnim = null;
  }

  const safeOrigin = (origin && typeof origin.x === "number" && typeof origin.y === "number")
    ? origin
    : { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };

  const targetRadius = calculateTargetRadius(safeOrigin);

  portfolioModal.style.willChange = "clip-path, opacity";
  portfolioModal.classList.add("active");
  portfolioModal.setAttribute("aria-hidden", "false");

  const modalCard = portfolioModal.querySelector(".modal-card");

  // Persona 3 Reload authentic lightweight 32-point iris reveal wipe (300ms)
  const anim = portfolioModal.animate([
    { clipPath: generateWavyPolygon(safeOrigin.x, safeOrigin.y, 0, 32, 6, 0.08, 12, 0.03, 0.0, 1.25, 1.05), opacity: 0.8 },
    { clipPath: generateWavyPolygon(safeOrigin.x, safeOrigin.y, targetRadius * 0.45, 32, 6, 0.08, 12, 0.03, 1.0, 1.25, 1.05), offset: 0.4 },
    { clipPath: generateWavyPolygon(safeOrigin.x, safeOrigin.y, targetRadius, 32, 6, 0.04, 12, 0.015, 2.5, 1.15, 1.02), opacity: 1 }
  ], {
    duration: 300,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "forwards"
  });

  if (modalCard) {
    modalCard.style.willChange = "transform, opacity";
    modalCard.animate([
      { transform: "scale(0.88) translateY(14px)", opacity: 0 },
      { transform: "scale(1.0) translateY(0)", opacity: 1 }
    ], {
      duration: 300,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "both"
    });
  }

  anim.onfinish = () => {
    portfolioModal.style.clipPath = "";
    portfolioModal.style.willChange = "";
    portfolioModal.style.opacity = "";
    if (modalCard) {
      modalCard.style.willChange = "";
      modalCard.style.transform = "";
      modalCard.style.opacity = "";
    }
    try { anim.cancel(); } catch (_) {}
  };

  currentModalAnim = anim;
}

function openCertModal(cert, clickEvent) {
  if (!cert || !portfolioModal) return;
  modalTag.textContent = cert.tagLabel || "CERTIFICATE";
  modalTitle.textContent = cert.title;
  modalSummary.textContent = `${cert.issuer} · ${cert.year}`;

  modalCardsContainer.innerHTML = `
    <div class="p3r-modal-cert-preview">
      <div class="p3r-modal-cert-img-wrap">
        <img src="${cert.image}" alt="${cert.title}" class="p3r-modal-cert-img" />
      </div>
      <div class="p3r-modal-cert-meta">
        <p class="p3r-modal-cert-desc">Issued by <strong>${cert.issuer}</strong> in <strong>${cert.year}</strong>. Verified digital credential available online.</p>
        ${cert.link ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="p3r-cert-credential-btn">View Credential ↗</a>` : ""}
      </div>
    </div>
  `;

  isModalOpen = true;
  playOpenDetailSFX();

  const origin = (clickEvent && typeof clickEvent.clientX === "number" && (clickEvent.clientX > 0 || clickEvent.clientY > 0))
    ? { x: clickEvent.clientX, y: clickEvent.clientY }
    : { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };

  animateModalOpen(origin);
}

function renderSkillStats(category = "all") {
  if (!p3rSkillsContainer) return;
  p3rSkillsContainer.innerHTML = "";

  const filteredCerts = certItemsData.filter((c) => {
    if (category === "all") return true;
    if (category === "other") return c.tag === "other" || c.tag === "soft" || c.tag === "finance";
    return c.tag === category;
  });

  const activeTabObj = certTabsList.find((t) => t.id === category);
  const groupTitle = activeTabObj ? `${activeTabObj.label} CERTIFICATES` : "CERTIFICATES";

  const groupDiv = document.createElement("div");
  groupDiv.className = "p3r-skill-group";
  groupDiv.id = `cert-group-${category}`;

  const gridDiv = document.createElement("div");
  gridDiv.className = "p3r-cert-grid";

  filteredCerts.forEach((cert, idx) => {
    const card = document.createElement("article");
    card.className = "p3r-cert-card";
    card.style.animationDelay = `${idx * 0.06}s`;

    card.innerHTML = `
      <div class="p3r-cert-card-top">
        <span class="p3r-cert-index">CERT // ${String(idx + 1).padStart(2, "0")}</span>
        <span class="p3r-cert-badge">${cert.tagLabel}</span>
      </div>
      <div class="p3r-cert-thumb-wrap">
        <img src="${cert.image}" alt="${cert.title}" class="p3r-cert-thumb" loading="eager" />
      </div>
      <div class="p3r-cert-body">
        <h3 class="p3r-cert-title">${cert.title}</h3>
        <p class="p3r-cert-issuer">${cert.issuer} · <span>${cert.year}</span></p>
        <div class="p3r-cert-actions">
          <button type="button" class="p3r-cert-preview-btn">Preview</button>
          <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="p3r-cert-link-btn">View Credential ↗</a>
        </div>
      </div>
    `;

    const thumbWrap = card.querySelector(".p3r-cert-thumb-wrap");
    const previewBtn = card.querySelector(".p3r-cert-preview-btn");
    const linkBtn = card.querySelector(".p3r-cert-link-btn");

    if (thumbWrap) {
      thumbWrap.addEventListener("click", (e) => openCertModal(cert, e));
    }
    if (previewBtn) {
      previewBtn.addEventListener("click", (e) => openCertModal(cert, e));
    }
    if (linkBtn) {
      linkBtn.addEventListener("click", () => playConfirmSFX());
    }

    gridDiv.appendChild(card);
  });

  groupDiv.innerHTML = `
    <div class="p3r-skill-group-header">
      <h3 class="p3r-group-title">${groupTitle} (${filteredCerts.length})</h3>
      <div class="p3r-group-line"></div>
    </div>
  `;
  groupDiv.appendChild(gridDiv);
  p3rSkillsContainer.appendChild(groupDiv);
}

function openSkillPage(clickEvent) {
  if (isSkillPageOpen) return;
  isWavyTransitionRunning = false;
  isSkillPageOpen = true;
  pushNavState("certificate");
  playConfirmSFX();

  executeWavyReveal({
    pageEl: skillPage,
    origin: getSkillOptionCenter(clickEvent),
    bodyClass: "skill-screen-active",
    videoEl: skillBgVideo,
    onStart: () => {
      renderSkillsTabs();
      renderSkillStats(currentSkillTab);
      triggerSkillTitleAnimation();
    }
  });
}

function closeSkillPage() {
  if (!isSkillPageOpen) return;
  isWavyTransitionRunning = false;
  isSkillPageOpen = false;
  syncCloseToMainState();

  executeWavyClose({
    pageEl: skillPage,
    exitOrigin: getSkillExitOrigin(),
    bodyClass: "skill-screen-active",
    videoEl: skillBgVideo
  });
}

// --------------------------------------------------------------------------
// 8. Subpage: ABOUT (Profile & Philosophy Interface)
// --------------------------------------------------------------------------
function triggerAboutTitleAnimation() {
  if (aboutHeaderDiv) {
    aboutHeaderDiv.classList.remove("animating");
    void aboutHeaderDiv.offsetWidth;
    aboutHeaderDiv.classList.add("animating");
  }
}

function setAboutTab(tabId, silent = false) {
  currentAboutTab = tabId;
  if (!silent) playSFX();
  aboutTabs.forEach((tab) => {
    const isMatch = tab.dataset.aboutTab === tabId;
    tab.classList.toggle("active", isMatch);
    tab.setAttribute("aria-selected", isMatch ? "true" : "false");
  });
  aboutPanels.forEach((panel) => {
    const isMatch = panel.dataset.aboutPanel === tabId;
    panel.classList.toggle("active", isMatch);
    panel.hidden = !isMatch;
  });
}

function cycleAboutTab(delta) {
  const order = ["profile", "experience", "education", "tools"];
  const idx = order.indexOf(currentAboutTab);
  const nextIdx = (idx + delta + order.length) % order.length;
  setAboutTab(order[nextIdx]);
}

function openAboutPage(clickEvent) {
  if (isAboutPageOpen) return;
  isWavyTransitionRunning = false;
  isAboutPageOpen = true;
  pushNavState("about");
  playConfirmSFX();

  executeWavyReveal({
    pageEl: aboutPage,
    origin: getAboutOptionCenter(clickEvent),
    bodyClass: "about-screen-active",
    videoEl: aboutBgVideo,
    onStart: () => {
      setAboutTab("profile", true);
      triggerAboutTitleAnimation();
    }
  });
}

function closeAboutPage() {
  if (!isAboutPageOpen) return;
  isWavyTransitionRunning = false;
  isAboutPageOpen = false;
  syncCloseToMainState();

  executeWavyClose({
    pageEl: aboutPage,
    exitOrigin: getAboutExitOrigin(),
    bodyClass: "about-screen-active",
    videoEl: aboutBgVideo
  });
}

// --------------------------------------------------------------------------
// 9. Subpage: CONTACT (Mail / Phone Messaging UI)
// --------------------------------------------------------------------------
function selectContactRow(index, silent = false) {
  if (!contactMailRows || contactMailRows.length === 0) return;
  selectedContactIndex = Math.max(0, Math.min(index, contactMailRows.length - 1));
  contactMailRows.forEach((row, i) => {
    if (i === selectedContactIndex) {
      row.classList.add("active");
    } else {
      row.classList.remove("active");
    }
  });
  if (!silent) playSFX();
}

function triggerContactPhoneAnimation() {
  const phoneWrap = document.querySelector(".p3r-mail-phone-wrap");
  if (phoneWrap) {
    phoneWrap.style.animation = "none";
    void phoneWrap.offsetWidth;
    phoneWrap.style.animation = "";
  }
}

function openContactPage(clickEvent) {
  if (isContactPageOpen) return;
  isWavyTransitionRunning = false;
  isContactPageOpen = true;
  pushNavState("contact");
  playConfirmSFX();

  executeWavyReveal({
    pageEl: contactPage,
    origin: getContactOptionCenter(clickEvent),
    bodyClass: "contact-screen-active",
    videoEl: contactBgVideo,
    onStart: () => {
      triggerContactPhoneAnimation();
      selectContactRow(0, true);
    }
  });
}

function closeContactPage() {
  if (!isContactPageOpen) return;
  isWavyTransitionRunning = false;
  isContactPageOpen = false;
  syncCloseToMainState();

  executeWavyClose({
    pageEl: contactPage,
    exitOrigin: getContactExitOrigin(),
    bodyClass: "contact-screen-active",
    videoEl: contactBgVideo
  });
}

// --------------------------------------------------------------------------
// 10. Portfolio Modal System (General Fallback for ITEM, EQUIP, SYSTEM)
// --------------------------------------------------------------------------
function getModalExitOrigin() {
  if (modalCloseBtn) {
    const r = modalCloseBtn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }
  }
  return { x: window.innerWidth * 0.78, y: window.innerHeight * 0.22 };
}

function openModal(index) {
  const opt = options[index];
  modalTag.textContent = opt.tag;
  modalTitle.textContent = opt.name;
  modalSummary.textContent = opt.summary;

  modalCardsContainer.innerHTML = "";
  opt.cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "modal-card";
    cardEl.innerHTML = `
      <div class="card-glow"></div>
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
      <div class="card-corner"></div>
    `;
    modalCardsContainer.appendChild(cardEl);
  });

  isModalOpen = true;
  playOpenDetailSFX();

  const origin = getOptionCenter(index);
  animateModalOpen(origin);
}

function closeModal() {
  if (!isModalOpen) return;
  isModalOpen = false;
  playCloseDetailSFX();

  if (currentModalAnim) {
    try { currentModalAnim.cancel(); } catch (_) {}
    currentModalAnim = null;
  }

  const exitOrigin = getModalExitOrigin();
  const targetRadius = calculateTargetRadius(exitOrigin);
  const modalCard = portfolioModal.querySelector(".modal-card");

  portfolioModal.style.willChange = "clip-path, opacity";

  // Lightweight 32-point iris shrink wipe (220ms duration)
  const closeAnim = portfolioModal.animate([
    { clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, targetRadius, 32, 8, 0.07, 16, 0.02, 0.0, 1.15, 1.25), opacity: 1 },
    { clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, 0, 32, 8, 0.07, 16, 0.02, 2.5, 1.15, 1.25), opacity: 0.5 }
  ], {
    duration: 220,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    fill: "forwards"
  });

  if (modalCard) {
    modalCard.style.willChange = "transform, opacity";
    modalCard.animate([
      { transform: "scale(1.0) translateY(0)", opacity: 1 },
      { transform: "scale(0.92) translateY(10px)", opacity: 0 }
    ], {
      duration: 200,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "both"
    });
  }

  closeAnim.onfinish = () => {
    portfolioModal.classList.remove("active");
    portfolioModal.setAttribute("aria-hidden", "true");
    portfolioModal.style.clipPath = "";
    portfolioModal.style.willChange = "";
    portfolioModal.style.opacity = "";
    if (modalCard) {
      modalCard.style.willChange = "";
      modalCard.style.transform = "";
      modalCard.style.opacity = "";
    }
    try { closeAnim.cancel(); } catch (_) {}
  };
}

// Option Confirmation Dispatcher (Strictly 4 Options: PROJECT, SKILLS, ABOUT, CONTACT)
function handleOptionConfirm(index, clickEvent) {
  triggerConfirmVibration();
  if (index === 0) {
    openProjectPage(clickEvent);
  } else if (index === 1) {
    openSkillPage(clickEvent);
  } else if (index === 2) {
    openAboutPage(clickEvent);
  } else if (index === 3) {
    openContactPage(clickEvent);
  }
}

// --------------------------------------------------------------------------
// 11. Background Video Flow in Menu Utama (Intro -> Loop Seamless Cut)
// --------------------------------------------------------------------------
let hasSwitchedToLoop = false;

function switchToLoopVideo() {
  if (hasSwitchedToLoop) return;
  hasSwitchedToLoop = true;

  if (bgVideoLoop) {
    if (bgVideoLoop.preload !== "auto") bgVideoLoop.preload = "auto";
    bgVideoLoop.currentTime = 0;
    const playPromise = bgVideoLoop.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (bgVideoIntro) {
            bgVideoIntro.classList.add("fade-out");
            setTimeout(() => {
              bgVideoIntro.pause();
              bgVideoIntro.style.display = "none";
            }, 300);
          }
        })
        .catch((err) => {
          console.warn("Loop video playback notice:", err);
          if (bgVideoIntro) bgVideoIntro.classList.add("fade-out");
        });
    } else {
      if (bgVideoIntro) bgVideoIntro.classList.add("fade-out");
    }
  }
}

if (bgVideoIntro) {
  bgVideoIntro.addEventListener("ended", switchToLoopVideo);
  bgVideoIntro.addEventListener("error", switchToLoopVideo);
  bgVideoIntro.addEventListener("timeupdate", () => {
    if (!hasSwitchedToLoop && bgVideoIntro.duration > 0) {
      if (bgVideoIntro.currentTime >= bgVideoIntro.duration * 0.4) {
        if (bgVideoLoop && bgVideoLoop.preload !== "auto") {
          bgVideoLoop.preload = "auto";
        }
      }
      if (bgVideoIntro.currentTime >= bgVideoIntro.duration - 0.08) {
        switchToLoopVideo();
      }
    }
  });
}

// --------------------------------------------------------------------------
// 12. Loading Screen & Experience Entry Sequence
// --------------------------------------------------------------------------
let isStartPromptShown = false;

function waitForMenuVideoReady(timeoutMs = 12000) {
  return new Promise((resolve) => {
    if (loadingStatusText) loadingStatusText.textContent = "Loading...";

    if (!bgVideoLoop) {
      resolve();
      return;
    }

    if (bgVideoLoop.preload !== "auto") {
      bgVideoLoop.preload = "auto";
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearInterval(pollId);
      clearTimeout(fallbackId);
      bgVideoLoop.removeEventListener("canplaythrough", checkReady);
      bgVideoLoop.removeEventListener("loadeddata", checkReady);
      bgVideoLoop.removeEventListener("error", finish);
      if (loadingStatusText) loadingStatusText.textContent = "Loading...";
      if (loadingScreen) loadingScreen.setAttribute("aria-valuenow", "100");
      resolve();
    };

    const checkReady = () => {
      if (isStarted || bgVideoLoop.readyState === 4) {
        finish();
      }
    };

    bgVideoLoop.addEventListener("canplaythrough", checkReady);
    bgVideoLoop.addEventListener("loadeddata", checkReady);
    bgVideoLoop.addEventListener("error", finish);
    const pollId = setInterval(checkReady, 700);
    const fallbackId = setTimeout(finish, timeoutMs);
    checkReady();
  });
}

function waitAbortable(ms) {
  return new Promise((resolve) => {
    const step = 100;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += step;
      if (isStarted || elapsed >= ms) {
        clearInterval(timer);
        resolve();
      }
    }, step);
  });
}

async function startLoadingSequence() {
  if (bgVideoIntro) {
    bgVideoIntro.muted = true;
    bgVideoIntro.defaultMuted = true;
  }
  if (bgVideoLoop) {
    bgVideoLoop.muted = true;
    bgVideoLoop.defaultMuted = true;
  }

  // Preload audio and fonts while running initial loading display
  loadAudioBuffers();

  if (loadingStatusText) loadingStatusText.textContent = "Loading...";
  if (loadingIndicatorWrap) loadingIndicatorWrap.style.display = "flex";

  const fontPromise = (document.fonts && document.fonts.ready)
    ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 800))]).catch(() => {})
    : Promise.resolve();

  await Promise.all([waitAbortable(1400), waitForMenuVideoReady(12000), fontPromise]);
  if (isStarted) return;

  isLoaded = true;

  // Transition from Loading Screen to Opening Screen
  if (loadingScreen) {
    loadingScreen.classList.add("dismissed");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 400);
  }

  // Ensure initial hash is #opening if not navigating directly to a deep-linked page
  try {
    const rawHash = (window.location.hash || "").replace("#", "");
    if (!rawHash || rawHash === "opening") {
      history.replaceState({ page: "opening" }, "", "#opening");
    }
  } catch (_) {}

  if (openingScreen) {
    openingScreen.classList.remove("dismissed");
    openingScreen.style.display = "flex";
    if (openingVideo) {
      openingVideo.currentTime = 0;
      openingVideo.muted = false;
      openingVideo.volume = 1.0;
      const playP = openingVideo.play();
      if (playP !== undefined) {
        playP.catch((err) => {
          console.warn("Unmuted autoplay restricted by browser policy; starting muted until user gesture:", err);
          openingVideo.muted = true;
          openingVideo.play().catch(() => {});

          const autoUnmuteOnGesture = () => {
            if (openingVideo) {
              openingVideo.muted = false;
              openingVideo.volume = 1.0;
            }
          };
          window.addEventListener("pointerdown", autoUnmuteOnGesture, { once: true, capture: true });
          window.addEventListener("touchstart", autoUnmuteOnGesture, { once: true, capture: true });
          window.addEventListener("click", autoUnmuteOnGesture, { once: true, capture: true });
          window.addEventListener("keydown", autoUnmuteOnGesture, { once: true, capture: true });
        });
      }
    }
  }
}

function triggerContinueToMenu(e) {
  if (isStarted) return;
  if (e && e.cancelable) e.preventDefault();

  const continueBtn = document.getElementById("p3r-continue-btn");
  if (continueBtn) {
    continueBtn.classList.add("activating");
  }

  unlockAudioEngine();
  playConfirmSFX();

  if (openingVideo) {
    try {
      openingVideo.pause();
    } catch (_) {}
  }

  if (openingScreen) {
    openingScreen.classList.add("dismissed");
    setTimeout(() => {
      openingScreen.style.display = "none";
    }, 450);
  }

  // Push #main to history so browser back navigates cleanly to #opening
  if ((window.location.hash || "") !== "#main") {
    try {
      history.pushState({ page: "main" }, "", "#main");
    } catch (_) {}
  }

  setTimeout(() => {
    enterExperience();
  }, 220);
}

if (openingScreen) {
  openingScreen.addEventListener("click", (e) => {
    if (!isStarted) {
      triggerContinueToMenu(e);
    }
  });
}

const continueBtn = document.getElementById("p3r-continue-btn");
if (continueBtn) {
  continueBtn.addEventListener("click", triggerContinueToMenu);
}

window.addEventListener("keydown", (e) => {
  if (!isStarted && isLoaded && openingScreen && openingScreen.style.display !== "none") {
    if (e.key === "Enter" || e.key === " " || e.key === "Escape" || e.key.startsWith("Arrow")) {
      triggerContinueToMenu(e);
    }
  }
});

if (loadingScreen) {
  loadingScreen.addEventListener("click", (e) => {
    if (isLoaded && !isStarted) {
      triggerContinueToMenu(e);
    }
  });
}

function enterExperience() {
  if (isStarted) return;
  isStarted = true;

  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
  if (openingScreen) {
    openingScreen.style.display = "none";
    if (openingVideo) {
      try { openingVideo.pause(); } catch (_) {}
    }
  }

  // Reveal floating music launcher button on main menu
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) {
    launcher.classList.add("is-visible");
  }

  // Start background soundtrack on main menu
  ensureBGM();

  const menuLeftDock = document.getElementById("menu-left-dock");
  if (menuLeftDock) menuLeftDock.classList.add("menu-entered");
  const menuColumn = document.getElementById("menu-column");
  if (menuColumn) menuColumn.classList.add("menu-entered");
  const menuProfileHeader = document.getElementById("menu-profile-header");
  if (menuProfileHeader) menuProfileHeader.classList.add("menu-entered");

  if (bgVideoIntro) {
    if (bgVideoIntro.preload !== "auto") bgVideoIntro.preload = "auto";
    bgVideoIntro.currentTime = 0;
    bgVideoIntro.muted = true;
    const playP = bgVideoIntro.play();
    if (playP !== undefined) {
      playP.catch((err) => {
        console.warn("Intro playback notice:", err);
        switchToLoopVideo();
      });
    }
  } else {
    switchToLoopVideo();
  }
}

// --------------------------------------------------------------------------
// 13. Event Listeners & Keyboard Navigation
// --------------------------------------------------------------------------
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener("click", closeModal);
if (portfolioModal) {
  portfolioModal.addEventListener("click", (e) => {
    if (e.target === portfolioModal) closeModal();
  });
}

if (slinkConfirmBtn) slinkConfirmBtn.addEventListener("click", confirmSlinkSelection);
if (slinkPreviewOpenBtn) slinkPreviewOpenBtn.addEventListener("click", confirmSlinkSelection);
if (slinkBackBtn) slinkBackBtn.addEventListener("click", handleInAppBackToMain);
if (skillBackBtn) skillBackBtn.addEventListener("click", handleInAppBackToMain);
if (skillTabPrevBtn) skillTabPrevBtn.addEventListener("click", prevSkillTab);
if (skillTabNextBtn) skillTabNextBtn.addEventListener("click", nextSkillTab);
if (aboutBackBtn) aboutBackBtn.addEventListener("click", handleInAppBackToMain);
if (aboutTabs && aboutTabs.length > 0) {
  aboutTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.aboutTab && currentAboutTab !== tab.dataset.aboutTab) {
        setAboutTab(tab.dataset.aboutTab);
      }
    });
  });
}
if (contactBackBtn) contactBackBtn.addEventListener("click", handleInAppBackToMain);

const hudConfirmBtn = document.getElementById("hud-confirm-btn");
if (hudConfirmBtn) {
  hudConfirmBtn.addEventListener("mouseenter", () => {
    playSFX();
  });
  hudConfirmBtn.addEventListener("click", (e) => {
    playConfirmSFX();
    handleOptionConfirm(selectedIndex, e);
  });
}

const hudSelectItem = document.querySelector(".hud-select-item");
if (hudSelectItem) {
  hudSelectItem.addEventListener("mouseenter", () => {
    playSFX();
  });
  hudSelectItem.addEventListener("click", (e) => {
    e.preventDefault();
    // Pure visual HUD indicator - no event triggered!
  });
}
if (toggleBgmBtn) {
  toggleBgmBtn.addEventListener("mouseenter", () => {
    playSFX();
  });
  toggleBgmBtn.addEventListener("click", toggleBGM);
}
if (toggleSfxBtn) {
  toggleSfxBtn.addEventListener("mouseenter", () => {
    playSFX();
  });
  toggleSfxBtn.addEventListener("click", toggleSFX);
}
updateAudioToggleUI();

if (contactMailRows && contactMailRows.length > 0) {
  contactMailRows.forEach((row, idx) => {
    row.addEventListener("mouseenter", () => {
      selectContactRow(idx);
    });
    row.addEventListener("click", () => {
      playConfirmSFX();
    });
  });
}

// Keyboard Router
document.addEventListener("keydown", (e) => {
  if (!isStarted) {
    if (isLoaded && (e.key === "Enter" || e.key === " " || e.key.length === 1)) {
      triggerContinueToMenu(e);
    }
    return;
  }

  // Global Audio Hotkeys (M = Music, F = SFX)
  if (e.key.toLowerCase() === "m") {
    e.preventDefault();
    toggleBGM();
    return;
  }
  if (e.key.toLowerCase() === "f") {
    e.preventDefault();
    toggleSFX();
    return;
  }

  // Active Screen: Modal (must be checked first so Escape closes modal over subpages)
  if (isModalOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace" || e.key.toLowerCase() === "a") {
      e.preventDefault();
      closeModal();
    }
    return;
  }

  // Active Screen: Project
  if (isProjectPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeProjectPage();
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      selectSlinkCard((selectedSlinkIndex + 1) % slinkData.length);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      selectSlinkCard((selectedSlinkIndex - 1 + slinkData.length) % slinkData.length);
    } else if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "a") {
      e.preventDefault();
      confirmSlinkSelection();
    }
    return;
  }

  // Active Screen: Certificate
  if (isSkillPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeSkillPage();
    } else if (e.key.toLowerCase() === "q" || e.key === "ArrowLeft") {
      e.preventDefault();
      prevSkillTab();
    } else if (e.key.toLowerCase() === "e" || e.key === "ArrowRight") {
      e.preventDefault();
      nextSkillTab();
    }
    return;
  }

  // Active Screen: About
  if (isAboutPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeAboutPage();
    } else if (e.key.toLowerCase() === "q" || e.key === "ArrowLeft") {
      e.preventDefault();
      cycleAboutTab(-1);
    } else if (e.key.toLowerCase() === "e" || e.key === "ArrowRight") {
      e.preventDefault();
      cycleAboutTab(1);
    }
    return;
  }

  // Active Screen: Contact
  if (isContactPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeContactPage();
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      selectContactRow((selectedContactIndex + 1) % contactMailRows.length);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      selectContactRow((selectedContactIndex - 1 + contactMailRows.length) % contactMailRows.length);
    } else if (e.key === "Enter" || e.key === " ") {
      if (contactMailRows[selectedContactIndex]) {
        contactMailRows[selectedContactIndex].click();
      }
    }
    return;
  }

  // Main Menu Navigation
  if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
    e.preventDefault();
    setIndex((selectedIndex + 1) % options.length);
  } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
    e.preventDefault();
    setIndex((selectedIndex - 1 + options.length) % options.length);
  } else if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "b") {
    e.preventDefault();
    handleOptionConfirm(selectedIndex);
  } else if (e.key === "Escape" || e.key.toLowerCase() === "a") {
    playCloseMenuSFX();
  }
});

// Tactile Mouse Wheel Menu Navigation (Persona 3 Responsive Blade Cycling)
let lastWheelNavTime = 0;
window.addEventListener("wheel", (e) => {
  if (!isStarted || isModalOpen || isProjectPageOpen || isSkillPageOpen || isAboutPageOpen || isContactPageOpen) {
    return;
  }
  // Prevent menu scrolling when mouse wheel is inside the music player deck
  if (e.target && e.target.closest && e.target.closest("#p3r-music-modal, .p3r-music-launcher, .music-floating-dialog")) {
    return;
  }
  const now = performance.now();
  if (now - lastWheelNavTime < 180) return; // Debounce for clean single-step navigation
  
  if (e.deltaY > 15) {
    lastWheelNavTime = now;
    setIndex((selectedIndex + 1) % options.length);
  } else if (e.deltaY < -15) {
    lastWheelNavTime = now;
    setIndex((selectedIndex - 1 + options.length) % options.length);
  }
}, { passive: true });

// Touch Swipe Navigation for Mobile & Tablet (iOS & Android)
let touchStartY = 0;
let touchStartX = 0;
let lastTouchNavTime = 0;
window.addEventListener("touchstart", (e) => {
  if (e.touches && e.touches.length === 1) {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }
}, { passive: true });

window.addEventListener("touchend", (e) => {
  if (!isStarted || isModalOpen || isProjectPageOpen || isSkillPageOpen || isAboutPageOpen || isContactPageOpen) {
    return;
  }
  if (e.changedTouches && e.changedTouches.length === 1) {
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const now = performance.now();
    if (now - lastTouchNavTime < 220) return;

    if (Math.abs(deltaY) > 35 && Math.abs(deltaY) > Math.abs(deltaX)) {
      lastTouchNavTime = now;
      if (deltaY < 0) {
        // Swipe Up -> Next option
        setIndex((selectedIndex + 1) % options.length);
      } else {
        // Swipe Down -> Previous option
        setIndex((selectedIndex - 1 + options.length) % options.length);
      }
    }
  }
}, { passive: true });

// --------------------------------------------------------------------------
// 14. Initialization & Window Exports
// --------------------------------------------------------------------------
renderOptions();

// Render Profile Header Name & About Page Name in Cutout Ransom Style
const profileNameContainer = document.getElementById("profile-name-container");
if (profileNameContainer) {
  profileNameContainer.innerHTML = `
    <div class="profile-name-stacked">
      ${createCutoutHtml("FATKHUL", 0)}
      ${createCutoutHtml("BARRI", 3)}
    </div>
  `;
}

// Render Subpage Headlines in Cutout Ransom Style (PROJECT, CERTIFICATE, ABOUT, MAIL)
// (Note: About Name "FATKHUL BARRI" is kept as clean normal text as requested)
const projHeader = document.getElementById("slink-project-text");
if (projHeader) projHeader.innerHTML = createCutoutHtml("PROJECT", 1);

const skillHeader = document.getElementById("skill-header-text");
if (skillHeader) skillHeader.innerHTML = createCutoutHtml("CERTIFICATE", 2);

const aboutHeader = document.getElementById("about-header-text");
if (aboutHeader) aboutHeader.innerHTML = createCutoutHtml("ABOUT", 3);

const contactHeader = document.querySelector(".p3r-mail-watermark");
if (contactHeader) contactHeader.innerHTML = createCutoutHtml("CONTACT", 4);

const urlParams = new URLSearchParams(window.location.search);
const initialSelect = parseInt(urlParams.get("select"), 10);
if (!isNaN(initialSelect) && initialSelect >= 0 && initialSelect < options.length) {
  setIndex(initialSelect);
} else {
  setIndex(0);
}

// Expose public API for debugging, URL parameters, and automated testing
window.openProjectPage = openProjectPage;
window.closeProjectPage = closeProjectPage;
window.openSkillPage = openSkillPage;
window.closeSkillPage = closeSkillPage;
window.openAboutPage = openAboutPage;
window.closeAboutPage = closeAboutPage;
window.openContactPage = openContactPage;
window.closeContactPage = closeContactPage;
window.triggerContactPhoneAnimation = triggerContactPhoneAnimation;
window.playWavyCircleTransition = playWavyCircleTransition;

// Corner Back Buttons (Pojok Kiri Atas Tiap Submenu - PC & Mobile)
function playBackSFX() {
  playCloseMenuSFX();
}

const cornerBackButtons = [
  { id: "project-mobile-back-btn", fn: closeProjectPage },
  { id: "skill-mobile-back-btn", fn: closeSkillPage },
  { id: "about-mobile-back-btn", fn: closeAboutPage },
  { id: "contact-mobile-back-btn", fn: closeContactPage }
];

cornerBackButtons.forEach(({ id, fn }) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.onclick = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      playCloseMenuSFX();
      fn();
    };
  }
});

function returnToOpeningScreen() {
  forceCloseAllSubpages();
  if (isModalOpen) closeModal();
  if (typeof isMusicModalOpen !== "undefined" && isMusicModalOpen) closeMusicModal();

  // Pause main menu BGM & loop video
  if (bgmLobbyEl && !bgmLobbyEl.paused) {
    try { bgmLobbyEl.pause(); } catch (_) {}
  }
  if (bgVideoLoop && !bgVideoLoop.paused) {
    try { bgVideoLoop.pause(); } catch (_) {}
  }
  if (bgVideoIntro && !bgVideoIntro.paused) {
    try { bgVideoIntro.pause(); } catch (_) {}
  }

  // Hide music launcher
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.remove("is-visible");

  isStarted = false;

  // Reveal opening screen
  if (openingScreen) {
    openingScreen.classList.remove("dismissed");
    openingScreen.style.display = "flex";
    openingScreen.style.opacity = "1";
    openingScreen.style.transform = "scale(1)";
    openingScreen.setAttribute("aria-hidden", "false");
  }

  const continueBtn = document.getElementById("p3r-continue-btn");
  if (continueBtn) {
    continueBtn.classList.remove("activating");
  }

  if (openingVideo) {
    openingVideo.currentTime = 0;
    openingVideo.muted = false;
    openingVideo.volume = 1.0;
    const playP = openingVideo.play();
    if (playP !== undefined) {
      playP.catch((err) => {
        console.warn("Opening playback notice:", err);
        openingVideo.muted = true;
        openingVideo.play().catch(() => {});
      });
    }
  }
}

function ensureMainMenuActive() {
  forceCloseAllSubpages();
  if (openingScreen) {
    openingScreen.style.display = "none";
    if (openingVideo) { try { openingVideo.pause(); } catch (_) {} }
  }
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.add("is-visible");
  ensureBGM();
  if (bgVideoLoop && bgVideoLoop.paused) {
    bgVideoLoop.play().catch(() => {});
  }
  const menuLeftDock = document.getElementById("menu-left-dock");
  if (menuLeftDock) menuLeftDock.classList.add("menu-entered");
  const menuColumn = document.getElementById("menu-column");
  if (menuColumn) menuColumn.classList.add("menu-entered");
  const menuProfileHeader = document.getElementById("menu-profile-header");
  if (menuProfileHeader) menuProfileHeader.classList.add("menu-entered");
  isStarted = true;
}

function ensureSubpageActive(pageName) {
  if (openingScreen) {
    openingScreen.style.display = "none";
    if (openingVideo) { try { openingVideo.pause(); } catch (_) {} }
  }
  isStarted = true;
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.add("is-visible");
  ensureBGM();

  if (pageName === "project") {
    if (isSkillPageOpen) closeSkillPage();
    if (isAboutPageOpen) closeAboutPage();
    if (isContactPageOpen) closeContactPage();
    if (!isProjectPageOpen) openProjectPage();
  } else if (["certificate", "skill", "skills"].includes(pageName)) {
    if (isProjectPageOpen) closeProjectPage();
    if (isAboutPageOpen) closeAboutPage();
    if (isContactPageOpen) closeContactPage();
    if (!isSkillPageOpen) openSkillPage();
  } else if (pageName === "about") {
    if (isProjectPageOpen) closeProjectPage();
    if (isSkillPageOpen) closeSkillPage();
    if (isContactPageOpen) closeContactPage();
    if (!isAboutPageOpen) openAboutPage();
  } else if (pageName === "contact") {
    if (isProjectPageOpen) closeProjectPage();
    if (isSkillPageOpen) closeSkillPage();
    if (isAboutPageOpen) closeAboutPage();
    if (!isContactPageOpen) openContactPage();
  }
}

// Popstate Listener: Browser Back/Forward Navigation without about:blank
window.addEventListener("popstate", (e) => {
  isHistoryNavigating = true;
  try {
    // If any modal is active, dismiss it first
    if (isModalOpen || (portfolioModal && portfolioModal.classList.contains("active"))) {
      closeModal();
      return;
    }
    if (typeof isMusicModalOpen !== "undefined" && isMusicModalOpen) {
      closeMusicModal();
      return;
    }

    const rawHash = (window.location.hash || "").replace("#", "");
    const targetPage = (e.state && e.state.page) || rawHash || (isStarted ? "main" : "opening");

    if (targetPage === "opening" || (!targetPage && !isStarted)) {
      returnToOpeningScreen();
    } else if (targetPage === "main" || !targetPage) {
      ensureMainMenuActive();
    } else if (targetPage === "project") {
      ensureSubpageActive("project");
    } else if (["certificate", "skill", "skills"].includes(targetPage)) {
      ensureSubpageActive("certificate");
    } else if (targetPage === "about") {
      ensureSubpageActive("about");
    } else if (targetPage === "contact") {
      ensureSubpageActive("contact");
    }
  } finally {
    setTimeout(() => { isHistoryNavigating = false; }, 350);
  }
});

// Initial history state check
try {
  const initialHash = (window.location.hash || "").replace("#", "");
  if (!initialHash) {
    history.replaceState({ page: "opening" }, "", "#opening");
  } else if (!history.state) {
    history.replaceState({ page: initialHash }, "", "#" + initialHash);
  }
} catch (err) {}

// URL Navigation Shortcuts & Responsive Init (Runs seamlessly on Desktop, iPad, Tablet, Mobile)
if (urlParams.get("page") === "project") {
  if (loadingScreen) loadingScreen.style.display = "none";
  if (openingScreen) openingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.add("is-visible");
  ensureBGM();
  openProjectPage();
  triggerProjectTitleAnimation();
} else if (["skill", "skills", "certificate", "certificates", "cert"].includes(urlParams.get("page"))) {
  if (loadingScreen) loadingScreen.style.display = "none";
  if (openingScreen) openingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.add("is-visible");
  ensureBGM();
  const tabParam = urlParams.get("tab") || urlParams.get("cat");
  if (tabParam && certTabsList.some((t) => t.id === tabParam)) {
    currentSkillTab = tabParam;
  }
  openSkillPage();
  triggerSkillTitleAnimation();
} else if (urlParams.get("page") === "about") {
  if (loadingScreen) loadingScreen.style.display = "none";
  if (openingScreen) openingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.add("is-visible");
  ensureBGM();
  openAboutPage();
  triggerAboutTitleAnimation();
} else if (urlParams.get("page") === "contact") {
  if (loadingScreen) loadingScreen.style.display = "none";
  if (openingScreen) openingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  const launcher = document.getElementById("p3r-music-launcher");
  if (launcher) launcher.classList.add("is-visible");
  ensureBGM();
  openContactPage();
} else if (urlParams.get("skip_loading") === "1") {
  if (loadingScreen) loadingScreen.style.display = "none";
  if (openingScreen) openingScreen.style.display = "none";
  enterExperience();
  switchToLoopVideo();
} else {
  startLoadingSequence();
}

// ==========================================================================
// 15. Persona 3 Reload - Interactive Floating Music Player & Playlist (Image 5)
// ==========================================================================
const p3rPlaylist = [
  {
    id: "color-your-night",
    title: "Color Your Night",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/Color Your Night.mp3"
  },
  {
    id: "battle-hymn-of-the-soul",
    title: "Battle Hymn of the Soul",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/Battle Hymn of the Soul.mp3"
  },
  {
    id: "burn-my-dread",
    title: "Burn My Dread",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/Burn My Dread.mp3"
  },
  {
    id: "full-moon-full-life",
    title: "Full Moon Full Life",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/Full Moon Full Life.mp3"
  },
  {
    id: "memories-of-you",
    title: "Memories of You",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/Memories of You.mp3"
  },
  {
    id: "paulownia-mall",
    title: "Paulownia Mall",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/Paulownia Mall.mp3"
  },
  {
    id: "this-mysterious-feeling",
    title: "This Mysterious Feeling",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/This Mysterious Feeling.mp3"
  },
  {
    id: "when-the-moons-reaching-out-stars",
    title: "When The Moon's Reaching Out Stars",
    artist: "Persona 3 Reload",
    badge: "P3R",
    src: "assets/Music/When The Moon's Reaching Out Stars.mp3"
  }
];

let currentTrackIndex = 0;

function setupP3RMusicPlayer() {
  const launcher = document.getElementById("p3r-music-launcher");
  const modal = document.getElementById("p3r-music-modal");
  const backdrop = document.getElementById("music-modal-backdrop");
  const closeBtn = document.getElementById("music-window-close-btn");
  const audioToggleBtn = document.getElementById("music-audio-toggle-btn");
  const audioToggleText = document.getElementById("music-audio-toggle-text");
  
  const playPauseBtn = document.getElementById("music-play-pause-btn");
  const playIcon = document.getElementById("music-play-icon");
  const heroBadge = document.getElementById("music-hero-badge");
  const activeTitle = document.getElementById("music-active-title");
  const activeArtist = document.getElementById("music-active-artist");
  
  const prevTitle = document.getElementById("music-prev-title");
  const prevArtist = document.getElementById("music-prev-artist");
  const nextTitle = document.getElementById("music-next-title");
  const nextArtist = document.getElementById("music-next-artist");
  
  const currentTimeEl = document.getElementById("music-current-time");
  const durationTimeEl = document.getElementById("music-duration-time");
  const timelineTrack = document.getElementById("music-timeline-track");
  const timelineFill = document.getElementById("music-timeline-fill");
  const timelineThumb = document.getElementById("music-timeline-thumb");
  
  const chevronPrev = document.getElementById("music-chevron-prev");
  const chevronNext = document.getElementById("music-chevron-next");
  const cardPrev = document.getElementById("music-card-prev");
  const cardNext = document.getElementById("music-card-next");
  const navPrevBtn = document.getElementById("music-nav-prev-btn");
  const navNextBtn = document.getElementById("music-nav-next-btn");
  const deckStack = document.getElementById("music-deck-stack");

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  function updatePlayerDeckUI() {
    const cur = p3rPlaylist[currentTrackIndex];
    const prevIdx = (currentTrackIndex - 1 + p3rPlaylist.length) % p3rPlaylist.length;
    const nextIdx = (currentTrackIndex + 1) % p3rPlaylist.length;
    const prevTrack = p3rPlaylist[prevIdx];
    const nextTrack = p3rPlaylist[nextIdx];

    if (activeTitle) activeTitle.textContent = cur.title;
    if (activeArtist) activeArtist.textContent = cur.artist;
    if (heroBadge) heroBadge.textContent = cur.badge;

    if (prevTitle) prevTitle.textContent = prevTrack.title;
    if (prevArtist) prevArtist.textContent = prevTrack.artist;

    if (nextTitle) nextTitle.textContent = nextTrack.title;
    if (nextArtist) nextArtist.textContent = nextTrack.artist;

    const isPlaying = bgmLobbyEl && !bgmLobbyEl.paused && !isBgmMuted;
    if (playIcon) playIcon.textContent = isPlaying ? "❚❚" : "▶";
    if (launcher) launcher.classList.toggle("is-playing", isPlaying);

    if (audioToggleText) audioToggleText.textContent = isBgmMuted ? "AUDIO OFF" : "AUDIO ON";
    if (audioToggleBtn) audioToggleBtn.classList.toggle("is-muted", isBgmMuted);
  }

  function playTrack(idx) {
    currentTrackIndex = idx;
    if (bgmLobbyEl) {
      bgmLobbyEl.src = p3rPlaylist[currentTrackIndex].src;
      bgmLobbyEl.currentTime = 0;
      if (!isBgmMuted) {
        bgmLobbyEl.play().catch(() => {});
      }
    }
    updatePlayerDeckUI();
    if (!isSfxMuted) playConfirmSFX();
  }

  function nextTrack() {
    playTrack((currentTrackIndex + 1) % p3rPlaylist.length);
  }

  function prevTrack() {
    playTrack((currentTrackIndex - 1 + p3rPlaylist.length) % p3rPlaylist.length);
  }

  function togglePlayPause() {
    if (!bgmLobbyEl) return;
    if (bgmLobbyEl.paused || isBgmMuted) {
      if (isBgmMuted) {
        isBgmMuted = false;
        updateAudioToggleUI();
      }
      bgmLobbyEl.play().catch(() => {});
    } else {
      bgmLobbyEl.pause();
    }
    updatePlayerDeckUI();
    if (!isSfxMuted) playConfirmSFX();
  }

  function isMusicModalOpen() {
    return modal && modal.style.display !== "none" && modal.style.display !== "";
  }

  function updateMusicDialogPosition() {
    if (!modal || !launcher) return;
    const dialog = modal.querySelector(".music-floating-dialog");
    if (!dialog) return;

    const launcherRect = launcher.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Responsive width based on screen width
    const isMobileLandscape = vh <= 550 || vw <= 900;
    const dialogWidth = Math.min(isMobileLandscape ? 315 : 360, vw - 24);
    dialog.style.setProperty("width", `${dialogWidth}px`, "important");
    dialog.style.setProperty("max-width", `${vw - 24}px`, "important");

    // Dialog rendered height or estimated fallback (single card player is sleek & compact)
    const dialogHeight = dialog.offsetHeight || (isMobileLandscape ? 165 : 185);

    // Horizontal placement: anchor near launcher and clamp within screen bounds
    let left;
    const launcherCenterX = launcherRect.left + launcherRect.width / 2;
    if (launcherCenterX > vw / 2) {
      // Launcher is on right half: align dialog right edge with launcher right edge
      left = launcherRect.right - dialogWidth;
    } else {
      // Launcher is on left half: align dialog left edge with launcher left edge
      left = launcherRect.left;
    }
    // Clamp horizontally with at least 14px margin so -12deg slanted corners never clip or touch screen borders
    left = Math.max(14, Math.min(left, vw - dialogWidth - 14));

    // Vertical placement: place below launcher if space permits, else above
    const spaceBelow = vh - launcherRect.bottom - 8;
    const spaceAbove = launcherRect.top - 8;

    let top;
    if (spaceBelow >= dialogHeight || spaceBelow >= spaceAbove) {
      top = launcherRect.bottom + 8;
    } else {
      top = launcherRect.top - dialogHeight - 8;
    }
    // Clamp vertically with 10px margin
    top = Math.max(10, Math.min(top, vh - dialogHeight - 12));

    dialog.style.setProperty("position", "fixed", "important");
    dialog.style.setProperty("left", `${Math.round(left)}px`, "important");
    dialog.style.setProperty("top", `${Math.round(top)}px`, "important");
    dialog.style.setProperty("right", "auto", "important");
    dialog.style.setProperty("bottom", "auto", "important");
    dialog.style.setProperty("margin", "0", "important");
  }

  function openMusicModal() {
    if (modal) {
      modal.style.display = "flex";
      updatePlayerDeckUI();
      updateMusicDialogPosition();
      requestAnimationFrame(() => {
        updateMusicDialogPosition();
      });
    }
    if (!isSfxMuted) playSFX();
  }

  function closeMusicModal() {
    if (modal) modal.style.display = "none";
    if (!isSfxMuted) playCloseMenuSFX();
  }

  function toggleMusicModal() {
    if (isMusicModalOpen()) {
      closeMusicModal();
    } else {
      openMusicModal();
    }
  }

  // Floating Draggable Launcher Setup (Bisa dipindah kemana saja secara bebas)
  function setupDraggableLauncher(el, onToggle) {
    if (!el) return;

    let isPointerDown = false;
    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let startY = 0;
    let initLeft = 0;
    let initTop = 0;

    el.style.touchAction = "none";

    function clampVal(v, min, max) {
      return Math.max(min, Math.min(v, max));
    }

    function getBounds() {
      const r = el.getBoundingClientRect();
      const margin = 8;
      const maxX = Math.max(margin, window.innerWidth - r.width - margin);
      const maxY = Math.max(margin, window.innerHeight - r.height - margin);
      return { minX: margin, minY: margin, maxX, maxY };
    }

    function onPointerDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      isPointerDown = true;
      isDragging = false;
      hasMoved = false;
      startX = e.clientX;
      startY = e.clientY;

      const r = el.getBoundingClientRect();
      initLeft = r.left;
      initTop = r.top;

      try {
        el.setPointerCapture(e.pointerId);
      } catch (_) {}
    }

    function onPointerMove(e) {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const dist = Math.hypot(dx, dy);

      if (!isDragging && dist > 5) {
        isDragging = true;
        hasMoved = true;
        el.classList.add("is-dragging");
      }

      if (isDragging) {
        e.preventDefault();
        const b = getBounds();
        const newX = clampVal(initLeft + dx, b.minX, b.maxX);
        const newY = clampVal(initTop + dy, b.minY, b.maxY);

        el.style.setProperty("left", `${Math.round(newX)}px`, "important");
        el.style.setProperty("top", `${Math.round(newY)}px`, "important");
        el.style.setProperty("right", "auto", "important");
        el.style.setProperty("bottom", "auto", "important");

        // If music playlist is open, keep dialog anchored to launcher!
        if (isMusicModalOpen()) {
          updateMusicDialogPosition();
        }
      }
    }

    function onPointerUp(e) {
      if (!isPointerDown) return;
      isPointerDown = false;

      if (isDragging) {
        isDragging = false;
        el.classList.remove("is-dragging");
        try {
          el.releasePointerCapture(e.pointerId);
        } catch (_) {}

        const b = getBounds();
        const r = el.getBoundingClientRect();
        const clampedX = clampVal(r.left, b.minX, b.maxX);
        const clampedY = clampVal(r.top, b.minY, b.maxY);

        el.style.setProperty("left", `${Math.round(clampedX)}px`, "important");
        el.style.setProperty("top", `${Math.round(clampedY)}px`, "important");
        el.style.setProperty("right", "auto", "important");
        el.style.setProperty("bottom", "auto", "important");

        if (isMusicModalOpen()) {
          updateMusicDialogPosition();
        }
      }
    }

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    el.addEventListener("click", (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
        hasMoved = false;
        return;
      }
      if (typeof onToggle === "function") {
        onToggle(e);
      }
    });

    window.addEventListener("resize", () => {
      if (el.style.left && el.style.left !== "auto") {
        const b = getBounds();
        const r = el.getBoundingClientRect();
        const clampedX = clampVal(r.left, b.minX, b.maxX);
        const clampedY = clampVal(r.top, b.minY, b.maxY);
        el.style.setProperty("left", `${Math.round(clampedX)}px`, "important");
        el.style.setProperty("top", `${Math.round(clampedY)}px`, "important");
      }
      if (isMusicModalOpen()) {
        updateMusicDialogPosition();
      }
    }, { passive: true });
  }

  // Hook launcher & modal controls
  if (launcher) setupDraggableLauncher(launcher, toggleMusicModal);
  if (closeBtn) closeBtn.addEventListener("click", closeMusicModal);
  if (backdrop) backdrop.addEventListener("click", closeMusicModal);
  
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      toggleBGM();
      updatePlayerDeckUI();
    });
  }

  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlayPause);
  
  const ctrlPrevBtn = document.getElementById("music-ctrl-prev-btn");
  const ctrlNextBtn = document.getElementById("music-ctrl-next-btn");
  if (ctrlPrevBtn) ctrlPrevBtn.addEventListener("click", (e) => { e.stopPropagation(); prevTrack(); });
  if (ctrlNextBtn) ctrlNextBtn.addEventListener("click", (e) => { e.stopPropagation(); nextTrack(); });

  if (cardPrev) cardPrev.addEventListener("click", prevTrack);
  if (cardNext) cardNext.addEventListener("click", nextTrack);
  if (chevronPrev) chevronPrev.addEventListener("click", (e) => { e.stopPropagation(); prevTrack(); });
  if (chevronNext) chevronNext.addEventListener("click", (e) => { e.stopPropagation(); nextTrack(); });
  if (navPrevBtn) navPrevBtn.addEventListener("click", prevTrack);
  if (navNextBtn) navNextBtn.addEventListener("click", nextTrack);

  // Skip -10s and +10s controls
  const replay10Btn = document.getElementById("music-replay-10s-btn");
  const forward10Btn = document.getElementById("music-forward-10s-btn");

  if (replay10Btn) {
    replay10Btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (bgmLobbyEl) {
        bgmLobbyEl.currentTime = Math.max(0, bgmLobbyEl.currentTime - 10);
        updateTimelineUI();
        playNavSFX();
      }
    });
  }

  if (forward10Btn) {
    forward10Btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (bgmLobbyEl) {
        bgmLobbyEl.currentTime = Math.min(bgmLobbyEl.duration || 9999, bgmLobbyEl.currentTime + 10);
        updateTimelineUI();
        playNavSFX();
      }
    });
  }

  // Mouse wheel track switching inside playlist deck (stops propagation so main menu doesn't scroll)
  if (deckStack) {
    deckStack.addEventListener("wheel", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY > 0) nextTrack();
      else if (e.deltaY < 0) prevTrack();
    }, { passive: false });
  }

  const musicFloatingDialog = document.querySelector(".music-floating-dialog");
  if (musicFloatingDialog) {
    musicFloatingDialog.addEventListener("wheel", (e) => {
      e.stopPropagation();
    }, { passive: false });
  }

  // Interactive Timeline Scrubber (Seeker)
  if (timelineTrack && bgmLobbyEl) {
    let isDragging = false;

    function seekFromEvent(e) {
      const rect = timelineTrack.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      if (bgmLobbyEl.duration) {
        bgmLobbyEl.currentTime = ratio * bgmLobbyEl.duration;
      }
    }

    timelineTrack.addEventListener("click", seekFromEvent);

    timelineTrack.addEventListener("mousedown", (e) => {
      isDragging = true;
      seekFromEvent(e);
      const onMove = (ev) => { if (isDragging) seekFromEvent(ev); };
      const onUp = () => {
        isDragging = false;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    });

    timelineTrack.addEventListener("touchstart", (e) => {
      isDragging = true;
      seekFromEvent(e);
    }, { passive: true });

    timelineTrack.addEventListener("touchmove", (e) => {
      if (isDragging) seekFromEvent(e);
    }, { passive: true });

    timelineTrack.addEventListener("touchend", () => {
      isDragging = false;
    });
  }

  // Hook bgmLobbyEl timeupdate & loadedmetadata
  if (bgmLobbyEl) {
    bgmLobbyEl.addEventListener("timeupdate", () => {
      const cur = bgmLobbyEl.currentTime || 0;
      const dur = bgmLobbyEl.duration || 0;
      if (currentTimeEl) currentTimeEl.textContent = formatTime(cur);
      if (durationTimeEl) durationTimeEl.textContent = formatTime(dur);
      if (dur > 0) {
        const pct = (cur / dur) * 100;
        if (timelineFill) timelineFill.style.width = `${pct}%`;
        if (timelineThumb) timelineThumb.style.left = `${pct}%`;
      }
      updatePlayerDeckUI();
    });

    bgmLobbyEl.addEventListener("loadedmetadata", () => {
      if (durationTimeEl) durationTimeEl.textContent = formatTime(bgmLobbyEl.duration);
    });

    bgmLobbyEl.addEventListener("ended", () => {
      nextTrack();
    });

    bgmLobbyEl.addEventListener("play", updatePlayerDeckUI);
    bgmLobbyEl.addEventListener("pause", updatePlayerDeckUI);
  }

  // Update deck once initially
  updatePlayerDeckUI();

  // Expose global controller
  window.p3rMusicPlayer = {
    open: openMusicModal,
    close: closeMusicModal,
    next: nextTrack,
    prev: prevTrack,
    playTrack: playTrack,
    togglePlayPause: togglePlayPause,
    updateUI: updatePlayerDeckUI
  };
}

// Initialize Music Player
setupP3RMusicPlayer();

// ==========================================================================
// 16. Persona 3 Reload - Mobile Portrait Blocker & Orientation Helper
// ==========================================================================
function setupOrientationBlocker() {
  const rotateOverlay = document.getElementById("p3r-rotate-overlay");
  if (!rotateOverlay) return;

  function updateOrientationState() {
    const isPortrait = (window.innerHeight > window.innerWidth) && (window.innerWidth <= 1024);
    if (isPortrait) {
      document.body.classList.add("portrait-locked");
    } else {
      document.body.classList.remove("portrait-locked");
    }
  }

  // Listen to orientation and resize events
  window.addEventListener("resize", updateOrientationState, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(updateOrientationState, 150);
  }, { passive: true });

  // Optional tap on overlay: try requesting fullscreen or landscape lock if supported
  rotateOverlay.addEventListener("click", () => {
    try {
      if (screen.orientation && typeof screen.orientation.lock === "function") {
        screen.orientation.lock("landscape").catch(() => {});
      }
    } catch (_) {}
  });

  updateOrientationState();
}

setupOrientationBlocker();
