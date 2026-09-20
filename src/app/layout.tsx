import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SITE_URL } from '@/data/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Toko Bangunan di Semarang | Putra Logam Kencana',
  description: 'Cari alat tukang, perkakas teknik, cat, listrik, dan material bangunan di Semarang. Jelajahi katalog Putra Logam Kencana dan tanyakan harga serta stok.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Toko Bangunan di Semarang | Putra Logam Kencana',
    description: 'Alat tukang, perkakas teknik, dan material bangunan di Semarang. Lihat katalog dan tanyakan harga serta stok.',
    url: '/',
    images: ['/logo-pt.png'],
    locale: 'id_ID',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Putra Logam Kencana',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-pt.png`,
  description: 'Katalog alat tukang, perkakas teknik, dan material bangunan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="id" 
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#ffffff] text-[#1a211e] antialiased selection:bg-[#1a211e]/15 selection:text-[#1a211e]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
