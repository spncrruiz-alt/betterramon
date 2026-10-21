import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/social-services', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function SocialServicesGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        Apply at the Municipal Social Welfare and Development Office (MSWDO) or the office named
        below.
      </GuideNotice>

      <h2>Senior citizen ID</h2>
      <p>
        For residents 60 years old and above. Apply at the Office of the Senior Citizens Affairs
        (OSCA). Bring proof of age (birth certificate or a government ID with birth date), proof of
        residence such as a barangay certificate, and ID photos. The ID gives the 20% discount and
        VAT exemption on many goods and services.
      </p>

      <h2>PWD ID</h2>
      <p>
        For persons with disabilities. Apply at the Persons with Disability Affairs Office or the
        MSWDO. Bring a medical certificate stating the disability (or a school assessment for
        learning disabilities), proof of residence and ID photos. The ID also gives the 20% discount
        and VAT exemption.
      </p>

      <h2>Solo parent ID</h2>
      <p>
        For solo parents raising a child alone. Apply at the MSWDO. Bring proof of solo parent
        status (for example, a death certificate of the spouse, proof of separation or abandonment,
        or the child&rsquo;s birth certificate), a barangay certificate of residence and ID photos.
        The ID is renewed every year.
      </p>

      <h2>Financial and other assistance</h2>
      <p>
        The MSWDO can assess requests for medical, burial, educational or crisis assistance. Bring a
        valid ID, a barangay certificate of indigency and documents for your request, such as a
        medical abstract, prescription, billing statement or death certificate.
      </p>
      <p>Ramon&rsquo;s office schedule and exact requirements: {TBV}.</p>
    </PageShell>
  );
}
