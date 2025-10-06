#!/bin/bash

# Quick GitHub Pages Setup Script for Diwali Invitation
# This script helps you deploy your website to GitHub Pages

echo "🪔 Diwali Invitation - GitHub Pages Setup 🪔"
echo "=============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Get repository name
read -p "Enter repository name (default: diwali-invitation-2025): " repo_name
repo_name=${repo_name:-diwali-invitation-2025}

echo ""
echo "📋 Setup Summary:"
echo "   GitHub Username: $github_username"
echo "   Repository Name: $repo_name"
echo "   Your website will be at: https://$github_username.github.io/$repo_name/"
echo ""
read -p "Continue? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "Setup cancelled"
    exit 0
fi

echo ""
echo "🚀 Starting setup..."
echo ""

# Initialize git repository
echo "1️⃣ Initializing Git repository..."
git init

# Add all files
echo "2️⃣ Adding files..."
git add .

# Commit files
echo "3️⃣ Creating first commit..."
git commit -m "Initial commit - Diwali invitation website"

# Add remote
echo "4️⃣ Linking to GitHub..."
git remote add origin "https://github.com/$github_username/$repo_name.git"

# Rename branch to main
git branch -M main

echo ""
echo "✨ Local setup complete!"
echo ""
echo "📝 NEXT STEPS:"
echo ""
echo "1. Go to GitHub and create a new repository:"
echo "   https://github.com/new"
echo ""
echo "2. Repository settings:"
echo "   - Name: $repo_name"
echo "   - Visibility: Public (required for free GitHub Pages)"
echo "   - DO NOT initialize with README"
echo ""
echo "3. After creating the repository, run this command:"
echo "   git push -u origin main"
echo ""
echo "4. Enable GitHub Pages:"
echo "   - Go to repository Settings → Pages"
echo "   - Source: Deploy from branch 'main'"
echo "   - Click Save"
echo ""
echo "5. Your website will be live at:"
echo "   https://$github_username.github.io/$repo_name/"
echo ""
echo "🎉 That's it! Your invitation website will be live in 1-2 minutes!"
