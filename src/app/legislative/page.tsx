import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import LegislativeGuide from '@/app/legislative/guide';

const page = pageFor('/legislative', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function LegislativePage() {
  return (
    <PageShell page={page}>
      <LegislativeGuide />
    </PageShell>
  );
}
