# Jackson Bates Personal Website

This repository contains the source code for my personal website hosted at [jacksonbates.github.io](https://jacksonbates.github.io).

## Architecture

This is a single-page site with zero dependencies:
- `index.html` - Complete site with inline styles
- `CNAME` - Custom domain configuration
- `sitemap.xml` - SEO sitemap

All styles are embedded directly in the HTML using CSS custom properties (variables) and modern CSS features. The site loads only two external resources:
- Google Fonts (Playfair Display, DM Sans, DM Mono)
- No JavaScript framework needed

## Testing Locally

To test the website locally, use any simple HTTP server:

```bash
# Using Python (if installed)
python -m http.server

# Or using Node.js and npx (if installed)
npx serve
```

Then open your browser to the URL shown in the terminal (typically http://localhost:8000 or http://localhost:5000).

## Deployment

This site is hosted on GitHub Pages. Deployment is automatic when changes are pushed to the master branch:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

The site will be live at https://jacksonbates.github.io within a few minutes.
