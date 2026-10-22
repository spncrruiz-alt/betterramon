import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/tax-payments', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Real property tax (amilyar)</h2>
    <ul>
      <li>
        <strong>Who pays:</strong> owners or administrators of land, buildings and machinery.
      </li>
      <li>
        <strong>How much:</strong> assessed value &times; tax rate. For properties in a
        municipality, the provincial rate is at most 1%, plus a Special Education Fund levy of 1%.
        Ramon&rsquo;s exact rates and assessed values: <Tbv />. See{' '}
        <Link href="/services/real-property">Real Property and Tax Mapping</Link>.
      </li>
      <li>
        <strong>When:</strong> once a year, or in four installments due by March 31, June 30,
        September 30 and December 31.
      </li>
      <li>
        <strong>Discounts and penalties:</strong> the LGU may give a discount of up to 20% for early
        or prompt payment. Late payment earns interest of 2% per month, up to 36 months.
      </li>
      <li>
        <strong>Bring:</strong> your Tax Declaration number or last year&rsquo;s official receipt.
      </li>
    </ul>

    <h2>Community tax certificate (cedula)</h2>
    <ul>
      <li>
        <strong>Who pays:</strong> residents 18 and older who are employed, in business, or own
        property with an assessed value of &#8369;1,000 or more; and businesses.
      </li>
      <li>
        <strong>How much (individuals):</strong> &#8369;5 basic, plus &#8369;1 for every
        &#8369;1,000 of income or property income, with the additional part capped at &#8369;5,000.
      </li>
      <li>
        <strong>When:</strong> by the last day of February. Late payment earns 24% interest a year.
      </li>
      <li>
        <strong>Bring:</strong> a valid ID and proof of income (for example, your latest payslip or
        income tax return).
      </li>
    </ul>

    <h2>Business tax and Mayor&rsquo;s permit fees</h2>
    <p>
      Due within the first 20 days of January, or quarterly within the first 20 days of each quarter
      if allowed. Late payment: a surcharge of up to 25% plus interest of up to 2% a month. Renewal
      steps are in the <Link href="/services/business">business guide</Link>.
    </p>

    <h2>Your official receipt (OR)</h2>
    <ul>
      <li>Always ask for an official receipt for every payment. It is your proof of payment.</li>
      <li>Check that your name, the property or business, the amount and the date are correct.</li>
      <li>Keep it. You need it for clearances, transfers and next year&rsquo;s payment.</li>
      <li>Do not pay anyone who cannot give you an official receipt.</li>
    </ul>

    <h2>Where to pay</h2>
    <p>
      Municipal Treasurer&rsquo;s Office, Municipal Hall, Ramon, Isabela. Office hours and any
      online payment channel: <Tbv />.
    </p>
  </>
);

