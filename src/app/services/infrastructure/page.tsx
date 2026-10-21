import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice, Sources } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/infrastructure', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function InfrastructureGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Local roads, drainage and public buildings are handled by the Municipal Engineering Office.
      </GuideNotice>

      <h2>Building or renovating?</h2>
      <p>
        You need a building permit before work starts and a certificate of occupancy before you use
        the building. See the{' '}
        <Link href="/services/building-permits">building and occupancy permit guide</Link>.
      </p>

      <h2>Report a road, drainage or streetlight problem</h2>
      <ul>
        <li>Barangay roads and drainage: report to your barangay hall first.</li>
        <li>
          Municipal roads, bridges and public buildings: report to the Municipal Engineering Office.
        </li>
        <li>National roads: report to the DPWH district engineering office covering Ramon.</li>
        <li>Include the exact location, a photo and the date you noticed the problem.</li>
      </ul>

      <h2>Know your public works projects</h2>
      <p>
        Government projects must post a project billboard on site showing the project name, cost,
        contractor, source of funds and contract period. If a project looks unfinished, poor or
        missing, you can report it to the implementing office or through the national Sumbong sa
        Pangulo portal for flood control projects.
      </p>
      <p>A list of public works projects in Ramon: {TBV}.</p>

      <Sources
        items={[
          { label: 'National Building Code of the Philippines (PD 1096)' },
          {
            label: 'Government Procurement Reform Act (RA 9184) and its IRR on project signboards',
          },
        ]}
      />
    </PageShell>
  );
}
