import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import { Tbv } from '@/components/L';

const page = pageFor('/service-details/municipal-treasurer', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function TreasurerGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        The Municipal Treasurer&rsquo;s Office is the only office that collects taxes and fees and
        issues official receipts.
      </GuideNotice>

      <h2>What you can pay or get here</h2>
      <ul>
        <li>Real property tax (amilyar) and real property tax clearance</li>
        <li>Community tax certificate (cedula)</li>
        <li>Business tax and Mayor&rsquo;s permit fees</li>
        <li>Fees for permits, certificates and other municipal services</li>
      </ul>
      <p>
        Due dates, rates and penalties are in the{' '}
        <Link href="/services/tax-payments">tax payments guide</Link>.
      </p>

      <h2>Before you pay</h2>
      <ul>
        <li>Get the assessment or order of payment from the office that handles your request.</li>
        <li>Pay only at the Treasurer&rsquo;s window or an official channel it announces.</li>
        <li>Always get and keep your official receipt.</li>
      </ul>
      <p>Office hours and online payment options: {<Tbv />}.</p>
    </PageShell>
  );
}
