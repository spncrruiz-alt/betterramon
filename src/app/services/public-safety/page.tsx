import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/public-safety', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Emergency numbers</h2>
    <p>
      PNP Ramon, BFP Ramon, LDRRMO and ISELCO numbers are in the red bar at the top of every page
      and on the <Link href="/contact">contact page</Link>. Save them on your phone now.
    </p>
    <h2>Police and NBI clearance</h2>
    <ul>
      <li>
        <strong>Police clearance:</strong> apply online through the National Police Clearance
        System, pay, then go to the police station you chose for photo and fingerprints.
      </li>
      <li>
        <strong>NBI clearance:</strong> apply online, pay, then appear at an NBI clearance center or
        satellite site.
      </li>
      <li>
        <strong>Barangay clearance:</strong> from your barangay hall.
      </li>
    </ul>
    <h2>Fire safety</h2>
    <p>
      Businesses and buildings need a Fire Safety Inspection Certificate from the Bureau of Fire
      Protection. At home, keep LPG tanks upright and away from heat, avoid overloading outlets, and
      never leave cooking unattended.
    </p>
    <h2>Be ready for typhoons and floods</h2>
    <ul>
      <li>
        Prepare a go-bag: water, food, medicine, flashlight, power bank, IDs and documents in a
        waterproof bag.
      </li>
      <li>
        Know your barangay&rsquo;s evacuation center and route. Evacuation centers in Ramon: <Tbv />
        .
      </li>
      <li>Follow PAGASA warnings and LDRRMO advisories, and evacuate early when told to.</li>
      <li>Watch the Magat River and Diadi River levels if you live near them.</li>
    </ul>
  </>
);

const fil = (
  <>
    <h2>Mga numero sa emergency</h2>
    <p>
      Nasa pulang bar sa itaas ng bawat pahina at sa <Link href="/contact">contact page</Link> ang
      mga numero ng PNP Ramon, BFP Ramon, LDRRMO at ISELCO. I-save na ang mga ito sa iyong telepono.
    </p>
    <h2>Police at NBI clearance</h2>
    <ul>
      <li>
        <strong>Police clearance:</strong> mag-apply online sa National Police Clearance System,
        magbayad, at pumunta sa napiling istasyon ng pulis para sa litrato at fingerprint.
      </li>
      <li>
        <strong>NBI clearance:</strong> mag-apply online, magbayad, at humarap sa NBI clearance
        center o satellite site.
      </li>
      <li>
        <strong>Barangay clearance:</strong> mula sa iyong barangay hall.
      </li>
    </ul>
    <h2>Kaligtasan sa sunog</h2>
    <p>
      Kailangan ng mga negosyo at gusali ang Fire Safety Inspection Certificate mula sa Bureau of
      Fire Protection. Sa bahay, panatilihing nakatayo ang tangke ng LPG at malayo sa init, huwag
      sobrahan ang saksakan, at huwag iwanang nakasalang ang niluluto.
    </p>
    <h2>Maghanda sa bagyo at baha</h2>
    <ul>
      <li>
        Maghanda ng go-bag: tubig, pagkain, gamot, flashlight, power bank, ID at mga dokumento sa
        bag na hindi nababasa.
      </li>
      <li>
        Alamin ang evacuation center at ruta ng iyong barangay. Mga evacuation center sa Ramon:{' '}
        <Tbv />.
      </li>
      <li>Sundin ang babala ng PAGASA at abiso ng LDRRMO, at lumikas agad kapag sinabihan.</li>
      <li>Bantayan ang taas ng tubig sa Magat at Diadi River kung malapit ka rito.</li>
    </ul>
  </>
);

const ilo = (
  <>
    <h2>Dagiti numero iti emergency</h2>
    <p>
      Adda iti nalabaga a bar iti ngato ti tunggal panid ken iti{' '}
      <Link href="/contact">contact page</Link> dagiti numero ti PNP Ramon, BFP Ramon, LDRRMO ken
      ISELCO. I-save dagitoy ita iti teleponom.
    </p>
    <h2>Police ken NBI clearance</h2>
    <ul>
      <li>
        <strong>Police clearance:</strong> ag-apply online iti National Police Clearance System,
        agbayad, sa mapan iti pinilim nga estasion ti polis para iti retrato ken fingerprint.
      </li>
      <li>
        <strong>NBI clearance:</strong> ag-apply online, agbayad, sa umay iti NBI clearance center
        wenno satellite site.
      </li>
      <li>
        <strong>Barangay clearance:</strong> manipud iti barangay hall.
      </li>
    </ul>
    <h2>Kinatalged iti uram</h2>
    <p>
      Kasapulan dagiti negosio ken pasdek ti Fire Safety Inspection Certificate manipud iti Bureau
      of Fire Protection. Iti balay, itakder ti tangke ti LPG ken iyadayo iti pudot, dimo pagadduen
      ti maisaksak, ken dimo panawan ti agluto.
    </p>
    <h2>Agsagana iti bagyo ken layus</h2>
    <ul>
      <li>
        Agsagana iti go-bag: danum, taraon, agas, flashlight, power bank, ID ken dokumento iti bag a
        saan a mabasa.
      </li>
      <li>
        Ammuen ti evacuation center ken dalan ti barangaymo. Dagiti evacuation center iti Ramon:{' '}
        <Tbv />.
      </li>
      <li>Surotem ti pakdaar ti PAGASA ken pakaammo ti LDRRMO, ken bumakuit a dagus no maibaga.</li>
      <li>Bantayan ti kangato ti danum ti Magat ken Diadi River no asidegka kadagitoy.</li>
    </ul>
  </>
);

export default function PublicSafetyGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="In an emergency, call 911 or the local numbers on the contact page."
          fil="Sa emergency, tumawag sa 911 o sa mga lokal na numero sa contact page."
          ilo="Iti emergency, umawag iti 911 wenno kadagiti lokal a numero iti contact page."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
