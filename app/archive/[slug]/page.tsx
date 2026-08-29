import { notFound } from 'next/navigation';
import { SECONDARY_PROJECT_ARCHIVE } from '@/data/portfolioData';
import { ArchiveProjectCaseStudy } from '@/components/ArchiveProjectCaseStudy';

export function generateStaticParams() {
  return SECONDARY_PROJECT_ARCHIVE.map((project) => ({ slug: project.slug }));
}

export default function ArchiveProjectPage({ params }: { params: { slug: string } }) {
  if (!SECONDARY_PROJECT_ARCHIVE.find((item) => item.slug === params.slug)) notFound();
  return <ArchiveProjectCaseStudy slug={params.slug} />;
}
