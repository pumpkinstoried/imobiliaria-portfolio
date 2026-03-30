document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. Inicialização de Ícones e Animações
    // =========================================
    lucide.createIcons();

    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: 'mobile'
    });

    // =========================================
    // 2. Lógica da Navbar Glassmorphism
    // =========================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('shadow-md', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // =========================================
    // 3. Interatividade e Menu Mobile
    // =========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) { // Proteção extra caso os elementos não existam
        const toggleMenu = () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            }
            lucide.createIcons();
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });
    }

    // =========================================
    // 4. Scroll Suave com Compensação do Cabeçalho
    // =========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const headerOffset = 80;

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});