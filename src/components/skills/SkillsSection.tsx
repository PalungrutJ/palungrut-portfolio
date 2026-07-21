import { motion, useReducedMotion } from 'motion/react';
import { skillGroups } from '@/data/process';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassPanel } from '@/components/ui/GlassPanel';

export function SkillsSection() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  return (
    <section id="skills" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        eyebrow={t(ui.skills.eyebrow)}
        title={t(ui.skills.title)}
        description={t(ui.skills.description)}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduce ? 0.3 : 0.45, delay: (i % 3) * 0.07 }}
            >
              <GlassPanel className="h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--primary-soft)] text-primary-strong">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-semibold text-text">{t(group.label)}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface-2/50 px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
