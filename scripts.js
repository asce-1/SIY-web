// ============ Language Switch: EN / ZH / AR ============
let currentLang = 'en';

const LANG_OPTS = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'ar', label: 'العربية' },
];

function initLangSwitcher() {
    const sel = document.getElementById('lang-select');
    if (!sel) return;
    sel.innerHTML = '';
    LANG_OPTS.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt.code;
        o.textContent = opt.label;
        sel.appendChild(o);
    });
    sel.value = currentLang;
    sel.addEventListener('change', (e) => {
        currentLang = e.target.value;
        applyLang(currentLang);
        localStorage.setItem('siy-lang', currentLang);
    });
}

function applyLang(lang) {
    // Set lang & dir on html
    document.documentElement.lang = lang === 'en' ? 'en' : lang === 'zh' ? 'zh-CN' : 'ar';
    // Layout ALWAYS LTR — we only flip text direction via CSS class
    document.documentElement.dir = 'ltr';
    document.body.dir = 'ltr';

    // Toggle body class for Arabic text direction (layout stays LTR)
    if (lang === 'ar') {
        document.body.classList.add('lang-ar');
    } else {
        document.body.classList.remove('lang-ar');
    }

    // data-en / data-zh / data-ar (textContent)
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) el.textContent = text;
    });

    // data-en-html / data-zh-html / data-ar-html (innerHTML)
    document.querySelectorAll('[data-en-html]').forEach(el => {
        const html = el.getAttribute('data-' + lang + '-html');
        if (html) el.innerHTML = html;
    });

    // data-en-placeholder / data-zh-placeholder / data-ar-placeholder
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        const ph = el.getAttribute('data-' + lang + '-placeholder');
        if (ph) el.placeholder = ph;
    });

    // select option data-en / data-zh / data-ar
    document.querySelectorAll('select option[data-en]').forEach(opt => {
        const text = opt.getAttribute('data-' + lang);
        if (text) opt.textContent = text;
    });

    // Update select value
    const sel = document.getElementById('lang-select');
    if (sel) sel.value = lang;
}

// ============ Collection: Load More ============
function loadMoreWorks() {
    document.querySelectorAll('.art-card-hidden').forEach(card => {
        card.classList.remove('art-card-hidden');
        // 添加 visible 类使卡片立即显示（不带淡入动画）
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
    const btn = document.getElementById('load-more-btn');
    if (btn) btn.style.display = 'none';
}

// ============ Scroll Fade-In ============
function initScrollFade() {
    const fadeTargets = document.querySelectorAll(
        '.hero-right, .slogan-section, .heritage-section, .selected-works, .mission-section, .inquire-banner, .collection-header, .gallery-grid, .about-hero, .artisan-section, .craft-section, .contact-section'
    );
    fadeTargets.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============ Contact Form: web3forms ============
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const statusEl = document.getElementById('form-status');
        const submitBtn = form.querySelector('.form-submit');

        statusEl.innerHTML = '<p style="color:#888;font-size:13px;padding:8px 0;">Sending...</p>';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';

        try {
            const formData = new FormData(form);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                data = { success: true };
            }

            if (response.ok && data.success) {
                statusEl.innerHTML = '<p style="color:#5B8C5A;font-size:14px;padding:12px 0;background:rgba(91,140,90,0.08);border-radius:2px;">✓ Message sent successfully! We\'ll get back to you within 1–2 business days.</p>';
                form.reset();
            } else {
                throw new Error(data.message || `Server returned ${response.status}`);
            }
        } catch (error) {
            console.error('Form submit error:', error);
            statusEl.innerHTML = '<p style="color:#B85C38;font-size:14px;padding:12px 0;background:rgba(184,92,56,0.08);border-radius:2px;">✗ Something went wrong. Please try again or email us directly.</p>';
        } finally {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    });
}

// ============ DOM Ready ============
document.addEventListener('DOMContentLoaded', () => {
    // Language
    initLangSwitcher();
    const saved = localStorage.getItem('siy-lang');
    if (saved && LANG_OPTS.find(l => l.code === saved)) {
        currentLang = saved;
        applyLang(currentLang);
    }

    // Scroll fade
    initScrollFade();

    // Contact form
    initContactForm();
});
