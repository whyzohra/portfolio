import NextImage, { type ImageProps } from 'next/image';
import { withBasePath } from '@/data/portfolioData';

export default function BasePathImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? withBasePath(src) : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
