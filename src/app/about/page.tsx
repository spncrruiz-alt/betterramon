import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { barangays, stats } from '@/data/ramon';

const page = pageFor('/about', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function AboutPage() {
  return (
    <PageShell page={page}>
      <figure className="seal-figure">
        <img
          src="/assets/images/logo/ramon-seal.png"
          alt="Official seal of the Municipality of Ramon, Isabela"
          width="140"
          height="140"
        />
      </figure>

      <p>
        Ramon is a municipality in southern Isabela, in the Cagayan Valley region, with{' '}
        {barangays.length} barangays on {stats.landArea.value} of land between the Magat and Diadi
        rivers. It is home to the Magat Dam, one of the largest dams in the Philippines.
      </p>

      <h2>History</h2>
      <ul>
        <li>
          The area was once called <strong>Oscariz</strong>, after a former military governor of
          Nueva Vizcaya. Oscariz is still the name of one of Ramon&rsquo;s barangays.
        </li>
        <li>
          In early 1900, General <strong>Emilio Aguinaldo</strong> stayed in Oscariz while
          retreating north from American forces.
        </li>
        <li>
          On <strong>June 18, 1961</strong>, Republic Act No. 3320 created the Municipality of
          Ramon, named after President <strong>Ramon Magsaysay</strong>.
        </li>
        <li>The first local election was held in November 1963.</li>
        <li>
          The <strong>Magat Dam</strong> was inaugurated on October 27, 1982, bringing irrigation,
          flood control and hydropower to the region.
        </li>
        <li>
          Republic Act No. 11354 moved the seat of government to <strong>Bugallon</strong>, where
          the Municipal Hall stands today.
        </li>
      </ul>

      <h2>Where Ramon is</h2>
      <p>
        Ramon borders San Mateo to the north, Alicia and San Isidro to the east, the City of
        Santiago to the south, and Cordon to the west across the Diadi River. The Magat River
        separates it from Alfonso Lista, Ifugao.
      </p>

      <h2>Getting there</h2>
      <ul>
        <li>
          <strong>By bus from Manila:</strong> take a bus bound for Santiago City or Isabela, then a
          jeepney or tricycle to Ramon. The trip is about 360 km.
        </li>
        <li>
          <strong>By air:</strong> the nearest airport is Cauayan, about 40 km away.
        </li>
        <li>
          <strong>Around town:</strong> tricycles run between barangays and to the Magat Dam.
        </li>
      </ul>
      <p>
        See what to visit on the <Link href="/tourism">tourism page</Link>, or browse the{' '}
        <Link href="/government">barangays and officials</Link>.
      </p>
    </PageShell>
  );
}
