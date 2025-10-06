// RSVP Form Handler with Formspree Integration
// To activate: Sign up at formspree.io and replace YOUR_FORM_ID below

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvpForm');
    const formMessage = document.getElementById('formMessage');
    
    // OPTION 1: FORMSPREE INTEGRATION (Recommended - Easy Setup)
    // 1. Sign up at https://formspree.io (FREE - 50 submissions/month)
    // 2. Create a new form
    // 3. Replace YOUR_FORM_ID below with your actual form ID
    // 4. Uncomment this code block
    
    /*
    const FORMSPREE_ENABLED = true;
    const FORMSPREE_ID = 'YOUR_FORM_ID'; // Replace with your Formspree form ID
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        const formData = new FormData(form);
        
        fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                formMessage.textContent = `Thank you! We've received your RSVP and will be in touch soon!`;
                formMessage.className = 'form-message success';
                form.reset();
            } else {
                formMessage.textContent = 'Oops! Something went wrong. Please try again or contact us directly.';
                formMessage.className = 'form-message error';
            }
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm RSVP';
        })
        .catch(error => {
            formMessage.textContent = 'Network error. Please check your connection and try again.';
            formMessage.className = 'form-message error';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm RSVP';
        });
    });
    */
    
    // OPTION 2: LOCAL DEMO MODE (Current - No data saved)
    // This shows a success message but doesn't save data anywhere
    // Remove this when you activate Formspree above
    
    form.addEventListener('submit', function(e) {
