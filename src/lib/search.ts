import type { PageInfo } from '../data/pages';

// Lowercase, strip accents (ñ -> n) and punctuation so "Osmeña", "osmena" and
// "OSMENA" all match.
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// Rank pages for a query. Every query word must match the start of some word
// in the page's title, keywords or description; title and keyword hits rank higher.
export function searchPages(query: string, list: PageInfo[], limit = 6): PageInfo[] {
  const terms = normalize(query).split(' ').filter(Boolean);
  if (terms.length === 0) return [];
  const scored: { page: PageInfo; score: number }[] = [];
  for (const page of list) {
    const fields: [string[], number][] = [
      [normalize(page.title).split(' '), 5],
      [normalize((page.keywords ?? []).join(' ')).split(' '), 4],
      [normalize(page.desc).split(' '), 1],
    ];
    let score = 0;
    for (const term of terms) {
      let best = 0;
      for (const [words, weight] of fields) {
        if (words.some((w) => w.startsWith(term))) best = Math.max(best, weight);
      }
      if (best === 0) {
        score = 0;
        break;
      }
      score += best;
    }
    if (score > 0) scored.push({ page, score: score + (page.ready ? 1 : 0) });
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.page);
}
