'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MessageCircle, ArrowRight, X, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, Product, ProductVariant } from '@/data/products';
import { catalogCategoryForSlug, CATEGORIES_DATA } from '@/data/categories';
import { salesWhatsApp } from '@/data/contact';

const CATEGORIES = ['Semua', ...CATEGORIES_DATA.map(c => c.name)];
const HOMEPAGE_PAGE_SIZE = 8;
const ITEMS_PER_PAGE = 20;

type ProductCatalogProps = {
  isFullPage?: boolean;
  initialCategorySlug?: string;
};

export default function ProductCatalog({ isFullPage = false, initialCategorySlug }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState(() => catalogCategoryForSlug(initialCategorySlug));
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [customNote, setCustomNote] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const Heading = isFullPage ? 'h1' : 'h2';

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedProduct && !dialog.open) dialog.showModal();
    if (!selectedProduct && dialog.open) dialog.close();
  }, [selectedProduct]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = activeCategory === 'Semua' || p.category === activeCategory;
      const q = query.toLowerCase();
      const matchQuery = !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.variants.some(v => v.sku.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [activeCategory, query]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const filterCategories = CATEGORIES.includes(activeCategory) ? CATEGORIES : [activeCategory, ...CATEGORIES];

  const activePage = Math.min(currentPage, Math.max(1, totalPages));

  const visibleProducts = useMemo(() => {
    if (isFullPage) {
      return filtered.slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE);
    }
    return filtered.slice(0, HOMEPAGE_PAGE_SIZE);
  }, [isFullPage, filtered, activePage]);

  const getWaLink = (product: Product, variant?: ProductVariant | null, note?: string) => {
    const variantInfo = variant
      ? `\n• Variant: ${variant.label} (${variant.sku})\n• Harga: Rp${variant.price.toLocaleString('id-ID')}/${variant.unit}`
      : product.variants.length > 1
        ? `\n• Variant: (pilih dari ${product.variants.length} opsi)`
        : '';
    let text = `Halo Admin Sales Putra Logam Kencana,\nSaya bermaksud menanyakan produk berikut:\n\n• Produk: ${product.name}\n• Kategori: ${product.category}${product.brand ? `\n• Brand: ${product.brand}` : ''}${variantInfo}\n• Est. Harga: ${product.priceLabel}`;
    if (note && note.trim()) {
      text += `\n\nCatatan Khusus / Kuantitas: ${note.trim()}`;
    }
    text += `\n\nMohon konfirmasi ketersediaan stok & penawaran harganya. Terima kasih!`;
    return salesWhatsApp(text);
  };

  return (
    <section id="katalog" className="bg-[#ffffff] py-20 px-6 border-b border-[#e0e0e0]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-left mb-10">
          <span className="text-base font-bold text-[#606562] tracking-wider uppercase block mb-1">
            DAFTAR STOK &amp; KATALOG BARANG
          </span>
          <Heading className="text-3xl sm:text-4xl font-bold text-[#1a211e] tracking-tight">
            {isFullPage ? 'Katalog Perkakas & Material' : 'Katalog Perkakas & Material Bangunan'}
          </Heading>
          <p className="text-[#606562] text-base font-medium mt-2 max-w-lg">
            {isFullPage
              ? `Menampilkan ${PRODUCTS.length} produk. Foto adalah ilustrasi; harga dan ketersediaan dikonfirmasi oleh sales.`
              : `Pilih produk, lalu tanyakan stok dan harga melalui WhatsApp. Foto yang ditampilkan adalah ilustrasi.`}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#606562]" />
          <input
            type="text"
            aria-label="Cari nama produk, brand, atau SKU"
            placeholder="Cari nama produk, brand, atau SKU..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-[#eef1f0] border border-[#cccfcd] focus:border-[#1a211e] rounded-md py-2 pl-10 pr-4 text-base text-[#1a211e] placeholder:text-[#606562] outline-none transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              type="button"
              aria-pressed={activeCategory === cat}
              className={`min-h-11 px-4 py-2 rounded-full text-base font-semibold transition-colors duration-200 cursor-pointer ${activeCategory === cat
                  ? 'bg-[#1a211e] text-white'
                  : 'bg-transparent text-[#363537] border border-[#cccfcd] hover:border-[#1a211e] hover:text-[#1a211e]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onInquire={(p) => { setCustomNote(''); setSelectedVariant(null); setSelectedProduct(p); }}
              getWaLink={getWaLink}
            />
          ))}
        </div>

        {/* Pagination */}
        {!isFullPage ? (
          <div className="text-center mt-12">
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 bg-[#1a211e] hover:bg-black text-white font-semibold text-base py-3 px-6 rounded-md transition-all group cursor-pointer"
            >
              <span>Buka Katalog Lengkap ({PRODUCTS.length} produk)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ) : (
          totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={activePage === 1}
                aria-label="Halaman sebelumnya"
                className="w-11 h-11 rounded-md border border-[#cccfcd] hover:border-[#1a211e] hover:bg-[#eef1f0] flex items-center justify-center text-[#1a211e] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: Math.min(totalPages, 10) }).map((_, idx) => {
                let pageNum: number;
                if (totalPages <= 10) {
                  pageNum = idx + 1;
                } else if (activePage <= 5) {
                  pageNum = idx + 1;
                } else if (activePage >= totalPages - 4) {
                  pageNum = totalPages - 9 + idx;
                } else {
                  pageNum = activePage - 4 + idx;
                }
                const isSelected = activePage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    aria-label={`Halaman ${pageNum}`}
                    aria-current={isSelected ? 'page' : undefined}
                    className={`w-11 h-11 rounded-md text-base font-bold transition-colors cursor-pointer ${isSelected
                        ? 'bg-[#1a211e] text-white border border-[#1a211e]'
                        : 'bg-transparent border border-[#cccfcd] text-[#363537] hover:border-[#1a211e] hover:bg-[#eef1f0]'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={activePage === totalPages}
                aria-label="Halaman berikutnya"
                className="w-11 h-11 rounded-md border border-[#cccfcd] hover:border-[#1a211e] hover:bg-[#eef1f0] flex items-center justify-center text-[#1a211e] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )
        )}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base text-[#606562]">
              {query ? `Produk "${query}" tidak ditemukan.` : `Produk kategori ${activeCategory} belum tercantum di katalog.`}
            </p>
            <button
              type="button"
              onClick={() => { setQuery(''); setActiveCategory('Semua'); }}
              className="mt-4 min-h-11 px-5 rounded-[4px] border border-[#1a211e] text-[#1a211e] font-semibold"
            >
              Tampilkan semua produk
            </button>
            <a
              href={salesWhatsApp('Halo Putra Logam Kencana, saya ingin bertanya mengenai ketersediaan stok dan harga produk.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 ml-3 inline-flex min-h-11 items-center px-5 rounded-[4px] bg-[#1a211e] text-white font-semibold"
            >
              Tanya sales
            </a>
          </div>
        )}
      </div>

      {/* Inquiry Dialog */}
      <dialog
        ref={dialogRef}
        aria-labelledby="product-inquiry-title"
        onClose={() => { setSelectedProduct(null); setSelectedVariant(null); setCustomNote(''); }}
        className="m-auto max-w-md w-[calc(100%-2rem)] bg-white border border-[#e0e0e0] rounded-lg p-5 shadow-xl backdrop:bg-[#1a211e]/80"
      >
        {selectedProduct && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-2 -right-2 text-[#606562] hover:text-[#1a211e] w-11 h-11 flex items-center justify-center cursor-pointer"
              aria-label="Tutup pertanyaan produk"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-3">
              <span className="text-sm font-bold text-[#8a6500] tracking-wide uppercase block">TANYA STOK &amp; HARGA</span>
              <h3 id="product-inquiry-title" className="text-lg font-bold text-[#1a211e] mt-1 pr-10">{selectedProduct.name}</h3>
              {selectedProduct.brand && (
                <p className="text-sm text-[#606562]">Brand: {selectedProduct.brand}</p>
              )}
            </div>

            {/* Variant Selector */}
            {selectedProduct.variants.length > 1 && (
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1a211e] mb-1.5">Pilih Variant:</label>
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                  {selectedProduct.variants.map((v) => (
                    <button
                      key={v.sku}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        (selectedVariant?.sku === v.sku)
                          ? 'bg-[#1a211e] text-white'
                          : 'bg-[#eef1f0] text-[#363537] border border-[#cccfcd] hover:border-[#1a2111e]'
                      }`}
                    >
                      {v.label} — Rp{v.price.toLocaleString('id-ID')}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="product-note" className="block text-sm font-semibold text-[#1a211e] mb-1.5">
                Rincian Kuantitas / Catatan Proyek:
              </label>
              <textarea
                id="product-note"
                rows={3}
                placeholder="Contoh: Kebutuhan 100 pcs, pengiriman Jakarta..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full bg-[#eef1f0] border border-[#cccfcd] focus:border-[#1a211e] rounded-md p-2.5 text-base text-[#1a211e] placeholder:text-[#606562] outline-none"
              />
            </div>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="flex-1 min-h-11 bg-transparent border border-[#cccfcd] hover:border-[#1a211e] text-[#606562] font-semibold text-base rounded-md cursor-pointer"
              >
                Batal
              </button>
              <a
                href={getWaLink(selectedProduct, selectedVariant, customNote)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setSelectedProduct(null); setSelectedVariant(null); setCustomNote(''); }}
                className="flex-1 min-h-11 bg-[#1a211e] hover:bg-black text-white font-semibold text-base rounded-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim WA</span>
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

/* ---------- Sub-components ---------- */

function ProductCard({
  product,
  onInquire,
  getWaLink,
}: {
  product: Product;
  onInquire: (p: Product) => void;
  getWaLink: (p: Product, v?: ProductVariant | null, note?: string) => string;
}) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants.length === 1 ? product.variants[0] : null
  );
  const hasVariants = product.variants.length > 1;

  return (
    <div className="bg-[#ffffff] border border-[#e0e0e0] rounded-lg p-4 flex flex-col justify-between hover:border-[#1a211e] hover:shadow-md transition-all duration-200 group">
      <div>
        {/* Image */}
        <div className="relative h-44 w-full bg-[#eef1f0] rounded-md overflow-hidden mb-3 border border-[#e0e0e0]">
          <Image
            src={product.image}
            alt=""
            fill
            unoptimized={product.image.startsWith('https://placehold.co/')}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-[#606562] uppercase tracking-wider">
              {product.category}
            </span>
            {product.brand && (
              <span className="text-xs font-medium text-[#8a6500] bg-[#fdf8e8] px-1.5 py-0.5 rounded">
                {product.brand}
              </span>
            )}
          </div>
          <h3 className="text-sm font-bold text-[#1a211e] mb-1 leading-snug group-hover:text-[#8a6500] transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Variant Selector (inline) */}
          {hasVariants ? (
            <div className="mb-2">
              <p className="text-xs text-[#606562] mb-1">Pilih variant:</p>
              <div className="flex flex-wrap gap-1">
                {product.variants.slice(0, 6).map((v) => (
                  <button
                    key={v.sku}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                      selectedVariant?.sku === v.sku
                        ? 'bg-[#1a211e] text-white'
                        : 'bg-[#eef1f0] text-[#363537] border border-[#cccfcd] hover:border-[#1a211e]'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
                {product.variants.length > 6 && (
                  <span className="px-2 py-1 text-xs text-[#606562]">+{product.variants.length - 6}</span>
                )}
              </div>
            </div>
          ) : null}

          <p className="text-sm font-bold text-[#1a211e] mb-2">
            {selectedVariant
              ? `Rp${selectedVariant.price.toLocaleString('id-ID')}/${selectedVariant.unit}`
              : product.priceLabel}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-1.5 pt-2 border-t border-[#e0e0e0]">
        <a
          href={getWaLink(product, selectedVariant)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full min-h-10 bg-[#1a211e] hover:bg-black text-white font-semibold text-sm px-3 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0 text-white" />
          <span>Chat Sales WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => onInquire(product)}
          className="w-full min-h-10 text-center text-[#606562] hover:text-[#1a211e] font-medium text-sm transition-colors cursor-pointer"
        >
          + Tambah Catatan RAB
        </button>
      </div>
    </div>
  );
}
