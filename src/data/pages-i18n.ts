// Filipino and Ilocano page titles and descriptions, keyed by path: [title, description].
// Drafts for review by a native speaker.
type T = [string, string];
export const pagesI18n: Record<string, { fil: T; ilo: T }> = {
  '/services': {
    fil: ['Mga Serbisyo', 'Hanapin ang mga serbisyo ng munisipyo at ang mga kailangan.'],
    ilo: ['Dagiti Serbisio', 'Biroken dagiti serbisio ti munisipio ken dagiti kasapulan.'],
  },
  '/services/certificates': {
    fil: [
      'Mga Sertipiko',
      'Sertipiko ng kapanganakan, kasal at kamatayan mula sa Municipal Civil Registrar.',
    ],
    ilo: [
      'Dagiti Sertipiko',
      'Sertipiko ti pannakayanak, kasar ken ipapatay manipud iti Municipal Civil Registrar.',
    ],
  },
  '/services/business': {
    fil: ['Permit sa Negosyo', 'Bagong business permit at pag-renew.'],
    ilo: ['Permit ti Negosyo', 'Baro a business permit ken panag-renew.'],
  },
  '/services/tax-payments': {
    fil: ['Pagbabayad ng Buwis', 'Amilyar, buwis sa negosyo at cedula.'],
    ilo: ['Panagbayad ti Buwis', 'Amilyar, buwis ti negosyo ken cedula.'],
  },
  '/services/social-services': {
    fil: ['Serbisyong Panlipunan', 'Senior citizen, PWD, solo parent at tulong mula sa MSWDO.'],
    ilo: ['Serbisio Sosyal', 'Senior citizen, PWD, solo parent ken tulong manipud iti MSWDO.'],
  },
  '/services/health': {
    fil: ['Serbisyong Pangkalusugan', 'Konsulta, bakuna at mga programang pangkalusugan.'],
    ilo: ['Serbisio ti Salun-at', 'Konsulta, bakuna ken dagiti programa ti salun-at.'],
  },
  '/services/real-property': {
    fil: [
      'Lupa, Ari-arian at Tax Mapping',
      'Tax declaration, halaga ng ari-arian, tax map at apela.',
    ],
    ilo: ['Daga, Sanikua ken Tax Mapping', 'Tax declaration, pateg ti sanikua, tax map ken apela.'],
  },
  '/services/building-permits': {
    fil: [
      'Building at Occupancy Permit',
      'Mga hakbang at kailangan sa building at occupancy permit.',
    ],
    ilo: [
      'Building ken Occupancy Permit',
      'Dagiti addang ken kasapulan para iti building ken occupancy permit.',
    ],
  },
  '/services/agriculture': {
    fil: ['Agrikultura', 'Mga programa at tulong ng Municipal Agriculture Office.'],
    ilo: ['Agrikultura', 'Dagiti programa ken tulong ti Municipal Agriculture Office.'],
  },
  '/services/infrastructure': {
    fil: ['Imprastruktura', 'Daan, drainage at mga proyektong pampubliko.'],
    ilo: ['Imprastruktura', 'Kalsada, drainage ken dagiti publiko a proyekto.'],
  },
  '/services/education': {
    fil: ['Edukasyon', 'Mga paaralan, scholarship at programang pang-edukasyon.'],
    ilo: ['Edukasion', 'Dagiti eskuelaan, scholarship ken programa ti edukasion.'],
  },
  '/services/public-safety': {
    fil: ['Kaligtasan ng Publiko', 'Pulis, bumbero, LDRRMO at paghahanda sa sakuna.'],
    ilo: ['Kinatalged ti Publiko', 'Pulis, bombero, LDRRMO ken panagsagana iti didigra.'],
  },
  '/services/environment': {
    fil: ['Kapaligiran', 'Basura at mga programang pangkalikasan.'],
    ilo: ['Aglawlaw', 'Basura ken dagiti programa para iti aglawlaw.'],
  },
  '/service-details/birth-certificate': {
    fil: ['Sertipiko ng Kapanganakan', 'Mga kailangan at hakbang sa pagkuha ng birth certificate.'],
    ilo: [
      'Sertipiko ti Pannakayanak',
      'Dagiti kasapulan ken addang iti panangala ti birth certificate.',
    ],
  },
  '/service-details/business-permits-licensing': {
    fil: ['Business Permit at Lisensya', 'Mga kailangan at hakbang sa business permit.'],
    ilo: ['Business Permit ken Lisensia', 'Dagiti kasapulan ken addang para iti business permit.'],
  },
  '/service-details/municipal-treasurer': {
    fil: ['Ingat-Yaman ng Munisipyo', 'Mga bayaring tinatanggap ng Municipal Treasurer’s Office.'],
    ilo: ['Tesorero ti Munisipio', 'Dagiti bayad nga aw-awaten ti Municipal Treasurer’s Office.'],
  },
  '/about': {
    fil: ['Tungkol sa Ramon', 'Kasaysayan, lokasyon at paano pumunta sa Ramon, Isabela.'],
    ilo: ['Maipapan iti Ramon', 'Pakasaritaan, lokasion ken kasano ti mapan iti Ramon, Isabela.'],
  },
  '/tourism': {
    fil: ['Turismo', 'Magat Dam, Rolling Hills, mga resort at kainan sa Ramon.'],
    ilo: ['Turismo', 'Magat Dam, Rolling Hills, dagiti resort ken pagmanganan idiay Ramon.'],
  },
  '/government': {
    fil: ['Pamahalaan', 'Mga opisyal at barangay ng Ramon, Isabela.'],
    ilo: ['Gobierno', 'Dagiti opisial ken barangay ti Ramon, Isabela.'],
  },
  '/statistics': {
    fil: ['Estadistika', 'Populasyon, lawak ng lupa at iba pang datos tungkol sa Ramon.'],
    ilo: ['Estadistika', 'Populasion, kalawa ti daga ken dadduma pay a datos maipapan iti Ramon.'],
  },
  '/legislative': {
    fil: ['Lehislatibo', 'Mga ordinansa at resolusyon ng Sangguniang Bayan.'],
    ilo: ['Lehislatibo', 'Dagiti ordinansa ken resolusion ti Sangguniang Bayan.'],
  },
  '/legislative/ordinance-framework': {
    fil: ['Mga Ordinansa', 'Mga ordinansa ng munisipyo ng Ramon, Isabela.'],
    ilo: ['Dagiti Ordinansa', 'Dagiti ordinansa ti munisipio ti Ramon, Isabela.'],
  },
  '/legislative/resolution-framework': {
    fil: ['Mga Resolusyon', 'Mga resolusyon ng Sangguniang Bayan.'],
    ilo: ['Dagiti Resolusion', 'Dagiti resolusion ti Sangguniang Bayan.'],
  },
  '/budget': {
    fil: ['Transparency', 'Badyet, kita at audit report ng LGU Ramon.'],
    ilo: ['Transparency', 'Badyet, sapul ken audit report ti LGU Ramon.'],
  },
  '/contact': {
    fil: ['Makipag-ugnayan', 'Paano makipag-ugnayan sa LGU Ramon.'],
    ilo: ['Kontaken', 'Kasano a makontak ti LGU Ramon.'],
  },
  '/sitemap-page': {
    fil: ['Sitemap', 'Lahat ng pahina sa site na ito.'],
    ilo: ['Sitemap', 'Amin a panid iti daytoy a site.'],
  },
  '/terms': {
    fil: ['Mga Tuntunin', 'Mga tuntunin sa paggamit ng BetterRamon.org.'],
    ilo: ['Dagiti Termino', 'Dagiti termino iti panangusar ti BetterRamon.org.'],
  },
  '/privacy': {
    fil: ['Patakaran sa Privacy', 'Ano ang kinokolekta at hindi kinokolekta ng site.'],
    ilo: ['Polisia ti Privacy', 'No ania ti ur-urnongen ken saan nga ur-urnongen ti site.'],
  },
  '/accessibility': {
    fil: ['Accessibility', 'Ang aming pangako sa accessibility.'],
    ilo: ['Accessibility', 'Ti karimi mi para iti accessibility.'],
  },
  '/faq': {
    fil: ['Mga Madalas Itanong', 'Mga sagot sa karaniwang tanong.'],
    ilo: ['Dagiti Kanayon a Saludsod', 'Dagiti sungbat kadagiti gagangay a saludsod.'],
  },
};
