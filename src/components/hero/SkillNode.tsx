import { forwardRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Skill } from '@/types';
import { useLanguage } from '@/i18n/LanguageProvider';
import { hexToRgba } from '@/lib/color';
import { cn } from '@/lib/cn';

interface SkillNodeProps {
  skill: Skill;
  active: boolean;
  dimmed: boolean;
  /** Absolute position within the orbit container, in %. */
  x: number;
  y: number;
  floatSeed: number;
  onSelect: (skill: Skill) => void;
}

/**
 * Three distinct tiers:
 *  - rest: white surface with the node's own accent icon (identity, looks clickable)
 *  - hover: lift + accent border + faint accent wash + icon scale
 *  - selected: accent fill + 2px accent border + scale + accent glow + status dot (dominant)
 */
export const SkillNode = forwardRef<HTMLButtonElement, SkillNodeProps>(function SkillNode(
  { skill, active, dimmed, x, y, floatSeed, onSelect },
  ref,
) {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const Icon = skill.icon;
  const accent = skill.accent;

  const restShadow = '0 1px 2px rgba(43,40,48,0.05), 0 8px 20px -14px rgba(43,40,48,0.35)';
  const hoverShadow = `0 10px 26px -12px ${hexToRgba(accent, 0.5)}`;
  const selectedShadow = `0 12px 30px -10px ${hexToRgba(accent, 0.6)}`;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%`, zIndex: active ? 30 : 10 }}
    >
      <motion.div
        // Selected node rises out of the floating drift and holds still.
        animate={reduce || active ? { y: 0 } : { y: [0, -5, 0, 5, 0] }}
        transition={
          reduce || active
            ? { duration: 0.3 }
            : { duration: 10 + floatSeed, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <motion.button
          ref={ref}
          type="button"
          onClick={() => onSelect(skill)}
          aria-pressed={active}
          initial={false}
          animate={{
            scale: active ? 1.1 : 1,
            backgroundColor: active ? hexToRgba(accent, 0.16) : 'var(--surface)',
            borderColor: active ? accent : 'var(--border-strong)',
            boxShadow: active ? selectedShadow : restShadow,
          }}
          whileHover={
            reduce
              ? undefined
              : active
                ? { y: -2 }
                : { y: -4, scale: 1.05, boxShadow: hoverShadow }
          }
          whileTap={{ scale: active ? 1.06 : 0.97 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          style={{ borderWidth: active ? 2 : 1 }}
          className={cn(
            'group relative flex w-[108px] flex-col items-center gap-2 rounded-2xl border px-3 py-3 text-center',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            dimmed && !active && 'opacity-90',
          )}
        >
          {/* selected status dot */}
          {active && (
            <span
              className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
          )}

          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
            style={{
              backgroundColor: hexToRgba(accent, active ? 0.22 : 0.1),
              color: accent,
            }}
          >
            <Icon size={20} strokeWidth={2} />
          </span>
          <span
            className={cn(
              'text-[11px] leading-tight',
              active ? 'font-bold text-text' : 'font-semibold text-text-soft',
            )}
          >
            {t(skill.label)}
          </span>

          {/* hover/focus tooltip (tagline is also in the DOM for assistive tech) */}
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-2.5 left-1/2 z-40 w-max max-w-[190px] -translate-x-1/2 -translate-y-full rounded-lg border border-border-strong bg-surface px-2.5 py-1.5 text-[11px] text-text-soft opacity-0 shadow-lift transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            {t(skill.tagline)}
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
});
