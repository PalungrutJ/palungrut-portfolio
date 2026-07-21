import type { Skill, SkillId } from '@/types';
import { skills } from '@/data/skills';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { hexToRgba } from '@/lib/color';
import { cn } from '@/lib/cn';

interface MobileSkillSelectorProps {
  activeSkill: SkillId;
  onSelect: (skill: Skill) => void;
}

/**
 * Mobile replacement for the orbit: an accessible 2-column grid of skill buttons.
 * No hover-only information; every node is a real button.
 */
export function MobileSkillSelector({ activeSkill, onSelect }: MobileSkillSelectorProps) {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-2 gap-2" role="group" aria-label={t(ui.hero.selectGroup)}>
      {skills.map((skill) => {
        const Icon = skill.icon;
        const active = skill.id === activeSkill;
        return (
          <button
            key={skill.id}
            type="button"
            onClick={() => onSelect(skill)}
            aria-pressed={active}
            style={
              active
                ? {
                    backgroundColor: hexToRgba(skill.accent, 0.13),
                    borderColor: hexToRgba(skill.accent, 0.55),
                  }
                : undefined
            }
            className={cn(
              'flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary-strong)]',
              active
                ? 'border-2 shadow-soft'
                : 'border-border-strong bg-surface hover:-translate-y-0.5 hover:border-[color:var(--text-soft)]',
            )}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={
                active
                  ? { backgroundColor: hexToRgba(skill.accent, 0.2), color: skill.accent }
                  : { backgroundColor: 'var(--surface-2)' }
              }
            >
              <Icon size={16} className={cn(!active && 'text-muted')} />
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  'block text-sm',
                  active ? 'font-bold text-text' : 'font-medium text-text-soft',
                )}
              >
                {t(skill.label)}
              </span>
              <span className="block truncate text-[11px] text-muted">{t(skill.tagline)}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
