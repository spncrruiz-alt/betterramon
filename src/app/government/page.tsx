import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { barangays, councilors, electionSource, officials } from '@/data/ramon';
import L, { Tbv } from '@/components/L';

const page = pageFor('/government', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const titles = {
  mayor: <L en="Municipal Mayor" fil="Punong Bayan" ilo="Mayor ti Ili" />,
  'vice-mayor': (
    <L en="Municipal Vice Mayor" fil="Pangalawang Punong Bayan" ilo="Bise Mayor ti Ili" />
  ),
};

export default function GovernmentPage() {
  return (
    <PageShell page={page}>
      <figure className="seal-figure">
        <img
          src="/assets/images/logo/ramon-seal.png"
          alt="Official seal of the Municipality of Ramon, Isabela"
          width="160"
          height="160"
        />
        <figcaption>
          <small>
            <L
              en="Official seal of the Municipality of Ramon, Isabela (Bayan ng Ramon, 1964)"
              fil="Opisyal na sagisag ng Bayan ng Ramon, Isabela (1964)"
              ilo="Opisial a seal ti Ili ti Ramon, Isabela (1964)"
            />
          </small>
        </figcaption>
      </figure>
      <h2>
        <L
          en="Executive and Legislative Officials"
          fil="Mga Opisyal na Ehekutibo at Lehislatibo"
          ilo="Dagiti Opisial nga Ehekutibo ken Lehislatibo"
        />
      </h2>
      <div className="grid grid-3">
        {officials.map((o) => (
          <div key={o.title} className="service-item-card">
            <h3 className="service-item-title">{titles[o.title]}</h3>
            <p>{o.name ?? <Tbv />}</p>
          </div>
        ))}
      </div>
      <h2>
        <L
          en="Sangguniang Bayan members"
          fil="Mga kasapi ng Sangguniang Bayan"
          ilo="Dagiti kameng ti Sangguniang Bayan"
        />
      </h2>
      <ul className="grid grid-3">
        {councilors.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p>
        <small>
          <L
            en="Officials 2025–2028:"
            fil="Mga opisyal 2025–2028:"
            ilo="Dagiti opisial 2025–2028:"
          />{' '}
          <a href={electionSource.href} target="_blank" rel="noopener noreferrer">
            {electionSource.label}
          </a>
          .{' '}
          <L
            en="Ex officio members (Liga ng mga Barangay and SK Federation presidents):"
            fil="Mga ex officio na kasapi (pangulo ng Liga ng mga Barangay at SK Federation):"
            ilo="Dagiti ex officio a kameng (presidente ti Liga ng mga Barangay ken SK Federation):"
          />{' '}
          <Tbv />.
        </small>
      </p>
      <h2>
        <L en="Barangays" fil="Mga Barangay" ilo="Dagiti Barangay" /> ({barangays.length})
      </h2>
      <ul className="grid grid-3">
        {barangays.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p>
        <small>PhilAtlas</small>
      </p>
    </PageShell>
  );
}
