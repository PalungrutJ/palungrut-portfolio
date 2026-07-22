# Design Refinement Plan — Professional Interactive Technology Portfolio

## Goal
Refine the current portfolio from a soft, pale, near-static pastel template into a
**confident, spatial, interactive** technology portfolio suitable for serious IT / ERP /
Application Support / Infrastructure / Internal System Developer roles — **without**
rebuilding it, and without swinging into cyberpunk/neon territory.

## Key finding from inspection
The original interactive concept is **still present in code** — nothing was removed:
- `SkillOrbit` (nodes around a focal portrait, SVG connection lines + travelling data pulse)
- `SkillNode` (rest / hover / selected tiers, floating drift)
- `InteractivePortrait` (2.5D parallax, cursor tilt, breathing, accent aura)
- `SkillContentPanel` (dynamic left panel that swaps on selection, live region)
- `MobileSkillSelector` (accessible grid fallback)
- Hooks: `useHashSkill` (URL hash sync), `usePageVisible`, `useReducedMotion`, `useMediaQuery`

The regression is **purely visual weight**: the theme became an all-light warm-ivory palette
with washed-out surfaces, faint borders and low-saturation accents, so the interaction reads
as decorative rather than as a professional system map.

Crucially, **every content section uses semantic CSS variables** (`--background`, `--surface`,
`--text`, `--border`, …) with essentially zero hardcoded colors. So the palette can be
re-based centrally in `theme.css` and cascade across the whole site with low risk.

## Current problems (from brief)
- Colors too pale/soft; low contrast; washed-out sections blending into background.
- Feels static; interaction not obviously interactive.
- Weak focus around the portrait; unclear portrait ↔ skills ↔ content relationship.
- No memorable first impression; reads like a corporate template.

## Chosen direction
Re-base the site onto a **dark navy foundation with controlled pastel accents** (the brief's
suggested palette), keeping warm off-white for high-contrast primary surfaces/CTAs. This:
- restores depth and spatial contrast (nodes/portrait pop against navy),
- keeps a controlled amount of pastel warmth as *accents*, not as the whole page,
- inherits automatically across all sections via the existing semantic tokens.

## Components affected
- `src/styles/theme.css` — full palette re-base (dark) — **core change**
- `src/styles/index.css` — scrollbar, tech-grid lines, `.glass`, selection, font tokens
- `index.html` — Space Grotesk / Inter / JetBrains Mono fonts, dark `theme-color`
- `tailwind.config.js` — `font-display`, shadow tuning for dark
- `src/components/ui/Background.tsx` — structured navy background (grid + depth layers + slow light)
- `src/data/skills.ts` — brighter dark-safe accents + new **Contact** node (8 nodes)
- `src/components/hero/SkillNode.tsx` — stronger rest/hover/selected contrast on dark
- `src/components/hero/SkillOrbit.tsx` — brighter lines, dim-unrelated on selection
- `src/components/hero/InteractivePortrait.tsx` — stronger frame/halo, fix white overlay for dark
- `src/components/hero/HeroSection.tsx` — "Select a capability to explore" hint, hierarchy
- `src/components/ui/SectionHeader.tsx` — heading weight/scale on `font-display`
- minor: `NavBar`, `Chip`, `Button` inherit tokens (spot checks only)

## Interactions to restore / strengthen (already wired — made *legible*)
- Nodes visible on load (already), now with clear rest affordance + accent identity on dark.
- Hover: lift toward viewer, +5% scale, accent border, tooltip, active connection line.
- Selected: accent fill, dominant scale, status dot, updates left panel, dims other nodes,
  re-tints portrait aura + lean, updates URL hash (via `useHashSkill`).
- Projects emphasized as the recommended first interaction.

## Color changes
Dark navy background (`#101827`) + elevated navy surfaces; light off-white text; desaturated
blue primary (`#5B7CFF`) with a lighter readable variant; muted violet secondary; cyan reserved
for interactive highlights; brighter per-skill accents tuned for navy; light hairline borders.

## Motion changes
No new library (reuse `motion`). Keep existing timings (hover 120–220ms, selection spring,
panel 320ms, reveal). Respect `prefers-reduced-motion` and tab visibility (already honored).
No constant orbiting of nodes (kept as slow organic float, per brief).

## Responsive changes
Preserve `MobileSkillSelector` identity; ensure node/panel contrast holds on the dark theme at
mobile sizes; portrait keeps subtle motion.

## Performance risks / mitigations
- Fonts: `display=swap` + preconnect; only needed weights.
- Background: CSS transforms/opacity only, few layers, paused when tab hidden (existing hook).
- No added particles beyond a couple of blurred depth layers near the portrait.

## Implementation order
1. Phase 1 — dark professional color system + contrast + typography (preserve content).
2. Phase 2 — node/accent strengthening + Contact node + dynamic panel legibility.
3. Phase 3 — portrait depth/frame + structured background atmosphere + connection lines.
4. Phase 4 — hero hint & hierarchy, section header typography, spot section polish.
5. Phase 5 — typecheck + production build; fix all errors; four-lens QA review.
