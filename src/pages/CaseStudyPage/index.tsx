import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CaseStudyLayout } from '@/app/layouts/CaseStudyLayout';
import { projects } from '@/content/projects';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { caseStudyRegistry } from '@/projects/caseStudyRegistry';
export function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const CaseStudy = project ? caseStudyRegistry[project.slug] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  if (!project) return <NotFoundPage />;
  return (
    <CaseStudyLayout project={project}>
      {CaseStudy ? <CaseStudy /> : undefined}
    </CaseStudyLayout>
  );
}
