// Initialize AOS
        AOS.init({
            duration: 1000000,
            once: true
        });

        // Loading Animation
        window.addEventListener('load', () => {
            const loader = document.querySelector('.loader');
            loader.classList.add('fade-out');
            setTimeout(() => loader.style.display = 'none', 300);
        });


        // Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            if(!menuOpen) {
                menuBtn.classList.add('open');
                navMenu.classList.add('active');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                navMenu.classList.remove('active');
                menuOpen = false;
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.nav-container')) {
                menuBtn.classList.remove('open');
                navMenu.classList.remove('active');
                menuOpen = false;
            }
        });

        // Navbar Scroll Effect
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                navbar.classList.remove('scroll-down');
                navbar.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
                // Scrolling down
                navbar.classList.remove('scroll-up');
                navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
                // Scrolling up
                navbar.classList.remove('scroll-down');
                navbar.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });

        // Scroll Progress Indicator
        const scrollProgress = document.querySelector('.scroll-progress');
        window.addEventListener('scroll', () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight * 100}%`;
            scrollProgress.style.width = scroll;
        });

        // Scroll To Top Button
        const scrollTop = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 100) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        });

        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Active Navigation Link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(scrollY >= (sectionTop - sectionHeight/3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth Scroll for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add specific handler for tools navigation
        document.querySelector('a[href="#tools"]').addEventListener('click', function(e) {
            e.preventDefault();
            const toolsSection = document.querySelector('#tools');
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const toolsPosition = toolsSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: toolsPosition,
                behavior: 'smooth'
            });
        });
