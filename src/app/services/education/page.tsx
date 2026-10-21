import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice, Sources } from '@/components/Guide';
import { pages } from '@/data/pages';
import { TBV } from '@/data/ramon';

const page = pageFor('/services/education', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function EducationGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        {' '}
        School enrollment is handled by each school and DepEd; scholarships by the agencies named
        below.
      </GuideNotice>

      <h2>Free college tuition</h2>
      <p>
        Under the Universal Access to Quality Tertiary Education Act, Filipino students in state
        universities and colleges, local universities and colleges, and state-run technical schools
        pay no tuition and miscellaneous fees, if they meet admission and retention rules.
      </p>

      <h2>Scholarships and grants</h2>
      <ul>
        <li>
          <strong>Tertiary Education Subsidy (TES)</strong> from UniFAST, for students from
          low-income households. Apply through your college.
        </li>
        <li>
          <strong>CHED scholarships</strong> for incoming college freshmen with good grades.
        </li>
        <li>
          <strong>DOST-SEI scholarships</strong> for science, technology, engineering and math
          courses. The qualifying exam is usually held once a year.
        </li>
        <li>
          <strong>Local scholarships</strong> from the LGU or the province: {TBV}.
        </li>
      </ul>

      <h2>Finish basic education</h2>
      <p>
        Out-of-school youth and adults can finish elementary or high school through DepEd&rsquo;s
        Alternative Learning System (ALS). Ask the nearest public school or the DepEd district
        office.
      </p>

      <Sources
        items={[
          { label: 'Universal Access to Quality Tertiary Education Act (RA 10931)' },
          { label: 'UniFAST', href: 'https://unifast.gov.ph' },
          { label: 'CHED', href: 'https://ched.gov.ph' },
          { label: 'DOST Science Education Institute', href: 'https://www.sei.dost.gov.ph' },
        ]}
      />
    </PageShell>
  );
}
