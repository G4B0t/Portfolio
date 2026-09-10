import { useParams } from 'react-router-dom';
import { CaseStudyLayout } from '@/app/layouts/CaseStudyLayout';
import { projects } from '@/content/projects';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PMCACaseStudy } from '@/projects/pmca/PMCACaseStudy';
export function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  if (project.slug === 'pmca')
    return (
      <CaseStudyLayout>
        <PMCACaseStudy />
      </CaseStudyLayout>
    );
  return <CaseStudyLayout project={project} />;
}
