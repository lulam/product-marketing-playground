'use client';
import localFont from 'next/font/local';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { tasks } from '@/app/data/prompts';
import Typewriter from './fancy/text/typewriter';

const switzerLight = localFont({
  src: [
    {
      path: '../public/font/Switzer-Light.woff',
      weight: '100',
      style: 'light',
    },
  ],
});

const Generator = () => {
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [currentTopic, setCurrentTopic] = useState<string>('');

  const generatePrompt = () => {
    const allPrompts = tasks.flatMap(task =>
      task.prompts.map(p => ({
        topic: task.topic,
        prompts: p,
      }))
    );

    const randomIndex = Math.floor(Math.random() * allPrompts.length);
    const chosen = allPrompts[randomIndex];

    setCurrentPrompt(chosen.prompts);
    setCurrentTopic(chosen.topic);
  };

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <div className='pt-85 2xl:pt-120'>
      <div className='pb-3 flex flex-row items-center justify-items-start'>
        <button
          className='cursor-pointer'
          onClick={() => {
            generatePrompt();
          }}>
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
        <h1
          className={`${switzerLight.className} text-base/4.5 2xl:text-4xl 2xl:pr-220 xl:text-4x lg:text-4xl md:text-2xl md:pr-40 lg:pr-90`}>
          <Typewriter text={currentPrompt} speed={40} cursorChar={' '} />
        </h1>
      </div>
    </div>
  );
};

export default Generator;

// max-2xl:font-normal m-18 pt-120 pr-40 text-4xl flex-row flex-wrap max-md:pt-20
