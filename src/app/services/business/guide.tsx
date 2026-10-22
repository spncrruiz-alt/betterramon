import Link from 'next/link';
import { GuideNotice } from '@/components/Guide';
import L, { Tbv } from '@/components/L';

const en = (
  <>
    <h2>New business: step by step</h2>
    <ol>
      <li>
        <strong>Register your business name or entity.</strong> Sole proprietors register with DTI
        (online through the Business Name Registration System). Corporations and partnerships
        register with SEC; cooperatives with CDA.
      </li>
      <li>
        <strong>Get a barangay business clearance</strong> from the barangay where the business is
        located.
      </li>
      <li>
        <strong>Apply for a Mayor&rsquo;s (business) permit</strong> at the BPLO / Business One-Stop
        Shop using the unified application form. Pay the assessed fees at the Municipal
        Treasurer&rsquo;s Office and keep the official receipt.
      </li>
      <li>
        <strong>Get a Fire Safety Inspection Certificate</strong> from the Bureau of Fire
        Protection, usually processed with the permit.
      </li>
      <li>
        <strong>Register with BIR</strong> at the Revenue District Office covering Ramon, or online
        through BIR ORUS. Since 2024 there is no more &#8369;500 annual registration fee.
      </li>
      <li>
        <strong>If you have employees,</strong> register as an employer with SSS, PhilHealth and
        Pag-IBIG.
      </li>
    </ol>

    <h2>Usual requirements</h2>
    <ul>
      <li>Filled-out unified business application form</li>
      <li>DTI, SEC or CDA registration</li>
      <li>Barangay business clearance</li>
      <li>Proof of business location: lease contract, or tax declaration / title if owned</li>
      <li>Valid government ID of the owner</li>
      <li>Other documents depending on the business (for example, a sanitary permit for food)</li>
    </ul>
    <p>
      Ramon&rsquo;s exact checklist and fees: <Tbv />.
    </p>

    <h2>Renewal</h2>
    <p>
      Renew every year within the first 20 days of January. Bring your previous permit, last
      year&rsquo;s official receipts, a new barangay clearance and a declaration of last
      year&rsquo;s gross sales. Late renewal adds a surcharge of up to 25% plus interest. Tax
      details are in the <Link href="/services/tax-payments">tax payments guide</Link>.
    </p>

    <h2>How long it should take</h2>
    <p>
      Under the Ease of Doing Business Act, government offices must act within 3 working days for
      simple transactions, 7 for complex ones and 20 for highly technical ones, once your
      requirements are complete.
    </p>
  </>
);

