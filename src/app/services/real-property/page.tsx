import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/real-property', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>What is a tax declaration?</h2>
    <p>
      A tax declaration (TD) is the Assessor&rsquo;s record of a property for tax purposes. It shows
      the property&rsquo;s location, area, classification, market value and assessed value. Real
      property tax is computed from the assessed value. A TD is not proof of ownership; a land title
      is.
    </p>

    <h2>Common requests at the Assessor&rsquo;s Office</h2>
    <ul>
      <li>
        <strong>Certified true copy of a tax declaration.</strong> Bring a valid ID and the TD
        number or property details. If you are not the owner, bring an authorization letter.
      </li>
      <li>
        <strong>New declaration</strong> of an undeclared property or a new building. Bring proof of
        ownership or possession, a sketch or survey plan, and, for buildings, the building permit
        and plans.
      </li>
      <li>
        <strong>Transfer of a tax declaration</strong> after a sale, donation or inheritance.
        Usually required: the deed or settlement document, the BIR Certificate Authorizing
        Registration, the transfer tax receipt, the new or annotated title, and a real property tax
        clearance.
      </li>
      <li>
        <strong>Real property tax clearance</strong> from the Treasurer&rsquo;s Office, showing your
        taxes are paid.
      </li>
    </ul>
    <p>
      Ramon&rsquo;s exact requirements and fees: <Tbv />.
    </p>

    <h2>How property values are set</h2>
    <p>
      The Assessor prepares a schedule of market values for each property class, which the
      Sangguniang approves by ordinance. The assessed value is the market value times an assessment
      level set by class (for example, residential or agricultural). The Real Property Valuation and
      Assessment Reform Act (RA 12001) of 2024 now guides how these values are updated.
    </p>

    <h2>Tax mapping</h2>
    <p>
      The Assessor keeps tax maps that show every parcel in each barangay with its property index
      number (PIN). The PIN links the parcel to its tax declaration. Tax mapping finds undeclared or
      wrongly declared properties so each owner pays the right share.
    </p>
    <ul>
      <li>
        <strong>Find your PIN:</strong> it is printed on your tax declaration. Bring it when you
        request records or pay real property tax.
      </li>
      <li>
        <strong>If a tax mapping team visits:</strong> ask for their LGU ID. Show your tax
        declaration or title, and point out your boundaries and any new buildings.
      </li>
      <li>
        <strong>Wrong area, boundary or classification on your record?</strong> Bring your title,
        survey plan or approved subdivision plan to the Assessor and ask for a correction.
      </li>
    </ul>
    <p>
      Parcel ownership records are personal data, so this site does not publish a parcel-owner map.
      Ramon&rsquo;s tax mapping schedule: <Tbv />.
    </p>

    <h2>Disagree with your assessment?</h2>
    <p>
      You can appeal to the Local Board of Assessment Appeals within 60 days of receiving the notice
      of assessment. Pay the tax under protest if you want to keep your right to a refund.
    </p>

    <h2>Paying the tax</h2>
    <p>
      Due dates, discounts and penalties are in the{' '}
      <Link href="/services/tax-payments">tax payments guide</Link>.
    </p>
  </>
);

