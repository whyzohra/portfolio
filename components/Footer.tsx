'use client';

import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { portfolio, ui } = useLanguage();
  const { SITE_CONFIG } = portfolio;
  const links: { label: string; href: string; external?: boolean }[] = [];
  if (SITE_CONFIG.email) links.push({ label: ui.footer.email, href: `mailto:${SITE_CONFIG.email}` });
  if (SITE_CONFIG.github) links.push({ label: ui.footer.github, href: SITE_CONFIG.github, external: true });
  if (SITE_CONFIG.linkedin) links.push({ label: ui.footer.linkedin, href: SITE_CONFIG.linkedin, external: true });

  return (
    <footer className="rule">
      <div className="page grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-2xl">{portfolio.PERSONAL_INFO.name}</p>
          <p className="eyebrow mt-3">{SITE_CONFIG.location.toUpperCase()}</p>
        </div>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-7 font-mono text-xs md:justify-end">
            {links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="ltr-content">
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href} className="ltr-content">
                  {link.label}
                </a>
              ),
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
