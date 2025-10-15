import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Product Marketing Playground',
  description: "Take on challenges where you're the lead product marketer.",
};

const switzer = localFont({
  src: [
    {
      path: './font/Switzer-Light.woff',
      weight: '100',
      style: 'light',
    },
    {
      path: './font/Switzer-Regular.woff',
      weight: '400',
      style: 'regular',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={switzer.className}>
      <body className='max-sm:ml-16 mr-16 max-md:ml-32 mr-32 max-xl:ml-56 mr-56 max-2xl:ml-12 mr-12'>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
