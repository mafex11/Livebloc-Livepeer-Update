import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Livepeerprovider } from './LivepeerProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Livepeer Studio',
  description: 'Go Live with Livepeer Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Livepeerprovider>
          {children}
        </Livepeerprovider>
      </body>
    </html>
  )
}
