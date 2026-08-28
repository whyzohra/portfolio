import { SITE_CONFIG } from '@/data/portfolioData';

export function Footer() {
  const links: { label: string; href: string; external?: boolean }[] = [];
  if (SITE_CONFIG.email) links.push({ label: 'EMAIL ↗', href: `mailto:${SITE_CONFIG.email}` });
  if (SITE_CONFIG.github) links.push({ label: 'GITHUB ↗', href: SITE_CONFIG.github, external: true });
  if (SITE_CONFIG.linkedin) links.push({ label: 'LINKEDIN ↗', href: SITE_CONFIG.linkedin, external: true });

  return (
    <footer className="rule">
      <div className="page grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-2xl">ZOHRA AHMAD</p>
          <p className="eyebrow mt-3">JEDDAH, SAUDI ARABIA</p>
        </div>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-7 font-mono text-xs md:justify-end">
            {links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href}>
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
