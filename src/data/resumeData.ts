import { Linkedin, Github, Mail } from 'lucide-react';

export const personalInfo = {
  name: "Oscar Ivan Perez Ibarra",
  title: "Senior Frontend Developer",
  location: "Mexico (Open to remote opportunities in Mexico and USA)",
  phone: "+52 331 805 5956",
  email: "onavi.001@gmail.com",
  linkedin: "https://linkedin.com/in/ing-perez",
  github: "https://github.com/onavi001",
  summary:
    "Senior Frontend Developer with over 8 years of experience building scalable, user-centric web applications. Specialized in React and TypeScript ecosystems, with solid backend exposure in .NET and Node.js. Proven leadership in architectural decisions, technology selection, task delegation, and cross-functional collaboration.",
};

export const experience = [
  {
    title: "Senior Frontend Developer",
    company: "TechBridgeIT (Client: Supplemental Health Care)",
    period: "Aug 2023 – Present",
    location: "Remote",
    achievements: [
      "Led the development of a new talent dashboard for the healthcare sector, enabling professionals to upload resumes, build and edit profiles (work experience, education, certifications, licenses), add references, and apply to matching job opportunities.",
      "Collaborated on UI/UX design in Figma, defined technical architecture, selected optimal technologies based on project timelines and requirements, and made key development decisions (technology migrations, new implementations).",
      "Delegated tasks and mentored junior developers while maintaining code quality and delivery velocity.",
    ],
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Material UI", "Redux", "Vitest"],
  },
  {
    title: "Frontend Developer",
    company: "Encora (Client: Change.org)",
    period: "Apr 2022 – Aug 2023",
    location: "Remote",
    achievements: [
      "Maintained and enhanced the core Change.org platform by implementing new features, modules, and reusable components.",
      "Contributed to an internal component library using Storybook and Atomic Design principles to ensure consistency and scalability across the product.",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "HTML/CSS", "Storybook"],
  },
  {
    title: "Frontend Developer",
    company: "Intralix",
    period: "Jan 2021 – Feb 2022",
    location: "Guadalajara, Mexico",
    achievements: [
      "Built from scratch a comprehensive logistics dashboard for fleet and cargo tracking, integrating real-time GPS data.",
      "Implemented features for device management, route history, live map tracking, geofence alerts, and vehicle assignment.",
      "Integrated third-party Wialon API to connect physical GPS devices with the platform.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Senior Analyst / Fullstack Developer",
    company: "ZGAS",
    period: "Jul 2020 – Nov 2020",
    location: "Guadalajara, Mexico",
    achievements: [
      "Single-handedly developed an e-commerce platform that automated gas LP orders, replacing phone-based processes and integrating sales, finance, and delivery departments.",
      "Implemented secure payment processing and streamlined internal workflows.",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "C#", "OpenPay"],
  },
  {
    title: "Fullstack Developer & Project Lead",
    company: "Resser",
    period: "Oct 2017 – Sep 2019",
    location: "Guadalajara, Mexico",
    achievements: [
      "Led two key projects: a quotation tool for sales teams and a fully autonomous online store for GPS products and subscriptions.",
      "Automated sales, quotation, and payment processes using Stripe, enabling real-time notifications to sales, finance, and operations teams.",
      "Mentored one developer, delegated tasks, and oversaw end-to-end delivery.",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "C#", ".NET", "Stripe"],
  },
];

export const projects = [
  {
    title: "Mi Dieta",
    description:
      "React web app for weekly meal planning, nutrition tracking, and automated grocery list generation. Includes a guided nutrition flow and smart meal-slot balancing to keep plans consistent and practical.",
    liveUrl: "https://mi-dieta.netlify.app/",
    liveLabel: "Live App",
    frontendRepo: "https://github.com/onavi001/mi-dieta",
    backendRepo: "https://github.com/onavi001/mi-dieta-api",
    technologies: ["React 19", "TypeScript 5", "Vite 8", "Tailwind CSS 4", "Vitest", "Netlify"],
    metrics: ["Daily/Weekly Diet Views", "Guided Nutrition Workflow", "Allergy & Intolerance Adjustments"],
    highlights: [
      "Authentication and session flow connected to the mi-dieta-api backend",
      "Weekly generation with automatic similar-meal assignment per slot",
      "Ingredient adjustments for allergies and intolerances plus grocery list from active plan",
    ],
  },
  {
    title: "Mi Dieta API",
    description:
      "REST backend for Mi Dieta built with Express 5 + Supabase. Exposes authentication, meals catalog, plan generation, slot alternatives, and nutrition endpoints.",
    repo: "https://github.com/onavi001/mi-dieta-api",
    technologies: ["Node.js", "Express 5", "Supabase", "CORS", "Helmet", "REST API"],
    metrics: ["Health Endpoint (/health)", "Seed + Verify Meals Catalog", "Auth / Plans / Nutrition APIs"],
    highlights: [
      "Key routes for auth, meals, plans, and nutrition in a modular backend architecture",
      "Seed and verification scripts for curated meals catalog",
      "Deployment-ready for Render or Railway with /health checks",
    ],
  },
  {
    title: "Navi UI",
    description:
      "Enterprise-grade React component library focused on accessibility, strict TypeScript typing, and scalable theming. Built for teams that need speed without sacrificing quality.",
    liveUrl: "https://www.npmjs.com/package/@navi01/react",
    liveLabel: "NPM Package",
    repo: "https://github.com/onavi001/navi-ui",
    technologies: ["React 19", "TypeScript 5.8", "Tailwind CSS 4", "Radix UI", "Storybook", "Vitest"],
    metrics: ["38+ Components", "4 Full Templates", "WCAG 2.2 AA First"],
    highlights: [
      "38+ production-ready components and 4 full-page templates",
      "WCAG 2.2 AA compliance with full keyboard and screen reader support",
      "Theme-ready architecture with CSS variables and integrated dark mode",
    ],
  },
  {
    title: "MyVoice – Personal Gym Trainer App",
    description:
      "Fullstack application that tracks gym routines, allows users to create/edit workouts, and uses AI to generate personalized training plans based on goals, schedule, and available equipment. Integrates Grok API for AI and YouTube API for exercise videos.",
    liveUrl: "https://myvoice-fit.netlify.app",
    frontendRepo: "https://github.com/onavi001/myvoice-fe",
    backendRepo: "https://github.com/onavi001/myvoice-be",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Grok API", "YouTube API"],
    imageUrls: [
      "https://your-hosted-image.com/myvoice-screenshot1.jpg",
      "https://your-hosted-image.com/myvoice-screenshot2.jpg", // Optional second one
    ],
  },
  {
    title: "Healthcare Talent Dashboard",
    description:
      "Led development of a modern talent acquisition platform for healthcare professionals, featuring profile building, resume uploads, job matching, and applications.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Material UI", "Redux"],
    imageUrls: [
      "https://your-hosted-image.com/myvoice-screenshot1.jpg",
      "https://your-hosted-image.com/myvoice-screenshot2.jpg", // Optional second one
    ],
  },
  {
    title: "Change.org Platform Enhancements",
    description:
      "Contributed to core features and maintained a scalable component library using Atomic Design and Storybook.",
    technologies: ["React", "TypeScript", "GraphQL", "Storybook"],
  },
  {
    title: "Real-Time Fleet Tracking Dashboard",
    description:
      "Built a logistics dashboard with live GPS integration, route history, geofencing, and device management.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Wialon API"],
  },
  // Add more if you want (e.g., ZGAS e-commerce, Resser store)
];

