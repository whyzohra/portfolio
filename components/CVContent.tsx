'use client';

import { useLanguage } from '@/context/LanguageContext';

export function CVContent({ hasPdf, pdfUrl }: { hasPdf: boolean; pdfUrl: string }) {
  const { ui, portfolio } = useLanguage();
  const {
    ACHIEVEMENTS,
    CERTIFICATIONS,
    EDUCATION,
    EXPERIENCE,
    FEATURED_ENGINEERING_PROJECTS,
    FULL_TECHNICAL_INDEX,
    LEADERSHIP,
    PERSONAL_INFO,
  } = portfolio;

  return (
    <article className="page max-w-5xl">
      <header className="section !pt-0 border-b border-[var(--border-strong)]">
        <p className="eyebrow">{ui.cv.eyebrow}</p>
        <h1 className="section-title mt-8">{PERSONAL_INFO.name}</h1>
        <p className="mt-5 font-mono text-xs ltr-content">{PERSONAL_INFO.taglineEngineerShort}</p>
        <p className="mt-2 font-mono text-xs">{PERSONAL_INFO.location}</p>
        {hasPdf && (
          <div className="mt-8 flex flex-wrap gap-6">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              {ui.cv.openCv}
            </a>
            <a href={pdfUrl} download="Zohra_Ahmad_CV.pdf" className="text-link">
              {ui.cv.downloadPdf}
            </a>
          </div>
        )}
      </header>
      <CVSection title={ui.cv.profile}>
        <p>{PERSONAL_INFO.positioning}</p>
      </CVSection>
      <CVSection title={ui.cv.experience}>
        {EXPERIENCE.map((e) => (
          <div key={e.id} className="border-t border-[var(--border-subtle)] py-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl">
                {e.role} : {e.organization}
              </h3>
              <span className="eyebrow ltr-content">{e.period}</span>
            </div>
            {e.location && <p className="eyebrow mt-2">{e.location}</p>}
            {e.summary && <p className="mt-4 text-sm text-[var(--text-muted)]">{e.summary}</p>}
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {e.focus.map((f) => (
                <li key={f}>: {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </CVSection>
      <CVSection title={ui.cv.education}>
        {EDUCATION.map((e) => (
          <div key={e.degree} className="border-t border-[var(--border-subtle)] py-6">
            <h3 className="text-xl">{e.degree}</h3>
            <p className="mt-2 text-sm ltr-content">
              {e.institution} · {e.period} · {e.grade}
            </p>
            {e.details && <p className="mt-2 text-sm text-[var(--text-muted)]">{e.details}</p>}
          </div>
        ))}
      </CVSection>
      <CVSection title={ui.cv.selectedProjects}>
        {FEATURED_ENGINEERING_PROJECTS.map((project) => (
          <div key={project.slug} className="border-t border-[var(--border-subtle)] py-5">
            <h3 className="text-lg">{project.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{project.purpose}</p>
          </div>
        ))}
      </CVSection>
      <CVSection title={ui.cv.leadership}>
        {LEADERSHIP.map((item) => (
          <p key={`${item.title}-${item.organization}`} className="border-t border-[var(--border-subtle)] py-4 text-sm">
            <strong>{item.title}</strong>
            <span className="text-[var(--text-muted)] ltr-content"> — {item.organization}</span>
          </p>
        ))}
      </CVSection>
      <CVSection title={ui.cv.achievements}>
        {ACHIEVEMENTS.map((item) => (
          <p key={item.title} className="border-t border-[var(--border-subtle)] py-4 text-sm">
            <strong>{item.title}:</strong>{' '}
            <span className="text-[var(--text-muted)]">{item.detail}</span>
          </p>
        ))}
      </CVSection>
      <CVSection title={ui.cv.technicalSkills}>
        {FULL_TECHNICAL_INDEX.map((s) => (
          <p key={s.category} className="border-t border-[var(--border-subtle)] py-4">
            <strong>{s.category}:</strong>{' '}
            <span className="text-[var(--text-muted)] ltr-content">{s.items.join(', ')}</span>
          </p>
        ))}
      </CVSection>
      <CVSection title={ui.cv.certifications}>
        {CERTIFICATIONS.map((c) => (
          <p key={c.title} className="border-t border-[var(--border-subtle)] py-4 ltr-content">
            {c.title} : <span className="text-[var(--text-muted)]">{c.issuer}</span>
            {c.issued ? ` · ${c.issued}` : ''}
            {c.credentialId ? ` · ${c.credentialId}` : ''}
          </p>
        ))}
      </CVSection>
    </article>
  );
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section grid gap-8 md:grid-cols-12">
      <h2 className="eyebrow md:col-span-3">{title}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}
