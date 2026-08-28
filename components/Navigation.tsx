'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const engineerLinks = [
  ['INDEX', '/'], ['EXPERIENCE', '/work'], ['PROJECTS', '/archive'], ['SKILLS', '/skills'], ['ABOUT', '/about'], ['CV', '/cv'],
] as const;
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const links = engineerLinks;
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const isActive = (href: string) => {
    if (href === '/') return normalizedPath === '/';
    if (href === '/archive') {
      return normalizedPath === '/archive' || normalizedPath.startsWith('/archive/') || normalizedPath.startsWith('/work/');
    }
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  // Close the mobile menu on any navigation, including browser back/forward.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Escape closes the menu and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-nav site-nav--engineer sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[color:var(--bg-primary)]/95">
      <div className="mx-auto flex h-[74px] w-[min(100%-2rem,1180px)] items-center justify-between gap-6">
        <Link href="/" className="font-mono text-xs tracking-[.14em]" aria-label="Zohra Ahmad home">ZA / E</Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined}
              className="border-b border-transparent py-2 font-mono text-[10px] tracking-[.12em] text-[var(--text-muted)] aria-[current=page]:border-[var(--text-main)] aria-[current=page]:text-[var(--text-main)]">
              {label}
            </Link>
          ))}
          <Link href="/contact" aria-current={isActive('/contact') ? 'page' : undefined} className="border-b border-transparent py-2 font-mono text-[10px] tracking-[.12em] text-[var(--text-muted)] aria-[current=page]:border-[var(--text-main)] aria-[current=page]:text-[var(--text-main)]">CONTACT ↗</Link>
        </nav>
        <button ref={triggerRef} type="button" className="min-h-11 font-mono text-xs lg:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-6 lg:hidden">
          <nav className="grid" aria-label="Mobile navigation">
            {[...links, ['CONTACT', '/contact'] as const].map(([label, href], index) => (
              <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between border-t border-[var(--border-subtle)] font-mono text-xs aria-[current=page]:text-[var(--accent-color)]">
                <span>{String(index + 1).padStart(2, '0')}</span><span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
