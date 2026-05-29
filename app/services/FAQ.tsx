'use client';

import { useId, useState } from 'react';

export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className='border-t border-rule'>
      <button
        id={buttonId}
        type='button'
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className='w-full text-left py-6 flex items-baseline justify-between gap-6 group'
      >
        <span className='text-xl md:text-2xl font-normal text-navy group-hover:text-indigo transition-colors'>
          {question}
        </span>
        <span
          aria-hidden='true'
          className='font-secondary text-[11px] uppercase tracking-[0.28em] text-blue flex-shrink-0 transition-transform duration-300'
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role='region'
        aria-labelledby={buttonId}
        inert={!isOpen}
        className='grid transition-all duration-300 ease-out'
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className='overflow-hidden'>
          <p className='pb-8 pr-12 text-base leading-[1.7] text-navy'>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
