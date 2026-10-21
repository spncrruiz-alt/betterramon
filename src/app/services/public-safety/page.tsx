import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice, Sources } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/public-safety', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function PublicSafetyGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        In an emergency, call 911 or the local numbers on the{' '}
        <Link href="/contact">contact page</Link>.
      </GuideNotice>

      <h2>Emergency numbers</h2>
      <p>
        PNP Ramon, BFP Ramon, LDRRMO and ISELCO numbers are in the red bar at the top of every page
        and on the <Link href="/contact">contact page</Link>. Save them on your phone now.
      </p>

      <h2>Police and NBI clearance</h2>
      <ul>
        <li>
          <strong>Police clearance:</strong> apply online through the National Police Clearance
          System, pay, then go to the police station you chose for photo and fingerprints.
        </li>
        <li>
          <strong>NBI clearance:</strong> apply online, pay, then appear at an NBI clearance center
          or satellite site.
        </li>
        <li>
          <strong>Barangay clearance:</strong> from your barangay hall.
        </li>
      </ul>

      <h2>Fire safety</h2>
      <p>
        Businesses and buildings need a Fire Safety Inspection Certificate from the Bureau of Fire
        Protection. At home, keep LPG tanks upright and away from heat, avoid overloading outlets,
        and never leave cooking unattended.
      </p>

      <h2>Be ready for typhoons and floods</h2>
      <ul>
        <li>
          Prepare a go-bag: water, food, medicine, flashlight, power bank, IDs and documents in a
          waterproof bag.
        </li>
        <li>
          Know your barangay&rsquo;s evacuation center and route. Evacuation centers in Ramon: {TBV}
          .
        </li>
        <li>Follow PAGASA warnings and LDRRMO advisories, and evacuate early when told to.</li>
        <li>Watch the Magat River and Diadi River levels if you live near them.</li>
      </ul>

      <Sources
        items={[
          { label: 'National Police Clearance System', href: 'https://pnpclearance.ph' },
          { label: 'NBI Clearance', href: 'https://clearance.nbi.gov.ph' },
          { label: 'Fire Code of the Philippines (RA 9514)' },
          { label: 'Philippine DRRM Act (RA 10121)' },
        ]}
      />
    </PageShell>
  );
}
