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
  site: 'https://betterramon.org',
  repo: 'https://github.com/spncrruiz-alt/betterramon',
  officialSite: null as string | null,
  officialFacebook: null as string | null,
};

// PhilAtlas, citing PSA 2020 Census of Population and Housing
export const stats = {
  population: { value: '56,523', source: 'PSA 2020 Census' },
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

export const officials: Official[] = [
  { title: 'mayor', name: null, email: null, phone: null },
  { title: 'vice-mayor', name: null, email: null, phone: null },
];

export const contact = {
  phone: null as string | null,
  email: null as string | null,
  address: 'Municipal Hall, Ramon, Isabela 3319',
};

export const hotlines: (Contact & { icon: string })[] = [
  { icon: 'bi-shield-fill', label: 'Police', number: null, tel: null },
  { icon: 'bi-heart-fill', label: 'MSWDO', number: null, tel: null },
  { icon: 'bi-fire', label: 'Fire', number: null, tel: null },
  { icon: 'bi-exclamation-triangle-fill', label: 'MDRRMO', number: null, tel: null },
  { icon: 'bi-telephone-fill', label: 'National Emergency', number: '911', tel: '911' },
];

export const TBV = 'To be verified';
