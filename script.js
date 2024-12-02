

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links
    navLinks.classList.toggle('active');
    
    // Toggle the 'toggle' class on the hamburger to trigger animation (like rotating)
    hamburger.classList.toggle('toggle');
});

// Close menu when a link is clicked (for single-page navigation)
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close the menu by removing the 'active' class
        navLinks.classList.remove('active');
        
        // Optionally, remove the 'toggle' class to reset the hamburger icon
        hamburger.classList.remove('toggle');
    });
});


// Form Validation (Optional)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    // Example: Simple validation to ensure fields are not empty
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
    } else {
        // Optionally, add more sophisticated validation or handle submission via AJAX
        alert('Message sent successfully!');
    }
});


