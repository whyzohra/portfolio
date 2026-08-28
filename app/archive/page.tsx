import { ProjectArchive } from '@/components/ProjectArchive';

export default function ArchivePage() {
  return <main className="page archive-page">
    <header className="section !pt-0"><p className="eyebrow">ENGINEERING / PROJECTS</p><h1 className="display mt-10">Built,<br/>tested, documented.</h1><p className="lede mt-8">Backend systems, cloud infrastructure, distributed workflows and engineering projects across software development practice.</p></header>
    <ProjectArchive label="COMPLETE PROJECT INDEX" />
  </main>;
}
