'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { upcoming } from '@/lib/deadlines';
import { useLanguage } from '@/contexts/LanguageContext';

// Countdown to the next tax and permit deadlines. Rendered after mount so
// the static HTML never shows a stale date.
export default function Deadlines() {
  const { language } = useLanguage();
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
            <span className="deadline-title">{(language !== 'en' && d[language]) || d.title}</span>
            <span className={`deadline-left${d.daysLeft <= 14 ? ' is-soon' : ''}`}>
              {daysLeft(d.daysLeft, language)}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function daysLeft(n: number, lang: string) {
  if (lang === 'fil') return n === 0 ? 'Ngayon ang huling araw' : `${n} araw pa`;
  if (lang === 'ilo') return n === 0 ? 'Ita ti maudi nga aldaw' : `${n} nga aldaw pay`;
  return n === 0 ? 'Due today' : `${n} day${n === 1 ? '' : 's'} left`;
}
