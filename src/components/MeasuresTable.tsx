import type { Measure } from '@/data/ramon';

export default function MeasuresTable({ items, label }: { items: Measure[]; label: string }) {
  if (items.length === 0) {
    return (
      <p className="empty-state">
        <i className="bi bi-inbox" aria-hidden="true"></i> No {label} from 2025 onward have been
        published online yet. See below for how to get copies.
      </p>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Title</th>
          <th scope="col">Date</th>
          <th scope="col">Source</th>
        </tr>
      </thead>
      <tbody>
        {items.map((m) => (
          <tr key={m.number}>
            <th scope="row">{m.number}</th>
            <td>{m.title}</td>
            <td>{m.date}</td>
            <td>{m.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
