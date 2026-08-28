'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const engineering = [['Index','/'],['Experience','/work'],['Projects','/archive'],['Skills','/skills'],['About','/about'],['CV','/cv'],['Contact','/contact']] as const;

export function PageNavigator() {
  const pathname = usePathname(); const [open,setOpen] = useState(false);
  const pages = engineering;
  const current = pages.findIndex(([,href]) => href === pathname);
  return <aside className={`page-navigator ${open ? 'is-open' : ''}`} aria-label="Explore portfolio pages">
    <button type="button" className="page-navigator__trigger" aria-expanded={open} onClick={() => setOpen(!open)}><span>EXPLORE PAGES</span><b>{open ? 'CLOSE' : 'MENU'} {open ? '×' : '↑'}</b></button>
    {open && <nav>{pages.map(([label,href],index) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}><span>{String(index+1).padStart(2,'0')}</span><b>{label}</b>{pathname === href ? <small>CURRENT</small> : <i>OPEN ↗</i>}</Link>)}</nav>}
    {!open && <div className="page-navigator__progress"><span style={{width:`${((Math.max(current,0)+1)/pages.length)*100}%`}} /></div>}
  </aside>;
}
