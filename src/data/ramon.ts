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

// Per-barangay facts, PhilAtlas barangay pages (population: PSA 2020 Census, the latest
// barangay-level count published there; location and elevation are estimates).
// Replace population with the PSA 2024 POPCEN barangay table when it can be fetched.
export type BarangayInfo = { population2020: number; lat: number; lon: number; elevationM: number };
export const barangayInfo: Record<string, BarangayInfo> = {
  'Ambatali': { population2020: 3688, lat: 16.8268, lon: 121.515, elevationM: 112 },
  'Bantug': { population2020: 1162, lat: 16.809, lon: 121.5879, elevationM: 87 },
  'Bugallon Norte': { population2020: 5760, lat: 16.7872, lon: 121.5325, elevationM: 112 },
  'Bugallon Proper': { population2020: 7335, lat: 16.781, lon: 121.5355, elevationM: 108 },
  'Burgos': { population2020: 2864, lat: 16.8057, lon: 121.5287, elevationM: 115 },
  'General Aguinaldo': { population2020: 5965, lat: 16.8251, lon: 121.4811, elevationM: 164 },
  'Nagbacalan': { population2020: 1355, lat: 16.8031, lon: 121.5755, elevationM: 88 },
  'Oscariz': { population2020: 3118, lat: 16.8211, lon: 121.5245, elevationM: 107 },
  'Pabil': { population2020: 823, lat: 16.7735, lon: 121.5767, elevationM: 83 },
  'Pagrang-ayan': { population2020: 2327, lat: 16.7574, lon: 121.4934, elevationM: 112 },
  'Planas': { population2020: 3029, lat: 16.7746, lon: 121.473, elevationM: 125 },
  'Purok ni Bulan': { population2020: 782, lat: 16.8113, lon: 121.5624, elevationM: 94 },
  'Raniag': { population2020: 5613, lat: 16.7611, lon: 121.541, elevationM: 98 },
  'San Antonio': { population2020: 2182, lat: 16.7539, lon: 121.5227, elevationM: 100 },
  'San Miguel': { population2020: 5713, lat: 16.784, lon: 121.5104, elevationM: 132 },
  'San Sebastian': { population2020: 1461, lat: 16.7804, lon: 121.5717, elevationM: 85 },
  'Villa Beltran': { population2020: 724, lat: 16.8218, lon: 121.55, elevationM: 103 },
  'Villa Carmen': { population2020: 1696, lat: 16.7429, lon: 121.4959, elevationM: 103 },
  'Villa Marcos': { population2020: 926, lat: 16.7611, lon: 121.5608, elevationM: 84 },
};

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

// Legislative records. Add only items dated 2025 or later, each with its source.
export type Measure = { number: string; title: string; date: string; source: string };
export const ordinances: Measure[] = [];
export const resolutions: Measure[] = [];

// Fiscal documents. Add only items for fiscal year 2025 or later.
export type FiscalDoc = { year: number; title: string; href: string; source: string };
export const fiscalDocs: FiscalDoc[] = [];
