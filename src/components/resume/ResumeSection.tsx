import { Download, FileText, Eye } from 'lucide-react';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { ButtonLink } from '@/components/ui/Button';

export function ResumeSection() {
  const { t } = useLanguage();
  return (
    <section id="resume" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader eyebrow={t(ui.resume.eyebrow)} title={t(ui.resume.title)} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <GlassPanel className="flex flex-col p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--primary-soft)] text-primary-strong">
              <FileText size={22} />
            </span>
            <div>
              <h3 className="font-semibold text-text">{t(ui.resume.heading)}</h3>
              <p className="text-xs text-muted">{t(ui.resume.subheading)}</p>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-muted">
            {ui.resume.highlights.map((h) => (
              <li key={h.en} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {t(h)}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              as="a"
              href={profile.resumeUrl}
              download
              rel="noopener noreferrer"
            >
              <Download size={16} /> {t(ui.resume.download)}
            </ButtonLink>
            <ButtonLink
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Eye size={16} /> {t(ui.resume.openTab)}
            </ButtonLink>
          </div>
          <p className="mt-4 text-xs text-muted">
            {t(ui.resume.addHint)} <code className="text-text/80">{profile.resumeUrl}</code>
          </p>
        </GlassPanel>

        {/* Inline preview — browsers that block PDF embeds fall back to the message. */}
        <GlassPanel className="overflow-hidden p-0">
          <div className="border-b border-border px-4 py-2.5 text-xs text-muted">
            {t(ui.resume.preview)}
          </div>
          <object
            data={profile.resumeUrl}
            type="application/pdf"
            className="h-[420px] w-full bg-surface-2"
            aria-label={t(ui.resume.preview)}
          >
            <div className="flex h-[420px] flex-col items-center justify-center gap-3 p-6 text-center">
              <FileText size={32} className="text-muted" />
              <p className="text-sm text-muted">{t(ui.resume.previewUnavailable)}</p>
            </div>
          </object>
        </GlassPanel>
      </div>
    </section>
  );
}
