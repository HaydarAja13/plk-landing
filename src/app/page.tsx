import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandCarousel from '@/components/BrandCarousel';
import CategoryGrid from '@/components/CategoryGrid';
import Features from '@/components/Features';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandCarousel />
        <CategoryGrid />
        <Features />
        <ProductCatalog />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
