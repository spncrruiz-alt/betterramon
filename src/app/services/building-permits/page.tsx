import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/building-permits', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>When you need a building permit</h2>
    <p>
      Before you build, add to, alter, repair, convert or demolish a building. Some minor works,
      such as minor repairs that do not change the structure, may be exempt; ask the Building
      Official first.
    </p>

    <h2>Building permit: step by step</h2>
    <ol>
      <li>
        <strong>Get a locational / zoning clearance</strong> from the Municipal Planning and
        Development Office.
      </li>
      <li>
        <strong>Get a barangay clearance</strong> for construction from your barangay.
      </li>
      <li>
        <strong>Prepare plans</strong> signed and sealed by licensed professionals: architectural,
        civil/structural, electrical, sanitary/plumbing, and mechanical if needed.
      </li>
      <li>
        <strong>Get a Fire Safety Evaluation Clearance</strong> from the Bureau of Fire Protection.
      </li>
      <li>
        <strong>Submit the unified building permit application</strong> with all requirements to the
        Office of the Building Official, then pay the assessed fees at the Municipal
        Treasurer&rsquo;s Office and keep the official receipt.
      </li>
      <li>
        <strong>Post the permit</strong> at the site and keep the construction logbook during the
        work.
      </li>
    </ol>

    <h2>Usual requirements</h2>
    <ul>
      <li>Unified application form for building permit, filled out and notarized where required</li>
      <li>
        Proof of ownership (title or tax declaration) or a lease contract / owner&rsquo;s consent
      </li>
      <li>Locational clearance, barangay clearance and Fire Safety Evaluation Clearance</li>
      <li>Signed and sealed plans and specifications</li>
      <li>Structural analysis for buildings with two or more storeys</li>
      <li>Bill of materials and cost estimate</li>
      <li>Construction safety and health program, for works with workers on site</li>
      <li>Latest real property tax receipt</li>
    </ul>
    <p>
      Ramon&rsquo;s exact checklist and fees: <Tbv />.
    </p>

    <h2>Certificate of occupancy</h2>
    <p>Needed before you use or occupy the finished building. Apply at the same office with:</p>
    <ul>
      <li>
        Certificate of completion, signed by the owner and the engineer or architect in charge
      </li>
      <li>As-built plans, if the work changed from the approved plans</li>
      <li>Construction logbook and photos of the finished building</li>
      <li>Fire Safety Inspection Certificate from the Bureau of Fire Protection</li>
      <li>Copy of the building permit and its official receipt</li>
    </ul>

    <h2>How long it should take</h2>
    <p>
      Under the Ease of Doing Business Act, offices must act within set processing times once your
      requirements are complete. Ask for the office&rsquo;s Citizen&rsquo;s Charter, which lists
      each step and its time limit.
    </p>
  </>
);

