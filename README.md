# Oscar Ivan Perez Ibarra — Portfolio

Personal developer portfolio for **Oscar Ivan Perez Ibarra**, Senior Frontend Developer with 8+ years of experience building scalable, user-centric web applications.

Live at: **[https://onavi001.github.io](https://onavi001.github.io)** _(update with your actual deployment URL)_

---

## About

This portfolio showcases professional experience, featured projects, technical skills, and contact information. It is designed for recruiters and engineering teams, with a recruiter-first section layout: Home → Projects → Experience → Skills → Education → Contact.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 5 |
| Build tool | Vite (rolldown-vite) |
| Styling | Tailwind CSS 4 |
| UI Library | [@navi01/react](https://www.npmjs.com/package/@navi01/react) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Sora + Manrope (Google Fonts) |

---

## Features

- **Dark mode** — class-based toggle with `localStorage` persistence and system-preference detection
- **Mobile responsive** — mobile drawer nav with overlay and scroll lock
- **Recruiter-first layout** — sections ordered for maximum impact
- **Featured case study** — Mi Dieta Ecosystem (Problem / Architecture / Outcomes)
- **Live demo + repo links** — per-project CTAs with `highlights` and `metrics`
- **Downloadable CV** — PDF linked directly from the Hero section

---

## Project Structure

```
src/
  assets/          # Static files (resume.pdf)
  components/
    Navbar.tsx     # Fixed nav with dark mode toggle + mobile drawer
    Hero.tsx       # Landing section with CTA buttons and social links
    Projects.tsx   # Featured case study + project cards grid
    Experience.tsx # Work history timeline
    Skills.tsx     # Skill groups with colored chips
    Education.tsx  # Degree + language proficiency bars
    Contact.tsx    # Contact card with email/phone/social links
  data/
    resumeData.ts  # Single source of truth for all portfolio content
```

---

## Featured Projects

### Mi Dieta Ecosystem
Three connected repositories that form a full product:

| | Repo | Live |
|---|---|---|
| Frontend | [onavi001/mi-dieta](https://github.com/onavi001/mi-dieta) | [mi-dieta.netlify.app](https://mi-dieta.netlify.app/) |
| Backend API | [onavi001/mi-dieta-api](https://github.com/onavi001/mi-dieta-api) | — |
| UI Library | [onavi001/navi-ui](https://github.com/onavi001/navi-ui) | [npmjs.com/@navi01/react](https://www.npmjs.com/package/@navi01/react) |

### MyVoice — Personal Gym Trainer App
AI-powered workout planning with Grok API + YouTube API integration.
- Frontend: [onavi001/myvoice-fe](https://github.com/onavi001/myvoice-fe) → [myvoice-fit.netlify.app](https://myvoice-fit.netlify.app)
- Backend: [onavi001/myvoice-be](https://github.com/onavi001/myvoice-be)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Customizing Content

All personal data is centralized in [`src/data/resumeData.ts`](src/data/resumeData.ts):

- `personalInfo` — name, title, location, contact details
- `experience` — work history with achievements and tech stack
- `projects` — featured projects with links, highlights, and metrics
- `additionalGithubProjects` — secondary GitHub projects
- `skills` — categorized skill lists
- `socialLinks` — LinkedIn, GitHub, email

---

## Dark Mode

Dark mode is toggled via the navbar button and persists in `localStorage`. The system preference (`prefers-color-scheme`) is respected on first visit. The `.dark` class is applied to `<html>` and drives all dark-variant styles.
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
