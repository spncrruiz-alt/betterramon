import type { ReactNode } from 'react';

// Shown at the top of every guide: this site informs, the LGU transacts.
export function GuideNotice({ children }: { children?: ReactNode }) {
  return (
    <div className="service-item-card" role="note">
      <h2 className="service-item-title">
        <i className="bi bi-info-circle-fill" aria-hidden="true"></i> Guide only
      </h2>
      <p>
        BetterRamon.org does not collect payments, accept applications or issue documents.
        Assessments, official receipts and permits come only from the offices of LGU Ramon.
        {children}
      </p>
      <p>
        Local fees, schedules and forms can differ by ordinance. Items marked &ldquo;To be
        verified&rdquo; are not yet confirmed for Ramon; ask the office before you go.
      </p>
    </div>
  );
}

export function Sources({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <>
      <h2>Sources</h2>
      <ul>
        {items.map((s) => (
          <li key={s.label}>
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
