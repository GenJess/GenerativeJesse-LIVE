# GenerativeJesse.com

**Last Updated:** April 30, 2025

---

## 🚀 Live Site Flow

```
Ocean Intro Spline (Landing)
   |
   v
[Scroll to bottom triggers redirect]
   |
   v
Home (/home)
   |
   v
About (/about)
   |
   v
Projects (/projects)
```

---

## 🌊 Ocean Intro Spline Landing
- The landing page (`/`) displays the Ocean Spline in a fullscreen, interactive viewport.
- All scroll/cursor/redirect logic is handled inside Spline (no overlays, no hacks).
- When the user scrolls to the bottom, Spline triggers a redirect to `/home`.
- The Spline is perfectly scaled, no zoom/crop, and fully interactive.

---

## 🏗️ Recent Major Changes
- **Ocean Intro Spline:** Simplified landing page code for perfect Spline scaling and interaction. No more scroll/zoom bugs.
- **Nav Bar:** "Home" now links to `/home` (not `/`). No nav button for the Ocean Intro.
- **Creations:** Restored file-finder UI.
- **Projects:** Fixed rendering issues—projects now display as intended.
- **README:** Updated for clarity and accuracy.

---

## 🗂️ Project Structure (Key Files)
```
├── src/
│   ├── pages/
│   │   ├── index.tsx      # Ocean Intro Spline landing
│   │   ├── Home.tsx      # Home (main site)
│   │   ├── About.tsx     # About
│   │   ├── Projects.tsx  # Projects
│   │   └── Creations.tsx # Creations (file-finder look)
│   ├── components/       # NavBar, Spline wrappers, UI
│   └── ...
├── public/
├── screenshots/
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## 🛠️ Built With
- Vite
- React
- TypeScript
- shadcn/ui
- Tailwind CSS

---

**Production site:** [generativejesse.com](https://generativejesse.com)

# Personal Portfolio

A modern, visually-rich web portfolio featuring a 3D landing page, interactive navigation, and a crypto dashboard. Built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

---

## How can I edit this code?

There are several ways of editing your application.


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
# Personal Portfolio

A modern, visually-rich web portfolio featuring a 3D landing page, interactive navigation, and a crypto dashboard. Built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

---

## 📂 Folder Structure

```
├── public/
│   ├── favicon.ico
│   ├── og-image.png        # Open Graph/social preview image (see screenshot below)
│   └── placeholder.svg
├── src/
│   ├── App.tsx             # Main React app entry
│   ├── main.tsx            # Vite entry point
│   ├── index.css           # Global styles
│   ├── components/         # UI & custom components (NavBar, SplineScene, etc)
│   ├── pages/              # Page-level components (index.tsx, About.tsx, etc)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   └── context/            # React context providers
├── package.json            # Project dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite config
└── README.md
```

---
cd <project-folder>

# Step 3: Install dependencies.
npm install
# or
yarn install

# Step 4: Run the development server.
npm run dev
# or
yarn dev
```

---

## 🚀 Quick Start

### 1. Clone the repository
```sh
git clone https://github.com/GenJess/GenerativeJesse.git
cd "Personal Portfolio"
```

### 2. Install dependencies
```sh
npm install
# or
yarn install
```

### 3. Run the development server
```sh
npm run dev
# or
yarn dev
```
- Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### 4. Build for production
```sh
npm run build
```

## 🛠️ Built With
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📄 License
MIT
