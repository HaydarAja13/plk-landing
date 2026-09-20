import Image from 'next/image';
import Link from 'next/link';
import { salesWhatsApp } from '@/data/contact';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-100px)] sm:min-h-[calc(100dvh-112px)] flex items-center bg-[#0c0c0c] overflow-hidden">
      {/* Full Page Hero Background Image */}
      <Image
        src="/hero-workshop.webp"
        alt="Ilustrasi gudang perkakas dan material konstruksi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/80 via-[#0c0c0c]/45 to-transparent" />

      {/* Main Content Overlay Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 py-10 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] mb-6 tracking-tight text-balance">
            Putra Logam Kencana, Toko Bangunan di Semarang
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-8 max-w-xl">
            Cari alat tukang, perkakas teknik, cat, listrik, dan kebutuhan bangunan untuk rumah maupun proyek. Lihat katalog, lalu tanyakan harga dan stok melalui WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center min-h-12 bg-white hover:bg-white/90 text-[#1a211e] font-semibold text-base sm:text-lg px-6 rounded-[4px] transition-colors text-center whitespace-nowrap"
            >
              Lihat Katalog Produk
            </Link>
            <a
              href={salesWhatsApp('Halo Tim Sales PLK, saya ingin bertanya tentang kebutuhan material bangunan.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 bg-[#0c0c0c]/55 hover:bg-[#0c0c0c]/75 text-white border border-white/70 font-semibold text-base sm:text-lg px-6 rounded-[4px] transition-colors text-center whitespace-nowrap"
            >
              Hubungi Kami
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
