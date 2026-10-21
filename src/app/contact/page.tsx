import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { contact, hotlines, lgu, TBV } from '@/data/ramon';

const page = pageFor('/contact', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function ContactPage() {
  return (
    <PageShell page={page}>
      <p>
        BetterRamon.org is an independent community project, not the official LGU website. For
        official transactions, contact LGU Ramon directly.
      </p>
      <div className="grid grid-3">
        <div className="service-item-card">
          <h2 className="service-item-title">
            <i className="bi bi-telephone-fill" aria-hidden="true"></i> Phone
          </h2>
          <p>{contact.phone ?? TBV}</p>
        </div>
        <div className="service-item-card">
          <h2 className="service-item-title">
            <i className="bi bi-envelope-fill" aria-hidden="true"></i> Email
          </h2>
          <p>{contact.email ?? TBV}</p>
        </div>
        <div className="service-item-card">
          <h2 className="service-item-title">
            <i className="bi bi-geo-alt-fill" aria-hidden="true"></i> Address
          </h2>
          <p>{contact.address}</p>
        </div>
      </div>
      <h2>Emergency hotlines</h2>
      <ul>
        {hotlines.map((h) => (
          <li key={h.label}>
            {h.label}: {h.tel ? <a href={`tel:${h.tel}`}>{h.number}</a> : TBV}
          </li>
        ))}
      </ul>
      <h2>About this site</h2>
      <p>
        Corrections and suggestions:{' '}
        <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub issues
        </a>
        .
      </p>
    </PageShell>
  );
}
