'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Translation data
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-government': 'Government',
    'nav-statistics': 'Statistics',
    'nav-legislative': 'Legislative',
    'nav-transparency': 'Transparency',
    'nav-contact': 'Contact',

    // Hero Section
    'hero-welcome': 'Welcome to BetterRamon.org',
    'hero-subtitle':
      'Access government services, information, and resources for the people of Ramon, Isabela.',
    'hero-find-service': 'Find a Service',

    // Popular Services
    'section-popular': 'Popular Services',
    'service-certificates': 'Certificates',
    'service-certificates-desc': 'Birth, marriage, death certificates',
    'service-business': 'Business Permits',
    'service-business-desc': 'New permits and renewals',
    'service-tax': 'Tax Payments',
    'service-tax-desc': 'Property and business taxes',
    'service-social': 'Social Services',
    'service-social-desc': 'Senior citizen & PWD services',
    'service-health': 'Health Services',
    'service-health-desc': 'Medical assistance & programs',
    'btn-view-all-services': 'View All Services',

    // Municipal Leadership
    'section-leadership': 'Municipal Leadership',
    'title-mayor': 'Municipal Mayor',
    'title-vice-mayor': 'Municipal Vice Mayor',

    // Contact Section
    'section-contact': 'Contact Information',
    'contact-phone': 'Phone',
    'contact-email': 'Email',
    'contact-address': 'Address',
    'contact-hours': 'Mon-Fri: 8:00 AM - 5:00 PM',
    'contact-municipal-hall': 'Municipal Hall',

    // Common Labels
    'label-fee': 'Fee:',
    'label-time': 'Time:',
    'label-free': 'Free',
    'label-walk-in': 'Walk-in',

    // Health Page
    'health-page-title': 'Health Services',
    'health-page-desc': 'Medical consultations, vaccinations, and health programs',
    'health-page-badge': 'Health',
    'health-consultation': 'Medical Consultation',
    'health-consultation-desc': 'Free consultation at Rural Health Units',
    'health-vaccination': 'Vaccination Programs',
    'health-vaccination-desc': 'Free immunization for children and adults',
    'label-schedule-varies': 'Schedule varies',
    'label-by-appointment': 'By appointment',
    'label-free-subsidy': 'Free (subsidy)',
    'label-1-3-days': '1-3 days',
    'health-maternal': 'Maternal Care',
    'health-maternal-desc': 'Prenatal and postnatal health services',
    'health-medicine': 'Medicine Assistance',
    'health-medicine-desc': 'Financial assistance for medicines through MSWDO',
    'health-hivcare-cta-eyebrow': 'Official DOH-Sourced Directory',
    'health-hivcare-cta-heading': 'Find HIV Treatment & Care Facilities Near You',
    'health-hivcare-cta-desc':
      'A searchable, mobile-first web directory of all 338 DOH-designated HIV treatment and care facilities in the Philippines, sourced from DOH Circular No. 2026-0065.',
    'health-hivcare-cta-btn': 'Find HIV Care Facilities',
    'health-hivcare-cta-stat-facilities': 'Facilities Nationwide',
    'health-hivcare-cta-stat-mobile': 'Mobile-Friendly Search',
    'health-hivcare-cta-stat-verified': 'DOH-Verified Listings',

    // Header Dropdown Items
    'dropdown-certificates': 'Certificates',
    'dropdown-business': 'Business',
    'dropdown-tax-payments': 'Tax Payments',
    'dropdown-social-services': 'Social Services',
    'dropdown-health': 'Health',
    'dropdown-agriculture': 'Agriculture',
    'dropdown-infrastructure': 'Infrastructure',
    'dropdown-education': 'Education',
    'dropdown-public-safety': 'Public Safety',
    'dropdown-environment': 'Environment',
    'dropdown-ordinance-framework': 'Ordinance Framework',
    'dropdown-resolution-framework': 'Resolution Framework',

    // Homepage - Hero
    'hero-browse-services': 'Browse Services',
    'hero-contact-us': 'Contact Us',
    'hero-search-placeholder': 'e.g., birth certificate, business permit',
    'hero-popular': 'Popular:',
    'hero-birth-certificate': 'Birth Certificate',
    'hero-business-permit': 'Business Permit',
    'hero-real-property-tax': 'Real Property Tax',

    // Homepage - Popular Services
    'popular-services-subtitle': 'Quick access to frequently requested municipal services',
    'popular-browse-directory': 'Browse complete directory',

    // Homepage - Stats
    'stats-at-a-glance': 'Ramon at a Glance',
    'stats-population-label': 'Population',
    'stats-barangays-label': 'Barangays',
    'stats-municipality-label': 'Municipality',
    'stats-land-area-label': 'Land Area',

    // Homepage - Weather & Map
    'weather-map-title': 'Map of Ramon',

    // Footer
    'footer-tagline':
      'Empowering the people of Ramon with transparent access to the services, programs, and public funds of LGU Ramon.',
    'footer-quick-links': 'Quick Links',
    'footer-resources': 'Resources',
    'footer-sitemap': 'Sitemap',
    'footer-terms': 'Terms of Use',
    'footer-privacy': 'Privacy Policy',
    'footer-accessibility': 'Accessibility',
    'footer-faq': 'FAQ',
    'footer-open-data': 'Open Data Philippines',
    'footer-foi': 'Freedom of Information',
    'footer-blgf': 'BLGF Portal',
    'footer-cmci': 'CMCI DTI Portal',
    'footer-cost': 'Cost to the People of Ramon =',
    'footer-contribute': 'Contribute code with us',
    'footer-copyright-text': 'BetterRamon.org',
    'footer-copyright-disclaimer':
      'Independent community site, not the official LGU website. Data comes from cited public sources.',
  },
  fil: {
    // Navigation - Filipino
    'nav-home': 'Tahanan',
    'nav-services': 'Mga Serbisyo',
    'nav-government': 'Pamahalaan',
    'nav-statistics': 'Estadistika',
    'nav-legislative': 'Lehislatura',
    'nav-transparency': 'Transparensiya',
    'nav-contact': 'Makipag-ugnayan',

    // Hero Section
    'hero-welcome': 'Maligayang Pagdating sa BetterRamon.org',
    'hero-subtitle':
      'I-access ang mga serbisyo ng pamahalaan, impormasyon, at mga mapagkukunan para sa mga mamamayan ng Ramon, Isabela.',
    'hero-find-service': 'Maghanap ng Serbisyo',

    // Popular Services
    'section-popular': 'Mga Sikat na Serbisyo',
    'service-certificates': 'Mga Sertipiko',
    'service-certificates-desc': 'Sertipiko ng kapanganakan, kasal, at kamatayan',
    'service-business': 'Mga Permit sa Negosyo',
    'service-business-desc': 'Bagong permit at pag-renew',
    'service-tax': 'Pagbabayad ng Buwis',
    'service-tax-desc': 'Buwis sa ari-arian at negosyo',
    'service-social': 'Serbisyong Panlipunan',
    'service-social-desc': 'Serbisyo para sa senior citizen at PWD',
    'service-health': 'Serbisyong Pangkalusugan',
    'service-health-desc': 'Tulong medikal at mga programa',
    'btn-view-all-services': 'Tingnan Lahat ng Serbisyo',

    // Municipal Leadership
    'section-leadership': 'Pamunuan ng Munisipalidad',
    'title-mayor': 'Punong Bayan',
    'title-vice-mayor': 'Bise Punong Bayan',

    // Contact Section
    'section-contact': 'Impormasyon sa Pakikipag-ugnayan',
    'contact-phone': 'Telepono',
    'contact-email': 'Email',
    'contact-address': 'Adres',
    'contact-hours': 'Lunes-Biyernes: 8:00 AM - 5:00 PM',
    'contact-municipal-hall': 'Munisipyo',

    // Common Labels - Filipino
    'label-fee': 'Bayad:',
    'label-time': 'Oras:',
    'label-free': 'Libre',
    'label-walk-in': 'Walk-in',

    // Health Page - Filipino
    'health-page-title': 'Serbisyong Pangkalusugan',
    'health-page-desc': 'Mga konsultasyong medikal, bakuna, at programa sa kalusugan',
    'health-page-badge': 'Kalusugan',
    'health-consultation': 'Konsultasyong Medikal',
    'health-consultation-desc': 'Libreng konsultasyon sa Rural Health Units',
    'health-vaccination': 'Mga Programa sa Bakuna',
    'health-vaccination-desc': 'Libreng immunization para sa mga bata at matatanda',
    'label-schedule-varies': 'Iba-iba ang iskedyul',
    'label-by-appointment': 'Sa pamamagitan ng appointment',
    'label-free-subsidy': 'Libre (subsidiya)',
    'label-1-3-days': '1-3 araw',
    'health-maternal': 'Pangangalaga sa Ina',
    'health-maternal-desc': 'Serbisyo sa kalusugan bago at pagkatapos manganak',
    'health-medicine': 'Tulong sa Gamot',
    'health-medicine-desc': 'Tulong pinansyal para sa gamot sa pamamagitan ng MSWDO',
    'health-hivcare-cta-eyebrow': 'Opisyal na Direktoryo mula sa DOH',
    'health-hivcare-cta-heading': 'Hanapin ang Pasilidad para sa Paggamot at Pangangalaga sa HIV',
    'health-hivcare-cta-desc':
      'A searchable, mobile-first web directory of all 338 DOH-designated HIV treatment and care facilities in the Philippines, sourced from DOH Circular No. 2026-0065.',
    'health-hivcare-cta-btn': 'Find HIV Care Facilities',
    'health-hivcare-cta-stat-facilities': 'Pasilidad sa Buong Bansa',
    'health-hivcare-cta-stat-mobile': 'Mobile-Friendly na Paghahanap',
    'health-hivcare-cta-stat-verified': 'Beripikado ng DOH',

    // Header Dropdown Items
    'dropdown-certificates': 'Mga Sertipiko',
    'dropdown-business': 'Negosyo',
    'dropdown-tax-payments': 'Pagbabayad ng Buwis',
    'dropdown-social-services': 'Serbisyong Panlipunan',
    'dropdown-health': 'Kalusugan',
    'dropdown-agriculture': 'Agrikultura',
    'dropdown-infrastructure': 'Imprastraktura',
    'dropdown-education': 'Edukasyon',
    'dropdown-public-safety': 'Kaligtasang Pampubliko',
    'dropdown-environment': 'Kapaligiran',
    'dropdown-ordinance-framework': 'Balangkas ng Ordinansa',
    'dropdown-resolution-framework': 'Balangkas ng Resolusyon',

    // Homepage - Hero
    'hero-browse-services': 'Tingnan ang mga Serbisyo',
    'hero-contact-us': 'Makipag-ugnayan',
    'hero-search-placeholder': 'hal., birth certificate, business permit',
    'hero-popular': 'Sikat:',
    'hero-birth-certificate': 'Birth Certificate',
    'hero-business-permit': 'Permit sa Negosyo',
    'hero-real-property-tax': 'Buwis sa Ari-arian',

    // Homepage - Popular Services
    'popular-services-subtitle':
      'Mabilis na access sa mga madalas na hinihinging serbisyo ng munisipalidad',
    'popular-browse-directory': 'Tingnan ang kumpletong direktoryo',

    // Homepage - Stats
    'stats-at-a-glance': 'Isang Tingin sa Ramon',
    'stats-population-label': 'Populasyon',
    'stats-barangays-label': 'Mga Barangay',
    'stats-municipality-label': 'Munisipalidad',
    'stats-land-area-label': 'Lawak ng Lupa',

    // Homepage - Weather & Map
    'weather-map-title': 'Mapa ng Ramon',

    // Footer
    'footer-tagline':
      'Pagbibigay-kapangyarihan sa mga tao ng Ramon na may transparent na access sa mga serbisyo, programa, at pampublikong pondo ng LGU Ramon.',
    'footer-quick-links': 'Mga Mabilisang Link',
    'footer-resources': 'Mga Mapagkukunan',
    'footer-sitemap': 'Mapa ng Site',
    'footer-terms': 'Mga Tuntunin ng Paggamit',
    'footer-privacy': 'Patakaran sa Privacy',
    'footer-accessibility': 'Aksesibilidad',
    'footer-faq': 'FAQ',
    'footer-open-data': 'Open Data Philippines',
    'footer-foi': 'Kalayaan sa Impormasyon',
    'footer-blgf': 'BLGF Portal',
    'footer-cmci': 'CMCI DTI Portal',
    'footer-cost': 'Gastos sa mga Tao ng Ramon =',
    'footer-contribute': 'Mag-ambag ng code sa amin',
    'footer-copyright-text': 'BetterRamon.org',
    'footer-copyright-disclaimer':
      'Independiyenteng site ng komunidad, hindi opisyal na website ng LGU. Ang datos ay mula sa mga binanggit na pampublikong sanggunian.',
  },
  ilo: {
    // Navigation - Ilocano
    'nav-home': 'Pagtaengan',
    'nav-services': 'Dagiti Serbisyo',
    'nav-government': 'Gobierno',
    'nav-statistics': 'Estadistika',
    'nav-legislative': 'Lehislatura',
    'nav-transparency': 'Transparensiya',
    'nav-contact': 'Kontaken',

    // Hero Section
    'hero-welcome': 'Naragsak nga Isasangbay iti BetterRamon.org',
    'hero-subtitle':
      'Aksesen dagiti serbisyo ti gobierno, impormasyon, ken dagiti resources para kadagiti umili ti Ramon, Isabela.',
    'hero-find-service': 'Agsapul ti Serbisyo',

    // Popular Services
    'section-popular': 'Dagiti Popular a Serbisyo',
    'service-certificates': 'Dagiti Sertipiko',
    'service-certificates-desc': 'Sertipiko ti pannakayanak, kasar, ken patay',
    'service-business': 'Permit ti Negosyo',
    'service-business-desc': 'Baro a permit ken panagrenew',
    'service-tax': 'Panagbayad ti Buwis',
    'service-tax-desc': 'Buwis ti sanikua ken negosyo',
    'service-social': 'Serbisyo Sosyal',
    'service-social-desc': 'Serbisyo para kadagiti senior citizen ken PWD',
    'service-health': 'Serbisyo ti Salun-at',
    'service-health-desc': 'Tulong medikal ken dagiti programa',
    'btn-view-all-services': 'Kitaen Amin a Serbisyo',

    // Municipal Leadership
    'section-leadership': 'Panguluan ti Munisipalidad',
    'title-mayor': 'Mayor ti Munisipalidad',
    'title-vice-mayor': 'Bise Mayor ti Munisipalidad',

    // Contact Section
    'section-contact': 'Impormasyon ti Panagkontak',
    'contact-phone': 'Telepono',
    'contact-email': 'Email',
    'contact-address': 'Adres',
    'contact-hours': 'Lunes-Biernes: 8:00 AM - 5:00 PM',
    'contact-municipal-hall': 'Munisipio',

    // Common Labels - Ilocano
    'label-fee': 'Bayad:',
    'label-time': 'Tiempo:',
    'label-free': 'Libre',
    'label-walk-in': 'Walk-in',

    // Health Page - Ilocano
    'health-page-title': 'Serbisio ti Salun-at',
    'health-page-desc': 'Dagiti konsulta medikal, bakuna, ken programa ti salun-at',
    'health-page-badge': 'Salun-at',
    'health-consultation': 'Konsulta Medikal',
    'health-consultation-desc': 'Libre a konsulta kadagiti Rural Health Units',
    'health-vaccination': 'Dagiti Programa ti Bakuna',
    'health-vaccination-desc': 'Libre nga immunization para kadagiti ubbing ken nataengan',
    'label-schedule-varies': 'Agduduma ti iskedyul',
    'label-by-appointment': 'Babaen ti appointment',
    'label-free-subsidy': 'Libre (subsidiya)',
    'label-1-3-days': '1-3 nga aldaw',
    'health-maternal': 'Panangaywan iti Ina',
    'health-maternal-desc': 'Serbisio ti salun-at sakbay ken kalpasan ti panaganak',
    'health-medicine': 'Tulong iti Agas',
    'health-medicine-desc': 'Tulong pinansyal para iti agas babaen ti MSWDO',
    'health-hivcare-cta-eyebrow': 'Opisial a Direktorio manipud iti DOH',
    'health-hivcare-cta-heading':
      'Birukem ti Pasilidad para iti Panangagas ken Panangaywan iti HIV',
    'health-hivcare-cta-desc':
      'A searchable, mobile-first web directory of all 338 DOH-designated HIV treatment and care facilities in the Philippines, sourced from DOH Circular No. 2026-0065.',
    'health-hivcare-cta-btn': 'Find HIV Care Facilities',
    'health-hivcare-cta-stat-facilities': 'Pasilidad iti Intero a Pagilian',
    'health-hivcare-cta-stat-mobile': 'Mobile-Friendly a Panagbirok',
    'health-hivcare-cta-stat-verified': 'Naverify ti DOH',

    // Header Dropdown Items
    'dropdown-certificates': 'Dagiti Sertipiko',
    'dropdown-business': 'Negosio',
    'dropdown-tax-payments': 'Panagbayad ti Buwis',
    'dropdown-social-services': 'Serbisio Sosyal',
    'dropdown-health': 'Salun-at',
    'dropdown-agriculture': 'Agrikultura',
    'dropdown-infrastructure': 'Imprastraktura',
    'dropdown-education': 'Edukasion',
    'dropdown-public-safety': 'Kaligtasan Pampubliko',
    'dropdown-environment': 'Aglawlaw',
    'dropdown-ordinance-framework': 'Balangkas ti Ordinansa',
    'dropdown-resolution-framework': 'Balangkas ti Resolusion',

    // Homepage - Hero
    'hero-browse-services': 'Kitaen dagiti Serbisio',
    'hero-contact-us': 'Kontaken',
    'hero-search-placeholder': 'kas pagarigan, birth certificate, business permit',
    'hero-popular': 'Popular:',
    'hero-birth-certificate': 'Birth Certificate',
    'hero-business-permit': 'Permit ti Negosio',
    'hero-real-property-tax': 'Buwis ti Kukua',

    // Homepage - Popular Services
    'popular-services-subtitle':
      'Napartak a panag-akses kadagiti masansan a makiddaw a serbisio ti munisipalidad',
    'popular-browse-directory': 'Kitaen ti kompleto a direktorio',

    // Homepage - Stats
    'stats-at-a-glance': 'Maysa a Panagkita iti Ramon',
    'stats-population-label': 'Populasion',
    'stats-barangays-label': 'Dagiti Barangay',
    'stats-municipality-label': 'Munisipalidad',
    'stats-land-area-label': 'Kalawa ti Daga',

    // Homepage - Weather & Map
    'weather-map-title': 'Mapa ti Ramon',

    // Footer
    'footer-tagline':
      'Panangted ti bileg kadagiti umili ti Ramon nga addaan ti transparente a panag-akses kadagiti serbisio, programa, ken pampubliko a pondo ti LGU Ramon.',
    'footer-quick-links': 'Dagiti Napartak a Silpo',
    'footer-resources': 'Dagiti Rekurso',
    'footer-sitemap': 'Mapa ti Site',
    'footer-terms': 'Dagiti Kondision ti Panagusar',
    'footer-privacy': 'Pagannurotan ti Pagkapribado',
    'footer-accessibility': 'Aksesibilidad',
    'footer-faq': 'FAQ',
    'footer-open-data': 'Open Data Philippines',
    'footer-foi': 'Wayawaya ti Impormasion',
    'footer-blgf': 'BLGF Portal',
    'footer-cmci': 'CMCI DTI Portal',
    'footer-cost': 'Gastos kadagiti Umili ti Ramon =',
    'footer-contribute': 'Ag-ambag ti code kadakami',
    'footer-copyright-text': 'BetterRamon.org',
    'footer-copyright-disclaimer':
      'Independiente a site ti komunidad, saan nga opisial a website ti LGU. Ti datos ket nagtaud kadagiti nadakamat a pampubliko a gubuayan.',
  },
};

type Language = 'en' | 'fil' | 'ilo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('betterramon_lang') as Language;
    if (savedLang && ['en', 'fil', 'ilo'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('betterramon_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
