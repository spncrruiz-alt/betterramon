import type { Measure } from '@/data/ramon';
import L from '@/components/L';

export default function MeasuresTable({ items }: { items: Measure[] }) {
  if (items.length === 0) {
    return (
      <p className="empty-state">
        <i className="bi bi-inbox" aria-hidden="true"></i>{' '}
        <L
          en="No records from 2025 onward have been published online yet. See below for how to get copies."
          fil="Wala pang nailalathalang rekord mula 2025 online. Tingnan sa ibaba kung paano kumuha ng kopya."
          ilo="Awan pay ti naipablaak a rekord manipud 2025 iti online. Kitaen iti baba no kasano ti agala iti kopia."
        />
      </p>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">
            <L en="Title" fil="Pamagat" ilo="Titulo" />
          </th>
          <th scope="col">
            <L en="Date" fil="Petsa" ilo="Petsa" />
          </th>
          <th scope="col">
            <L en="Source" fil="Pinagkunan" ilo="Nagtaudan" />
          </th>
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
