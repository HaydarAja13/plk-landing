import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA';

export const metadata: Metadata = {
  title: 'Katalog Alat Teknik & Material Bangunan | PLK',
  description: 'Lihat katalog alat tukang, perkakas teknik, cat, listrik, dan material bangunan Putra Logam Kencana. Cari produk lalu tanyakan harga dan stok.',
  alternates: { canonical: '/katalog' },
  openGraph: {
    title: 'Katalog Alat Teknik & Material Bangunan | PLK',
    description: 'Cari alat tukang, perkakas teknik, dan material bangunan Putra Logam Kencana.',
    url: '/katalog',
    images: ['/logo-pt.png'],
  },
};

export default async function KatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string | string[] }>;
}) {
  const { kategori } = await searchParams;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <ProductCatalog isFullPage initialCategorySlug={typeof kategori === 'string' ? kategori : undefined} />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
