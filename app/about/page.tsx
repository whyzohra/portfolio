'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useState } from 'react';

import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  LEADERSHIP,
  SITE_CONFIG,
} from '@/data/portfolioData';

const chapters = [
  {
    label: 'Engineer',
    title: 'Built to scale and endure.',
    body: 'I am Zohra Ahmad, a Software Engineer focused on building systems that scale, work reliably and solve real problems. My work spans backend engineering, distributed systems, cloud infrastructure, AI and cybersecurity.',
    meta: 'SOFTWARE ENGINEER / BACKEND / CLOUD',
  },
  {
    label: 'Education',
    title: 'Computer science met engineering.',
    body: 'I earned a B.Tech in Computer Science and Engineering from the Indian Institute of Information Technology, Sonepat (IIIT Sonepat), graduating in July 2026 with a CGPA of 7.9/10. Coursework covered OOP, data structures and algorithms, databases, computer networks and software engineering.',
    meta: 'B.TECH / CSE / IIIT SONEPAT',
  },
  {
    label: 'Practice',
    title: 'Production-oriented engineering.',
    body: 'From Amazon serverless backends to CRM APIs at 90ways, I build backend services, event-driven workflows and cloud-based systems with testing, monitoring and operational discipline.',
    meta: 'BACKEND / DISTRIBUTED SYSTEMS / AWS',
  },
  {
    label: 'Interests',
    title: 'Reliable systems with depth.',
    body: 'I work across software engineering, backend development, distributed systems, cloud infrastructure, AI and cybersecurity — applying each as a technical area supported by projects, skills and certifications, not as inflated job titles.',
    meta: 'AI / CYBERSECURITY / SOFTWARE ENGINEERING',
  },
] as const;

const interests = [
  ['01', 'Backend engineering', 'Java, Python, Spring Boot, REST APIs and production backend services.'],
  ['02', 'Distributed systems', 'Event-driven workflows, scalable services and reliable system design.'],
  ['03', 'Cloud & AWS', 'Lambda, EventBridge, S3, Glue, CloudWatch and DynamoDB.'],
  ['04', 'AI', 'OpenAI API, PyTorch, information retrieval and AI-assisted development.'],
  ['05', 'Cybersecurity', 'Secure systems, networking fundamentals and security training.'],
  ['06', 'Software engineering', 'OOP, SOLID, design patterns, DSA, testing, CI/CD and Git.'],
] as const;

export default function AboutPage() {
  const [chapter, setChapter] = useState(0);
  const item = chapters[chapter];

  return (
    <article className="page about-engineer">
      <header className="about-engineer__hero">
        <div>
          <p className="eyebrow">ABOUT / ENGINEER PROFILE</p>
          <h1>
            Systems that
            <br />
            scale &amp; endure.
          </h1>
          <p>
            Software systems built to scale, work reliably and solve real problems. I am a Software
            Engineer with a B.Tech in Computer Science and Engineering from IIIT Sonepat, working
            across backend engineering, distributed systems, cloud infrastructure, AI and
            cybersecurity.
          </p>
        </div>
        <figure>
          <Image
            src={SITE_CONFIG.portrait!}
            alt="Zohra Ahmad"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 42vw"
          />
          <span>ZOHRA_AHMAD.JPG / VERIFIED</span>
        </figure>
      </header>

      <section className="about-console">
        <nav aria-label="About chapters">
          {chapters.map((entry, index) => (
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
          <p className="eyebrow">PROFILE NODE / {item.label.toUpperCase()}</p>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          {item.label === 'Interests' && (
            <div className="about-console__interests">
              {interests.map(([number, title, detail]) => (
                <div key={title}>
                  <span>{number}</span>
                  <b>{title}</b>
                  <small>{detail}</small>
                </div>
              ))}
            </div>
          )}
          <footer>{item.meta}</footer>
        </article>
      </section>

      <section className="about-snapshot">
        <div>
          <p className="eyebrow">EXPERIENCE</p>
          {EXPERIENCE.map((item) => (
            <article key={item.id}>
              <span>{item.period}</span>
              <h3>{item.organization}</h3>
              <p>{item.role}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="eyebrow">EDUCATION</p>
          {EDUCATION.map((item) => (
            <article key={item.degree}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>
                {item.institution} / {item.grade}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-snapshot">
        <div>
          <p className="eyebrow">LEADERSHIP &amp; CAMPUS INVOLVEMENT</p>
          {LEADERSHIP.map((item) => (
            <article key={`${item.title}-${item.organization}`}>
              <h3>{item.title}</h3>
              <p>{item.organization}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="eyebrow">ACHIEVEMENTS</p>
          {ACHIEVEMENTS.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-snapshot">
        <div>
          <p className="eyebrow">CERTIFICATIONS</p>
          {CERTIFICATIONS.slice(0, 4).map((item) => (
            <article key={item.title}>
              <span>{item.issued || '—'}</span>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </article>
          ))}
          <Link href="/cv" className="text-link mt-4 inline-block">
            VIEW ALL CERTIFICATIONS ↗
          </Link>
        </div>
      </section>

      <section className="about-next">
        <Link href="/contact">CONTACT ZOHRA ↗</Link>
      </section>
    </article>
  );
}
