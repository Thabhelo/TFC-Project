import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
})

export const metadata: Metadata = {
  title: 'The Falls Church - A God-Centered Community',
  description: 'A God-centered community where the Gospel transforms lives, families, and society. Join us for worship, fellowship, and spiritual growth.',
  keywords: ['church', 'Falls Church', 'Christian', 'worship', 'community', 'faith'],
  authors: [{ name: 'The Falls Church' }],
  creator: 'The Falls Church',
  publisher: 'The Falls Church',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/tfc-logo-64.webp',
      type: 'image/webp',
    },
    {
      rel: 'apple-touch-icon',
      url: '/tfc-logo-128.webp',
    },
  ],
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    // DNS prefetch for external resources
    'dns-prefetch': 'https://fonts.googleapis.com, https://fonts.gstatic.com',
    // Preconnect for faster loading
    'preconnect': 'https://fonts.googleapis.com, https://fonts.gstatic.com',
    // Critical resource hints
    'preload': '/tfc-logo.webp as image type=image/webp, /favicon.ico as image type=image/x-icon',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {/* Service worker registration for caching */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js');
                  });
                }
              `,
            }}
          />
        )}
        {children}
      </body>
    </html>
  )
}