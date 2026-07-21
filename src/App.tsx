import { useCallback, useState } from 'react';
import type { Project, SkillId } from '@/types';
import { projectById } from '@/data/projects';
import { useHashSkill } from '@/hooks/useHashSkill';
import { useLanguage } from '@/i18n/LanguageProvider';
import { ui } from '@/i18n/ui';
import { Background } from '@/components/ui/Background';
import { NavBar } from '@/components/ui/NavBar';
import { Footer } from '@/components/ui/Footer';
import { StickyActions } from '@/components/ui/StickyActions';
import { HeroSection } from '@/components/hero/HeroSection';
import { SummarySection } from '@/components/summary/SummarySection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProcessSection } from '@/components/process/ProcessSection';
import { ResumeSection } from '@/components/resume/ResumeSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function App() {
  const { activeSkill, selectSkill } = useHashSkill();
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = useCallback((project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  }, []);

  const openProjectById = useCallback(
    (id: string) => {
      const project = projectById(id);
      if (project) openProject(project);
    },
    [openProject],
  );

  const closeProject = useCallback(() => setModalOpen(false), []);

  const handleSelectSkill = useCallback(
    (id: SkillId) => selectSkill(id),
    [selectSkill],
  );

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-text focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background focus:shadow-lift"
      >
        {t(ui.a11y.skipToContent)}
      </a>

      <Background />
      <NavBar />

      <main>
        <HeroSection
          activeSkill={activeSkill}
          onSelectSkill={handleSelectSkill}
          onOpenProject={openProjectById}
        />
        <SummarySection />
        <ProjectsSection onOpenProject={openProject} />
        <ExperienceSection />
        <SkillsSection />
        <ProcessSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
      <StickyActions />

      <ProjectCaseStudy project={activeProject} open={modalOpen} onClose={closeProject} />
    </>
  );
}
