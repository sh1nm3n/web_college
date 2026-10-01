document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('modalOverlay');
    const openModalBtns = document.querySelectorAll('.js-open-modal');
    const closeModalBtn = document.getElementById('modalClose');
    const modalForm = document.getElementById('modalForm');

    const openModal = () => modalOverlay.classList.add('is-open');
    const closeModal = () => modalOverlay.classList.remove('is-open');

    openModalBtns.forEach((btn) => btn.addEventListener('click', openModal));

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }


    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    if (modalForm) {
        modalForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Спасибо! Ваша заявка отправлена, мы скоро свяжемся с вами.');
            modalForm.reset();
            closeModal();
        });
    }

    const burgerBtn = document.getElementById('burgerBtn');
    const headerNav = document.getElementById('headerNav');

    if (burgerBtn && headerNav) {

        const openMenu = () => {
            headerNav.classList.add('is-open');
            burgerBtn.classList.add('is-open');
            burgerBtn.setAttribute('aria-expanded', 'true');
            headerNav.style.maxHeight = headerNav.scrollHeight + 'px';
        };

        const closeMenu = () => {
            headerNav.classList.remove('is-open');
            burgerBtn.classList.remove('is-open');
            burgerBtn.setAttribute('aria-expanded', 'false');
            headerNav.style.maxHeight = null;
        };

        burgerBtn.addEventListener('click', () => {
            const isOpen = headerNav.classList.contains('is-open');
            isOpen ? closeMenu() : openMenu();
        });

        headerNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        window.addEventListener('resize', () => {
            if (headerNav.classList.contains('is-open')) {
                headerNav.style.maxHeight = headerNav.scrollHeight + 'px';
            }
        });
    }

    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('is-visible');
            } else {
                scrollTopBtn.classList.remove('is-visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('is-open');

            if (isOpen) {
                item.classList.remove('is-open');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('is-open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    const galleryMain = document.getElementById('galleryMain');
    const thumbs = document.querySelectorAll('.gallery__thumb');

    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            if (!galleryMain) return;

            galleryMain.src = thumb.dataset.full || thumb.src;
            galleryMain.alt = thumb.alt;

            thumbs.forEach((t) => t.classList.remove('is-active'));
            thumb.classList.add('is-active');
        });
    });

});