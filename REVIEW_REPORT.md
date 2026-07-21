# Portfolio Review Report

Reviewed 2026-07-21 from four perspectives: **hiring manager**, **senior UI/UX designer**,
**frontend performance engineer**, and **accessibility reviewer**. Scope is the current
implementation in `src/`. This report inspects and prioritizes; only Critical and High-priority
items are fixed in this pass (see the last section for what changed).

## Summary of perspectives

**Hiring manager.** Professional identity is clear within ~10 seconds: name, role, one-line value
proposition, location, and `ERP · SQL · Network · Internal Systems` chips are all above the fold.
Projects are convincing — each has problem → responsibility → solution → qualitative result, plus a
full case study. The main risk is not design but **unreplaced placeholder data** (fake email/GitHub/
LinkedIn, `PLACEHOLDER` experience rows) that would undermine credibility if deployed as-is.

**UI/UX designer.** Hierarchy, spacing and restraint are good; the control-room concept reads as
technical, not gimmicky. Motion is subtle and respects reduced-motion. Minor: the hero left column
is tall (buttons + dynamic panel), and heading levels skip from `h1` to `h3` inside the hero.

**Performance engineer.** Two real issues: the interactive portrait is mounted twice (desktop +
mobile) so hidden copies still animate and listen to the window; and the animated background keeps
running when the tab is hidden. Scroll-spy also forces synchronous layout on every scroll event.

**Accessibility reviewer.** Strong baseline: semantic landmarks, skip link, focus-trapped modal,
keyboard-operable nodes, `aria-pressed`, a polite live region, reduced-motion support, meaningful
alt text. Gaps are minor: heading-order skip, and a tooltip whose text folds into the button's
accessible name.

---

## Critical issues

> None are code defects that break the running site. The one Critical item is content, and it
> cannot be fixed by me without fabricating personal data (explicitly out of bounds).

- **C1 — Placeholder identity/contact data is still in the build.** `src/data/profile.ts` ships a
  fake email (`palungrut.example@email.com`), `github.com/your-handle`, `linkedin.com/in/your-handle`,
  and every `experience.ts` row is labeled `PLACEHOLDER`. For a job-application site this is worse
  than omission — a hiring manager sees broken/fake contact routes. **Blocked on real content from
  the owner** (tracked in `CONTENT_REQUIRED.md`). Resume PDF and portrait are likewise not yet
  provided, so the download 404s and the portrait shows the placeholder SVG.

## High-priority improvements

- **H1 — Interactive portrait is mounted twice; hidden copy wastes work and computes NaN.**
  `HeroSection` renders `<SkillOrbit>` (which contains an `InteractivePortrait`) for desktop AND a
  second `InteractivePortrait` for mobile, toggled only by CSS (`hidden lg:block` / `lg:hidden`).
  Both instances stay mounted, so on any viewport one hidden portrait still runs its breathing/
  particle animation loops and adds a **global `pointermove` listener**. On the hidden copy,
  `getBoundingClientRect()` returns 0×0, so the parallax math divides by zero and pushes `NaN` into
  motion values. Fix: render only the portrait for the active breakpoint via a `useMediaQuery` hook,
  and guard the pointer math against a zero-size rect.
  Files: `src/components/hero/HeroSection.tsx`, `src/components/hero/InteractivePortrait.tsx`,
  `src/hooks/useMediaQuery.ts` (new).

- **H2 — Background animation ignores tab visibility.** The brief explicitly requires stopping
  animation when the tab is hidden. `InteractivePortrait` already uses `usePageVisible`, but
  `Background` only checks reduced-motion, so its pulsing network nodes keep animating (and keep the
  compositor busy / drain battery) on a backgrounded tab. Fix: gate the animated nodes on
  `usePageVisible`.
  Files: `src/components/ui/Background.tsx`.

## Medium-priority improvements

