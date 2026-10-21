import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';

const page = pageFor('/services', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function ServicesPage() {
  const services = pages.filter((p) => p.path.startsWith('/services/'));
  return (
    <PageShell page={page}>
      <div className="grid grid-3">
        {services.map((s) => (
          <Link key={s.path} href={s.path} className="service-item-card">
            <h2 className="service-item-title">
              <i className={`bi ${s.icon}`} aria-hidden="true"></i> {s.title}
            </h2>
            <p>{s.desc}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
