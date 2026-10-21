import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import BusinessGuide from '@/app/services/business/guide';

const page = pageFor('/service-details/business-permits-licensing', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function BusinessPermitsPage() {
  return (
    <PageShell page={page}>
      <BusinessGuide />
    </PageShell>
  );
}
