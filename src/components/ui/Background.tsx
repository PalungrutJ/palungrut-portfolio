import { motion, useReducedMotion } from 'motion/react';
import { usePageVisible } from '@/hooks/usePageVisible';

/**
 * Structured navy backdrop: a deep blue-gray foundation, a faint technical grid biased
 * toward the hero, a couple of blurred geometric depth layers and a slow light gradient.
 * Purely decorative; kept quiet behind text (grid is masked, washes hug the top).
 */
export function Background() {
  const reduce = useReducedMotion();
  const visible = usePageVisible();
  const animate = !reduce && visible;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* base vertical depth: slightly darker toward the bottom of the fold */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 72% 8%, rgba(76,111,255,0.10), transparent 60%), linear-gradient(180deg, var(--background) 0%, var(--background) 60%, var(--background-2) 100%)',
        }}
      />

      {/* faint structural grid, masked toward the hero (top-right) */}
      <motion.div
        className="absolute inset-0 tech-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.9 }}
      />

      {/* blurred geometric depth layers — spatial, low opacity, near the composition */}
      <motion.div
        className="absolute -right-32 -top-40 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--wash-primary), transparent 70%)' }}
        animate={animate ? { x: [0, -22, 0], y: [0, 16, 0] } : undefined}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[18%] top-[26%] h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--wash-violet), transparent 68%)' }}
        animate={animate ? { x: [0, 18, 0], y: [0, -14, 0] } : undefined}
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-40 top-[6%] h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--wash-cyan), transparent 72%)' }}
        animate={animate ? { x: [0, 20, 0], y: [0, 18, 0] } : undefined}
        transition={{ duration: 44, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* subtle top hairline of light where the nav floats */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(147,168,255,0.25), transparent)' }}
      />
    </div>
  );
}
