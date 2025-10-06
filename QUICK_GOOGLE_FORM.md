# Quick Setup - Google Form (5 Minutes!)

## ⚡ Fast Track Instructions

### 1. Create Form (2 min)
- Go to [forms.google.com](https://forms.google.com)
- Click "+" for new form
- Title: "Diwali Celebration 2025 RSVP"

### 2. Add Questions (2 min)
Quick copy-paste questions:

**Question 1:** Name *(Short answer, Required)*
**Question 2:** Phone / Email *(Short answer, Required)*  
**Question 3:** Will you be attending? *(Multiple choice, Required)*
- Yes, I'll be there!
- Unfortunately, I can't make it  
- Maybe

**Question 4:** Dietary restrictions *(Paragraph, Optional)*

### 3. Get Embed Code (30 sec)
1. Click "Send" (top right)
2. Click `<>` icon (Embed HTML)
3. Copy the iframe code

### 4. Add to Website (30 sec)
1. Open `index-googleform.html`
2. Find line 170 (search for "REPLACE_WITH_YOUR_FORM_ID")
3. Replace that iframe with your code
4. Change `width="640"` to `width="100%"`
5. Save

### 5. Activate (10 sec)
```bash
cd /Users/animeshsrivastava/Documents/diwali_invite
mv index.html index-backup.html
mv index-googleform.html index.html
```

### 6. Get Notifications
- In form, go to "Responses" tab
- Click ⋮ (three dots)
- Click "Get email notifications"

## ✅ Done!

Now:
- Open `index.html` in browser to test
- Fill out the form yourself
- Check if you got the email
- Share with guests!

---

## 📱 Even Faster: Button Instead of Embed

If you just want a button to the form:

1. In form, click "Send" → Link icon
2. Check "Shorten URL"
3. Copy link (forms.gle/...)
4. Replace the RSVP section with:

```html
<a href="YOUR_FORMS_LINK" class="google-form-button" target="_blank">
    📝 RSVP Here
</a>
```

---

See `GOOGLE_FORM_SETUP.md` for detailed instructions!
