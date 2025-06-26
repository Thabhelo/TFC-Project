import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Falls Church - A God-Centered Community',
  description: 'A God-centered community where the Gospel transforms lives, families, and society. Join us for worship, fellowship, and spiritual growth.',
  keywords: ['church', 'Falls Church', 'Christian', 'worship', 'community', 'faith'],
  authors: [{ name: 'The Falls Church' }],
  creator: 'The Falls Church',
  publisher: 'The Falls Church',
  openGraph: {
    title: 'The Falls Church - A God-Centered Community',
    description: 'A God-centered community where the Gospel transforms lives, families, and society.',
    url: 'https://thefallschurch.net',
    siteName: 'The Falls Church',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Falls Church - A God-Centered Community',
    description: 'A God-centered community where the Gospel transforms lives, families, and society.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}