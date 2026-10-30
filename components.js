/* ===== VELVET LOUNGE — SHARED COMPONENTS ===== */
'use strict';

/* ─── Font Awesome Monochrome Icons ──────────────────────────── */
const ICONS = {
    sun: '<i class="fa-solid fa-sun"></i>',
    moon: '<i class="fa-solid fa-moon"></i>',
    menu: '<i class="fa-solid fa-bars"></i>',
    x: '<i class="fa-solid fa-xmark"></i>',
    arrowRight: '<i class="fa-solid fa-arrow-right"></i>',
    arrowUp: '<i class="fa-solid fa-arrow-up"></i>',
    star: '<i class="fa-solid fa-star"></i>',
    check: '<i class="fa-solid fa-check"></i>',
    eye: '<i class="fa-solid fa-eye"></i>',
    eyeOff: '<i class="fa-solid fa-eye-slash"></i>',
    mapPin: '<i class="fa-solid fa-location-dot"></i>',
    phone: '<i class="fa-solid fa-phone"></i>',
    mail: '<i class="fa-solid fa-envelope"></i>',
    clock: '<i class="fa-regular fa-clock"></i>',
    facebook: '<i class="fa-brands fa-facebook-f"></i>',
    instagram: '<i class="fa-brands fa-instagram"></i>',
    youtube: '<i class="fa-brands fa-youtube"></i>',
    twitter: '<i class="fa-brands fa-x-twitter"></i>',
    users: '<i class="fa-solid fa-users"></i>',
    calendar: '<i class="fa-solid fa-calendar-days"></i>',
    heart: '<i class="fa-solid fa-heart"></i>',
    award: '<i class="fa-solid fa-award"></i>',
    gift: '<i class="fa-solid fa-gift"></i>',
    leaf: '<i class="fa-solid fa-leaf"></i>',
    fire: '<i class="fa-solid fa-fire"></i>',
    wind: '<i class="fa-solid fa-wind"></i>',
    music: '<i class="fa-solid fa-music"></i>',
    glass: '<i class="fa-solid fa-wine-glass"></i>',
    smoke: '<i class="fa-solid fa-cloud"></i>',
    sparkles: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
    couch: '<i class="fa-solid fa-couch"></i>',
    gem: '<i class="fa-solid fa-gem"></i>',
    globe: '<i class="fa-solid fa-globe"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down"></i>',
    plus: '<i class="fa-solid fa-plus"></i>',
    minus: '<i class="fa-solid fa-minus"></i>',
};

/* ─── Brand Logo SVG ──────────────────────────────────── */
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100" fill="none">
  <defs>
    <linearGradient id="lgBrand" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#E91E63"/>
      <stop offset="100%" stop-color="#C2185B"/>
    </linearGradient>
    <linearGradient id="lgSmoke" x1="50" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#C2185B" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#C2185B" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <path d="M50 8 C44 16, 56 20, 50 28 C44 36, 42 30, 46 22 C50 14, 56 10, 50 8Z" fill="url(#lgSmoke)" opacity="0.6"/>
  <path d="M58 12 C54 18, 62 22, 56 28 C52 32, 64 26, 60 20 C56 14, 62 8, 58 12Z" fill="url(#lgSmoke)" opacity="0.4"/>
  <path d="M40 34 L42 30 C44 28, 56 28, 58 30 L60 34 C60 38, 40 38, 40 34Z" fill="url(#lgBrand)"/>
  <rect x="47" y="38" width="6" height="22" rx="2" fill="url(#lgBrand)"/>
  <path d="M32 72 C32 58, 38 56, 44 58 L44 60 L56 60 L56 58 C62 56, 68 58, 68 72 C68 82, 60 90, 50 90 C40 90, 32 82, 32 72Z" fill="url(#lgBrand)"/>
  <path d="M36 76 C40 72, 60 72, 64 76 C64 82, 58 88, 50 88 C42 88, 36 82, 36 76Z" fill="#1A1A2E" opacity="0.35"/>
  <line x1="38" y1="60" x2="26" y2="50" stroke="url(#lgBrand)" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="24" cy="48" r="4" fill="url(#lgBrand)" opacity="0.6"/>
  <ellipse cx="50" cy="62" rx="12" ry="2" fill="url(#lgBrand)" opacity="0.5"/>
</svg>`;

/* ─── Social Login SVGs ───────────────────────────────── */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`;

const FACEBOOK_LOGIN_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;

/* ─── THEME & DIRECTION ───────────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('hookah_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('hookah_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('hookah_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('hookah_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'RTL' : 'LTR';
    });
}

/* ─── PASSWORD TOGGLE ────────────────────────────────── */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const iconWrap = (btn && btn.querySelector) ? (btn.querySelector('.pw-icon') || btn) : btn;
    if (iconWrap) {
        iconWrap.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
    }
}

