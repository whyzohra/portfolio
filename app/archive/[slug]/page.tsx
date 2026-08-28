import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARCHIVE_PROJECT_DETAILS, SECONDARY_PROJECT_ARCHIVE } from '@/data/portfolioData';
import { withBasePath } from '@/data/portfolioData';
import { projectSlug } from '@/lib/projectSlug';
import { ProjectTerminalDive } from '@/components/projects/ProjectTerminalDive';

export function generateStaticParams() {
  return SECONDARY_PROJECT_ARCHIVE.map(project => ({ slug: projectSlug(project.title) }));
}

export default function ArchiveProjectPage({ params }: { params: { slug: string } }) {
  const project = SECONDARY_PROJECT_ARCHIVE.find(item => projectSlug(item.title) === params.slug);
  if (!project) notFound();
  const evidence = [
    project.github && { label: 'SOURCE CODE', href: project.github },
    project.report && { label: project.report.label.toUpperCase(), href: project.report.url },
    project.video && { label: 'WATCH DEMO', href: project.video },
  ].filter(Boolean) as { label: string; href: string }[];

  return <article className="page project-case-study archive-case-study">
    <Link href="/archive" className="text-link">← Technical archive</Link>
    <ProjectTerminalDive
      title={project.title}
      meta={`PROJECT DEEP DIVE / ${project.year || 'ARCHIVE'} / ${project.domain}`}
      summary={project.summary}
      steps={[
        { command: 'project brief --overview', label: 'PROJECT BRIEF', lines: [project.summary] },
        { command: 'project inspect --technical', label: 'TECHNICAL DETAILS', lines: project.details ?? ARCHIVE_PROJECT_DETAILS[project.title] ?? project.implementation },
        { command: 'project trace --implementation', label: 'IMPLEMENTATION RECORD', lines: project.implementation },
        { command: 'project stack --list', label: 'TECHNICAL INDEX', lines: [`Domain: ${project.domain}`, `Technologies: ${project.technologies.join(' · ')}`] },
        { command: 'project evidence --available', label: 'EVIDENCE', lines: evidence.length ? evidence.map(item => item.label) : ['Supporting material is private or being prepared for publication.'] },
      ]}
      links={evidence.map(item => ({ ...item, href: withBasePath(item.href) }))}
    />
  </article>;
}
