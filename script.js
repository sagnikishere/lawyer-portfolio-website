document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Initialize AOS Animation Library ---
    // This looks for all elements with 'data-aos' and animates them
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
        once: true, // Whether animation should happen only once
        offset: 100 // Offset (in px) from the bottom of the window
    });

    
    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');

            const icon = menuToggle.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    
    // --- 3. Smooth Scrolling for all Anchor Links ---
    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (targetElement) {
                // Calculate position, accounting for the fixed header
                const headerOffset = 80; // Height of your fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // If it's the mobile menu, close it after clicking
            if (mobileNav && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

});