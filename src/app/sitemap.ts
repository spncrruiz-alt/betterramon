import type { MetadataRoute } from 'next';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ path: '/', ready: true }, ...pages]
    .filter((p) => p.ready)
    .map((p) => ({
      url: `${lgu.site}${p.path === '/' ? '' : p.path}`,
      changeFrequency: 'monthly',
    }));
}
