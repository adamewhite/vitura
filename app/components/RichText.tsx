// Renders the inline markers used in content/home.md:
//   *word*        -> indigo italic accent  (<em className="text-indigo">)
//   [text](/path) -> inline link           (<Link>)
// Anything else is passed through as plain text. This keeps the editable copy
// in markdown-ish form while preserving the site's existing styled spans.
import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';

type Props = {
  text: string;
  /** Optional className applied to inline links (varies by section). */
  linkClassName?: string;
};

// Matches either a [label](href) link or an *accent* span, capturing the parts.
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*/g;

export default function RichText({ text, linkClassName }: Props) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const m of text.matchAll(TOKEN)) {
    const index = m.index ?? 0;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    const [, linkLabel, linkHref, accent] = m;
    if (linkHref) {
      nodes.push(
        <Link
          key={key++}
          href={linkHref}
          className={
            linkClassName ??
            'border-b border-navy hover:text-teal hover:border-teal transition-colors'
          }
        >
          {linkLabel}
        </Link>
      );
    } else if (accent) {
      nodes.push(
        <em key={key++} className='text-indigo'>
          {accent}
        </em>
      );
    }

    lastIndex = index + m[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <Fragment>{nodes}</Fragment>;
}