const fil = (
  <>
    <h2>Bagong negosyo: hakbang-hakbang</h2>
    <ol>
      <li>
        <strong>Iparehistro ang pangalan o entity ng negosyo.</strong> Ang sole proprietor ay
        nagpaparehistro sa DTI (online sa Business Name Registration System). Ang korporasyon at
        partnership ay sa SEC; ang kooperatiba ay sa CDA.
      </li>
      <li>
        <strong>Kumuha ng barangay business clearance</strong> sa barangay kung saan ang negosyo.
      </li>
      <li>
        <strong>Mag-apply ng Mayor&rsquo;s (business) permit</strong> sa BPLO / Business One-Stop
        Shop gamit ang unified application form. Bayaran ang assessed fees sa Municipal
        Treasurer&rsquo;s Office at itago ang opisyal na resibo.
      </li>
      <li>
        <strong>Kumuha ng Fire Safety Inspection Certificate</strong> sa Bureau of Fire Protection,
        na kadalasang kasabay ng permit.
      </li>
      <li>
        <strong>Magparehistro sa BIR</strong> sa Revenue District Office na sakop ang Ramon, o
        online sa BIR ORUS. Mula 2024, wala nang &#8369;500 na taunang registration fee.
      </li>
      <li>
        <strong>Kung may empleyado,</strong> magparehistro bilang employer sa SSS, PhilHealth at
        Pag-IBIG.
      </li>
    </ol>

    <h2>Karaniwang kailangan</h2>
    <ul>
      <li>Napunang unified business application form</li>
      <li>Rehistro sa DTI, SEC o CDA</li>
      <li>Barangay business clearance</li>
      <li>Patunay ng lokasyon: kontrata ng upa, o tax declaration / titulo kung pag-aari</li>
      <li>Valid na government ID ng may-ari</li>
      <li>Iba pang dokumento depende sa negosyo (halimbawa, sanitary permit para sa pagkain)</li>
    </ul>
    <p>
      Eksaktong checklist at bayarin sa Ramon: <Tbv />.
    </p>

    <h2>Pag-renew</h2>
    <p>
      Mag-renew taun-taon sa loob ng unang 20 araw ng Enero. Dalhin ang dating permit, mga opisyal
      na resibo noong nakaraang taon, bagong barangay clearance at deklarasyon ng gross sales noong
      nakaraang taon. Kapag huli, may surcharge na hanggang 25% at interes. Detalye ng buwis ay nasa{' '}
      <Link href="/services/tax-payments">gabay sa pagbabayad ng buwis</Link>.
    </p>

    <h2>Gaano katagal dapat</h2>
    <p>
      Ayon sa Ease of Doing Business Act, dapat kumilos ang mga opisina sa loob ng 3 araw ng trabaho
      para sa simpleng transaksyon, 7 para sa kumplikado at 20 para sa highly technical, kapag
      kumpleto na ang iyong mga kailangan.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Baro a negosyo: addang ti addang</h2>
    <ol>
      <li>
        <strong>Irehistro ti nagan wenno entity ti negosyo.</strong> Dagiti sole proprietor ket
        agparehistro iti DTI (online iti Business Name Registration System). Dagiti korporasion ken
        partnership ket iti SEC; dagiti kooperatiba ket iti CDA.
      </li>
      <li>
        <strong>Agala ti barangay business clearance</strong> iti barangay a yan ti negosyo.
      </li>
      <li>
        <strong>Ag-apply ti Mayor&rsquo;s (business) permit</strong> iti BPLO / Business One-Stop
        Shop babaen ti unified application form. Bayadan dagiti assessed fees iti Municipal
        Treasurer&rsquo;s Office ken idulin ti opisial a resibo.
      </li>
      <li>
        <strong>Agala ti Fire Safety Inspection Certificate</strong> iti Bureau of Fire Protection,
        a kaaduan ket maaramid a kadua ti permit.
      </li>
      <li>
        <strong>Agparehistro iti BIR</strong> iti Revenue District Office a mangsakup iti Ramon,
        wenno online iti BIR ORUS. Manipud 2024, awanen ti &#8369;500 a tinawen a registration fee.
      </li>
      <li>
        <strong>No addaan empleado,</strong> agparehistro kas employer iti SSS, PhilHealth ken
        Pag-IBIG.
      </li>
    </ol>

    <h2>Gagangay a kasapulan</h2>
    <ul>
      <li>Napnoan a unified business application form</li>
      <li>Rehistro iti DTI, SEC wenno CDA</li>
      <li>Barangay business clearance</li>
      <li>Pammaneknek ti lokasion: kontrata ti abang, wenno tax declaration / titulo no kukua</li>
      <li>Valid a government ID ti makinkukua</li>
      <li>
        Dadduma pay a dokumento segun iti negosyo (kas pagarigan, sanitary permit para iti taraon)
      </li>
    </ul>
    <p>
      Eksakto a checklist ken bayad idiay Ramon: <Tbv />.
    </p>

    <h2>Panag-renew</h2>
    <p>
      Ag-renew kada tawen iti uneg ti umuna a 20 nga aldaw ti Enero. Itugot ti napalabas a permit,
      dagiti opisial a resibo idi napalabas a tawen, baro a barangay clearance ken deklarasion ti
      gross sales idi napalabas a tawen. No naladaw, adda surcharge nga agingga iti 25% ken interes.
      Dagiti detalye ti buwis ket adda iti{' '}
      <Link href="/services/tax-payments">giya iti panagbayad ti buwis</Link>.
    </p>

    <h2>Kasano kabayag</h2>
    <p>
      Segun iti Ease of Doing Business Act, masapul nga agtignay dagiti opisina iti uneg ti 3 nga
      aldaw ti trabaho para iti simple a transaksion, 7 para iti komplikado ken 20 para iti highly
      technical, no kompleto dagiti kasapulam.
    </p>
  </>
);

// Shared by /services/business and /service-details/business-permits-licensing.
export default function BusinessGuide() {
  return (
    <>
      <GuideNotice>
        <L
          en="Apply at the Business Permits and Licensing Office (BPLO) or the LGU’s Business One-Stop Shop."
          fil="Mag-apply sa Business Permits and Licensing Office (BPLO) o sa Business One-Stop Shop ng LGU."
          ilo="Ag-apply iti Business Permits and Licensing Office (BPLO) wenno iti Business One-Stop Shop ti LGU."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </>
  );
}
