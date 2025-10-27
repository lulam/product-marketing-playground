'use client';
import NumberTicker from './fancy/text/basic-number-ticker';
import React from 'react';

const LoadingTicker = () => {
  return (
    <div>
      <div className='p-10 flex w-dvw h-dvh justify-center items-center bg-white'>
        <p className='w-full text-96xl md:text-9xl flex justify-center font-azeret-mono text-[#121212]'>
          <NumberTicker
            from={0}
            target={100}
            autoStart={true}
            transition={{ duration: 3.5, type: 'tween', ease: 'easeInOut' }}
            onComplete={() => console.log('complete')}
            onStart={() => console.log('start')}
          />
          %
        </p>
      </div>
    </div>
  );
};

export default LoadingTicker;
