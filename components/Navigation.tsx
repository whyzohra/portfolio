'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { ui, language, setLanguage } = useLanguage();

  const links = [
    [ui.nav.index, '/'],
    [ui.nav.experience, '/work'],
    [ui.nav.projects, '/archive'],
    [ui.nav.skills, '/skills'],
    [ui.nav.about, '/about'],
    [ui.nav.cv, '/cv'],
  ] as const;

  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const isActive = (href: string) => {
    if (href === '/') return normalizedPath === '/';
    if (href === '/archive') {
      return normalizedPath === '/archive' || normalizedPath.startsWith('/archive/') || normalizedPath.startsWith('/work/');
    }
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-nav site-nav--engineer sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[color:var(--bg-primary)]/95">
      <div className="mx-auto flex h-[74px] w-[min(100%-2rem,1180px)] items-center justify-between gap-6">
      <div className="lang-switcher" role="group" aria-label="Language">
        <button type="button" className={language === 'en' ? 'is-active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>
          EN
        </button>
        <span aria-hidden="true">/</span>
        <button type="button" className={language === 'ar' ? 'is-active' : ''} aria-pressed={language === 'ar'} onClick={() => setLanguage('ar')}>
          ع
        </button>
      </div>
        <nav className="hidden items-center gap-6 lg:flex" aria-label={ui.nav.primary}>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className="border-b border-transparent py-2 font-mono text-[10px] tracking-[.12em] text-[var(--text-muted)] aria-[current=page]:border-[var(--text-main)] aria-[current=page]:text-[var(--text-main)]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            className="border-b border-transparent py-2 font-mono text-[10px] tracking-[.12em] text-[var(--text-muted)] aria-[current=page]:border-[var(--text-main)] aria-[current=page]:text-[var(--text-main)]"
          >
            {ui.nav.contactArrow}
          </Link>
        </nav>
        <div className="flex items-center gap-4 lg:hidden">
          <button
            ref={triggerRef}
            type="button"
            className="min-h-11 font-mono text-xs"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? ui.nav.close : ui.nav.menu}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-6 lg:hidden">
          <nav className="grid" aria-label={ui.nav.mobile}>
            {[...links, [ui.nav.contact, '/contact'] as const].map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between border-t border-[var(--border-subtle)] font-mono text-xs aria-[current=page]:text-[var(--accent-color)]"
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
