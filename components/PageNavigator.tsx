'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function PageNavigator() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { ui } = useLanguage();

  const pages = [
    [ui.pageNavigator.pages.index, '/'],
    [ui.pageNavigator.pages.experience, '/work'],
    [ui.pageNavigator.pages.projects, '/archive'],
    [ui.pageNavigator.pages.skills, '/skills'],
    [ui.pageNavigator.pages.about, '/about'],
    [ui.pageNavigator.pages.cv, '/cv'],
    [ui.pageNavigator.pages.contact, '/contact'],
  ] as const;

  const current = pages.findIndex(([, href]) => href === pathname);

  return (
    <aside className={`page-navigator ${open ? 'is-open' : ''}`} aria-label={ui.pageNavigator.label}>
      <button type="button" className="page-navigator__trigger" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{ui.pageNavigator.explore}</span>
        <b>
          {open ? ui.pageNavigator.close : ui.pageNavigator.menu} {open ? '×' : '↑'}
        </b>
      </button>
      {open && (
        <nav>
          {pages.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <b>{label}</b>
              {pathname === href ? <small>{ui.pageNavigator.current}</small> : <i>{ui.pageNavigator.open}</i>}
            </Link>
          ))}
        </nav>
      )}
      {!open && (
        <div className="page-navigator__progress">
          <span style={{ width: `${((Math.max(current, 0) + 1) / pages.length) * 100}%` }} />
        </div>
      )}
    </aside>
  );
}
