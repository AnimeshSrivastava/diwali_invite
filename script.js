// Formspree RSVP Form Handler
// Your beautiful custom form with working backend!

document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const form = document.getElementById('rsvpForm');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get the submit button
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Get form data
        const formData = new FormData(form);
        
        try {
            // Send to Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success!
                const name = formData.get('name');
                formMessage.textContent = `Thank you, ${name}! We've received your RSVP and can't wait to celebrate with you! 🪔`;
                formMessage.className = 'form-message success';
                
                // Reset form
                form.reset();
                
                // Hide message after 8 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 8000);
            } else {
                // Error from Formspree
                const data = await response.json();
                if (data.errors) {
                    formMessage.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    formMessage.textContent = 'Oops! Something went wrong. Please try again or contact us directly.';
                }
                formMessage.className = 'form-message error';
            }
        } catch (error) {
            // Network error
            formMessage.textContent = 'Network error. Please check your connection and try again.';
            formMessage.className = 'form-message error';
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
    
    // Scroll indicator click to scroll to next section
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('.about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add fade-in animation for elements as they come into view
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in effect
    document.querySelectorAll('.content').forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(content);
    });
});
