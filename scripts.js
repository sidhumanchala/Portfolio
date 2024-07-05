document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
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
