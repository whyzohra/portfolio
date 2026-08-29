'use client';

import { ProjectArchive } from '@/components/ProjectArchive';
import { useLanguage } from '@/context/LanguageContext';

export default function ArchivePage() {
  const { ui } = useLanguage();

  return (
    <main className="page archive-page">
      <header className="section !pt-0">
        <p className="eyebrow">{ui.archive.eyebrow}</p>
        <h1 className="display mt-10">
          {ui.archive.titleLine1}
          <br />
          {ui.archive.titleLine2}
        </h1>
        <p className="lede mt-8">{ui.archive.lede}</p>
      </header>
      <ProjectArchive label={ui.archive.label} />
    </main>
  );
}
