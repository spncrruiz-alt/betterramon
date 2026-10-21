import Link from 'next/link';
import type { ReactNode } from 'react';
import type { PageInfo } from '@/data/pages';

// Breadcrumb + page header shared by the simple content pages.
export default function PageShell({ page, children }: { page: PageInfo; children: ReactNode }) {
  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">{page.title}</span>
        </nav>
      </div>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className={`bi ${page.icon}`} aria-hidden="true"></i>
              <span>{page.title}</span>
            </span>
            <h1>{page.title}</h1>
            <p className="page-header-desc">{page.desc}</p>
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
