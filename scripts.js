// 语言切换功能
let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    applyLang(currentLang);
    updateLangBtn();
    localStorage.setItem('siy-lang', currentLang);
}

function applyLang(lang) {
    // 处理 data-en / data-zh (文本内容)
    document.querySelectorAll('[data-en]').forEach(el => {
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        } else {
            const zh = el.getAttribute('data-zh');
            if (zh) el.textContent = zh;
        }
    });
    
    // 处理 data-en-html / data-zh-html (HTML内容)
    document.querySelectorAll('[data-en-html]').forEach(el => {
        if (lang === 'en') {
            el.innerHTML = el.getAttribute('data-en-html');
        } else {
            const zh = el.getAttribute('data-zh-html');
            if (zh) el.innerHTML = zh;
        }
    });
    
    // 处理 data-en-placeholder / data-zh-placeholder (input/textarea placeholder)
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        if (lang === 'en') {
            el.placeholder = el.getAttribute('data-en-placeholder');
        } else {
            const zh = el.getAttribute('data-zh-placeholder');
            if (zh) el.placeholder = zh;
        }
    });
    
    // 处理 select option 的 data-en / data-zh
    document.querySelectorAll('select option[data-en]').forEach(opt => {
        if (lang === 'en') {
            opt.textContent = opt.getAttribute('data-en');
        } else {
            const zh = opt.getAttribute('data-zh');
            if (zh) opt.textContent = zh;
        }
    });
    
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
}

function updateLangBtn() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'en' ? '中文' : 'EN';
    }
}

// 页面加载时恢复语言偏好 + 移动端菜单
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('siy-lang');
    if (saved) {
        currentLang = saved;
        applyLang(currentLang);
        updateLangBtn();
    }

    // 移动端汉堡菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击菜单链接后自动关闭菜单
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Collection 页：加载更多作品
function loadMoreWorks() {
    document.querySelectorAll('.art-card-hidden').forEach(card => {
        card.classList.remove('art-card-hidden');
    });
    const btn = document.getElementById('load-more-btn');
    if (btn) btn.style.display = 'none';
}
