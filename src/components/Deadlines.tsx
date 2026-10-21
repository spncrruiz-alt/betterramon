'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { upcoming } from '@/lib/deadlines';

// Countdown to the next tax and permit deadlines. Rendered after mount so
// the static HTML never shows a stale date.
export default function Deadlines() {
  const [items, setItems] = useState<ReturnType<typeof upcoming>>([]);
  useEffect(() => setItems(upcoming(new Date())), []);
  if (items.length === 0) return null;
  return (
    <div className="deadlines">
      {items.map((d) => (
        <Link key={d.title} href={d.href} className="deadline-card">
          <span className="deadline-date">
            <span>{d.due.toLocaleString('en-PH', { month: 'short', timeZone: 'UTC' })}</span>
            <strong>{d.due.getUTCDate()}</strong>
          </span>
          <span className="deadline-body">
            <span className="deadline-title">{d.title}</span>
            <span className={`deadline-left${d.daysLeft <= 14 ? ' is-soon' : ''}`}>
              {d.daysLeft === 0
                ? 'Due today'
                : `${d.daysLeft} day${d.daysLeft === 1 ? '' : 's'} left`}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
