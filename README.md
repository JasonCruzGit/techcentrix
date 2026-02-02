# TechCentrix – Technology Company Website

A modern, responsive static website for a technology company. Built with HTML5, CSS3, and vanilla JavaScript. No frameworks or heavy dependencies—optimized for fast load and easy deployment.

## Features

- **Fully responsive** – Mobile-first layout with Flexbox and CSS Grid
- **Clean, minimalist UI** – Blue, dark gray, and white palette; Inter font
- **SEO-friendly** – Semantic HTML, descriptive meta tags, clear headings
- **Accessible** – Skip link, ARIA where needed, focus styles, keyboard-friendly nav
- **Fast** – Minimal assets; CSS transitions only; no large JS libraries
- **Maintainable** – Reusable CSS components, clear folder structure, comments where helpful

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Modern CSS (custom properties, Flexbox, Grid)
- **Fonts:** Inter (Google Fonts)

## Project Structure

```
techcentrix/
├── index.html          # Home
├── about.html          # About Us
├── services.html       # Services
├── products.html       # Products & Systems
├── why-us.html         # Why Choose Us
├── contact.html        # Contact (form with validation)
├── css/
│   └── main.css        # Design system + components
├── js/
│   └── main.js         # Nav toggle + form validation
├── assets/             # (optional) images, icons
└── README.md
```

## Setup

1. **Clone or download** the project.
2. **Open locally** – Use any static file server or open `index.html` in a browser.
   - For a simple local server (Node): `npx serve` or `npx http-server`
   - Or open `index.html` directly (some features like fonts may vary).
3. **No build step** – No npm install or build required for basic use.

## Deployment

- **Shared hosting:** Upload the entire folder via FTP/SFTP. Point the domain’s document root to the folder containing `index.html`.
- **Static hosting (e.g. Netlify, Vercel, GitHub Pages):** Connect the repo or upload the folder; set the publish directory to the project root.
- **Cloud (e.g. S3, Azure Static Web Apps):** Upload files and configure the default document as `index.html`.

All links are relative; the site works from any subdirectory or root.

## Contact Form

The contact form includes client-side validation (name, email, message). On submit it currently shows a success message and resets. To send emails:

- **Option A:** Point the form `action` to a server-side script or form service (e.g. Formspree, Netlify Forms).
- **Option B:** In `js/main.js`, replace the success block with a `fetch()` call to your API (e.g. `/api/contact`) and handle the response.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). CSS custom properties and Grid are used; IE11 is not supported.

## License

Use and modify as needed for your project.
