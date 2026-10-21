import Link from 'next/link';
import MeasuresTable from '@/components/MeasuresTable';
import L from '@/components/L';
import { ordinances, resolutions } from '@/data/ramon';

const tables = {
  ord: <MeasuresTable items={ordinances} />,
  res: <MeasuresTable items={resolutions} />,
};

const en = (
  <>
    <p>
      The Sangguniang Bayan (SB) is Ramon&rsquo;s law-making body. It is led by the Vice Mayor and
      includes the elected councilors and the presidents of the barangay captains&rsquo; league and
      the SK federation. See the current members on the{' '}
      <Link href="/government">Government page</Link>.
    </p>
    <h2>Ordinances</h2>
    <p>
      An ordinance is a local law, such as a tax, fee, traffic or zoning rule. It needs the
      Mayor&rsquo;s approval and is reviewed by the provincial board.
    </p>
    {tables.ord}
    <h2>Resolutions</h2>
    <p>
      A resolution states the SB&rsquo;s position or approves a one-time act, such as authorizing
      the Mayor to sign an agreement.
    </p>
    {tables.res}
    <h2>How to take part</h2>
    <ul>
      <li>
        <strong>Watch a session.</strong> SB sessions are open to the public unless the members
        decide otherwise for a specific reason. Regular sessions are held at least once a week.
      </li>
      <li>
        <strong>Get a copy</strong> of an ordinance or resolution from the Office of the SB
        Secretary at the Municipal Hall. Bring a valid ID and the title or number if you know it.
      </li>
      <li>
        <strong>Speak at a public hearing</strong> on proposed taxes, fees and major ordinances,
        which must be announced in advance.
      </li>
    </ul>
  </>
);

const fil = (
  <>
    <p>
      Ang Sangguniang Bayan (SB) ang gumagawa ng batas sa Ramon. Pinamumunuan ito ng Pangalawang
      Punong Bayan at binubuo ng mga halal na konsehal at ng mga pangulo ng liga ng mga kapitan ng
      barangay at ng SK federation. Tingnan ang kasalukuyang kasapi sa{' '}
      <Link href="/government">pahina ng Pamahalaan</Link>.
    </p>
    <h2>Mga ordinansa</h2>
    <p>
      Ang ordinansa ay lokal na batas, gaya ng buwis, bayarin, patakaran sa trapiko o zoning.
      Kailangan nito ang pag-apruba ng Punong Bayan at sinusuri ng Sangguniang Panlalawigan.
    </p>
    {tables.ord}
    <h2>Mga resolusyon</h2>
    <p>
      Ang resolusyon ay nagsasaad ng posisyon ng SB o nag-aapruba ng isang beses na gawain, gaya ng
      pagbibigay-pahintulot sa Punong Bayan na pumirma ng kasunduan.
    </p>
    {tables.res}
    <h2>Paano makilahok</h2>
    <ul>
      <li>
        <strong>Manood ng sesyon.</strong> Bukas sa publiko ang mga sesyon ng SB maliban kung
        magpasya ang mga kasapi na hindi para sa tiyak na dahilan. Hindi bababa sa isang beses kada
        linggo ang regular na sesyon.
      </li>
      <li>
        <strong>Kumuha ng kopya</strong> ng ordinansa o resolusyon sa Office of the SB Secretary sa
        Municipal Hall. Magdala ng valid ID at ng pamagat o numero kung alam mo.
      </li>
      <li>
        <strong>Magsalita sa public hearing</strong> tungkol sa panukalang buwis, bayarin at
        malalaking ordinansa, na dapat ipaalam nang maaga.
      </li>
    </ul>
  </>
);

const ilo = (
  <>
    <p>
      Ti Sangguniang Bayan (SB) ti mangar-aramid iti linteg ti Ramon. Idauluan daytoy ti Bise Mayor
      ken buklen dagiti napili a konsehal ken dagiti presidente ti liga dagiti kapitan ti barangay
      ken ti SK federation. Kitaen dagiti agdama a kameng iti{' '}
      <Link href="/government">panid ti Gobierno</Link>.
    </p>
    <h2>Dagiti ordinansa</h2>
    <p>
      Ti ordinansa ket lokal a linteg, kas iti buis, bayad, pagannurotan ti trapiko wenno zoning.
      Kasapulanna ti pammalubos ti Mayor ken repasuen ti Sangguniang Panlalawigan.
    </p>
    {tables.ord}
    <h2>Dagiti resolusion</h2>
    <p>
      Ti resolusion ket mangibaga iti takder ti SB wenno mangaprobar iti maminsan nga aramid, kas
      iti panangipalubos iti Mayor a mangpirma iti katulagan.
    </p>
    {tables.res}
    <h2>Kasano ti makipaset</h2>
    <ul>
      <li>
        <strong>Buyaen ti sesion.</strong> Nakalukat iti publiko dagiti sesion ti SB malaksid no
        ikeddeng dagiti kameng ti saan para iti espesipiko a gapu. Saan a basbassit ngem maminsan
        iti lawas ti regular a sesion.
      </li>
      <li>
        <strong>Agala iti kopia</strong> ti ordinansa wenno resolusion iti Office of the SB
        Secretary iti Municipal Hall. Mangiyeg iti valid ID ken ti titulo wenno numero no ammom.
      </li>
      <li>
        <strong>Agsao iti public hearing</strong> maipapan kadagiti maisingasing a buis, bayad ken
        dadakkel nga ordinansa, a masapul a maipakaammo a nasapa.
      </li>
    </ul>
  </>
);

// Shared by /legislative and its ordinance and resolution pages.
export default function LegislativeGuide() {
  return <L en={en} fil={fil} ilo={ilo} />;
}
