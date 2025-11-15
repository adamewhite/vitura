import React from 'react';
import Link from 'next/link';

export default function PillButton({
  href,
  text,
  variant = 'dark',
}: {
  href: string;
  text: string;
  variant?: 'dark' | 'light';
}) {
  const className =
    variant === 'dark'
      ? 'inline-block rounded-full bg-button-dark-bg text-button-dark-text px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity'
      : 'inline-block rounded-full bg-button-light-bg text-button-light-text px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity';

  return (
    <div className='mt-6'>
      <Link href={href} className={className}>
        {text}
      </Link>
    </div>
  );
}
