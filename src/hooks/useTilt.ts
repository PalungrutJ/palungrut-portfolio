import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

/**
 * Subtle cursor-driven 3D tilt for a card. Returns a ref for the element, the
 * transform motion values to bind, and pointer handlers. Disabled under
 * prefers-reduced-motion and on coarse (touch) pointers.
 */
export function useTilt(max = 6) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), { stiffness: 150, damping: 18 });

  const enabled =
    !reduce &&
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches;

  const onPointerMove = (e: React.PointerEvent) => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return {
    ref,
    enabled,
    handlers: { onPointerMove, onPointerLeave },
    style: enabled
      ? { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' as const }
      : {},
  };
}
