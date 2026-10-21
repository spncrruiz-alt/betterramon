// Single source of truth for Ramon, Isabela facts shown on the site.
// Every value must come from a public source; cite it next to the value.
// Leave a field null until it is verified; the UI shows "To be verified" for null.

export type Contact = { label: string; number: string | null; tel: string | null };
export type Official = {
  title: 'mayor' | 'vice-mayor';
  name: string | null;
  email: string | null;
  phone: string | null;
};

export const lgu = {
  name: 'Ramon',
  province: 'Isabela',
  region: 'Cagayan Valley (Region II)',
  zip: '3319', // PhilAtlas
  // Municipal center, PhilAtlas
  coords: { lat: 16.7815, lon: 121.5351 },
  // Live address; switch to https://betterramon.org once that domain is registered.
  site: 'https://betterramon.pages.dev',
  repo: 'https://github.com/spncrruiz-alt/betterramon',
  officialSite: null as string | null,
  // Official page of the LGU Public Information Office (the LGU has no website).
  officialFacebook: 'https://www.facebook.com/ramonlgupio' as string | null,
};

// Dated figures (population, income class) are shown only if from 2025 or later.
export const stats = {
  population: { value: null as string | null, source: 'PSA' },
  barangays: { value: '19', source: 'PhilAtlas' },
  landArea: { value: '135.17 km²', source: 'PhilAtlas' },
  incomeClass: { value: null as string | null, source: 'DOF-BLGF' },
};

export const barangays = [
  'Ambatali',
  'Bantug',
  'Bugallon Norte',
  'Bugallon Proper',
  'Burgos',
  'General Aguinaldo',
  'Nagbacalan',
  'Oscariz',
  'Pabil',
  'Pagrang-ayan',
  'Planas',
  'Purok ni Bulan',
  'Raniag',
  'San Antonio',
  'San Miguel',
  'San Sebastian',
  'Villa Beltran',
  'Villa Carmen',
  'Villa Marcos',
];

// Source for all 2025 names below; replace with the official proclamation when available.
export const electionSource = {
  label:
    '2025 election results (partial, unofficial), Rappler / Comelec media server, May 15, 2025',
  href: 'https://ph.rappler.com/elections/2025/local-race/isabela/ramon',
};

export const officials: Official[] = [
  { title: 'mayor', name: 'Giovanni Vizcarra', email: null, phone: null },
  { title: 'vice-mayor', name: 'Jon-Jon Dela Cruz', email: null, phone: null },
];

// Top 8 councilor vote-getters, in vote order.
export const councilors = [
  'William Vizcarra',
  'Melvin Cristobal',
  'Myrna Navarro',
  'Adriano Sabado',
  'Rita Banhan',
  'Candido Natividad Jr.',
  'Charmayne Honorio',
  'Rodrigo Terte',
];

export const contact = {
  phone: null as string | null,
  email: 'pamahalaangramon@gmail.com' as string | null, // PIO Ramon Facebook page, About
  address: 'Municipal Hall, Bugallon Proper, Ramon, Isabela 3319', // PIO Ramon Facebook page, About
};

// Local numbers: "Ramon Emergency Hotlines" public graphic (2025).
export const hotlineSource = 'Ramon Emergency Hotlines public graphic (2025)';

export const hotlines: (Contact & { icon: string })[] = [
  { icon: 'bi-shield-fill', label: 'PNP Ramon', number: '0906 233 7819', tel: '09062337819' },
  { icon: 'bi-fire', label: 'BFP Ramon', number: '0906 941 1743', tel: '09069411743' },
  {
    icon: 'bi-exclamation-triangle-fill',
    label: 'LDRRMO',
    number: '0906 713 5314',
    tel: '09067135314',
  },
  {
    icon: 'bi-exclamation-triangle-fill',
    label: 'LDRRMO (2nd line)',
    number: '0933 814 5364',
    tel: '09338145364',
  },
  {
    icon: 'bi-lightning-charge-fill',
    label: 'ISELCO',
    number: '0975 773 0687',
    tel: '09757730687',
  },
  { icon: 'bi-heart-fill', label: 'MSWDO', number: null, tel: null },
  { icon: 'bi-hospital', label: 'Rural Health Unit', number: null, tel: null },
  // National hotlines (toll-free nationwide)
  { icon: 'bi-telephone-fill', label: 'National Emergency', number: '911', tel: '911' },
  { icon: 'bi-plus-circle-fill', label: 'Philippine Red Cross', number: '143', tel: '143' },
  { icon: 'bi-heart-pulse-fill', label: 'DOH Health Hotline', number: '1555', tel: '1555' },
  { icon: 'bi-chat-heart-fill', label: 'NCMH Crisis Hotline', number: '1553', tel: '1553' },
];

export const TBV = 'To be verified';
