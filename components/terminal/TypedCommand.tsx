'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * A single terminal line: `> command` typed out quickly on mount, then its output.
 * - No-JS / SSR safe: full text is the initial state, so content always exists.
 * - Accessible: the animated text is aria-hidden; a complete copy is exposed to
 *   screen readers so they receive the whole line, not character-by-character.
 * - Respects prefers-reduced-motion (shows everything immediately, no cursor blink).
 */
export function TypedCommand({
  command,
  output,
  className = '',
  startDelay = 0,
  speed = 26,
  showCursor = true,
  onDone,
}: {
  command: string;
  output?: React.ReactNode;
  className?: string;
  startDelay?: number;
  speed?: number;
  showCursor?: boolean;
  onDone?: () => void;
}) {
  const [count, setCount] = useState(command.length); // SSR / no-JS → full line
  const [typing, setTyping] = useState(false);
  const [revealed, setRevealed] = useState(true); // output visible by default
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useIsomorphicLayoutEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setCount(command.length); setRevealed(true); return; }

    setCount(0);
    setRevealed(false);
    setTyping(true);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= command.length) {
          clearInterval(interval);
          setTyping(false);
          setRevealed(true);
          doneRef.current?.();
        }
      }, speed);
    }, startDelay);
    return () => { clearTimeout(start); clearInterval(interval); };
  }, [command, speed, startDelay]);

  return (
    <div className={`term-line ${className}`}>
      <p className="term-cmd">
        <span className="term-prompt" aria-hidden="true">&gt;</span>
        <span aria-hidden="true">{command.slice(0, count)}</span>
        {showCursor && typing && <span className="term-cursor" aria-hidden="true" />}
        <span className="sr-only">{command}</span>
      </p>
      {output != null && <div className={`term-out ${revealed ? 'is-revealed' : ''}`}>{output}</div>}
    </div>
  );
}
