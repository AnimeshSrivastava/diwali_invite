# RSVP Form Setup Guide

## Option 1: Google Forms (EASIEST - Recommended!)

This is the simplest way to collect RSVPs. No coding required!

### Steps:

1. **Create Google Form**
   - Go to [forms.google.com](https://forms.google.com)
   - Click "+" to create new form
   - Title: "Diwali Celebration 2025 RSVP"

2. **Add Questions**
   - Name (Short answer, Required)
   - Phone / Email (Short answer, Required)
   - Will you attend? (Multiple choice: Yes/No/Maybe, Required)
   - Dietary restrictions (Paragraph, Optional)

3. **Customize Design**
   - Click palette icon
   - Choose maroon/cream colors to match your site
   - Add diya image as header if you want

4. **Get Embed Code**
   - Click "Send" button
   - Click "< >" (embed HTML)
   - Copy the iframe code

5. **Replace Form in index.html**
   - Find the RSVP section (around line 130)
   - Replace everything between `<form class="rsvp-form">` and `</form>`
   - Paste your Google Form iframe

6. **View Responses**
   - In Google Forms, click "Responses" tab
   - See all RSVPs in spreadsheet format
   - Get email notifications for each response (Settings → Presentation → Email notifications)

### Example Code:
```html
<!-- Replace the form section with: -->
<div class="google-form-container">
    <iframe src="YOUR_GOOGLE_FORM_EMBED_URL" 
            width="100%" 
            height="800" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
        Loading…
    </iframe>
</div>
```

---

## Option 2: Formspree (Simple, Free Tier)

Sends form submissions directly to your email.

### Steps:

1. **Sign up at [formspree.io](https://formspree.io)**
   - Free plan: 50 submissions/month

2. **Create New Form**
   - Get your form endpoint URL

3. **Update script.js**
   - Uncomment and modify the fetch code
   - Replace endpoint with your Formspree URL

4. **Receive Emails**
   - Each RSVP goes straight to your email
   - Can export to spreadsheet

### Code Update:
```javascript
// In script.js, replace the form submission handler with:
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Thank you! Your RSVP has been received.';
            formMessage.className = 'form-message success';
            form.reset();
        } else {
            formMessage.textContent = 'Oops! Something went wrong.';
            formMessage.className = 'form-message error';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Oops! Please try again.';
        formMessage.className = 'form-message error';
    });
});
```

---

## Option 3: Google Sheets (Via Apps Script)

More technical, but gives you live spreadsheet updates.

### Steps:

1. **Create Google Sheet**
   - Create new sheet for RSVPs
   - Columns: Timestamp, Name, Contact, Attending, Dietary

2. **Set up Apps Script**
   - Tools → Script editor
   - Paste deployment script (see below)
   - Deploy as web app
   - Get deployment URL

3. **Update your form**
   - Use the deployment URL as your form action

### Detailed guide:
[Google Sheets RSVP Tutorial](https://github.com/jamiewilson/form-to-google-sheets)

---

## Option 4: EmailJS (Email Notifications)

Free tier: 200 emails/month

### Steps:

1. **Sign up at [emailjs.com](https://www.emailjs.com)**

2. **Create Email Service**
   - Connect your Gmail

3. **Create Email Template**
   - Include RSVP details

4. **Add EmailJS SDK**
   - Add script tag to index.html
   - Update form submission code

5. **Receive Emails**
   - Each RSVP sends you an email

---

## Comparison Table

| Method | Difficulty | Cost | Responses | Best For |
|--------|-----------|------|-----------|----------|
| Google Forms | ⭐ Easy | Free | Spreadsheet | Everyone! |
| Formspree | ⭐⭐ Medium | Free (50/mo) | Email | Email lovers |
| Google Sheets | ⭐⭐⭐ Hard | Free | Live Sheet | Tech-savvy |
| EmailJS | ⭐⭐ Medium | Free (200/mo) | Email | Custom control |

---

## My Recommendation

**Use Google Forms!** Here's why:
- ✅ No coding required
- ✅ Completely free
- ✅ Automatic spreadsheet
- ✅ Email notifications
- ✅ Can customize colors
- ✅ Mobile-friendly
- ✅ Easy to share/export data

You can make it look seamless by matching the form colors to your website theme!

---

## Need Help?

Let me know which option you want to use and I can help you set it up!
