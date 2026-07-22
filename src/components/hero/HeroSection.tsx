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
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.3 : 0.5,
      delay: reduce ? 0 : delay,
      ease: [0.22, 0.61, 0.36, 1] as const,
    },
  });

  return (
    <section id="top" className="relative mx-auto max-w-content px-4 pb-16 pt-28 sm:px-6 lg:pt-32">
      {/* ── HERO INTRO ─────────────────────────────────────────────────────────
          Identity block sits above the interactive grid so the portrait aligns
          with the interactive content, not with the top heading. */}
      <div className="max-w-3xl">
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
          <Button size="lg" onClick={() => scrollToId('projects')} className="shadow-card">
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
      </div>

      {/* ── HERO MAIN GRID ─────────────────────────────────────────────────────
          Explicit two-column grid, top-aligned (no automatic vertical centering)
          so the right column never re-centers when the left panel content changes. */}
      <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-[48%_52%] lg:gap-8">
        {/* LEFT — interactive area (selector on mobile + dynamic panel) */}
        <div className="order-2 lg:order-1">
          {!isDesktop && (
            <div className="mb-4">
              <MobileSkillSelector activeSkill={activeSkill} onSelect={handleSelect} />
            </div>
          )}
          {/* Stable min-height wrapper: content swaps between skills without
              resizing the row or nudging the portrait column. */}
          <motion.div {...fade(0.42)} className="lg:min-h-[560px]">
            <SkillContentPanel skill={skill} onOpenProject={onOpenProject} />
          </motion.div>
        </div>

        {/* RIGHT — portrait area: frame + caption behave as one content group.
            Only one InteractivePortrait is mounted at a time (per breakpoint), so
            hidden copies never animate or attach global listeners. */}
        <div className="order-1 lg:order-2">
          {/* PortraitFrame — fixed-size box; selection never changes its geometry. */}
          <div className="flex min-h-[560px] items-center justify-center">
            {isDesktop ? (
              <SkillOrbit activeSkill={activeSkill} revealed={revealed} onSelect={handleSelect} />
            ) : (
              <div className="mx-auto w-full max-w-[280px]">
                <InteractivePortrait
                  leanAngle={skill.angle}
                  accent={skill.accent}
                  revealed={revealed}
                />
              </div>
            )}
          </div>

          {/* PortraitCaption — secondary, sits directly below the portrait and
              outside the parallax layers so it never inherits their transforms. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: revealed ? 1 : 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 1.3 }}
            className="mt-4 text-center"
          >
            <p className="flex items-center justify-center gap-2 font-mono text-xs tracking-wide text-text-soft">
              <span
                className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--interactive)]"
                aria-hidden
              />
              {t(ui.hero.selectHint)}
            </p>
            <p className="mx-auto mt-1.5 max-w-xs text-[11px] leading-relaxed text-muted">
              {t(ui.hero.portraitCaption)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
