// components/VituraLogo.tsx
import React from 'react';

type Props = {
  width?: number; // px
  height?: number; // px
  title?: string; // for a11y
  className?: string; // optional extra classes (e.g., "inline-block")
  src?: string; // defaults to /vitura.svg, override if needed
};

export default function VituraLogo({
  width = 160,
  height = 40,
  title = 'Vitura',
  className = '',
  src = '/vitura.svg',
}: Props) {
  return (
    <span
      role='img'
      aria-label={title}
      className={`inline-block vitura-logo-color transition-colors ease-in ${className}`}
      style={{
        width,
        height,
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}
