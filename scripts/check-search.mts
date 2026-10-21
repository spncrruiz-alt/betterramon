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
