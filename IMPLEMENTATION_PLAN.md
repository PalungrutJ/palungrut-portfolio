# Implementation Plan — "Interactive IT Control Room" Portfolio

**Owner:** Palungrut Jankong — IT Support & Internal System Developer
**Purpose:** Job-application portfolio that impresses IT managers within 10 seconds while staying professional, fast, and accessible.

## Stack
React 18 + TypeScript + Vite + Tailwind CSS + Motion (`motion/react`) + React Three Fiber / Drei (lazy, optional) + Lucide icons. Content lives in `src/data/*`, tokens in CSS variables.

## Concept
Visitor "explores" the systems the owner manages: a split hero with an interactive portrait surrounded by orbiting skill nodes. Selecting a node updates a dynamic left panel and the URL hash.

## Phases

### Phase 1 — Foundation (this deliverable)
- Vite + TS + Tailwind config, theme tokens.
- Type definitions and structured data files.
- Responsive static layout for every section.
- Hero content, professional summary, project cards + case-study modal, experience timeline, skills, process, resume, contact.

### Phase 2 — Interactivity
- Skill node selection drives the left content panel.
- URL hash sync (`#sql`, `#erp`, `#network`, `#hardware`, `#software`, `#projects`, `#resume`).
- Full keyboard accessibility, focus states, focus-trapped modal.

### Phase 3 — Motion & 2.5D portrait
- Cursor-follow parallax, breathing, moving light, particles.
- SVG connection lines between active node and portrait.
- Choreographed intro (≤2.5s), `prefers-reduced-motion` fallbacks.

### Phase 4 — Optional 3D + performance
- Lazy R3F avatar behind a WebGL/GLB check; 2.5D fallback is the default.
- Pause animations when tab hidden, limited particle counts, code-split heavy pieces.

### Phase 5 — Audits
- Accessibility, performance, content validation, production build.

## Component map
`App` → `HeroSection` (`SkillOrbit` → `SkillNode`, `InteractivePortrait`, `SkillContentPanel`) → `SummarySection` → `ProjectsSection` (`ProjectCard`, `ProjectCaseStudy`) → `ExperienceSection` → `SkillsSection` → `ProcessSection` → `ResumeSection` → `ContactSection`.

## State
- `activeSkillId` lifted to `App`, synced with `window.location.hash` via `useHashSkill`.
- `useReducedMotion` (Motion) gates continuous animation.
- `usePrefersWebGL` decides 3D vs 2.5D portrait.

## Definition of done
`npm run build` passes with no TS errors; responsive at 360/768/1280; keyboard operable; reduced-motion honored; content editable from `src/data`.
