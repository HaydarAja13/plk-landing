export type CategoryItem = {
  slug: string;
  name: string;
  image: string;
};

export const CATEGORIES_DATA: CategoryItem[] = [
  { slug: 'umum', name: 'Umum', image: '/categories/umum.webp' },
  { slug: 'alat-tukang', name: 'Alat tukang', image: '/categories/alat-tukang.webp' },
  { slug: 'alat-teknik', name: 'Alat teknik', image: '/categories/alat-teknik.webp' },
  { slug: 'plastik', name: 'Plastik', image: '/categories/plastik.webp' },
  { slug: 'rumah-tangga', name: 'Rumah tangga', image: '/categories/rumah-tangga.webp' },
  { slug: 'power-tools', name: 'Power tools', image: '/categories/power-tools.webp' },
  { slug: 'listrik', name: 'Listrik', image: '/categories/listrik.webp' },
  { slug: 'sanitary', name: 'Sanitary', image: '/categories/sanitary.webp' },
  { slug: 'mur-baut', name: 'Mur Baut', image: '/categories/mur-baut.webp' },
  { slug: 'cat', name: 'Cat', image: '/categories/cat.webp' },
  { slug: 'kunci-pintu', name: 'Kunci Pintu & Aksesoris Mebel', image: '/categories/kunci-pintu.webp' },
  { slug: 'safety', name: 'Perlengkapan Safety', image: '/categories/safety.webp' },
  { slug: 'minuman', name: 'Minuman', image: '/categories/minuman.webp' },
];

const CATALOG_GROUPS: Record<string, string> = {
  umum: 'Semua',
};

export function catalogCategoryForSlug(slug?: string) {
  return CATALOG_GROUPS[slug ?? '']
    ?? CATEGORIES_DATA.find((category) => category.slug === slug)?.name
    ?? 'Semua';
}
