'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface TerminalDiveStep {
  command: string;
  label: string;
  lines: string[];
}

export interface TerminalDiveLink {
  label: string;
  href: string;
}

export function ProjectTerminalDive({
  title,
  meta,
  summary,
  steps,
  links,
  backHref = '/archive',
  active = false,
}: {
  title: string;
  meta: string;
  summary: string;
  steps: TerminalDiveStep[];
  links: TerminalDiveLink[];
  backHref?: string;
  active?: boolean;
}) {
  const { ui } = useLanguage();
  const [visible, setVisible] = useState(1);
  const [completed, setCompleted] = useState(0);
  const nextPrompt = useRef<HTMLButtonElement>(null);
  const isTyping = completed < visible;

  useEffect(() => {
    if (!isTyping && visible > 1) nextPrompt.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [isTyping, visible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' || event.repeat || isTyping || visible >= steps.length) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, input, textarea, select, [contenteditable="true"]')) return;
      event.preventDefault();
      setVisible((count) => Math.min(count + 1, steps.length));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTyping, steps.length, visible]);

  const runNext = () => {
    if (!isTyping) setVisible((count) => Math.min(count + 1, steps.length));
  };

  return (
    <div
      className={`project-terminal${active ? ' project-terminal--active' : ''}`}
      aria-label={`${title} ${ui.projectTerminal.ariaLabel}`}
    >
      <div className="project-terminal__chrome">
        <span className="ltr-content">{ui.projectTerminal.sessionLog}</span>
        <span className="ltr-content">
          {completed}/{steps.length} {ui.projectTerminal.commandsComplete}
        </span>
      </div>

      <div className="project-terminal__body">
        <p className="project-terminal__command ltr-content">
          <span>zohra@portfolio:~$</span> {ui.projectTerminal.inspectCommand}
        </p>
        <div className="project-terminal__intro">
          <p>{meta}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>

        <div className="project-terminal__stream" aria-live="polite">
          {steps.slice(0, visible).map((step, index) => (
            <AnimatedTerminalEntry
              key={step.command + step.label}
              step={step}
              animate={index === visible - 1 && index >= completed}
              onDone={() => setCompleted((value) => Math.max(value, index + 1))}
            />
          ))}

          {!isTyping && visible < steps.length ? (
            <button ref={nextPrompt} type="button" className="project-terminal__next" onClick={runNext}>
              <span className="ltr-content">zohra@portfolio:~$</span> <span className="ltr-content">{steps[visible].command}</span>
              <i aria-hidden="true" />
              <small>{ui.projectTerminal.clickOrEnter}</small>
            </button>
          ) : !isTyping ? (
            <div className="project-terminal__complete">
              <p className="ltr-content">
                <span>zohra@portfolio:~$</span> {ui.projectTerminal.sessionComplete}
              </p>
              <p>{ui.projectTerminal.deepDiveComplete}</p>
            </div>
          ) : null}
        </div>

        <footer className="project-terminal__footer">
          <div>
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="ltr-content">
                {link.label} ↗
              </a>
            ))}
          </div>
          <Link href={backHref}>{ui.projectTerminal.returnToArchive}</Link>
        </footer>
      </div>
    </div>
  );
}

function AnimatedTerminalEntry({
  step,
  animate,
  onDone,
}: {
  step: TerminalDiveStep;
  animate: boolean;
  onDone: () => void;
}) {
  const fullOutput = step.lines.join('\n');
  const [commandCount, setCommandCount] = useState(animate ? 0 : step.command.length);
  const [outputCount, setOutputCount] = useState(animate ? 0 : fullOutput.length);
  const tail = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  const finish = useCallback(() => {
    if (!done.current) {
      done.current = true;
      onDone();
    }
  }, [onDone]);

  useEffect(() => {
    if (!animate) {
      finish();
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCommandCount(step.command.length);
      setOutputCount(fullOutput.length);
      finish();
      return;
    }

    let commandIndex = 0;
    let outputIndex = 0;
    let outputTimer: number | undefined;
    const commandTimer = window.setInterval(() => {
      commandIndex += 1;
      setCommandCount(commandIndex);
      if (commandIndex >= step.command.length) {
        window.clearInterval(commandTimer);
        outputTimer = window.setInterval(() => {
          outputIndex = Math.min(outputIndex + 2, fullOutput.length);
          setOutputCount(outputIndex);
          if (outputIndex % 18 === 0 || outputIndex === fullOutput.length) {
            tail.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
          if (outputIndex >= fullOutput.length) {
            if (outputTimer) window.clearInterval(outputTimer);
            finish();
          }
        }, 12);
      }
    }, 24);
    return () => {
      window.clearInterval(commandTimer);
      if (outputTimer) window.clearInterval(outputTimer);
    };
  }, [animate, finish, fullOutput, step.command.length]);

  let remaining = outputCount;
  return (
    <section className="project-terminal__entry">
      <p className="project-terminal__command ltr-content">
        <span>zohra@portfolio:~$</span> {step.command.slice(0, commandCount)}
        {commandCount < step.command.length && <i className="project-terminal__cursor" />}
      </p>
      {commandCount >= step.command.length && (
        <div className="project-terminal__result">
          <p className="project-terminal__status">✓ {step.label}</p>
          {step.lines.map((line, lineIndex) => {
            const shown = line.slice(0, Math.max(0, remaining));
            remaining -= line.length + 1;
            if (!shown && outputCount < fullOutput.length) return null;
            return (
              <p key={`${line}-${lineIndex}`}>
                <b>{String(lineIndex + 1).padStart(2, '0')}</b>
                <span>
                  {shown}
                  {outputCount < fullOutput.length && shown.length < line.length && (
                    <i className="project-terminal__cursor" />
                  )}
                </span>
              </p>
            );
          })}
          <span ref={tail} aria-hidden="true" />
        </div>
      )}
    </section>
  );
}
