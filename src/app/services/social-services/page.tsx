import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/social-services', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Senior citizen ID</h2>
    <p>
      For residents 60 years old and above. Apply at the Office of the Senior Citizens Affairs
      (OSCA). Bring proof of age (birth certificate or a government ID with birth date), proof of
      residence such as a barangay certificate, and ID photos. The ID gives the 20% discount and VAT
      exemption on many goods and services.
    </p>

    <h2>PWD ID</h2>
    <p>
      For persons with disabilities. Apply at the Persons with Disability Affairs Office or the
      MSWDO. Bring a medical certificate stating the disability (or a school assessment for learning
      disabilities), proof of residence and ID photos. The ID also gives the 20% discount and VAT
      exemption.
    </p>

    <h2>Solo parent ID</h2>
    <p>
      For solo parents raising a child alone. Apply at the MSWDO. Bring proof of solo parent status
      (for example, a death certificate of the spouse, proof of separation or abandonment, or the
      child&rsquo;s birth certificate), a barangay certificate of residence and ID photos. The ID is
      renewed every year.
    </p>

    <h2>Financial and other assistance</h2>
    <p>
      The MSWDO can assess requests for medical, burial, educational or crisis assistance. Bring a
      valid ID, a barangay certificate of indigency and documents for your request, such as a
      medical abstract, prescription, billing statement or death certificate.
    </p>
    <p>
      Ramon&rsquo;s office schedule and exact requirements: <Tbv />.
    </p>
  </>
);

const fil = (
  <>
    <h2>Senior citizen ID</h2>
    <p>
      Para sa mga residenteng 60 taong gulang pataas. Mag-apply sa Office of the Senior Citizens
      Affairs (OSCA). Magdala ng patunay ng edad (birth certificate o government ID na may petsa ng
      kapanganakan), patunay ng paninirahan gaya ng barangay certificate, at ID photo. May 20% na
      diskwento at VAT exemption ang ID sa maraming produkto at serbisyo.
    </p>

    <h2>PWD ID</h2>
    <p>
      Para sa mga taong may kapansanan. Mag-apply sa Persons with Disability Affairs Office o sa
      MSWDO. Magdala ng medical certificate na nagsasaad ng kapansanan (o school assessment para sa
      learning disability), patunay ng paninirahan at ID photo. May 20% na diskwento at VAT
      exemption din ang ID.
    </p>

    <h2>Solo parent ID</h2>
    <p>
      Para sa mga magulang na mag-isang nagpapalaki ng anak. Mag-apply sa MSWDO. Magdala ng patunay
      ng pagiging solo parent (halimbawa, death certificate ng asawa, patunay ng paghihiwalay o
      pag-abandona, o birth certificate ng anak), barangay certificate of residence at ID photo.
      Nire-renew ang ID taun-taon.
    </p>

    <h2>Tulong pinansyal at iba pa</h2>
    <p>
      Sinusuri ng MSWDO ang mga hiling para sa tulong medikal, pampalibing, pang-edukasyon o sa oras
      ng krisis. Magdala ng valid ID, barangay certificate of indigency at mga dokumento para sa
      hiling, gaya ng medical abstract, reseta, billing statement o death certificate.
    </p>
    <p>
      Iskedyul ng opisina at eksaktong kailangan sa Ramon: <Tbv />.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Senior citizen ID</h2>
    <p>
      Para kadagiti agnanaed nga 60 ti tawenna nga agpangato. Ag-apply iti Office of the Senior
      Citizens Affairs (OSCA). Agitugot ti pammaneknek ti tawen (birth certificate wenno government
      ID nga addaan petsa ti pannakayanak), pammaneknek ti panagnaed kas iti barangay certificate,
      ken ID photo. Adda 20% a diskuento ken VAT exemption ti ID iti adu a produkto ken serbisio.
    </p>

    <h2>PWD ID</h2>
    <p>
      Para kadagiti tattao nga addaan disabilidad. Ag-apply iti Persons with Disability Affairs
      Office wenno iti MSWDO. Agitugot ti medical certificate a mangibaga ti disabilidad (wenno
      school assessment para iti learning disability), pammaneknek ti panagnaed ken ID photo. Adda
      met 20% a diskuento ken VAT exemption ti ID.
    </p>

    <h2>Solo parent ID</h2>
    <p>
      Para kadagiti nagannak a bukbukodda a mangpadakkel ti anak. Ag-apply iti MSWDO. Agitugot ti
      pammaneknek a solo parent (kas pagarigan, death certificate ti asawa, pammaneknek ti panagsina
      wenno panangbaybay-a, wenno birth certificate ti ubing), barangay certificate of residence ken
      ID photo. Mai-renew ti ID kada tawen.
    </p>

    <h2>Tulong pinansial ken dadduma pay</h2>
    <p>
      Sukimaten ti MSWDO dagiti dawat para iti tulong medikal, pangitabon, pang-edukasion wenno iti
      panawen ti krisis. Agitugot ti valid ID, barangay certificate of indigency ken dagiti
      dokumento para iti dawatmo, kas iti medical abstract, reseta, billing statement wenno death
      certificate.
    </p>
    <p>
      Iskedyul ti opisina ken eksakto a kasapulan idiay Ramon: <Tbv />.
    </p>
  </>
);

export default function SocialServicesGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Apply at the Municipal Social Welfare and Development Office (MSWDO) or the office named below."
          fil="Mag-apply sa Municipal Social Welfare and Development Office (MSWDO) o sa opisinang nakasaad sa ibaba."
          ilo="Ag-apply iti Municipal Social Welfare and Development Office (MSWDO) wenno iti opisina a nadakamat iti baba."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
