import React from 'react';
import Link from 'next/link';

export default function PillButton({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color?: string;
}) {
  return (
    <div className='mt-6'>
      <Link
        href={href}
        className={`inline-block rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800`}
      >
        {text}
      </Link>
    </div>
  );
}
