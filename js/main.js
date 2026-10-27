/**
 * MR. BIRIYANIWALA - ADELAIDE
 * Hyderabadi Dum Biryani & Charcoal Tandoor House
 * Main Interactive Engine & Performance-Optimized Controller
 */

// ==============================================================================
// 1. CONFIGURATION & BUSINESS DETAILS
// ==============================================================================

const SITE = {
  name: "Mr. Biriyaniwala",
  tagline: "Hyderabadi Dum Biryani & Charcoal Tandoor",
  city: "Adelaide",
  timeZone: "Australia/Adelaide",
  phone: "+61 8 8231 9988",
  displayPhone: "(08) 8231 9988",
  address: "184 Gouger Street, Adelaide SA 5000",
  instagram: "@mrbiriyaniwala.adl",
  openingHours: {
    // 7 days a week: 11:30 AM to 10:30 PM (22:30)
    openHour: 11,
    openMinute: 30,
    closeHour: 22,
    closeMinute: 30
  }
};

const DISHES = [
  {
    id: "biryani",
    giantWord: "Biriyani",
    category: "01 / DUM PUKHT",
    titleLine1: "Gosht Dum",
    titleLine2: "Biryani",
    accent: "#f0a032",
    accentGlow: "rgba(240, 160, 50, 0.28)",
    price: "$28",
    description: "Aged long-grain basmati and pasture-raised goat on the bone, infused with twenty-four strands of Kashmiri saffron under a sealed whole-wheat dough purdah.",
    duration: 8.0
  },
  {
    id: "makhani",
    giantWord: "Makhani",
    category: "02 / CLAY POT CURRIES",
    titleLine1: "Old Delhi Murgh",
    titleLine2: "Makhani",
    accent: "#c2361f",
    accentGlow: "rgba(194, 54, 31, 0.28)",
    price: "$26",
    description: "Charcoal-charred chicken simmered for eight hours in vine-ripened tomatoes, churned cultured butter, and hand-rubbed kasuri methi leaves.",
    duration: 8.04
  },
  {
    id: "tandoori",
    giantWord: "Tandoori",
    category: "03 / IRON SKEWER",
    titleLine1: "Charcoal Fire",
    titleLine2: "Tandoori Murgh",
    accent: "#c06a3a",
    accentGlow: "rgba(192, 106, 58, 0.28)",
    price: "$25",
    description: "Whole spring chicken steeped for twelve hours in hung buffalo curd, cold-pressed mustard oil, and fiery Mathania chillies, roasted at 480°C.",
    duration: 8.0
  },
  {
    id: "seekh",
    giantWord: "Seekh",
    category: "04 / CHARCOAL PIT",
    titleLine1: "Peshawari Lamb",
    titleLine2: "Seekh Kebab",
    accent: "#d4883b",
    accentGlow: "rgba(212, 136, 59, 0.28)",
    price: "$24",
    description: "Finely minced pasture lamb shoulder beaten with marrow, green cardamom, and smoked cloves, seared over screaming-hot red ironbark coals.",
    duration: 8.0
  },
  {
    id: "tikka",
    giantWord: "Tikka",
    category: "05 / FRESH PANEER",
    titleLine1: "Tandoori Malai",
    titleLine2: "Paneer Tikka",
    accent: "#e89a3c",
    accentGlow: "rgba(232, 154, 60, 0.28)",
    price: "$22",
    description: "Freshly curdled full cream cottage paneer marinated in crushed yellow mustard seed, toasted carom seeds, and blistered sweet bell peppers.",
    duration: 8.0
  },
  {
    id: "dal",
    giantWord: "Dal",
    category: "06 / SLOW OVERNIGHT",
    titleLine1: "Twenty-Four Hour",
    titleLine2: "Dal Makhani",
    accent: "#9d482b",
    accentGlow: "rgba(157, 72, 43, 0.28)",
    price: "$20",
    description: "Slow-simmered whole black urad lentils and red kidney beans steeped through the night over dying tandoor charcoals with churned white butter.",
    duration: 8.0
  },
  {
    id: "naan",
    giantWord: "Naan",
    category: "07 / TANDOOR BREADS",
    titleLine1: "Clay Oven Garlic",
    titleLine2: "Butter Naan",
    accent: "#ffc35a",
    accentGlow: "rgba(255, 195, 90, 0.28)",
    price: "$7",
    description: "Naturally fermented flour slapped firmly against the curved 480°C clay wall, blistered in thirty seconds and basted instantly with smoking garlic ghee.",
    duration: 8.0
  },
  {
    id: "lassi",
    giantWord: "Lassi",
    category: "08 / COLD REFRESH",
    titleLine1: "Alphonso Mango",
    titleLine2: "Kesari Lassi",
    accent: "#f5a623",
    accentGlow: "rgba(245, 166, 35, 0.28)",
    price: "$9",
    description: "Chilled thick buffalo milk curd hand-whisked with Ratnagiri Alphonso mango pulp, crushed green cardamom pods, and delicate edible silver vark.",
    duration: 8.0
  }
];

