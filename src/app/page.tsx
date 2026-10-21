'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import SearchAutocomplete from '@/components/SearchAutocomplete';
import Deadlines from '@/components/Deadlines';
import { lgu, stats, officials, contact } from '@/data/ramon';
import L, { Tbv } from '@/components/L';
import PhotoCredits from '@/components/PhotoCredits';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-v2">
        <div className="container">
          <div className="home-hero-v2-inner">
            <div className="home-hero-v2-text">
              <h1>{t('hero-welcome')}</h1>
              <p>{t('hero-subtitle')}</p>
              <div className="home-hero-v2-actions">
                <Link href="/services" className="btn btn-primary">
                  {t('hero-browse-services')} <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  {t('hero-contact-us')}
                </Link>
              </div>
            </div>
            <div className="home-hero-v2-search">
              <div className="home-search-box">
                <h2>
                  <i className="bi bi-search"></i> {t('hero-find-service')}
                </h2>
                <SearchAutocomplete placeholder={t('hero-search-placeholder')} />
                <div className="home-search-tags">
                  <span>{t('hero-popular')}</span>
                  <Link href="/service-details/birth-certificate">
                    {t('hero-birth-certificate')}
                  </Link>
                  <Link href="/service-details/business-permits-licensing">
                    {t('hero-business-permit')}
                  </Link>
                  <Link href="/services/tax-payments">{t('hero-real-property-tax')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I want to... */}
      <section className="section want-section">
        <div className="container">
          <div className="home-section-header">
            <h2>
              <L en="I want to…" fil="Gusto kong…" ilo="Kayat ko ti…" />
            </h2>
          </div>
          <div className="want-grid">
            {[
              {
                href: '/services/tax-payments',
                icon: 'bi-house-check-fill',
                label: 'Pay amilyar (property tax)',
                fil: 'Magbayad ng amilyar',
                ilo: 'Agbayad ti amilyar',
              },
              {
                href: '/services/tax-payments',
                icon: 'bi-person-vcard-fill',
                label: 'Get a cedula',
                fil: 'Kumuha ng cedula',
                ilo: 'Agala ti sedula',
              },
              {
                href: '/services/business',
                icon: 'bi-shop',
                label: 'Start or renew a business',
                fil: 'Magsimula o mag-renew ng negosyo',
                ilo: 'Mangrugi wenno ag-renew ti negosio',
              },
              {
                href: '/services/certificates',
                icon: 'bi-file-earmark-person-fill',
                label: 'Get a birth certificate',
                fil: 'Kumuha ng birth certificate',
                ilo: 'Agala ti birth certificate',
              },
              {
                href: '/services/building-permits',
                icon: 'bi-bricks',
                label: 'Build or renovate',
                fil: 'Magpatayo o magpaayos',
                ilo: 'Agipatakder wenno agpaayos',
              },
              {
                href: '/services/social-services',
                icon: 'bi-person-heart',
                label: 'Get a senior, PWD or solo parent ID',
                fil: 'Kumuha ng senior, PWD o solo parent ID',
                ilo: 'Agala ti senior, PWD wenno solo parent ID',
              },
              {
                href: '/contact',
                icon: 'bi-telephone-outbound-fill',
                label: 'Call for help',
                fil: 'Humingi ng tulong',
                ilo: 'Agpatulong',
              },
              {
                href: '/tourism',
                icon: 'bi-compass-fill',
                label: 'Explore Ramon',
                fil: 'Libutin ang Ramon',
                ilo: 'Libuten ti Ramon',
              },
            ].map((w) => (
              <Link key={w.label} href={w.href} className="want-tile">
                <i className={`bi ${w.icon}`} aria-hidden="true"></i>
                <span>
                  <L en={w.label} fil={w.fil} ilo={w.ilo} />
                </span>
              </Link>
            ))}
          </div>

          <h3 className="deadlines-heading">
            <i className="bi bi-alarm-fill" aria-hidden="true"></i>{' '}
            <L
              en="Coming deadlines"
              fil="Mga paparating na deadline"
              ilo="Dagiti umay a deadline"
            />
          </h3>
          <Deadlines />
        </div>
      </section>

      {/* Popular Services */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-popular')}</h2>
            <p>{t('popular-services-subtitle')}</p>
          </div>
          <div className="home-services-grid">
            <Link href="/services/certificates" className="home-service-card">
              <div className="home-service-icon">
                <i className="bi bi-file-earmark-text-fill"></i>
              </div>
              <div className="home-service-content">
                <h3>{t('service-certificates')}</h3>
                <p>{t('service-certificates-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/business" className="home-service-card">
              <div className="home-service-icon">
                <i className="bi bi-shop"></i>
              </div>
              <div className="home-service-content">
                <h3>{t('service-business')}</h3>
                <p>{t('service-business-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/tax-payments" className="home-service-card">
              <div className="home-service-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <div className="home-service-content">
                <h3>{t('service-tax')}</h3>
                <p>{t('service-tax-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/social-services" className="home-service-card">
              <div className="home-service-icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <div className="home-service-content">
                <h3>{t('service-social')}</h3>
                <p>{t('service-social-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services/health" className="home-service-card">
              <div className="home-service-icon">
                <i className="bi bi-heart-pulse-fill"></i>
              </div>
              <div className="home-service-content">
                <h3>{t('service-health')}</h3>
                <p>{t('service-health-desc')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
            <Link href="/services" className="home-service-card home-service-card--all">
              <div className="home-service-icon">
                <i className="bi bi-grid-fill"></i>
              </div>
              <div className="home-service-content">
                <h3>{t('btn-view-all-services')}</h3>
                <p>{t('popular-browse-directory')}</p>
              </div>
              <i className="bi bi-arrow-right home-service-arrow"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="home-stats-v2">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>{t('stats-at-a-glance')}</h2>
          </div>
          <div className="home-stats-v2-grid">
            {[
              { icon: 'bi-people-fill', label: 'stats-population-label', stat: stats.population },
              { icon: 'bi-geo-alt-fill', label: 'stats-barangays-label', stat: stats.barangays },
              { icon: 'bi-award-fill', label: 'stats-municipality-label', stat: stats.incomeClass },
              { icon: 'bi-rulers', label: 'stats-land-area-label', stat: stats.landArea },
            ].map(({ icon, label, stat }) => (
              <div className="home-stat-card" key={label}>
                <div className="home-stat-card-icon">
                  <i className={`bi ${icon}`}></i>
                </div>
                <div className="home-stat-card-content">
                  <span className="home-stat-card-value">{stat.value ?? <Tbv />}</span>
                  <span className="home-stat-card-label">{t(label)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Ramon */}
      <section className="section discover-section">
        <div className="container">
          <div className="home-section-header">
            <h2>
              <L en="Discover Ramon" fil="Tuklasin ang Ramon" ilo="Takuaten ti Ramon" />
            </h2>
          </div>
          <div className="discover-grid">
            <Link href="/tourism" className="discover-card discover-card--dam">
              <span className="discover-tag">
                <L en="Tourism" fil="Turismo" ilo="Turismo" />
              </span>
              <h3>
                <L
                  en="Magat Dam and the reservoir"
                  fil="Magat Dam at ang reservoir"
                  ilo="Magat Dam ken ti reservoir"
                />
              </h3>
              <p>
                <L
                  en="One of the largest dams in the Philippines, right here in Ramon."
                  fil="Isa sa pinakamalalaking dam sa Pilipinas, narito mismo sa Ramon."
                  ilo="Maysa kadagiti kadakkelan a dam ditoy Filipinas, adda mismo ditoy Ramon."
                />
              </p>
            </Link>
            <Link href="/about" className="discover-card discover-card--history">
              <span className="discover-tag">
                <L en="History" fil="Kasaysayan" ilo="Pakasaritaan" />
              </span>
              <h3>
                <L
                  en="From Oscariz to Ramon"
                  fil="Mula Oscariz hanggang Ramon"
                  ilo="Manipud Oscariz agingga iti Ramon"
                />
              </h3>
              <p>
                <L
                  en="Named after President Ramon Magsaysay in 1961."
                  fil="Ipinangalan kay Pangulong Ramon Magsaysay noong 1961."
                  ilo="Naipanagan ken Presidente Ramon Magsaysay idi 1961."
                />
              </p>
            </Link>
          </div>
          <PhotoCredits />
        </div>
      </section>

      {/* Map */}
      <section className="section weather-map-section">
        <div className="container">
          <div className="home-stats-v2-header">
            <h2>{t('weather-map-title')}</h2>
          </div>
          <div className="map-card">
            <div
              id="map-container"
              role="application"
              aria-label="Map of Ramon, Isabela"
              data-map-loaded="iframe"
            >
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${lgu.coords.lon - 0.015}%2C${lgu.coords.lat - 0.015}%2C${lgu.coords.lon + 0.015}%2C${lgu.coords.lat + 0.015}&layer=mapnik&marker=${lgu.coords.lat}%2C${lgu.coords.lon}`}
                className="map-iframe"
                title="Map of Ramon, Isabela"
                loading="lazy"
              ></iframe>
            </div>
            <p className="map-attribution">
              <i className="bi bi-geo-alt" aria-hidden="true"></i> {contact.address}
            </p>
          </div>
        </div>
      </section>

      {/* Municipal Leadership */}
      <section className="section home-leadership-section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-leadership')}</h2>
          </div>
          <div className="home-leadership-grid">
            {officials.map((o) => (
              <div className="home-leader-card" key={o.title}>
                <div className="home-leader-badge">{t(`title-${o.title}`)}</div>
                <h3>{o.name ?? <Tbv />}</h3>
                <div className="home-leader-contacts">
                  {o.email && (
                    <a href={`mailto:${o.email}`}>
                      <i className="bi bi-envelope"></i> {o.email}
                    </a>
                  )}
                  {o.phone && (
                    <a href={`tel:${o.phone.replace(/\D/g, '')}`}>
                      <i className="bi bi-telephone"></i> {o.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p>
            <small>
              <L
                en="Based on unofficial 2025 election results."
                fil="Batay sa hindi opisyal na resulta ng halalan 2025."
                ilo="Segun iti saan nga opisial a resulta ti eleksion 2025."
              />{' '}
              <Link href="/government">Sources</Link>
            </small>
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <h2>{t('section-contact')}</h2>
          </div>
          <div className="home-contact-v2-grid">
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-phone')}</h3>
                <p className="home-contact-v2-value">{contact.phone ?? <Tbv />}</p>
              </div>
            </div>
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-email')}</h3>
                <p className="home-contact-v2-value">
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  ) : (
                    <Tbv />
                  )}
                </p>
              </div>
            </div>
            <div className="home-contact-v2-card">
              <div className="home-contact-v2-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="home-contact-v2-content">
                <h3>{t('contact-address')}</h3>
                <p className="home-contact-v2-value">{t('contact-municipal-hall')}</p>
                <span className="home-contact-v2-note">
                  {contact.address.replace('Municipal Hall, ', '')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
