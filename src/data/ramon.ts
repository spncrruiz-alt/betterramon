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
  population: { value: '57,412 (2024)' as string | null, source: 'PSA 2024 POPCEN, sum of the 19 barangays in the PSGC list' },
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

// Per-barangay facts. Population: PSA 2024 POPCEN, from the PSA PSGC barangay list
// (psa.gov.ph/classification/psgc/barangays/0203124000, as of 31 July 2025).
// Location and elevation: estimates from PhilAtlas barangay pages.
export type BarangayInfo = { population2024: number; lat: number; lon: number; elevationM: number };
export const barangayInfo: Record<string, BarangayInfo> = {
  'Ambatali': { population2024: 3667, lat: 16.8268, lon: 121.515, elevationM: 112 },
  'Bantug': { population2024: 1135, lat: 16.809, lon: 121.5879, elevationM: 87 },
  'Bugallon Norte': { population2024: 5671, lat: 16.7872, lon: 121.5325, elevationM: 112 },
  'Bugallon Proper': { population2024: 7545, lat: 16.781, lon: 121.5355, elevationM: 108 },
  'Burgos': { population2024: 2828, lat: 16.8057, lon: 121.5287, elevationM: 115 },
  'General Aguinaldo': { population2024: 6257, lat: 16.8251, lon: 121.4811, elevationM: 164 },
  'Nagbacalan': { population2024: 1404, lat: 16.8031, lon: 121.5755, elevationM: 88 },
  'Oscariz': { population2024: 3137, lat: 16.8211, lon: 121.5245, elevationM: 107 },
  'Pabil': { population2024: 828, lat: 16.7735, lon: 121.5767, elevationM: 83 },
  'Pagrang-ayan': { population2024: 2325, lat: 16.7574, lon: 121.4934, elevationM: 112 },
  'Planas': { population2024: 3090, lat: 16.7746, lon: 121.473, elevationM: 125 },
  'Purok ni Bulan': { population2024: 790, lat: 16.8113, lon: 121.5624, elevationM: 94 },
  'Raniag': { population2024: 5623, lat: 16.7611, lon: 121.541, elevationM: 98 },
  'San Antonio': { population2024: 2151, lat: 16.7539, lon: 121.5227, elevationM: 100 },
  'San Miguel': { population2024: 6049, lat: 16.784, lon: 121.5104, elevationM: 132 },
  'San Sebastian': { population2024: 1438, lat: 16.7804, lon: 121.5717, elevationM: 85 },
  'Villa Beltran': { population2024: 905, lat: 16.8218, lon: 121.55, elevationM: 103 },
  'Villa Carmen': { population2024: 1686, lat: 16.7429, lon: 121.4959, elevationM: 103 },
  'Villa Marcos': { population2024: 883, lat: 16.7611, lon: 121.5608, elevationM: 84 },
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