// ==============================================================================
// 2. LIVE ADELAIDE TIME & RESTAURANT STATUS
// ==============================================================================

function updateAdelaideTime() {
  const statusPill = document.getElementById("nav-status-pill");
  const statusText = document.getElementById("status-text");
  const drawerStatusPill = document.getElementById("drawer-status-pill");
  const drawerStatusText = document.getElementById("drawer-status-text");

  try {
    const now = new Date();
    const adlString = now.toLocaleString("en-US", { timeZone: SITE.timeZone });
    const adlDate = new Date(adlString);
    const hour = adlDate.getHours();
    const minute = adlDate.getMinutes();
    const totalMinutes = hour * 60 + minute;

    const openMin = SITE.openingHours.openHour * 60 + SITE.openingHours.openMinute; // 11:30 = 690
    const closeMin = SITE.openingHours.closeHour * 60 + SITE.openingHours.closeMinute; // 22:30 = 1350

    const isOpen = totalMinutes >= openMin && totalMinutes < closeMin;
    const msg = isOpen ? "Open now · closes 22:30" : "Closed · opens 11:30";

    if (statusPill && statusText) {
      statusPill.classList.toggle("is-closed", !isOpen);
      statusText.textContent = msg;
    }
    if (drawerStatusPill && drawerStatusText) {
      drawerStatusPill.classList.toggle("is-closed", !isOpen);
      drawerStatusText.textContent = msg;
    }
  } catch (err) {
    if (statusText) statusText.textContent = "Open daily · 11:30 - 22:30";
    if (drawerStatusText) drawerStatusText.textContent = "Open daily · 11:30 - 22:30";
  }
}

// ==============================================================================
// 3. HIGH-PERFORMANCE VIDEO STREAMING & ON-DEMAND PRELOADER
// ==============================================================================

const initializedVideos = new Set();

function isMobileScreen() {
  return window.innerWidth <= 900;
}

function getVideoPath(dishId) {
  return isMobileScreen() ? `media/hero/${dishId}-m.mp4` : `media/hero/${dishId}.mp4`;
}

function ensureVideoLoaded(dishId, priority = "metadata") {
  if (initializedVideos.has(dishId)) return;
  const video = document.getElementById(`video-${dishId}`);
  if (!video) return;

  const path = getVideoPath(dishId);
  video.src = path;
  video.preload = priority;
  initializedVideos.add(dishId);

  // Prime for seamless iOS scrubbing
  video.muted = true;
  video.playsInline = true;
}

// Prime current and adjacent dish videos on-demand
function primeAdjacentDishes(centerIndex) {
  const currentDish = DISHES[centerIndex];
  if (currentDish) ensureVideoLoaded(currentDish.id, "auto");

  const nextIndex = Math.min(DISHES.length - 1, centerIndex + 1);
  if (DISHES[nextIndex]) ensureVideoLoaded(DISHES[nextIndex].id, "metadata");

  const prevIndex = Math.max(0, centerIndex - 1);
  if (DISHES[prevIndex]) ensureVideoLoaded(DISHES[prevIndex].id, "metadata");
}

// ==============================================================================
// 4. FAST & SNAPPY PRELOADER
// ==============================================================================

