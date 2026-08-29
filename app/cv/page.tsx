import fs from 'node:fs';
import path from 'node:path';
import { withBasePath } from '@/data/portfolioData';
import { CVContent } from '@/components/CVContent';

export default function CVPage() {
  const hasPdf = fs.existsSync(path.join(process.cwd(), 'public/documents/Zohra_Ahmad_CV.pdf'));
  const pdfUrl = withBasePath('/documents/Zohra_Ahmad_CV.pdf');
  return <CVContent hasPdf={hasPdf} pdfUrl={pdfUrl} />;
}
