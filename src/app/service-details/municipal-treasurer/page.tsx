import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/service-details/municipal-treasurer', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>What you can pay or get here</h2>
    <ul>
      <li>Real property tax (amilyar) and real property tax clearance</li>
      <li>Community tax certificate (cedula)</li>
      <li>Business tax and Mayor&rsquo;s permit fees</li>
      <li>Fees for permits, certificates and other municipal services</li>
    </ul>
    <p>
      Due dates, rates and penalties are in the{' '}
      <Link href="/services/tax-payments">tax payments guide</Link>.
    </p>
    <h2>Before you pay</h2>
    <ul>
      <li>Get the assessment or order of payment from the office that handles your request.</li>
      <li>Pay only at the Treasurer&rsquo;s window or an official channel it announces.</li>
      <li>Always get and keep your official receipt.</li>
    </ul>
    <p>
      Office hours and online payment options: <Tbv />.
    </p>
  </>
);

const fil = (
  <>
    <h2>Ano ang mababayaran o makukuha rito</h2>
    <ul>
      <li>Real property tax (amilyar) at real property tax clearance</li>
      <li>Community tax certificate (cedula)</li>
      <li>Business tax at bayad sa Mayor&rsquo;s permit</li>
      <li>Bayad sa permit, sertipiko at iba pang serbisyo ng munisipyo</li>
    </ul>
    <p>
      Nasa <Link href="/services/tax-payments">gabay sa pagbabayad ng buwis</Link> ang mga petsa,
      halaga at multa.
    </p>
    <h2>Bago magbayad</h2>
    <ul>
      <li>Kunin ang assessment o order of payment mula sa opisinang humahawak ng iyong request.</li>
      <li>Magbayad lamang sa bintana ng Treasurer o sa opisyal na paraang inanunsyo nito.</li>
      <li>Laging humingi at itago ang iyong opisyal na resibo.</li>
    </ul>
    <p>
      Oras ng opisina at online na pagbabayad: <Tbv />.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Ania ti mabayadan wenno magun-od ditoy</h2>
    <ul>
      <li>Real property tax (amilyar) ken real property tax clearance</li>
      <li>Community tax certificate (cedula)</li>
      <li>Business tax ken bayad ti Mayor&rsquo;s permit</li>
      <li>Bayad ti permiso, sertipiko ken dadduma pay a serbisio ti munisipio</li>
    </ul>
    <p>
      Adda iti <Link href="/services/tax-payments">giya iti panagbayad iti buis</Link> dagiti petsa,
      gatad ken multa.
    </p>
    <h2>Sakbay nga agbayad</h2>
    <ul>
      <li>
        Alaen ti assessment wenno order of payment manipud iti opisina nga mangtaming iti kiddawmo.
      </li>
      <li>Agbayad laeng iti tawa ti Treasurer wenno iti opisial a pamay-an nga inpakaammona.</li>
      <li>Kanayon a dawaten ken idulin ti opisial a resibom.</li>
    </ul>
    <p>
      Oras ti opisina ken online a panagbayad: <Tbv />.
    </p>
  </>
);

export default function TreasurerGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="The Municipal Treasurer’s Office is the only office that collects taxes and fees and issues official receipts."
          fil="Ang Municipal Treasurer’s Office lamang ang nangongolekta ng buwis at bayarin at naglalabas ng opisyal na resibo."
          ilo="Ti Municipal Treasurer’s Office laeng ti agur-urnong iti buis ken bayad ken mangited iti opisial a resibo."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