const loaderMessages = [
  "Sealing the handi with dough...",
  "Slow-cooking on dum...",
  "Lifting the lid..."
];

async function initLoader() {
  const loaderWrapper = document.getElementById("loader");
  const barFill = document.getElementById("loader-fill");
  const counter = document.getElementById("loader-counter");
  const messageEl = document.getElementById("loader-msg");

  let progress = 0;
  let msgIdx = 0;

  // Initialize Dish 0 video immediately
  ensureVideoLoaded(DISHES[0].id, "auto");

  // Fast progress ticker (reaches 100% in ~600ms)
  const progressInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 10;
    if (progress > 95) progress = 95;
    if (barFill) barFill.style.width = `${progress}%`;
    if (counter) counter.textContent = String(progress).padStart(3, "0");

    if (progress > 35 && msgIdx === 0) {
      msgIdx = 1;
      if (messageEl) messageEl.textContent = loaderMessages[1];
    } else if (progress > 70 && msgIdx === 1) {
      msgIdx = 2;
      if (messageEl) messageEl.textContent = loaderMessages[2];
    }
  }, 45);

  // Maximum wait of 1.2s to prevent holding the user hostage
  const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 1200));
  const fontsPromise = document.fonts ? document.fonts.ready : Promise.resolve();

  await Promise.race([fontsPromise, timeoutPromise]);

  clearInterval(progressInterval);
  if (barFill) barFill.style.width = "100%";
  if (counter) counter.textContent = "100";
  if (messageEl) messageEl.textContent = loaderMessages[2];

  // Prime Dish 1 in background
  setTimeout(() => primeAdjacentDishes(0), 300);

  // Reveal site with split curtains
  setTimeout(() => {
    if (loaderWrapper) {
      loaderWrapper.classList.add("loaded");
      setTimeout(() => loaderWrapper.classList.add("hidden"), 900);
    }
  }, 250);
}

// ==============================================================================
// 5. HERO SCROLL-SCRUBBING ENGINE (GSAP + ScrollTrigger)
// ==============================================================================

let currentDishIndex = 0;
let previousDishIndex = 0;
let targetTime = 0;
let currentLerpTime = 0;
let scrollTriggerInstance = null;
let pinDistance = 0;

function renderGiantWord(word, isInitial = false) {
  const container = document.getElementById("giant-word");
  if (!container) return;

  const letters = word.split("");
  const spans = letters.map((char, i) => {
    return `<span style="transition-delay: ${i * 30}ms">${char}</span>`;
  }).join("");

  if (isInitial) {
    container.innerHTML = spans;
    return;
  }

  container.classList.add("anim-out");
  setTimeout(() => {
    container.innerHTML = spans;
    container.classList.remove("anim-out");
    container.classList.add("anim-in");
    requestAnimationFrame(() => {
      container.classList.remove("anim-in");
    });
  }, 220);
}

function updateHeroMetadata(dish, direction) {
  const categoryEl = document.getElementById("dish-category");
  const line1El = document.getElementById("title-line-1");
  const line2El = document.getElementById("title-line-2");
  const descEl = document.getElementById("dish-desc");
  const priceEl = document.getElementById("dish-price");
  const counterEl = document.getElementById("counter-current");

  if (categoryEl) categoryEl.textContent = dish.category;
  if (line1El) line1El.textContent = dish.titleLine1;
  if (line2El) line2El.textContent = dish.titleLine2;
  if (descEl) descEl.textContent = dish.description;
  if (priceEl) priceEl.textContent = dish.price;
  if (counterEl) counterEl.textContent = String(currentDishIndex + 1).padStart(2, "0");

  // Dynamic hero accent
  document.documentElement.style.setProperty("--accent", dish.accent);
  document.documentElement.style.setProperty("--accent-glow", dish.accentGlow);

  // Update Desktop Right Index buttons
  document.querySelectorAll(".index-dish-item").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === currentDishIndex);
  });

  // Update Mobile Quick Chips
  document.querySelectorAll(".mobile-dish-chip").forEach((chip, idx) => {
    const isActive = idx === currentDishIndex;
    chip.classList.toggle("active", isActive);
    if (isActive) {
      chip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });

  // Giant background word watermark
  renderGiantWord(dish.giantWord);
}

