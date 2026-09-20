'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { salesWhatsApp } from '@/data/contact';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/#tentang', label: 'Tentang Kami' },
  { href: '/#kategori', label: 'Kategori Material' },
  { href: '/katalog', label: 'Katalog' },
];

const waUrl = salesWhatsApp('Halo Admin Putra Logam Kencana, saya ingin bertanya tentang produk dan harga.');

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-50 bg-white border-b border-[#e0e0e0]">
      {/* Announcement Bar */}
      <div className="bg-[#1a211e] text-white py-1.5 px-4 text-base sm:text-lg font-medium text-center">
        <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
          <span className="opacity-95 tracking-wide truncate">
            <span className="sm:hidden">Pusat Alat Teknik &amp; Bangunan di Semarang</span>
            <span className="hidden sm:inline">Pusat Alat Teknik, Tukang, &amp; Bangunan di Semarang</span>
          </span>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-10 h-16 sm:h-[72px]">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/login-logo.png"
            alt="Putra Logam Kencana"
            width={180}
            height={50}
            priority
            className="h-11 sm:h-12 lg:h-14 w-auto object-contain"
          />
        </Link>

        {/* Nav Links - Center */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('#')[0]) && link.href !== '/';
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#1a211e]'
                    : 'text-[#606562] hover:text-[#1a211e]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button + Mobile Hamburger - Right */}
        <div className="col-start-3 flex items-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#1a211e] hover:bg-black text-white font-semibold text-base py-2.5 px-5 rounded-md transition-all duration-200 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md hover:bg-[#eef1f0] transition-colors -mr-1"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#1a211e]" />
            ) : (
              <Menu className="w-5 h-5 text-[#1a211e]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`lg:hidden fixed top-0 right-0 h-full w-[min(82vw,320px)] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e0e0e0]">
            <Image
              src="/login-logo.png"
              alt="PLK"
              width={100}
              height={28}
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-11 h-11 rounded-md hover:bg-[#eef1f0] transition-colors"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5 text-[#1a211e]" />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('#')[0]) && link.href !== '/';
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#eef1f0] text-[#1a211e]'
                        : 'text-[#606562] hover:bg-[#eef1f0] hover:text-[#1a211e]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Drawer CTA */}
          <div className="px-5 py-5 border-t border-[#e0e0e0]">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#1a211e] hover:bg-black text-white font-semibold text-base py-3 px-5 rounded-md transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
