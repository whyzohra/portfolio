'use client';

import Image from '@/components/BasePathImage';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

function resolveTimeZone(timezone: string): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || timezone;
  } catch {
    return timezone;
  }
}

export function EngineerCommandCenter() {
  const { ui, portfolio } = useLanguage();
  const { SITE_CONFIG } = portfolio;
  const profiles = ui.commandCenter.profiles;
  const [active, setActive] = useState(0);
  const [time, setTime] = useState('');
  const [clockLabel, setClockLabel] = useState('LOCAL');
  const profile = profiles[active];

  useEffect(() => {
    const timeZone = resolveTimeZone(SITE_CONFIG.timezone);
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
  }, [SITE_CONFIG.timezone]);

  return (
    <div className="command-center">
      <div className="command-center__topbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{ui.commandCenter.topbar}</span>
        <span className="command-center__clock ltr-content">
          {clockLabel} {time || '--:--:--'}
        </span>
      </div>
      <div className="command-center__grid">
        <aside className="command-center__rail">
          <div className="profile-scan">
            <Image
              src={SITE_CONFIG.portrait!}
              alt={ui.commandCenter.portraitAlt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 320px"
            />
            <div className="profile-scan__line" aria-hidden="true" />
            <span>{ui.commandCenter.identityVerified}</span>
          </div>
          <div className="profile-id">
            <p>{portfolio.PERSONAL_INFO.name}</p>
            <span>{ui.commandCenter.degree}</span>
            <span className="ltr-content">{ui.commandCenter.institution}</span>
            <span className="ltr-content">{ui.commandCenter.cgpa}</span>
            <span className="ltr-content">{ui.commandCenter.graduated}</span>
            <span>{SITE_CONFIG.location}</span>
          </div>
          <div className="profile-signal">
            <span>{ui.commandCenter.status}</span>
            <p>
              <b>.</b> {ui.commandCenter.statusValue}
            </p>
          </div>
        </aside>
        <div className="command-center__main">
          <div className="terminal-kicker ltr-content">
            <span>zohra@portfolio:~$</span> {ui.commandCenter.terminalPrompt}
          </div>
          <h1>
            {ui.commandCenter.headlineLine1}
            <br />
            {ui.commandCenter.headlineLine2}
            <span className="accent-dot">.</span>
          </h1>
          <p className="command-center__position">{ui.commandCenter.positioning}</p>
          <p className="interaction-hint">
            <span>{ui.commandCenter.interactive}</span> {ui.commandCenter.interactiveHint}
          </p>
          <div className="discipline-tabs" role="tablist" aria-label={ui.commandCenter.disciplinesAria}>
            {profiles.map((item, index) => (
              <button
                key={item.command}
                type="button"
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') setActive((active + 1) % profiles.length);
                  if (event.key === 'ArrowLeft') setActive((active + profiles.length - 1) % profiles.length);
                }}
              >
                <span>0{index + 1}</span>
                {item.label}
                <i aria-hidden="true" />
              </button>
            ))}
          </div>
          <section className="discipline-panel" role="tabpanel" key={profile.command}>
            <div className="discipline-panel__head ltr-content">
              <span>{profile.code}</span>
              <span>{profile.command}</span>
            </div>
            <h2>{profile.title}</h2>
            <p>{profile.description}</p>
          </section>
        </div>
      </div>
      <div className="command-center__footer">
        <span>{ui.commandCenter.footerLine1}</span>
        <span>{ui.commandCenter.footerLine2}</span>
        <span>
          <i /> {ui.commandCenter.secureConnection}
        </span>
      </div>
    </div>
  );
}
