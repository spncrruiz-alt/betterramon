import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu, stats } from '@/data/ramon';
import L, { Tbv } from '@/components/L';

const page = pageFor('/statistics', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function StatisticsPage() {
  const rows = [
    [<L key="p" en="Population" fil="Populasyon" ilo="Populasion" />, stats.population],
    [<L key="b" en="Barangays" fil="Mga barangay" ilo="Dagiti barangay" />, stats.barangays],
    [<L key="l" en="Land area" fil="Lawak ng lupa" ilo="Kalawa ti daga" />, stats.landArea],
    [<L key="i" en="Income class" fil="Klase ng kita" ilo="Klase ti sapul" />, stats.incomeClass],
  ] as const;
  return (
    <PageShell page={page}>
      <table>
        <thead>
          <tr>
            <th scope="col">
              <L en="Indicator" fil="Sukatan" ilo="Pagrukodan" />
            </th>
            <th scope="col">
              <L en="Value" fil="Halaga" ilo="Gatad" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, s], i) => (
            <tr key={i}>
              <th scope="row">{label}</th>
              <td>{s.value ?? <Tbv />}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">
              <L en="Region" fil="Rehiyon" ilo="Rehion" />
            </th>
            <td>{lgu.region}</td>
          </tr>
          <tr>
            <th scope="row">ZIP code</th>
            <td>{lgu.zip}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <small>
          <L en="Sources" fil="Pinagkunan" ilo="Nagtaudan" />: PSA, PhilAtlas, DOF-BLGF.
        </small>
      </p>
    </PageShell>
  );
}
