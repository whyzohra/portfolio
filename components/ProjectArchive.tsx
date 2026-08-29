'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { SECONDARY_PROJECT_ARCHIVE, withBasePath } from '@/data/portfolioData';
import { projectSlug } from '@/lib/projectSlug';
import { projectImage } from '@/lib/projectImages';

const groups = ['All', 'Full-Stack', 'Data / ML', 'Backend'] as const;

const belongsTo = (title: string, domain: string, group: (typeof groups)[number]) => {
  if (group === 'All') return true;
  const value = `${title} ${domain}`.toLowerCase();
  if (group === 'Full-Stack') return /full-stack|meeting|ai application/.test(value);
  if (group === 'Data / ML') return /data|ml|traffic|prediction/.test(value);
  if (group === 'Backend') return /backend|api|rest/.test(value);
  return true;
};

export function ProjectArchive({ label = 'PROJECT ARCHIVE' }: { label?: string }) {
  const [group, setGroup] = useState<(typeof groups)[number]>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const projects = useMemo(
    () =>
      SECONDARY_PROJECT_ARCHIVE.filter(
        (project) =>
          belongsTo(project.title, project.domain, group) &&
          `${project.title} ${project.domain} ${project.technologies.join(' ')}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [group, query],
  );
  const active = projects[Math.min(selected, Math.max(0, projects.length - 1))];

  return (
    <section className="project-console section rule">
      <div className="project-console__heading">
        <div>
          <p className="eyebrow">
            {label} / {SECONDARY_PROJECT_ARCHIVE.length} VERIFIED BUILDS
          </p>
          <h2 className="section-title mt-4">Project archive.</h2>
        </div>
        <label>
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            placeholder="search projects or tools…"
          />
        </label>
      </div>
      <div className="project-console__filters" role="group" aria-label="Project domain">
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
          <div className="project-console__list" role="listbox" aria-label="Projects">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                role="option"
                aria-selected={active.title === project.title}
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
                key={active.title}
                src={projectImage(active.title)}
                alt={`Project visual for ${active.title}`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <div className="project-console__meta">
              <p className="eyebrow">SELECTED OUTPUT / {active.domain}</p>
              <h3>{active.title}</h3>
              <div>
                {active.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <p>{active.summary}</p>
              <footer>
                <Link href={`/archive/${projectSlug(active.title)}`}>OPEN PROJECT DEEP DIVE ↗</Link>
                {active.github && (
                  <a href={active.github} target="_blank" rel="noopener noreferrer">
                    SOURCE CODE ↗
                  </a>
                )}
                {active.report && (
                  <a href={withBasePath(active.report.url)}>
                    READ {active.report.label.toUpperCase()} ↗
                  </a>
                )}
              </footer>
            </div>
          </article>
        </div>
      ) : (
        <p className="project-console__empty">No projects match this command.</p>
      )}
    </section>
  );
}
