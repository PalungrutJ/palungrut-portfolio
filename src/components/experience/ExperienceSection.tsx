import { motion, useReducedMotion } from 'motion/react';
import { experience, categoryLabels } from '@/data/experience';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Chip } from '@/components/ui/Chip';

export function ExperienceSection() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  return (
    <section id="experience" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        eyebrow={t(ui.experience.eyebrow)}
        title={t(ui.experience.title)}
        description={t(ui.experience.description)}
      />

      <ol className="mt-10 space-y-4">
        {experience.map((item, i) => (
          <motion.li
            key={item.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduce ? 0.3 : 0.45, delay: (i % 4) * 0.06 }}
            className="relative pl-8"
          >
            {/* rail */}
            <span
              className="absolute left-[7px] top-6 h-[calc(100%+0.5rem)] w-px bg-border last:hidden"
              aria-hidden
            />
            <span
              className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-surface"
              aria-hidden
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>

            <div className="card rounded-panel p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone="primary">{t(categoryLabels[item.category])}</Chip>
                {item.placeholder && (
                  <Chip className="uppercase tracking-wide">
                    {t(ui.experience.placeholder)}
                  </Chip>
                )}
                <span className="ml-auto font-mono text-xs text-muted">{t(item.period)}</span>
              </div>

              <h3 className="mt-2.5 text-base font-semibold text-text">{t(item.title)}</h3>
              <p className="text-xs text-muted">{t(item.organization)}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.description)}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
