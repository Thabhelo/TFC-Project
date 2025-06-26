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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/inter-cyrillic-ext-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/playfair-display-cyrillic-ext-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport meta for better mobile performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Optimized icons */}
        <link rel="icon" href="/tfc-logo-64.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/tfc-logo-128.webp" />
        
        {/* Prefetch critical pages */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contact" />
        
        {/* Critical resource hints */}
        <link rel="preload" href="/tfc-logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}