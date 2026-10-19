# Anes Portfolio v2

[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

A personal portfolio and venture showcase engineered for **ANES** — Computer Science Student, Digital Agency Founder, and Tech Entrepreneur. Built with high craftsmanship, luxury dark aesthetics, responsive motion architecture, and interactive venture modals.

---

## ✨ Features

- **🏛️ Cinematic Hero Experience**: High-impact editorial typography, dynamic focal points, and curated photography.
- **📈 Proven Impact Metrics**: Highlighting enterprise pipeline value, deployed production systems, active partners, and systems/AI academic focus.
- **⏳ Interactive Milestones & Life Story**: Dynamic multi-stage journey tracking academic foundations, commercial agency launch, and venture scale.
- **💼 Ventures & Enterprise Showcase**: Portfolio cards detailing client deliverables, tech stacks, and live links, complete with interactive deep-dive modals.
- **📬 Inquiries & Direct Engagement**: Integrated inquiry system tailored for enterprise partnerships, technical consulting, and advisory roles.
- **⚡ Next-Gen Performance**: Sub-second build times powered by Vite, typed with TypeScript, and styled with Tailwind CSS v4.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Modern UI component hierarchy & reactive state |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing & interface definitions for portfolio data |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | High-performance styling, custom palettes, & luxury dark theme |
| **[Vite](https://vitejs.dev/)** | Lightning-fast development server & production bundler |
| **[Lucide React](https://lucide.dev/)** | Clean, minimalist iconography |

---

## 📂 Project Structure

```text
ANES founder/
├── public/
│   ├── anes-sarajevo.jpg       # Hero & editorial imagery
│   └── anes-seaside.jpg        # Secondary portrait imagery
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx    # Bio, philosophy & impact metrics
│   │   ├── ContactSection.tsx  # Interactive contact & partnership inquiry
│   │   ├── Footer.tsx          # Brand footer & social channels
│   │   ├── Hero.tsx            # Fullscreen editorial hero section
│   │   ├── LifeStoryTimeline.tsx # Chronological milestone narrative
│   │   ├── Navbar.tsx          # Sticky glassmorphism navigation
│   │   ├── VentureDetailModal.tsx # Full venture breakdown modal
│   │   └── VenturesSection.tsx # Venture card grid & filters
│   ├── data/
│   │   └── initialData.ts      # Profile, metrics, ventures & milestone data
│   ├── types/
│   │   └── portfolio.ts        # TypeScript schemas & contracts
│   ├── App.tsx                 # Root layout & state orchestration
│   ├── index.css               # Global theme tokens & font definitions
│   └── main.tsx                # Application entrypoint
├── index.html                  # HTML template & Google Fonts imports
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite bundler plugins & config
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/djuuuma/Anes-Portfolio-v2.git
   cd Anes-Portfolio-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📦 Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Deploy to Hosting Platforms

This is a static Vite Single Page Application (SPA), ready for one-click deployment:

- **[Vercel](https://vercel.com/)**: Connect your GitHub repository, choose Vite preset, and deploy.
- **[Netlify](https://www.netlify.com/)**: Build command: `npm run build`, Publish directory: `dist`.
- **[GitHub Pages](https://pages.github.com/)**: Deploy the `dist` folder via GitHub Actions.

---

## ⚙️ Configuration & Customization

All personal details, venture information, and milestone history can be customized directly in:

📁 [`src/data/initialData.ts`](file:///c:/Users/Administrator/Desktop/websajtovi/ANES%20founder/src/data/initialData.ts)

- **`initialProfile`**: Name, titles, bio narrative, email, social links, and metric statistics.
- **`initialVentures`**: Featured companies, roles, key metrics, descriptions, and deliverables.
- **`initialMilestones`**: Career journey, academic highlights, and milestones.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more details.
