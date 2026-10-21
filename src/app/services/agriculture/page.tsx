import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import { Tbv } from '@/components/L';

const page = pageFor('/services/agriculture', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function AgricultureGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Farm programs are handled by the Municipal Agriculture Office (MAO).
      </GuideNotice>

      <h2>Register in RSBSA first</h2>
      <p>
        The Registry System for Basic Sectors in Agriculture (RSBSA) is the list national agencies
        use to give farmers and fisherfolk seeds, fertilizer, fuel subsidies, cash aid, loans and
        free crop insurance. If you are not registered, you can miss these programs.
      </p>
      <ul>
        <li>Register at the MAO with the RSBSA enrollment form.</li>
        <li>
          Bring a valid ID, a recent ID photo, and proof of your farm: tax declaration, title, or a
          tenancy or lease agreement, or a barangay certification.
        </li>
        <li>Update your record when your farm area, crops or address change.</li>
      </ul>

      <h2>Crop insurance (PCIC)</h2>
      <p>
        The Philippine Crop Insurance Corporation insures rice, corn, high-value crops, livestock
        and fisheries. Premiums are free for subsistence farmers and fisherfolk registered in RSBSA.
        Enroll before planting through the MAO or a PCIC agent, and file a claim soon after damage
        from typhoons, floods, drought or pests.
      </p>

      <h2>Other help from the MAO</h2>
      <ul>
        <li>Seed and fertilizer distribution, when available</li>
        <li>Technical advice on crops, pests and soil</li>
        <li>Farm damage reports after calamities</li>
        <li>Referral to DA, PhilRice and Landbank programs</li>
      </ul>
      <p>Current Ramon distributions and schedules: {<Tbv />}.</p>
    </PageShell>
  );
}
