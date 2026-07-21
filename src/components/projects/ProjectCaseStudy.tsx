import type { Project } from '@/types';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { Modal } from '@/components/ui/Modal';
import { Chip } from '@/components/ui/Chip';

interface ProjectCaseStudyProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow text-primary-strong">{title}</h4>
      <div className="mt-1.5 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function ProjectCaseStudy({ project, open, onClose }: ProjectCaseStudyProps) {
  const { t } = useLanguage();
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <Modal open={open} onClose={onClose} title={`${t(project.name)} — ${t(ui.projects.viewCaseStudy)}`}>
      <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8">
        <p className="eyebrow">{t(project.category)}</p>
        <h3 className="mt-1 pr-8 text-xl font-bold text-text sm:text-2xl">{t(project.name)}</h3>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Block title={t(ui.caseStudy.problem)}>{t(cs.problem)}</Block>
          <Block title={t(ui.caseStudy.existingProcess)}>{t(cs.existingProcess)}</Block>
          <Block title={t(ui.caseStudy.responsibility)}>{t(cs.responsibility)}</Block>
          <Block title={t(ui.caseStudy.solution)}>{t(cs.solution)}</Block>
        </div>

        <div className="mt-6">
          <h4 className="eyebrow text-primary-strong">{t(ui.caseStudy.systemFlow)}</h4>
          <ol className="mt-3 space-y-2">
            {cs.systemFlow.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-surface-2 font-mono text-xs text-primary-strong">
                  {i + 1}
                </span>
                <span className="pt-0.5">{t(step)}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6">
          <h4 className="eyebrow text-primary-strong">{t(ui.caseStudy.technologies)}</h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Chip key={tech} tone="primary">
                {tech}
              </Chip>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-success/25 bg-success/5 p-4">
            <h4 className="eyebrow text-success">{t(ui.caseStudy.result)}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-text/90">{t(cs.result)}</p>
          </div>
          <Block title={t(ui.caseStudy.lessonsLearned)}>{t(cs.lessonsLearned)}</Block>
        </div>

        <p className="mt-6 border-t border-border pt-4 text-xs text-muted">
          {t(ui.caseStudy.disclaimer)}
        </p>
      </div>
    </Modal>
  );
}
