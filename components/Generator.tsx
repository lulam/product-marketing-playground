'use client';

import localFont from 'next/font/local';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { tasks } from '@/app/data/prompts';

const switzerLight = localFont({
  src: [
    {
      path: '../public/font/Switzer-Extralight.woff',
      weight: '100',
      style: 'light',
    },
  ],
});

const switzerMedium = localFont({
  src: [
    {
      path: '../public/font/Switzer-Medium.woff',
      weight: '500',
      style: 'medium',
    },
  ],
});

export default function Generator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [currentTopic, setCurrentTopic] = useState<string>(tasks.topic);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsClient(true);
    generatePrompt();
  }, []);

  const generatePrompt = () => {
    if (!tasks.prompts || tasks.prompts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * tasks.prompts.length);
    setCurrentPrompt(tasks.prompts[randomIndex]);
    setRevealed(new Set()); // reset revealed letters
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || !currentPrompt) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const elements = Array.from(
      containerRef.current.querySelectorAll('[data-char-index]')
    ) as HTMLElement[];

    elements.forEach(el => {
      const index = parseInt(el.dataset.charIndex || '0');
      const box = el.getBoundingClientRect();
      const cx = box.left + box.width / 2 - rect.left;
      const cy = box.top + box.height / 2 - rect.top;

      const dist = Math.hypot(cx - x, cy - y);
      if (dist < 80) {
        // reveal radius
        setRevealed(prev => new Set(prev).add(index));
      }
    });
  };

  function renderStyledText(text: string) {
    if (!text) return null;
    const parts = text.split('');
    return parts.map((char, i) => {
      const isRevealed = revealed.has(i);
      return (
        <span
          key={i}
          data-char-index={i}
          className={`${switzerLight.className} text-4xl transition-all duration-200`}
          style={{
            filter: isRevealed ? 'blur(0px)' : 'blur(8px)',
            opacity: isRevealed ? 1 : 0.7,
          }}>
          {char}
        </span>
      );
    });
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className='pt-24 2xl:pt-120'>
      <div className='pb-3 flex flex-row items-center justify-items-start'>
        <button className='cursor-pointer' onClick={generatePrompt}>
          <Image
            className='mr-2'
            src='/refresh-icon.svg'
            width={24}
            height={24}
            alt='refresh icon'
          />
        </button>
        <h3 className='text-base'>{currentTopic}</h3>
      </div>

      <div className='flex flex-col'>
        {currentPrompt && (
          <h2
            className={`${switzerLight.className} tracking-tight pt-4 text-base/4.5 2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl select-none`}>
            {isClient && renderStyledText(currentPrompt)}
          </h2>
        )}
      </div>
    </div>
  );
}
