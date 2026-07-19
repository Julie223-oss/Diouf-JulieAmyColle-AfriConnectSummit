// ============================================================
// 1. DARK MODE
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    toggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggle.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            toggle.innerHTML = '<i class="bi bi-moon"></i>';
        }
    });
});

// ============================================================
// 2. NAVBAR DYNAMIQUE
// ============================================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================================
// 3. MENU HAMBURGER
// ============================================================
document.getElementById('navToggle').addEventListener('click', function() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('open');
    this.innerHTML = menu.classList.contains('open') ? '<i class="bi bi-x"></i>' : '<i class="bi bi-list"></i>';
});

// ============================================================
// 4. RETOUR EN HAUT
// ============================================================
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    backBtn.classList.toggle('show', window.scrollY > 300);
});
backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// 5. ANNÉE DYNAMIQUE
// ============================================================
document.querySelectorAll('#currentYear').forEach(el => el.textContent = new Date().getFullYear());

// ============================================================
// 6. COMPTE À REBOURS
// ============================================================
const target = new Date('2026-12-15T09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
        ['days','hours','minutes','seconds'].forEach(id => document.getElementById(id).textContent = '00');
        return;
    }

    document.getElementById('days').textContent = String(Math.floor(diff / (1000*60*60*24))).padStart(2,'0');
    document.getElementById('hours').textContent = String(Math.floor((diff % (1000*60*60*24)) / (1000*60*60))).padStart(2,'0');
    document.getElementById('minutes').textContent = String(Math.floor((diff % (1000*60*60)) / (1000*60))).padStart(2,'0');
    document.getElementById('seconds').textContent = String(Math.floor((diff % (1000*60)) / 1000)).padStart(2,'0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================================
// 7. COMPTEURS ANIMÉS
// ============================================================
document.querySelectorAll('.counter').forEach(c => {
    const target = parseInt(c.dataset.target);
    let current = 0;
    const step = target / 60;
    let count = 0;

    const animate = () => {
        count++;
        current += step;
        c.textContent = count < 60 ? Math.ceil(current) : target;
        if (count < 60) requestAnimationFrame(animate);
    };

    new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animate();
            this.disconnect();
        }
    }, { threshold: 0.5 }).observe(c);
});

// ============================================================
// 8. FADE-IN
// ============================================================
document.querySelectorAll('.fade-in').forEach(el => {
    new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            el.classList.add('visible');
            this.disconnect();
        }
    }, { threshold: 0.1 }).observe(el);
});

