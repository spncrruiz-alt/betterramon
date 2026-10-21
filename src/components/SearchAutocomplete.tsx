'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { useRouter } from 'next/navigation';
import { pages } from '@/data/pages';
import { searchPages } from '@/lib/search';

interface Props {
  placeholder?: string;
}

// Search box over every page and guide (see src/data/pages.ts keywords).
// Arrow keys move through results, Enter opens one, Escape closes the list.
export default function SearchAutocomplete({ placeholder }: Props) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLFormElement>(null);
  const results = searchPages(query, pages);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  function go(path: string) {
    setOpen(false);
    router.push(path);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  const showList = open && query.trim().length > 0;

  return (
    <form
      ref={ref}
      className="search-form"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const pick = results[active] ?? results[0];
        go(pick ? pick.path : '/sitemap-page');
      }}
    >
      <div className="search-input-wrapper">
        <div className="search-autocomplete-wrapper">
          <input
            type="text"
            className="search-box"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setActive(-1);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder={placeholder || 'Search services...'}
            aria-label="Search the site"
            role="combobox"
            aria-expanded={showList}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
            autoComplete="off"
          />
          {showList && (
            <ul id={listId} className="search-autocomplete-list" role="listbox">
              {results.length === 0 && (
                <li className="search-autocomplete-item search-autocomplete-empty">
                  No match. Press Enter to browse all pages.
                </li>
              )}
              {results.map((p, i) => (
                <li
                  key={p.path}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  className={`search-autocomplete-item${i === active ? ' is-active' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    go(p.path);
                  }}
                >
                  <i className={`bi ${p.icon}`} aria-hidden="true"></i>
                  <span>
                    <strong>{p.title}</strong>
                    <small>{p.desc}</small>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="search-submit-btn" aria-label="Search">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </form>
  );
}
