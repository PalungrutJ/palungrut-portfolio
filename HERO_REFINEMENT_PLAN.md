# Hero Refinement Plan

Scope: **hero section and its directly-related components only.** No changes to Projects,
Experience, Skills, Resume or Contact sections. Goal: bring back interactivity, depth and a
memorable "system" feel that the last (ultra-minimal) pass flattened — without losing the
professional, job-application tone.

## Files in scope
- `src/components/hero/HeroSection.tsx`
- `src/components/hero/SkillOrbit.tsx`
- `src/components/hero/SkillNode.tsx`
- `src/components/hero/InteractivePortrait.tsx`
- `src/components/hero/SkillContentPanel.tsx`
- `src/components/hero/MobileSkillSelector.tsx`
- `src/data/skills.ts` (accent palette only)
- `src/styles/theme.css` (one aura token; no global restructuring)

## Current state (inspected)
- Nodes are **fully neutral** until selected → the orbit reads as static; little sense of a "system".
- Connection lines were reduced to **only the selected** node → the network/constellation feel is gone.
- Portrait is centered but visually **passive** (flat frame, one soft light) — not clearly the focal point.
- Accents are candy-ish (peach/blush) — reads slightly informal.
- Intro is a simple stagger; nodes just fade/scale in place.
- Selected state is good; **hover/rest** states are weak (no identity, thin feedback).

## Proposed changes

### 1. Restore the skill-node "system" (SkillNode)
- **Rest:** white surface, **accent-colored icon** (each node keeps its identity), neutral hairline
  border, soft depth shadow. Reads as an interactive control, not a flat chip.
- **Hover:** lift (−4px), accent-tinted border + faint accent wash, icon scales, shadow grows —
  movement + border + color together (not color-only).
- **Selected:** accent fill, 2px accent border, `scale ~1.1`, accent glow shadow, status dot, bold
  label, raised above siblings. Unmistakably different from hover.
- Three visually distinct tiers preserved (tertiary rest → interactive hover → primary selected).

### 2. Restore connection lines (SkillOrbit)
- Draw a faint hairline from the portrait centre to **every** node (constellation/network).
- The **active** line is accent-colored, thicker, with a small travelling "data pulse" dot
  (Web3 data-flow cue). Endpoint dots on every line for a graph-like read.
- Lines **draw on** during the intro (`pathLength`), after the nodes appear.
- Reduced-motion: lines appear via opacity only; no pulse.

### 3. Make the portrait the visual centre (InteractivePortrait)
- Add layered **concentric rings** + a soft **radial aura** behind the portrait.
- The aura + active connection line + selected node all share the **active skill's accent**, so
  selecting a node re-tints the centre → cohesive and memorable.
- Slightly larger portrait; keep 3D tilt, breathing, soft light. New optional `accent` prop.

### 4. Restore spatial / Web3 depth (SkillOrbit)
- Convert the flat guide ring into a **slow-rotating dashed ring** (very slow, decorative,
  `aria-hidden`, paused under reduced-motion / hidden tab).
- Layered translucent depth behind nodes (formal, restrained — not heavy glass).

### 5. Strengthen contrast + formalize the palette (skills.ts)
- Re-tune node accents to a **cooler, more corporate** set (indigo, steel blue, teal, slate-green,
  bronze, muted plum, graphite) — deeper and less candy, better contrast on white.
- Keeps "one dominant accent at a time" for fills; rest icons use the accent at a readable weight.

### 6. Improve the opening animation (HeroSection / SkillOrbit / InteractivePortrait)
- Sequence (≤ ~2.4s): grid/aura fade → name/title from left → portrait scale+clip reveal → rings
  expand outward → nodes **radiate** from centre with stagger → connection lines draw on →
  selected (Projects) line/pulse settles.
- Reduced-motion: everything resolves via a quick opacity fade, no travel/scale/draw.

### 7. Content panel polish (SkillContentPanel)
- Add a subtle **accent left-edge** and stronger active-skill heading so the panel visibly belongs
  to the selected node. No structural change.

## Preserved by design
- **Responsive:** desktop orbit vs mobile grid selector unchanged; only one `InteractivePortrait`
  mounts per breakpoint. Mobile keeps the accessible 2-column selector (no orbit interaction).
- **Accessibility:** nodes stay real `<button>`s with `aria-pressed`, visible focus rings, tooltip
  text in the DOM, polite live region on skill change; all new visuals are `aria-hidden`.
- **Performance:** decorative motion gated on `prefers-reduced-motion` **and** tab visibility;
  SVG lines + one pulse dot + transform-only rotation (cheap); no new dependencies.

## Verification after implementation
Production build · desktop + mobile layout · keyboard interaction · reduced-motion · list modified files.
