import { GuideNotice } from '@/components/Guide';
import { TBV } from '@/data/ramon';

// Shared by /services/certificates and /service-details/birth-certificate.
export default function CertificatesGuide() {
  return (
    <>
      <GuideNotice>
        {' '}
        Civil registry records are kept by the Municipal Civil Registrar (MCR) and the Philippine
        Statistics Authority (PSA).
      </GuideNotice>

      <h2>Registering a birth, marriage or death</h2>
      <ul>
        <li>
          <strong>Birth:</strong> register at the MCR of the place of birth within 30 days. Bring
          the certificate of live birth from the hospital or midwife, and the parents&rsquo; IDs. If
          the parents are not married, the father&rsquo;s acknowledgment is needed for the child to
          use his surname.
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
          <strong>From the MCR:</strong> a certified true copy of the local record. Bring a valid
          ID; if you are not the owner of the record, bring an authorization letter and their ID.
        </li>
        <li>
          <strong>From the PSA:</strong> the copy most offices ask for. Request it online, at a PSA
          outlet, or through the LGU if it offers this service. Newly registered records take time
          to reach the PSA.
        </li>
      </ul>

      <h2>Correcting a record</h2>
      <p>
        Clerical errors, a change of first name, and errors in the day or month of birth or in sex
        can be corrected by petition at the MCR, without going to court. Other changes need a court
        order.
      </p>
      <p>Ramon MCR fees and schedule: {TBV}.</p>
    </>
  );
}
