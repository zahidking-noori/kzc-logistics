# KZC Logistics & Solutions LLC

Production-ready React + Vite website for KZC Logistics & Solutions LLC.

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL printed by Vite (typically `http://localhost:5173`).

## Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
/
├── public/           Static assets (robots.txt, sitemap.xml, manifest.json)
├── src/
│   ├── components/   Reusable React components
│   ├── data/         Business data and configuration
│   ├── hooks/        Custom React hooks
│   ├── lib/          Utilities and helpers
│   ├── pages/        Route page components
│   ├── utils/        Shared utilities
│   ├── App.jsx       Application router
│   ├── index.css     Global styles and Tailwind tokens
│   └── main.jsx      React entry point
├── index.html        HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **React Router** — Routing
- **shadcn/ui** — UI component library
- **Lucide React** — Icons

## Forms

Contact and quote forms are powered by [Formspree](https://formspree.io).
Update the endpoint in `src/lib/forms.js` if needed.

## License

All rights reserved. © KZC Logistics & Solutions LLC.