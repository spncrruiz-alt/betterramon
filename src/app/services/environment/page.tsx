import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice, Sources } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/environment', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function EnvironmentGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Solid waste is handled by the Municipal Environment and Natural Resources Office (MENRO) and
        your barangay.
      </GuideNotice>

      <h2>Segregate your waste</h2>
      <p>The law requires every household to separate waste at the source:</p>
      <ul>
        <li>
          <strong>Biodegradable:</strong> food scraps, leaves. Compost them if you can.
        </li>
        <li>
          <strong>Recyclable:</strong> clean plastic, paper, cans and bottles.
        </li>
        <li>
          <strong>Residual:</strong> waste that cannot be composted or recycled.
        </li>
        <li>
          <strong>Special or hazardous:</strong> batteries, bulbs, paint, chemicals. Keep them
          apart.
        </li>
      </ul>
      <p>Collection schedule for your barangay: {TBV}.</p>

      <h2>Open burning is not allowed</h2>
      <p>
        Burning garbage in the open is prohibited under the Ecological Solid Waste Management Act
        and the Clean Air Act. Report it to your barangay.
      </p>

      <h2>Cutting trees</h2>
      <p>
        Cutting, moving or selling trees, even on private land, usually needs a permit from the DENR
        Community Environment and Natural Resources Office (CENRO) covering Ramon.
      </p>

      <Sources
        items={[
          { label: 'Ecological Solid Waste Management Act (RA 9003)' },
          { label: 'Philippine Clean Air Act (RA 8749)' },
          { label: 'DENR', href: 'https://denr.gov.ph' },
        ]}
      />
    </PageShell>
  );
}