/* ─── AUTH PAGE HELPERS ──────────────────────────────── */
function initAuthPage() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('hookah_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('hookah_dir') === 'rtl') html.setAttribute('dir', 'rtl');

    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = html.getAttribute('dir') === 'rtl' ? 'LTR' : 'RTL';
    });
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function buildNavbar() {
    const el = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (!el) return;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'menu.html', label: 'Menu' },
        { href: 'events.html', label: 'Events' },
        { href: 'reservations.html', label: 'Reservations' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const nav = document.createElement('div');
    nav.innerHTML = `
    <header class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="Velvet Lounge Home">
                ${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">VELVET</span>
                    <span class="brand-bottom">Lounge</span>
                </div>
            </a>

            <nav class="nav-links" aria-label="Main navigation">
                ${navLinksHTML}
            </nav>

            <div class="nav-actions">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <a href="reservations.html" class="btn btn-primary btn-sm">Reserve Now</a>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Toggle navigation menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="reservations.html" class="btn btn-primary w-full">Reserve Now</a>
                <a href="login.html" class="btn btn-secondary w-full">Sign In</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </header>
    <div class="navbar-spacer"></div>`;

    nav.querySelectorAll('.mob-link').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('mobile-backdrop');
            if (menu) menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            document.body.classList.remove('nav-open');
            document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
        });
    });

    el.replaceWith(nav);
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
        document.body.classList.remove('nav-open');
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.x);
        document.body.classList.add('nav-open');
    }
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
});

