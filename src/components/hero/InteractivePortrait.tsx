import { useEffect, useRef, type CSSProperties } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { profile } from '@/data/profile';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePageVisible } from '@/hooks/usePageVisible';
import { useLanguage } from '@/i18n/LanguageProvider';
import { hexToRgba } from '@/lib/color';

interface InteractivePortraitProps {
  /** Angle (deg) of the active node, so the midground leans slightly toward it. */
  leanAngle: number;
  /** Active skill accent — tints the aura so the centre matches the selected node. */
  accent?: string;
  revealed: boolean;
}

/** Spring shared by every parallax layer — soft, no overshoot. */
const LAYER_SPRING = { stiffness: 90, damping: 20, mass: 0.5 };

/**
 * Per-layer depth, in px of maximum travel from centre. Deliberately small: the
 * composition should feel like it breathes, not like it slides.
 */
const DEPTH = {
  bg: 3, // far background — moves the least
  room: 6, // reconstructed room
  atmos: 7, // blurred atmosphere, behind the subject
  hud: 9, // technical midground
  portrait: 4, // main portrait — kept visually stable
  fx: 13, // CSS foreground effects — moves the most
} as const;

/** Maps the normalised pointer position (−0.5…0.5) to one layer's travel. */
function useDepthLayer(px: MotionValue<number>, py: MotionValue<number>, travel: number) {
  const x = useSpring(useTransform(px, [-0.5, 0.5], [travel, -travel]), LAYER_SPRING);
  const y = useSpring(useTransform(py, [-0.5, 0.5], [travel, -travel]), LAYER_SPRING);
  return { x, y };
}

/**
 * 2.5D parallax portrait — the focal centre of the hero, and the safe production
 * path (no WebGL needed). A fixed square stage holds six layers, back to front:
 * bg → room → blurred atmosphere → HUD → sharp portrait → edge-only foreground.
 * The stage geometry never changes; selecting a skill only re-tints the aura and
 * nudges the HUD.
 *
 * Layer 5 is sharp by contract: no filter, no translucent fill and no Z-translated
 * ancestor may sit above it. See HeroSection.css for the full rule.
 *
 * All continuous motion is disabled under prefers-reduced-motion, on a hidden tab,
 * and on touch devices (where there is no cursor to follow).
 */
