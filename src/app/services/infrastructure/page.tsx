import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/infrastructure', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Building or renovating?</h2>
    <p>
      You need a building permit before work starts and a certificate of occupancy before you use
      the building. See the{' '}
      <Link href="/services/building-permits">building and occupancy permit guide</Link>.
    </p>
    <h2>Report a road, drainage or streetlight problem</h2>
    <ul>
      <li>Barangay roads and drainage: report to your barangay hall first.</li>
      <li>
        Municipal roads, bridges and public buildings: report to the Municipal Engineering Office.
      </li>
      <li>National roads: report to the DPWH district engineering office covering Ramon.</li>
      <li>Include the exact location, a photo and the date you noticed the problem.</li>
    </ul>
    <h2>Know your public works projects</h2>
    <p>
      Government projects must post a project billboard on site showing the project name, cost,
      contractor, source of funds and contract period. If a project looks unfinished, poor or
      missing, report it to the implementing office or through the national Sumbong sa Pangulo
      portal for flood control projects.
    </p>
    <p>
      A list of public works projects in Ramon: <Tbv />.
    </p>
  </>
);

const fil = (
  <>
    <h2>Magtatayo o magre-renovate?</h2>
    <p>
      Kailangan mo ng building permit bago magsimula at certificate of occupancy bago gamitin ang
      gusali. Tingnan ang{' '}
      <Link href="/services/building-permits">gabay sa building at occupancy permit</Link>.
    </p>
    <h2>Isumbong ang sira sa kalsada, kanal o ilaw sa poste</h2>
    <ul>
      <li>Kalsada at kanal ng barangay: unang isumbong sa barangay hall.</li>
      <li>Kalsada, tulay at gusali ng munisipyo: isumbong sa Municipal Engineering Office.</li>
      <li>National road: isumbong sa DPWH district engineering office na sakop ang Ramon.</li>
      <li>Isama ang eksaktong lokasyon, larawan at petsa nang mapansin ang problema.</li>
    </ul>
    <h2>Alamin ang mga proyekto ng pamahalaan</h2>
    <p>
      Dapat may project billboard sa lugar ng bawat proyekto ng pamahalaan na nagpapakita ng
      pangalan, halaga, kontratista, pinagmulan ng pondo at panahon ng kontrata. Kung mukhang hindi
      tapos, palpak o wala ang proyekto, isumbong ito sa opisinang nagpapatupad o sa Sumbong sa
      Pangulo portal para sa mga flood control project.
    </p>
    <p>
      Listahan ng mga proyekto sa Ramon: <Tbv />.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Agibangon wenno agpabaro?</h2>
    <p>
      Kasapulam ti building permit sakbay ti panangrugi ken certificate of occupancy sakbay nga
      usaren ti pasdek. Kitaen ti{' '}
      <Link href="/services/building-permits">giya iti building ken occupancy permit</Link>.
    </p>
    <h2>Ireport ti dadael ti kalsada, kanal wenno silaw iti poste</h2>
    <ul>
      <li>Kalsada ken kanal ti barangay: ireport nga umuna iti barangay hall.</li>
      <li>Kalsada, rangtay ken pasdek ti munisipio: ireport iti Municipal Engineering Office.</li>
      <li>National road: ireport iti DPWH district engineering office a sakupenna ti Ramon.</li>
      <li>Iraman ti eksakto a lugar, retrato ken petsa a nakitam ti problema.</li>
    </ul>
    <h2>Ammuen dagiti proyekto ti gobierno</h2>
    <p>
      Masapul nga adda project billboard iti lugar ti tunggal proyekto ti gobierno a mangipakita iti
      nagan, gatad, kontratista, nagtaudan ti pondo ken paset ti kontrata. No kasla saan a nalpas,
      nadadael wenno awan ti proyekto, ireport daytoy iti opisina a mangipatpatungpal wenno iti
      Sumbong sa Pangulo portal para kadagiti flood control project.
    </p>
    <p>
      Listaan dagiti proyekto iti Ramon: <Tbv />.
    </p>
  </>
);

export default function InfrastructureGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Local roads, drainage and public buildings are handled by the Municipal Engineering Office."
          fil="Ang mga lokal na kalsada, kanal at pampublikong gusali ay hawak ng Municipal Engineering Office."
          ilo="Dagiti lokal a kalsada, kanal ken publiko a pasdek ket iggem ti Municipal Engineering Office."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
