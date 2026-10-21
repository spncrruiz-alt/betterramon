import Link from 'next/link';
import MeasuresTable from '@/components/MeasuresTable';
import { ordinances, resolutions } from '@/data/ramon';

// Shared by /legislative and its ordinance and resolution pages.
export default function LegislativeGuide() {
  return (
    <>
      <p>
        The Sangguniang Bayan (SB) is Ramon&rsquo;s law-making body. It is led by the Vice Mayor and
        includes the elected councilors and the presidents of the barangay captains&rsquo; league
        and the SK federation. See the current members on the{' '}
        <Link href="/government">Government page</Link>.
      </p>

      <h2>Ordinances</h2>
      <p>
        An ordinance is a local law, such as a tax, fee, traffic or zoning rule. It needs the
        Mayor&rsquo;s approval and is reviewed by the provincial board.
      </p>
      <MeasuresTable items={ordinances} label="ordinances" />

      <h2>Resolutions</h2>
      <p>
        A resolution states the SB&rsquo;s position or approves a one-time act, such as authorizing
        the Mayor to sign an agreement.
      </p>
      <MeasuresTable items={resolutions} label="resolutions" />

      <h2>How to take part</h2>
      <ul>
        <li>
          <strong>Watch a session.</strong> SB sessions are open to the public unless the members
          decide otherwise for a specific reason. Regular sessions are held at least once a week.
        </li>
        <li>
          <strong>Get a copy</strong> of an ordinance or resolution from the Office of the SB
          Secretary at the Municipal Hall. Bring a valid ID and the title or number if you know it.
        </li>
        <li>
          <strong>Speak at a public hearing</strong> on proposed taxes, fees and major ordinances,
          which must be announced in advance.
        </li>
      </ul>
    </>
  );
}
