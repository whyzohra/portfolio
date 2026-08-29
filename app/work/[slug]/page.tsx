import { notFound } from 'next/navigation';
import { FEATURED_ENGINEERING_PROJECTS } from '@/data/portfolioData';
import { FeaturedProjectCaseStudy } from '@/components/FeaturedProjectCaseStudy';

export function generateStaticParams() {
  return FEATURED_ENGINEERING_PROJECTS.map(({ slug }) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!FEATURED_ENGINEERING_PROJECTS.find((p) => p.slug === params.slug)) notFound();
  return <FeaturedProjectCaseStudy slug={params.slug} />;
}
