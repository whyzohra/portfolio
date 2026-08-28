'use client';

import { Hero } from '@/components/Hero';
import { EngineerIndex } from '@/components/EngineerIndex';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="page !pt-0"><EngineerIndex /></div>
    </>
  );
}
