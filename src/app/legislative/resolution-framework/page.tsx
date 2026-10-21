import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import LegislativeGuide from '@/app/legislative/guide';

const page = pageFor('/legislative/resolution-framework', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function ResolutionsPage() {
  return (
    <PageShell page={page}>
      <LegislativeGuide />
    </PageShell>
  );
}
