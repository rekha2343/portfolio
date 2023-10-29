// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust scroll position based on your header height
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form
const contactForm = document.querySelector('.contact form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validateForm()) {
        // Simulate form submission (you can send the form data to a server here)
        alert('Form submitted successfully!');
        // Reset the form after submission
        contactForm.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    // Basic email validation (you can use a regular expression for a more robust validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Please enter your message.');
    }

    return isValid;
}
