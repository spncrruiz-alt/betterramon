import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';

const page = pageFor('/terms', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function TermsPage() {
  return (
    <PageShell page={page}>
      <h2>Independent project</h2>
      <p>
        BetterRamon.org is a volunteer-run community website. It is not operated by, affiliated
        with, or endorsed by the Municipal Government of Ramon, Isabela. Nothing here replaces
        official notices, forms or transactions of the LGU.
      </p>
      <h2>Accuracy</h2>
      <p>
        We publish only information from public sources and cite them. Information can change or
        contain mistakes; always confirm with the responsible office before acting on it. Items we
        have not confirmed are marked &ldquo;To be verified.&rdquo;
      </p>
      <h2>Reuse</h2>
      <p>
        The site&rsquo;s source code is available under the MIT License at{' '}
        <a href={lgu.repo} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        . Public-sector data remains subject to the terms of its original source.
      </p>
      <h2>External links</h2>
      <p>We link to other websites for convenience and are not responsible for their content.</p>
    </PageShell>
  );
}
