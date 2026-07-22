import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Target, Wrench, TrendingUp } from 'lucide-react';
import type { Project } from '@/types';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { useTilt } from '@/hooks/useTilt';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { Chip } from '@/components/ui/Chip';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const tilt = useTilt(6);
  return (
    <motion.article
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduce ? 0.3 : 0.5, delay: (index % 3) * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={tilt.ref}
        style={tilt.style}
        {...tilt.handlers}
        className="h-full"
      >
      <GlassPanel className="group card-interactive relative flex h-full cursor-pointer flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">{t(project.category)}</p>
            <h3 className="mt-1 text-lg font-bold leading-snug text-text">{t(project.name)}</h3>
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-2 font-mono text-xs text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex gap-2.5">
            <Target size={15} className="mt-0.5 shrink-0 text-muted" />
            <div>
              <dt className="sr-only">{t(ui.caseStudy.problem)}</dt>
              <dd className="text-muted">{t(project.problem)}</dd>
            </div>
          </div>
          <div className="flex gap-2.5">
            <Wrench size={15} className="mt-0.5 shrink-0 text-muted" />
            <div>
              <dt className="sr-only">{t(ui.caseStudy.solution)}</dt>
              <dd className="text-muted">{t(project.solution)}</dd>
            </div>
          </div>
          <div className="flex gap-2.5">
            <TrendingUp size={15} className="mt-0.5 shrink-0 text-success" />
            <div>
              <dt className="sr-only">{t(ui.caseStudy.result)}</dt>
              <dd className="font-medium text-text-soft">{t(project.result)}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="stretched mt-5 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-primary-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${t(ui.projects.openCaseStudyFor)} ${t(project.name)}`}
        >
          {t(ui.projects.viewCaseStudy)}
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </GlassPanel>
      </motion.div>
    </motion.article>
  );
}
