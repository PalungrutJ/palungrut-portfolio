import type { Project } from '@/types';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  onOpenProject: (project: Project) => void;
}

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const { t } = useLanguage();
  return (
    <section id="projects" className="mx-auto max-w-content px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        eyebrow={t(ui.projects.eyebrow)}
        title={t(ui.projects.title)}
        description={t(ui.projects.description)}
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}
