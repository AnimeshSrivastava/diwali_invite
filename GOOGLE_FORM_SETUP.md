# Google Form Setup Guide - Step by Step

## 🎯 Complete Setup Instructions

Follow these steps to add a Google Form to your Diwali invitation website.

---

## Step 1: Create Your Google Form

1. **Go to Google Forms**
   - Visit: [forms.google.com](https://forms.google.com)
   - Click the **"+"** button (Blank form)

2. **Name Your Form**
   - Click "Untitled form" at the top
   - Change to: "Diwali Celebration 2025 RSVP"

---

## Step 2: Add Questions

Add these questions in order:

### Question 1: Name
- Type: **Short answer**
- Question: "Name"
- Click **Required** toggle (turn it on)

### Question 2: Contact Information
- Type: **Short answer**
- Question: "Phone / Email"
- Click **Required** toggle

### Question 3: Attendance
- Type: **Multiple choice**
- Question: "Will you be attending the event?"
- Options:
  - Yes, I'll be there!
  - Unfortunately, I can't make it
  - Maybe
- Click **Required** toggle

### Question 4: Dietary Restrictions
- Type: **Paragraph**
- Question: "Please specify any dietary restrictions"
- Description: "e.g., Vegetarian, Vegan, Gluten-free, Allergies, etc."
- Leave **Required** toggle OFF (optional)

---

## Step 3: Customize Form Design

1. **Click the Palette Icon** (top right)

2. **Choose Colors**
   - Header: Choose maroon/burgundy color to match website
   - Background: Choose cream/light color
   - Or use default and it will still look good!

3. **Add Header Image (Optional)**
   - Click "Customize theme"
   - Click "Choose image"
   - Upload a diya or Diwali-themed image
   - Or leave blank for simplicity

---

## Step 4: Configure Settings

1. **Click the Settings Icon** (⚙️ top right)

2. **General Tab**
   - ✅ Check "Limit to 1 response" (optional - prevents duplicate submissions)
   - ✅ Check "Edit after submit" (optional - lets people update their RSVP)

3. **Presentation Tab**
   - Confirmation message: "Thank you for your RSVP! We can't wait to celebrate with you! 🪔"
   - ✅ Check "Show link to submit another response" (if you unchecked limit to 1)

4. **Quizzes Tab**
   - Leave everything OFF (this is not a quiz)

5. **Click SAVE**

---

## Step 5: Get Email Notifications

1. **Click "Responses" tab** at the top

2. **Click the three dots menu** (⋮)

3. **Select "Get email notifications for new responses"**
   - Now you'll get an email every time someone RSVPs!

---

## Step 6: Get Embed Code

1. **Click "Send" button** (top right)

2. **Click the Embed icon** `<>` (third tab)

3. **Choose size** (Width and Height)
   - Width: 640 (default is fine)
   - Height: 950 or higher for all questions to show

4. **Copy the iframe code**
   - It looks like:
   ```html
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true" 
           width="640" height="950" frameborder="0" marginheight="0" marginwidth="0">
       Loading…
   </iframe>
   ```

---

## Step 7: Add to Your Website

1. **Open `index-googleform.html`** in a text editor

2. **Find this section** (around line 170):
   ```html
   <iframe 
       src="https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true"
   ```

3. **Replace the entire iframe** with your copied code

4. **Adjust the width to 100%**:
   - Change `width="640"` to `width="100%"`

5. **Save the file**

---

## Step 8: Use the Google Form Version

### Option A: Replace your current index.html

```bash
# In Terminal, run:
cd /Users/animeshsrivastava/Documents/diwali_invite
mv index.html index-custom-form.html
mv index-googleform.html index.html
```

### Option B: Test it first

- Just open `index-googleform.html` in your browser
- Once it looks good, then do Option A

---

## Step 9: View Responses

### See All RSVPs

1. **Go to your Google Form**

2. **Click "Responses" tab**

3. **You'll see:**
   - Summary view (charts and stats)
   - Individual responses
   - Spreadsheet view (click green spreadsheet icon)

### Export to Spreadsheet

1. Click the **green Spreadsheet icon** in Responses tab

2. Choose:
   - "Create a new spreadsheet" (recommended)
   - Or "Select existing spreadsheet"

3. **Now every RSVP automatically adds a row to your spreadsheet!**

### Download Responses

- In the Responses tab, click **⋮** (three dots)
- Click "Download responses (.csv)"
- Open in Excel, Numbers, or Google Sheets

---

## Alternative: Button to Open Form

If you prefer a button that opens the form in a new tab instead of embedding:

1. **Get the short link**:
   - In your form, click "Send"
   - Click the "Link" icon
   - Click "Shorten URL"
   - Copy the link (like `forms.gle/abc123`)

2. **Replace the embedded form** with this button:
   ```html
   <a href="https://forms.gle/YOUR_SHORT_LINK" 
      class="google-form-button" 
      target="_blank">
       📝 Fill Out RSVP Form
   </a>
   ```

---

## Troubleshooting

### Form not showing?
- Make sure you copied the ENTIRE iframe code
- Check that the src URL starts with `https://docs.google.com/forms/`
- Clear your browser cache and reload

### Form is too small?
- In the iframe, change `height="950"` to a higher number like `1200`
- Or add `min-height: 1200px;` in the CSS

### Want to match colors exactly?
- In Google Forms theme settings:
- Header color: #a63a50 (maroon)
- Background: #f5f0e8 (cream)

### Not receiving email notifications?
- Check your spam folder
- Make sure you enabled notifications in Step 5
- Verify the email in your Google account is correct

---

## 🎉 You're Done!

Now when people fill out your form:
- ✅ You get an email notification
- ✅ Response is added to your spreadsheet
- ✅ They see a thank you message
- ✅ You can see all RSVPs in one place

---

## Pro Tips

1. **Test it yourself first!**
   - Fill out the form
   - Check if you received the email
   - Verify it appears in responses

2. **Share the direct link too**
   - Some people prefer filling forms separately
   - Get the short link and share via text/email

3. **Set a deadline reminder**
   - In Google Calendar, set reminder for RSVP deadline
   - Send a gentle reminder to guests 3 days before

4. **Customize the thank you message**
   - Settings → Presentation → Confirmation message
   - Add emojis and personal touch!

---

Need help? The form embed code goes in `index-googleform.html` around line 170!
