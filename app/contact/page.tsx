'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const { ui, portfolio } = useLanguage();
  const { SITE_CONFIG } = portfolio;
  const [status, setStatus] = useState<Status>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') statusRef.current?.focus();
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    const data = new FormData(form);
    const subject = String(data.get('type') || ui.contact.defaultSubject);
    const name = String(data.get('name') || ui.contact.defaultName);
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const body = `${ui.contact.mailtoBodyName}: ${name}\n${ui.contact.mailtoBodyEmail}: ${email}\n\n${message}`;
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
  }

  return (
    <div className="page contact contact--engineer">
      <header className="contact__header">
        <div>
          <p className="eyebrow">{ui.contact.eyebrow}</p>
          <h1>{ui.contact.title}</h1>
        </div>
        <p>{ui.contact.description}</p>
      </header>
      <div className="contact__desk">
        <aside className="contact__direct">
          <p className="eyebrow">{ui.contact.directDetails}</p>
          <a className="break-all ltr-content" href={`mailto:${SITE_CONFIG.email}`}>
            {SITE_CONFIG.email}
          </a>
          <p>{SITE_CONFIG.location}</p>
          <a className="text-link ltr-content" href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="text-link ltr-content" href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </aside>
        <form name="contact" onSubmit={submit} className="contact__form" noValidate>
          <Field label={ui.contact.name} name="name" type="text" autoComplete="name" />
          <Field label={ui.contact.email} name="email" type="email" autoComplete="email" />
          <label className="block">
            <span className="eyebrow">{ui.contact.subject}</span>
            <select
              name="type"
              required
              defaultValue=""
              className="mt-3 min-h-12 w-full border-b border-[var(--border-strong)] bg-transparent py-2"
            >
              <option value="" disabled>
                {ui.contact.selectEnquiry}
              </option>
              {ui.contact.enquiryTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="eyebrow">{ui.contact.message}</span>
            <textarea
              name="message"
              required
              minLength={20}
              rows={7}
              className="mt-3 w-full border border-[var(--border-strong)] bg-transparent p-4"
              aria-describedby="message-hint"
            />
            <span id="message-hint" className="mt-2 block text-xs text-[var(--text-muted)]">
              {ui.contact.messageHint}
            </span>
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="min-h-12 border border-[var(--text-main)] px-7 font-mono text-xs tracking-widest disabled:opacity-50"
          >
            {status === 'sending' ? ui.contact.sending : ui.contact.send}
          </button>
          <div ref={statusRef} tabIndex={-1} aria-live="polite" role="status" className="text-sm outline-none">
            {status === 'success' && ui.contact.success}
            {status === 'error' && (
              <>
                {ui.contact.errorPrefix}{' '}
                <a className="underline ltr-content" href={`mailto:${SITE_CONFIG.email}`}>
                  {SITE_CONFIG.email}
                </a>
                .
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-3 min-h-12 w-full border-b border-[var(--border-strong)] bg-transparent py-2"
      />
    </label>
  );
}
