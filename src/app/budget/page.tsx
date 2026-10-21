import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { fiscalDocs } from '@/data/ramon';

const page = pageFor('/budget', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function BudgetPage() {
  return (
    <PageShell page={page}>
      <p>
        Every peso LGU Ramon collects and spends is public money. These are the official documents
        that show it, and where to find them.
      </p>

      <h2>Ramon&rsquo;s fiscal documents (2025 onward)</h2>
      {fiscalDocs.length === 0 ? (
        <p className="empty-state">
          <i className="bi bi-inbox" aria-hidden="true"></i> We have not yet collected Ramon&rsquo;s
          2025 documents. Use the official sources below in the meantime.
        </p>
      ) : (
        <ul>
          {fiscalDocs.map((d) => (
            <li key={d.href}>
              <a href={d.href} target="_blank" rel="noopener noreferrer">
                {d.title} ({d.year})
              </a>{' '}
              <small>{d.source}</small>
            </li>
          ))}
        </ul>
      )}

      <h2>What to look for</h2>
      <div className="grid grid-3">
        <div className="service-item-card">
          <h3 className="service-item-title">
            <i className="bi bi-list-check" aria-hidden="true"></i> Annual Investment Program
          </h3>
          <p>The projects and programs the LGU plans to fund next year.</p>
        </div>
        <div className="service-item-card">
          <h3 className="service-item-title">
            <i className="bi bi-journal-text" aria-hidden="true"></i> Annual Budget
          </h3>
          <p>How much each office may spend, approved by the SB as an appropriation ordinance.</p>
        </div>
        <div className="service-item-card">
          <h3 className="service-item-title">
            <i className="bi bi-bar-chart-line-fill" aria-hidden="true"></i> Receipts and
            Expenditures
          </h3>
          <p>What the LGU actually collected and spent, reported every quarter and year.</p>
        </div>
        <div className="service-item-card">
          <h3 className="service-item-title">
            <i className="bi bi-hammer" aria-hidden="true"></i> Bids and Awards
          </h3>
          <p>Which contractors won public projects and for how much.</p>
        </div>
        <div className="service-item-card">
          <h3 className="service-item-title">
            <i className="bi bi-search" aria-hidden="true"></i> Audit Report
          </h3>
          <p>COA&rsquo;s yearly findings on how the LGU used its funds.</p>
        </div>
        <div className="service-item-card">
          <h3 className="service-item-title">
            <i className="bi bi-people-fill" aria-hidden="true"></i> Trust and Special Funds
          </h3>
          <p>Use of the 20% development fund, disaster fund and gender and development fund.</p>
        </div>
      </div>

      <h2>Where to find them</h2>
      <ul>
        <li>
          <strong>DILG Full Disclosure Policy Portal:</strong> LGUs must post their budget, receipts
          and expenditures, bid results and trust fund reports there. Search for Ramon, Isabela.
        </li>
        <li>
          <strong>Commission on Audit:</strong> annual audit reports of LGUs are published on the
          COA website.
        </li>
        <li>
          <strong>Municipal Hall bulletin board:</strong> the same documents must be posted in
          conspicuous places in the Municipal Hall.
        </li>
        <li>
          <strong>Ask the office:</strong> the Municipal Budget Office, Treasurer and Accountant
          keep these records. Bring a written request with your name, the document and the year.
        </li>
      </ul>
    </PageShell>
  );
}
