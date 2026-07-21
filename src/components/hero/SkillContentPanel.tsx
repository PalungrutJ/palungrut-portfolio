import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type { Skill } from '@/types';
import { projectById } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { hexToRgba } from '@/lib/color';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { Button } from '@/components/ui/Button';

interface SkillContentPanelProps {
  skill: Skill;
  onOpenProject: (projectId: string) => void;
}

/**
 * Dynamic left-hero panel. Content swaps smoothly when the active skill changes.
 * A polite live region announces the change for screen-reader users.
 */
export function SkillContentPanel({ skill, onOpenProject }: SkillContentPanelProps) {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const Icon = skill.icon;
  const related = skill.relatedProjectIds
    .map((id) => projectById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <GlassPanel
      className="relative overflow-hidden p-5 sm:p-6"
      style={{ borderLeftWidth: 3, borderLeftColor: skill.accent }}
    >
      <div className="sr-only" aria-live="polite">
        {t(ui.panel.nowShowing)} {t(skill.title)}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={skill.id}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduce ? 0.15 : 0.32, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: hexToRgba(skill.accent, 0.14), color: skill.accent }}
            >
              <Icon size={20} />
            </span>
            <div>
              <p className="eyebrow">{t(ui.panel.activeSystem)}</p>
              <h3 className="text-lg font-semibold text-text">{t(skill.title)}</h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{t(skill.summary)}</p>

          <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
            {skill.capabilities.map((cap) => (
              <li key={cap.en} className="flex items-start gap-2 text-sm text-text/90">
                <Check size={15} className="mt-0.5 shrink-0 text-success" />
                <span>{t(cap)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-surface-2/50 p-3 text-sm">
            <Sparkles size={15} className="mt-0.5 shrink-0 text-secondary" />
            <p className="text-muted">
              <span className="font-medium text-text">{t(ui.panel.evidence)} </span>
              {t(skill.evidence)}
            </p>
          </div>

          {related.length > 0 && (
            <div className="mt-4">
              <p className="eyebrow mb-2">{t(ui.panel.relatedProjects)}</p>
              <div className="flex flex-wrap gap-2">
                {related.map((p) => (
                  <Button
                    key={p.id}
                    variant="secondary"
                    size="sm"
                    onClick={() => onOpenProject(p.id)}
                  >
                    {t(p.name)}
                    <ArrowRight size={14} />
                  </Button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </GlassPanel>
  );
}
