// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Calculator functionality
    const localSalaryInput = document.getElementById('localSalary');
    const benefitsInput = document.getElementById('benefits');
    const hoursPerWeekInput = document.getElementById('hoursPerWeek');
    const vaRateInput = document.getElementById('vaRate');
    
    const localTotalSpan = document.getElementById('localTotal');
    const vaTotalSpan = document.getElementById('vaTotal');
    const annualSavingsSpan = document.getElementById('annualSavings');
    const savingsPercentSpan = document.getElementById('savingsPercent');

    function calculateSavings() {
        const localSalary = parseFloat(localSalaryInput.value) || 0;
        const benefits = parseFloat(benefitsInput.value) || 0;
        const hoursPerWeek = parseFloat(hoursPerWeekInput.value) || 0;
        const vaRate = parseFloat(vaRateInput.value) || 0;

        const localTotal = localSalary * (1 + benefits / 100);
        const vaTotal = hoursPerWeek * vaRate * 52;
        const annualSavings = localTotal - vaTotal;
        const savingsPercent = localTotal > 0 ? Math.round((annualSavings / localTotal) * 100) : 0;

        localTotalSpan.textContent = '$' + localTotal.toLocaleString();
        vaTotalSpan.textContent = '$' + vaTotal.toLocaleString();
        annualSavingsSpan.textContent = '$' + annualSavings.toLocaleString();
        savingsPercentSpan.textContent = Math.max(0, savingsPercent) + '%';
    }

    // Add event listeners to calculator inputs
    if (localSalaryInput) localSalaryInput.addEventListener('input', calculateSavings);
    if (benefitsInput) benefitsInput.addEventListener('input', calculateSavings);
    if (hoursPerWeekInput) hoursPerWeekInput.addEventListener('input', calculateSavings);
    if (vaRateInput) vaRateInput.addEventListener('input', calculateSavings);

    // Initial calculation
    calculateSavings();

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.firstName || !data.lastName || !data.email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Submitting...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you! We\'ll respond within 24 hours with your custom savings estimate.');
                contactForm.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1000);
        });
    }
});

// FAQ Toggle functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const toggle = element.querySelector('.toggle');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
            item.parentElement.querySelector('.toggle').textContent = '+';
        }
    });
    
    // Toggle current FAQ item
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        toggle.textContent = '+';
    } else {
        answer.classList.add('active');
        toggle.textContent = '−';
    }
}