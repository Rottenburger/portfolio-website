# Portfolio Website (Next.js + Tailwind)

Overview
--------
This is a personal portfolio website built with Next.js and Tailwind CSS. It showcases work experience, projects, CV, and interactive UI components (including an interactive hero) with light/dark theming.

Recent changes
-----------------------------------------
- Project source moved under `src/` (app router structure).
- Added a dedicated CV page under `/cv`.
- Added a projects listing page under `/projects`.
- Interactive hero component and theme provider for light/dark mode.
- UI library components consolidated under `src/components/ui/` (badge, button, card, progress, sheet).
- Utility helpers moved to `src/lib/utils.ts`.
- Static assets live in `public/` (profile images, icons, svgs).

Features
--------
- Home / landing page with interactive hero
- Projects listing and individual project pages (under `src/app/projects`)
- CV page with downloadable CV
- Theme provider (light / dark mode)
- Reusable UI components (buttons, cards, badges, progress, sheets)
- Responsive design using Tailwind CSS
- Static assets and icons in `public/`

Project structure (high level)
------------------------------
- src/
  - app/
    - globals.css
    - layout.tsx
    - page.tsx
    - interactive-hero.tsx
    - projects-page.tsx
    - mainicon.jpg
    - favicon.ico
    - cv/
      - page.tsx
    - projects/
      - page.tsx
  - components/
    - footer.tsx
    - navigation.tsx
    - theme-provider.tsx
    - ui/
      - badge.tsx
      - button.tsx
      - card.tsx
      - progress.tsx
      - sheet.tsx
  - lib/
    - utils.ts
- public/
  - profile.jpg / profile.png
  - file.svg, globe.svg, next.svg, vercel.svg, window.svg
- tailwind.config.ts (project Tailwind config)
- next.config.mjs (Next.js config)
- postcss.config.mjs

Development
-----------
1. Install dependencies
   - npm install
2. Run development server
   - npm run dev
   - Open http://localhost:3000
3. Build for production
   - npm run build
4. Start production server (after build)
   - npm start

Notes
-----
- Styling is handled with Tailwind CSS; global styles are in `src/app/globals.css`.
- The theme provider wraps the app to manage light/dark mode; check `src/components/theme-provider.tsx`.
- Reusable UI elements are in `src/components/ui/`. Use them for consistent styling and behavior.
- Static images and icons are in `public/`. Replace these with your own assets as needed.

Deployment
----------
- This project is compatible with Vercel (recommended) but can be deployed to any Next.js-capable host.
- Typical flow: push to Git, connect to Vercel, and it will build using the `build` script.

Where to edit content
---------------------
- Home content and hero: `src/app/page.tsx` and `src/app/interactive-hero.tsx`
- Projects list / project content: `src/app/projects/page.tsx`
- CV page: `src/app/cv/page.tsx`
- Shared components: `src/components/` and `src/components/ui/`
- Helpers & data: `src/lib/utils.ts`