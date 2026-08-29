'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectTerminalDive } from '@/components/projects/ProjectTerminalDive';

export function ArchiveProjectCaseStudy({ slug }: { slug: string }) {
  const { ui, portfolio } = useLanguage();
  const { ARCHIVE_PROJECT_DETAILS_BY_SLUG, SECONDARY_PROJECT_ARCHIVE, withBasePath } = portfolio;
  const project = SECONDARY_PROJECT_ARCHIVE.find((item) => item.slug === slug);
  if (!project) return null;

  const evidence = [
    project.github && { label: ui.projectTerminal.linkLabels.sourceCode, href: project.github },
    project.report && { label: project.report.label.toUpperCase(), href: project.report.url },
    project.video && { label: ui.projectTerminal.linkLabels.watchDemo, href: project.video },
  ].filter(Boolean) as { label: string; href: string }[];

  const details = ARCHIVE_PROJECT_DETAILS_BY_SLUG[project.slug] ?? project.implementation;

  return (
    <article className="page project-case-study archive-case-study">
      <Link href="/archive" className="text-link">
        {ui.archive.backLink}
      </Link>
      <ProjectTerminalDive
        title={project.title}
        meta={`${ui.projectTerminal.meta.projectDeepDive} / ${project.year || ui.projectTerminal.meta.archive} / ${project.domain}`}
        summary={project.summary}
        steps={[
          {
            command: ui.projectTerminal.commands.projectBrief,
            label: ui.projectTerminal.steps.projectBrief,
            lines: [project.summary],
          },
          {
            command: ui.projectTerminal.commands.technicalDetails,
            label: ui.projectTerminal.steps.technicalDetails,
            lines: project.details ?? details,
          },
          {
            command: ui.projectTerminal.commands.implementationRecord,
            label: ui.projectTerminal.steps.implementationRecord,
            lines: project.implementation,
          },
          {
            command: ui.projectTerminal.commands.technicalIndex,
            label: ui.projectTerminal.steps.technicalIndex,
            lines: [
              `${ui.projectTerminal.domain}: ${project.domain}`,
              `${ui.projectTerminal.technologies}: ${project.technologies.join(' · ')}`,
            ],
          },
          {
            command: ui.projectTerminal.commands.evidence,
            label: ui.projectTerminal.steps.evidence,
            lines: evidence.length ? evidence.map((item) => item.label) : [ui.projectTerminal.evidencePrivate],
          },
        ]}
        links={evidence.map((item) => ({ ...item, href: withBasePath(item.href) }))}
      />
    </article>
  );
}
