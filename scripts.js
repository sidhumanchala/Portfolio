document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        body.classList.toggle('nav-active');
    });

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            body.classList.remove('nav-active');
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Perform form validation if needed
        // Here you can add any form validation logic

        // Display the success message
        successMessage.style.display = 'block';

        // Optionally, clear the form fields
        contactForm.reset();
    });
});
