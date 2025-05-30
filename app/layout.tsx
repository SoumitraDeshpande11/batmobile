import type { Metadata } from 'next'
import { Orbitron, Poppins } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Batmobile Project',
  description: 'A showcase of my custom-designed 3D Batmobile model',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${orbitron.variable} ${poppins.variable} font-poppins bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}