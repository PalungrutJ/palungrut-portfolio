import { motion, useReducedMotion } from 'motion/react';
import { processSteps } from '@/data/process';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProcessSection() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  return (
    <section id="process" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader eyebrow={t(ui.process.eyebrow)} title={t(ui.process.title)} />

      <ol className="mt-10 grid gap-4 md:grid-cols-5">
        {processSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.li
              key={step.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduce ? 0.3 : 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <div className="card h-full rounded-panel p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--primary-soft)] text-primary-strong">
                    <Icon size={19} />
                  </span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-text">{t(step.title)}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{t(step.description)}</p>
              </div>
              {i < processSteps.length - 1 && (
                <span
                  className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-border md:block"
                  aria-hidden
                >
                  →
                </span>
              )}
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