const fil = (
  <>
    <h2>Kailan kailangan ng building permit</h2>
    <p>
      Bago magpatayo, magdagdag, magbago, mag-ayos, magpalit ng gamit o magpagiba ng gusali. May
      maliliit na gawain, gaya ng simpleng pagkukumpuni na hindi binabago ang istruktura, na
      maaaring hindi na kailangan nito; magtanong muna sa Building Official.
    </p>

    <h2>Building permit: hakbang-hakbang</h2>
    <ol>
      <li>
        <strong>Kumuha ng locational / zoning clearance</strong> sa Municipal Planning and
        Development Office.
      </li>
      <li>
        <strong>Kumuha ng barangay clearance</strong> para sa konstruksyon sa inyong barangay.
      </li>
      <li>
        <strong>Ihanda ang mga plano</strong> na pirmado at may tatak ng lisensyadong propesyonal:
        architectural, civil/structural, electrical, sanitary/plumbing, at mechanical kung
        kailangan.
      </li>
      <li>
        <strong>Kumuha ng Fire Safety Evaluation Clearance</strong> sa Bureau of Fire Protection.
      </li>
      <li>
        <strong>Isumite ang unified building permit application</strong> kasama ang lahat ng
        kailangan sa Office of the Building Official, saka bayaran ang assessed fees sa Municipal
        Treasurer&rsquo;s Office at itago ang opisyal na resibo.
      </li>
      <li>
        <strong>Ipaskil ang permit</strong> sa lugar ng konstruksyon at panatilihin ang construction
        logbook habang may gawain.
      </li>
    </ol>

    <h2>Karaniwang kailangan</h2>
    <ul>
      <li>Napunang unified application form para sa building permit, notaryado kung kailangan</li>
      <li>
        Patunay ng pagmamay-ari (titulo o tax declaration) o kontrata ng upa / pahintulot ng may-ari
      </li>
      <li>Locational clearance, barangay clearance at Fire Safety Evaluation Clearance</li>
      <li>Pirmado at may tatak na mga plano at specifications</li>
      <li>Structural analysis para sa gusaling may dalawa o higit pang palapag</li>
      <li>Bill of materials at cost estimate</li>
      <li>Construction safety and health program, kung may mga trabahador sa site</li>
      <li>Pinakahuling resibo ng amilyar</li>
    </ul>
    <p>
      Eksaktong checklist at bayarin sa Ramon: <Tbv />.
    </p>

    <h2>Certificate of occupancy</h2>
    <p>
      Kailangan bago gamitin o tirahan ang natapos na gusali. Mag-apply sa parehong opisina dala
      ang:
    </p>
    <ul>
      <li>Certificate of completion, pirmado ng may-ari at ng engineer o architect na namahala</li>
      <li>As-built plans, kung may binago mula sa aprubadong plano</li>
      <li>Construction logbook at mga larawan ng natapos na gusali</li>
      <li>Fire Safety Inspection Certificate mula sa Bureau of Fire Protection</li>
      <li>Kopya ng building permit at ng opisyal na resibo nito</li>
    </ul>

    <h2>Gaano katagal dapat</h2>
    <p>
      Ayon sa Ease of Doing Business Act, may takdang oras ang mga opisina sa pagproseso kapag
      kumpleto na ang iyong mga kailangan. Hingin ang Citizen&rsquo;s Charter ng opisina, kung saan
      nakalista ang bawat hakbang at ang takdang oras nito.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Kaano a masapul ti building permit</h2>
    <p>
      Sakbay nga agipatakder, aginayon, agbaliw, agpaayos, agusar iti sabali wenno agpadigra ti
      pasdek. Adda bassit a trabaho, kas iti simple a panangtarimaan a saan a mangbaliw iti
      estruktura, a mabalin a saanen a masapul daytoy; agsaludsod nga umuna iti Building Official.
    </p>

    <h2>Building permit: addang ti addang</h2>
    <ol>
      <li>
        <strong>Agala ti locational / zoning clearance</strong> iti Municipal Planning and
        Development Office.
      </li>
      <li>
        <strong>Agala ti barangay clearance</strong> para iti konstruksion iti barangaymo.
      </li>
      <li>
        <strong>Isagana dagiti plano</strong> a pirmado ken addaan selio dagiti lisensiado a
        propesional: architectural, civil/structural, electrical, sanitary/plumbing, ken mechanical
        no masapul.
      </li>
      <li>
        <strong>Agala ti Fire Safety Evaluation Clearance</strong> iti Bureau of Fire Protection.
      </li>
      <li>
        <strong>Isumite ti unified building permit application</strong> a kadua amin a kasapulan iti
        Office of the Building Official, kalpasanna bayadan dagiti assessed fees iti Municipal
        Treasurer&rsquo;s Office ken idulin ti opisial a resibo.
      </li>
      <li>
        <strong>Ipaskil ti permit</strong> iti lugar ti konstruksion ken taginayonen ti construction
        logbook bayat ti trabaho.
      </li>
    </ol>

    <h2>Gagangay a kasapulan</h2>
    <ul>
      <li>Napnoan a unified application form para iti building permit, notarisado no masapul</li>
      <li>
        Pammaneknek ti pannakaikukua (titulo wenno tax declaration) wenno kontrata ti abang /
        pammalubos ti makinkukua
      </li>
      <li>Locational clearance, barangay clearance ken Fire Safety Evaluation Clearance</li>
      <li>Pirmado ken addaan selio a plano ken specifications</li>
      <li>Structural analysis para iti pasdek nga addaan dua wenno ad-adu pay a kadsaaran</li>
      <li>Bill of materials ken cost estimate</li>
      <li>Construction safety and health program, no adda trabahador iti site</li>
      <li>Kaudian a resibo ti amilyar</li>
    </ul>
    <p>
      Eksakto a checklist ken bayad idiay Ramon: <Tbv />.
    </p>

    <h2>Certificate of occupancy</h2>
    <p>
      Masapul sakbay nga usaren wenno pagnaedan ti nalpas a pasdek. Ag-apply iti isu met laeng nga
      opisina nga itugot ti:
    </p>
    <ul>
      <li>
        Certificate of completion, pirmado ti makinkukua ken ti engineer wenno architect a
        nangimaton
      </li>
      <li>As-built plans, no adda nabaliwan manipud iti naaprobaran a plano</li>
      <li>Construction logbook ken dagiti ladawan ti nalpas a pasdek</li>
      <li>Fire Safety Inspection Certificate manipud iti Bureau of Fire Protection</li>
      <li>Kopia ti building permit ken ti opisial a resibona</li>
    </ul>

    <h2>Kasano kabayag</h2>
    <p>
      Segun iti Ease of Doing Business Act, adda naituding nga oras ti panagproseso dagiti opisina
      no kompleto dagiti kasapulam. Dawaten ti Citizen&rsquo;s Charter ti opisina, a nakailistaan ti
      tunggal addang ken ti naituding nga orasna.
    </p>
  </>
);

export default function BuildingPermitsGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Apply at the Office of the Building Official (usually the Municipal Engineering Office)."
          fil="Mag-apply sa Office of the Building Official (kadalasan ay ang Municipal Engineering Office)."
          ilo="Ag-apply iti Office of the Building Official (kaaduan ket ti Municipal Engineering Office)."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
