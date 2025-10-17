import localFont from 'next/font/local';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

const gambarino = localFont({
  src: [
    {
      path: '../public/font/gambarino-reg.woff',
      weight: '400',
      style: 'regular',
    },
  ],
});

const switzerLight = localFont({
  src: [
    {
      path: '../public/font/Switzer-Light.woff',
      weight: '100',
      style: 'light',
    },
  ],
});

const Navbar = () => {
  return (
    <nav className='flexBetween flex flex-row flex-nowrap justify-between mt-12'>
      <Link href='/'>
        <div className='text-lg flex flex-col flex-nowrap'>
          <h2 className={`${gambarino.className} max-sm:text-md`}>
            Product Marketing Playground
          </h2>
          <p
            className={`${switzerLight.className} text-md/1
             text-gray-600 max-sm:text-sm max-sm:mr-50 max-md:mr-40`}>
            Take on challenges where you're the lead product marketer
          </p>
        </div>
      </Link>
      <ul className=' '>
        <Image
          src='/dark-mode-icon.svg'
          width={24}
          height={24}
          alt='brush icon'
        />
      </ul>
    </nav>
  );
};

export default Navbar;