export function InteractivePortrait({
  leanAngle,
  accent = '#5b5fb0',
  revealed,
}: InteractivePortraitProps) {
  const reduce = useReducedMotion();
  const visible = usePageVisible();
  // No cursor to follow on touch — skip the pointer listener entirely.
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const { t } = useLanguage();
  const { heroLayers } = profile;
  const animate = !reduce && visible;
  const trackPointer = animate && finePointer;
  const wrapRef = useRef<HTMLDivElement>(null);

  // Pointer position, normalised to −0.5…0.5 over the portrait box.
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // Subtle cursor tilt for the framed block (rotation only — no displacement).
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 });

  // Depth stack — one spring pair per layer.
  const bg = useDepthLayer(px, py, DEPTH.bg);
  const room = useDepthLayer(px, py, DEPTH.room);
  const atmos = useDepthLayer(px, py, DEPTH.atmos);
  const hud = useDepthLayer(px, py, DEPTH.hud);
  const portrait = useDepthLayer(px, py, DEPTH.portrait);
  const fx = useDepthLayer(px, py, DEPTH.fx);

  // Slight lean of the midground toward the active node (internal layers only —
  // the outer container and the caption below it never move).
  const leanX = useSpring(0, { stiffness: 60, damping: 20 });
  const leanY = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const rad = (leanAngle * Math.PI) / 180;
    leanX.set(animate ? Math.cos(rad) * 5 : 0);
    leanY.set(animate ? Math.sin(rad) * 5 : 0);
  }, [leanAngle, animate, leanX, leanY]);

  useEffect(() => {
    if (!trackPointer) {
      px.set(0);
      py.set(0);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      // Skip when hidden/unlaid-out (0×0) to avoid NaN in the parallax math.
      if (rect.width === 0 || rect.height === 0) return;
      px.set((e.clientX - rect.left) / rect.width - 0.5);
      py.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [trackPointer, px, py]);

  return (
    <div
      ref={wrapRef}
      className="hero-portrait"
      style={{ perspective: 1000, '--hero-accent': accent } as CSSProperties}
    >
      {/* concentric depth rings behind the portrait (decorative) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 flex items-center justify-center"
        aria-hidden
      >
        <motion.div
          className="absolute rounded-full border"
          style={{ width: '132%', height: '132%', borderColor: hexToRgba(accent, 0.16) }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.15 }}
        />
        <motion.div
          className="absolute rounded-full border"
          style={{ width: '114%', height: '114%', borderColor: hexToRgba(accent, 0.24) }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.25 }}
        />
      </div>

      {/* accent aura that drifts with the lean — re-tints as the selection changes */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-[2.5rem] blur-3xl"
        style={{ x: leanX, y: leanY }}
        animate={{
          background: `radial-gradient(58% 54% at 46% 38%, ${hexToRgba(accent, 0.5)}, transparent 72%)`,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        aria-hidden
      />

      <motion.div
        className="hero-portrait__tilt"
        style={{ rotateX: trackPointer ? rx : 0, rotateY: trackPointer ? ry : 0 }}
      >
        {/* Structured system frame ring — a rim around the stage, never over it.
            It sits BEHIND the stage (negative Z) and carries no fill and no
            backdrop-filter: at translateZ(24px) with a `bg-surface/30
            backdrop-blur-sm`, this element painted in front of the whole stage
            and was what made the portrait look blurred and veiled. */}
        <motion.div
          className="absolute -inset-2 rounded-[2rem] border"
          style={{ transform: 'translateZ(-8px)' }}
          animate={{
            borderColor: hexToRgba(accent, 0.42),
            boxShadow: `0 0 0 1px ${hexToRgba(accent, 0.12)}, 0 20px 60px -30px ${hexToRgba(accent, 0.6)}`,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          aria-hidden
        />
        {/* ── PARALLAX STAGE — fixed square box, clipped ──────────────────── */}
        <motion.div
          className="hero-portrait__stage"
          initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0 round 1.75rem)' }}
          animate={
            revealed
              ? reduce
                ? { opacity: 1 }
                : { opacity: 1, clipPath: 'inset(0 0 0% 0 round 1.75rem)' }
              : {}
          }
          transition={{ duration: reduce ? 0.3 : 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* 1 — far background */}
          <motion.div className="hero-layer hero-layer--bg" style={bg} aria-hidden>
            <img src={heroLayers.background} alt="" loading="eager" decoding="async" />
          </motion.div>

          {/* 2 — reconstructed room */}
          <motion.div className="hero-layer hero-layer--room" style={room} aria-hidden>
            <img src={heroLayers.room} alt="" loading="eager" decoding="async" />
          </motion.div>

          {/* 3 — atmosphere: accent wash, soft glow and the blurred shapes.
              Every blur in the stack lives here, behind the HUD and the
              portrait, so none of it can soften the face. */}
          <motion.div className="hero-atmos" style={atmos} aria-hidden>
            <div className="hero-atmos__wash" />
            <div className="hero-atmos__glow" />
            <div className="hero-atmos__shape hero-atmos__shape--a" />
            <div className="hero-atmos__shape hero-atmos__shape--b" />
          </motion.div>

          {/* 4 — technical HUD midground; leans toward the active node */}
          <motion.div className="hero-layer hero-layer--hud" style={hud} aria-hidden>
            <motion.div className="h-full w-full" style={{ x: leanX, y: leanY }}>
              <img src={heroLayers.hud} alt="" loading="lazy" decoding="async" />
            </motion.div>
          </motion.div>

          {/* contact shadow — travels with the portrait, but as its own layer
              underneath it, so the blur never touches the portrait's pixels */}
          <motion.div className="hero-layer hero-layer--shadow" style={portrait} aria-hidden>
            <div />
          </motion.div>

          {/* 5 — main portrait (transparent cutout). Nothing above this layer
              may carry a filter, a fill, or an unmasked overlay. */}
          <motion.div className="hero-layer hero-layer--portrait" style={portrait}>
            <img
              src={profile.portraitSrc}
              alt={t(profile.portraitAlt)}
              width={600}
              height={600}
              loading="eager"
              decoding="async"
            />
          </motion.div>

          {/* 6 — CSS foreground: edge-only bokeh (radially masked clear of the
              face) plus the frame vignette */}
          <motion.div className="hero-fx" style={fx} aria-hidden>
            <div className="hero-fx__bokeh hero-fx__bokeh--far" />
            <div className="hero-fx__bokeh hero-fx__bokeh--near" />
          </motion.div>

          <div className="hero-fx__vignette" aria-hidden />
        </motion.div>

        {/* corner brackets — abstract technical framing. Placed after the stage
            and left at Z 0: coplanar siblings paint in DOM order, so they sit on
            the frame edge without introducing a perspective scale. */}
        {['left-1 top-1', 'right-1 top-1', 'left-1 bottom-1', 'right-1 bottom-1'].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} h-4 w-4`}
            style={{
              borderColor: hexToRgba(accent, 0.7),
              borderTopWidth: pos.includes('top') ? 2 : 0,
              borderBottomWidth: pos.includes('bottom') ? 2 : 0,
              borderLeftWidth: pos.includes('left') ? 2 : 0,
              borderRightWidth: pos.includes('right') ? 2 : 0,
              borderTopLeftRadius: pos === 'left-1 top-1' ? 8 : 0,
              borderTopRightRadius: pos === 'right-1 top-1' ? 8 : 0,
              borderBottomLeftRadius: pos === 'left-1 bottom-1' ? 8 : 0,
              borderBottomRightRadius: pos === 'right-1 bottom-1' ? 8 : 0,
            }}
            aria-hidden
          />
        ))}
      </motion.div>
    </div>
  );
}
