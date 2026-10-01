# Payal Wankhade — Developer Portfolio

A modern, high-performance, and visually stunning developer portfolio built with **React**, **Vite**, and **Vanilla CSS**. customized with the complete resume and credentials of **Payal Wankhade** (Python Developer & Full-Stack Engineer).

---

## ✨ Features & Architecture

- **Static & Netlify-Ready**: Fully static build generated in `dist/` with automated routing configured via `netlify.toml`.
- **Direct Resume Download & Preview**:
  - One-click **"Resume"** download button in the sticky Navbar.
  - Prominent **"Download Resume"** CTA in the Hero action group.
  - Dedicated **"Download Resume (PDF)"** and **"View ↗"** buttons in the Candidate Dossier.
  - Quick download pill in the Contact / Footer section.
  - Serves official `Payal_Wankhade_Resume.pdf` statically with instant browser download.
- **Dark & Light Mode Switcher**: Seamless theme switcher persisted in `localStorage`.
- **Interactive Tech Canvas**: HTML5 Canvas particle network with animated circuit lines and node pulses.
- **Ambient Glowing Mesh & Cursor Aura**: Layered radial glows with a smooth mouse-following spotlight.
- **Top Reading Scroll Progress**: Real-time progress bar tracking page scroll depth.
- **Sticky Glassmorphic Navigation**: Blur-backed navbar with brand badge, active section tracker, and mobile drawer.
- **Hero Section**:
  - Live availability badge with pulsating green status dot
  - Custom headline and resume summary
  - Quick contact pills (Email, Phone, Location, LinkedIn)
  - Animated live counters for Experience, Projects, REST API score, and Databases
- **Infinite Marquee Ticker**: Continuous sliding ticker showcasing organizations and core tech stack.
- **01 // About Me**: Narrative story card paired with a structured Candidate Dossier and language proficiencies.
- **02 // Skills & Arsenal**: Interactive category filtering tabs (*All*, *Backend & Languages*, *Frontend & Web*, *Databases & APIs*, *Tools & Concepts*) with colored Devicons.
- **03 // Featured Projects & Case Studies**:
  - **Collection CRM** (Node.js & React, PostgreSQL, REST API)
  - **Social Media Web Application** (Instagram Clone with Python & Django)
  - **Enterprise REST API & Backend Architecture** (Radiaant Captive India Limited)
  - **SQL Relational Modeling & Query Optimization Engine**
  - Interactive deep-dive modal for each project with architectural details and full-screen lightbox zoom.
- **04 // Experience Log**: Vertical timeline with glowing pins detailing roles at **Radiaant Captive India Limited** (Full-Time & Intern) and **Sanyu Infotech Pvt. Ltd**.
- **05 // Education Roadmap**: Academic credentials from **Sant Gadge Baba Amravati University** (B.E. Computer Engineering) and **Industrial Training Institute** (COPA).
- **06 // Contact & Modals**:
  - Direct email, phone, and LinkedIn channels.
  - Interactive contact modal drawer with form validation and animated confirmation state.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This produces a static, optimized bundle inside the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploy to Netlify (Static Hosting)

You can deploy this static portfolio to Netlify using either of the following two simple methods:

### Method 1: Instant Drag-and-Drop (Netlify Drop)
1. Run `npm run build` in your terminal.
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder from this project onto the Netlify upload area.
4. Your website is live in seconds!

### Method 2: Git Repository (Continuous Deployment)
1. Initialize git and push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Payal Wankhade portfolio"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Log into [Netlify](https://app.netlify.com/) and click **"Add new site"** → **"Import an existing project"**.
3. Choose your repository.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**. Every push to your `main` branch will automatically re-deploy your site.

---

## 📁 Project Structure

```
My_Portfolio/
├── netlify.toml               # Netlify configuration (dist build & SPA redirects)
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite build configuration
├── index.html                 # Entry HTML with fonts, Devicons, and meta tags
├── public/
│   ├── favicon.svg            # Custom PW brand badge favicon
│   └── images/                # High-fidelity project showcase covers
│       ├── crm_cover.jpg
│       ├── social_cover.jpg
│       ├── api_cover.jpg
│       └── db_cover.jpg
└── src/
    ├── main.jsx               # React DOM entry point
    ├── App.jsx                # Root application layout & state
    ├── index.css              # Complete design tokens, animations, and responsive styles
    ├── data/
    │   └── portfolioData.js   # Structured data from Payal Wankhade's resume
    └── components/
        ├── TechCanvas.jsx     # Interactive particle & circuit canvas background
        ├── CursorGlow.jsx     # Interactive mouse follower spotlight
        ├── ScrollProgress.jsx # Top scroll reading indicator
        ├── Navbar.jsx         # Sticky glassmorphic navbar with theme toggle
        ├── Hero.jsx           # Hero with live badge, headline, and counter cards
        ├── Marquee.jsx        # Infinite sliding tech stack ticker
        ├── About.jsx          # About me narrative and candidate dossier
        ├── Skills.jsx         # Filterable skills grid with Devicons
        ├── Projects.jsx       # Featured project cards with case study triggers
        ├── Experience.jsx     # Timeline experience log
        ├── Education.jsx      # Academic milestones & credentials
        ├── Footer.jsx         # Contact section and social links
        ├── ProjectModal.jsx   # Deep-dive project case study modal
        ├── Lightbox.jsx       # Full-screen image zoom modal
        └── ContactModal.jsx   # Interactive message form drawer
```
