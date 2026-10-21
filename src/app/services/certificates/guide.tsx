import { GuideNotice } from '@/components/Guide';
import L, { Tbv } from '@/components/L';

const en = (
  <>
    <h2>Registering a birth, marriage or death</h2>
    <ul>
      <li>
        <strong>Birth:</strong> register at the MCR of the place of birth within 30 days. Bring the
        certificate of live birth from the hospital or midwife, and the parents&rsquo; IDs. If the
        parents are not married, the father&rsquo;s acknowledgment is needed for the child to use
        his surname.
      </li>
      <li>
        <strong>Death:</strong> register at the MCR of the place of death within 30 days, with the
        certificate of death signed by the attending physician or health officer.
      </li>
      <li>
        <strong>Marriage:</strong> the solemnizing officer registers it with the MCR. Apply for a
        marriage license at the MCR where either party lives.
      </li>
      <li>
        <strong>Late registration</strong> needs extra documents, such as an affidavit and
        supporting records (baptismal, school or medical records). Ask the MCR for the list.
      </li>
    </ul>

    <h2>Getting a copy</h2>
    <ul>
      <li>
        <strong>From the MCR:</strong> a certified true copy of the local record. Bring a valid ID;
        if you are not the owner of the record, bring an authorization letter and their ID.
      </li>
      <li>
        <strong>From the PSA:</strong> the copy most offices ask for. Request it online, at a PSA
        outlet, or through the LGU if it offers this service. Newly registered records take time to
        reach the PSA.
      </li>
    </ul>

    <h2>Correcting a record</h2>
    <p>
      Clerical errors, a change of first name, and errors in the day or month of birth or in sex can
      be corrected by petition at the MCR, without going to court. Other changes need a court order.
    </p>
    <p>
      Ramon MCR fees and schedule: <Tbv />.
    </p>
  </>
);

const fil = (
  <>
    <h2>Pagpaparehistro ng kapanganakan, kasal o kamatayan</h2>
    <ul>
      <li>
        <strong>Kapanganakan:</strong> iparehistro sa MCR ng lugar kung saan ipinanganak sa loob ng
        30 araw. Dalhin ang certificate of live birth mula sa ospital o komadrona, at ID ng mga
        magulang. Kung hindi kasal ang mga magulang, kailangan ang pagkilala ng ama para magamit ng
        bata ang kanyang apelyido.
      </li>
      <li>
        <strong>Kamatayan:</strong> iparehistro sa MCR ng lugar kung saan namatay sa loob ng 30
        araw, kasama ang certificate of death na pirmado ng doktor o health officer.
      </li>
      <li>
        <strong>Kasal:</strong> ang nagkasal ang nagpaparehistro nito sa MCR. Mag-apply ng marriage
        license sa MCR kung saan nakatira ang isa sa ikakasal.
      </li>
      <li>
        <strong>Late registration</strong> ay nangangailangan ng dagdag na dokumento, gaya ng
        affidavit at mga sumusuportang rekord (binyag, paaralan o medikal). Itanong sa MCR ang
        listahan.
      </li>
    </ul>

    <h2>Pagkuha ng kopya</h2>
    <ul>
      <li>
        <strong>Mula sa MCR:</strong> certified true copy ng lokal na rekord. Magdala ng valid ID;
        kung hindi ikaw ang may-ari ng rekord, magdala ng authorization letter at ID niya.
      </li>
      <li>
        <strong>Mula sa PSA:</strong> ang kopyang karaniwang hinihingi ng mga opisina. Humiling
        online, sa PSA outlet, o sa LGU kung may ganitong serbisyo. Matagal bago makarating sa PSA
        ang bagong rehistrong rekord.
      </li>
    </ul>

    <h2>Pagtatama ng rekord</h2>
    <p>
      Ang clerical error, pagpapalit ng first name, at mali sa araw o buwan ng kapanganakan o sa
      kasarian ay maitatama sa pamamagitan ng petisyon sa MCR, nang hindi na dumadaan sa korte. Ang
      ibang pagbabago ay nangangailangan ng utos ng korte.
    </p>
    <p>
      Bayarin at iskedyul ng MCR sa Ramon: <Tbv />.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Panangirehistro ti pannakayanak, kasar wenno ipapatay</h2>
    <ul>
      <li>
        <strong>Pannakayanak:</strong> irehistro iti MCR ti lugar a nakayanakan iti uneg ti 30 nga
        aldaw. Itugot ti certificate of live birth manipud iti ospital wenno partera, ken ID dagiti
        nagannak. No saan a nagkasar dagiti nagannak, masapul ti panangbigbig ti ama tapno mausar ti
        ubing ti apelyidona.
      </li>
      <li>
        <strong>Ipapatay:</strong> irehistro iti MCR ti lugar a nakatayan iti uneg ti 30 nga aldaw,
        a kadua ti certificate of death a pirmado ti doktor wenno health officer.
      </li>
      <li>
        <strong>Kasar:</strong> ti nangkasar ti mangirehistro iti daytoy iti MCR. Ag-apply ti
        marriage license iti MCR a pagnanaedan ti maysa kadagiti agkasar.
      </li>
      <li>
        <strong>Late registration</strong> ket agkasapulan ti nayon a dokumento, kas iti affidavit
        ken dagiti mangsuporta a rekord (buniag, eskuelaan wenno medikal). Saludsoden iti MCR ti
        listaan.
      </li>
    </ul>

    <h2>Panagala ti kopia</h2>
    <ul>
      <li>
        <strong>Manipud iti MCR:</strong> certified true copy ti lokal a rekord. Agitugot ti valid
        ID; no saan a sika ti akin-rekord, agitugot ti authorization letter ken ti ID-na.
      </li>
      <li>
        <strong>Manipud iti PSA:</strong> ti kopia a kaaduan a dawaten dagiti opisina. Dumawat
        online, iti PSA outlet, wenno iti LGU no adda daytoy a serbisio. Mabayag sakbay a makadanon
        iti PSA dagiti baro a narehistro a rekord.
      </li>
    </ul>

    <h2>Panangsimpa ti rekord</h2>
    <p>
      Ti clerical error, panagbaliw ti first name, ken biddut iti aldaw wenno bulan ti pannakayanak
      wenno iti sekso ket mabalin a maisimpa babaen ti petision iti MCR, a saanen a mapan iti korte.
      Dagiti dadduma a panagbaliw ket masapul ti bilin ti korte.
    </p>
    <p>
      Bayad ken iskedyul ti MCR idiay Ramon: <Tbv />.
    </p>
  </>
);

// Shared by /services/certificates and /service-details/birth-certificate.
export default function CertificatesGuide() {
  return (
    <>
      <GuideNotice>
        <L
          en="Civil registry records are kept by the Municipal Civil Registrar (MCR) and the Philippine Statistics Authority (PSA)."
          fil="Ang mga rekord ng civil registry ay nasa Municipal Civil Registrar (MCR) at sa Philippine Statistics Authority (PSA)."
          ilo="Dagiti rekord ti civil registry ket adda iti Municipal Civil Registrar (MCR) ken iti Philippine Statistics Authority (PSA)."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </>
  );
}
