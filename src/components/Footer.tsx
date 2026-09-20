'use client';

import { Phone, ArrowUpRight } from 'lucide-react';
import { SALES_PHONE, salesWhatsApp } from '@/data/contact';

const mapsQuery = 'Putra%20Logam%20Kencana%20Semarang';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white pt-20 pb-8 px-6 text-[#1a211e] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#e0e3e1]" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Top section with logo and back-to-top */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-[#3d4541] text-base leading-relaxed max-w-md font-medium">
              Toko alat teknik, tukang, dan kebutuhan bangunan di Semarang. Lihat katalog dan tanyakan harga serta stok kepada sales.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="hidden sm:flex items-center gap-2 text-base font-bold text-[#1a211e] hover:text-[#000000] transition-colors duration-300 group cursor-pointer"
          >
            <span className="tracking-wider">KEMBALI KE ATAS</span>
            <span className="w-9 h-9 rounded-full border border-[#1a211e] group-hover:bg-[#1a211e] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </span>
          </button>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#1a211e] tracking-[0.14em] uppercase mb-5">
              HALAMAN UTAMA
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: 'Katalog Stok Barang', href: '/katalog' },
                { label: 'Kategori Material', href: '/#kategori' },
                { label: 'Kenapa Pilih PLK', href: '/#tentang' },
                { label: 'Kontak Sales', href: salesWhatsApp('Halo Putra Logam Kencana, saya ingin bertanya tentang produk dan harga.') },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-[#3d4541] hover:text-[#1a211e] font-medium transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#1a211e] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#1a211e] tracking-[0.14em] uppercase mb-5">
              KONTAK SALES
            </h3>
            <div>
              <a href={`tel:+${SALES_PHONE}`} className="flex items-center gap-3 text-base text-[#3d4541] font-medium hover:text-[#1a211e] transition-colors">
                <Phone className="w-4 h-4 text-[#1a211e] shrink-0" />
                <span>+62 822-2700-7030</span>
              </a>
              <p className="mt-3 text-base text-[#3d4541]">Tanya stok dan harga melalui WhatsApp sebelum berkunjung.</p>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#1a211e] tracking-[0.14em] uppercase mb-5">
              CARI TOKO DI PETA
            </h3>
            <iframe
              src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
              width="100%"
              height="190"
              loading="lazy"
              title="Pencarian Putra Logam Kencana Semarang di Google Maps"
              className="border-0 rounded-lg"
              allowFullScreen
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-base font-semibold underline underline-offset-4 hover:text-[#000000]"
            >
              Buka pencarian di Google Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#eef0ef] mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between text-[#4a524e] text-base gap-4 font-medium">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Putra Logam Kencana. Hak cipta dilindungi undang-undang.
          </p>
          <p className="flex items-center gap-2 text-[#4a524e]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a211e]" />
            <span>Semarang, Jawa Tengah</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
