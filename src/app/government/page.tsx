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
const withInfo = barangays.filter((b) => barangayInfo[b]);
const largest = withInfo.reduce((a, b) =>
  barangayInfo[b].population2020 > barangayInfo[a].population2020 ? b : a
);
const maxShare = (barangayInfo[largest].population2020 / total) * 100;
const elevations = withInfo.map((b) => barangayInfo[b].elevationM);
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
      <section className="barangay-section" aria-labelledby="barangays-heading">
        <div className="barangay-heading">
          <h2 id="barangays-heading">
            <L en="Barangays" fil="Mga Barangay" ilo="Dagiti Barangay" />
          </h2>
          <p>
            <L
              en="The 19 barangays of Ramon, by population at the 2020 census."
              fil="Ang 19 na barangay ng Ramon, ayon sa populasyon sa 2020 census."
              ilo="Dagiti 19 a barangay ti Ramon, segun iti populasion iti 2020 census."
            />
          </p>
        </div>

        <dl className="barangay-stats">
          <div>
            <dt>
              <L en="Barangays" fil="Barangay" ilo="Barangay" />
            </dt>
            <dd>{barangays.length}</dd>
          </div>
          <div>
            <dt>
              <L en="Population (2020)" fil="Populasyon (2020)" ilo="Populasion (2020)" />
            </dt>
            <dd>{fmt(total)}</dd>
          </div>
          <div>
            <dt>
              <L en="Most populous" fil="Pinakamataong" ilo="Kaaduan ti tao" />
            </dt>
            <dd>
              {largest}
              <small>{fmt(barangayInfo[largest].population2020)}</small>
            </dd>
          </div>
          <div>
            <dt>
              <L en="Elevation range" fil="Saklaw ng taas" ilo="Kangato" />
            </dt>
            <dd>
              {Math.min(...elevations)}–{Math.max(...elevations)} m
            </dd>
          </div>
        </dl>

        <div className="table-scroll">
          <table className="barangay-table">
            <caption className="sr-only">
              <L
                en="Barangays of Ramon with 2020 population, share of the town and elevation"
                fil="Mga barangay ng Ramon na may populasyon noong 2020, bahagi sa bayan at taas"
                ilo="Dagiti barangay ti Ramon nga addaan populasion idi 2020, paset ti ili ken kangato"
              />
            </caption>
            <thead>
              <tr>
                <th scope="col" className="idx">
                  #
                </th>
                <th scope="col">Barangay</th>
                <th scope="col" className="num">
                  <L en="Population" fil="Populasyon" ilo="Populasion" />
                </th>
                <th scope="col" className="share">
                  <L en="Share of town" fil="Bahagi sa bayan" ilo="Paset ti ili" />
                </th>
                <th scope="col" className="num elev">
                  <L en="Elevation" fil="Taas" ilo="Kangato" />
                </th>
                <th scope="col" className="map">
                  <span className="sr-only">
                    <L en="Map" fil="Mapa" ilo="Mapa" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {barangays.map((b, i) => {
                const info = barangayInfo[b];
                const share = info ? (info.population2020 / total) * 100 : 0;
                return (
                  <tr key={b}>
                    <td className="idx">{i + 1}</td>
                    <th scope="row">
                      <span className="brgy-name">{b}</span>
                      {barangayNotes[b] && <span className="brgy-note">{barangayNotes[b]}</span>}
                    </th>
                    <td className="num">{info ? fmt(info.population2020) : <Tbv />}</td>
                    <td className="share">
                      {info && (
                        <span className="share-cell">
                          <span className="share-bar" aria-hidden="true">
                            <span style={{ width: `${(share / maxShare) * 100}%` }} />
                          </span>
                          <span className="share-value">{share.toFixed(1)}%</span>
                        </span>
                      )}
                    </td>
                    <td className="num elev">{info ? `${info.elevationM} m` : ''}</td>
                    <td className="map">
                      {info && (
                        <a
                          className="map-link"
                          href={`https://www.openstreetmap.org/?mlat=${info.lat}&mlon=${info.lon}#map=15/${info.lat}/${info.lon}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${b}: open map`}
                        >
                          <i className="bi bi-geo-alt" aria-hidden="true"></i>
                          <span>
                            <L en="Map" fil="Mapa" ilo="Mapa" />
                          </span>
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="idx"></td>
                <th scope="row">
                  <L en="Total" fil="Kabuuan" ilo="Dagup" />
                </th>
                <td className="num">{fmt(total)}</td>
                <td className="share">
                  <span className="share-value">100%</span>
                </td>
                <td className="elev"></td>
                <td className="map"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="source-note">
          <i className="bi bi-info-circle" aria-hidden="true"></i>
          <span>
            <L
              en="Population: PSA 2020 Census of Population and Housing, via PhilAtlas. The 2024 census counts each barangay too, but those figures were not reachable for this page yet. Elevation is an estimate from PhilAtlas."
              fil="Populasyon: PSA 2020 Census of Population and Housing, sa pamamagitan ng PhilAtlas. Binilang din ng 2024 census ang bawat barangay, ngunit hindi pa makuha ang mga bilang na iyon para sa pahinang ito. Tantya ng PhilAtlas ang taas."
              ilo="Populasion: PSA 2020 Census of Population and Housing, babaen ti PhilAtlas. Binilang met ti 2024 census ti tunggal barangay, ngem saan pay a magala dagidiay a bilang para iti daytoy a panid. Pattapatta ti PhilAtlas ti kangato."
            />{' '}
            <a
              href="https://www.philatlas.com/luzon/r02/isabela/ramon.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              PhilAtlas: Ramon
            </a>
          </span>
        </p>
      </section>
    </PageShell>
  );
}
