'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WorkPage() {
  const { ui, portfolio } = useLanguage();
  const { ADDITIONAL_EXPERIENCE, EDUCATION, EXPERIENCE } = portfolio;
  const [activeRole, setActiveRole] = useState(0);
  const roles = [...EXPERIENCE, ...ADDITIONAL_EXPERIENCE];
  const active = roles[activeRole];

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
              <b>{role.role}</b>
              <small>{role.organization}</small>
              <em className="ltr-content">{role.primary ? ui.work.current : role.period}</em>
            </button>
          ))}
        </nav>
        <article key={active.id}>
          <header>
            <p className="eyebrow">
              {ui.work.role} / {String(activeRole + 1).padStart(2, '0')}
            </p>
            <div>
              {active.primary && <b>{ui.work.currentPosition}</b>}
              <span className="ltr-content">{active.period}</span>
            </div>
          </header>
          <h2>{active.role}</h2>
          <h3>{active.organization}</h3>
          <p>{active.location}</p>
          {active.summary && <p className="experience-role-summary">{active.summary}</p>}
          <div>
            {active.focus.map((item, index) => (
              <section key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </section>
            ))}
          </div>
        </article>
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
