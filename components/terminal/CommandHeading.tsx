import type { ElementType } from 'react';

/**
 * A section label rendered as a shell command. The `label` is the semantic/SEO
 * heading and is always in the DOM (screen-reader safe); the command is
 * decorative framing.
 */
export function CommandHeading({
  command,
  label,
  as: Tag = 'h2' as ElementType,
  className = '',
}: {
  command: string;
  label: string;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={`cmd-heading ${className}`}>
      <span className="cmd-heading__cmd" aria-hidden="true">
        <span className="cmd-heading__prompt">&gt;</span> {command}
      </span>
      <span className="cmd-heading__label">{label}</span>
    </Tag>
  );
}
