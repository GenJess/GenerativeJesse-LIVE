# Project Overview

## Project Title: Personal Portfolio

## Project Goal:
To create a personal portfolio website showcasing skills, projects, and experience, enhanced with a portfolio assistant.

## Technologies Used:
- React
- TypeScript
- Vite
- shadcn-ui
- Tailwind CSS
- @react-three/fiber (for 3D/canvas effects)
- three (WebGL engine for interactive visuals)
- framer-motion (UI animation library for React)

## Project Structure:
- `index.html`: Main HTML file.
- `src/`: Source code directory.
  - `App.tsx`: Main application component.
  - `main.tsx`: Entry point for the React application.
  - `components/`: Reusable React components.
  - `pages/`: React components for different pages.
  - `lib/`: Utility functions.
  - `index.css`: Global styles.
- `vite.config.ts`: Vite configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `postcss.config.js`: PostCSS configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project dependencies and scripts.
- `README.md`: Project documentation.
- `memory-bank/`: Project documentation and context.

## Spline Scene URLs in Use (LIVE):



- **Home Page (/home)**
  - URL: https://prod.spline.design/A6r9GOTlwGdONZl7/scene.splinecode
  - Description: Robot Man (zoomed/cropped, no logo, main home page visual)
  - **Status:** LIVE — Lock this Spline for production, do not edit!

- **About Page Spline:**
  - URL: https://prod.spline.design/zQQIvq4DY2lHfzP1/scene.splinecode
  - Description: About page robot scene

## Routing & Flow (Production)
- **/ (Landing):** Ocean Intro Spline (handles scroll and redirects to /home)
- **/home:** Robot Man Spline (main portfolio home)
- **/about, /projects, /creations, /history:** Standard portfolio pages

**NOTE:**
- The Spline scenes listed as LIVE above are locked for production. Do not modify these Spline scenes in the Spline editor to avoid breaking the live site.
- All routing and page components should match this flow.

## Recent Changes (as of 2025-04-29):
- Removed all gradient overlays from Home, About, and Ocean Intro pages.
- Ensured only one robot is visible on the Home page (fixed double robot bug).
- Confirmed cropping/zoom logic is consistent and matches final design intent.
- Verified Spline logo is hidden by zoom/cropping and asset edit.
- Noted that the Home page Spline currently does NOT display the user's name. (TODO: Update to correct Spline scene with name if required.)

## Description:
This project is a personal portfolio website built with React, TypeScript, and other modern web technologies. It showcases skills, projects, and experience, and includes a portfolio assistant to engage visitors.
