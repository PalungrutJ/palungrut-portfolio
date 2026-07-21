import { motion, useReducedMotion } from 'motion/react';
import { Users, Factory, Database, Network, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassPanel } from '@/components/ui/GlassPanel';

const bridges = [
  { icon: Users, label: ui.summary.bridges.users },
  { icon: Factory, label: ui.summary.bridges.factory },
  { icon: Database, label: ui.summary.bridges.erp },
  { icon: Network, label: ui.summary.bridges.infra },
  { icon: Code2, label: ui.summary.bridges.dev },
];

export function SummarySection() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  return (
    <section id="summary" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader eyebrow={t(ui.summary.eyebrow)} title={t(ui.summary.title)} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {profile.summary.map((para, i) => (
            <motion.p
              key={i}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: reduce ? 0.3 : 0.5, delay: i * 0.08 }}
              className="text-[15px] leading-relaxed text-muted"
            >
              {t(para)}
            </motion.p>
          ))}
        </div>

        <GlassPanel className="p-6">
          <p className="eyebrow">{t(ui.summary.whatIConnect)}</p>
          <ul className="mt-4 space-y-3">
            {bridges.map(({ icon: Icon, label }, i) => (
              <li key={label.en} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--primary-soft)] text-primary-strong">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-medium text-text">{t(label)}</span>
                {i < bridges.length - 1 && (
                  <span className="ml-auto text-xs text-border" aria-hidden>
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
            {t(ui.summary.flow)}
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
