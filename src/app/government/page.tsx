import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { barangays, councilors, electionSource, officials, TBV } from '@/data/ramon';

const page = pageFor('/government', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const titles = { mayor: 'Municipal Mayor', 'vice-mayor': 'Municipal Vice Mayor' } as const;

export default function GovernmentPage() {
  return (
    <PageShell page={page}>
      <figure style={{ textAlign: 'center', margin: '0 0 2rem' }}>
        <img
          src="/assets/images/logo/ramon-seal.png"
          alt="Official seal of the Municipality of Ramon, Isabela"
          width="160"
          height="160"
        />
        <figcaption>
          <small>Official seal of the Municipality of Ramon, Isabela (Bayan ng Ramon, 1964)</small>
        </figcaption>
      </figure>
      <h2>Executive and Legislative Officials</h2>
      <div className="grid grid-3">
        {officials.map((o) => (
          <div key={o.title} className="service-item-card">
            <h3 className="service-item-title">{titles[o.title]}</h3>
            <p>{o.name ?? TBV}</p>
          </div>
        ))}
      </div>
      <h2>Sangguniang Bayan members</h2>
      <ul className="grid grid-3">
        {councilors.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p>
        <small>
          Officials 2025–2028:{' '}
          <a href={electionSource.href} target="_blank" rel="noopener noreferrer">
            {electionSource.label}
          </a>
          . Ex officio members (Liga ng mga Barangay and SK Federation presidents): {TBV}.
        </small>
      </p>
      <h2>Barangays ({barangays.length})</h2>
      <ul className="grid grid-3">
        {barangays.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p>
        <small>Barangay list: PhilAtlas.</small>
      </p>
    </PageShell>
  );
}
