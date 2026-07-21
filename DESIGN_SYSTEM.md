# Design System — Soft Pastel · Calm, Elegant, Premium

A light, airy aesthetic: warm ivory canvas, muted pastel accents, gentle depth from soft shadows
(no glow, minimal glass). Professional and trustworthy, tuned for an IT job application.

## Color tokens (`src/styles/theme.css`, exposed to Tailwind)
| Token | Value | Use |
|---|---|---|
| `--background` | `#faf6f0` | Warm ivory page base |
| `--surface` | `#ffffff` | Cards / panels |
| `--surface-2` | `#f4eee6` | Raised / hover (warm) |
| `--primary` | `#7a72c4` | Dusty-lavender accent (graphics, tints, active rings) |
| `--primary-strong` | `#6258ac` | Readable lavender for **text/links** on light |
| `--secondary` | `#5e88b0` | Powder blue (secondary accent) |
| `--text` | `#35313b` | Charcoal — body text **and** primary buttons |
| `--muted` | `#7c7783` | Secondary text, labels |
| `--success` | `#5fa183` | Muted sage (positive) |
| `--border` | `rgba(53,49,59,.10)` | Gentle hairline |
| `--wash-*` | lavender / peach / mint | Soft background washes |

**Accent rule:** use color sparingly. Pastels are for tints, icons and active states; strong CTAs
are charcoal (`bg-text text-background`). Text-weight accents use `--primary-strong` (≥4.5:1),
never `--primary` (that tone is for graphics/large only).

## Visual hierarchy (three levels)
The design enforces three clearly different tiers so the page is easy to scan:

| Level | Elements | Treatment |
|---|---|---|
| **Primary** | Hero name/tagline, the one dominant CTA (Explore Projects), the **selected** skill (node + panel) | Largest type, strongest contrast (charcoal / accent fill), elevation + scale, holds still |
| **Secondary** | Portrait, nav, project cards, secondary CTAs, section headers | Medium contrast, white surfaces + hairline borders, hover lift |
| **Tertiary** | **Unselected** skill nodes, tech chips, metadata, background washes/grid | Neutral gray, no accent, minimal weight, gentle float |

**One accent at a time.** Accent color appears only on the *selected* node/panel — unselected
nodes are neutral (white surface, gray icon). Tech chips are neutral gray. Background is two very
faint washes. This keeps at most one pastel accent competing for attention.

### Per-node pastel accents (`src/data/skills.ts` → `accent`)
Each skill has its own soft accent, but it is shown **only when that node is selected** (surface @
14%, accent icon + border + soft accent shadow + a small status dot). Palette: lavender `#7a72c4` ·
powder blue `#5e88b0` · mint `#5fa183` · sage `#7e9a64` · peach `#c8825f` · blush `#c06a87` ·
slate `#6b7280`. Helper: `hexToRgba` in `src/lib/color.ts`.

## Surfaces & depth
Surfaces separate via **tonal contrast + a clear hairline border**, not heavy shadow.
- **`.card`**: white `--surface` on the neutral page + 1px `--border-strong` + light `shadow-card`.
- **`.card-interactive`**: rest state looks clickable; hover lifts 3px, border → `--primary-strong`,
  `shadow-lift`. Pair with `.stretched` on the card's single control to make the whole card a hit-area.
- **`.glass`**: nav only — 88% surface + 8px blur (barely glassy, no heavy glassmorphism).
- **Shadows** (`tailwind.config.js`): `soft` (hairline), `card`, `lift`. No glow.
- **Radius**: `rounded-panel = 1rem`; buttons/nodes `rounded-xl`/`rounded-2xl`.

## Buttons
- **primary**: charcoal `bg-text` + ivory text, `shadow-soft`, `hover:opacity-90`, `active:translate-y-px` (tactile).
- **secondary**: white surface + hairline border + `shadow-soft`, lifts slightly on hover.
- **ghost**: muted text, soft `surface-2` hover.
- Hover states are understated (subtle lift / opacity), never flashy.

## Background
Ivory base + very faint charcoal grid (`.tech-grid`, ~3.5% lines) + three large, slow-drifting
pastel washes (lavender / peach / mint) at low opacity. Calm, uncluttered — no hard lines, no
scattered floating dots. Drift pauses on hidden tab and under reduced-motion.

## Portrait (2.5D)
Refined and soft, not shiny plastic: white framed card with `shadow-card`, a soft pastel halo that
drifts with the lean, a gentle top highlight (no scan-lines, no screen-blend cyber glow), a slow
low-contrast pastel light, thin accent corner ticks, and a few faint particles. Breathing +
cursor-follow tilt retained; all continuous motion respects reduced-motion and tab visibility.

## Typography
Inter/system stack. Headings tight tracking, charcoal. Uppercase eyebrows in `--muted`. Body
`1rem/1.6`, min 15px; never below 12px for labels. Strong hierarchy, generous whitespace.

## Do / Avoid
- **Do:** airy layout, one accent per view, soft depth, high readability, gentle contrast cards.
- **Avoid:** neon blue/purple, heavy glow, excessive gradients/glassmorphism, oversaturated color,
  cluttered floating elements, harsh borders.
