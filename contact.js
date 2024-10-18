// Prevent default form submission and handle form data submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset(); // Reset the form fields
        } else {
            alert('There was a problem sending your message.');
        }
    }).catch(error => {
        alert('There was a problem sending your message.');
    });
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links li a'); // Select all links

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class to show/hide the menu
    if (navLinks.classList.contains('active')) {
        hamburger.style.display = 'none'; // Hide hamburger when menu is active
    } else {
        hamburger.style.display = 'block'; // Show hamburger when menu is inactive
    }
});

// Close the menu when a nav item is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Hide the menu
        hamburger.style.display = 'block'; // Show the hamburger icon
    });
});
