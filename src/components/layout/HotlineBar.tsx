'use client';

import { hotlines as allHotlines } from '@/data/ramon';
import L from '@/components/L';

const hotlines = allHotlines.filter((h) => h.tel);

export default function HotlineBar() {
  return (
    <div className="hotline-bar">
      <div className="container">
        <details className="emergency-contacts">
          <summary>
            <i className="bi bi-telephone" aria-hidden="true" />
            <L en="Emergency contacts" fil="Mga numerong pang-emergency" ilo="Dagiti numero para iti emerhensia" />
          </summary>
          <div className="hotline-items">
            {hotlines.map((h) => (
              <a key={h.tel} href={`tel:${h.tel}`} className="hotline-item">
                <i className={`bi ${h.icon}`} aria-hidden="true" />
                <span>{h.label}: {h.number}</span>
              </a>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
