# Placeonix Website 🚀

Welcome to the **Placeonix Website** repository! This is a modern, fast, and responsive Next.js application built to showcase our SAP and IT training programs, manage student applications, and provide an excellent user experience. 

## 🛠️ How to Run from Scratch

If you're a new developer, getting the project up and running locally is extremely straightforward. Follow these steps:

### 1. Prerequisites
Make sure you have installed on your machine:
- **Node.js** (v18.0 or later is recommended)
- **npm**, **yarn**, or **pnpm** (npm is used by default)
- **Git**

### 2. Clone the Repository
Clone this repository to your local machine and navigate into the `web-next` directory:
```bash
git clone https://github.com/sowjanya-design/placeonixwebsite.git
cd placeonixwebsite/web-next
```

### 3. Install Dependencies
Install all the necessary packages and libraries required by the project:
```bash
npm install
```
*(If you prefer another package manager, simply run `yarn install` or `pnpm install`)*

### 4. Start the Development Server
Fire up the local server to see the website in action:
```bash
npm run dev
```

### 5. View it Live!
Open your browser and navigate to [http://localhost:3000](http://localhost:3000). 
Any edits you make to the code will automatically hot-reload in the browser. You're ready to start building! 🎉

---

## 🎨 Recent Changes & Enhancements

We've recently undergone a massive wave of UI/UX improvements to make the platform feel more premium, readable, and engaging for prospective students. Here is a human breakdown of what we accomplished:

### 1. **Revamped Navigation (MegaNav)**
- Transformed the old, basic navigation bar into a fully responsive "Mega Menu". 
- Added a sleek **"Book a Demo Class"** call-to-action button (replacing "Apply Now") to drive better conversions.
- The navigation now gracefully collapses into a clean mobile hamburger menu on smaller screens.

### 2. **Global Lead-Capture Popup**
- Integrated a smart **Lead-Capture Popup** that appears after exactly **30 seconds** of a user browsing the site.
- We moved its styling from the homepage (`home.css`) to the global stylesheet (`globals.css`) so it reliably triggers on **all pages** (including course-specific pages) instead of just the homepage.
- It remembers when a user has dismissed it or submitted a form (using `sessionStorage`) so it doesn't pester them again.

### 3. **Polished the "Your Journey Starts Here" Section**
- We removed the abstract purple gradient placeholders and replaced them with **real-world, context-rich photography** (trainers teaching, students coding, professionals shaking hands).
- Updated the cards to have a bright, clean, premium white design with subtle box-shadows, perfectly framing the new imagery.

### 4. **Modernized the "Trusted Nationwide" Statistics Strip**
- Replaced the heavy, neon-glowing stats area with a **clean, minimalistic design**.
- Added a subtle, semi-transparent **dotted world-map** watermarked into the background.
- Cleaned up the typography and animations so the stats (`2,000+ Learners`, `150+ Corporate Clients`, `4+ Years Experience`) count up gracefully as you scroll down the page.

### 5. **Course Cards & Titles**
- Renamed terminology like "Domains" to "Courses" across the site for better clarity.
- Cleaned up duplicated text on program cards (e.g., removing redundant "View course page" elements) and perfected hovering state animations.

### 6. **Under the Hood (Code Quality)**
- Ran a complete `Prettier` format across the entire codebase. Every single `.tsx`, `.ts`, and `.css` file is now perfectly indented, consistently spaced, and properly organized.

---

*Thank you for contributing to Placeonix! If you have any questions, feel free to open an issue or reach out to the team.*
