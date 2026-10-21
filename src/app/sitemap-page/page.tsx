import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';

const page = pageFor('/sitemap-page', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function SitemapPage() {
  return (
    <PageShell page={page}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pages.map((p) => (
          <li key={p.path}>
            <Link href={p.path}>{p.title}</Link>
            {!p.ready && <small> (coming soon)</small>}
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
