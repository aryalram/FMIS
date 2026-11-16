# FMIS

A responsive React + Vite website showcasing research, heritage storytelling, and public engagement around Te Rā — the Māori sail of Aotearoa/New Zealand.

This project is built as a modern landing and information site for research initiatives, featuring a hero section, research highlights, project information, and news/event content.

## Overview

FMIS is a front-end web application designed to present cultural and research material in a polished, accessible format. It includes:

- A full-width hero banner and branding section
- Research feature cards and story-based content
- About us / collaboration profile section
- News and events layout
- Routing between main site sections
- Responsive styling through Tailwind CSS

## Tech Stack

- React
- Vite
- JavaScript
- React Router DOM
- Tailwind CSS
- Font Awesome icons

## Project Structure

```bash
FMIS/
├── public/
│   ├── HeroImage.png
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── AwamatangiFiles/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsEvents.jsx
│   │   ├── Research.jsx
│   │   └── ResearchCards.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── package-lock.json
└── README.md
```

## Features

- Responsive navigation bar with active section highlighting
- Hero section with strong visual branding
- Research showcase cards
- About us profile section
- News and events page structure
- Clean modular component-based architecture

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will start in development mode and be available in the browser.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

From `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Main Routes

The app currently includes the following routes:

- `/` — Home
- `/research` — Research
- `/about-us` — About Us
- `/news-and-events` — News and Events

## Notes

This repository currently contains a front-end website focused on storytelling and research presentation. It is suitable for showcasing educational content, community narratives, and heritage projects.

## License

This project does not currently include a license file. If you plan to distribute or publish it publicly, consider adding an appropriate open-source license.

## Contributing

Contributions are welcome. You can fork the project, make changes, and submit a pull request.

## Author

This project appears to be a personal/research website project for the FMIS repository and is built using a React + Vite setup.

