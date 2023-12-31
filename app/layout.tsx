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
      <body className={`${inter.className} flex flex-col bg-black text-zinc-400`}>
        <div className="flex flex-1  p-2">
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
