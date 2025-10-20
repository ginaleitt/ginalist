import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Ginalist - Honest Product Recommendations',
    template: '%s | Ginalist',
  },
  description: 'Curated lists of products worth buying. No fluff, no fake reviews. Just authentic recommendations from real experience.',
  keywords: ['product recommendations', 'reviews', 'buying guides', 'curated lists', 'honest reviews'],
  authors: [{ name: 'Ginalist' }],
  creator: 'Ginalist',
  publisher: 'Ginalist',
  metadataBase: new URL('https://ginalist.vercel.app'), // Update with your actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ginalist.vercel.app',
    siteName: 'Ginalist',
    title: 'Ginalist - Honest Product Recommendations',
    description: 'Curated lists of products worth buying. No fluff, no fake reviews.',
    images: [
      {
        url: '/og-image.png', // We'll create this later
        width: 1200,
        height: 630,
        alt: 'Ginalist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginalist - Honest Product Recommendations',
    description: 'Curated lists of products worth buying.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}