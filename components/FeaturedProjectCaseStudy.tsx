'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectTerminalDive } from '@/components/projects/ProjectTerminalDive';

export function FeaturedProjectCaseStudy({ slug }: { slug: string }) {
  const { ui, portfolio } = useLanguage();
  const { withBasePath, FEATURED_ENGINEERING_PROJECTS } = portfolio;
  const project = FEATURED_ENGINEERING_PROJECTS.find((item) => item.slug === slug);
  if (!project) return null;

  const links = [
    project.github && { label: ui.projectTerminal.linkLabels.github, href: project.github },
    project.publication && { label: ui.projectTerminal.linkLabels.paper, href: project.publication },
    project.demo && { label: ui.projectTerminal.linkLabels.demo, href: project.demo },
    project.video && { label: ui.projectTerminal.linkLabels.video, href: project.video },
    ...(project.reports?.map((report) => ({ label: report.label.toUpperCase(), href: report.url })) ?? []),
  ].filter(Boolean) as { label: string; href: string }[];

  const technicalIndex = [
    project.methods.length && `${ui.projectTerminal.methods}: ${project.methods.join(' · ')}`,
    project.models.length && `${ui.projectTerminal.models}: ${project.models.join(' · ')}`,
    project.datasets.length && `${ui.projectTerminal.data}: ${project.datasets.join(' · ')}`,
    project.technologies.length && `${ui.projectTerminal.technologies}: ${project.technologies.join(' · ')}`,
  ].filter(Boolean) as string[];

  const steps = [
    {
      command: ui.projectTerminal.commands.overview,
      label: ui.projectTerminal.steps.overview,
      lines: [project.overview],
    },
    {
      command: ui.projectTerminal.commands.problem,
      label: ui.projectTerminal.steps.problem,
      lines: [project.problem],
    },
    {
      command: ui.projectTerminal.commands.approach,
      label: ui.projectTerminal.steps.approach,
      lines: [project.approach],
    },
    {
      command: ui.projectTerminal.commands.architecture,
      label: ui.projectTerminal.steps.architecture,
      lines: project.architecture.map((stage) => `${stage.name}: ${stage.description}. ${stage.detail}`),
    },
    {
      command: ui.projectTerminal.commands.implementation,
      label: ui.projectTerminal.steps.implementation,
      lines: project.implementation,
    },
    ...(project.metrics?.length
      ? [
          {
            command: ui.projectTerminal.commands.metrics,
            label: ui.projectTerminal.steps.metrics,
            lines: project.metrics.map(
              (metric) => `${metric.label}: ${metric.value}${metric.sub ? ` — ${metric.sub}` : ''}`,
            ),
          },
        ]
      : []),
    ...(project.results?.length
      ? [
          {
            command: ui.projectTerminal.commands.results,
            label: ui.projectTerminal.steps.results,
            lines: project.results,
          },
        ]
      : []),
    ...(project.limitations?.length
      ? [
          {
            command: ui.projectTerminal.commands.limitations,
            label: ui.projectTerminal.steps.limitations,
            lines: project.limitations,
          },
        ]
      : []),
    ...(project.futureWork?.length
      ? [
          {
            command: ui.projectTerminal.commands.futureWork,
            label: ui.projectTerminal.steps.futureWork,
            lines: project.futureWork,
          },
        ]
      : []),
    {
      command: ui.projectTerminal.commands.technicalIndex,
      label: ui.projectTerminal.steps.technicalIndex,
      lines: technicalIndex,
    },
  ];

  return (
    <article className="page project-case-study">
      <Link href="/archive" className="text-link">
        {ui.archive.backLink}
      </Link>
      <ProjectTerminalDive
        title={project.title}
        meta={[ui.projectTerminal.meta.project + ' ' + project.number, project.year, project.category]
          .filter(Boolean)
          .join(' / ')}
        summary={project.purpose}
        steps={steps}
        links={links.map((link) => ({ ...link, href: withBasePath(link.href) }))}
        active={false}
      />
    </article>
  );
}