export const additionalGithubProjects = [
  // Add more here as you see fit – examples based on common repos in your profile
  {
    title: "Blog App (AWS Course Project)",
    description: "Fullstack blog application deployed on AWS, practicing cloud architecture.",
    repo: "https://github.com/onavi001/blogapp-course", // Adjust if name differs
    technologies: ["React", "Node.js", "AWS"],
  },
  {
    title: "GraphQL Project Server (AWS)",
    description: "Backend server exploring GraphQL APIs hosted on AWS.",
    repo: "https://github.com/onavi001/graphql-project-server",
    technologies: ["Node.js", "GraphQL", "AWS"],
  },
  // Feel free to add others like portfolio experiments, etc.
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "GraphQL", "Vite", "Tailwind CSS", "Material UI", "Bootstrap", "Storybook"],
  backend: ["Node.js", "C#", ".NET", "Entity Framework"],
  databases: ["SQL Server", "MySQL", "MongoDB"],
  tools: ["Git", "Jest", "Vitest", "Azure DevOps", "Docker"],
  other: ["Stripe", "OpenPay", "PayU", "Wialon", "Google Drive", "Spotify", "YouTube"],
  soft: ["Leadership", "Technical Decision-Making", "Mentoring", "Problem-Solving", "Team Collaboration"],
};

export const socialLinks = [
  { icon: Linkedin, url: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Github, url: personalInfo.github, label: "GitHub" },
  { icon: Mail, url: `mailto:${personalInfo.email}`, label: "Email" },
];