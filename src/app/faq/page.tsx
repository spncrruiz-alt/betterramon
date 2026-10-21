import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';

const page = pageFor('/faq', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Is BetterRamon.org the official website of LGU Ramon?',
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
    a: (
      <>
        Within the first 20 days of January each year. See the{' '}
        <Link href="/services/business">business guide</Link>.
      </>
    ),
  },
  {
    q: 'Do I need a permit to build or renovate my house?',
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
    a: (
      <>
        From the Municipal Civil Registrar (local copy) or the PSA (the copy most offices ask for).
        See <Link href="/services/certificates">civil registry documents</Link>.
      </>
    ),
  },
  {
    q: 'How do I get a senior citizen, PWD or solo parent ID?',
    a: (
      <>
        Apply at OSCA (senior citizens) or the MSWDO. See{' '}
        <Link href="/services/social-services">social services</Link>.
      </>
    ),
  },
  {
    q: 'What are the emergency numbers in Ramon?',
    a: (
      <>
        Call 911 nationwide. Local PNP, BFP, LDRRMO and ISELCO numbers are on the{' '}
        <Link href="/contact">contact page</Link> and in the red bar at the top of every page.
      </>
    ),
  },
  {
    q: 'Something on this site is wrong or outdated. How do I report it?',
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
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