const fil = (
  <>
    <h2>Buwis sa lupa at ari-arian (amilyar)</h2>
    <ul>
      <li>
        <strong>Sino ang magbabayad:</strong> mga may-ari o tagapamahala ng lupa, gusali at makina.
      </li>
      <li>
        <strong>Magkano:</strong> assessed value &times; tax rate. Para sa ari-arian sa munisipyo,
        hanggang 1% ang rate ng probinsya, dagdag ang 1% para sa Special Education Fund. Eksaktong
        rate at assessed value sa Ramon: <Tbv />. Tingnan ang{' '}
        <Link href="/services/real-property">Lupa, Ari-arian at Tax Mapping</Link>.
      </li>
      <li>
        <strong>Kailan:</strong> minsan sa isang taon, o apat na hulog na dapat bayaran bago ang
        Marso 31, Hunyo 30, Setyembre 30 at Disyembre 31.
      </li>
      <li>
        <strong>Diskwento at multa:</strong> maaaring magbigay ang LGU ng hanggang 20% na diskwento
        sa maagang pagbabayad. Kapag huli, may interes na 2% bawat buwan, hanggang 36 na buwan.
      </li>
      <li>
        <strong>Dalhin:</strong> ang numero ng Tax Declaration o ang opisyal na resibo noong
        nakaraang taon.
      </li>
    </ul>

    <h2>Cedula (community tax certificate)</h2>
    <ul>
      <li>
        <strong>Sino ang magbabayad:</strong> mga residenteng 18 taong gulang pataas na may trabaho,
        negosyo, o ari-ariang may assessed value na &#8369;1,000 pataas; at mga negosyo.
      </li>
      <li>
        <strong>Magkano (indibidwal):</strong> &#8369;5 na basic, dagdag ang &#8369;1 sa bawat
        &#8369;1,000 na kita, at hanggang &#8369;5,000 lamang ang dagdag.
      </li>
      <li>
        <strong>Kailan:</strong> bago matapos ang Pebrero. Kapag huli, may interes na 24% bawat
        taon.
      </li>
      <li>
        <strong>Dalhin:</strong> valid ID at patunay ng kita (halimbawa, pinakahuling payslip o
        income tax return).
      </li>
    </ul>

    <h2>Buwis sa negosyo at bayad sa Mayor&rsquo;s permit</h2>
    <p>
      Babayaran sa loob ng unang 20 araw ng Enero, o kada quarter sa loob ng unang 20 araw nito kung
      pinapayagan. Kapag huli: surcharge na hanggang 25% at interes na hanggang 2% bawat buwan. Ang
      mga hakbang sa pag-renew ay nasa <Link href="/services/business">gabay sa negosyo</Link>.
    </p>

    <h2>Ang iyong opisyal na resibo (OR)</h2>
    <ul>
      <li>Laging humingi ng opisyal na resibo sa bawat bayad. Ito ang patunay ng iyong bayad.</li>
      <li>Tiyaking tama ang pangalan, ari-arian o negosyo, halaga at petsa.</li>
      <li>Itago ito. Kailangan ito sa clearance, paglilipat at sa susunod na taon.</li>
      <li>Huwag magbayad sa sinumang hindi makapagbibigay ng opisyal na resibo.</li>
    </ul>

    <h2>Saan magbabayad</h2>
    <p>
      Municipal Treasurer&rsquo;s Office, Municipal Hall, Ramon, Isabela. Oras ng opisina at online
      na bayaran: <Tbv />.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Buwis ti daga ken sanikua (amilyar)</h2>
    <ul>
      <li>
        <strong>Siasino ti agbayad:</strong> dagiti makinkukua wenno agay-aywan ti daga, pasdek ken
        makina.
      </li>
      <li>
        <strong>Mano:</strong> assessed value &times; tax rate. Para kadagiti sanikua iti munisipio,
        agingga iti 1% ti rate ti probinsia, malaksid iti 1% para iti Special Education Fund.
        Eksakto a rate ken assessed value idiay Ramon: <Tbv />. Kitaen ti{' '}
        <Link href="/services/real-property">Daga, Sanikua ken Tax Mapping</Link>.
      </li>
      <li>
        <strong>Kaano:</strong> maminsan iti tawen, wenno uppat a gunglo a mabayadan sakbay ti Marso
        31, Hunio 30, Setiembre 30 ken Disiembre 31.
      </li>
      <li>
        <strong>Diskuento ken multa:</strong> mabalin nga mangted ti LGU ti agingga iti 20% a
        diskuento no nasapa ti panagbayad. No naladaw, adda 2% nga interes kada bulan, agingga iti
        36 a bulan.
      </li>
      <li>
        <strong>Itugot:</strong> ti numero ti Tax Declaration wenno ti opisial a resibo idi
        napalabas a tawen.
      </li>
    </ul>

    <h2>Cedula (community tax certificate)</h2>
    <ul>
      <li>
        <strong>Siasino ti agbayad:</strong> dagiti agnanaed nga 18 ti tawenna nga agpangato nga
        addaan trabaho, negosyo, wenno sanikua nga addaan assessed value a &#8369;1,000 nga
        agpangato; ken dagiti negosyo.
      </li>
      <li>
        <strong>Mano (indibidual):</strong> &#8369;5 a basic, nayonan ti &#8369;1 iti tunggal
        &#8369;1,000 a sapul, ken agingga laeng iti &#8369;5,000 ti nayon.
      </li>
      <li>
        <strong>Kaano:</strong> sakbay a malpas ti Pebrero. No naladaw, adda 24% nga interes kada
        tawen.
      </li>
      <li>
        <strong>Itugot:</strong> valid ID ken pammaneknek ti sapul (kas pagarigan, ti kaudian a
        payslip wenno income tax return).
      </li>
    </ul>

    <h2>Buwis ti negosyo ken bayad ti Mayor&rsquo;s permit</h2>
    <p>
      Mabayadan iti uneg ti umuna a 20 nga aldaw ti Enero, wenno kada quarter iti uneg ti umuna a 20
      nga aldawna no maipalubos. No naladaw: surcharge nga agingga iti 25% ken interes nga agingga
      iti 2% kada bulan. Dagiti addang ti panag-renew ket adda iti{' '}
      <Link href="/services/business">giya ti negosyo</Link>.
    </p>

    <h2>Ti opisial a resibom (OR)</h2>
    <ul>
      <li>
        Kanayon a dawaten ti opisial a resibo iti tunggal bayad. Daytoy ti pammaneknek ti bayadmo.
      </li>
      <li>Siguraduem nga umno ti nagan, sanikua wenno negosyo, gatad ken petsa.</li>
      <li>Idulinmo. Masapul daytoy iti clearance, panangiyalis ken iti sumaruno a tawen.</li>
      <li>Dika agbayad iti asinoman a saan a makaited ti opisial a resibo.</li>
    </ul>

    <h2>Sadino ti pagbayadan</h2>
    <p>
      Municipal Treasurer&rsquo;s Office, Municipal Hall, Ramon, Isabela. Oras ti opisina ken online
      a pagbayadan: <Tbv />.
    </p>
  </>
);

export default function TaxPaymentsGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Pay only at the Municipal Treasurer’s Office or an official channel it announces."
          fil="Magbayad lamang sa Municipal Treasurer’s Office o sa opisyal na paraang inanunsyo nito."
          ilo="Agbayad laeng iti Municipal Treasurer’s Office wenno iti opisial a pamay-an nga inpakaammona."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
