import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import L from '@/components/L';
import { lgu } from '@/data/ramon';

const page = pageFor('/faq', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const faqs: {
  q: string;
  qFil: string;
  qIlo: string;
  a: ReactNode;
  aFil?: ReactNode;
  aIlo?: ReactNode;
}[] = [
  {
    q: 'Is BetterRamon.org the official website of LGU Ramon?',
    qFil: 'Ito ba ang opisyal na website ng LGU Ramon?',
    qIlo: 'Daytoy kadi ti opisial a website ti LGU Ramon?',
    aFil: (
      <>
        Hindi. Ito ay independiyenteng site na gawa ng mga boluntaryo. Walang opisyal na website ang
        LGU Ramon; ang mga opisyal na anunsyo ay nasa{' '}
        <a href={lgu.officialFacebook ?? '#'} target="_blank" rel="noopener noreferrer">
          Facebook page ng PIO Ramon, Isabela
        </a>
        .
      </>
    ),
    aIlo: (
      <>
        Saan. Daytoy ket independiente a site nga inaramid dagiti boluntario. Awan ti opisial a
        website ti LGU Ramon; dagiti opisial a pakaammo ket adda iti{' '}
        <a href={lgu.officialFacebook ?? '#'} target="_blank" rel="noopener noreferrer">
          Facebook page ti PIO Ramon, Isabela
        </a>
        .
      </>
    ),
    a: (
      <>
        No. It is an independent, volunteer-run community site. LGU Ramon has no official website;
        its official announcements are on the{' '}
        <a href={lgu.officialFacebook ?? '#'} target="_blank" rel="noopener noreferrer">
          PIO Ramon, Isabela Facebook page
        </a>
        .
      </>
    ),
  },
  {
    q: 'Can I pay my taxes or apply for permits here?',
    qFil: 'Puwede ba akong magbayad ng buwis o mag-apply ng permit dito?',
    qIlo: 'Mabalin kadi ti agbayad ti buwis wenno ag-apply ti permit ditoy?',
    aFil: (
      <>
        Hindi. Ipinapaliwanag lang ng site ang mga hakbang. Magbayad at mag-apply sa mga opisina ng
        munisipyo, at laging humingi ng opisyal na resibo. Tingnan ang{' '}
        <Link href="/services/tax-payments">gabay sa pagbabayad ng buwis</Link>.
      </>
    ),
    aIlo: (
      <>
        Saan. Ilawlawag laeng ti site dagiti addang. Agbayad ken ag-apply kadagiti opisina ti
        munisipio, ken kanayon a dawaten ti opisial a resibo. Kitaen ti{' '}
        <Link href="/services/tax-payments">giya iti panagbayad ti buwis</Link>.
      </>
    ),
    a: (
      <>
        No. This site only explains the steps. Pay and apply at the municipal offices, and always
        get an official receipt. See the{' '}
        <Link href="/services/tax-payments">tax payments guide</Link>.
      </>
    ),
  },
  {
    q: 'When is real property tax (amilyar) due?',
    qFil: 'Kailan ang takdang bayad ng amilyar?',
    qIlo: 'Kaano ti panagbayad ti amilyar?',
    aFil: (
      <>
        Taun-taon, o hatiin sa apat na hulog na dapat bayaran bago ang Marso 31, Hunyo 30, Setyembre
        30 at Disyembre 31. May 2% na interes bawat buwan kapag huli. Detalye:{' '}
        <Link href="/services/tax-payments">gabay sa pagbabayad ng buwis</Link>.
      </>
    ),
    aIlo: (
      <>
        Tinawen, wenno uppat a gunglo a mabayadan sakbay ti Marso 31, Hunio 30, Setiembre 30 ken
        Disiembre 31. Adda 2% nga interes kada bulan no naladaw. Detalye:{' '}
        <Link href="/services/tax-payments">giya iti panagbayad ti buwis</Link>.
      </>
    ),
    a: (
      <>
        Yearly, or in four installments due by March 31, June 30, September 30 and December 31. Late
        payment earns 2% interest a month. Details:{' '}
        <Link href="/services/tax-payments">tax payments guide</Link>.
      </>
    ),
  },
  {
    q: 'When do I renew my business permit?',
    qFil: 'Kailan ko ire-renew ang business permit ko?',
    qIlo: 'Kaano ti panag-renew ti business permit ko?',
    aFil: (
      <>
        Sa loob ng unang 20 araw ng Enero bawat taon. Tingnan ang{' '}
        <Link href="/services/business">gabay sa negosyo</Link>.
      </>
    ),
    aIlo: (
      <>
        Iti uneg ti umuna a 20 nga aldaw ti Enero kada tawen. Kitaen ti{' '}
        <Link href="/services/business">giya ti negosyo</Link>.
      </>
    ),
    a: (
      <>
        Within the first 20 days of January each year. See the{' '}
        <Link href="/services/business">business guide</Link>.
      </>
    ),
  },
  {
    q: 'Do I need a permit to build or renovate my house?',
    qFil: 'Kailangan ko ba ng permit para magpatayo o magpaayos ng bahay?',
    qIlo: 'Masapul kadi ti permit tapno agipatakder wenno agpaayos ti balay?',
    aFil: (
      <>
        Kadalasan ay oo, mula sa Office of the Building Official, at certificate of occupancy bago
        tumira. Tingnan ang{' '}
        <Link href="/services/building-permits">gabay sa building at occupancy permit</Link>.
      </>
    ),
    aIlo: (
      <>
        Kaaduan ket wen, manipud iti Office of the Building Official, ken certificate of occupancy
        sakbay nga agnaed. Kitaen ti{' '}
        <Link href="/services/building-permits">giya ti building ken occupancy permit</Link>.
      </>
    ),
    a: (
      <>
        Usually yes, from the Office of the Building Official, and a certificate of occupancy before
        you move in. See the{' '}
        <Link href="/services/building-permits">building and occupancy permit guide</Link>.
      </>
    ),
  },
  {
    q: 'How do I get a copy of my birth certificate?',
    qFil: 'Paano kumuha ng kopya ng birth certificate?',
    qIlo: 'Kasano ti panagala ti kopia ti birth certificate?',
    aFil: (
      <>
        Sa Municipal Civil Registrar (lokal na kopya) o sa PSA (ang kopyang karaniwang hinihingi).
        Tingnan ang <Link href="/services/certificates">mga dokumento ng civil registry</Link>.
      </>
    ),
    aIlo: (
      <>
        Iti Municipal Civil Registrar (lokal a kopia) wenno iti PSA (ti kopia a kaaduan a dawaten).
        Kitaen ti <Link href="/services/certificates">dagiti dokumento ti civil registry</Link>.
      </>
    ),
    a: (
      <>
        From the Municipal Civil Registrar (local copy) or the PSA (the copy most offices ask for).
        See <Link href="/services/certificates">civil registry documents</Link>.
      </>
    ),
  },
  {
    q: 'How do I get a senior citizen, PWD or solo parent ID?',
    qFil: 'Paano kumuha ng senior citizen, PWD o solo parent ID?',
    qIlo: 'Kasano ti panagala ti senior citizen, PWD wenno solo parent ID?',
    aFil: (
      <>
        Mag-apply sa OSCA (senior citizen) o sa MSWDO. Tingnan ang{' '}
        <Link href="/services/social-services">serbisyong panlipunan</Link>.
      </>
    ),
    aIlo: (
      <>
        Ag-apply iti OSCA (senior citizen) wenno iti MSWDO. Kitaen ti{' '}
        <Link href="/services/social-services">serbisio sosyal</Link>.
      </>
    ),
    a: (
      <>
        Apply at OSCA (senior citizens) or the MSWDO. See{' '}
        <Link href="/services/social-services">social services</Link>.
      </>
    ),
  },
  {
    q: 'What are the emergency numbers in Ramon?',
    qFil: 'Ano ang mga emergency number sa Ramon?',
    qIlo: 'Ania dagiti emergency number idiay Ramon?',
    aFil: (
      <>
        Tumawag sa 911 saanman sa bansa. Ang mga numero ng PNP, BFP, LDRRMO at ISELCO ay nasa{' '}
        <Link href="/contact">pahina ng contact</Link> at sa pulang bar sa itaas ng bawat pahina.
      </>
    ),
    aIlo: (
      <>
        Agtawag iti 911 iti sadinoman a paset ti pagilian. Dagiti numero ti PNP, BFP, LDRRMO ken
        ISELCO ket adda iti <Link href="/contact">panid ti contact</Link> ken iti nalabaga a bar iti
        ngato ti tunggal panid.
      </>
    ),
    a: (
      <>
        Call 911 nationwide. Local PNP, BFP, LDRRMO and ISELCO numbers are on the{' '}
        <Link href="/contact">contact page</Link> and in the red bar at the top of every page.
      </>
    ),
  },
  {
    q: 'Something on this site is wrong or outdated. How do I report it?',
    qFil: 'May mali o luma sa site. Paano ito i-report?',
    qIlo: 'Adda biddut wenno daan iti site. Kasano nga i-report?',
    aFil: (
      <>
        Magbukas ng issue sa aming{' '}
        <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub page
        </a>{' '}
        kasama ang tamang impormasyon at ang pampublikong pinagmulan nito.
      </>
    ),
    aIlo: (
      <>
        Aglukat ti issue iti{' '}
        <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub page
        </a>{' '}
        mi a kadua ti umno nga impormasyon ken ti pampubliko a nagtaudanna.
      </>
    ),
    a: (
      <>
        Open an issue on our{' '}
        <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub page
        </a>{' '}
        with the correct information and its public source.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <PageShell page={page}>
      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>
              <L en={f.q} fil={f.qFil} ilo={f.qIlo} />
            </summary>
            <p>
              <L en={f.a} fil={f.aFil} ilo={f.aIlo} />
            </p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