const fil = (
  <>
    <h2>Ano ang tax declaration?</h2>
    <p>
      Ang tax declaration (TD) ay rekord ng Assessor tungkol sa isang ari-arian para sa buwis.
      Nakasaad dito ang lokasyon, sukat, klasipikasyon, market value at assessed value. Ang amilyar
      ay kinukuwenta mula sa assessed value. Hindi patunay ng pagmamay-ari ang TD; ang titulo ang
      patunay.
    </p>

    <h2>Karaniwang hinihingi sa Assessor&rsquo;s Office</h2>
    <ul>
      <li>
        <strong>Certified true copy ng tax declaration.</strong> Magdala ng valid ID at numero ng TD
        o detalye ng ari-arian. Kung hindi ikaw ang may-ari, magdala ng authorization letter.
      </li>
      <li>
        <strong>Bagong deklarasyon</strong> ng ari-ariang hindi pa naideklara o ng bagong gusali.
        Magdala ng patunay ng pagmamay-ari o pag-okupa, sketch o survey plan, at para sa gusali, ang
        building permit at mga plano.
      </li>
      <li>
        <strong>Paglilipat ng tax declaration</strong> matapos ang bentahan, donasyon o mana.
        Karaniwang kailangan: deed o dokumento ng hatian, BIR Certificate Authorizing Registration,
        resibo ng transfer tax, bago o may anotasyong titulo, at real property tax clearance.
      </li>
      <li>
        <strong>Real property tax clearance</strong> mula sa Treasurer&rsquo;s Office, na
        nagpapatunay na bayad ang iyong buwis.
      </li>
    </ul>
    <p>
      Eksaktong kailangan at bayarin sa Ramon: <Tbv />.
    </p>

    <h2>Paano itinatakda ang halaga ng ari-arian</h2>
    <p>
      Gumagawa ang Assessor ng schedule of market values para sa bawat klase ng ari-arian, na
      inaaprubahan ng Sanggunian sa pamamagitan ng ordinansa. Ang assessed value ay ang market value
      na pinarami sa assessment level ng klase (halimbawa, residensyal o agrikultural). Ang Real
      Property Valuation and Assessment Reform Act (RA 12001) ng 2024 na ang gabay sa pag-update ng
      mga halagang ito.
    </p>

    <h2>Tax mapping</h2>
    <p>
      May tax map ang Assessor na nagpapakita ng bawat lote sa bawat barangay at ang property index
      number (PIN) nito. Iniuugnay ng PIN ang lote sa tax declaration nito. Hinahanap ng tax mapping
      ang mga ari-ariang hindi naideklara o mali ang deklarasyon para tama ang bayad ng bawat
      may-ari.
    </p>
    <ul>
      <li>
        <strong>Hanapin ang iyong PIN:</strong> nakalimbag ito sa iyong tax declaration. Dalhin ito
        kapag humihingi ng rekord o nagbabayad ng amilyar.
      </li>
      <li>
        <strong>Kung may dumating na tax mapping team:</strong> hingin ang kanilang LGU ID. Ipakita
        ang tax declaration o titulo, at ituro ang hangganan at anumang bagong gusali.
      </li>
      <li>
        <strong>Mali ang sukat, hangganan o klasipikasyon sa rekord?</strong> Dalhin ang titulo,
        survey plan o aprubadong subdivision plan sa Assessor at humiling ng pagtatama.
      </li>
    </ul>
    <p>
      Personal na datos ang rekord ng may-ari ng lote, kaya hindi naglalathala ang site na ito ng
      mapa ng may-ari. Iskedyul ng tax mapping sa Ramon: <Tbv />.
    </p>

    <h2>Hindi sang-ayon sa assessment?</h2>
    <p>
      Maaari kang umapela sa Local Board of Assessment Appeals sa loob ng 60 araw mula nang
      matanggap ang notice of assessment. Bayaran ang buwis &ldquo;under protest&rdquo; kung gusto
      mong mapanatili ang karapatan sa refund.
    </p>

    <h2>Pagbabayad ng buwis</h2>
    <p>
      Ang mga takdang petsa, diskwento at multa ay nasa{' '}
      <Link href="/services/tax-payments">gabay sa pagbabayad ng buwis</Link>.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Ania ti tax declaration?</h2>
    <p>
      Ti tax declaration (TD) ket rekord ti Assessor maipapan iti maysa a sanikua para iti buwis.
      Naikabil ditoy ti lokasion, kalawa, klasipikasion, market value ken assessed value. Ti amilyar
      ket makuenta manipud iti assessed value. Saan a pammaneknek ti pannakaikukua ti TD; ti titulo
      ti pammaneknek.
    </p>

    <h2>Gagangay a dawaten iti Assessor&rsquo;s Office</h2>
    <ul>
      <li>
        <strong>Certified true copy ti tax declaration.</strong> Agitugot ti valid ID ken numero ti
        TD wenno detalye ti sanikua. No saan nga sika ti makinkukua, agitugot ti authorization
        letter.
      </li>
      <li>
        <strong>Baro a deklarasion</strong> ti sanikua a saan pay a naideklara wenno ti baro a
        pasdek. Agitugot ti pammaneknek ti pannakaikukua wenno panagtengngel, sketch wenno survey
        plan, ken para iti pasdek, ti building permit ken dagiti plano.
      </li>
      <li>
        <strong>Panangiyalis ti tax declaration</strong> kalpasan ti panaglako, donasion wenno
        tawid. Gagangay a kasapulan: deed wenno dokumento ti panagbingay, BIR Certificate
        Authorizing Registration, resibo ti transfer tax, baro wenno addaan anotasion a titulo, ken
        real property tax clearance.
      </li>
      <li>
        <strong>Real property tax clearance</strong> manipud iti Treasurer&rsquo;s Office, a
        mangpaneknek a nabayadan ti buwismo.
      </li>
    </ul>
    <p>
      Eksakto a kasapulan ken bayad idiay Ramon: <Tbv />.
    </p>

    <h2>Kasano a maikeddeng ti pateg ti sanikua</h2>
    <p>
      Mangaramid ti Assessor ti schedule of market values para iti tunggal klase ti sanikua, nga
      aprobaran ti Sanggunian babaen ti ordinansa. Ti assessed value ket ti market value a napaadu
      iti assessment level ti klase (kas pagarigan, residensial wenno agrikultural). Ti Real
      Property Valuation and Assessment Reform Act (RA 12001) ti 2024 ti giya itan iti panag-update
      kadagitoy a pateg.
    </p>

    <h2>Tax mapping</h2>
    <p>
      Adda tax map ti Assessor a mangipakita ti tunggal lote iti tunggal barangay ken ti property
      index number (PIN)-na. Ti PIN ti mangikonekta iti lote iti tax declaration-na. Biroken ti tax
      mapping dagiti sanikua a saan a naideklara wenno biddut ti deklarasionna tapno umno ti bayad
      ti tunggal makinkukua.
    </p>
    <ul>
      <li>
        <strong>Biroken ti PIN-mo:</strong> naimaldit daytoy iti tax declaration-mo. Itugotmo no
        agdawat ti rekord wenno agbayad ti amilyar.
      </li>
      <li>
        <strong>No adda umay a tax mapping team:</strong> dawaten ti LGU ID-da. Ipakita ti tax
        declaration wenno titulo, ken itudo dagiti beddeng ken aniaman a baro a pasdek.
      </li>
      <li>
        <strong>Biddut ti kalawa, beddeng wenno klasipikasion iti rekord?</strong> Itugot ti titulo,
        survey plan wenno naaprobaran a subdivision plan iti Assessor ken dumawat ti pannakaisimpa.
      </li>
    </ul>
    <p>
      Personal a datos ti rekord ti makinkukua ti lote, isu a saan nga agipablaak daytoy a site ti
      mapa dagiti makinkukua. Iskedyul ti tax mapping idiay Ramon: <Tbv />.
    </p>

    <h2>Saan nga umanamong iti assessment?</h2>
    <p>
      Mabalinmo ti agapela iti Local Board of Assessment Appeals iti uneg ti 60 nga aldaw manipud
      iti pannakaawatmo ti notice of assessment. Bayadan ti buwis &ldquo;under protest&rdquo; no
      kayatmo a taginayonen ti karbengam iti refund.
    </p>

    <h2>Panagbayad ti buwis</h2>
    <p>
      Dagiti naituding a petsa, diskuento ken multa ket adda iti{' '}
      <Link href="/services/tax-payments">giya iti panagbayad ti buwis</Link>.
    </p>
  </>
);

export default function RealPropertyGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Property records and tax declarations are kept by the Municipal Assessor’s Office."
          fil="Ang mga rekord ng ari-arian at tax declaration ay nasa Municipal Assessor’s Office."
          ilo="Dagiti rekord ti sanikua ken tax declaration ket adda iti Municipal Assessor’s Office."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
