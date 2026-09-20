'use client';

import Image from 'next/image';

type BrandItem = {
  name: string;
  logo: string;
};

const BRANDS: BrandItem[] = [
  { name: 'Tekiro', logo: '/TEKIRO-logo.webp' },
  { name: 'Haston Prohex', logo: '/logo-Haston.webp' },
  { name: 'Hioshi', logo: '/Logo-Hioshi.webp' },
  { name: 'Modern', logo: '/logo-Modern.webp' },
  { name: 'Mollar', logo: '/LOGO-MOLLAR.webp' },
  { name: 'Onda', logo: '/Logo-Onda.webp' },
];

export default function BrandCarousel() {
  const marqueeBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-[#ffffff] py-14 px-6 border-b border-[#e0e0e0]">
      {/* Centered container limited to 85% page width */}
      <div className="max-w-[85%] mx-auto">
        <div className="text-center mb-8">
          <span className="text-base font-bold text-[#606562] tracking-wider uppercase block">
            PILIHAN MEREK
          </span>
        </div>

        {/* Masked viewport showing larger vibrant logos on crisp white background */}
        <div className="relative w-full overflow-hidden mask-linear-gradient py-3">
          <div className="flex items-center gap-14 sm:gap-20 w-max animate-marquee hover:[animation-play-state:paused]">
            {marqueeBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="w-[220px] sm:w-[280px] h-20 sm:h-24 relative shrink-0 flex items-center justify-center opacity-100 grayscale-0 transition-transform duration-300 group hover:scale-105"
              >
                <Image
                  src={brand.logo}
                  alt={idx < BRANDS.length ? brand.name : ''}
                  fill
                  sizes="(max-width: 640px) 220px, 280px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
