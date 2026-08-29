'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { ui, portfolio } = useLanguage();
  const { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION, EXPERIENCE, LEADERSHIP, SITE_CONFIG } = portfolio;
  const [chapter, setChapter] = useState(0);
  const item = ui.about.chapters[chapter];

  return (
    <article className="page about-engineer">
      <header className="about-engineer__hero">
        <div>
          <p className="eyebrow">{ui.about.eyebrow}</p>
          <h1>
            {ui.about.titleLine1}
            <br />
            {ui.about.titleLine2}
          </h1>
          <p>{ui.about.heroDescription}</p>
        </div>
        <figure>
          <Image
            src={SITE_CONFIG.portrait!}
            alt={ui.about.portraitAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 42vw"
          />
          <span className="ltr-content">{ui.about.portraitCaption}</span>
        </figure>
      </header>

      <section className="about-console">
        <nav aria-label={ui.about.chaptersAria}>
          {ui.about.chapters.map((entry, index) => (
            <button
              key={entry.label}
              type="button"
              aria-pressed={chapter === index}
              onClick={() => setChapter(index)}
            >
              <span>0{index + 1}</span>
              {entry.label}
            </button>
          ))}
        </nav>
        <article key={item.label}>
          <p className="eyebrow">
            {ui.about.profileNode} / {item.label.toUpperCase()}
          </p>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          {chapter === 3 && (
            <div className="about-console__interests">
              {ui.about.interests.map(([title, detail], index) => (
                <div key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <b>{title}</b>
                  <small>{detail}</small>
                </div>
              ))}
            </div>
          )}
          <footer className="ltr-content">{item.meta}</footer>
        </article>
      </section>

      <section className="about-snapshot">
        <div>
          <p className="eyebrow">{ui.about.experience}</p>
          {EXPERIENCE.map((exp) => (
            <article key={exp.id}>
              <span className="ltr-content">{exp.period}</span>
              <h3>{exp.organization}</h3>
              <p>{exp.role}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="eyebrow">{ui.about.education}</p>
          {EDUCATION.map((edu) => (
            <article key={edu.degree}>
              <span className="ltr-content">{edu.period}</span>
              <h3>{edu.degree}</h3>
              <p className="ltr-content">
                {edu.institution} / {edu.grade}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-snapshot">
        <div>
          <p className="eyebrow">{ui.about.leadership}</p>
          {LEADERSHIP.map((role) => (
            <article key={`${role.title}-${role.organization}`}>
              <h3>{role.title}</h3>
              <p className="ltr-content">{role.organization}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="eyebrow">{ui.about.achievements}</p>
          {ACHIEVEMENTS.map((achievement) => (
            <article key={achievement.title}>
              <h3>{achievement.title}</h3>
              <p>{achievement.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-snapshot">
        <div>
          <p className="eyebrow">{ui.about.certifications}</p>
          {CERTIFICATIONS.slice(0, 4).map((cert) => (
            <article key={cert.title}>
              <span className="ltr-content">{cert.issued || '—'}</span>
              <h3 className="ltr-content">{cert.title}</h3>
              <p className="ltr-content">{cert.issuer}</p>
            </article>
          ))}
          <Link href="/cv" className="text-link mt-4 inline-block">
            {ui.about.viewAllCertifications}
          </Link>
        </div>
      </section>

      <section className="about-next">
        <Link href="/contact">{ui.about.contactCta}</Link>
      </section>
    </article>
  );
}
