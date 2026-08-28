import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FEATURED_ENGINEERING_PROJECTS, withBasePath } from '@/data/portfolioData';
import { ProjectTerminalDive } from '@/components/projects/ProjectTerminalDive';

export function generateStaticParams() { return FEATURED_ENGINEERING_PROJECTS.map(({ slug }) => ({ slug })); }

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = FEATURED_ENGINEERING_PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();

  const links = [
    project.github && { label: 'GITHUB', href: project.github },
    project.publication && { label: 'PAPER', href: project.publication },
    project.demo && { label: 'DEMO', href: project.demo },
    project.video && { label: 'VIDEO', href: project.video },
    ...(project.reports?.map(report => ({ label: report.label.toUpperCase(), href: report.url })) ?? []),
  ].filter(Boolean) as { label: string; href: string }[];

  const technicalIndex = [
    project.methods.length && `Methods: ${project.methods.join(' · ')}`,
    project.models.length && `Models: ${project.models.join(' · ')}`,
    project.datasets.length && `Data: ${project.datasets.join(' · ')}`,
    project.technologies.length && `Technologies: ${project.technologies.join(' · ')}`,
  ].filter(Boolean) as string[];

  const steps = [
    { command: 'project brief --overview', label: 'OVERVIEW', lines: [project.overview] },
    { command: 'project diagnose --problem', label: 'PROBLEM', lines: [project.problem] },
    { command: 'project inspect --approach', label: 'APPROACH', lines: [project.approach] },
    { command: 'pipeline trace --stages', label: 'ARCHITECTURE', lines: project.architecture.map(stage => `${stage.name}: ${stage.description}. ${stage.detail}`) },
    { command: 'project trace --implementation', label: 'IMPLEMENTATION', lines: project.implementation },
    ...(project.metrics?.length ? [{ command: 'benchmark read --metrics', label: 'METRICS', lines: project.metrics.map(metric => `${metric.label}: ${metric.value}${metric.sub ? ` — ${metric.sub}` : ''}`) }] : []),
    ...(project.results?.length ? [{ command: 'evaluation show --results', label: 'RESULTS', lines: project.results }] : []),
    ...(project.limitations?.length ? [{ command: 'project audit --limitations', label: 'LIMITATIONS', lines: project.limitations }] : []),
    ...(project.futureWork?.length ? [{ command: 'roadmap show --next', label: 'FUTURE WORK', lines: project.futureWork }] : []),
    { command: 'project stack --list', label: 'TECHNICAL INDEX', lines: technicalIndex },
  ];

  return (
    <article className="page project-case-study">
      <Link href="/archive" className="text-link">← Technical archive</Link>
      <ProjectTerminalDive
        title={project.title}
        meta={['PROJECT ' + project.number, project.year, project.category].filter(Boolean).join(' / ')}
        summary={project.purpose}
        steps={steps}
        links={links.map(link => ({ ...link, href: withBasePath(link.href) }))}
        active={false}
      />
    </article>
  );
}
