import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';
import type { ReactNode } from 'react';
import L, { Tbv } from '@/components/L';

const page = pageFor('/tourism', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const resorts = [
  {
    name: 'Water World Grand Resort',
    where: 'Purok 5, Conde Street',
    note: (
      <L
        en="Swimming pools for adults and kids, cottages and a man-made lake."
        fil="Mga pool para sa matanda at bata, cottage at gawang-taong lawa."
        ilo="Dagiti pool para kadagiti nataengan ken ubbing, cottage ken naaramid a danaw."
      />
    ),
  },
  {
    name: 'Camp Bali Resort',
    where: 'Poblacion area',
    note: (
      <L
        en="Pools and villas for family outings and group events."
        fil="Mga pool at villa para sa pamamasyal ng pamilya at mga okasyon."
        ilo="Dagiti pool ken villa para iti panagpasiar ti pamilia ken dagiti okasion."
      />
    ),
  },
  {
    name: 'Ramon Skypark',
    where: 'Purok 3, San Miguel',
    note: (
      <L
        en="Swimming and recreation spot."
        fil="Lugar para maligo at maglibang."
        ilo="Lugar a pagdigosan ken paglinglingayan."
      />
    ),
  },
];

const food = [
  {
    name: "Mansaya's Barrio Grill and Restaurant",
    where: 'Burgos–General Aguinaldo Road',
    note: (
      <L
        en="Farm-style setting, grilled dishes and boodle meals."
        fil="Parang nasa bukid, may inihaw at boodle meal."
        ilo="Kasla adda iti talon, adda dagiti tinuno ken boodle a pangan."
      />
    ),
  },
  {
    name: "The Captain's Restobar and Grill",
    where: 'town center',
    note: <L en="Grill and restobar." fil="Ihawan at restobar." ilo="Pagtunuan ken restobar." />,
  },
  {
    name: 'Arubayan (formerly Rolling Mctea)',
    where: 'Purok 6, Ambatali, Ramon–Alfonso Lista Road',
    note: (
      <L
        en="Café and drinks stop on the way to the Magat Dam area."
        fil="Café at inuman sa daan papunta sa Magat Dam."
        ilo="Café ken pagin-inuman iti dalan nga agturong iti Magat Dam."
      />
    ),
  },
  {
    name: '11 Dizzy Otso',
    where: 'General Aguinaldo, Burgos–General Aguinaldo Road',
    note: (
      <L
        en="Restaurant in Barangay General Aguinaldo."
        fil="Kainan sa Barangay General Aguinaldo."
        ilo="Pagmanganan iti Barangay General Aguinaldo."
      />
    ),
  },
];

function Listing({
  items,
  icon,
}: {
  items: { name: string; where: string; note: ReactNode }[];
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
    text: (
      <L
        en="One of the largest dams in the Philippines, inaugurated in 1982 and shared by Ramon and Alfonso Lista, Ifugao. Its 114-meter rock-fill wall holds an 11.7 km² reservoir that irrigates about 85,000 hectares and feeds a 360 MW hydropower plant. Reach it by tricycle from Ramon through Oscariz."
        fil="Isa sa pinakamalaking dam sa Pilipinas, binuksan noong 1982 at pinagsasaluhan ng Ramon at Alfonso Lista, Ifugao. Ang 114-metrong pader nito ay may 11.7 km² na imbakan ng tubig na nagpapatubig sa mga 85,000 ektarya at nagpapatakbo ng 360 MW na hydropower plant. Sumakay ng tricycle mula sa Ramon dadaan sa Oscariz."
        ilo="Maysa kadagiti kadakkelan a dam iti Pilipinas, naluktan idi 1982 ken bingay ti Ramon ken Alfonso Lista, Ifugao. Ti 114-metro a pader na ket mangsalsalimetmet iti 11.7 km² a pagurnongan ti danum a mangpadanum iti agarup 85,000 nga ektaria ken mangpaandar iti 360 MW a hydropower plant. Lumugan iti tricycle manipud Ramon a lumasat iti Oscariz."
      />
    ),
  },
  {
    name: 'Magat Reservoir boat rides',
    text: (
      <L
        en="Boat rides on the lake behind the dam give wide views of the reservoir and the hills of Ifugao. The reservoir also hosts a floating solar power project."
        fil="Ang pagsakay sa bangka sa lawa sa likod ng dam ay may malawak na tanaw ng imbakan at ng mga bundok ng Ifugao. May floating solar power project din dito."
        ilo="Ti panaglugan iti bangka iti danaw iti likud ti dam ket addaan iti nalawa a buya ti pagurnongan ken dagiti bantay ti Ifugao. Adda met ditoy ti floating solar power project."
      />
    ),
  },
  {
    name: 'Camp Vizcarra Ecology Park',
    text: (
      <L
        en="A green space for picnics and nature walks near the dam area."
        fil="Luntiang lugar para sa piknik at paglalakad malapit sa dam."
        ilo="Nalangto a lugar para iti piknik ken panagpagna iti asideg ti dam."
      />
    ),
  },
  {
    name: 'Rolling Hills of Ramon',
    text: (
      <L
        en="Grassy rolling hills with a view deck in Barangay Planas, west of the town center. A short hike rewards you with wide views and fresh air; best in the early morning or late afternoon."
        fil="Madamong burol na may view deck sa Barangay Planas, kanluran ng sentro ng bayan. Sa maikling akyat, sasalubungin ka ng malawak na tanaw at sariwang hangin; pinakamaganda sa umaga o hapon."
        ilo="Nadaramudom a turod nga addaan iti view deck iti Barangay Planas, iti laud ti sentro ti ili. Iti ababa a panagdaliasat, makitam ti nalawa a buya ken nadalus nga angin; kasayaatan iti agsapa wenno malem."
      />
    ),
  },
  {
    name: 'Maris Dam',
    text: (
      <L
        en="The smaller diversion dam of the Magat River Irrigation System, on the Ramon–Alfonso Lista boundary, where local fishers often cast their nets."
        fil="Ang mas maliit na diversion dam ng Magat River Irrigation System, sa hangganan ng Ramon at Alfonso Lista, kung saan madalas mangisda ang mga taga-rito."
        ilo="Ti basbassit a diversion dam ti Magat River Irrigation System, iti beddeng ti Ramon ken Alfonso Lista, a masansan a pagkalapan dagiti lokal a mangngalap."
      />
    ),
  },
];

export default function TourismPage() {
  return (
    <div className="tourism-page">
      <PageShell page={page}>
        <nav className="tourism-jump-links" aria-label="Tourism sections">
          <a href="#places">
            <L en="Places to explore" fil="Mga pasyalan" ilo="Dagiti pagpasiaran" />
          </a>
          <a href="#resorts">
            <L en="Resorts" fil="Mga resort" ilo="Dagiti resort" />
          </a>
          <a href="#food">
            <L en="Where to eat" fil="Saan kakain" ilo="Sadino ti pangan" />
          </a>
          <a href="#visit">
            <L en="Before you go" fil="Bago pumunta" ilo="Sakbay a mapan" />
          </a>
        </nav>
        <section id="places" className="tourism-block" aria-labelledby="places-title">
          <h2 id="places-title" className="tourism-section-title">
            <L en="Places to explore" fil="Mga pasyalan" ilo="Dagiti pagpasiaran" />
          </h2>
          <div className="tourism-places">
            {places.map((p) => (
              <article key={p.name} className="tourism-place">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="resorts"
          className="tourism-block tourism-resorts"
          aria-labelledby="resorts-title"
        >
          <h2 id="resorts-title" className="tourism-section-title">
            <L en="Resorts" fil="Mga resort" ilo="Dagiti resort" />
          </h2>
          <Listing items={resorts} icon="bi-water" />
        </section>

        <section id="food" className="tourism-block tourism-food" aria-labelledby="food-title">
          <h2 id="food-title" className="tourism-section-title">
            <L en="Where to eat" fil="Saan kakain" ilo="Sadino ti pangan" />
          </h2>
          <Listing items={food} icon="bi-egg-fried" />
          <p>
            <small>
              <L
                en="Resorts and restaurants are listed for convenience, not endorsed or ranked. Check rates, hours and bookings with each place directly. Own a place in Ramon? Ask us to add it."
                fil="Nakalista ang mga resort at kainan para sa kaginhawaan, hindi inirerekomenda o niraranggo. Alamin ang presyo, oras at booking sa mismong lugar. May negosyo ka sa Ramon? Ipaalam sa amin para maidagdag."
                ilo="Nailista dagiti resort ken pagmanganan para iti kombeniensia, saan nga irekomenda wenno iranggo. Saludsoden ti presio, oras ken booking iti mismo a lugar. Adda negosyom iti Ramon? Ipakaammom kadakami tapno mainayon."
              />
            </small>
          </p>
        </section>

        <section id="visit" className="tourism-block tourism-visit" aria-labelledby="visit-title">
          <h2 id="visit-title" className="tourism-section-title">
            <L en="Before you go" fil="Bago pumunta" ilo="Sakbay a mapan" />
          </h2>
          <ul>
            <li>
              <L
                en="Access rules, hours and fees for the dam area are set by NIA and the plant operator and can change. Ramon-specific visitor rules:"
                fil="Ang patakaran, oras at bayad sa lugar ng dam ay itinatakda ng NIA at ng operator ng planta at maaaring magbago. Mga patakaran para sa bisita sa Ramon:"
                ilo="Dagiti pagannurotan, oras ken bayad iti lugar ti dam ket ikeddeng ti NIA ken ti operator ti planta ken mabalin nga agbaliw. Dagiti pagannurotan para kadagiti bisita iti Ramon:"
              />{' '}
              <Tbv />.
            </li>
            <li>
              <L
                en="Respect restricted areas around the spillway, intake gates and power plant."
                fil="Igalang ang mga bawal na lugar sa paligid ng spillway, intake gate at power plant."
                ilo="Raemen dagiti maiparit a lugar iti aglawlaw ti spillway, intake gate ken power plant."
              />
            </li>
            <li>
              <L
                en="For updates and events, follow"
                fil="Para sa balita at kaganapan, i-follow ang"
                ilo="Para kadagiti damag ken pasamak, i-follow ti"
              />{' '}
              <a href={lgu.officialFacebook ?? '#'} target="_blank" rel="noopener noreferrer">
                PIO Ramon, Isabela (Facebook)
              </a>
              .
            </li>
            <li>
              <L
                en="Town fiesta and festival dates:"
                fil="Petsa ng pista at festival ng bayan:"
                ilo="Petsa ti fiesta ken festival ti ili:"
              />{' '}
              <Tbv />.
            </li>
          </ul>

          <p>
            <L
              en="Know a place in Ramon that belongs here? Send it through our GitHub issues."
              fil="May alam kang lugar sa Ramon na dapat narito? Ipadala ito sa aming GitHub issues."
              ilo="Adda ammom a lugar iti Ramon a rumbeng ditoy? Ipatulod daytoy iti GitHub issues mi."
            />
          </p>
        </section>
      </PageShell>
    </div>
  );
}
