'use client';

import Image from '@/components/BasePathImage';
import { SITE_CONFIG } from '@/data/portfolioData';
import { useEffect, useState } from 'react';

const profiles = [
  {
    key: 'backend',
    label: 'Backend',
    command: 'inspect --discipline backend',
    code: 'BE-01',
    title: 'Backend engineering.',
    description:
      'Java, Python, Spring Boot, REST APIs, backend services and production software.',
  },
  {
    key: 'distributed',
    label: 'Distributed Systems',
    command: 'inspect --discipline distributed-systems',
    code: 'DS-02',
    title: 'Distributed systems.',
    description:
      'Event-driven systems, asynchronous workflows, scalable services, reliability and system design.',
  },
  {
    key: 'cloud',
    label: 'Cloud & AWS',
    command: 'inspect --discipline cloud-aws',
    code: 'CL-03',
    title: 'Cloud & AWS.',
    description: 'AWS Lambda, EventBridge, S3, Glue, CloudWatch and DynamoDB.',
  },
  {
    key: 'cybersecurity',
    label: 'Cybersecurity',
    command: 'inspect --discipline cybersecurity',
    code: 'SEC-04',
    title: 'Cybersecurity.',
    description:
      'Cybersecurity fundamentals, secure systems, networking, privacy and cybersecurity training.',
  },
] as const;

function resolveTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || SITE_CONFIG.timezone;
  } catch {
    return SITE_CONFIG.timezone;
  }
}

export function EngineerCommandCenter() {
  const [active, setActive] = useState(0);
  const [time, setTime] = useState('');
  const [clockLabel, setClockLabel] = useState('LOCAL');
  const profile = profiles[active];

  useEffect(() => {
    const timeZone = resolveTimeZone();
    const update = () => {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      });
      const parts = formatter.formatToParts(new Date());
      setTime(parts.filter((part) => part.type !== 'timeZoneName').map((part) => part.value).join(''));
      setClockLabel(
        parts.find((part) => part.type === 'timeZoneName')?.value.toUpperCase() ||
          timeZone.split('/').pop()?.replace(/_/g, ' ').slice(0, 3).toUpperCase() ||
          'LOCAL',
      );
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="command-center">
      <div className="command-center__topbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>ZA_OS / PROFESSIONAL PROFILE</span>
        <span className="command-center__clock">
          {clockLabel} {time || '--:--:--'}
        </span>
      </div>
      <div className="command-center__grid">
        <aside className="command-center__rail">
          <div className="profile-scan">
            <Image
              src={SITE_CONFIG.portrait!}
              alt="Zohra Ahmad"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 320px"
            />
            <div className="profile-scan__line" aria-hidden="true" />
            <span>IDENTITY VERIFIED</span>
          </div>
          <div className="profile-id">
            <p>ZOHRA AHMAD</p>
            <span>B.Tech Computer Science &amp; Engineering</span>
            <span>Indian Institute of Information Technology, Sonepat</span>
            <span>CGPA: 7.9 / 10</span>
            <span>Graduated: 2026</span>
            <span>Jeddah, Saudi Arabia</span>
          </div>
          <div className="profile-signal">
            <span>STATUS</span>
            <p>
              <b>.</b> ONLINE/OPEN TO WORK
            </p>
          </div>
        </aside>
        <div className="command-center__main">
          <div className="terminal-kicker">
            <span>zohra@portfolio:~$</span> ./introduce --professional
          </div>
          <h1>
            SOFTWARE
            <br />
            ENGINEER<span className="accent-dot">.</span>
          </h1>
          <p className="command-center__position">
            Backend engineering, distributed systems, cloud infrastructure, AI and cybersecurity.
          </p>
          <p className="interaction-hint">
            <span>INTERACTIVE</span> Select a discipline to inspect the profile
          </p>
          <div className="discipline-tabs" role="tablist" aria-label="Engineering disciplines">
            {profiles.map((item, index) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') setActive((active + 1) % profiles.length);
                  if (event.key === 'ArrowLeft')
                    setActive((active + profiles.length - 1) % profiles.length);
                }}
              >
                <span>0{index + 1}</span>
                {item.label}
                <i aria-hidden="true" />
              </button>
            ))}
          </div>
          <section className="discipline-panel" role="tabpanel" key={profile.key}>
            <div className="discipline-panel__head">
              <span>{profile.code}</span>
              <span>{profile.command}</span>
            </div>
            <h2>{profile.title}</h2>
            <p>{profile.description}</p>
          </section>
        </div>
      </div>
      <div className="command-center__footer">
        <span>SOFTWARE / DISTRIBUTED SYSTEMS / CLOUD</span>
        <span>BACKEND / CYBERSECURITY</span>
        <span>
          <i /> SECURE CONNECTION
        </span>
      </div>
    </div>
  );
}
