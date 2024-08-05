document.addEventListener("DOMContentLoaded", () => {
    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                event.preventDefault();
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Enhance button clicks for smooth scroll
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target.getAttribute('data-target');
            if (target) {
                document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
