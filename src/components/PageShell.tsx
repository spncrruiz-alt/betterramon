import Link from 'next/link';
import type { ReactNode } from 'react';
import type { PageInfo } from '@/data/pages';
import { pagesI18n } from '@/data/pages-i18n';
import L from '@/components/L';

// Breadcrumb + page header shared by the simple content pages.
export default function PageShell({ page, children }: { page: PageInfo; children: ReactNode }) {
  const tr = pagesI18n[page.path];
  const title = <L en={page.title} fil={tr?.fil[0]} ilo={tr?.ilo[0]} />;
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">
            <L en="Home" fil="Home" ilo="Balay" />
          </Link>
          <span>/</span>
          <span aria-current="page">{title}</span>
        </nav>
      </div>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className={`bi ${page.icon}`} aria-hidden="true"></i>
              <span>{title}</span>
            </span>
            <h1>{title}</h1>
            <p className="page-header-desc">
              <L en={page.desc} fil={tr?.fil[1]} ilo={tr?.ilo[1]} />
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </>
  );
}

export function pageFor(path: string, list: PageInfo[]): PageInfo {
  const page = list.find((p) => p.path === path);
  if (!page) throw new Error(`No entry in src/data/pages.ts for ${path}`);
  return page;
}
