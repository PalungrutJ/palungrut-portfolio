import { motion, useReducedMotion } from 'motion/react';
import { usePageVisible } from '@/hooks/usePageVisible';

/**
 * Light, airy backdrop: warm ivory base, a faint technical grid, and a few very soft
 * pastel washes that drift slowly. Calm and uncluttered — decorative only.
 */
export function Background() {
  const reduce = useReducedMotion();
  const visible = usePageVisible();
  const animate = !reduce && visible;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* faint structural grid */}
      <motion.div
        className="absolute inset-0 tech-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.8 }}
      />

      {/* two faint washes only — kept to the top corners, well away from content */}
      <motion.div
        className="absolute -left-40 -top-48 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--wash-lavender), transparent 70%)' }}
        animate={animate ? { x: [0, 20, 0], y: [0, 14, 0] } : undefined}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-44 -top-24 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--wash-peach), transparent 70%)' }}
        animate={animate ? { x: [0, -16, 0], y: [0, 18, 0] } : undefined}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
