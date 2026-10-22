import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { barangayInfo, barangays, councilors, electionSource, officials } from '@/data/ramon';
import L, { Tbv } from '@/components/L';

const page = pageFor('/government', pages);

// Facts from the About page history (RA 3320, RA 5276, 1882 founding).
const barangayNotes: Record<string, JSX.Element> = {
  'Bugallon Proper': (
    <L
      en="Town center and seat of government since 1968; formerly Poblacion"
      fil="Sentro ng bayan at upuan ng pamahalaan mula 1968; dating Poblacion"
      ilo="Sentro ti ili ken yan ti gobierno manipud 1968; dati a Poblacion"
    />
  ),
  Burgos: (
    <L
      en="First seat of government, 1961–1968"
      fil="Unang upuan ng pamahalaan, 1961–1968"
      ilo="Umuna a yan ti gobierno, 1961–1968"
    />
  ),
  Oscariz: (
    <L
      en="Oldest settlement, founded 1882"
      fil="Pinakamatandang pamayanan, itinatag noong 1882"
      ilo="Kadaanan a purok, naipasdek idi 1882"
    />
  ),
};
const fmt = (n: number) => n.toLocaleString('en-US');
const total = barangays.reduce((sum, b) => sum + (barangayInfo[b]?.population2020 ?? 0), 0);
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
      <div className="table-scroll">
        <table className="barangay-table">
          <thead>
            <tr>
              <th scope="col">Barangay</th>
              <th scope="col" className="num">
                <L en="Population (2020)" fil="Populasyon (2020)" ilo="Populasion (2020)" />
              </th>
              <th scope="col" className="num">
                <L en="Share" fil="Bahagi" ilo="Paset" />
              </th>
              <th scope="col" className="num">
                <L en="Elevation" fil="Taas" ilo="Kangato" />
              </th>
              <th scope="col">
                <L en="Notes" fil="Tala" ilo="Nota" />
              </th>
            </tr>
          </thead>
          <tbody>
            {barangays.map((b) => {
              const info = barangayInfo[b];
              return (
                <tr key={b}>
                  <th scope="row">
                    {info ? (
                      <a
                        href={`https://www.openstreetmap.org/?mlat=${info.lat}&mlon=${info.lon}#map=15/${info.lat}/${info.lon}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${b} on the map`}
                      >
                        {b} <i className="bi bi-geo-alt" aria-hidden="true"></i>
                      </a>
                    ) : (
                      b
                    )}
                  </th>
                  <td className="num">{info ? fmt(info.population2020) : <Tbv />}</td>
                  <td className="num">
                    {info ? `${((info.population2020 / total) * 100).toFixed(1)}%` : ''}
                  </td>
                  <td className="num">{info ? `${info.elevationM} m` : ''}</td>
                  <td>{barangayNotes[b] ?? ''}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">
                <L en="Total" fil="Kabuuan" ilo="Dagup" />
              </th>
              <td className="num">{fmt(total)}</td>
              <td className="num">100%</td>
              <td colSpan={2}></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p>
        <small>
          <L
            en="Population: PSA 2020 Census of Population and Housing, via PhilAtlas. The 2024 census counts each barangay too, but those figures were not reachable for this page yet. Elevation is an estimate from PhilAtlas. Tap a name to see it on OpenStreetMap."
            fil="Populasyon: PSA 2020 Census of Population and Housing, sa pamamagitan ng PhilAtlas. Binilang din ng 2024 census ang bawat barangay, ngunit hindi pa makuha ang mga bilang na iyon para sa pahinang ito. Tantya ng PhilAtlas ang taas. Pindutin ang pangalan para makita sa OpenStreetMap."
            ilo="Populasion: PSA 2020 Census of Population and Housing, babaen ti PhilAtlas. Binilang met ti 2024 census ti tunggal barangay, ngem saan pay a magala dagidiay a bilang para iti daytoy a panid. Pattapatta ti PhilAtlas ti kangato. Pindutem ti nagan tapno makita iti OpenStreetMap."
          />{' '}
          <a
            href="https://www.philatlas.com/luzon/r02/isabela/ramon.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            PhilAtlas: Ramon
          </a>
        </small>
      </p>
    </PageShell>
  );
}
