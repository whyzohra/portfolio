'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function EngineerIndex() {
  const { ui, portfolio } = useLanguage();
  const { EXPERIENCE, FEATURED_ENGINEERING_PROJECTS, SITE_CONFIG } = portfolio;
  const [selected, setSelected] = useState(0);
  const projects = FEATURED_ENGINEERING_PROJECTS;
  const project = projects[selected];
  const current = EXPERIENCE.slice(0, 3);
  const visual = project.visuals?.[0]?.src ?? '/projects/archive/mlloopoptselector.jpg';
  const routes = ui.engineerIndex.navigate.routes.map((route, index) => ({
    ...route,
    key: ['work', 'archive', 'skills', 'about', 'cv', 'contact'][index],
    href: ['/work', '/archive', '/skills', '/about', '/cv', '/contact'][index],
  }));

  return (
    <div className="engineer-index">
      <section className="engineer-index__now">
        <div>
          <p className="eyebrow">{ui.engineerIndex.technicalFocus.eyebrow}</p>
          <h2>
            {ui.engineerIndex.technicalFocus.titleLine1}
            <br />
            {ui.engineerIndex.technicalFocus.titleLine2}
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
            {ui.engineerIndex.technicalFocus.description}
          </p>
        </div>
        <div className="implementation-list" aria-label={ui.engineerIndex.technicalFocus.capabilitiesAria}>
          {ui.engineerIndex.capabilities.map(([label, detail], index) => (
            <article key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="engineer-index__now">
        <div>
          <p className="eyebrow">{ui.engineerIndex.experience.eyebrow}</p>
          <h2>
            {ui.engineerIndex.experience.titleLine1}
            <br />
            {ui.engineerIndex.experience.titleLine2}
            <br />
            {ui.engineerIndex.experience.titleLine3}
          </h2>
        </div>
        <div className="now-grid">
          {current.map((item) => (
            <article key={item.id}>
              <span className="ltr-content">{item.period}</span>
              <h3>{item.organization}</h3>
              <p>{item.role}</p>
              {item.location && <small>{item.location}</small>}
              {item.summary && <small>{item.summary}</small>}
            </article>
          ))}
        </div>
      </section>

      <section className="project-switcher">
        <header>
          <p className="eyebrow">{ui.engineerIndex.projects.eyebrow}</p>
          <span className="ltr-content">
            {String(selected + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </header>
        <div className="project-switcher__body">
          <nav aria-label={ui.engineerIndex.projects.selectAria}>
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                <span>{item.number}</span>
                <b>{item.title}</b>
              </button>
            ))}
          </nav>
          <article key={project.id}>
            <div className="project-switcher__visual">
              <Image src={visual} alt="" fill sizes="(max-width: 760px) 100vw, 55vw" />
            </div>
            <div className="project-switcher__copy">
              <p className="eyebrow">{project.category}</p>
              <h2>{project.title}</h2>
              <p>{project.purpose}</p>
              <div>
                {project.technologies.slice(0, 6).map((item) => (
                  <span key={item} className="ltr-content">
                    {item}
                  </span>
                ))}
              </div>
              <Link href={`/work/${project.slug}`}>
                {ui.engineerIndex.projects.openCaseStudy} <b>↗</b>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="route-panel">
        <p className="eyebrow">{ui.engineerIndex.navigate.eyebrow}</p>
        <div>
          {routes.map((route) => (
            <Link href={route.href} key={route.key}>
              <span className="ltr-content">{route.command}</span>
              <h3>{route.label}</h3>
              <p>{route.note}</p>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="engineer-cta">
        <p>{ui.engineerIndex.cta.text}</p>
        <a href={`mailto:${SITE_CONFIG.email}`} className="ltr-content">
          {ui.engineerIndex.cta.button}
        </a>
      </section>
    </div>
  );
}
