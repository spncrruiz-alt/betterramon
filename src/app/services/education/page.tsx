import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/education', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Free college tuition</h2>
    <p>
      Under the Universal Access to Quality Tertiary Education Act, Filipino students in state
      universities and colleges, local universities and colleges, and state-run technical schools
      pay no tuition and miscellaneous fees, if they meet admission and retention rules.
    </p>
    <h2>Scholarships and grants</h2>
    <ul>
      <li>
        <strong>Tertiary Education Subsidy (TES)</strong> from UniFAST, for students from low-income
        households. Apply through your college.
      </li>
      <li>
        <strong>CHED scholarships</strong> for incoming college freshmen with good grades.
      </li>
      <li>
        <strong>DOST-SEI scholarships</strong> for science, technology, engineering and math
        courses. The qualifying exam is usually held once a year.
      </li>
      <li>
        <strong>Local scholarships</strong> from the LGU or the province: <Tbv />.
      </li>
    </ul>
    <h2>Finish basic education</h2>
    <p>
      Out-of-school youth and adults can finish elementary or high school through DepEd&rsquo;s
      Alternative Learning System (ALS). Ask the nearest public school or the DepEd district office.
    </p>
  </>
);

const fil = (
  <>
    <h2>Libreng matrikula sa kolehiyo</h2>
    <p>
      Sa ilalim ng Universal Access to Quality Tertiary Education Act, walang bayad sa matrikula at
      miscellaneous fees ang mga estudyanteng Pilipino sa state universities and colleges, local
      universities and colleges, at mga technical school ng pamahalaan, basta pasado sila sa
      patakaran sa pagpasok at pananatili.
    </p>
    <h2>Mga scholarship at grant</h2>
    <ul>
      <li>
        <strong>Tertiary Education Subsidy (TES)</strong> mula sa UniFAST, para sa mga estudyante
        mula sa mga pamilyang mababa ang kita. Mag-apply sa iyong kolehiyo.
      </li>
      <li>
        <strong>CHED scholarship</strong> para sa mga papasok na freshman na may magandang grado.
      </li>
      <li>
        <strong>DOST-SEI scholarship</strong> para sa mga kursong science, technology, engineering
        at math. Kadalasang isang beses sa isang taon ang qualifying exam.
      </li>
      <li>
        <strong>Lokal na scholarship</strong> mula sa LGU o probinsya: <Tbv />.
      </li>
    </ul>
    <h2>Tapusin ang pangunahing edukasyon</h2>
    <p>
      Ang mga out-of-school youth at matatanda ay maaaring makatapos ng elementarya o high school sa
      Alternative Learning System (ALS) ng DepEd. Magtanong sa pinakamalapit na pampublikong
      paaralan o sa DepEd district office.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Libre a matrikula iti kolehio</h2>
    <p>
      Iti sidong ti Universal Access to Quality Tertiary Education Act, awan ti bayad ti matrikula
      ken miscellaneous fees dagiti estudiante a Pilipino iti state universities and colleges, local
      universities and colleges, ken dagiti technical school ti gobierno, no makapasa da kadagiti
      pagannurotan ti iseserrek ken panagtalinaed.
    </p>
    <h2>Dagiti scholarship ken grant</h2>
    <ul>
      <li>
        <strong>Tertiary Education Subsidy (TES)</strong> manipud iti UniFAST, para kadagiti
        estudiante a naggapu iti pamilia a bassit ti sapulna. Ag-apply iti kolehiom.
      </li>
      <li>
        <strong>CHED scholarship</strong> para kadagiti sumrek a freshman a nasayaat ti gradona.
      </li>
      <li>
        <strong>DOST-SEI scholarship</strong> para kadagiti kurso a science, technology, engineering
        ken math. Kaaduan nga maminsan iti tawen ti qualifying exam.
      </li>
      <li>
        <strong>Lokal a scholarship</strong> manipud iti LGU wenno probinsia: <Tbv />.
      </li>
    </ul>
    <h2>Leppasen ti nangruna nga edukasion</h2>
    <p>
      Dagiti out-of-school youth ken nataengan ket mabalin a makalpas iti elementaria wenno high
      school babaen ti Alternative Learning System (ALS) ti DepEd. Agsaludsod iti kaasitgan a
      publiko a pagadalan wenno iti DepEd district office.
    </p>
  </>
);

export default function EducationGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="School enrollment is handled by each school and DepEd; scholarships by the agencies named below."
          fil="Ang enrollment ay hawak ng bawat paaralan at DepEd; ang scholarship ay ng mga ahensyang nakalista sa ibaba."
          ilo="Ti enrollment ket iggem ti tunggal pagadalan ken DepEd; ti scholarship ket dagiti ahensia a nailista iti baba."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
