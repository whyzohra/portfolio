'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function NotesPage() {
  const { ui, portfolio } = useLanguage();
  const { NOTE_ARTICLES } = portfolio;

  return (
    <div className="page">
      <header className="section !pt-0">
        <p className="eyebrow">{ui.notes.eyebrow}</p>
        <h1 className="display mt-12">{ui.notes.title}</h1>
        <p className="lede mt-12">{ui.notes.lede}</p>
      </header>
      <section className="section rule">
        {NOTE_ARTICLES.map((note, index) => (
          <article key={note.title} className="grid gap-4 border-t border-[var(--border-subtle)] py-8 md:grid-cols-12">
            <span className="eyebrow md:col-span-2">{String(index + 1).padStart(2, '0')}</span>
            <h2 className="text-2xl md:col-span-8">{note.title}</h2>
            <span className="eyebrow md:col-span-2 ltr-content">{note.date}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