function switchDish(newIndex, direction = 1) {
  if (newIndex === currentDishIndex) return;

  previousDishIndex = currentDishIndex;
  currentDishIndex = newIndex;

  const outgoingVideo = document.getElementById(`video-${DISHES[previousDishIndex].id}`);
  const incomingVideo = document.getElementById(`video-${DISHES[currentDishIndex].id}`);
  const incomingDish = DISHES[currentDishIndex];

  // Prime adjacent media
  primeAdjacentDishes(currentDishIndex);

  // Outgoing animation
  if (outgoingVideo) {
    outgoingVideo.classList.remove("is-active", "is-entering");
    outgoingVideo.classList.add("is-leaving");
  }

  // Incoming animation
  if (incomingVideo) {
    incomingVideo.classList.remove("is-leaving");
    incomingVideo.classList.add("is-entering");

    const duration = incomingDish.duration || 8.0;
    const initialSeekTime = Math.min(duration - 0.05, Math.max(0, targetTime));

    if (incomingVideo.readyState >= 1) {
      try {
        incomingVideo.currentTime = initialSeekTime;
      } catch (e) {}
    }
    currentLerpTime = initialSeekTime;

    requestAnimationFrame(() => {
      incomingVideo.classList.remove("is-entering");
      incomingVideo.classList.add("is-active");
    });
  }

  updateHeroMetadata(incomingDish, direction);
}

function jumpToDish(targetIndex) {
  if (isNaN(targetIndex) || !scrollTriggerInstance) return;
  const targetProgress = (targetIndex + 0.05) / DISHES.length;
  const scrollPos = scrollTriggerInstance.start + targetProgress * pinDistance;

  window.scrollTo({
    top: scrollPos,
    behavior: "smooth"
  });
}

function initHeroScrub() {
  const heroPinEl = document.getElementById("hero-pin");
  const heroContainer = document.getElementById("hero-container");
  const progressBar = document.getElementById("timeline-progress");

  if (!heroPinEl || !heroContainer) return;

  // Initialize first dish
  updateHeroMetadata(DISHES[0], 1);
  renderGiantWord(DISHES[0].giantWord, true);

  const firstVideo = document.getElementById(`video-${DISHES[0].id}`);
  if (firstVideo) {
    firstVideo.classList.add("is-active");
  }

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP / ScrollTrigger not loaded yet");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const bandFactor = window.innerWidth <= 900 ? 0.75 : 1.0;
  pinDistance = window.innerHeight * bandFactor * 8;

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: heroContainer,
    pin: heroPinEl,
    start: "top top",
    end: `+=${pinDistance}`,
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress; // 0 to 1
      const direction = self.direction; // 1 = down, -1 = up

      if (progressBar) {
        progressBar.style.width = `${Math.max(12.5, progress * 100)}%`;
      }

      const totalDishes = DISHES.length;
      const rawDishIndex = progress * totalDishes;
      const targetDishIndex = Math.min(totalDishes - 1, Math.max(0, Math.floor(rawDishIndex)));

      const localProgress = rawDishIndex - targetDishIndex;
      const currentDish = DISHES[targetDishIndex];
      const duration = currentDish.duration || 8.0;

      targetTime = localProgress * (duration - 0.05);

      if (targetDishIndex !== currentDishIndex) {
        switchDish(targetDishIndex, direction);
      }
    }
  });

  // RAF ticker for ultra-smooth seek lerp
  gsap.ticker.add(() => {
    const activeVideo = document.getElementById(`video-${DISHES[currentDishIndex].id}`);
    if (!activeVideo || activeVideo.seeking || activeVideo.readyState < 1) return;

    currentLerpTime += (targetTime - currentLerpTime) * 0.22;

    if (Math.abs(activeVideo.currentTime - currentLerpTime) > 0.008) {
      try {
        activeVideo.currentTime = currentLerpTime;
      } catch (err) {}
    }
  });

  // Setup click-to-scroll on desktop index
  document.querySelectorAll(".index-dish-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetIndex = parseInt(btn.getAttribute("data-index"), 10);
      jumpToDish(targetIndex);
    });
  });

  // Setup click-to-scroll on mobile chips
  document.querySelectorAll(".mobile-dish-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetIndex = parseInt(chip.getAttribute("data-index"), 10);
      jumpToDish(targetIndex);
    });
  });

  // Setup 3D cursor tilt on stage (Desktop pointer only)
  const stage = document.getElementById("hero-stage");
  if (stage && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
      const rotX = -yPercent * 5;
      const rotY = xPercent * 7;
      stage.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }, { passive: true });
  }
}

