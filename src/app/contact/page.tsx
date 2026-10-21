import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { contact, hotlineSource, lgu } from '@/data/ramon';
import Hotlines from '@/components/Hotlines';
import L, { Tbv } from '@/components/L';

const page = pageFor('/contact', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

export default function ContactPage() {
  return (
    <PageShell page={page}>
      <p>
        <L
          en="BetterRamon.org is an independent community project, not the official LGU website. For official transactions, contact LGU Ramon directly."
          fil="Ang BetterRamon.org ay independiyenteng proyekto ng komunidad, hindi opisyal na website ng LGU. Para sa opisyal na transaksyon, direktang makipag-ugnayan sa LGU Ramon."
          ilo="Ti BetterRamon.org ket independiente a proyekto ti komunidad, saan nga opisial a website ti LGU. Para iti opisial a transaksion, makisarita a direkta iti LGU Ramon."
        />
      </p>
      <div className="grid grid-2">
        {contact.phone && (
          <div className="service-item-card">
            <h2 className="service-item-title">
              <i className="bi bi-telephone-fill" aria-hidden="true"></i>{' '}
              <L en="Phone" fil="Telepono" ilo="Telepono" />
            </h2>
            <p>{contact.phone}</p>
          </div>
        )}
        <div className="service-item-card">
          <h2 className="service-item-title">
            <i className="bi bi-envelope-fill" aria-hidden="true"></i> Email
          </h2>
          <p>{contact.email ?? <Tbv />}</p>
        </div>
        <div className="service-item-card">
          <h2 className="service-item-title">
            <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>{' '}
            <L en="Address" fil="Address" ilo="Pagnanaedan" />
          </h2>
          <p>{contact.address}</p>
        </div>
      </div>
      {lgu.officialFacebook && (
        <p>
          <L en="Official announcements:" fil="Opisyal na anunsyo:" ilo="Opisial a pakaammo:" />{' '}
          <a href={lgu.officialFacebook} target="_blank" rel="noopener noreferrer">
            PIO Ramon, Isabela (Facebook)
          </a>
          .{' '}
          <L
            en="LGU Ramon has no official website."
            fil="Walang opisyal na website ang LGU Ramon."
            ilo="Awan ti opisial a website ti LGU Ramon."
          />
        </p>
      )}
      <h2>
        <L
          en="Emergency hotlines"
          fil="Mga hotline sa emergency"
          ilo="Dagiti hotline iti emergency"
        />
      </h2>
      <Hotlines />
      <p>
        <small>
          <L en="Local numbers:" fil="Lokal na numero:" ilo="Lokal a numero:" /> {hotlineSource}.{' '}
          <L
            en="National numbers are toll-free nationwide."
            fil="Libre ang tawag sa mga pambansang numero saanman sa bansa."
            ilo="Libre ti awag kadagiti nasional a numero iti intero a pagilian."
          />
        </small>
      </p>
      <h2>
        <L en="About this site" fil="Tungkol sa site na ito" ilo="Maipapan iti daytoy a site" />
      </h2>
      <p>
        <L
          en="Corrections and suggestions:"
          fil="Pagtatama at mungkahi:"
          ilo="Panangilinteg ken singasing:"
        />{' '}
        <a href={`${lgu.repo}/issues`} target="_blank" rel="noopener noreferrer">
          GitHub issues
        </a>
        .
      </p>
    </PageShell>
  );
}
