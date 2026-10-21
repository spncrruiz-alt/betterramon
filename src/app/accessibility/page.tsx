import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';

const page = pageFor('/accessibility', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function AccessibilityPage() {
  return (
    <PageShell page={page}>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA so that
        everyone in Ramon, including persons with disabilities, can use this site.
      </p>
      <ul>
        <li>Keyboard navigation and a &ldquo;Skip to main content&rdquo; link</li>
        <li>Text alternatives for images and labels for controls</li>
        <li>Content in English, Filipino and Ilocano</li>
        <li>Layouts that work on phones and with browser zoom</li>
      </ul>
      <p>
        Found a barrier? Tell us through{' '}
        <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub issues
        </a>
        .
      </p>
    </PageShell>
  );
}
