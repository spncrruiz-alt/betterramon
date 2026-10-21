import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice, Sources } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/real-property', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function RealPropertyGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Property records and tax declarations are kept by the Municipal Assessor&rsquo;s Office.
      </GuideNotice>

      <h2>What is a tax declaration?</h2>
      <p>
        A tax declaration (TD) is the Assessor&rsquo;s record of a property for tax purposes. It
        shows the property&rsquo;s location, area, classification, market value and assessed value.
        Real property tax is computed from the assessed value. A TD is not proof of ownership; a
        land title is.
      </p>

      <h2>Common requests at the Assessor&rsquo;s Office</h2>
      <ul>
        <li>
          <strong>Certified true copy of a tax declaration.</strong> Bring a valid ID and the TD
          number or property details. If you are not the owner, bring an authorization letter.
        </li>
        <li>
          <strong>New declaration</strong> of an undeclared property or a new building. Bring proof
          of ownership or possession, a sketch or survey plan, and, for buildings, the building
          permit and plans.
        </li>
        <li>
          <strong>Transfer of a tax declaration</strong> after a sale, donation or inheritance.
          Usually required: the deed or settlement document, the BIR Certificate Authorizing
          Registration, the transfer tax receipt, the new or annotated title, and a real property
          tax clearance.
        </li>
        <li>
          <strong>Real property tax clearance</strong> from the Treasurer&rsquo;s Office, showing
          your taxes are paid.
        </li>
      </ul>
      <p>Ramon&rsquo;s exact requirements and fees: {TBV}.</p>

      <h2>How property values are set</h2>
      <p>
        The Assessor prepares a schedule of market values for each property class, which the
        Sangguniang approves by ordinance. The assessed value is the market value times an
        assessment level set by class (for example, residential or agricultural). The Real Property
        Valuation and Assessment Reform Act (RA 12001) of 2024 now guides how these values are
        updated.
      </p>

      <h2>Tax mapping</h2>
      <p>
        The Assessor keeps tax maps that show every parcel in each barangay with its property index
        number (PIN). The PIN links the parcel to its tax declaration. Tax mapping finds undeclared
        or wrongly declared properties so each owner pays the right share.
      </p>
      <ul>
        <li>
          <strong>Find your PIN:</strong> it is printed on your tax declaration. Bring it when you
          request records or pay real property tax.
        </li>
        <li>
          <strong>If a tax mapping team visits:</strong> ask for their LGU ID. Show your tax
          declaration or title, and point out your boundaries and any new buildings.
        </li>
        <li>
          <strong>Wrong area, boundary or classification on your record?</strong> Bring your title,
          survey plan or approved subdivision plan to the Assessor and ask for a correction.
        </li>
      </ul>
      <p>
        Parcel ownership records are personal data, so this site does not publish a parcel-owner
        map. Ramon&rsquo;s tax mapping schedule: {TBV}.
      </p>

      <h2>Disagree with your assessment?</h2>
      <p>
        You can appeal to the Local Board of Assessment Appeals within 60 days of receiving the
        notice of assessment. Pay the tax under protest if you want to keep your right to a refund.
      </p>

      <h2>Paying the tax</h2>
      <p>
        Due dates, discounts and penalties are in the{' '}
        <Link href="/services/tax-payments">tax payments guide</Link>.
      </p>

      <Sources
        items={[
          { label: 'Local Government Code of 1991 (RA 7160), Sections 201–226, 252' },
          { label: 'Real Property Valuation and Assessment Reform Act (RA 12001)' },
        ]}
      />
    </PageShell>
  );
}
