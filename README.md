# Hsu Wai Hnin Kyaw — Portfolio

Live site: https://hsu01.github.io/portfolio  
One-page React portfolio highlighting my background, projects, and ways to connect.

## What’s Inside
- About: intro, quick bio, CTA buttons linking to work and contact.
- Sticky glassy navbar with smooth section scroll and resume link.
- Work experience: animated cards describing roles (Amazon SDE intern, UW, freelance interpreting, entrepreneurship).
- Education timeline: degrees plus scholarship badges.
- Projects gallery: alternating cards with tech stack pills, external links, and preview images.
- Contact panel: quick links to GitHub, LinkedIn, email, and Instagram.

## Tech Stack
- React 18 (Create React App)
- Styling via component-level inline styles, CSS gradients, and AOS animations
- `react-scroll` for smooth navigation
- Deployed to GitHub Pages via `gh-pages`

## Local Development
```bash
npm install
npm start      # runs at http://localhost:3000
```

## Build & Deploy
```bash
npm run build          # production bundle -> build/
npm run deploy         # builds + publishes to GitHub Pages
```

## Updating Content
- Sections map to components in `src/`: `About.js`, `Job.js`, `Education.js`, `Projects.js`, `Contact.js`, `navbar.js`.
- Data such as job history, education entries, project cards, and contact links live in arrays near the top of each component—edit those to refresh the content.
- Public assets (project images, profile photo) are in `public/` or `src/`; update the `imageUrl` references in `Projects.js` if you add new media.

## Notes
- Animations are powered by AOS; adjust timing in `App.js` or component-specific `data-aos` attributes.
- Mobile tweaks are in component-scoped `<style>` blocks for each section.

## Author
Hsu Wai Hnin Kyaw  
GitHub: [@hsu01](https://github.com/hsu01)  
LinkedIn: [hsuwaihninkyaw](https://www.linkedin.com/in/hsuwaihninkyaw/)  
Email: hsu01@uw.edu

## Acknowledgments
- Inspired by modern portfolio designs
- Fonts: Google Fonts (Poppins, Martel)
- Icons: emoji-based for simplicity
- Animations: AOS library

⭐ Star this repo if you found it helpful!

Made with ❤️ and ☕ by Hsu
