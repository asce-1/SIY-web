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

// 页面加载时恢复语言偏好
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('siy-lang');
    if (saved) {
        currentLang = saved;
        applyLang(currentLang);
        updateLangBtn();
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

// Contact 表单：web3forms 提交处理
document.addEventListener('DOMContentLoaded', () => {
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
                // 不设置 Content-Type，让浏览器自动处理 multipart/form-data + boundary
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                // 返回的不是 JSON，可能是成功页 HTML，视为提交成功
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
            // 降级：fetch 失败（CORS/网络），改用原生提交跳转 web3forms 成功页
            statusEl.innerHTML = '<p style="color:#888;font-size:13px;padding:8px 0;">Redirecting to submit...</p>';
            // 移除 preventDefault 效果，原生提交
            this.removeEventListener('submit', arguments.callee);
            this.submit();
        } finally {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    });
});
