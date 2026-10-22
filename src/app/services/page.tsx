import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { pagesI18n } from '@/data/pages-i18n';
import L from '@/components/L';

const page = pageFor('/services', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function ServicesPage() {
  const services = pages.filter((p) => p.path.startsWith('/services/'));
  return (
    <PageShell page={page}>
      <div className="service-directory-layout">
        <div className="service-directory-aside">
          <h2><L en="Quick access" fil="Mabilis na access" ilo="Napartak a panagserrek" /></h2>
          <Link href="/service-details/birth-certificate"><L en="Birth certificate" fil="Sertipiko ng kapanganakan" ilo="Sertipiko ti pannakayanak" /></Link>
          <Link href="/service-details/business-permits-licensing"><L en="Business permits" fil="Mga permit sa negosyo" ilo="Dagiti permit ti negosyo" /></Link>
          <Link href="/services/tax-payments"><L en="Tax payments" fil="Pagbabayad ng buwis" ilo="Panagbayad ti buwis" /></Link>
          <div className="directory-help">
            <h2><L en="Need help?" fil="Kailangan ng tulong?" ilo="Kasapulam ti tulong?" /></h2>
            <p><L en="Find contact details for municipal offices and emergency services." fil="Hanapin ang mga detalye sa pakikipag-ugnayan sa mga tanggapan at serbisyong pang-emergency." ilo="Sapulen dagiti detalye ti pakasaritaan kadagiti opisina ti munisipio ken dagiti serbisio ti emerhensia." /></p>
            <Link href="/contact"><L en="Contact directory" fil="Direktoryo ng mga contact" ilo="Direktorio dagiti pakasaritaan" /> <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="service-directory">
          {services.map((s) => (
            <Link key={s.path} href={s.path} className="directory-entry">
              <div>
                <h2><L en={s.title} fil={pagesI18n[s.path]?.fil[0]} ilo={pagesI18n[s.path]?.ilo[0]} /></h2>
                <p><L en={s.desc} fil={pagesI18n[s.path]?.fil[1]} ilo={pagesI18n[s.path]?.ilo[1]} /></p>
              </div>
              <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
