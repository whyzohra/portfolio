'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkPage() {
  const { ui, portfolio } = useLanguage();
  const { ADDITIONAL_EXPERIENCE, EDUCATION, EXPERIENCE } = portfolio;
  const [activeRole, setActiveRole] = useState(0);
  const roles = [...EXPERIENCE, ...ADDITIONAL_EXPERIENCE];
  const active = roles[activeRole] || roles[0];
  const responsibilities = active ? (active.responsibilities ?? active.focus ?? []) : [];
  const projectLinks = active ? (active.projectLinks ?? active.links ?? []) : [];

  return (
    <div className="page experience-page">
      <header className="section !pt-0">
        <p className="eyebrow">{ui.work.eyebrow}</p>
        <h1 className="display mt-10">
          {ui.work.titleLine1}
          <br />
          {ui.work.titleLine2}
          <br />
          {ui.work.titleLine3}
        </h1>
        <p className="lede mt-8">{ui.work.lede}</p>
        {ui.work.supportingStatement && (
          <div className="mt-8 border-t border-[var(--border-subtle)] pt-6">
            <h2 className="font-mono text-sm tracking-wider uppercase text-[var(--accent-color)]">
              {ui.work.supportingStatement}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              {ui.work.supportingDescription}
            </p>
          </div>
        )}
      </header>
      <section className="experience-console">
        <nav aria-label={ui.work.rolesAria}>
          {roles.map((role, index) => (
            <button
              key={role.id}
              type="button"
              className={role.primary ? 'is-current' : ''}
              aria-pressed={activeRole === index}
              onClick={() => setActiveRole(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{role.role || role.title || role.program}</b>
              <small>{role.organization}</small>
              <em className="ltr-content">
                {role.primary ? ui.work.current : (role.period || role.dates)}
              </em>
            </button>
          ))}
        </nav>
        {active && (
          <article key={active.id}>
            <header>
              <p className="eyebrow">
                {ui.work.role} / {String(activeRole + 1).padStart(2, '0')}
              </p>
              <div>
                {active.primary && <b>{ui.work.currentPosition}</b>}
                <span className="ltr-content">{active.period || active.dates}</span>
              </div>
            </header>
            <h2>{active.role || active.title || active.program}</h2>
            <h3>{active.organization}</h3>
            {active.affiliation && (
              <p className="experience-affiliation font-mono text-xs text-[var(--accent-color)] mt-2">
                <span className="text-[var(--text-muted)]">{ui.work.affiliation}: </span>
                {active.affiliation}
              </p>
            )}
            {active.location && <p>{active.location}</p>}
            {(active.description || active.summary) && (
              <p className="experience-role-summary">{active.description || active.summary}</p>
            )}
            {responsibilities.length > 0 && (
              <div>
                {responsibilities.map((item, index) => (
                  <section key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </section>
                ))}
              </div>
            )}
            {projectLinks.length > 0 && (
              <footer className="experience-project-links mt-6">
                <p className="eyebrow mb-2">{ui.work.projectLinks}</p>
                <div className="flex flex-col gap-2">
                  {projectLinks.map((link) => {
                    const isExternal =
                      link.url.startsWith('http://') || link.url.startsWith('https://');
                    return isExternal ? (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-art-link flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span aria-hidden="true" className="ltr-content">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        key={link.url}
                        href={link.url}
                        className="experience-art-link flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span aria-hidden="true" className="ltr-content">
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </footer>
            )}
          </article>
        )}
      </section>
      <section className="experience-summary">
        <div>
          <p className="eyebrow">{ui.work.capabilityEyebrow}</p>
          <h2>
            {ui.work.capabilityTitleLine1}
            <br />
            {ui.work.capabilityTitleLine2}
            <br />
            {ui.work.capabilityTitleLine3}
          </h2>
        </div>
        <div>
          {ui.work.capabilityItems.map((item, index) => (
            <p key={item}>
              <span>0{index + 1}</span>
              {item}
            </p>
          ))}
        </div>
      </section>
      <section className="experience-education">
        <header>
          <p className="eyebrow">{ui.work.educationEyebrow}</p>
          <Link href="/cv">{ui.work.fullCv}</Link>
        </header>
        <div className="education-table-wrap">
          <table>
            <thead>
              <tr>
                <th>{ui.work.period}</th>
                <th>{ui.work.qualification}</th>
                <th>{ui.work.institution}</th>
                <th>{ui.work.result}</th>
              </tr>
            </thead>
            <tbody>
              {EDUCATION.map((item) => (
                <tr key={item.degree}>
                  <td data-label={ui.work.period} className="ltr-content">
                    {item.period}
                  </td>
                  <th scope="row" data-label={ui.work.qualification}>
                    {item.degree}
                  </th>
                  <td data-label={ui.work.institution} className="ltr-content">
                    {item.institution}
                  </td>
                  <td data-label={ui.work.result} className="ltr-content">
                    {item.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="engineer-cta">
        <p>{ui.work.cta}</p>
        <Link href="/archive">{ui.work.openProjects}</Link>
      </section>
    </div>
  );
}
