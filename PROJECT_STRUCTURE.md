# Project Structure

```
Portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json / tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── IMPLEMENTATION_PLAN.md / CONTENT_REQUIRED.md / DESIGN_SYSTEM.md / PROJECT_STRUCTURE.md
├── public/
│   ├── images/profile-placeholder.svg      # replace with .webp portrait
│   ├── images/projects/                     # anonymized screenshots
│   ├── models/                              # optional profile-avatar.glb
│   └── resume/                              # place resume PDF here
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── hero/ HeroSection, InteractivePortrait, SkillOrbit, SkillNode, SkillContentPanel, IntroSequence
    │   ├── projects/ ProjectsSection, ProjectCard, ProjectCaseStudy
    │   ├── experience/ ExperienceSection
    │   ├── skills/ SkillsSection
    │   ├── process/ ProcessSection
    │   ├── summary/ SummarySection
    │   ├── resume/ ResumeSection
    │   ├── contact/ ContactSection
    │   └── ui/ SectionHeader, GlassPanel, Button, Modal, Background, NavBar, Footer, Chip
    ├── data/ profile.ts, skills.ts, projects.ts, experience.ts, process.ts, nav.ts
    ├── hooks/ useHashSkill.ts, usePrefersWebGL.ts, useScrollSpy.ts
    ├── types/ index.ts
    ├── lib/ icons.ts
    └── styles/ theme.css, index.css
```

## Where to edit content
- **Identity / links / portrait path:** `src/data/profile.ts`
- **Skill nodes & panels:** `src/data/skills.ts`
- **Projects & case studies:** `src/data/projects.ts`
- **Timeline:** `src/data/experience.ts`
- **Working process:** `src/data/process.ts`

## Where to replace assets
- **Portrait:** `public/images/profile-placeholder.*` → update `profile.portraitSrc`.
- **Resume PDF:** `public/resume/…​.pdf` → update `profile.resumeUrl`.
- **3D avatar (optional):** `public/models/profile-avatar.glb` → update `profile.avatarModel`.
