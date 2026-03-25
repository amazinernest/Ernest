// =============================================
// MAIN JAVASCRIPT — Ernest Okpako Portfolio
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Active Nav Link ----
  setActiveNav();

  // ---- Navbar Scroll Effect ----
  initNavbarScroll();

  // ---- Mobile Menu ----
  initMobileMenu();

  // ---- Scroll Reveal for Cards ----
  initScrollReveal();

  // ---- Cursor Glow ----
  initCursorGlow();

  // ---- Page Transition ----
  document.body.classList.add('page-transition');

});

// =============================================
// SET ACTIVE NAV LINK
// =============================================
function setActiveNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  const navMap = {
    'index.html': ['nav-home', 'footer-home'],
    '': ['nav-home', 'footer-home'],
    'about.html': ['nav-about', 'mob-about', 'footer-about'],
    'work.html': ['nav-work', 'mob-work', 'footer-work'],
    'blog.html': ['nav-blog', 'mob-blog', 'footer-blog'],
    'project.html': ['nav-work', 'footer-work'],
  };

  const ids = navMap[filename] || [];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  });
}

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handler = () => {
    if (window.scrollY > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handler, { passive: true });
  handler(); // run on load
}

// =============================================
// MOBILE MENU TOGGLE
// =============================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

// =============================================
// SCROLL REVEAL (Intersection Observer)
// =============================================
function initScrollReveal() {
  const targets = document.querySelectorAll('.project-card, .blog-card, .experience-item, .home-skill-group, .home-cta-inner');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  targets.forEach(el => observer.observe(el));
}

// =============================================
// CURSOR GLOW EFFECT
// =============================================
function initCursorGlow() {
  // Only on non-touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    glow.style.opacity = '1';
  });

  function animate() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    rafId = requestAnimationFrame(animate);
  }

  animate();
}

// =============================================
// VISITOR STATS SIMULATION
// =============================================
function initVisitorStats() {
  const totalEl = document.getElementById('total-viz');
  const activeEl = document.getElementById('active-viz');
  if (!totalEl || !activeEl) return;

  // Total Visitors logic (persists in localStorage)
  let totalNum = localStorage.getItem('er-total-viz');
  if (!totalNum) {
    totalNum = 1248; // Starting base
  } else {
    totalNum = parseInt(totalNum);
  }

  // Increment total slightly each time to simulate reality
  totalNum += Math.floor(Math.random() * 2) + 1;
  localStorage.setItem('er-total-viz', totalNum);
  totalEl.textContent = totalNum.toLocaleString();

  // Active Visitors logic (fluctuates during session)
  function updateActive() {
    // Keep it between 2 and 7 for a personal portfolio feel
    const current = parseInt(activeEl.textContent);
    const change = Math.random() > 0.5 ? 1 : -1;
    let next = current + change;

    if (next < 2) next = 2;
    if (next > 7) next = 7;

    activeEl.textContent = next;

    // Schedule next update between 10-30 seconds
    const delay = Math.floor(Math.random() * 20000) + 10000;
    setTimeout(updateActive, delay);
  }

  updateActive();
}

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initCursorGlow();
  initVisitorStats();
});
