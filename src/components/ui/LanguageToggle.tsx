import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import type { Lang } from '@/types';
import { cn } from '@/lib/cn';

const options: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'th', label: 'ไทย' },
];

/** Accessible EN/TH segmented toggle. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-lg border border-border bg-surface-2/60 p-0.5',
        className,
      )}
      role="group"
      aria-label={t(ui.nav.language)}
    >
      <Languages size={15} className="ml-1.5 text-muted" aria-hidden />
      {options.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            lang={opt.value}
            className={cn(
              'rounded-lg px-2 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary-strong)]',
              active ? 'bg-text text-background' : 'text-muted hover:text-text',
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
