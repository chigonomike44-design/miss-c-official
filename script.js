// script.js for Novelist Bookstore Website

// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Email and Phone Link Functionality
const emailLink = document.getElementById('email-link');
const phoneLink = document.getElementById('phone-link');

emailLink.addEventListener('click', () => {
    window.location.href = 'mailto:info@novelistbookstore.com';
});

phoneLink.addEventListener('click', () => {
    window.location.href = 'tel:+1234567890';
});

// Form Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!'); // Replace with actual submit logic
    form.reset();
});

// Interactive Elements
const interactiveItems = document.querySelectorAll('.interactive-item');
interactiveItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});