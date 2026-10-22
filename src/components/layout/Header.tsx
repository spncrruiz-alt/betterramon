'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import L from '@/components/L';

type NavItem = { href: string; key: string; icon: string };
type NavGroup = { label?: string; items: NavItem[] };

// Main navigation, grouped like the KPL Network staff sidebar. Labels are LanguageContext keys.
const groups: NavGroup[] = [
  { items: [{ href: '/', key: 'nav-home', icon: 'bi-house-door' }] },
  {
    label: 'nav-services',
    items: [
      { href: '/services', key: 'nav-all-services', icon: 'bi-grid' },
      { href: '/services/certificates', key: 'dropdown-certificates', icon: 'bi-file-earmark-text' },
      { href: '/services/business', key: 'dropdown-business', icon: 'bi-shop' },
      { href: '/services/tax-payments', key: 'dropdown-tax-payments', icon: 'bi-cash-coin' },
      { href: '/services/social-services', key: 'dropdown-social-services', icon: 'bi-people' },
      { href: '/services/health', key: 'dropdown-health', icon: 'bi-heart-pulse' },
      { href: '/services/agriculture', key: 'dropdown-agriculture', icon: 'bi-flower1' },
      { href: '/services/infrastructure', key: 'dropdown-infrastructure', icon: 'bi-cone-striped' },
      { href: '/services/education', key: 'dropdown-education', icon: 'bi-mortarboard' },
      { href: '/services/public-safety', key: 'dropdown-public-safety', icon: 'bi-shield-check' },
      { href: '/services/environment', key: 'dropdown-environment', icon: 'bi-tree' },
    ],
  },
  {
    label: 'nav-town',
    items: [
      { href: '/government', key: 'nav-government', icon: 'bi-bank' },
      { href: '/tourism', key: 'nav-tourism', icon: 'bi-geo-alt' },
      { href: '/statistics', key: 'nav-statistics', icon: 'bi-bar-chart' },
      { href: '/budget', key: 'nav-transparency', icon: 'bi-wallet2' },
      { href: '/contact', key: 'nav-contact', icon: 'bi-telephone' },
    ],
  },
  {
    label: 'nav-legislative',
    items: [
      { href: '/legislative', key: 'nav-legislative-overview', icon: 'bi-journal-text' },
      { href: '/legislative/ordinance-framework', key: 'dropdown-ordinance-framework', icon: 'bi-file-ruled' },
      { href: '/legislative/resolution-framework', key: 'dropdown-resolution-framework', icon: 'bi-file-check' },
    ],
  },
];

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fil', label: 'FIL', name: 'Filipino' },
  { code: 'ilo', label: 'ILO', name: 'Ilocano' },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);

  const close = useCallback(() => {
    setOpen(false);
    if (document.body.classList.contains('mobile-menu-open')) {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollYRef.current);
    }
  }, []);

  function openMenu() {
    scrollYRef.current = window.scrollY;
    document.body.classList.add('mobile-menu-open');
    document.body.style.top = `-${scrollYRef.current}px`;
    setOpen(true);
  }

  // Close on route change, Escape, and when the window grows to desktop width.
  useEffect(() => close(), [pathname, close]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1025px)');
    const onWide = () => desktop.matches && close();
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onWide);
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onWide);
    };
  }, [open, close]);

  const isActive = (href: string) =>
    href === '/' || href === '/services' || href === '/legislative'
      ? pathname === href
      : pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header className="site-topbar">
        <Link href="/" className="site-topbar-brand">
          <img src="/assets/images/logo/ramon-seal-logo.svg" alt="Better Ramon home" className="site-topbar-logo" />
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="site-topbar-menu"
          onClick={() => (open ? close() : openMenu())}
          aria-controls="site-sidebar"
          aria-expanded={open}
        >
          <i className="bi bi-list" aria-hidden="true"></i>
          <span><L en="Menu" fil="Menu" ilo="Menu" /></span>
        </button>
      </header>

      <div className={`site-sidebar-scrim${open ? ' is-open' : ''}`} onClick={close} aria-hidden="true"></div>

      <aside id="site-sidebar" className={`site-sidebar${open ? ' is-open' : ''}`}>
        <div className="site-sidebar-head">
          <Link href="/" className="site-sidebar-brand">
            <img src="/assets/images/logo/ramon-emblem-white.svg" alt="" />
            <span>
              <strong>BetterRamon</strong>
              <small>Ramon, Isabela</small>
            </span>
          </Link>
          <button type="button" className="site-sidebar-close" onClick={close} aria-label="Close menu">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>

        <nav id="main-navigation" className="site-sidebar-nav" aria-label="Main Navigation">
          {groups.map((g, i) => (
            <div key={i} className="site-sidebar-group">
              {g.label && <p className="site-sidebar-label">{t(g.label)}</p>}
              <ul>
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={isActive(item.href) ? 'is-active' : undefined}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                      <span>{t(item.key)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="site-sidebar-lang" role="group" aria-label="Language">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`lang-btn${language === l.code ? ' active' : ''}`}
              onClick={() => setLanguage(l.code)}
              aria-label={`Switch to ${l.name}`}
              aria-pressed={language === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
