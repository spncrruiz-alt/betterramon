import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';

// Placeholder for every linked page that has no content yet.
const pending = pages.filter((p) => !p.ready);

export const dynamicParams = false;

export function generateStaticParams() {
  return pending.map((p) => ({ slug: p.path.slice(1).split('/') }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageFor('/' + slug.join('/'), pending);
  return { title: page.title, description: page.desc };
}

export default async function ComingSoonPage({ params }: Props) {
  const { slug } = await params;
  const page = pageFor('/' + slug.join('/'), pending);
  return (
    <PageShell page={page}>
      <div className="service-item-card">
        <h2 className="service-item-title">
          <i className="bi bi-hourglass-split" aria-hidden="true"></i> Coming soon
        </h2>
        <p>
          We are still gathering verified, public information for this page. Want to help? Send
          sources or corrections through our{' '}
          <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
            GitHub issues
          </a>
          .
        </p>
        <p>
          <Link href="/sitemap-page">Browse all pages</Link>
        </p>
      </div>
    </PageShell>
  );
}
