import type { MetadataRoute } from 'next';
import { lgu } from '@/data/ramon';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${lgu.site}/sitemap.xml` };
}
