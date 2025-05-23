# Jackson Bates Personal Website

This repository contains the source code for my personal website/resume hosted at [jacksonbates.github.io](https://jacksonbates.github.io).

## Project Structure

- `index.html` - Main resume page
- `links.html` - Additional links page
- `src/stylesheets/` - SCSS source files
- `public/stylesheets/` - Compiled CSS files
- `public/images/` - Image assets
- `fontawesome-free/` - Font Awesome library files

## Development Setup

### Prerequisites

To modify the SCSS files, you'll need:
- [Sass](https://sass-lang.com/install) - CSS preprocessor

### Compiling SCSS

The SCSS files in `src/stylesheets/` need to be compiled to generate the CSS in `public/stylesheets/`. You can do this with the Sass command line tool:

```bash
# Install Sass globally if you don't have it
npm install -g sass

# Compile SCSS to CSS (one-time)
sass src/stylesheets/resume.scss:public/stylesheets/resume.css

# Or watch for changes during development
sass --watch src/stylesheets/resume.scss:public/stylesheets/resume.css
```

### Testing Locally

To test the website locally, you can use any simple HTTP server. For example:

```bash
# Using Python (if installed)
python -m http.server

# Or using Node.js and npx (if installed)
npx serve
```

Then open your browser to the URL shown in the terminal (typically http://localhost:8000 or http://localhost:5000).

## Deployment

This site is hosted on GitHub Pages, so deployment is automatic when changes are pushed to the master branch:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

## External Dependencies

- [Bootstrap](https://getbootstrap.com/) (via CDN)
- [Font Awesome](https://fontawesome.com/) (included in repo)
- [jQuery](https://jquery.com/) (via CDN)
- [jQuery Easing](https://jqueryui.com/easing/) (via CDN)
