'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function SkillsPage() {
  const { ui, portfolio } = useLanguage();
  const groups = portfolio.FULL_TECHNICAL_INDEX;
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>(ui.skills.all);
  const visible = useMemo(
    () =>
      groups
        .filter((group) => active === ui.skills.all || group.category === active)
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
        }))
        .filter((group) => group.items.length),
    [groups, active, query, ui.skills.all],
  );
  const count = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <article className="page skills-page skills-page--engineer">
      <header>
        <div>
          <p className="eyebrow">{ui.skills.eyebrow}</p>
          <h1>{ui.skills.title}</h1>
        </div>
        <div className="skills-page__intro">
          <b>{String(count).padStart(2, '0')}</b>
          <span>{ui.skills.verified}</span>
        </div>
      </header>
      <section className="skills-controls">
        <label>
          <span>{ui.skills.searchLabel}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={ui.skills.searchPlaceholder}
          />
        </label>
        <div>
          <button type="button" aria-pressed={active === ui.skills.all} onClick={() => setActive(ui.skills.all)}>
            {ui.skills.all}
          </button>
          {groups.map((group) => (
            <button
              type="button"
              key={group.category}
              aria-pressed={active === group.category}
              onClick={() => setActive(group.category)}
            >
              {group.category}
            </button>
          ))}
        </div>
      </section>
      <div className="skills-index">
        {visible.map((group, index) => (
          <details key={group.category} open={Boolean(query) || active !== ui.skills.all || index < 3}>
            <summary>
              <span>{String(groups.findIndex((item) => item.category === group.category) + 1).padStart(2, '0')}</span>
              <h2>{group.category}</h2>
              <b>
                {group.items.length} {ui.skills.skillsCount}
              </b>
              <i>+</i>
            </summary>
            <div>
              {group.items.map((item) => (
                <p key={item} className="ltr-content">
                  {item}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
      {!visible.length && <p className="skills-empty">{ui.skills.empty}</p>}
      <footer>
        <p>{ui.skills.footerText}</p>
        <Link href="/archive">{ui.skills.openProjects}</Link>
      </footer>
    </article>
  );
}
