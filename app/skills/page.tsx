'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FULL_TECHNICAL_INDEX } from '@/data/portfolioData';

export default function SkillsPage() {
  const groups = FULL_TECHNICAL_INDEX;
  const [query,setQuery] = useState('');
  const [active,setActive] = useState('All');
  const visible = useMemo(() => groups.filter(group => active === 'All' || group.category === active).map(group => ({...group,items:group.items.filter(item => item.toLowerCase().includes(query.toLowerCase()))})).filter(group => group.items.length),[groups,active,query]);
  const count = groups.reduce((total,group) => total + group.items.length,0);

  return <article className="page skills-page skills-page--engineer">
    <header><div><p className="eyebrow">ENGINEERING / CAPABILITY INDEX</p><h1>Technical skills.</h1></div><div className="skills-page__intro"><b>{String(count).padStart(2,'0')}</b><span>verified tools, methods and engineering capabilities</span></div></header>
    <section className="skills-controls"><label><span>SEARCH CAPABILITIES</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Type a skill or tool..." /></label><div><button type="button" aria-pressed={active === 'All'} onClick={() => setActive('All')}>ALL</button>{groups.map(group => <button type="button" key={group.category} aria-pressed={active === group.category} onClick={() => setActive(group.category)}>{group.category}</button>)}</div></section>
    <div className="skills-index">{visible.map((group,index) => <details key={group.category} open={Boolean(query) || active !== 'All' || index < 3}><summary><span>{String(groups.findIndex(item => item.category === group.category)+1).padStart(2,'0')}</span><h2>{group.category}</h2><b>{group.items.length} SKILLS</b><i>+</i></summary><div>{group.items.map(item => <p key={item}>{item}</p>)}</div></details>)}</div>
    {!visible.length && <p className="skills-empty">No matching capability. Try a broader search.</p>}
    <footer><p>See where these capabilities were applied.</p><Link href="/archive">OPEN PROJECTS ↗</Link></footer>
  </article>;
}
