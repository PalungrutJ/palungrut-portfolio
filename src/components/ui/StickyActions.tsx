import { FileText, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';

/** Mobile-only sticky Resume + Contact actions. */
export function StickyActions() {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-content gap-2 p-2.5">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface py-2.5 text-sm font-medium text-text shadow-soft"
        >
          <FileText size={16} /> {t(ui.sticky.resume)}
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-text py-2.5 text-sm font-semibold text-background shadow-soft"
        >
          <Mail size={16} /> {t(ui.sticky.contact)}
        </a>
      </div>
    </div>
  );
}
