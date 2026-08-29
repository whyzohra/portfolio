'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectImage } from '@/lib/projectImages';

const filterMatchers: Record<string, RegExp> = {
  'Full-Stack': /full-stack|meeting|ai application/i,
  'Data / ML': /data|ml|traffic|prediction/i,
  Backend: /backend|api|rest/i,
};

const belongsTo = (title: string, domain: string, group: string, allLabel: string) => {
  if (group === allLabel) return true;
  const value = `${title} ${domain}`.toLowerCase();
  const matcher = filterMatchers[group];
  return matcher ? matcher.test(value) : true;
};

export function ProjectArchive({ label }: { label?: string }) {
  const { ui, portfolio } = useLanguage();
  const { SECONDARY_PROJECT_ARCHIVE, withBasePath } = portfolio;
  const groups = ui.projectArchive.filters;
  const [group, setGroup] = useState<(typeof groups)[number]>(groups[0]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);

  const projects = useMemo(
    () =>
      SECONDARY_PROJECT_ARCHIVE.filter(
        (project) =>
          belongsTo(project.title, project.domain, group, groups[0]) &&
          `${project.title} ${project.domain} ${project.technologies.join(' ')}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [SECONDARY_PROJECT_ARCHIVE, group, groups, query],
  );
  const active = projects[Math.min(selected, Math.max(0, projects.length - 1))];
  const archiveLabel = label ?? ui.projectArchive.defaultLabel;

  return (
    <section className="project-console section rule">
      <div className="project-console__heading">
        <div>
          <p className="eyebrow">
            {archiveLabel} / {SECONDARY_PROJECT_ARCHIVE.length} {ui.projectArchive.verifiedBuilds}
          </p>
          <h2 className="section-title mt-4">{ui.projectArchive.title}</h2>
        </div>
        <label>
          <span className="sr-only">{ui.projectArchive.searchAria}</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            placeholder={ui.projectArchive.searchPlaceholder}
          />
        </label>
      </div>
      <div className="project-console__filters" role="group" aria-label={ui.projectArchive.filtersAria}>
        {groups.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={group === item}
            onClick={() => {
              setGroup(item);
              setSelected(0);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      {active ? (
        <div className="project-console__body">
          <div className="project-console__list" role="listbox" aria-label={ui.projectArchive.listAria}>
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                role="option"
                aria-selected={active.slug === project.slug}
                onClick={() => setSelected(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.title}</strong>
                <small>{project.domain}</small>
                <b>↗</b>
              </button>
            ))}
          </div>
          <article className="project-console__preview">
            <div className="project-console__image">
              <Image
                key={active.slug}
                src={projectImage(active.slug)}
                alt={`${ui.projectArchive.projectVisual} ${active.title}`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <div className="project-console__meta">
              <p className="eyebrow">
                {ui.projectArchive.selectedOutput} / {active.domain}
              </p>
              <h3>{active.title}</h3>
              <div>
                {active.technologies.map((technology) => (
                  <span key={technology} className="ltr-content">
                    {technology}
                  </span>
                ))}
              </div>
              <p>{active.summary}</p>
              <footer>
                <Link href={`/archive/${active.slug}`}>{ui.projectArchive.openDeepDive}</Link>
                {active.github && (
                  <a href={active.github} target="_blank" rel="noopener noreferrer" className="ltr-content">
                    {ui.projectArchive.sourceCode}
                  </a>
                )}
                {active.report && (
                  <a href={withBasePath(active.report.url)} className="ltr-content">
                    {ui.projectArchive.readReport} {active.report.label.toUpperCase()} ↗
                  </a>
                )}
              </footer>
            </div>
          </article>
        </div>
      ) : (
        <p className="project-console__empty">{ui.projectArchive.empty}</p>
      )}
    </section>
  );
}
