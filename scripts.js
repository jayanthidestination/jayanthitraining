// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling (Demo purpose)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission for demo purposes
    alert('Thank you for your message! We will get back to you soon.');
});
