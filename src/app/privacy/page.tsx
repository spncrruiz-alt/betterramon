import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';

const page = pageFor('/privacy', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function PrivacyPage() {
  return (
    <PageShell page={page}>
      <h2>What we collect</h2>
      <p>
        Nothing. BetterRamon.org has no accounts, forms, cookies, analytics or ads, and we do not
        collect personal information.
      </p>
      <h2>Stored on your device</h2>
      <ul>
        <li>Your chosen language, in your browser&rsquo;s local storage.</li>
        <li>
          Whether you dismissed the &ldquo;install app&rdquo; prompt, for the current session.
        </li>
        <li>Copies of pages for offline use, in your browser&rsquo;s cache.</li>
      </ul>
      <h2>Third-party services</h2>
      <p>
        Your browser loads some content directly from these services, which can see your IP address
        under their own privacy policies:
      </p>
      <ul>
        <li>Google Fonts (text font) and jsDelivr (icons)</li>
        <li>Open-Meteo (current weather) and ExchangeRate-API (peso exchange rate)</li>
        <li>OpenStreetMap (embedded map)</li>
      </ul>
      <p>This policy follows the Data Privacy Act of 2012 (Republic Act No. 10173).</p>
    </PageShell>
  );
}
