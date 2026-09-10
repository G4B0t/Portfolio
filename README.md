# Software Engineering Portfolio

A public, dark-first professional portfolio foundation for G4B0t. This first phase establishes a scalable frontend architecture; detailed project case studies are intentionally not included yet.

## Stack

React, TypeScript (strict), Vite, React Router, styled-components, Framer Motion, Lucide React, ESLint, Prettier, Vitest, and React Testing Library.

## Architecture

`src/app` contains routing, providers, and layouts. `src/components/ui` has generic primitives; `src/components/common` has portfolio-specific shared components. Editable professional data lives in `src/content`; `src/projects` is reserved for future case studies; `src/theme` is the design-system source of truth.

The home page is composed from independent sections. Featured work is generated from the typed `ProjectDefinition` collection in `src/content/projects.ts`, so future projects can be added without redesigning the home page.

## Local development

Use a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run build
npm run preview
npm run lint
npm run format
npm run typecheck
npm run test
npm run test:run
```

## Deployment

The intended target is Vercel. `vercel.json` rewrites SPA routes to the Vite entry point so direct case-study URLs resolve correctly.

## Principles

Keep components small, content centralized, visuals token-driven, and accessibility built in. This public repository must never contain unreviewed professional information or private source material.
