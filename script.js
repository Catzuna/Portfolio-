document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add smooth transition to elements with the "smooth-transition" class
    document.querySelectorAll('.smooth-transition').forEach(element => {
        element.style.transition = 'all 0.3s ease-in-out';
    });

    let timeout;

    // Function to show the navbar
    function showNavbar() {
        const navbar = document.querySelector('.navbar');
        navbar.style.opacity = '1';
        clearTimeout(timeout);
        hideNavbar();
    }

    // Function to hide the navbar after a certain period of inactivity
    function hideNavbar() {
        const navbar = document.querySelector('.navbar');
        timeout = setTimeout(() => {
            navbar.style.opacity = '0';
        }, 3000);
    }

    // Event listeners for mousemove and click to show the navbar
    document.addEventListener('mousemove', showNavbar);
    document.addEventListener('click', showNavbar);

    // Event listener to hide the navbar after a certain period of inactivity
    document.addEventListener('mouseleave', hideNavbar);

    // Glowing effect on hover for project item text
    document.querySelectorAll('.portfolio-item h3').forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.textShadow = '0 0 20px rgba(198, 222, 198, 1)';
        });

        item.addEventListener('mouseout', function () {
            this.style.textShadow = '0 0 10px rgba(198, 222, 198, 0.8)';
        });

        // Click effect for project links
        item.addEventListener('click', function () {
            this.style.color = '#758173';
        });
    });

    // Bounce effect for the download CV button
    const downloadCvButton = document.querySelector('.download-cv');
    downloadCvButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
    });

    downloadCvButton.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });

    // Hover effect on project photos
    document.querySelectorAll('.portfolio-item img').forEach(photo => {
        photo.addEventListener('mouseover', function () {
            this.style.boxShadow = '0 0 20px rgba(198, 222, 198, 0.8)';
        });

        photo.addEventListener('mouseout', function () {
            this.style.boxShadow = '0 0 10px rgba(198, 222, 198, 0.5)';
        });
    });

    // Sticky Navbar
    window.onscroll = function () {
        const navbar = document.querySelector('.navbar');
        const sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
            showNavbar();
        } else {
            navbar.classList.remove('sticky');
        }
    };
});