/* ─── FOOTER ─────────────────────────────────────────── */
function buildFooter() {
    const el = document.getElementById('footer-placeholder') || document.getElementById('main-footer');
    if (!el) return;
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.id = 'site-footer';
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="Velvet Lounge Home">
                        ${LOGO_SVG}
                        <div class="nav-logo-text">
                            <span class="brand-top">VELVET</span>
                            <span class="brand-bottom">Lounge</span>
                        </div>
                    </a>
                    <p>A premium hookah & shisha lounge offering an unforgettable atmosphere with exotic flavors, live entertainment, and world-class hospitality. Come unwind in luxury.</p>
                    <div class="footer-socials">
                        <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="footer-social-link" aria-label="Twitter">${ICONS.twitter}</a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Premium</a></li>
                        <li><a href="menu.html">Our Menu</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="reservations.html">Reservations</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="coming-soon.html">Careers</a></li>
                        <li><a href="coming-soon.html">Franchise Info</a></li>
                        <li><a href="login.html">Member Sign In</a></li>
                        <li><a href="signup.html">Create Account</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Get exclusive events, new flavors, and special offers delivered to your inbox.</p>
                        <form onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} Velvet Lounge. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="coming-soon.html">Cookie Settings</a>
                </div>
            </div>
        </div>
    `;
    el.replaceWith(footer);
}

/* ─── BACK TO TOP ──────────────────────────────────────── */
function buildBackToTop() {
    if (document.body.classList.contains('auth-page') || document.body.classList.contains('fullscreen-page')) return;
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = ICONS.arrowUp;
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

/* ─── SCROLL ANIMATIONS ──────────────────────────────── */
function initScrollAnimations() {
    const animEls = document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-left, .slide-right');
    if (!animEls.length) return;

    const reveal = (el) => el.classList.add('animate-in');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
        animEls.forEach(reveal);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '40px 0px 40px 0px' });

    animEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal(el);
        } else {
            observer.observe(el);
        }
    });
}

/* ─── HEADER SCROLL ────────────────────────────────────── */
function initHeaderScroll() {
    const header = document.getElementById('navbar');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });
}

/* ─── MENU TABS ────────────────────────────────────────── */
function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    const cards = document.querySelectorAll('.menu-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.category;
            cards.forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ─── COUNTDOWN TIMER (COMING SOON) ───────────────────── */
function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins');
        const sEl = document.getElementById('cd-secs');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(mins).padStart(2, '0');
        if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/* ─── FAQ ACCORDION ───────────────────────────────────── */
function initFaqAccordion() {
    document.addEventListener('click', (e) => {
        const questionBtn = e.target.closest('.faq-question');
        if (!questionBtn) return;
        const item = questionBtn.closest('.faq-item');
        if (!item) return;
        const parent = item.parentElement;
        
        const wasActive = item.classList.contains('active');
        if (parent) {
            parent.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        }
        if (!wasActive) {
            item.classList.add('active');
        }
    });
}

/* ─── HERO SMOKE PARTICLE EFFECTS ──────────────────────── */
function initHeroThemeEffects() {
    const heroSections = document.querySelectorAll('.hero2-section, .hero-section');
    if (!heroSections.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    heroSections.forEach((hero) => {
        let themeBg = hero.querySelector('.hero-theme-bg');
        if (!themeBg) {
            themeBg = document.createElement('div');
            themeBg.className = 'hero-theme-bg';
            themeBg.setAttribute('aria-hidden', 'true');
            themeBg.innerHTML = `
                <div class="hero-ambient-glow orb-berry"></div>
                <div class="hero-ambient-glow orb-honey"></div>
                <div class="hero-ambient-glow orb-espresso"></div>
                <canvas class="hero-particle-canvas"></canvas>
            `;
            hero.insertBefore(themeBg, hero.firstChild);
        }

        const canvas = themeBg.querySelector('.hero-particle-canvas');
        if (!canvas || prefersReducedMotion) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0, height = 0, dpr = 1, particles = [], animId = null, isVisible = true;

        function resize() {
            const rect = hero.getBoundingClientRect();
            width = Math.max(rect.width, 320);
            height = Math.max(rect.height, 400);
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            createParticles();
        }

        function createParticles() {
            particles = [];
            const count = width < 768 ? 20 : 40;
            for (let i = 0; i < count; i++) {
                const rand = Math.random();
                let type = 'smoke', color = 'rgba(255,255,255,0.6)', size = 1.5 + Math.random() * 2;
                if (rand < 0.4) {
                    type = 'smoke'; color = `rgba(255,255,255,${0.3 + Math.random() * 0.4})`; size = 1.5 + Math.random() * 2.5;
                } else if (rand < 0.65) {
                    type = 'ember'; color = Math.random() > 0.5 ? '#F06292' : '#C2185B'; size = 1.2 + Math.random() * 1.8;
                } else if (rand < 0.85) {
                    type = 'gold'; color = '#FFD700'; size = 1 + Math.random() * 1.5;
                } else {
                    type = 'star'; color = '#FFD700'; size = 3 + Math.random() * 3;
                }
                particles.push({
                    x: Math.random() * width, y: Math.random() * height,
                    vy: -(0.15 + Math.random() * 0.4),
                    size, type, color,
                    alpha: 0.2 + Math.random() * 0.6,
                    twinklePhase: Math.random() * Math.PI * 2,
                    twinkleSpeed: 0.02 + Math.random() * 0.04,
                    wobblePhase: Math.random() * Math.PI * 2,
                    wobbleAmp: 0.3 + Math.random() * 0.5,
                    wobbleSpeed: 0.01 + Math.random() * 0.02,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.02,
                });
            }
        }

        function drawStar(ctx, x, y, r, rot, alpha, color) {
            ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
            ctx.fillStyle = color; ctx.globalAlpha = alpha;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                const angle = (i * Math.PI) / 2;
                ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
                const half = angle + Math.PI / 4;
                ctx.lineTo(Math.cos(half) * (r * 0.25), Math.sin(half) * (r * 0.25));
            }
            ctx.closePath(); ctx.fill(); ctx.restore();
        }

        function render() {
            if (!isVisible) return;
            ctx.save(); ctx.scale(dpr, dpr); ctx.clearRect(0, 0, width, height);
            const isDark = document.documentElement.classList.contains('dark');
            for (const p of particles) {
                p.wobblePhase += p.wobbleSpeed;
                p.x += Math.sin(p.wobblePhase) * p.wobbleAmp;
                p.y += p.vy;
                p.rotation += p.rotSpeed;
                if (p.y < -20) { p.y = height + 10; p.x = Math.random() * width; }
                if (p.x < -20) p.x = width + 10;
                if (p.x > width + 20) p.x = -10;
                p.twinklePhase += p.twinkleSpeed;
                const twinkle = (Math.sin(p.twinklePhase) + 1) * 0.5;
                const curAlpha = Math.max(0.1, p.alpha * (0.4 + twinkle * 0.6));
                if (p.type === 'star') {
                    drawStar(ctx, p.x, p.y, p.size, p.rotation, curAlpha, p.color);
                } else {
                    ctx.save(); ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color; ctx.globalAlpha = curAlpha;
                    if (isDark) { ctx.shadowBlur = p.type === 'ember' ? 8 : 4; ctx.shadowColor = p.color; }
                    ctx.fill(); ctx.restore();
                }
            }
            ctx.restore();
            animId = requestAnimationFrame(render);
        }

        if ('IntersectionObserver' in window) {
            new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!isVisible) { isVisible = true; animId = requestAnimationFrame(render); }
                    } else { isVisible = false; if (animId) { cancelAnimationFrame(animId); animId = null; } }
                });
            }, { threshold: 0.05 }).observe(hero);
        }

        resize();
        window.addEventListener('resize', debounce(resize, 150));
        animId = requestAnimationFrame(render);
    });
}

/* ─── Utility ──────────────────────────────────────────── */
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/* ─── INIT ALL ────────────────────────────────────────── */
function initAll() {
    function safe(fn, name) {
        try {
            fn();
        } catch (err) {
            console.error(`[Velvet Lounge] Error in ${name}:`, err);
        }
    }

    safe(buildNavbar, 'buildNavbar');
    safe(buildFooter, 'buildFooter');
    safe(buildBackToTop, 'buildBackToTop');
    safe(initScrollAnimations, 'initScrollAnimations');
    safe(initHeaderScroll, 'initHeaderScroll');
    safe(initMenuTabs, 'initMenuTabs');
    safe(initCountdown, 'initCountdown');
    safe(initFaqAccordion, 'initFaqAccordion');
    safe(initHeroThemeEffects, 'initHeroThemeEffects');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}
