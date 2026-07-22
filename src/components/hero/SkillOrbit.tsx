import { useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Skill, SkillId } from '@/types';
import { skills } from '@/data/skills';
import { usePageVisible } from '@/hooks/usePageVisible';
import { InteractivePortrait } from './InteractivePortrait';
import { SkillNode } from './SkillNode';

interface SkillOrbitProps {
  activeSkill: SkillId;
  revealed: boolean;
  onSelect: (skill: Skill) => void;
}

const RADIUS_X = 47;
const RADIUS_Y = 45;

function pos(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + RADIUS_X * Math.cos(rad),
    y: 50 + RADIUS_Y * Math.sin(rad),
    // Small inward offset (px) so nodes appear to radiate out from the centre.
    inX: -Math.cos(rad) * 22,
    inY: -Math.sin(rad) * 22,
  };
}

/**
 * Desktop/tablet layout: the portrait is the centre; skill nodes float around it,
 * each connected to the centre by a hairline (the active one is accent + a data pulse).
 */
export function SkillOrbit({ activeSkill, revealed, onSelect }: SkillOrbitProps) {
  const reduce = useReducedMotion();
  const visible = usePageVisible();
  const animate = !reduce && visible;

  const nodes = useMemo(() => skills.map((skill) => ({ skill, ...pos(skill.angle) })), []);

  const activeEntry = nodes.find((n) => n.skill.id === activeSkill);
  const activeAngle = activeEntry?.skill.angle ?? 0;
  const activeAccent = activeEntry?.skill.accent ?? 'var(--primary)';

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* slow-rotating dashed depth ring (decorative) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: '92%', height: '88%' }}
        animate={animate ? { rotate: 360 } : { rotate: 0 }}
        transition={animate ? { duration: 90, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
        aria-hidden
      >
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
          <circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="0.3"
            strokeDasharray="1 2.5"
          />
        </svg>
      </motion.div>
      {/* inner static guide ring for depth */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
        style={{ width: '70%', height: '66%' }}
        aria-hidden
      />

      {/* connection lines — every node links to the centre; active is emphasized */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {nodes.map(({ skill, x, y }) => {
          const isActive = skill.id === activeSkill;
          return (
            <motion.line
              key={skill.id}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke={isActive ? skill.accent : 'var(--border-strong)'}
              strokeWidth={isActive ? 0.5 : 0.28}
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: revealed ? (isActive ? 0.9 : 0.32) : 0,
              }}
              transition={{
                duration: reduce ? 0.2 : 0.6,
                delay: revealed && !reduce ? 0.9 : 0,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            />
          );
        })}

        {/* travelling data pulse along the active line */}
        {animate && activeEntry && revealed && (
          <motion.circle
            r="0.9"
            fill={activeAccent}
            initial={{ opacity: 0 }}
            animate={{
              cx: [50, activeEntry.x],
              cy: [50, activeEntry.y],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </svg>

      {/* portrait — the focal centre, aura tinted by the active accent.
          The stack is square, so 58% keeps the same optical weight the old
          4:5 frame had while leaving clear space out to the node ring. */}
      <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2">
        <InteractivePortrait leanAngle={activeAngle} accent={activeAccent} revealed={revealed} />
      </div>

      {/* nodes */}
      {nodes.map(({ skill, x, y, inX, inY }, i) => (
        <motion.div
          key={skill.id}
          className="absolute inset-0"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, x: inX, y: inY }}
          animate={
            revealed
              ? { opacity: 1, scale: 1, x: 0, y: 0 }
              : reduce
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.4, x: inX, y: inY }
          }
          transition={{
            duration: reduce ? 0.25 : 0.5,
            delay: revealed && !reduce ? 0.35 + i * 0.08 : 0,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <SkillNode
            skill={skill}
            active={skill.id === activeSkill}
            dimmed={skill.id !== activeSkill}
            x={x}
            y={y}
            floatSeed={i}
            onSelect={onSelect}
          />
        </motion.div>
      ))}
    </div>
  );
}
