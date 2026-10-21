import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu, stats } from '@/data/ramon';
import { Tbv } from '@/components/L';

const page = pageFor('/statistics', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function StatisticsPage() {
  const rows = [
    ['Population', stats.population],
    ['Barangays', stats.barangays],
    ['Land area', stats.landArea],
    ['Income class', stats.incomeClass],
  ] as const;
  return (
    <PageShell page={page}>
      <table>
        <thead>
          <tr>
            <th scope="col">Indicator</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, s]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{s.value ?? <Tbv />}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">Region</th>
            <td>{lgu.region}</td>
          </tr>
          <tr>
            <th scope="row">ZIP code</th>
            <td>{lgu.zip}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <small>Sources: PSA, PhilAtlas, DOF-BLGF.</small>
      </p>
    </PageShell>
  );
}
