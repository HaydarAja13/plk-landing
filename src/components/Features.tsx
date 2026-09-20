import { ListFilter, MessageCircle, Search } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Jelajahi kategori',
    desc: 'Lihat alat tukang, perkakas teknik, dan material yang tercantum di katalog.',
  },
  {
    icon: ListFilter,
    title: 'Cari kebutuhan proyek',
    desc: 'Gunakan pencarian produk atau saring daftar menurut kategori.',
  },
  {
    icon: MessageCircle,
    title: 'Tanya harga dan stok',
    desc: 'Tambahkan rincian kebutuhan, lalu kirim pertanyaan ke sales melalui WhatsApp.',
  },
];

export default function Features() {
  return (
    <section id="tentang" className="bg-[#eef1f0] text-[#1a211e] py-24 sm:py-32 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight max-w-xl">
            Dari katalog ke <span className="text-[#d4af37]">percakapan langsung.</span>
          </h2>
          <p className="mt-6 max-w-md text-base sm:text-lg text-[#606562] leading-relaxed">
            Cari kebutuhan rumah atau proyek Anda, lalu tanyakan ketersediaan dan harga langsung kepada sales.
          </p>
        </div>

        <div className="border-t border-[#cccfcd]">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="grid grid-cols-[44px_1fr] gap-5 py-8 border-b border-[#cccfcd]">
                <Icon className="w-8 h-8 text-[#d4af37]" strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-base text-[#606562] leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
