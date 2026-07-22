import { Mail, Phone, Github, Linkedin, MapPin, FileText } from 'lucide-react';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function ContactSection() {
  const { t } = useLanguage();
  const viewProfile = t(ui.contact.labels.viewProfile);
  const items = [
    { icon: Mail, label: t(ui.contact.labels.email), value: profile.email, href: `mailto:${profile.email}` },
    profile.phone
      ? { icon: Phone, label: t(ui.contact.labels.phone), value: profile.phone, href: `tel:${profile.phone}` }
      : null,
    profile.github
      ? { icon: Github, label: t(ui.contact.labels.github), value: viewProfile, href: profile.github }
      : null,
    profile.linkedin
      ? { icon: Linkedin, label: t(ui.contact.labels.linkedin), value: viewProfile, href: profile.linkedin }
      : null,
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <section id="contact" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <GlassPanel className="relative overflow-hidden">
        {/* strong final state: a quiet accent aura anchored to the panel */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--primary-soft), transparent 70%)' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
          aria-hidden
        />
        <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={t(ui.contact.eyebrow)} title={t(ui.contact.title)} />
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              {t(ui.contact.body)}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-primary" />
              {t(profile.location)}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="bg-text text-background shadow-glow hover:shadow-lift focus-visible:ring-[color:var(--primary-strong)]"
              >
                <Mail size={17} /> {t(ui.contact.labels.email)}
              </MagneticButton>
              <MagneticButton
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                strength={6}
                className="border border-border-strong bg-surface-2 text-text hover:border-[color:var(--primary-strong)] focus-visible:ring-[color:var(--primary-strong)]"
              >
                <FileText size={16} /> {t(ui.hero.viewResume)}
              </MagneticButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href }) => {
              const external = href.startsWith('http');
              return (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-surface-2/40 p-4 transition-colors hover:border-primary/50 hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--primary-soft)] text-primary-strong">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium text-text">{value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
