// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Fade-in animation for sections
const fadeElements = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('fade-in');
        }
    });
};

// Initial check on page load
fadeInOnScroll();

// Check on scroll
window.addEventListener('scroll', fadeInOnScroll);

// Form submission handling
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Image lazy loading
const lazyImages = document.querySelectorAll('img');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.src;
                imageObserver.unobserve(image);
            }
        });
    });
    
    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
}

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-menu');
}