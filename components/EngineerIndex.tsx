'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useState } from 'react';
import { EXPERIENCE, FEATURED_ENGINEERING_PROJECTS, SITE_CONFIG } from '@/data/portfolioData';

const capabilities = [
  [
    '01',
    'BACKEND ENGINEERING',
    'Java, Python, Spring Boot, REST APIs, backend services and production software.',
  ],
  [
    '02',
    'DISTRIBUTED SYSTEMS',
    'Event-driven systems, asynchronous workflows, scalable services, reliability and system design.',
  ],
  [
    '03',
    'CLOUD & AWS',
    'AWS Lambda, EventBridge, S3, Glue, CloudWatch and DynamoDB.',
  ],
  [
    '04',
    'AI & INTELLIGENT SYSTEMS',
    'OpenAI API, PyTorch, AI-powered applications, information retrieval and AI-assisted development.',
  ],
  [
    '05',
    'CYBERSECURITY',
    'Cybersecurity fundamentals, secure systems, networking, privacy and cybersecurity training.',
  ],
  [
    '06',
    'DATA & DATABASES',
    'SQL, PostgreSQL, MySQL, RDBMS, query optimization and data processing.',
  ],
  [
    '07',
    'SOFTWARE ENGINEERING',
    'OOP, SOLID, MVC, design patterns, DSA, system design, REST APIs, testing, CI/CD and Git/GitHub.',
  ],
] as const;

const routes = [
  { key: 'work', label: 'Experience', href: '/work', command: 'cat ./experience', note: 'Amazon · 90ways · IHFC' },
  { key: 'archive', label: 'Projects', href: '/archive', command: 'ls ./projects', note: 'MeetMind · Atlas' },
  { key: 'skills', label: 'Skills', href: '/skills', command: 'cat ./skills', note: 'Technical index' },
  { key: 'about', label: 'About', href: '/about', command: 'cat ./about', note: 'Profile + education' },
  { key: 'cv', label: 'CV', href: '/cv', command: 'view ./cv', note: 'Curriculum vitae' },
  { key: 'contact', label: 'Contact', href: '/contact', command: 'open ./contact', note: 'Correspondence' },
] as const;

export function EngineerIndex() {
  const [selected, setSelected] = useState(0);
  const projects = FEATURED_ENGINEERING_PROJECTS;
  const project = projects[selected];
  const current = EXPERIENCE.slice(0, 3);
  const visual = project.visuals?.[0]?.src ?? '/projects/archive/mlloopoptselector.jpg';

  return (
    <div className="engineer-index">
      <section className="engineer-index__now">
        <div>
          <p className="eyebrow">01 / TECHNICAL FOCUS</p>
          <h2>
            Systems built
            <br />
            for the real world.
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
            Software systems built to scale, work reliably and solve real problems across backend
            engineering, cloud infrastructure, distributed systems, AI and cybersecurity.
          </p>
        </div>
        <div className="implementation-list" aria-label="Engineering capabilities">
          {capabilities.map(([number, label, detail]) => (
            <article key={label}>
              <span>{number}</span>
              <strong>{label}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="engineer-index__now">
        <div>
          <p className="eyebrow">02 / EXPERIENCE</p>
          <h2>
            Build.
            <br />
            Ship.
            <br />
            Operate.
          </h2>
        </div>
        <div className="now-grid">
          {current.map((item) => (
            <article key={item.id}>
              <span>{item.period}</span>
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
          <p className="eyebrow">03 / SELECTED SYSTEMS</p>
          <span>
            {String(selected + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </header>
        <div className="project-switcher__body">
          <nav aria-label="Select a featured project">
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
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Link href={`/work/${project.slug}`}>
                OPEN CASE STUDY <b>↗</b>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="route-panel">
        <p className="eyebrow">04 / NAVIGATE</p>
        <div>
          {routes.map((route) => (
            <Link href={route.href} key={route.key}>
              <span>{route.command}</span>
              <h3>{route.label}</h3>
              <p>{route.note}</p>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="engineer-cta">
        <p>
          Interested in backend engineering, distributed systems, cloud infrastructure, AI or reliable
          production software?
        </p>
        <a href={`mailto:${SITE_CONFIG.email}`}>START A CONVERSATION ↗</a>
      </section>
    </div>
  );
}
