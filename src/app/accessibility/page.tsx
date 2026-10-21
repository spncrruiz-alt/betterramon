import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';
import L from '@/components/L';

const page = pageFor('/accessibility', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const issues = (
  <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
    GitHub issues
  </a>
);

const en = (
  <>
    <p>
      We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA so that
      everyone in Ramon, including persons with disabilities, can use this site.
    </p>
    <ul>
      <li>Keyboard navigation and a &ldquo;Skip to main content&rdquo; link</li>
      <li>Text alternatives for images and labels for controls</li>
      <li>Content in English, Filipino and Ilocano</li>
      <li>Layouts that work on phones and with browser zoom</li>
      <li>Less motion for people who turn on &ldquo;reduce motion&rdquo; on their device</li>
    </ul>
    <p>Found a barrier? Tell us through {issues}.</p>
  </>
);

const fil = (
  <>
    <p>
      Layunin naming sundin ang Web Content Accessibility Guidelines (WCAG) 2.1 sa level AA para
      magamit ng lahat sa Ramon, kasama ang mga may kapansanan, ang site na ito.
    </p>
    <ul>
      <li>Nagagamit gamit ang keyboard at may &ldquo;Skip to main content&rdquo; na link</li>
      <li>May paglalarawan ang mga larawan at may label ang mga kontrol</li>
      <li>Nilalaman sa Ingles, Filipino at Ilocano</li>
      <li>Ayos na gumagana sa telepono at kapag pinalaki ang browser</li>
      <li>Mas kaunting galaw para sa mga naka-on ang &ldquo;reduce motion&rdquo; sa device</li>
    </ul>
    <p>May nahanap kang hadlang? Sabihin sa amin sa {issues}.</p>
  </>
);

const ilo = (
  <>
    <p>
      Panggepmi a surotan ti Web Content Accessibility Guidelines (WCAG) 2.1 iti level AA tapno
      mausar ti amin iti Ramon, agraman dagiti addaan iti disabilidad, daytoy a site.
    </p>
    <ul>
      <li>Mausar babaen ti keyboard ken adda &ldquo;Skip to main content&rdquo; a link</li>
      <li>Addaan iti deskripsion dagiti ladawan ken label dagiti kontrol</li>
      <li>Linaon iti Ingles, Filipino ken Ilocano</li>
      <li>Umno iti telepono ken no padakkelen ti browser</li>
      <li>Basbassit a garaw para kadagiti nakaon ti &ldquo;reduce motion&rdquo; iti device</li>
    </ul>
    <p>Adda nasarakam a lapped? Ibagam kadakami iti {issues}.</p>
  </>
);

export default function AccessibilityPage() {
  return (
    <PageShell page={page}>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
