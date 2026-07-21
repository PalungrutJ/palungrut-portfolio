import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} Palungrut Jankong · {t(ui.footer.rights)}
        </p>
        <div className="flex items-center gap-2">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              <Github size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              <Linkedin size={18} />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-md p-2 text-muted transition-colors hover:bg-surface-2 hover:text-text"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
