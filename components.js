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
    <linearGradient id="vlAmber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#8E6613"/>
    </linearGradient>
    <linearGradient id="vlGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3C4"/>
      <stop offset="50%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#FFA000"/>
    </linearGradient>
    <linearGradient id="vlSmoke" x1="50%" y1="100%" x2="50%" y2="0%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#FFE082" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FFE082" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Symmetrical Royal Smoke Trails -->
  <path d="M50 16 C47 11 53 7 50 2 C47 7 53 11 50 16 Z" fill="url(#vlSmoke)"/>
  <path d="M43 18 C39 13 44 9 42 4 C40 8 45 12 44 18 Z" fill="url(#vlSmoke)" opacity="0.6"/>
  <path d="M57 18 C61 13 56 9 58 4 C60 8 55 12 56 18 Z" fill="url(#vlSmoke)" opacity="0.6"/>

  <!-- Charcoal Head / Crown -->
  <path d="M43 18 L57 18 L55 22 L45 22 Z" fill="url(#vlGold)"/>
  <circle cx="50" cy="18" r="1.5" fill="#FFE082"/>

  <!-- Polished Ash Tray -->
  <ellipse cx="50" cy="23" rx="18" ry="2.5" fill="url(#vlGold)"/>
  <path d="M33 23 C33 23 41 25.5 50 25.5 C59 25.5 67 23 67 23 C66 26.5 58 28 50 28 C42 28 34 26.5 33 23 Z" fill="url(#vlAmber)"/>

  <!-- Metallic Hookah Shaft / Stem -->
  <rect x="48.5" y="27" width="3" height="30" rx="1.5" fill="url(#vlAmber)"/>
  <circle cx="50" cy="34" r="4.5" fill="url(#vlAmber)"/>
  <circle cx="50" cy="34" r="2.2" fill="url(#vlGold)"/>
  <rect x="46" y="41" width="8" height="1.8" rx="0.9" fill="url(#vlGold)"/>
  <circle cx="50" cy="48" r="4" fill="url(#vlAmber)"/>
  <circle cx="50" cy="48" r="2" fill="url(#vlGold)"/>
  
  <!-- Base Heart / Joint Collar -->
  <path d="M43 57 L57 57 L55 60 L45 60 Z" fill="url(#vlGold)"/>

  <!-- Symmetrical Crystal Vase / Decanter Base -->
  <path d="M45 60 C45 60 31 70 31 81 C31 88 38 93 50 93 C62 93 69 88 69 81 C69 70 55 60 55 60 Z" fill="url(#vlAmber)"/>

  <!-- Crystal Facet Refraction & Water Level -->
  <path d="M36 80 C36 86 42 90 50 90 C58 90 64 86 64 80 C64 74 58 68 50 68 C42 68 36 74 36 80 Z" fill="#FFF" opacity="0.18"/>
  <path d="M38 82 C41 85.5 45 87 50 87 C55 87 59 85.5 62 82 C59 84 55 85 50 85 C45 85 41 84 38 82 Z" fill="url(#vlGold)" opacity="0.6"/>

  <!-- Effervescence Shisha Bubbles -->
  <circle cx="46" cy="78" r="1.5" fill="#FFF" opacity="0.9"/>
  <circle cx="53" cy="74" r="1.2" fill="#FFF" opacity="0.9"/>
  <circle cx="54" cy="80" r="1.3" fill="#FFF" opacity="0.75"/>
  <circle cx="48" cy="83" r="0.9" fill="#FFF" opacity="0.65"/>

  <!-- Symmetrical Dual Draped Hoses / Regal Wreath -->
  <path d="M44 58.5 C34 60 21 68 23 80 C24 86 30 87 32 82 C32 76 26 72 38 65" fill="none" stroke="url(#vlAmber)" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M56 58.5 C66 60 79 68 77 80 C76 86 70 87 68 82 C68 76 74 72 62 65" fill="none" stroke="url(#vlAmber)" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Gold Wand Mouthpieces (Flanking Base Elegantly) -->
  <line x1="23" y1="80" x2="18" y2="70" stroke="url(#vlGold)" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="17.5" cy="69" r="1.5" fill="url(#vlGold)"/>
  <line x1="77" y1="80" x2="82" y2="70" stroke="url(#vlGold)" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="82.5" cy="69" r="1.5" fill="url(#vlGold)"/>
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
        { href: 'about.html', label: 'About Us' },
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
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Toggle navigation menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
                <a href="reservations.html" class="btn btn-secondary w-full">Reserve Now</a>
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

    nav.querySelectorAll('.mob-link, .mob-actions a').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('mobile-backdrop');
            if (menu) menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            document.body.classList.remove('nav-open');
            document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
        });
    });

    el.replaceWith(...Array.from(nav.children));
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

// Close mobile menu on outside click
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

// Close mobile menu on window resize above 1024px
window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
        const menu = document.getElementById('mobile-menu');
        const backdrop = document.getElementById('mobile-backdrop');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            document.body.classList.remove('nav-open');
            document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
        }
    }
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
                        <li><a href="about.html">About Us</a></li>
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
        if (hero.querySelector('.hero-home-ambiance') || hero.querySelector('.hero2-ambient-aurora')) return;
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
                    type = 'ember'; color = Math.random() > 0.5 ? '#FFD54F' : '#D4AF37'; size = 1.2 + Math.random() * 1.8;
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

/* ─── Hero Multi-Slide Carousel (5-Second Auto Rotation) ─── */
function initHeroSlider() {
    const container = document.querySelector('.hero-carousel-container');
    if (!container) return;

    const slides = Array.from(container.querySelectorAll('.hero-slide'));
    const dots = Array.from(document.querySelectorAll('.hero-slider-dot'));
    const prevBtn = document.querySelector('.hero-prev-btn');
    const nextBtn = document.querySelector('.hero-next-btn');
    const heroSection = document.querySelector('.hero-section');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds per slide
    let timer = null;
    let isPaused = false;

    function restartProgressBar(dot) {
        if (!dot) return;
        const bar = dot.querySelector('.dot-progress-bar');
        if (bar) {
            bar.style.animation = 'none';
            void bar.offsetWidth;
            bar.style.animation = '';
        }
    }

    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        currentIndex = index;

        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
            if (isActive) {
                restartProgressBar(dot);
            }
        });
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(() => {
            if (!isPaused) {
                nextSlide();
            }
        }, intervalTime);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        startTimer();
        const activeDot = dots[currentIndex];
        restartProgressBar(activeDot);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
            resetTimer();
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            resetTimer();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            resetTimer();
        });
    }

    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            isPaused = true;
        });
        heroSection.addEventListener('mouseleave', () => {
            isPaused = false;
        });
    }

    let touchStartX = 0;
    let touchEndX = 0;
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diffX = touchEndX - touchStartX;
        if (Math.abs(diffX) > 40) {
            if (diffX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetTimer();
        }
    }, { passive: true });

    if (heroSection) {
        heroSection.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
                resetTimer();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                resetTimer();
            }
        });
    }

    goToSlide(0);
    startTimer();
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
    safe(initHeroSlider, 'initHeroSlider');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}
