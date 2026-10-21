import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/tax-payments', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function TaxPaymentsGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Pay only at the Municipal Treasurer&rsquo;s Office or an official channel it announces.
      </GuideNotice>

      <h2>Real property tax (amilyar)</h2>
      <ul>
        <li>
          <strong>Who pays:</strong> owners or administrators of land, buildings and machinery.
        </li>
        <li>
          <strong>How much:</strong> assessed value &times; tax rate. For properties in a
          municipality, the provincial rate is at most 1%, plus a Special Education Fund levy of 1%.
          Ramon&rsquo;s exact rates and assessed values: {TBV}. See{' '}
          <Link href="/services/real-property">Real Property Assessment</Link>.
        </li>
        <li>
          <strong>When:</strong> once a year, or in four installments due by March 31, June 30,
          September 30 and December 31.
        </li>
        <li>
          <strong>Discounts and penalties:</strong> the LGU may give a discount of up to 20% for
          early or prompt payment. Late payment earns interest of 2% per month, up to 36 months.
        </li>
        <li>
          <strong>Bring:</strong> your Tax Declaration number or last year&rsquo;s official receipt.
        </li>
      </ul>

      <h2>Community tax certificate (cedula)</h2>
      <ul>
        <li>
          <strong>Who pays:</strong> residents 18 and older who are employed, in business, or own
          property with an assessed value of &#8369;1,000 or more; and businesses.
        </li>
        <li>
          <strong>How much (individuals):</strong> &#8369;5 basic, plus &#8369;1 for every
          &#8369;1,000 of income or property income, with the additional part capped at
          &#8369;5,000.
        </li>
        <li>
          <strong>When:</strong> by the last day of February. Late payment earns 24% interest a
          year.
        </li>
        <li>
          <strong>Bring:</strong> a valid ID and proof of income (for example, your latest payslip
          or income tax return).
        </li>
      </ul>

      <h2>Business tax and Mayor&rsquo;s permit fees</h2>
      <p>
        Due within the first 20 days of January, or quarterly within the first 20 days of each
        quarter if allowed. Late payment: a surcharge of up to 25% plus interest of up to 2% a
        month. Renewal steps are in the <Link href="/services/business">business guide</Link>.
      </p>

      <h2>Your official receipt (OR)</h2>
      <ul>
        <li>Always ask for an official receipt for every payment. It is your proof of payment.</li>
        <li>
          Check that your name, the property or business, the amount and the date are correct.
        </li>
        <li>Keep it. You need it for clearances, transfers and next year&rsquo;s payment.</li>
        <li>Do not pay anyone who cannot give you an official receipt.</li>
      </ul>

      <h2>Where to pay</h2>
      <p>
        Municipal Treasurer&rsquo;s Office, Municipal Hall, Ramon, Isabela. Office hours and any
        online payment channel: {TBV}.
      </p>
    </PageShell>
  );
}
