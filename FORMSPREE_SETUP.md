# Formspree Setup Guide - 5 Minutes to Working RSVP Form!

## 🎉 You're Almost Done!

Your beautiful custom form is ready. You just need to connect it to Formspree to start receiving RSVPs.

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Sign Up for Formspree (2 minutes)

1. **Go to [formspree.io](https://formspree.io)**

2. **Click "Get Started"** (top right)

3. **Sign up with:**
   - Email address
   - Or Google account (faster!)

4. **Verify your email** (check inbox)

---

### Step 2: Create Your Form (1 minute)

1. **After logging in, click "+ New Form"**

2. **Name your form:**
   - Type: "Diwali RSVP 2025"

3. **Click "Create Form"**

4. **You'll see your form dashboard**

---

### Step 3: Get Your Form ID (30 seconds)

1. **Look for the "Integration" tab** or "Setup" section

2. **You'll see something like:**
   ```
   https://formspree.io/f/xyzabc123
   ```

3. **Copy the part after `/f/`**
   - Example: If you see `xyzabc123`, that's your form ID!
   - It might look like: `mqazwxyz`, `mpzyabcd`, etc.

4. **Keep this handy!**

---

### Step 4: Add Your Form ID to Website (1 minute)

1. **Open `index.html`** in your text editor

2. **Search for:** `YOUR_FORM_ID` (around line 136)

3. **You'll see this:**
   ```html
   <form class="rsvp-form" id="rsvpForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

4. **Replace `YOUR_FORM_ID` with your actual ID:**
   ```html
   <form class="rsvp-form" id="rsvpForm" action="https://formspree.io/f/xyzabc123" method="POST">
   ```
   (Use YOUR actual form ID!)

5. **Save the file**

---

### Step 5: Test It! (30 seconds)

1. **Open `index.html`** in your browser

2. **Scroll to the RSVP section**

3. **Fill out the form with test data:**
   - Name: Your name
   - Contact: Your email
   - Attending: Yes
   - Dietary: Testing

4. **Click "Confirm RSVP"**

5. **You should see:**
   - ✅ Success message on the website
   - ✅ Email from Formspree in your inbox (check spam!)
   - ✅ Response in your Formspree dashboard

---

## 🎯 You're Done!

Your beautiful custom RSVP form is now live and working! 🪔

---

## 📧 Email Notifications

**By default, Formspree sends you an email for each submission!**

To customize:

1. **Go to Formspree dashboard**
2. **Click your form name**
3. **Click "Settings"** tab
4. **Scroll to "Email Notifications"**
5. **Customize:**
   - Subject line
   - Additional email addresses
   - Reply-to address

---

## 📊 Viewing Responses

### In Formspree Dashboard:

1. **Click your form name**
2. **Click "Submissions" tab**
3. **See all RSVPs in a table**

### Export to Spreadsheet:

1. **In Submissions tab**
2. **Click "Export"** button (top right)
3. **Download as CSV**
4. **Open in Excel, Google Sheets, etc.**

---

## 🔧 Formspree Settings to Configure

### Recommended Settings:

1. **Go to form Settings**

2. **Enable:**
   - ✅ "Send me email notifications" (already on by default)
   - ✅ "Honeypot spam filtering" (helps prevent spam)

3. **Customize email subject:**
   - Change to: "New Diwali RSVP from {name}"

4. **Set "Reply-To":**
   - Use the submitter's email so you can reply directly

---

## 💎 Free Tier Limits

**What you get FREE:**
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Unlimited forms
- ✅ CSV exports
- ✅ Spam filtering
- ✅ File uploads (if you add them later)

**50 submissions = Perfect for party invites!**

If you need more, upgrade to:
- Gold: $10/month (1,000 submissions)
- Platinum: $40/month (10,000 submissions)

---

## 🎨 What Your Form Does Now

1. **Guest fills out RSVP**
2. **Clicks "Confirm RSVP"**
3. **Form sends data to Formspree**
4. **You receive email notification**
5. **Guest sees success message**
6. **Response saved in Formspree dashboard**

---

## 🔐 Privacy & Security

**Formspree:**
- ✅ GDPR compliant
- ✅ Encrypted connections (HTTPS)
- ✅ Spam filtering included
- ✅ Your data is secure

---

## 🐛 Troubleshooting

### Form not working?

**Check these:**

1. **Did you replace `YOUR_FORM_ID`?**
   - Look in `index.html` line ~136
   - Should be your actual ID, not "YOUR_FORM_ID"

2. **Is the form ID correct?**
   - Go to Formspree dashboard
   - Click your form
   - Check the endpoint URL

3. **Browser console errors?**
   - Right-click → Inspect → Console tab
   - Look for red error messages

4. **Email not arriving?**
   - Check spam folder
   - Verify email in Formspree settings
   - Check email notifications are enabled

### Still not working?

**Test the Formspree endpoint directly:**

1. Go to: `https://formspree.io/f/YOUR_FORM_ID`
2. Fill out the basic form Formspree shows
3. Submit
4. If email arrives → problem is in your website code
5. If email doesn't arrive → problem is in Formspree setup

---

## 🎁 Bonus Features (Optional)

### Add More Fields Later:

Just add to HTML form:
```html
<input type="text" name="phone" placeholder="Phone number">
<input type="number" name="guests" placeholder="Number of guests">
```

Formspree automatically captures any field with a `name` attribute!

### Custom Thank You Page:

1. In Formspree settings
2. Under "Submission Settings"
3. Add "Redirect URL" after submission
4. Create a custom thank-you page!

### Receive as JSON:

For developers who want to process data:
- Formspree can send webhooks
- Integrate with Zapier, Make, etc.
- Build custom workflows

---

## 📝 Quick Checklist

- [ ] Signed up at formspree.io
- [ ] Created form named "Diwali RSVP 2025"
- [ ] Copied form ID
- [ ] Replaced `YOUR_FORM_ID` in index.html
- [ ] Saved file
- [ ] Tested form submission
- [ ] Received test email
- [ ] Checked Formspree dashboard
- [ ] Configured email notifications
- [ ] Ready to share with guests! 🎉

---

## 🚀 Next Steps

1. **Test again** with real data
2. **Upload to GitHub Pages** (see HOSTING_GUIDE.md)
3. **Share URL** with your guests
4. **Watch RSVPs** come in!

---

## 💡 Pro Tips

1. **Test early!**
   - Submit a few test RSVPs
   - Make sure emails arrive
   - Check formatting

2. **Share the direct link:**
   - Some guests may have trouble with scrolling
   - Share: `your-site-url.com/#rsvp`

3. **Set reminder:**
   - Check Formspree dashboard day before deadline
   - Follow up with non-responders

4. **Export before event:**
   - Download CSV of all RSVPs
   - Create seating chart, meal planning, etc.

---

## ✨ You're All Set!

Your beautiful custom form now has a working backend!

**Questions?** Check the Formspree docs: [docs.formspree.io](https://docs.formspree.io)

Happy celebrating! 🪔

---

**Need help?** Check if you:
1. Replaced `YOUR_FORM_ID` with your actual ID
2. Saved the file
3. Refreshed your browser
4. Verified email in Formspree account
