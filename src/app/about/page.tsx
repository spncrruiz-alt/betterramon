import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { barangays, stats } from '@/data/ramon';
import L from '@/components/L';

const page = pageFor('/about', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const n = barangays.length;
const area = stats.landArea.value;

const en = (
  <>
    <p>
      Ramon is a municipality in southern Isabela, in the Cagayan Valley region, with {n} barangays
      on {area} of land between the Magat and Diadi rivers. It is home to the Magat Dam, one of the
      largest dams in the Philippines.
    </p>
    <h2>History</h2>
    <ul className="history-timeline">
      <li>
        In <strong>1846</strong> the Spanish built a fort named Begonia here to guard nearby
        settlements. The settlement around it was founded in <strong>1882</strong> and named{' '}
        <strong>Oscariz</strong>, after Don Mariano Oscariz, a former military governor of Nueva
        Vizcaya. Oscariz is still one of Ramon&rsquo;s barangays.
      </li>
      <li>
        On <strong>June 18, 1961</strong>, Republic Act No. 3320 created the Municipality of Ramon
        from barrios of Santiago and San Mateo, with its seat in Burgos. It was named after President{' '}
        <strong>Ramon Magsaysay</strong>.
      </li>
      <li>
        The new town came into being with the election of its first officials in{' '}
        <strong>November 1963</strong>.
      </li>
      <li>
        On <strong>June 15, 1968</strong>, Republic Act No. 5276 moved the seat of government to{' '}
        <strong>Bugallon</strong>, where the Municipal Hall stands today.
      </li>
      <li>
        The <strong>Magat Dam</strong> was inaugurated on October 27, 1982, bringing irrigation,
        flood control and hydropower to the region.
      </li>
    </ul>
    <h2>Where Ramon is</h2>
    <p>
      Ramon borders San Mateo to the north, Alicia and San Isidro to the east, the City of Santiago
      to the south, and Cordon to the west across the Diadi River. The Magat River separates it from
      Alfonso Lista, Ifugao.
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
  </>
);

const fil = (
  <>
    <p>
      Ang Ramon ay isang bayan sa timog Isabela, sa rehiyon ng Cagayan Valley, na may {n} barangay
      sa {area} na lupa sa pagitan ng mga ilog Magat at Diadi. Narito ang Magat Dam, isa sa
      pinakamalaking dam sa Pilipinas.
    </p>
    <h2>Kasaysayan</h2>
    <ul className="history-timeline">
      <li>
        Noong <strong>1846</strong>, nagtayo ang mga Espanyol ng kuta na tinawag na Begonia rito
        upang bantayan ang mga kalapit na pamayanan. Itinatag ang pamayanan sa paligid nito noong{' '}
        <strong>1882</strong> at pinangalanang <strong>Oscariz</strong>, mula kay Don Mariano
        Oscariz, isang dating gobernador militar ng Nueva Vizcaya. Barangay pa rin ng Ramon ang
        Oscariz.
      </li>
      <li>
        Noong <strong>Hunyo 18, 1961</strong>, nilikha ng Republic Act No. 3320 ang Bayan ng Ramon
        mula sa mga baryo ng Santiago at San Mateo, na may sentro sa Burgos. Ipinangalan ito kay
        Pangulong <strong>Ramon Magsaysay</strong>.
      </li>
      <li>
        Naitatag ang bagong bayan nang mahalal ang mga unang opisyal nito noong{' '}
        <strong>Nobyembre 1963</strong>.
      </li>
      <li>
        Noong <strong>Hunyo 15, 1968</strong>, inilipat ng Republic Act No. 5276 ang sentro ng
        pamahalaan sa <strong>Bugallon</strong>, kung saan nakatayo ngayon ang Municipal Hall.
      </li>
      <li>
        Binuksan ang <strong>Magat Dam</strong> noong Oktubre 27, 1982, na nagdala ng patubig,
        proteksyon sa baha at kuryente sa rehiyon.
      </li>
    </ul>
    <h2>Kinaroroonan ng Ramon</h2>
    <p>
      Kahangganan ng Ramon ang San Mateo sa hilaga, ang Alicia at San Isidro sa silangan, ang
      Lungsod ng Santiago sa timog, at ang Cordon sa kanluran sa kabila ng Diadi River. Hinahati ito
      ng Magat River mula sa Alfonso Lista, Ifugao.
    </p>
    <h2>Paano pumunta</h2>
    <ul>
      <li>
        <strong>Sa bus mula Maynila:</strong> sumakay ng bus papuntang Santiago City o Isabela, saka
        jeep o tricycle papuntang Ramon. Mga 360 km ang biyahe.
      </li>
      <li>
        <strong>Sa eroplano:</strong> ang pinakamalapit na paliparan ay sa Cauayan, mga 40 km ang
        layo.
      </li>
      <li>
        <strong>Sa loob ng bayan:</strong> may tricycle sa pagitan ng mga barangay at papunta sa
        Magat Dam.
      </li>
    </ul>
    <p>
      Tingnan ang mga pasyalan sa <Link href="/tourism">pahina ng turismo</Link>, o ang{' '}
      <Link href="/government">mga barangay at opisyal</Link>.
    </p>
  </>
);

const ilo = (
  <>
    <p>
      Ti Ramon ket maysa nga ili iti abagatan ti Isabela, iti rehion ti Cagayan Valley, nga addaan
      iti {n} a barangay iti {area} a daga iti nagbaetan dagiti karayan Magat ken Diadi. Ditoy ti
      Magat Dam, maysa kadagiti kadakkelan a dam iti Pilipinas.
    </p>
    <h2>Pakasaritaan</h2>
    <ul className="history-timeline">
      <li>
        Idi <strong>1846</strong>, nangibangon dagiti Espanyol iti sarikedked a naawagan iti
        Begonia ditoy tapno bantayanna dagiti asideg a purok. Naipasdek ti purok iti aglawlawna idi{' '}
        <strong>1882</strong> ket naipanagan iti <strong>Oscariz</strong>, manipud ken ni Don
        Mariano Oscariz, maysa a dati a gobernador militar ti Nueva Vizcaya. Barangay pay laeng ti
        Ramon ti Oscariz.
      </li>
      <li>
        Idi <strong>Hunio 18, 1961</strong>, inaramid ti Republic Act No. 3320 ti Ili ti Ramon
        manipud kadagiti barrio ti Santiago ken San Mateo, nga addaan sentro iti Burgos. Naipanagan
        ken ni Presidente <strong>Ramon Magsaysay</strong>.
      </li>
      <li>
        Nangrugi ti baro nga ili idi napili dagiti umuna nga opisyalna idi{' '}
        <strong>Nobiembre 1963</strong>.
      </li>
      <li>
        Idi <strong>Hunio 15, 1968</strong>, inyakar ti Republic Act No. 5276 ti sentro ti gobierno
        iti <strong>Bugallon</strong>, a sadiay ti yan ti Municipal Hall ita.
      </li>
      <li>
        Naluktan ti <strong>Magat Dam</strong> idi Oktubre 27, 1982, a nangyeg iti padanum, salaknib
        iti layus ken koriente iti rehion.
      </li>
    </ul>
    <h2>Ayan ti Ramon</h2>
    <p>
      Kabeddeng ti Ramon ti San Mateo iti amianan, ti Alicia ken San Isidro iti daya, ti Siudad ti
      Santiago iti abagatan, ken ti Cordon iti laud iti ballasiw ti Diadi River. Isina ti Magat
      River daytoy manipud iti Alfonso Lista, Ifugao.
    </p>
    <h2>Kasano ti mapan</h2>
    <ul>
      <li>
        <strong>Babaen ti bus manipud Manila:</strong> lumugan iti bus nga agturong iti Santiago
        City wenno Isabela, sa jeep wenno tricycle nga agturong iti Ramon. Agarup 360 km ti biahe.
      </li>
      <li>
        <strong>Babaen ti eroplano:</strong> ti kaasitgan a pagtayaban ket iti Cauayan, agarup 40 km
        ti kaadayona.
      </li>
      <li>
        <strong>Iti uneg ti ili:</strong> adda tricycle iti nagbaetan dagiti barangay ken nga
        agturong iti Magat Dam.
      </li>
    </ul>
    <p>
      Kitaen dagiti pagpasiaran iti <Link href="/tourism">panid ti turismo</Link>, wenno dagiti{' '}
      <Link href="/government">barangay ken opisial</Link>.
    </p>
  </>
);

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
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
