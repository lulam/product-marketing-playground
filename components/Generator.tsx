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
      style: 'normal',
    },
  ],
});

const switzerMedium = localFont({
  src: [
    {
      path: '../public/font/Switzer-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});

const Generator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [promptId, setPromptId] = useState<number>(0);

  const hasEverBlurredRef = useRef(false);
  const isCurrentlyRevealingRef = useRef(false);
  const [letterBlurs, setLetterBlurs] = useState<number[]>([]);

  const maxBlur = 8;
  const radius = 500;

  const parsePrompt = (text: string) => {
    const letters: { char: string; highlight: boolean; isSpace: boolean }[] =
      [];
    let inHighlight = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '_') {
        inHighlight = !inHighlight;
        continue;
      }
      letters.push({
        char,
        highlight: inHighlight,
        isSpace: char === ' ',
      });
    }
    return letters;
  };

  const generatePrompt = () => {
    if (!tasks.prompts || tasks.prompts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * tasks.prompts.length);
    const newPrompt = tasks.prompts[randomIndex];

    setCurrentPrompt(newPrompt);
    setPromptId(prev => prev + 1);

    const letters = parsePrompt(newPrompt);

    if (!hasEverBlurredRef.current) {
      setLetterBlurs(Array(letters.length).fill(maxBlur));
      isCurrentlyRevealingRef.current = false;
    } else {
      setLetterBlurs(Array(letters.length).fill(0));
    }
  };

  useEffect(() => {
    setIsClient(true);
    generatePrompt();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hasEverBlurredRef.current && !isCurrentlyRevealingRef.current) return;
    if (!currentPrompt || !textContainerRef.current) return;

    const x = e.clientX;
    const y = e.clientY;

    const letterElements = textContainerRef.current.querySelectorAll(
      '[data-letter-index]'
    );

    const newBlurs: number[] = [];
    let hasAnyReveal = false;

    letterElements.forEach((el, i) => {
      const currentBlur = letterBlurs[i] ?? maxBlur;
      const rect = el.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;

      const distance = Math.hypot(letterCenterX - x, letterCenterY - y);

      let newBlur = currentBlur;
      if (distance < radius) {
        newBlur = Math.min(currentBlur, maxBlur * (distance / radius));

        if (newBlur < maxBlur) {
          hasAnyReveal = true;
        }
      }

      newBlurs[i] = newBlur;
    });

    setLetterBlurs(newBlurs);

    if (hasAnyReveal && !hasEverBlurredRef.current) {
      hasEverBlurredRef.current = true;
      isCurrentlyRevealingRef.current = true;
    }
  };

  const renderScratchText = (text: string) => {
    if (!text) return null;

    const letters = parsePrompt(text);

    return letters.map((letter, i) => {
      const blur = letterBlurs[i] ?? 0;

      if (letter.isSpace) {
        return (
          <span key={i} data-letter-index={i}>
            &nbsp;
          </span>
        );
      }

      const fontClass = letter.highlight
        ? switzerMedium.className
        : switzerLight.className;
      const colorClass = letter.highlight ? 'text-red-600' : 'text-black';

      return (
        <span
          key={i}
          data-letter-index={i}
          className={`${fontClass} ${colorClass} inline-block`}
          style={{
            filter: `blur(${blur}px)`,
            transition: 'filter 0.1s linear',
            fontStyle: letter.highlight ? 'italic' : 'normal',
          }}>
          {letter.char}
        </span>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className='pt-24 2xl:pt-120'
      onMouseMove={handleMouseMove}>
      <div className='pb-3 flex flex-row items-center justify-start'>
        <button className='cursor-pointer' onClick={() => generatePrompt()}>
          <Image
            className='mr-2'
            src='/refresh-icon.svg'
            width={24}
            height={24}
            alt='refresh icon'
          />
        </button>
        <h3 className='text-sm'>{tasks.topic}</h3>
      </div>

      <div className='flex flex-col'>
        {currentPrompt && (
          <h2
            ref={textContainerRef}
            className={`${switzerLight.className} tracking-tight pt-4 text-4xl lg:text-5xl 2xl:text-6xl select-none cursor-default`}>
            {isClient && renderScratchText(currentPrompt)}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Generator;
