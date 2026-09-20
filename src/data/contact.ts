export const SALES_PHONE = '6282227007030';

export const salesWhatsApp = (message: string) =>
  `https://wa.me/${SALES_PHONE}?text=${encodeURIComponent(message)}`;
