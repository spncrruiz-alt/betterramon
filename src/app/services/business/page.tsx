import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import BusinessGuide from './guide';

const page = pageFor('/services/business', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function BusinessPage() {
  return (
    <PageShell page={page}>
      <BusinessGuide />
    </PageShell>
  );
}
