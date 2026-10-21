import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/building-permits', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function BuildingPermitsGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Apply at the Office of the Building Official (usually the Municipal Engineering Office).
      </GuideNotice>

      <h2>When you need a building permit</h2>
      <p>
        Before you build, add to, alter, repair, convert or demolish a building. Some minor works,
        such as minor repairs that do not change the structure, may be exempt; ask the Building
        Official first.
      </p>

      <h2>Building permit: step by step</h2>
      <ol>
        <li>
          <strong>Get a locational / zoning clearance</strong> from the Municipal Planning and
          Development Office.
        </li>
        <li>
          <strong>Get a barangay clearance</strong> for construction from your barangay.
        </li>
        <li>
          <strong>Prepare plans</strong> signed and sealed by licensed professionals: architectural,
          civil/structural, electrical, sanitary/plumbing, and mechanical if needed.
        </li>
        <li>
          <strong>Get a Fire Safety Evaluation Clearance</strong> from the Bureau of Fire
          Protection.
        </li>
        <li>
          <strong>Submit the unified building permit application</strong> with all requirements to
          the Office of the Building Official, then pay the assessed fees at the Municipal
          Treasurer&rsquo;s Office and keep the official receipt.
        </li>
        <li>
          <strong>Post the permit</strong> at the site and keep the construction logbook during the
          work.
        </li>
      </ol>

      <h2>Usual requirements</h2>
      <ul>
        <li>
          Unified application form for building permit, filled out and notarized where required
        </li>
        <li>
          Proof of ownership (title or tax declaration) or a lease contract / owner&rsquo;s consent
        </li>
        <li>Locational clearance, barangay clearance and Fire Safety Evaluation Clearance</li>
        <li>Signed and sealed plans and specifications</li>
        <li>Structural analysis for buildings with two or more storeys</li>
        <li>Bill of materials and cost estimate</li>
        <li>Construction safety and health program, for works with workers on site</li>
        <li>Latest real property tax receipt</li>
      </ul>
      <p>Ramon&rsquo;s exact checklist and fees: {TBV}.</p>

      <h2>Certificate of occupancy</h2>
      <p>Needed before you use or occupy the finished building. Apply at the same office with:</p>
      <ul>
        <li>
          Certificate of completion, signed by the owner and the engineer or architect in charge
        </li>
        <li>As-built plans, if the work changed from the approved plans</li>
        <li>Construction logbook and photos of the finished building</li>
        <li>Fire Safety Inspection Certificate from the Bureau of Fire Protection</li>
        <li>Copy of the building permit and its official receipt</li>
      </ul>

      <h2>How long it should take</h2>
      <p>
        Under the Ease of Doing Business Act, offices must act within set processing times once your
        requirements are complete. Ask for the office&rsquo;s Citizen&rsquo;s Charter, which lists
        each step and its time limit.
      </p>
    </PageShell>
  );
}
