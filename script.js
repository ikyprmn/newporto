document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Functionality ---
    const hamburgerMenu = document.getElementById('hamburger-menu'); 
    const navLinks = document.getElementById('nav-links'); 

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Contact Form Functionality ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log(`Pesan baru dari ${name} (${email}): ${message}`);
            
            alert('Pesan Anda telah terkirim! Terima kasih.');

            contactForm.reset();
        });
    }

    // --- Smooth Scroll Functionality ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Typing Animation for Project Descriptions ---
    function startProjectTypingAnimation() {
        const projectDescriptions = document.querySelectorAll('.project-card p');
        projectDescriptions.forEach((desc) => {
            const text = desc.textContent;
            desc.textContent = '';
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    desc.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20);
                }
            }
            typeWriter();
        });
    }

    // --- Typing Animation for Hero Section ---
    function startHeroTypingAnimation() {
        const heroTitle = document.querySelector('#hero h1');
        const heroSubtitle = document.querySelector('#hero p');
        
        if (!heroTitle || !heroSubtitle) return; // Exit if elements are not found

        const heroTitleText = 'Hello, I\'m Rizky Permana';
        const heroSubtitleText = 'Frontend Developer';

        heroTitle.textContent = '';
        heroSubtitle.textContent = '';

        let titleIndex = 0;
        let subtitleIndex = 0;

        function typeTitle() {
            if (titleIndex < heroTitleText.length) {
                heroTitle.textContent += heroTitleText.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 50);
            } else {
                setTimeout(typeSubtitle, 500);
            }
        }

        function typeSubtitle() {
            if (subtitleIndex < heroSubtitleText.length) {
                heroSubtitle.textContent += heroSubtitleText.charAt(subtitleIndex);
                subtitleIndex++;
                setTimeout(typeSubtitle, 50);
            }
        }
        
        typeTitle();
    }
    
    // Call the animation functions when the DOM is fully loaded
    startHeroTypingAnimation();
    startProjectTypingAnimation();
});
