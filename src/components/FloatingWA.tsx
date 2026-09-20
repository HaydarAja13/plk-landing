import { MessageCircle } from 'lucide-react';
import { salesWhatsApp } from '@/data/contact';

export default function FloatingWA() {
  return (
    <a
      href={salesWhatsApp('Halo Putra Logam Kencana, saya ingin bertanya mengenai ketersediaan stok dan harga produk.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-13 h-13 bg-[#1a211e] hover:bg-black text-white rounded-full border border-[#cccfcd] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Hubungi kami melalui WhatsApp"
    >
      <span className="absolute -top-10 right-0 opacity-0 group-hover:opacity-100 bg-[#1a211e] text-white font-bryant-caps text-base px-3 py-1.5 rounded-[4px] border border-white/20 shadow-md whitespace-nowrap transition-all duration-200 pointer-events-none">
        HUBUNGI SALES WA
      </span>
      <MessageCircle className="w-5 h-5 text-white" />
    </a>
  );
}
