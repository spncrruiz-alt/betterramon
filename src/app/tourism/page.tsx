import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { Sources } from '@/components/Guide';
import { pages } from '@/data/pages';
import { lgu, TBV } from '@/data/ramon';

const page = pageFor('/tourism', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const resorts = [
  {
    name: 'Water World Grand Resort',
    where: 'Purok 5, Conde Street',
    note: 'Swimming pools for adults and kids, cottages and a man-made lake.',
  },
  {
    name: 'Camp Bali Resort',
    where: 'near the town center',
    note: 'Pools and villas for family outings and group events.',
  },
  { name: 'Ramon Skypark', where: 'Purok 3, San Miguel', note: 'Swimming and recreation spot.' },
];

const food = [
  {
    name: "Mansaya's Barrio Grill and Restaurant",
    where: 'Burgos–General Aguinaldo Road',
    note: 'Farm-style setting, grilled dishes and boodle meals.',
  },
  { name: "The Captain's Restobar and Grill", where: 'town center', note: 'Grill and restobar.' },
  { name: 'Cusina Sabrosa', where: 'National Highway, Burgos', note: 'Home-style Filipino meals.' },
];

function Listing({
  items,
  icon,
}: {
  items: { name: string; where: string; note: string }[];
  icon: string;
}) {
  return (
    <div className="grid grid-3">
      {items.map((r) => (
        <div key={r.name} className="service-item-card">
          <h3 className="service-item-title">
            <i className={`bi ${icon}`} aria-hidden="true"></i> {r.name}
          </h3>
          <p>{r.note}</p>
          <p>
            <small>
              <i className="bi bi-geo-alt" aria-hidden="true"></i> {r.where}, Ramon
            </small>
          </p>
        </div>
      ))}
    </div>
  );
}

const places = [
  {
    name: 'Magat Dam',
    icon: 'bi-water',
    text: 'One of the largest dams in the Philippines, inaugurated in 1982 and shared by Ramon and Alfonso Lista, Ifugao. Its 114-meter rock-fill wall holds an 11.7 km² reservoir that irrigates about 85,000 hectares and feeds a 360 MW hydropower plant. Reach it by tricycle from Ramon through Oscariz.',
  },
  {
    name: 'Magat Reservoir boat rides',
    icon: 'bi-life-preserver',
    text: 'Boat rides on the lake behind the dam give wide views of the reservoir and the hills of Ifugao. The reservoir also hosts a floating solar power project.',
  },
  {
    name: 'Camp Vizcarra Ecology Park',
    icon: 'bi-tree-fill',
    text: 'A green space for picnics and nature walks near the dam area.',
  },
  {
    name: 'Rolling Hills of Ramon',
    icon: 'bi-image-alt',
    text: 'Grassy rolling hills with a view deck in Barangay Planas, west of the town center. A short hike rewards you with wide views and fresh air; best in the early morning or late afternoon.',
  },
  {
    name: 'Maris Dam',
    icon: 'bi-droplet-half',
    text: 'The smaller diversion dam of the Magat River Irrigation System, on the Ramon–Alfonso Lista boundary, where local fishers often cast their nets.',
  },
];

export default function TourismPage() {
  return (
    <PageShell page={page}>
      <div className="grid grid-2">
        {places.map((p) => (
          <div key={p.name} className="service-item-card">
            <h2 className="service-item-title">
              <i className={`bi ${p.icon}`} aria-hidden="true"></i> {p.name}
            </h2>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      <h2>Resorts</h2>
      <Listing items={resorts} icon="bi-water" />

      <h2>Where to eat</h2>
      <Listing items={food} icon="bi-egg-fried" />
      <p>
        <small>
          Resorts and restaurants are listed for convenience, not endorsed or ranked. Check rates,
          hours and bookings with each place directly. Own a place in Ramon? Ask us to add it.
        </small>
      </p>

      <h2>Before you go</h2>
      <ul>
        <li>
          Access rules, hours and fees for the dam area are set by NIA and the plant operator and
          can change. Ramon-specific visitor rules: {TBV}.
        </li>
        <li>Respect restricted areas around the spillway, intake gates and power plant.</li>
        <li>
          For updates and events, follow the{' '}
          <a href={lgu.officialFacebook ?? '#'} target="_blank" rel="noopener noreferrer">
            PIO Ramon, Isabela Facebook page
          </a>
          .
        </li>
        <li>Town fiesta and festival dates: {TBV}.</li>
      </ul>

      <p>
        Know a place in Ramon that belongs here? Send it with a photo you own through our GitHub
        issues.
      </p>

      <Sources
        items={[
          {
            label: 'Benjie Layug: Magat Dam (2024)',
            href: 'https://benjielayug.com/2024/01/magat-dam-ramon-isabela-and-alfonso-lista-ifugao.html',
          },
          {
            label: 'Ivan Henares: Ramon posts',
            href: 'https://www.ivanhenares.com/search/label/Ramon',
          },
        ]}
      />
    </PageShell>
  );
}
