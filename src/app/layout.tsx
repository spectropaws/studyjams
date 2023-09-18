import './globals.css'; // Assuming your CSS file is in the 'styles' folder
import { Inter } from 'next/font/google';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'GDSC YCCE GCCP Leaderboard',
  image:
    'https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png',
  type: 'website',
  description: 'This is the leaderboard for the GDSC YCCE GCCP Jams.',
  keywords: ['gccp', 'jams', 'ycce', 'gdscycce'],
  robots: 'index,follow',
  'og:title': 'GDSC YCCE GCCP Leaderboard',
  'og:image':
    'https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png',
  'og:description': 'This is the leaderboard for the GDSC YCCE GCCP Jams.',
  'twitter:card': 'summary_large_image',
  'twitter:title': 'GDSC YCCE GCCP Leaderboard',
  'twitter:description': 'This is the leaderboard for the GDSC YCCE GCCP Jams.',
  'twitter:image':
    'https://raw.githubusercontent.com/fenilmodi00/GCCP-Jams/main/public/assets/Screenshot%202023-09-12%20191408.png',
  'twitter:site': '@gdseycce',
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
