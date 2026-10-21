import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import CertificatesGuide from '@/app/services/certificates/guide';

const page = pageFor('/service-details/birth-certificate', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function BirthCertificatePage() {
  return (
    <PageShell page={page}>
      <CertificatesGuide />
    </PageShell>
  );
}
