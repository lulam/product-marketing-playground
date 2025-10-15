import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

const Navbar = () => {
  return (
    <nav className='max-sm:flexBetween flex flex-row flex-nowrap justify-between mt-24 max-2xl:mt-12'>
      <Link href='/'>
        <Image
          src='/pmp-logo-black.png'
          alt='Product Marketing Playground Logo'
          width={130}
          height={160}
        />
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
