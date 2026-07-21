import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, FolderKanban, FileText, Mail } from 'lucide-react';
import type { Skill, SkillId } from '@/types';
import { profile } from '@/data/profile';
import { skillById } from '@/data/skills';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { SkillOrbit } from './SkillOrbit';
import { SkillContentPanel } from './SkillContentPanel';
import { MobileSkillSelector } from './MobileSkillSelector';
import { InteractivePortrait } from './InteractivePortrait';

interface HeroSectionProps {
  activeSkill: SkillId;
  onSelectSkill: (id: SkillId) => void;
  onOpenProject: (projectId: string) => void;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function HeroSection({ activeSkill, onSelectSkill, onOpenProject }: HeroSectionProps) {
  const reduce = useReducedMotion() ?? false;
  const { t } = useLanguage();
  // Matches the Tailwind `lg` breakpoint; drives the desktop orbit vs mobile layout.
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [revealed, setRevealed] = useState<boolean>(reduce);
  const skill = skillById(activeSkill) ?? skillById('projects')!;

  useEffect(() => {
    // Trigger the intro shortly after mount (or immediately if reduced motion).
    const timer = window.setTimeout(() => setRevealed(true), reduce ? 0 : 120);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  // A skill node either updates the panel or scrolls to its section.
  const handleSelect = (s: Skill) => {
    if (s.scrollTarget && s.scrollTarget !== 'projects') {
      onSelectSkill(s.id);
      scrollToId(s.scrollTarget);
      return;
    }
    onSelectSkill(s.id);
    if (s.scrollTarget === 'projects') {
      // Projects is the default panel node; keep panel but also allow deep dive.
    }
  };

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: reduce ? 0.3 : 0.5, delay: reduce ? 0 : delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative mx-auto max-w-content px-4 pb-16 pt-28 sm:px-6 lg:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-8">
        {/* LEFT — dynamic content */}
        <div className="order-1">
          <motion.p {...fade(0.05)} className="eyebrow flex items-center gap-2">
            <MapPin size={14} className="text-muted" />
            {t(profile.location)}
            <span className="text-border-strong">·</span>
            {t(profile.highlights[0])}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="mt-3 text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-text"
          >
            {profile.name}
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-2 text-lg font-semibold text-primary-strong">
            {t(profile.role)}
          </motion.p>

          <motion.p {...fade(0.22)} className="mt-5 max-w-xl text-base leading-relaxed text-text-soft">
            {t(profile.tagline)}
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-5 flex flex-wrap gap-2">
            {profile.chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </motion.div>

          <motion.div {...fade(0.34)} className="mt-8 flex flex-wrap items-center gap-3">
            {/* One dominant action; the rest stay quiet. */}
            <Button
              size="lg"
              onClick={() => scrollToId('projects')}
              className="shadow-card"
            >
              <FolderKanban size={18} /> {t(ui.hero.exploreProjects)}
            </Button>
            <ButtonLink
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <FileText size={16} /> {t(ui.hero.viewResume)}
            </ButtonLink>
            <Button variant="ghost" onClick={() => scrollToId('contact')}>
              <Mail size={16} /> {t(ui.hero.contactMe)}
            </Button>
          </motion.div>

          {/* Interactive skill panel (updates from the orbit / selector) */}
          <motion.div {...fade(0.42)} className="mt-8">
            <SkillContentPanel skill={skill} onOpenProject={onOpenProject} />
          </motion.div>
        </div>

        {/* RIGHT — only one InteractivePortrait is mounted at a time (per breakpoint),
            so hidden copies never animate or attach global listeners. */}
        {isDesktop ? (
          <div className="order-2">
            <SkillOrbit activeSkill={activeSkill} revealed={revealed} onSelect={handleSelect} />
          </div>
        ) : (
          <div className="order-2">
            <div className="mx-auto mb-6 max-w-[280px]">
              <InteractivePortrait
                leanAngle={skill.angle}
                accent={skill.accent}
                revealed={revealed}
              />
            </div>
            <MobileSkillSelector activeSkill={activeSkill} onSelect={handleSelect} />
          </div>
        )}
      </div>
    </section>
  );
}
