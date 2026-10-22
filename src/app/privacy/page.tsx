import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import L from '@/components/L';

const page = pageFor('/privacy', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const services = (
  <ul>
    <li>Google Fonts, jsDelivr</li>
    <li>Open-Meteo, ExchangeRate-API</li>
    <li>OpenStreetMap</li>
  </ul>
);

const en = (
  <>
    <h2>What we collect</h2>
    <p>
      Nothing. BetterRamon.org has no accounts, forms, cookies, analytics or ads, and we do not
      collect personal information.
    </p>
    <h2>Stored on your device</h2>
    <ul>
      <li>Your chosen language, in your browser&rsquo;s local storage.</li>
      <li>Whether you dismissed the &ldquo;install app&rdquo; prompt, for the current session.</li>
      <li>Copies of pages for offline use, in your browser&rsquo;s cache.</li>
    </ul>
    <h2>Third-party services</h2>
    <p>
      Your browser loads fonts, icons, weather, the peso exchange rate and the map directly from
      these services, which can see your IP address under their own privacy policies:
    </p>
    {services}
    <p>This policy follows the Data Privacy Act of 2012 (Republic Act No. 10173).</p>
  </>
);

const fil = (
  <>
    <h2>Ano ang kinokolekta namin</h2>
    <p>
      Wala. Walang account, porma, cookie, analytics o ads ang BetterRamon.org, at hindi kami
      nangongolekta ng personal na impormasyon.
    </p>
    <h2>Naka-save sa iyong device</h2>
    <ul>
      <li>Ang napili mong wika, sa local storage ng iyong browser.</li>
      <li>
        Kung isinara mo ang &ldquo;install app&rdquo; na mensahe, para sa kasalukuyang session.
      </li>
      <li>Mga kopya ng pahina para magamit offline, sa cache ng iyong browser.</li>
    </ul>
    <h2>Mga serbisyo ng ibang kumpanya</h2>
    <p>
      Direktang kinukuha ng iyong browser ang font, icon, panahon, palitan ng piso at mapa mula sa
      mga serbisyong ito, na maaaring makakita ng iyong IP address ayon sa sarili nilang patakaran
      sa privacy:
    </p>
    {services}
    <p>Sinusunod ng patakarang ito ang Data Privacy Act of 2012 (Republic Act No. 10173).</p>
  </>
);

const ilo = (
  <>
    <h2>Ania ti ur-urnongenmi</h2>
    <p>
      Awan. Awan ti account, porma, cookie, analytics wenno ads ti BetterRamon.org, ken saankami nga
      agur-urnong iti personal nga impormasyon.
    </p>
    <h2>Naidulin iti devicem</h2>
    <ul>
      <li>Ti pinilim a pagsasao, iti local storage ti browsermo.</li>
      <li>No inserram ti &ldquo;install app&rdquo; a mensahe, para iti agdama a session.</li>
      <li>Dagiti kopia ti panid para iti offline, iti cache ti browsermo.</li>
    </ul>
    <h2>Dagiti serbisio ti sabali a kompania</h2>
    <p>
      Alaen a direkta ti browsermo ti font, icon, tiempo, sukat ti piso ken mapa manipud kadagitoy a
      serbisio, a mabalin a makakita iti IP addressmo segun kadagiti bukodda a pagannurotan ti
      privacy:
    </p>
    {services}
    <p>Surotenna daytoy a pagannurotan ti Data Privacy Act of 2012 (Republic Act No. 10173).</p>
  </>
);

export default function PrivacyPage() {
  return (
    <PageShell page={page}>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