- **M1 — Scroll-spy forces layout thrash.** `useScrollSpy` calls `getElementById` +
  `getBoundingClientRect` for all sections on every `scroll` event (no rAF/throttle), a classic
  forced-synchronous-layout smell on mid-range mobile. Prefer `IntersectionObserver`.
  Files: `src/hooks/useScrollSpy.ts`, `src/components/ui/NavBar.tsx`.
- **M2 — Heading order skips a level.** Hero has `h1` (name) then `SkillContentPanel` uses `h3`
  ("Active system" title) with no intervening `h2`. Promote the panel title to `h2` (or a non-
  heading styled element) for a clean screen-reader outline.
  Files: `src/components/hero/SkillContentPanel.tsx`.
- **M3 — Skill-node tooltip folds into the button name.** The `role="tooltip"` span lives inside the
  node `<button>`, so the accessible name becomes "label + tagline". It's usable but verbose; expose
  the tagline via `aria-describedby` and mark the visual tooltip `aria-hidden`.
  Files: `src/components/hero/SkillNode.tsx`.
- **M4 — Language flash on load.** `index.html` hard-codes `lang="en"`; a stored Thai preference is
  only applied after React mounts. Consider a tiny inline script to set `<html lang>` pre-hydration.
  Files: `index.html`.

## Nice-to-have ideas

- **N1 — Social/share metadata & favicon.** No Open Graph/Twitter tags or favicon; link previews
  matter when a portfolio URL is pasted into email/LinkedIn. Files: `index.html`, `public/`.
- **N2 — Anonymized project screenshots.** Case studies are text-only; one anonymized image per
  project would raise the evidence bar. Files: `public/images/projects/`, `src/data/projects.ts`.
- **N3 — `object` PDF fallback polish.** Add a `title` on the preview `<object>` and a download link
  inside the fallback for maximum browser coverage. Files: `src/components/resume/ResumeSection.tsx`.
- **N4 — Reduce hero column height on desktop.** Consider moving the dynamic skill panel beside the
  orbit on very tall viewports to shorten the initial scroll. Files: `src/components/hero/*`.
- **N5 — Remove the unused `avatarModel` reference** until a real GLB exists, to avoid implying a
  missing asset. Files: `src/data/profile.ts`.

## Files affected (by fix)

| Item | Files |
|---|---|
| H1 | `src/hooks/useMediaQuery.ts` (new), `src/components/hero/HeroSection.tsx`, `src/components/hero/InteractivePortrait.tsx` |
| H2 | `src/components/ui/Background.tsx` |
| M1 | `src/hooks/useScrollSpy.ts` |
| M2 | `src/components/hero/SkillContentPanel.tsx` |
| M3 | `src/components/hero/SkillNode.tsx` |
| M4 / N1 | `index.html` |
| C1 / N2 / N5 | `src/data/*` (content — owner-supplied) |

## Recommended implementation order

1. **H1** — biggest correctness+perf win, removes a latent NaN and duplicate listeners.
2. **H2** — one-line-ish visibility gate, satisfies an explicit requirement.
3. **M1** — scroll-spy → IntersectionObserver (perf on low-end mobile).
4. **M2, M3** — accessibility polish (heading order, tooltip association).
5. **M4, N1** — head metadata (lang flash, OG tags, favicon).
6. **C1 / N2** — replace placeholder content with verified data (owner).

---

## Fixed in this pass (Critical + High)

- **H1** — Added `useMediaQuery`; `HeroSection` now renders a single `InteractivePortrait` for the
  active breakpoint instead of two CSS-toggled copies. Added a zero-size-rect guard in the pointer
  handler as defense-in-depth.
- **H2** — `Background` now gates its animated network nodes on `usePageVisible` (and reduced-motion),
  rendering static dots when the tab is hidden.
- **C1** — Not code-fixable without fabricating personal data; left as documented content work.
  No High/Critical code defects remain after H1–H2.
