import Link from 'next/link';
import { GuideNotice } from '@/components/Guide';
import { TBV } from '@/data/ramon';

// Shared by /services/business and /service-details/business-permits-licensing.
export default function BusinessGuide() {
  return (
    <>
      <GuideNotice>
        {' '}
        Apply at the Business Permits and Licensing Office (BPLO) or the LGU&rsquo;s Business
        One-Stop Shop.
      </GuideNotice>

      <h2>New business: step by step</h2>
      <ol>
        <li>
          <strong>Register your business name or entity.</strong> Sole proprietors register with DTI
          (online through the Business Name Registration System). Corporations and partnerships
          register with SEC; cooperatives with CDA.
        </li>
        <li>
          <strong>Get a barangay business clearance</strong> from the barangay where the business is
          located.
        </li>
        <li>
          <strong>Apply for a Mayor&rsquo;s (business) permit</strong> at the BPLO / Business
          One-Stop Shop using the unified application form. Pay the assessed fees at the Municipal
          Treasurer&rsquo;s Office and keep the official receipt.
        </li>
        <li>
          <strong>Get a Fire Safety Inspection Certificate</strong> from the Bureau of Fire
          Protection, usually processed with the permit.
        </li>
        <li>
          <strong>Register with BIR</strong> at the Revenue District Office covering Ramon, or
          online through BIR ORUS. Since 2024 there is no more &#8369;500 annual registration fee.
        </li>
        <li>
          <strong>If you have employees,</strong> register as an employer with SSS, PhilHealth and
          Pag-IBIG.
        </li>
      </ol>

      <h2>Usual requirements</h2>
      <ul>
        <li>Filled-out unified business application form</li>
        <li>DTI, SEC or CDA registration</li>
        <li>Barangay business clearance</li>
        <li>Proof of business location: lease contract, or tax declaration / title if owned</li>
        <li>Valid government ID of the owner</li>
        <li>Other documents depending on the business (for example, a sanitary permit for food)</li>
      </ul>
      <p>Ramon&rsquo;s exact checklist and fees: {TBV}.</p>

      <h2>Renewal</h2>
      <p>
        Renew every year within the first 20 days of January. Bring your previous permit, last
        year&rsquo;s official receipts, a new barangay clearance and a declaration of last
        year&rsquo;s gross sales. Late renewal adds a surcharge of up to 25% plus interest. Tax
        details are in the <Link href="/services/tax-payments">tax payments guide</Link>.
      </p>

      <h2>How long it should take</h2>
      <p>
        Under the Ease of Doing Business Act, government offices must act within 3 working days for
        simple transactions, 7 for complex ones and 20 for highly technical ones, once your
        requirements are complete.
      </p>
    </>
  );
}
