// Self-check for src/lib/search.ts: node --experimental-strip-types scripts/check-search.mts
import assert from 'node:assert/strict';
import { normalize, searchPages } from '../src/lib/search.ts';

const pages = [
  { path: '/a', title: 'Tax Payments', icon: '', desc: 'Real property tax and cedula', keywords: ['amilyar', 'sedula'], ready: true },
  { path: '/b', title: 'Business Permits', icon: '', desc: 'New permits and renewals', keywords: ['negosyo'] },
  { path: '/c', title: 'Building and Occupancy Permits', icon: '', desc: 'Construction permits' },
];
assert.equal(normalize('Osmeña, Ramon!'), 'osmena ramon');
assert.deepEqual(searchPages('amilyar', pages).map((p) => p.path), ['/a']);
assert.deepEqual(searchPages('perm', pages).map((p) => p.path), ['/b', '/c']);
assert.deepEqual(searchPages('build perm', pages).map((p) => p.path), ['/c']);
assert.deepEqual(searchPages('xyz', pages), []);
assert.deepEqual(searchPages('   ', pages), []);
console.log('search ok');

// Deadlines self-check
import { upcoming } from '../src/lib/deadlines.ts';
const oct21 = upcoming(new Date(2026, 9, 21));
assert.deepEqual(oct21.map((d) => d.daysLeft), [71, 91, 130]); // Dec 31, Jan 20, Feb 28 (2027)
assert.equal(oct21[1].due.getUTCFullYear(), 2027);
assert.equal(upcoming(new Date(2026, 2, 31))[0].daysLeft, 0); // due today counts
console.log('deadlines ok');
