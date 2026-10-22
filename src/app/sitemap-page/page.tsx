import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { pagesI18n } from '@/data/pages-i18n';
import L from '@/components/L';
import BarangayMap from '@/components/BarangayMap';

const page = pageFor('/sitemap-page', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function SitemapPage() {
  return (
    <PageShell page={page}>
      <h2>
        <L en="Map of Ramon" fil="Mapa ng Ramon" ilo="Mapa ti Ramon" />
      </h2>
      <BarangayMap />
      <h2>
        <L en="All pages" fil="Lahat ng pahina" ilo="Amin a panid" />
      </h2>
      <ul>
        <li>
          <Link href="/">
            <L en="Home" fil="Home" ilo="Balay" />
          </Link>
        </li>
        {pages.map((p) => (
          <li key={p.path}>
            <Link href={p.path}>
              <L en={p.title} fil={pagesI18n[p.path]?.fil[0]} ilo={pagesI18n[p.path]?.ilo[0]} />
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