// ==============================================================================
// 6. MOBILE NAVIGATION DRAWER
// ==============================================================================

function initMobileDrawer() {
  const burgerBtn = document.getElementById("nav-burger-btn");
  const drawer = document.getElementById("mobile-drawer");
  const closeBtn = document.getElementById("drawer-close-btn");
  const overlay = document.getElementById("drawer-overlay");

  if (!burgerBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    burgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burgerBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  // Close when clicking any nav link in drawer
  document.querySelectorAll(".drawer-link").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });
}

// ==============================================================================
// 7. MENU FILTER SYSTEM
// ==============================================================================

function initMenuFilter() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const menuCards = document.querySelectorAll(".menu-card");

  if (!filterTabs.length || !menuCards.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filterValue = tab.getAttribute("data-filter");

      menuCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            if (tab.getAttribute("data-filter") !== "all" && card.getAttribute("data-category") !== tab.getAttribute("data-filter")) {
              card.style.display = "none";
            }
          }, 200);
        }
      });
    });
  });
}

// ==============================================================================
// 8. TABLE RESERVATION FORM
// ==============================================================================

function initBookingForm() {
  const form = document.getElementById("booking-form");
  const feedback = document.getElementById("form-feedback");
  const submitBtn = document.getElementById("b-submit-btn");

  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("b-name")?.value || "Guest";
    const guests = document.getElementById("b-guests")?.value || "4";
    const time = document.getElementById("b-time")?.value || "6:00 PM";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Reserving...";
    }

    setTimeout(() => {
      feedback.style.color = "#2ed573";
      feedback.textContent = `Shukriya, ${name}! Your table for ${guests} at ${time} has been requested. We will SMS your confirmation shortly.`;
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Request Reservation</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
      }
    }, 600);
  });
}

// ==============================================================================
// 9. CUSTOM CURSOR & MAGNETIC BEHAVIORS
// ==============================================================================

function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const ring = document.getElementById("cursor-ring");
  const dot = document.getElementById("cursor-dot");
  const label = document.getElementById("cursor-label");

  if (!cursor || !ring || !dot || !window.matchMedia("(pointer: fine)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  }, { passive: true });

  if (typeof gsap !== "undefined") {
    gsap.ticker.add(() => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    });
  }

  // Hover triggers
  const interactiveElements = document.querySelectorAll("[data-cursor]");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const text = el.getAttribute("data-cursor") || "TASTE";
      cursor.classList.add("active");
      if (label) label.textContent = text;
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      if (label) label.textContent = "";
    });
  });
}

// ==============================================================================
// 10. LENIS SMOOTH SCROLLING SETUP
// ==============================================================================

function initLenis() {
  if (typeof Lenis === "undefined") return;

  // On touchscreens, respect native touch physics; on desktop wheel, smooth inertia
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.0,
    syncTouch: false
  });

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  if (typeof gsap !== "undefined") {
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

// ==============================================================================
// 11. NAVIGATION SCROLL HIDE/SHOW
// ==============================================================================

function initNavScroll() {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 150) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }
    lastScrollY = currentY;
  }, { passive: true });
}

// ==============================================================================
// 12. INITIALIZATION ENTRY POINT
// ==============================================================================

function initApp() {
  updateAdelaideTime();
  setInterval(updateAdelaideTime, 60000);

  initLenis();
  initCustomCursor();
  initNavScroll();
  initMobileDrawer();
  initMenuFilter();
  initBookingForm();
  initHeroScrub();
  initLoader();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
