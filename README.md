# prms.systems — Deployment Guide

## Stack
- Pure HTML + CSS + Vanilla JS
- No build step required
- Hosted on Netlify (free tier)
- Domain registered on GoDaddy

## File Structure
```
prms-site/
├── index.html          → / (Home)
├── style.css           → Shared styles (all pages)
├── nav.js              → Shared navigation (injected)
├── netlify.toml        → Netlify config
├── framework/
│   └── index.html      → /framework
├── principles/
│   └── index.html      → /principles
├── taxonomy/
│   └── index.html      → /taxonomy
├── metrics/
│   └── index.html      → /metrics
├── applications/
│   └── index.html      → /applications
├── publications/
│   └── index.html      → /publications
└── about/
    └── index.html      → /about
```

## Deploy to Netlify — Step by Step

### 1. Create GitHub repository
1. Go to github.com → New repository
2. Name it: `prms-systems`
3. Set to Public (or Private)
4. Upload all files from this folder

### 2. Connect to Netlify
1. Go to netlify.com → Sign up / Log in (free)
2. "Add new site" → "Import an existing project"
3. Connect GitHub → Select `prms-systems` repo
4. Build settings: leave empty (no build command needed)
5. Publish directory: `.` (root)
6. Click "Deploy site"

### 3. Connect your GoDaddy domain
In Netlify:
1. Site settings → Domain management → Add custom domain
2. Enter: `prms.systems`
3. Netlify will show you DNS records to add

In GoDaddy:
1. Go to DNS settings for prms.systems
2. Delete the existing A record pointing to GoDaddy's parking page
3. Add Netlify's DNS records:
   - Type: A | Name: @ | Value: 75.2.60.5
   - Type: CNAME | Name: www | Value: [your-site].netlify.app
4. Wait 1–24 hours for propagation

### 4. Enable HTTPS
Netlify handles SSL automatically once DNS propagates.

## Update content
Edit any HTML file → Push to GitHub → Netlify auto-deploys in ~30 seconds.

## Author
Oscar A. Hernández García
PEAR-ROI Studio Architects — Querétaro, México
ORCID: 0009-0005-2474-4834
