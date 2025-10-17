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
      path: '../public/font/Switzer-Light.woff',
      weight: '100',
      style: 'light',
    },
    {
      path: '../public/font/Switzer-Regular.woff',
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
      <body className='ml-16 mr-16'>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
