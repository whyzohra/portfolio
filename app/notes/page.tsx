import { NOTE_ARTICLES } from '@/data/portfolioData';

export default function NotesPage() {
  return (
    <div className="page">
      <header className="section !pt-0"><p className="eyebrow">NOTES / ARTICLE INDEX</p><h1 className="display mt-12">Notes.</h1><p className="lede mt-12">Writing on AI, research, systems and learning.</p></header>
      <section className="section rule">{NOTE_ARTICLES.map((note,index)=><article key={note.title} className="grid gap-4 border-t border-[var(--border-subtle)] py-8 md:grid-cols-12"><span className="eyebrow md:col-span-2">{String(index+1).padStart(2,'0')}</span><h2 className="text-2xl md:col-span-8">{note.title}</h2><span className="eyebrow md:col-span-2">{note.date}</span></article>)}</section>
    </div>
  );
}
