import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CaseStudyLayout } from '@/app/layouts/CaseStudyLayout';
import { projects } from '@/content/projects';
import { NotFoundPage } from '@/pages/NotFoundPage';
const Content = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[7]} 0;
  max-width: 44rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;
export function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return (
    <CaseStudyLayout project={project}>
      <Content>
        <h2>Case study in preparation</h2>
        <p>
          This route is ready for a future, publication-safe project narrative. No
          unverified professional claims or private material have been included.
        </p>
        <Link to="/">Return home</Link>
      </Content>
    </CaseStudyLayout>
  );
}
