'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HealthPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <Link href="/services">{t('nav-services')}</Link>
          <span>/</span>
          <span aria-current="page">{t('health-page-title')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-heart-pulse-fill"></i>
              <span>{t('health-page-badge')}</span>
            </span>
            <h1>{t('health-page-title')}</h1>
            <p className="page-header-desc">{t('health-page-desc')}</p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="service-item-card">
              <h2 className="service-item-title">
                <i className="bi bi-hospital"></i>
                <span>{t('health-consultation')}</span>
              </h2>
              <p className="service-item-desc">{t('health-consultation-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-walk-in')}
                </span>
              </div>
            </div>

            <div className="service-item-card">
              <h2 className="service-item-title">
                <i className="bi bi-shield-plus"></i>
                <span>{t('health-vaccination')}</span>
              </h2>
              <p className="service-item-desc">{t('health-vaccination-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-schedule-varies')}
                </span>
              </div>
            </div>

            <div className="service-item-card">
              <h2 className="service-item-title">
                <i className="bi bi-heart"></i>
                <span>{t('health-maternal')}</span>
              </h2>
              <p className="service-item-desc">{t('health-maternal-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-by-appointment')}
                </span>
              </div>
            </div>

            <div className="service-item-card">
              <h2 className="service-item-title">
                <i className="bi bi-prescription2"></i>
                <span>{t('health-medicine')}</span>
              </h2>
              <p className="service-item-desc">{t('health-medicine-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free-subsidy')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-1-3-days')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIV Care Philippines CTA */}
      <section
        className="section hivcare-cta-section"
        aria-label="HIV Care Philippines facility directory"
      >
        <div className="container">
          <div className="hivcare-cta-card">
            <span className="hivcare-cta-eyebrow">
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              <span>{t('health-hivcare-cta-eyebrow')}</span>
            </span>
            <img
              src="/assets/images/logo/hivcareph-logo.svg"
              alt="HIV Care Philippines"
              className="hivcare-cta-logo"
              width={168}
              height={50}
              loading="lazy"
            />
            <h2 className="hivcare-cta-heading">{t('health-hivcare-cta-heading')}</h2>
            <p className="hivcare-cta-text">{t('health-hivcare-cta-desc')}</p>
            <div className="hivcare-cta-stats">
              <span className="hivcare-cta-stat">
                <i className="bi bi-hospital" aria-hidden="true"></i>
                <strong>338</strong>
                <span>{t('health-hivcare-cta-stat-facilities')}</span>
              </span>
              <span className="hivcare-cta-stat">
                <i className="bi bi-phone" aria-hidden="true"></i>
                <span>{t('health-hivcare-cta-stat-mobile')}</span>
              </span>
              <span className="hivcare-cta-stat">
                <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                <span>{t('health-hivcare-cta-stat-verified')}</span>
              </span>
            </div>
            <a
              href="https://hivcareph.org/"
              className="hivcare-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
              <span>{t('health-hivcare-cta-btn')}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
