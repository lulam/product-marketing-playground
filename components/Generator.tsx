'use client';
import localFont from 'next/font/local';
import React from 'react';
import messaging from '@/app/data/messaging';

const Generator = () => {
  console.log(messaging);

  return (
    <div className='pt-140'>
      <h3 className='pb-2'>Messaging</h3>
      <h1 className='text-xl/7 pr-10 md:text-2xl lg:text-3xl xl:text-3xl'>
        Develop key messaging for a wellness app targeting fitness enthusiasts
      </h1>
    </div>
  );
};

export default Generator;

// max-2xl:font-normal m-18 pt-120 pr-40 text-4xl flex-row flex-wrap max-md:pt-20
