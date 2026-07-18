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
