import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { profile } from '@/data/profile';
import { usePageVisible } from '@/hooks/usePageVisible';
import { useLanguage } from '@/i18n/LanguageProvider';
import { hexToRgba } from '@/lib/color';

interface InteractivePortraitProps {
  /** Angle (deg) of the active node, so the portrait leans slightly toward it. */
  leanAngle: number;
  /** Active skill accent — tints the aura so the centre matches the selected node. */
  accent?: string;
  revealed: boolean;
}

/**
 * 2.5D parallax portrait — the safe production fallback (no WebGL needed). It is the
 * focal centre: layered rings + an accent-tinted aura, plus cursor-follow tilt and a
 * soft breathing motion. All continuous motion is disabled under prefers-reduced-motion
 * or a hidden tab.
 */
export function InteractivePortrait({
  leanAngle,
  accent = '#5b5fb0',
  revealed,
}: InteractivePortraitProps) {
  const reduce = useReducedMotion();
  const visible = usePageVisible();
  const { t } = useLanguage();
  const animate = !reduce && visible;
  const wrapRef = useRef<HTMLDivElement>(null);

  // Pointer position → spring-smoothed tilt.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  // Slight lean toward the active node.
  const leanX = useSpring(Math.cos((leanAngle * Math.PI) / 180) * 6, {
    stiffness: 60,
    damping: 20,
  });
  const leanY = useSpring(Math.sin((leanAngle * Math.PI) / 180) * 6, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    leanX.set(animate ? Math.cos((leanAngle * Math.PI) / 180) * 8 : 0);
    leanY.set(animate ? Math.sin((leanAngle * Math.PI) / 180) * 8 : 0);
  }, [leanAngle, animate, leanX, leanY]);

  useEffect(() => {
    if (!animate) {
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
  }, [animate, px, py]);

  return (
    <motion.div
      ref={wrapRef}
      className="relative mx-auto aspect-[4/5] w-full max-w-[380px]"
      style={{ perspective: 1000 }}
      initial={false}
    >
      {/* concentric depth rings behind the portrait (decorative) */}
      <div className="pointer-events-none absolute inset-0 -z-20 flex items-center justify-center" aria-hidden>
        <motion.div
          className="absolute rounded-full border"
          style={{ width: '132%', height: '118%', borderColor: hexToRgba(accent, 0.16) }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.15 }}
        />
        <motion.div
          className="absolute rounded-full border"
          style={{ width: '116%', height: '106%', borderColor: hexToRgba(accent, 0.24) }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.25 }}
        />
      </div>

      {/* accent-tinted aura that drifts with the lean — re-tints as the selection changes */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-[2.5rem] blur-3xl"
        style={{ x: leanX, y: leanY }}
        animate={{
          background: `radial-gradient(60% 55% at 44% 36%, ${hexToRgba(accent, 0.34)}, transparent 72%)`,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX: animate ? rx : 0,
          rotateY: animate ? ry : 0,
          transformStyle: 'preserve-3d',
        }}
        animate={
          animate
            ? { y: [0, -8, 0] }
            : { y: 0 }
        }
        transition={
          animate
            ? { duration: 6, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0 }
        }
      >
        {/* soft frame ring */}
        <motion.div
          className="absolute -inset-2 rounded-[2rem] border border-[color:var(--primary-soft)] bg-surface/40"
          style={{ transform: 'translateZ(24px)' }}
        />

        {/* portrait */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card"
          style={{ transform: 'translateZ(10px)' }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={
            revealed
              ? reduce
                ? { opacity: 1 }
                : { opacity: 1, clipPath: 'inset(0 0 0% 0)' }
              : {}
          }
          transition={{ duration: reduce ? 0.3 : 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <img
            src={profile.portraitSrc}
            alt={t(profile.portraitAlt)}
            width={380}
            height={475}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* gentle top highlight — soft, not shiny */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.14), transparent 34%)',
            }}
          />
        </motion.div>

        {/* slow, soft pastel light — normal blend, very low contrast */}
        {animate && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[1.75rem]"
            style={{ transform: 'translateZ(20px)' }}
            animate={{
              background: [
                'radial-gradient(42% 42% at 26% 22%, rgba(122,114,196,0.16), transparent 62%)',
                'radial-gradient(42% 42% at 74% 62%, rgba(224,170,150,0.15), transparent 62%)',
                'radial-gradient(42% 42% at 30% 80%, rgba(120,178,150,0.14), transparent 62%)',
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
