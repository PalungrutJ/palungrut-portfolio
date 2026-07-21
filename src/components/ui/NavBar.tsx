import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { navItems } from '@/data/nav';
import { profile } from '@/data/profile';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { ButtonLink } from './Button';
import { LanguageToggle } from './LanguageToggle';
import { cn } from '@/lib/cn';

const spyIds = navItems.map((n) => n.id);

export function NavBar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(spyIds);
  const { t } = useLanguage();

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="glass mx-auto mt-3 flex max-w-content items-center justify-between gap-4 rounded-panel px-4 py-2.5 sm:mx-4 lg:mx-auto">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav('top');
          }}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--primary-soft)] text-primary-strong">
            <Activity size={18} />
          </span>
          <span className="hidden sm:inline">P. Jankong</span>
        </a>

        <nav aria-label={t(ui.nav.primary)} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm transition-colors',
                active === item.id
                  ? 'text-primary-strong'
                  : 'text-muted hover:text-text hover:bg-surface-2/70',
              )}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ButtonLink
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            {t(ui.nav.resume)}
          </ButtonLink>
          <button
            className="rounded-md p-2 text-muted hover:bg-surface-2 hover:text-text lg:hidden"
            aria-label={open ? t(ui.nav.closeMenu) : t(ui.nav.openMenu)}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={t(ui.nav.mobile)}
          className="glass mx-4 mt-2 grid grid-cols-2 gap-1 rounded-panel p-2 lg:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={cn(
                'rounded-md px-3 py-2 text-left text-sm',
                active === item.id ? 'bg-surface-2 text-primary-strong' : 'text-muted hover:bg-surface-2/70',
              )}
            >
              {t(item.label)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
