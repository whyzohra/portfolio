'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArchiveProject } from '@/types/portfolio';
import { withBasePath } from '@/data/portfolioData';

type View = 'overview' | 'implementation' | 'evidence';

export function ArchiveDeepDive({ project }: { project: ArchiveProject }) {
  const [view, setView] = useState<View>('overview');
  const evidenceCount = Number(Boolean(project.github)) + Number(Boolean(project.report)) + Number(Boolean(project.video));

  return <>
    <section className="archive-detail__summary" aria-label="Project summary">
      <div><span>DOMAIN</span><b>{project.domain}</b></div>
      <div><span>STACK</span><b>{project.technologies.length} technologies</b></div>
      <div><span>BUILD RECORD</span><b>{project.implementation.length} implementation areas</b></div>
      <div><span>EVIDENCE</span><b>{evidenceCount ? `${evidenceCount} available link${evidenceCount === 1 ? '' : 's'}` : 'Private or in preparation'}</b></div>
    </section>

    <div className="archive-detail__tabs" role="tablist" aria-label="Deep dive sections">
      {(['overview','implementation','evidence'] as View[]).map((item,index) => <button key={item} type="button" role="tab" aria-selected={view === item} onClick={() => setView(item)}><span>{String(index + 1).padStart(2,'0')}</span>{item}</button>)}
    </div>

    <section className="archive-detail__panel" role="tabpanel">
      {view === 'overview' && <div className="archive-detail__overview"><div><p className="eyebrow">PROJECT OBJECTIVE</p><h2>What this project addresses.</h2></div><p>{project.summary}</p><div className="archive-detail__skills">{project.technologies.map(item => <span key={item}>{item}</span>)}</div></div>}
      {view === 'implementation' && <div className="archive-detail__build"><div><p className="eyebrow">IMPLEMENTATION RECORD</p><h2>What I designed and built.</h2><p>Select a row to focus it.</p></div><ol>{project.implementation.map((item,index) => <li key={item} tabIndex={0}><span>{String(index+1).padStart(2,'0')}</span><p>{item}</p><b>INSPECT</b></li>)}</ol></div>}
      {view === 'evidence' && <div className="archive-detail__evidence"><div><p className="eyebrow">AVAILABLE EVIDENCE</p><h2>Code, reports and demonstrations.</h2></div><div>{project.github && <a href={project.github} target="_blank" rel="noreferrer"><span>SOURCE</span><b>Open repository</b><i>↗</i></a>}{project.report && <a href={withBasePath(project.report.url)}><span>DOCUMENT</span><b>{project.report.label}</b><i>↗</i></a>}{project.video && <a href={project.video} target="_blank" rel="noreferrer"><span>DEMO</span><b>Watch project demo</b><i>↗</i></a>}{!evidenceCount && <p>Supporting material is private or being prepared for publication. The implementation record above documents the available technical scope.</p>}</div></div>}
    </section>

    <footer className="archive-detail__footer"><p>Continue through the complete engineering project collection.</p><Link href="/archive">VIEW ALL PROJECTS ↗</Link></footer>
  </>;
}
