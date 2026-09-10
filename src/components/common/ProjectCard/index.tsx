import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { ProjectDefinition } from '@/types/project';
import { Body, Card, Copy, Meta, Read, Title, Visual } from './styles';

export function ProjectCard({ project }: { project: ProjectDefinition }) {
  return (
    <Card>
      <Visual $variant={project.visual} aria-hidden="true">
        <span className="visual-label">{project.category}</span>
        <div className="visual-art">
          <i />
          <i />
          <i />
        </div>
      </Visual>
      <Body>
        <Badge>{project.subtitle}</Badge>
        <Title>{project.title}</Title>
        <Copy>{project.summary}</Copy>
        {project.technologies.length > 0 && (
          <Meta>
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </Meta>
        )}
        <Read
          to={`/work/${project.slug}`}
          aria-label={`View ${project.title} case study`}
        >
          <span>View case study</span>
          <ArrowUpRight size={16} />
        </Read>
      </Body>
    </Card>
  );
}
