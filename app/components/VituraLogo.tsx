// components/VituraLogo.tsx
import React from 'react';

type Props = {
  color?: string; // any CSS color or Tailwind var, e.g. "#6b21a8" or "currentColor"
  width?: number; // px
  height?: number; // px
  title?: string; // for a11y
  className?: string; // optional extra classes (e.g., "inline-block")
  src?: string; // defaults to /vitura.svg, override if needed
};

export default function VituraLogo({
  color = 'currentColor',
  width = 160,
  height = 40,
  title = 'Vitura',
  className = '',
  src = '/vitura.svg',
}: Props) {
  console.log('textVariant in Logo', color);
  return (
    <span
      role='img'
      aria-label={title}
      className={className}
      style={{
        display: 'inline-block',
        width,
        height,
        backgroundColor: color,
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}
