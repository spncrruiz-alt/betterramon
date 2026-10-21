import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/agriculture', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Register in RSBSA first</h2>
    <p>
      The Registry System for Basic Sectors in Agriculture (RSBSA) is the list national agencies use
      to give farmers and fisherfolk seeds, fertilizer, fuel subsidies, cash aid, loans and free
      crop insurance. If you are not registered, you can miss these programs.
    </p>
    <ul>
      <li>Register at the MAO with the RSBSA enrollment form.</li>
      <li>
        Bring a valid ID, a recent ID photo, and proof of your farm: tax declaration, title, a
        tenancy or lease agreement, or a barangay certification.
      </li>
      <li>Update your record when your farm area, crops or address change.</li>
    </ul>
    <h2>Crop insurance (PCIC)</h2>
    <p>
      The Philippine Crop Insurance Corporation insures rice, corn, high-value crops, livestock and
      fisheries. Premiums are free for subsistence farmers and fisherfolk registered in RSBSA.
      Enroll before planting through the MAO or a PCIC agent, and file a claim soon after damage
      from typhoons, floods, drought or pests.
    </p>
    <h2>Other help from the MAO</h2>
    <ul>
      <li>Seed and fertilizer distribution, when available</li>
      <li>Technical advice on crops, pests and soil</li>
      <li>Farm damage reports after calamities</li>
      <li>Referral to DA, PhilRice and Landbank programs</li>
    </ul>
    <p>
      Current Ramon distributions and schedules: <Tbv />.
    </p>
  </>
);

const fil = (
  <>
    <h2>Magparehistro muna sa RSBSA</h2>
    <p>
      Ang Registry System for Basic Sectors in Agriculture (RSBSA) ang listahang ginagamit ng mga
      ahensya ng pamahalaan sa pagbibigay ng binhi, abono, fuel subsidy, ayuda, pautang at libreng
      crop insurance sa mga magsasaka at mangingisda. Kapag hindi ka nakarehistro, maaari kang
      maiwan sa mga programang ito.
    </p>
    <ul>
      <li>Magparehistro sa MAO gamit ang RSBSA enrollment form.</li>
      <li>
        Magdala ng valid ID, bagong ID picture, at patunay ng iyong sakahan: tax declaration,
        titulo, kasunduan sa pagsasaka o upa, o barangay certification.
      </li>
      <li>I-update ang iyong rekord kapag nagbago ang laki ng sakahan, pananim o tirahan.</li>
    </ul>
    <h2>Crop insurance (PCIC)</h2>
    <p>
      Ini-insure ng Philippine Crop Insurance Corporation ang palay, mais, high-value crops, alagang
      hayop at pangisdaan. Libre ang premium para sa maliliit na magsasaka at mangingisdang
      nakarehistro sa RSBSA. Mag-enroll bago magtanim sa MAO o sa ahente ng PCIC, at mag-file ng
      claim agad matapos ang pinsala mula sa bagyo, baha, tagtuyot o peste.
    </p>
    <h2>Iba pang tulong ng MAO</h2>
    <ul>
      <li>Pamamahagi ng binhi at abono, kapag mayroon</li>
      <li>Payo sa pananim, peste at lupa</li>
      <li>Ulat ng pinsala sa sakahan matapos ang kalamidad</li>
      <li>Pag-refer sa mga programa ng DA, PhilRice at Landbank</li>
    </ul>
    <p>
      Kasalukuyang pamamahagi at iskedyul sa Ramon: <Tbv />.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Agparehistro nga umuna iti RSBSA</h2>
    <p>
      Ti Registry System for Basic Sectors in Agriculture (RSBSA) ti listaan nga us-usaren dagiti
      ahensia ti gobierno iti panangted iti bukel, abono, fuel subsidy, tulong a kuarta, pautang ken
      libre a crop insurance kadagiti mannalon ken mangngalap. No saanka a nakarehistro, mabalin a
      saanka a mairaman kadagitoy a programa.
    </p>
    <ul>
      <li>Agparehistro iti MAO babaen ti RSBSA enrollment form.</li>
      <li>
        Mangiyeg iti valid ID, baro nga ID picture, ken pammaneknek ti talonmo: tax declaration,
        titulo, katulagan ti panagtalon wenno abang, wenno barangay certification.
      </li>
      <li>I-update ti rekordmo no agbaliw ti kadakkel ti talon, mula wenno pagnanaedan.</li>
    </ul>
    <h2>Crop insurance (PCIC)</h2>
    <p>
      Ti Philippine Crop Insurance Corporation ket mangi-insure iti pagay, mais, high-value crops,
      taraken ken pangalapan. Libre ti premium para kadagiti babassit a mannalon ken mangngalap a
      nakarehistro iti RSBSA. Ag-enroll sakbay ti panagmula iti MAO wenno ahente ti PCIC, ken
      ag-file iti claim a dagus kalpasan ti dadael ti bagyo, layus, tikag wenno peste.
    </p>
    <h2>Dadduma pay a tulong ti MAO</h2>
    <ul>
      <li>Panangiwaras iti bukel ken abono, no adda</li>
      <li>Balakad maipapan iti mula, peste ken daga</li>
      <li>Report ti dadael ti talon kalpasan ti kalamidad</li>
      <li>Panangirefer kadagiti programa ti DA, PhilRice ken Landbank</li>
    </ul>
    <p>
      Agdama a panangiwaras ken iskedyul iti Ramon: <Tbv />.
    </p>
  </>
);

export default function AgricultureGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Farm programs are handled by the Municipal Agriculture Office (MAO)."
          fil="Ang mga programa sa pagsasaka ay hawak ng Municipal Agriculture Office (MAO)."
          ilo="Dagiti programa ti panagtalon ket iggem ti Municipal Agriculture Office (MAO)."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
