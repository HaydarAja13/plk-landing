'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/categories';

const CARD_WIDTH = 260;
const CARD_GAP = 16;

export default function CategoryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = CARD_WIDTH + CARD_GAP;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section id="kategori" className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a211e] tracking-tight mb-2">
              Kategori Produk yang Tersedia
            </h2>
            <p className="text-[#606562] text-base font-medium max-w-lg leading-relaxed">
              Temukan berbagai kebutuhan proyek dan rumah Anda dalam satu toko.
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-[#cccfcd] flex items-center justify-center text-[#1a211e] hover:bg-[#1a211e] hover:text-white hover:border-[#1a211e] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Geser ke kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-[#cccfcd] flex items-center justify-center text-[#1a211e] hover:bg-[#1a211e] hover:text-white hover:border-[#1a211e] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Geser ke kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative px-4 sm:px-6 lg:px-10">
        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES_DATA.map((cat) => (
            <Link
              key={cat.slug}
              href={`/katalog?kategori=${cat.slug}`}
              className="snap-start shrink-0 group w-[200px] sm:w-[240px] lg:w-[260px] text-[#1a211e] cursor-pointer"
            >
              <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] rounded-lg overflow-hidden bg-[#eef1f0]">
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold leading-tight tracking-tight group-hover:text-[#8a6500] transition-colors">
                {cat.name}
              </h3>
              <span className="mt-1 block text-sm font-medium text-[#606562]">Lihat produk</span>
            </Link>
          ))}
        </div>

        {/* Mobile Arrow Buttons */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-11 h-11 rounded-full border border-[#cccfcd] flex items-center justify-center text-[#1a211e] hover:bg-[#1a211e] hover:text-white hover:border-[#1a211e] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Geser ke kiri"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-11 h-11 rounded-full border border-[#cccfcd] flex items-center justify-center text-[#1a211e] hover:bg-[#1a211e] hover:text-white hover:border-[#1a211e] transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Geser ke kanan"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
