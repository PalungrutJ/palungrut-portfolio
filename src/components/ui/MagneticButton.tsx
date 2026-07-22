import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/cn';

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
>;

interface MagneticButtonProps extends AnchorProps {
  children: ReactNode;
  className?: string;
  /** Pull strength in px at the edge of the element. */
  strength?: number;
}

/**
 * Anchor with a subtle magnetic pull toward the cursor. Disabled under
 * prefers-reduced-motion and on coarse pointers (falls back to a normal link).
 */
export const MagneticButton = forwardRef<HTMLAnchorElement, MagneticButtonProps>(
  function MagneticButton({ children, className, strength = 8, ...rest }, ref) {
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 220, damping: 16 });
    const sy = useSpring(y, { stiffness: 220, damping: 16 });

    const enabled =
      !reduce &&
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches;

    const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
      if (!enabled) return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength * 2);
      y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength * 2);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.a
        ref={ref}
        style={enabled ? { x: sx, y: sy } : undefined}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold',
          'transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className,
        )}
        {...rest}
      >
        {children}
      </motion.a>
    );
  },
);
