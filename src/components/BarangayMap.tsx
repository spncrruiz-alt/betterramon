import { barangayInfo } from '@/data/ramon';
import { barangayShapes, mapSize, municipalOutline } from '@/data/ramon-map';
import L from '@/components/L';

// Map of Ramon's municipal boundary and its 19 barangays, shaded by 2020 population.
// Each barangay links to OpenStreetMap at its center.
const shades = ['#e6edff', '#c7d6ff', '#9db7fb', '#6a8ff0', '#3d67de'];
const limits = [1500, 2500, 4000, 6000];
const shadeOf = (pop: number) => limits.filter((l) => pop >= l).length;
const fmt = (n: number) => n.toLocaleString('en-US');

export default function BarangayMap() {
  return (
    <figure className="barangay-map">
      <svg
        viewBox={`0 0 ${mapSize.width} ${mapSize.height}`}
        role="group"
        aria-labelledby="barangay-map-caption"
      >
        {barangayShapes.map((b) => {
          const info = barangayInfo[b.name];
          const level = info ? shadeOf(info.population2020) : 0;
          const label = `${b.name}${info ? `, ${fmt(info.population2020)} people (2020)` : ''}`;
          return (
            <a
              key={b.psgc}
              href={
                info
                  ? `https://www.openstreetmap.org/?mlat=${info.lat}&mlon=${info.lon}#map=15/${info.lat}/${info.lon}`
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}: open map`}
              className="barangay-map-area"
            >
              <title>{label}</title>
              <path d={b.d} fill={shades[level]} />
            </a>
          );
        })}
        <path d={municipalOutline} className="barangay-map-outline" />
        <g className="barangay-map-labels" aria-hidden="true">
          {barangayShapes.map((b) => {
            const info = barangayInfo[b.name];
            const dark = info && shadeOf(info.population2020) >= 3;
            return (
              <text
                key={b.psgc}
                x={b.label[0]}
                y={b.label[1]}
                className={dark ? 'on-dark' : undefined}
              >
                {b.name}
              </text>
            );
          })}
        </g>
      </svg>
      <figcaption id="barangay-map-caption">
        <span className="barangay-map-legend" aria-hidden="true">
          {shades.map((c, i) => (
            <span key={c}>
              <i style={{ background: c }} />
              {i === 0
                ? `< ${fmt(limits[0])}`
                : i === shades.length - 1
                  ? `${fmt(limits[i - 1])}+`
                  : `${fmt(limits[i - 1])}–${fmt(limits[i] - 1)}`}
            </span>
          ))}
        </span>
        <small>
          <L
            en="Municipal boundary (dark line) and barangay boundaries of Ramon, shaded by 2020 population. Select a barangay to open it on OpenStreetMap. Boundaries: PSA PSGC shapefiles (2023), simplified, via philippines-json-maps (MIT). Approximate, not for legal or survey use."
            fil="Hangganan ng bayan (madilim na linya) at mga hangganan ng barangay ng Ramon, kinulayan ayon sa populasyon noong 2020. Pumili ng barangay para buksan ito sa OpenStreetMap. Hangganan: PSA PSGC shapefiles (2023), pinasimple, sa pamamagitan ng philippines-json-maps (MIT). Tantya lamang, hindi para sa legal o survey na gamit."
            ilo="Beddeng ti ili (nangisit a linia) ken dagiti beddeng ti barangay ti Ramon, nakoloran segun iti populasion idi 2020. Pilien ti barangay tapno lukatan iti OpenStreetMap. Beddeng: PSA PSGC shapefiles (2023), napasimple, babaen ti philippines-json-maps (MIT). Pattapatta laeng, saan a para iti legal wenno survey."
          />
        </small>
      </figcaption>
    </figure>
  );
}
