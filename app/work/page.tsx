'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ADDITIONAL_EXPERIENCE, EDUCATION, EXPERIENCE } from '@/data/portfolioData';

export default function WorkPage() {
  const [activeRole, setActiveRole] = useState(0);
  const roles = [...EXPERIENCE, ...ADDITIONAL_EXPERIENCE];
  const active = roles[activeRole];
  return (
    <div className="page experience-page">
      <header className="section !pt-0"><p className="eyebrow">ENGINEERING / EXPERIENCE</p><h1 className="display mt-10">Backend.<br/>Cloud.<br/>Systems.</h1><p className="lede mt-8">Experience across backend engineering, distributed systems, cloud infrastructure and production-oriented software development.</p></header>
      <section className="experience-console">
        <nav aria-label="Professional roles">{roles.map((role,index)=><button key={role.id} type="button" className={role.primary ? 'is-current' : ''} aria-pressed={activeRole===index} onClick={()=>setActiveRole(index)}><span>{String(index+1).padStart(2,'0')}</span><b>{role.role}</b><small>{role.organization}</small><em>{role.primary ? '● CURRENT' : role.period}</em></button>)}</nav>
        <article key={active.id}><header><p className="eyebrow">ROLE / {String(activeRole+1).padStart(2,'0')}</p><div>{active.primary && <b>● CURRENT POSITION</b>}<span>{active.period}</span></div></header><h2>{active.role}</h2><h3>{active.organization}</h3><p>{active.location}</p>{active.summary && <p className="experience-role-summary">{active.summary}</p>}<div>{active.focus.map((item,index)=><section key={item}><span>{String(index+1).padStart(2,'0')}</span><p>{item}</p></section>)}</div></article>
      </section>
      <section className="experience-summary"><div><p className="eyebrow">CAPABILITY THREAD</p><h2>Backend.<br/>Distributed.<br/>Reliable.</h2></div><div>{['Build backend services and APIs with production discipline','Design event-driven and distributed workflows on cloud infrastructure','Apply monitoring, testing and observability in operational systems','Engineer with security and reliability in mind'].map((item,index)=><p key={item}><span>0{index+1}</span>{item}</p>)}</div></section>
      <section className="experience-education"><header><p className="eyebrow">EDUCATION FOUNDATION</p><Link href="/cv">FULL CV ↗</Link></header><div className="education-table-wrap"><table><thead><tr><th>Period</th><th>Qualification</th><th>Institution</th><th>Result</th></tr></thead><tbody>{EDUCATION.map(item=><tr key={item.degree}><td data-label="Period">{item.period}</td><th scope="row" data-label="Qualification">{item.degree}</th><td data-label="Institution">{item.institution}</td><td data-label="Result">{item.grade}</td></tr>)}</tbody></table></div></section>
      <section className="engineer-cta"><p>Looking for backend, cloud and distributed systems work?</p><Link href="/archive">OPEN PROJECTS ↗</Link></section>
    </div>
  );
}
