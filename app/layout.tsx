import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Leftbar } from '@/components/Leftbar';
import { Rightbar } from '@/components/Rightbar';
import { Player } from '@/components/Player';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify UI Clone',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black h-screen text-zinc-400">
          <Leftbar />
          <main>
            {children}
          </main>
          <Rightbar />
        </div>

        <Player />
      </body>
    </html>
  )
}
