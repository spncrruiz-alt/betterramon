'use client';

import { hotlines as allHotlines } from '@/data/ramon';
import L from '@/components/L';
import InfoBar from '@/components/layout/InfoBar';

const hotlines = allHotlines.filter((h) => h.tel);

// Emergency numbers roll across the bar; hover or keyboard focus pauses it, and
// reduced-motion users get a still, swipeable row. The second copy only makes the
// loop seamless, so it is hidden from screen readers and the tab order.
export default function HotlineBar() {
  const items = (copy: boolean) =>
    hotlines.map((h) => (
      <a
        key={`${copy ? 'b' : 'a'}-${h.tel}`}
        href={`tel:${h.tel}`}
        className="hotline-item"
        tabIndex={copy ? -1 : undefined}
      >
        <i className={`bi ${h.icon}`} aria-hidden="true" />
        <span>
          {h.label}: <strong>{h.number}</strong>
        </span>
      </a>
    ));

  return (
    <div className="hotline-bar">
      <div className="container hotline-row">
        <span className="hotline-label" id="hotline-label">
          <i className="bi bi-telephone-fill" aria-hidden="true" />
          <L en="Emergency" fil="Emergency" ilo="Emerhensia" />
        </span>
        <div className="hotline-ticker" role="region" aria-labelledby="hotline-label">
          <div className="hotline-track">
            <div className="hotline-set">{items(false)}</div>
            <div className="hotline-set" aria-hidden="true">
              {items(true)}
            </div>
          </div>
        </div>
        <InfoBar />
      </div>
    </div>
  );
}
