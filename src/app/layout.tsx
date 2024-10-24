import './globals.css'; // Assuming your CSS file is in the 'styles' folder
import { Inter } from 'next/font/google';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'GDG YCCE GCCP Leaderboard',
  image:
    'https://gdg-studyjams.vercel.app/assets/gdg-studyjams-poster.jpg',
  type: 'website',
  description: 'This is the leaderboard for the GDG YCCE GCCP Jams.',
  keywords: ['gdg', 'gccp', 'jams', 'ycce', 'gdgycce'],
  robots: 'index,follow',
  'og:title': 'GDG YCCE GCCP Leaderboard',
  'og:image':
    'https://gdg-studyjams.vercel.app/assets/gdg-studyjams-poster.jpg',
  'og:description': 'This is the leaderboard for the GDG YCCE GCCP Jams.',
  'twitter:card': 'summary_large_image',
  'twitter:title': 'GDG YCCE GCCP Leaderboard',
  'twitter:description': 'This is the leaderboard for the GDG YCCE GCCP Jams.',
  'twitter:image':
    'https://gdg-studyjams.vercel.app/assets/gdg-studyjams-poster.jpg',
  'twitter:site': '@GdscYcce',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico" />
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
