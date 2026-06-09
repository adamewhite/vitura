// Loads landing-page copy from content/home.md so text can be edited in
// markdown instead of inline JSX. The frontmatter (YAML) holds all the copy;
// prose strings may use *word* for an indigo italic accent and [text](/path)
// for an inline link — see RichText for how those markers are rendered.
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'yaml';

export type Stat = { label: string; value: string };
export type Item = { title: string; desc: string };

export type HomeContent = {
  hero: {
    eyebrow: string;
    headline: string;
    intro: string;
    stats: Stat[];
  };
  services: {
    sectionLabel: string;
    heading: string;
    intro: string;
    craftLabel: string;
    craftStatement: string;
    items: Item[];
  };
  process: {
    sectionLabel: string;
    heading: string;
    intro: string;
    steps: Item[];
  };
  quote: {
    text: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    intro: string;
    inquiriesLabel: string;
    email: string;
    sendLabel: string;
    sendStatement: string;
    ctaLabel: string;
  };
};

function loadFrontmatter(relativePath: string): HomeContent {
  const raw = readFileSync(join(process.cwd(), relativePath), 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    throw new Error(`No frontmatter found in ${relativePath}`);
  }
  return parse(match[1]) as HomeContent;
}

export const home = loadFrontmatter('content/home.md');
