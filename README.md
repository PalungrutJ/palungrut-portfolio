# Palungrut Jankong — Interactive Portfolio

An "Interactive IT Control Room" portfolio for **Palungrut Jankong — IT Support &
Internal System Developer**. Visitors explore the systems, skills and projects the owner
manages via an interactive portrait surrounded by selectable skill nodes.

Built with **React + TypeScript + Vite + Tailwind CSS + Motion + Lucide**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

If `npm install` reports blocked install scripts, approve esbuild once:

```bash
npm approve-scripts esbuild
```

Other scripts:

```bash
npm run build      # typecheck (tsc --noEmit) + production build to dist/
npm run preview    # serve the production build
npm run typecheck  # types only
```

## Languages (English / Thai)

The site is bilingual. A persisted **EN / ไทย** toggle sits in the nav bar; the choice is
saved to `localStorage` and the initial language follows the browser (`th` → Thai, otherwise
English). `<html lang>` updates with the selection.

Every human-readable string is a `{ en, th }` pair (type `Localized` in `src/types`), resolved
at render time by the `t()` helper from `useLanguage()` (`src/i18n/LanguageProvider.tsx`).

- **Content strings** live with the content in `src/data/*` — edit `en` and `th` side by side.
- **UI-chrome strings** (buttons, section headers, labels) live in `src/i18n/ui.ts`.

To add a third language: add its code to the `Lang` union in `src/types/index.ts`, add the key to
every `Localized` object (a quick find for `en:` shows them all), and add a button to
`src/components/ui/LanguageToggle.tsx`.

> The Thai copy is a solid first pass — have a native reviewer refine tone before publishing.
> Proper names are intentionally kept in Latin script in both languages.

## Where to edit content

All content lives in `src/data/` — no need to touch UI components. Each field is bilingual
(`{ en, th }`):

| File | Contents |
|---|---|
| `src/data/profile.ts` | Name, role, tagline, location, **contact links**, portrait/resume paths, summary |
| `src/data/skills.ts` | The 7 skill nodes and their content panels (orbit angles too) |
| `src/data/projects.ts` | Project cards + full case studies |
| `src/data/experience.ts` | Timeline (dates/companies are placeholders) |
| `src/data/process.ts` | Working-process steps + technical-skill groups |
| `src/data/nav.ts` | Nav menu items |
| `src/i18n/ui.ts` | Buttons, section headers and other UI-chrome labels |

## Replace the portrait

1. Add a transparent head-and-shoulders image at `public/images/profile-placeholder.webp`
   (recommended ~1200×1500, WEBP or PNG).
2. Update `profile.portraitSrc` in `src/data/profile.ts` to that path.

The portrait uses a 2.5D parallax component (`InteractivePortrait`) that works without WebGL —
the safe production fallback. A 3D GLB avatar is a documented future option (drop a file at
`public/models/profile-avatar.glb` and add an R3F component); it is intentionally **not** bundled
now so the site stays fast.

## Add the resume PDF

1. Put your PDF at `public/resume/palungrut-jankong-resume.pdf`.
2. If you use a different filename, update `profile.resumeUrl` in `src/data/profile.ts`.

The Resume section previews it inline and offers download + open-in-new-tab.

## Before publishing

See **CONTENT_REQUIRED.md** for every placeholder to replace, and never publish confidential
data (internal IPs, credentials, production DB names, real employee data, proprietary code).
Use anonymized screenshots only.

## Manual test checklist

**Language**
- [ ] EN / ไทย toggle switches all visible copy (nav, hero, sections, case-study modal).
- [ ] Reloading keeps the last-chosen language (localStorage) and `<html lang>` matches.
- [ ] First visit in a Thai browser defaults to Thai.

**Functionality**
- [ ] Clicking a skill node updates the left panel and the URL hash (`#sql`, `#erp`, …).
- [ ] Loading a URL with a hash (e.g. `/#network`) opens that skill selected.
- [ ] "Projects" / "Resume" nodes scroll to their sections.
- [ ] "View case study" opens the modal; each project shows Problem → Lessons Learned.
- [ ] Resume download and open-in-new-tab work once the PDF is added.
- [ ] Nav links and mobile menu scroll to the right sections; scroll-spy highlights active.

**Keyboard & accessibility**
- [ ] Tab reaches every node/button; focus rings are visible.
- [ ] Skill nodes are real buttons with `aria-pressed`.
- [ ] Modal traps focus, closes with Escape, and returns focus to the trigger.
- [ ] "Skip to content" link appears on first Tab.
- [ ] Portrait has meaningful alt text.

**Responsive**
- [ ] 360px: intro first, portrait second, 2-column skill grid, sticky Resume/Contact bar.
- [ ] 768px: layout reflows cleanly, no horizontal scroll.
- [ ] 1280px: split hero with orbit + connection lines.

**Motion**
- [ ] With OS "reduce motion" on: no floating/cursor-follow/particles; content still works.
- [ ] Intro sequence completes within ~2.5s.
- [ ] Switching browser tabs pauses continuous animation.

## Project docs
- `IMPLEMENTATION_PLAN.md` · `DESIGN_SYSTEM.md` · `PROJECT_STRUCTURE.md` · `CONTENT_REQUIRED.md`
