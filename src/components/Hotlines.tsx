import { hotlines } from '@/data/ramon';
import L from '@/components/L';

// Tap-to-call cards. Numbers that are not yet verified are left out entirely.
const national = new Set(['911', '143', '1555', '1553']);
const local = hotlines.filter((h) => h.tel && !national.has(h.tel));
const nationwide = hotlines.filter((h) => h.tel && national.has(h.tel));

function Group({ items }: { items: typeof hotlines }) {
  return (
    <div className="hotline-grid">
      {items.map((h) => (
        <a key={h.label} href={`tel:${h.tel}`} className="hotline-card">
          <i className={`bi ${h.icon}`} aria-hidden="true"></i>
          <span className="hotline-card-label">{h.label}</span>
          <span className="hotline-card-number">{h.number}</span>
        </a>
      ))}
    </div>
  );
}

export default function Hotlines() {
  return (
    <>
      <h3 className="hotline-group-title">
        <L en="In Ramon" fil="Sa Ramon" ilo="Iti Ramon" />
      </h3>
      <Group items={local} />
      <h3 className="hotline-group-title">
        <L
          en="Nationwide, toll-free"
          fil="Pambansa, libre ang tawag"
          ilo="Nasional, libre ti awag"
        />
      </h3>
      <Group items={nationwide} />
    </>
  );
}
