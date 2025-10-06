# How to Host Your Diwali Invitation on GitHub Pages

## Method 1: Using GitHub Website (Easiest - No Command Line)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" if you don't have an account
3. Follow the registration process

### Step 2: Create a New Repository
1. Click the **"+"** icon in the top-right corner
2. Select **"New repository"**
3. Name it something like: `diwali-invitation-2025`
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add a README file"
6. Click **"Create repository"**

### Step 3: Upload Your Files
1. On the repository page, click **"uploading an existing file"** link
2. Drag and drop ALL these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `bck_diwali.jpg`
   - `README.md` (optional)
3. Scroll down and click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu)
2. Click **"Pages"** in the left sidebar
3. Under "Source", select **"main"** branch
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

### Step 5: Get Your Website URL
Your site will be live at:
```
https://YOUR-USERNAME.github.io/diwali-invitation-2025/
```

Example: If your GitHub username is `animesh123`, your URL will be:
```
https://animesh123.github.io/diwali-invitation-2025/
```

---

## Method 2: Using Command Line (If You're Familiar with Git)

### Prerequisites
- Git installed on your computer
- GitHub account created

### Steps

1. **Open Terminal** (already in your project folder)

2. **Initialize Git repository:**
```bash
cd /Users/animeshsrivastava/Documents/diwali_invite
git init
```

3. **Add all files:**
```bash
git add .
```

4. **Commit your files:**
```bash
git commit -m "Initial commit - Diwali invitation website"
```

5. **Create a repository on GitHub** (via website as described above)

6. **Link your local repository to GitHub:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/diwali-invitation-2025.git
```
(Replace YOUR-USERNAME with your actual GitHub username)

7. **Push your code:**
```bash
git branch -M main
git push -u origin main
```

8. **Enable GitHub Pages** (follow Step 4 from Method 1)

---

## Method 3: Using GitHub Desktop (Mac Users)

### Step 1: Download GitHub Desktop
1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

### Step 2: Add Your Project
1. Click **"File" → "Add Local Repository"**
2. Choose the folder: `/Users/animeshsrivastava/Documents/diwali_invite`
3. Click **"create a repository"** link
4. Click **"Create Repository"**

### Step 3: Publish to GitHub
1. Click **"Publish repository"** button
2. Name: `diwali-invitation-2025`
3. Uncheck **"Keep this code private"** (must be public for free Pages)
4. Click **"Publish repository"**

### Step 4: Enable GitHub Pages
Follow Step 4 from Method 1 (via GitHub website)

---

## Updating Your Website Later

### If using GitHub website:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Wait 1-2 minutes for changes to appear

### If using Command Line:
```bash
git add .
git commit -m "Updated content"
git push
```

### If using GitHub Desktop:
1. Make changes to your files
2. GitHub Desktop will show changes
3. Add a commit message
4. Click "Commit to main"
5. Click "Push origin"

---

## Troubleshooting

### Website not loading?
- Wait 2-3 minutes after enabling Pages
- Check that repository is **Public**
- Verify GitHub Pages is enabled in Settings
- Make sure `index.html` is in the root folder (not in a subfolder)

### Images not showing?
- Make sure `bck_diwali.jpg` was uploaded
- Check that the filename matches exactly (case-sensitive)

### Need to change the URL?
- You can use a custom domain (requires domain purchase)
- Or rename your repository in Settings → General → Repository name

---

## Next Steps

Once your site is live:
1. **Test it** on your phone
2. **Share the URL** with your guests
3. **Update content** anytime by editing files on GitHub

### Pro Tips:
- Bookmark your repository page for easy access
- Your website URL is permanent (unless you delete the repository)
- You can create a shorter URL using services like bit.ly
- Consider adding your website to your phone's home screen for easy sharing

---

## Need Help?

If you get stuck:
1. Check GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/pages)
2. Make sure your repository is public
3. Verify all files are uploaded
4. Wait at least 2 minutes after enabling Pages

Happy hosting! 🪔✨
