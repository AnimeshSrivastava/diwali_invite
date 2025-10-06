# Diwali Party Invitation Website

A beautiful, mobile-first Diwali party invitation website with smooth scrolling sections.

## Features

- 🪔 Beautiful Diwali-themed design
- 🖼️ Custom repeating background image with transparency overlay
- 📱 Mobile-first responsive layout
- ✨ Smooth scroll-snap navigation between sections
- 💫 Animated diya decorations
- 📝 RSVP form with validation
- 🎨 Professional color scheme inspired by traditional Diwali colors

## Sections

1. **Hero** - Main invitation with event details
2. **About Diwali** - Information about the festival
3. **Important Details** - Directions, parking, and dress code
4. **RSVP** - Form for guests to respond
5. **Footer** - Contact information

## Customization

### Update Contact Information
Edit `index.html` and find the footer section to update:
- Email address (replace `your.email@example.com`)
- Phone number (replace `(555) 123-4567`)

### Change Event Details
In `index.html`, update:
- Date and time
- Location
- Host names

### Background Image
To change the background image:
1. Replace `bck_diwali.jpg` with your image
2. Or update the path in `style.css` (look for `background-image: url('bck_diwali.jpg')`)
3. Adjust opacity in `style.css` by changing `opacity: 0.15` (0 = invisible, 1 = fully visible)
4. Adjust overlay transparency by modifying the rgba values in section::before rules

### Colors
Edit `style.css` and modify the CSS variables at the top:
```css
:root {
    --cream: #f5f0e8;
    --maroon: #a63a50;
    --terracotta: #c87456;
    --gold: #d4af37;
    --dark-maroon: #7d2d3d;
    --light-cream: #faf8f3;
}
```

### Form Submission
**✨ NOW USING: Formspree Integration!**

Your beautiful custom form is now connected to Formspree for easy RSVP collection:
- **See [FORMSPREE_QUICK.md](FORMSPREE_QUICK.md)** for 2-minute setup
- **See [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)** for detailed instructions
- **Already configured** - just add your Formspree ID!

**How to activate:**
1. Sign up FREE at [formspree.io](https://formspree.io)
2. Create a form and get your ID
3. Replace `YOUR_FORM_ID` in `index.html` (line ~136)
4. Done! You'll receive emails for each RSVP

**Alternative options:** See [RSVP_SETUP.md](RSVP_SETUP.md) for Google Forms, EmailJS, etc.

## How to Use

### Local Development
1. Simply open `index.html` in your web browser
2. No build process or server required!

### Hosting Your Website
**See [HOSTING_GUIDE.md](HOSTING_GUIDE.md) for detailed instructions on hosting with GitHub Pages!**

Quick options:
- **GitHub Pages** (Free!) - See HOSTING_GUIDE.md
- **Netlify** - Drag and drop at netlify.com
- **Vercel** - One-click deploy at vercel.com

## File Structure

```
diwali_invite/
├── index.html              # Main HTML file ⭐ USE THIS ONE
├── index-googleform.html   # Alternative: Google Forms version
├── style.css               # Styles and animations
├── script.js               # Formspree RSVP handler ⭐ UPDATED
├── bck_diwali.jpg          # Background image
├── README.md               # This file
├── FORMSPREE_QUICK.md      # ⭐ Quick Formspree setup (2 min)
├── FORMSPREE_SETUP.md      # ⭐ Detailed Formspree guide
├── HOSTING_GUIDE.md        # GitHub Pages hosting guide
├── GOOGLE_FORM_SETUP.md    # Google Forms setup (alternative)
├── QUICK_GOOGLE_FORM.md    # Quick Google Forms guide
├── STYLE_GOOGLE_FORM.md    # Google Forms styling
├── FORM_COLORS.md          # Google Forms colors
├── RSVP_SETUP.md           # All RSVP options comparison
└── setup-github.sh         # Quick setup script for GitHub
```

## Browser Compatibility

- Chrome/Edge (recommended)
- Safari
- Firefox
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips

- Test on mobile devices for best experience
- The scroll-snap feature works best on modern browsers
- Each section takes full viewport height for smooth scrolling
- Diya decorations have subtle flickering animations

## Support

For questions or issues, feel free to reach out to the hosts!

---

Happy Diwali! 🪔✨
