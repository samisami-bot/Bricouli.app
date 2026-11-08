/* =====================================================
   بريكولي Bricouli - ملف JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ========== نموذج النشرة البريدية ==========
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                alert('✅ شكراً لك! تم استلام بريدك وسنتواصل معك قريباً.');
                emailInput.value = '';
            } else {
                alert('⚠️ الرجاء إدخال بريد إلكتروني صحيح.');
            }
        });
    }

    // ========== تمرير سلس للروابط الداخلية ==========
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== تأثير ظل شريط التنقل عند التمرير ==========
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05)';
            } else {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)';
            }
        });
    }

    // ========== تأثير ظهور العناصر عند التمرير ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // تطبيق التأثير على البطاقات
    const cards = document.querySelectorAll('.service-card, .step-card, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(card);
    });

    // ========== زر تحميل التطبيق ==========
    const storeBtn = document.querySelector('.store-btn');
    
    if (storeBtn) {
        storeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // استبدل هذا الرابط برابط التطبيق الفعلي على Google Play
            const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bricouli.app';
            
            // فتح الرابط في نافذة جديدة
            window.open(playStoreUrl, '_blank');
        });
    }

});