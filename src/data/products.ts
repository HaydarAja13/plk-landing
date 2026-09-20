export type ProductVariant = {
  sku: string;
  label: string;
  price: number;
  unit: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  variants: ProductVariant[];
  basePrice: number;
  priceLabel: string;
};

export const PRODUCTS: Product[] = [
  {
    "id": "1",
    "name": "LAMPU LUBY EYESENTIAL 12W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20EYESENTIAL%2012W",
    "variants": [
      {
        "sku": "MLUBEL01",
        "label": "5W",
        "price": 55000,
        "unit": "PCS"
      },
      {
        "sku": "MLUBEL02",
        "label": "9W",
        "price": 75000,
        "unit": "PCS"
      },
      {
        "sku": "MLUBEL03",
        "label": "12W",
        "price": 85000,
        "unit": "PCS"
      },
      {
        "sku": "MLUBEL04",
        "label": "15W",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000 - Rp100.000"
  },
  {
    "id": "2",
    "name": "ADAPTOR BOR KE GERINDA XENON",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ADAPTOR%20BOR%20KE%20GERINDA%20XE",
    "variants": [
      {
        "sku": "MADGRDX",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "3",
    "name": "ADES 600ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ADES%20600ML",
    "variants": [
      {
        "sku": "ADES600",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "4",
    "name": "AFDUNER BOTOL 600ML",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AFDUNER%20BOTOL%20600ML",
    "variants": [
      {
        "sku": "AFDUB600",
        "label": "BTL",
        "price": 16000,
        "unit": "BTL"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "5",
    "name": "AFUR BCP PVC",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AFUR%20BCP%20PVC",
    "variants": [
      {
        "sku": "MNOAFU02",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "6",
    "name": "AFUR BCP STAINLESS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AFUR%20BCP%20STAINLESS",
    "variants": [
      {
        "sku": "MNOAFU01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "7",
    "name": "AIR BLOW GUN TEKIRO 5”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AIR%20BLOW%20GUN%20TEKIRO%205%E2%80%9D",
    "variants": [
      {
        "sku": "MTEAIR02",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "8",
    "name": "AIR CHUCK TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AIR%20CHUCK%20TEKIRO",
    "variants": [
      {
        "sku": "MTEAIR01",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "9",
    "name": "AIR DUSTER HASSTON 1+3 0160-130",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AIR%20DUSTER%20HASSTON%201%2B3%2001",
    "variants": [
      {
        "sku": "MHAAIR01",
        "label": "PCS",
        "price": 52000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52000,
    "priceLabel": "Rp52.000"
  },
  {
    "id": "10",
    "name": "ALAT CABUT PIPA PATAH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20CABUT%20PIPA%20PATAH%20HAS",
    "variants": [
      {
        "sku": "MHAALA01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "11",
    "name": "ALAT PENGISI ANGIN BAN 3 IN 1 HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20PENGISI%20ANGIN%20BAN%203%20",
    "variants": [
      {
        "sku": "MHAALA02",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "12",
    "name": "ALAT POTONG GRANIT 600MM HIOSHI",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20POTONG%20GRANIT%20600MM%20",
    "variants": [
      {
        "sku": "APTGHIO",
        "label": "PCS",
        "price": 1300000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1300000,
    "priceLabel": "Rp1.300.000"
  },
  {
    "id": "13",
    "name": "ALAT POTONG GRANIT 600MM MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20POTONG%20GRANIT%20600MM%20",
    "variants": [
      {
        "sku": "MMOALA02",
        "label": "PCS",
        "price": 1050000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1050000,
    "priceLabel": "Rp1.050.000"
  },
  {
    "id": "14",
    "name": "ALAT POTONG KACA CAMEL",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20POTONG%20KACA%20CAMEL",
    "variants": [
      {
        "sku": "MCAALA01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "15",
    "name": "ALAT POTONG KACA TC-59 TOYO",
    "category": "Umum",
    "brand": "TOYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20POTONG%20KACA%20TC-59%20TO",
    "variants": [
      {
        "sku": "PTKC TC59",
        "label": "PCS",
        "price": 11400,
        "unit": "PCS"
      }
    ],
    "basePrice": 11400,
    "priceLabel": "Rp11.400"
  },
  {
    "id": "16",
    "name": "ALAT POTONG PIPA PVC STRAUSS",
    "category": "Umum",
    "brand": "STRAUSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20POTONG%20PIPA%20PVC%20STRA",
    "variants": [
      {
        "sku": "PTPP STRS",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "17",
    "name": "ALAT TAMBAL BAN BISON GG PLASTIK",
    "category": "Umum",
    "brand": "BISON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20TAMBAL%20BAN%20BISON%20GG%20",
    "variants": [
      {
        "sku": "MBIALA01",
        "label": "PCS",
        "price": 19000,
        "unit": "PCS"
      }
    ],
    "basePrice": 19000,
    "priceLabel": "Rp19.000"
  },
  {
    "id": "18",
    "name": "ALAT TAMBAL BAN TEKIRO GG BESI",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20TAMBAL%20BAN%20TEKIRO%20GG",
    "variants": [
      {
        "sku": "MTKRTMBBS",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "19",
    "name": "ALAT TEMBAK LEM TEBAL STRAUSS / FREED",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20TEMBAK%20LEM%20TEBAL%20STR",
    "variants": [
      {
        "sku": "TMBK LEM",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "20",
    "name": "ALAT TEMBAK LEM TULANG",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20TEMBAK%20LEM%20TULANG",
    "variants": [
      {
        "sku": "MALTMBKT",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "21",
    "name": "ALAT UKUR CELAH MOLLAR",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ALAT%20UKUR%20CELAH%20MOLLAR",
    "variants": [
      {
        "sku": "MMOALA01",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "22",
    "name": "AMPLAS BULAT 100 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20100%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP03-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "23",
    "name": "AMPLAS BULAT 120 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20120%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP04-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "24",
    "name": "AMPLAS BULAT 120 SAB",
    "category": "Umum",
    "brand": "SAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20120%20SAB",
    "variants": [
      {
        "sku": "AMP BLT 120",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "25",
    "name": "AMPLAS BULAT 150 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20150%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP05-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "26",
    "name": "AMPLAS BULAT 150 SAB",
    "category": "Umum",
    "brand": "SAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20150%20SAB",
    "variants": [
      {
        "sku": "AMP BLT 150",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "27",
    "name": "AMPLAS BULAT 180 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20180%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP06-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "28",
    "name": "AMPLAS BULAT 240 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20240%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP07-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "29",
    "name": "AMPLAS BULAT 400 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20400%20(10%20PCS)",
    "variants": [
      {
        "sku": "AMP BLT 400-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "30",
    "name": "AMPLAS BULAT 400 SAB",
    "category": "Umum",
    "brand": "SAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%20400%20SAB",
    "variants": [
      {
        "sku": "AMP BLT 400",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "31",
    "name": "AMPLAS BULAT 60 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%2060%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP01-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "32",
    "name": "AMPLAS BULAT 60 SAB",
    "category": "Umum",
    "brand": "SAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%2060%20SAB",
    "variants": [
      {
        "sku": "AMP BLT 60",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "33",
    "name": "AMPLAS BULAT 80 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%2080%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOAMP02-PAKET",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "34",
    "name": "AMPLAS BULAT 80 SAB-XX",
    "category": "Umum",
    "brand": "SAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%2080%20SAB-XX",
    "variants": [
      {
        "sku": "AMP BLT 80",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "35",
    "name": "AMPLAS BULAT 80 VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20BULAT%2080%20VPR",
    "variants": [
      {
        "sku": "AMP BLT 80 VPR",
        "label": "PCS",
        "price": 265,
        "unit": "PCS"
      }
    ],
    "basePrice": 265,
    "priceLabel": "Rp265"
  },
  {
    "id": "36",
    "name": "AMPLAS DUCO IGM 150",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20DUCO%20IGM%20150",
    "variants": [
      {
        "sku": "AMP DC IGM150",
        "label": "150",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DC IGM400",
        "label": "400",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DC IGM600",
        "label": "600",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DC IGM1500",
        "label": "1500",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DC IGM2000",
        "label": "2000",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "37",
    "name": "AMPLAS DUCO TAIYO 1000",
    "category": "Umum",
    "brand": "TAIYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20DUCO%20TAIYO%201000",
    "variants": [
      {
        "sku": "AMP DCTY 60",
        "label": "60",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMPDCT80",
        "label": "80",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMPDU120",
        "label": "120",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMPDT150",
        "label": "150",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DCTY 240",
        "label": "240",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DCTY 280",
        "label": "280",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DCTY 400",
        "label": "400",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DCTY 1000",
        "label": "1000",
        "price": 3000,
        "unit": "PCS"
      },
      {
        "sku": "AMP DCTY 2000",
        "label": "2000",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "38",
    "name": "AMPLAS DUCO TAIYO 180 METERAN",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20DUCO%20TAIYO%20180%20MET",
    "variants": [
      {
        "sku": "AMPDT180",
        "label": "MTR",
        "price": 9000,
        "unit": "MTR"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "39",
    "name": "AMPLAS ROLL 120 GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20ROLL%20120%20GOMEO",
    "variants": [
      {
        "sku": "AMP RL 120 GM",
        "label": "MTR",
        "price": 6500,
        "unit": "MTR"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "40",
    "name": "AMPLAS ROLL 60 GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20ROLL%2060%20GOMEO",
    "variants": [
      {
        "sku": "AMP RL 60 GM",
        "label": "MTR",
        "price": 6500,
        "unit": "MTR"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "41",
    "name": "AMPLAS ROLL KODAI 120",
    "category": "Umum",
    "brand": "KODAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20ROLL%20KODAI%20120",
    "variants": [
      {
        "sku": "AMP RLKD 80",
        "label": "80",
        "price": 6500,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLKD 120",
        "label": "120",
        "price": 6500,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLKD 150",
        "label": "150",
        "price": 6500,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLKD 240",
        "label": "240",
        "price": 6500,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLKD 400",
        "label": "400",
        "price": 6500,
        "unit": "MTR"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "42",
    "name": "AMPLAS ROLL TAIYO 100",
    "category": "Umum",
    "brand": "TAIYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AMPLAS%20ROLL%20TAIYO%20100",
    "variants": [
      {
        "sku": "MTAAMP02",
        "label": "60",
        "price": 9000,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLTY 100",
        "label": "100",
        "price": 9000,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLTY 120",
        "label": "120",
        "price": 9000,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLTY 150",
        "label": "150",
        "price": 9000,
        "unit": "MTR"
      },
      {
        "sku": "AMP RLTY 180",
        "label": "180",
        "price": 9000,
        "unit": "MTR"
      },
      {
        "sku": "MTAAMP03",
        "label": "240",
        "price": 9000,
        "unit": "MTR"
      },
      {
        "sku": "MTAAMP01",
        "label": "320",
        "price": 9000,
        "unit": "ROL"
      },
      {
        "sku": "AMP RLTY 400",
        "label": "400",
        "price": 9000,
        "unit": "MTR"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "43",
    "name": "ANGKER MODERN M-2300B/SIM-100B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ANGKER%20MODERN%20M-2300B%2FSIM",
    "variants": [
      {
        "sku": "MMOARM05",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "44",
    "name": "ANGKER MT 60",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ANGKER%20MT%2060",
    "variants": [
      {
        "sku": "MNOANG01",
        "label": "60",
        "price": 195000,
        "unit": "PCS"
      },
      {
        "sku": "MNOANG02",
        "label": "90",
        "price": 195000,
        "unit": "PCS"
      }
    ],
    "basePrice": 195000,
    "priceLabel": "Rp195.000"
  },
  {
    "id": "45",
    "name": "ARMATURE BOR MODERN M-2100B/C/JIZ-10B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20BOR%20MODERN%20M-210",
    "variants": [
      {
        "sku": "MMOARM01",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "46",
    "name": "ARMATURE BOR MODERN M-2130B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20BOR%20MODERN%20M-213",
    "variants": [
      {
        "sku": "MMOARM02",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "47",
    "name": "ARMATURE BOR MODERN M-2150",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20BOR%20MODERN%20M-215",
    "variants": [
      {
        "sku": "MMOARM03",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "48",
    "name": "ARMATURE CIRCULAR SAW MODERN M-2600L",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20CIRCULAR%20SAW%20MOD",
    "variants": [
      {
        "sku": "MMOARM04",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "49",
    "name": "ARMATURE GERINDA MODERN M-2350B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20GERINDA%20MODERN%20M",
    "variants": [
      {
        "sku": "MMOARM06",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "50",
    "name": "ARMATURE PLANER MODERN M-2900",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20PLANER%20MODERN%20M-",
    "variants": [
      {
        "sku": "MMOARM07",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "51",
    "name": "ARMATURE TRIMMER MODERN M-2700",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20TRIMMER%20MODERN%20M",
    "variants": [
      {
        "sku": "MMOARM08",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "52",
    "name": "ARMATURE TRIMMER MODERN M-2750",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ARMATURE%20TRIMMER%20MODERN%20M",
    "variants": [
      {
        "sku": "MMOARM09",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "53",
    "name": "AS GEROBAK PASIR",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AS%20GEROBAK%20PASIR",
    "variants": [
      {
        "sku": "MASGRBKP",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "54",
    "name": "ASPAL CAIR 1 KG YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ASPAL%20CAIR%201%20KG%20YUSTAR",
    "variants": [
      {
        "sku": "MYUASP01",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "55",
    "name": "AUGER BITS HIOSHI 3/4",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGER%20BITS%20HIOSHI%203%2F4",
    "variants": [
      {
        "sku": "AGBTHI34",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "56",
    "name": "AUGERBITS 1/2\" (13 MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGERBITS%201%2F2%22%20(13%20MM)%20HI",
    "variants": [
      {
        "sku": "AGR BT1/2",
        "label": "PCS",
        "price": 12825,
        "unit": "PCS"
      }
    ],
    "basePrice": 12825,
    "priceLabel": "Rp12.825"
  },
  {
    "id": "57",
    "name": "AUGERBITS 1/4\" (6MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGERBITS%201%2F4%22%20(6MM)%20HIOS",
    "variants": [
      {
        "sku": "AGR BT1/4",
        "label": "PCS",
        "price": 7671.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 7671.25,
    "priceLabel": "Rp7.671,25"
  },
  {
    "id": "58",
    "name": "AUGERBITS 3/4\" (19MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGERBITS%203%2F4%22%20(19MM)%20HIO",
    "variants": [
      {
        "sku": "AGR BT3/4",
        "label": "PCS",
        "price": 20757.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 20757.5,
    "priceLabel": "Rp20.757,5"
  },
  {
    "id": "59",
    "name": "AUGERBITS 3/8\" (10MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGERBITS%203%2F8%22%20(10MM)%20HIO",
    "variants": [
      {
        "sku": "AGR BT3/8",
        "label": "PCS",
        "price": 9262.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 9262.5,
    "priceLabel": "Rp9.262,5"
  },
  {
    "id": "60",
    "name": "AUGERBITS 5/16 (8MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGERBITS%205%2F16%20(8MM)%20HIOS",
    "variants": [
      {
        "sku": "AGR BT5/16",
        "label": "PCS",
        "price": 8193.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 8193.75,
    "priceLabel": "Rp8.193,75"
  },
  {
    "id": "61",
    "name": "AUGERBITS 5/8\" (16MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUGERBITS%205%2F8%22%20(16MM)%20HIO",
    "variants": [
      {
        "sku": "AGR BT5/8",
        "label": "PCS",
        "price": 16743.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 16743.75,
    "priceLabel": "Rp16.743,75"
  },
  {
    "id": "62",
    "name": "AUTOSOL 50 GR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AUTOSOL%2050%20GR",
    "variants": [
      {
        "sku": "MNOAUT01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "63",
    "name": "AVITEX GOLD 700 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AVITEX%20GOLD%20700%201%20KG",
    "variants": [
      {
        "sku": "AVIG7001",
        "label": "1 KG",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "AVIG7005",
        "label": "5 KG",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 64000,
    "priceLabel": "Rp64.000 - Rp200.000"
  },
  {
    "id": "64",
    "name": "AVITEX GOLD 712 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AVITEX%20GOLD%20712%201%20KG",
    "variants": [
      {
        "sku": "AVIG7121",
        "label": "1 KG",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "AVGL7125",
        "label": "5 KG",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 64000,
    "priceLabel": "Rp64.000 - Rp200.000"
  },
  {
    "id": "65",
    "name": "AVITEX GOLD 735 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AVITEX%20GOLD%20735%201%20KG",
    "variants": [
      {
        "sku": "AVGL7351",
        "label": "1 KG",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "AVIG7355",
        "label": "5 KG",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 64000,
    "priceLabel": "Rp64.000 - Rp200.000"
  },
  {
    "id": "66",
    "name": "AVITEX GOLD 771 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AVITEX%20GOLD%20771%201%20KG",
    "variants": [
      {
        "sku": "AVIG7711",
        "label": "1 KG",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "AVIG7715",
        "label": "5 KG",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 64000,
    "priceLabel": "Rp64.000 - Rp200.000"
  },
  {
    "id": "67",
    "name": "AVITEX GOLD 916 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AVITEX%20GOLD%20916%201%20KG",
    "variants": [
      {
        "sku": "AVIG9161",
        "label": "1 KG",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "AVIG9165",
        "label": "5 KG",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 64000,
    "priceLabel": "Rp64.000 - Rp200.000"
  },
  {
    "id": "68",
    "name": "AVITEX GOLD SW 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=AVITEX%20GOLD%20SW%201%20KG",
    "variants": [
      {
        "sku": "AVIGSW1",
        "label": "1 KG",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "AVIGSW5",
        "label": "5 KG",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 64000,
    "priceLabel": "Rp64.000 - Rp200.000"
  },
  {
    "id": "69",
    "name": "BAK CAT HITAM SUPER AWS",
    "category": "Umum",
    "brand": "AWS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20CAT%20HITAM%20SUPER%20AWS",
    "variants": [
      {
        "sku": "BAKCAT AWS HTM",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "70",
    "name": "BAK CAT NEW STAR MERAH",
    "category": "Umum",
    "brand": "REYNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20CAT%20NEW%20STAR%20MERAH",
    "variants": [
      {
        "sku": "BAKCAT RYR",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "71",
    "name": "BAK CAT PVC BIASA",
    "category": "Umum",
    "brand": "ELEGANT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20CAT%20PVC%20BIASA",
    "variants": [
      {
        "sku": "BAKCAT ELGN",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "72",
    "name": "BAK CUCI PIRING ROYAL SB 35",
    "category": "Sanitary",
    "brand": "ROYAL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20CUCI%20PIRING%20ROYAL%20SB%20",
    "variants": [
      {
        "sku": "WB SB35",
        "label": "PCS",
        "price": 230000,
        "unit": "PCS"
      }
    ],
    "basePrice": 230000,
    "priceLabel": "Rp230.000"
  },
  {
    "id": "73",
    "name": "BAK CUCI PIRING ROYAL SB 42S",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20CUCI%20PIRING%20ROYAL%20SB%20",
    "variants": [
      {
        "sku": "MROBCP02",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "74",
    "name": "BAK USA 21 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2021%20HYPER",
    "variants": [
      {
        "sku": "MNOBAK03",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "75",
    "name": "BAK USA 21 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2021%20PREM",
    "variants": [
      {
        "sku": "MNOBAK02",
        "label": "PCS",
        "price": 34000,
        "unit": "PCS"
      }
    ],
    "basePrice": 34000,
    "priceLabel": "Rp34.000"
  },
  {
    "id": "76",
    "name": "BAK USA 21 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2021%20SILVER",
    "variants": [
      {
        "sku": "MNOBAK01",
        "label": "PCS",
        "price": 26900,
        "unit": "PCS"
      }
    ],
    "basePrice": 26900,
    "priceLabel": "Rp26.900"
  },
  {
    "id": "77",
    "name": "BAK USA 24 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2024%20HYPER",
    "variants": [
      {
        "sku": "MNOBAK06",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "78",
    "name": "BAK USA 24 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2024%20PREM",
    "variants": [
      {
        "sku": "MNOBAK05",
        "label": "PCS",
        "price": 51000,
        "unit": "PCS"
      }
    ],
    "basePrice": 51000,
    "priceLabel": "Rp51.000"
  },
  {
    "id": "79",
    "name": "BAK USA 24 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2024%20SILVER",
    "variants": [
      {
        "sku": "MNOBAK04",
        "label": "PCS",
        "price": 38600,
        "unit": "PCS"
      }
    ],
    "basePrice": 38600,
    "priceLabel": "Rp38.600"
  },
  {
    "id": "80",
    "name": "BAK USA 27 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2027%20HYPER",
    "variants": [
      {
        "sku": "MNOBAK09",
        "label": "PCS",
        "price": 88000,
        "unit": "PCS"
      }
    ],
    "basePrice": 88000,
    "priceLabel": "Rp88.000"
  },
  {
    "id": "81",
    "name": "BAK USA 27 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2027%20PREM",
    "variants": [
      {
        "sku": "MNOBAK08",
        "label": "PCS",
        "price": 72000,
        "unit": "PCS"
      }
    ],
    "basePrice": 72000,
    "priceLabel": "Rp72.000"
  },
  {
    "id": "82",
    "name": "BAK USA 27 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAK%20USA%2027%20SILVER",
    "variants": [
      {
        "sku": "MNOBAK07",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "83",
    "name": "BALL VALVE GG BESI 3/4 BLITZ",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20GG%20BESI%203%2F4%20BL",
    "variants": [
      {
        "sku": "BVBSBLZ2",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "84",
    "name": "BALL VALVE GG BESI GLX 1/2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20GG%20BESI%20GLX%201%2F",
    "variants": [
      {
        "sku": "BVBSGLX1",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "85",
    "name": "BALL VALVE GG BESI HPP 1\"",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20GG%20BESI%20HPP%201%22",
    "variants": [
      {
        "sku": "BVBSHPP3",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "86",
    "name": "BALL VALVE GG BESI HPP 1/2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20GG%20BESI%20HPP%201%2F",
    "variants": [
      {
        "sku": "BVBSHPP1",
        "label": "1/2",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "BVBSHPP2",
        "label": "3/4",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000 - Rp15.000"
  },
  {
    "id": "87",
    "name": "BALL VALVE PRO 1/2' (FULL KUNINGAN)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PRO%201%2F2'%20(FULL",
    "variants": [
      {
        "sku": "BV PRO1/2",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "88",
    "name": "BALL VALVE PRO 3/4' (FULL KUNINGAN)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PRO%203%2F4'%20(FULL",
    "variants": [
      {
        "sku": "BV PRO3/4",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "89",
    "name": "BALL VALVE PVC GRT 1\"",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20GRT%201%22",
    "variants": [
      {
        "sku": "BVPVGRT3",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "90",
    "name": "BALL VALVE PVC GRT 1/2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20GRT%201%2F2",
    "variants": [
      {
        "sku": "BVPVGRT1",
        "label": "1/2",
        "price": 11000,
        "unit": "PCS"
      },
      {
        "sku": "BVPVGRT2",
        "label": "3/4",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000 - Rp13.000"
  },
  {
    "id": "91",
    "name": "BALL VALVE PVC HD 1\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20HD%201%22%20HIOS",
    "variants": [
      {
        "sku": "BV PVC 1 HS",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "92",
    "name": "BALL VALVE PVC HD 1/2\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20HD%201%2F2%22%20HI",
    "variants": [
      {
        "sku": "BV PVC 1/2 HS",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "93",
    "name": "BALL VALVE PVC HPP 1/2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20HPP%201%2F2",
    "variants": [
      {
        "sku": "MBVPVCH1",
        "label": "1/2",
        "price": 8000,
        "unit": "PCS"
      },
      {
        "sku": "MBVPVCH2",
        "label": "3/4",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000 - Rp9.000"
  },
  {
    "id": "94",
    "name": "BALL VALVE PVC ONDA 1 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20ONDA%201%201%2F2",
    "variants": [
      {
        "sku": "VLPPVPVC48OND",
        "label": "PCS",
        "price": 103500,
        "unit": "PCS"
      }
    ],
    "basePrice": 103500,
    "priceLabel": "Rp103.500"
  },
  {
    "id": "95",
    "name": "BALL VALVE PVC ONDA 1 1/4\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20ONDA%201%201%2F4",
    "variants": [
      {
        "sku": "VLPPVPVC42OND",
        "label": "PCS",
        "price": 57500,
        "unit": "PCS"
      }
    ],
    "basePrice": 57500,
    "priceLabel": "Rp57.500"
  },
  {
    "id": "96",
    "name": "BALL VALVE PVC ONDA 1\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20ONDA%201%22",
    "variants": [
      {
        "sku": "VLPPVPVC32OND",
        "label": "PCS",
        "price": 38500,
        "unit": "PCS"
      }
    ],
    "basePrice": 38500,
    "priceLabel": "Rp38.500"
  },
  {
    "id": "97",
    "name": "BALL VALVE PVC ONDA 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20ONDA%201%2F2%22",
    "variants": [
      {
        "sku": "VLPPVPV22OND",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "98",
    "name": "BALL VALVE PVC ONDA 2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20ONDA%202%22",
    "variants": [
      {
        "sku": "VLPPVPVC60OND",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "99",
    "name": "BALL VALVE PVC ONDA 3/4\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BALL%20VALVE%20PVC%20ONDA%203%2F4%22",
    "variants": [
      {
        "sku": "VLPPVPPVC26OND",
        "label": "PCS",
        "price": 33000,
        "unit": "PCS"
      }
    ],
    "basePrice": 33000,
    "priceLabel": "Rp33.000"
  },
  {
    "id": "100",
    "name": "BAN DALAM ARTCO",
    "category": "Umum",
    "brand": "ARTCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAN%20DALAM%20ARTCO",
    "variants": [
      {
        "sku": "BAN DLM ARCO",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "101",
    "name": "BAN KOMPLIT HIDUP ARTCO",
    "category": "Umum",
    "brand": "ARTCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAN%20KOMPLIT%20HIDUP%20ARTCO",
    "variants": [
      {
        "sku": "BHARCO",
        "label": "PCS",
        "price": 175000,
        "unit": "PCS"
      }
    ],
    "basePrice": 175000,
    "priceLabel": "Rp175.000"
  },
  {
    "id": "102",
    "name": "BAN LUAR ARTCO MERAH",
    "category": "Umum",
    "brand": "ARTCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAN%20LUAR%20ARTCO%20MERAH",
    "variants": [
      {
        "sku": "BLARCO NI",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "103",
    "name": "BATERAI CORDLESS 18V XENON",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATERAI%20CORDLESS%2018V%20XENO",
    "variants": [
      {
        "sku": "BATCOR18",
        "label": "PCS",
        "price": 170000,
        "unit": "PCS"
      }
    ],
    "basePrice": 170000,
    "priceLabel": "Rp170.000"
  },
  {
    "id": "104",
    "name": "BATU ASAH AWS 6\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20AWS%206%22",
    "variants": [
      {
        "sku": "MBATASHAWSK",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "105",
    "name": "BATU ASAH AWS 8\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20AWS%208%22",
    "variants": [
      {
        "sku": "MBATASHAWSB",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "106",
    "name": "BATU ASAH DAYAK 6 ABU",
    "category": "Umum",
    "brand": "DAYAK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20DAYAK%206%20ABU",
    "variants": [
      {
        "sku": "BTAS DYK 6",
        "label": "PCS",
        "price": 8750,
        "unit": "PCS"
      }
    ],
    "basePrice": 8750,
    "priceLabel": "Rp8.750"
  },
  {
    "id": "107",
    "name": "BATU ASAH DAYAK 8 ABU",
    "category": "Umum",
    "brand": "DAYAK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20DAYAK%208%20ABU",
    "variants": [
      {
        "sku": "BTAS DYK 8",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "108",
    "name": "BATU ASAH DIAMOND 6\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20DIAMOND%206%22",
    "variants": [
      {
        "sku": "MBATASHDMDK",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "109",
    "name": "BATU ASAH DIAMOND 8\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20DIAMOND%208%22",
    "variants": [
      {
        "sku": "MBATASHDMDB",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "110",
    "name": "BATU ASAH FUJISTAR 6'",
    "category": "Alat tukang",
    "brand": "FUJISTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20FUJISTAR%206'",
    "variants": [
      {
        "sku": "MFUBAT01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "111",
    "name": "BATU ASAH FUJISTAR 8'",
    "category": "Alat tukang",
    "brand": "FUJISTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20FUJISTAR%208'",
    "variants": [
      {
        "sku": "MFUBAT02",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "112",
    "name": "BATU ASAH HD 8 ORANYE / HITAM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20HD%208%20ORANYE%20%2F%20H",
    "variants": [
      {
        "sku": "BTAS HD8 HS",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "113",
    "name": "BATU ASAH INAX 6'",
    "category": "Alat tukang",
    "brand": "INAX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20INAX%206'",
    "variants": [
      {
        "sku": "MINBAT01",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "114",
    "name": "BATU ASAH INAX 8'",
    "category": "Alat tukang",
    "brand": "INAX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20INAX%208'",
    "variants": [
      {
        "sku": "MINBAT02",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "115",
    "name": "BATU ASAH TCT HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20TCT%20HIOSHI",
    "variants": [
      {
        "sku": "BTAS TCT",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "116",
    "name": "BATU ASAH YY 6\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20YY%206%22",
    "variants": [
      {
        "sku": "MBATASHYYK",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "117",
    "name": "BATU ASAH YY 8\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ASAH%20YY%208%22",
    "variants": [
      {
        "sku": "MBATASHYYB",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "118",
    "name": "BATU FLEXIBLE GC 60 KINIK",
    "category": "Umum",
    "brand": "KINIK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20FLEXIBLE%20GC%2060%20KINIK",
    "variants": [
      {
        "sku": "MKIBAT04",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "119",
    "name": "BATU GOSOK ABU DMD 8\"",
    "category": "Umum",
    "brand": "DIAMOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ABU%20DMD%208%22",
    "variants": [
      {
        "sku": "BTGS DMD8",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "120",
    "name": "BATU GOSOK ORANGE ABU 6' YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ORANGE%20ABU%206'%20",
    "variants": [
      {
        "sku": "BTGS YS 6",
        "label": "PCS",
        "price": 4275,
        "unit": "PCS"
      }
    ],
    "basePrice": 4275,
    "priceLabel": "Rp4.275"
  },
  {
    "id": "121",
    "name": "BATU GOSOK ORANGE ABU 8' YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ORANGE%20ABU%208'%20",
    "variants": [
      {
        "sku": "BTGS YS 8",
        "label": "PCS",
        "price": 4750,
        "unit": "PCS"
      }
    ],
    "basePrice": 4750,
    "priceLabel": "Rp4.750"
  },
  {
    "id": "122",
    "name": "BATU GOSOK ORANGE AWS 6\"",
    "category": "Umum",
    "brand": "AWS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ORANGE%20AWS%206%22",
    "variants": [
      {
        "sku": "BTGS AWS6",
        "label": "PCS",
        "price": 6400,
        "unit": "PCS"
      }
    ],
    "basePrice": 6400,
    "priceLabel": "Rp6.400"
  },
  {
    "id": "123",
    "name": "BATU GOSOK ORANGE AWS 8\"",
    "category": "Umum",
    "brand": "AWS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ORANGE%20AWS%208%22",
    "variants": [
      {
        "sku": "BTGS AWS8",
        "label": "PCS",
        "price": 6400,
        "unit": "PCS"
      }
    ],
    "basePrice": 6400,
    "priceLabel": "Rp6.400"
  },
  {
    "id": "124",
    "name": "BATU GOSOK ORANGE YY 6\"",
    "category": "Umum",
    "brand": "YY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ORANGE%20YY%206%22",
    "variants": [
      {
        "sku": "BTGS YY6 OR",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "125",
    "name": "BATU GOSOK ORANGE YY 8\"",
    "category": "Umum",
    "brand": "YY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20ORANGE%20YY%208%22",
    "variants": [
      {
        "sku": "BTGS YY8 OR",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "126",
    "name": "BATU GOSOK PREMIUM GRT 8\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20GOSOK%20PREMIUM%20GRT%208%22",
    "variants": [
      {
        "sku": "BTGS GRT8",
        "label": "PCS",
        "price": 21150,
        "unit": "PCS"
      }
    ],
    "basePrice": 21150,
    "priceLabel": "Rp21.150"
  },
  {
    "id": "127",
    "name": "BATU NON WOVEN TAIYO",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20NON%20WOVEN%20TAIYO",
    "variants": [
      {
        "sku": "BATNWOVT",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "128",
    "name": "BATU PERONTOK CAT MOLLAR / TAIYO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20PERONTOK%20CAT%20MOLLAR%20",
    "variants": [
      {
        "sku": "MBTGPAIM",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "129",
    "name": "BATU POTONG / CUTTING BOSCH",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20POTONG%20%2F%20CUTTING%20BOS",
    "variants": [
      {
        "sku": "BTPT BOSCH",
        "label": "PCS",
        "price": 1950.27,
        "unit": "PCS"
      }
    ],
    "basePrice": 1950.27,
    "priceLabel": "Rp1.950,27"
  },
  {
    "id": "130",
    "name": "BATU SLEP KINIK",
    "category": "Umum",
    "brand": "KINIK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20SLEP%20KINIK",
    "variants": [
      {
        "sku": "MKIBAT03",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "131",
    "name": "BATU SLEP KINIK M100X6X16",
    "category": "Umum",
    "brand": "KINIK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20SLEP%20KINIK%20M100X6X16",
    "variants": [
      {
        "sku": "BT KNSL",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "132",
    "name": "BATU SLEP TAIYO",
    "category": "Umum",
    "brand": "TAIYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20SLEP%20TAIYO",
    "variants": [
      {
        "sku": "MTABAT01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "133",
    "name": "BATU ULTRAFLEX WA 60",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BATU%20ULTRAFLEX%20WA%2060",
    "variants": [
      {
        "sku": "MNOBAT02",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "134",
    "name": "BAUT JF M4 X 35",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20JF%20M4%20X%2035",
    "variants": [
      {
        "sku": "MBAUTJF435",
        "label": "PCS",
        "price": 1000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000"
  },
  {
    "id": "135",
    "name": "BAUT JF M5 X 25",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20JF%20M5%20X%2025",
    "variants": [
      {
        "sku": "BAJF525",
        "label": "25",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "BAJF535",
        "label": "35",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "136",
    "name": "BAUT JP M4 X 10 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20JP%20M4%20X%2010%20(50%20PCS)",
    "variants": [
      {
        "sku": "BAUJF410",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "137",
    "name": "BAUT JP M4 X 20",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20JP%20M4%20X%2020",
    "variants": [
      {
        "sku": "BAUJP420",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "138",
    "name": "BAUT JP M5 X 20",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20JP%20M5%20X%2020",
    "variants": [
      {
        "sku": "BAUJP520",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "139",
    "name": "BAUT JP M8 X 15 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20JP%20M8%20X%2015%20(50%20PCS)",
    "variants": [
      {
        "sku": "BAJP815P",
        "label": "BKS",
        "price": 37500,
        "unit": "BKS"
      }
    ],
    "basePrice": 37500,
    "priceLabel": "Rp37.500"
  },
  {
    "id": "140",
    "name": "BAUT LION 10 X 19",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20LION%2010%20X%2019",
    "variants": [
      {
        "sku": "MBTL1019",
        "label": "PCS",
        "price": 250,
        "unit": "PCS"
      }
    ],
    "basePrice": 250,
    "priceLabel": "Rp250"
  },
  {
    "id": "141",
    "name": "BAUT M4JF+ 4x12 (50PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20M4JF%2B%204x12%20(50PCS)",
    "variants": [
      {
        "sku": "MBM44125",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "142",
    "name": "BAUT M4JF+ 4x15 (50PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20M4JF%2B%204x15%20(50PCS)",
    "variants": [
      {
        "sku": "MB4J4155",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "143",
    "name": "BAUT METRIS M10 X 70",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20METRIS%20M10%20X%2070",
    "variants": [
      {
        "sku": "BAUM1070",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "144",
    "name": "BAUT METRIS M12 X 80",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20METRIS%20M12%20X%2080",
    "variants": [
      {
        "sku": "BAUM1280",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "145",
    "name": "BAUT METRIS M4 X 20",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20METRIS%20M4%20X%2020",
    "variants": [
      {
        "sku": "BAUM420",
        "label": "PCS",
        "price": 1500,
        "unit": "PCS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "146",
    "name": "BAUT METRIS M6 X 10",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20METRIS%20M6%20X%2010",
    "variants": [
      {
        "sku": "BAUM610",
        "label": "10",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "BAUM615",
        "label": "15",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "BAUM625",
        "label": "25",
        "price": 1000,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500 - Rp1.000"
  },
  {
    "id": "147",
    "name": "BAUT METRIS M8 X 15",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20METRIS%20M8%20X%2015",
    "variants": [
      {
        "sku": "BAU815",
        "label": "15",
        "price": 1000,
        "unit": "PCS"
      },
      {
        "sku": "BAUM830",
        "label": "30",
        "price": 1000,
        "unit": "PCS"
      },
      {
        "sku": "MBAUM860",
        "label": "60",
        "price": 2000,
        "unit": "PCS"
      },
      {
        "sku": "MBAUM865",
        "label": "65",
        "price": 2500,
        "unit": "PCS"
      },
      {
        "sku": "MBAUM870",
        "label": "70",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000 - Rp3.000"
  },
  {
    "id": "148",
    "name": "BAUT METRIS M8 X 15 (50 PCS)",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20METRIS%20M8%20X%2015%20(50%20P",
    "variants": [
      {
        "sku": "BAUM815P",
        "label": "BKS",
        "price": 37500,
        "unit": "BKS"
      }
    ],
    "basePrice": 37500,
    "priceLabel": "Rp37.500"
  },
  {
    "id": "149",
    "name": "BAUT PAB 8 X 3/4 ( 50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20PAB%208%20X%203%2F4%20(%2050%20PCS",
    "variants": [
      {
        "sku": "MBAUPAB83/4",
        "label": "BKS",
        "price": 15000,
        "unit": "BKS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "150",
    "name": "BAUT ROFING 10 X 16 (50 PCS) LION",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20ROFING%2010%20X%2016%20(50%20P",
    "variants": [
      {
        "sku": "BARO1016",
        "label": "BKS",
        "price": 10000,
        "unit": "BKS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "151",
    "name": "BAUT ROFING 10 X 19 (50 PCS) LION",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BAUT%20ROFING%2010%20X%2019%20(50%20P",
    "variants": [
      {
        "sku": "BARO1019",
        "label": "BKS",
        "price": 15000,
        "unit": "BKS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "152",
    "name": "BCP / WASHBAK 96 X 43 X 0,4",
    "category": "Umum",
    "brand": "OLIQ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%20%2F%20WASHBAK%2096%20X%2043%20X%200",
    "variants": [
      {
        "sku": "BCP96 RRT",
        "label": "PCS",
        "price": 93500,
        "unit": "PCS"
      }
    ],
    "basePrice": 93500,
    "priceLabel": "Rp93.500"
  },
  {
    "id": "153",
    "name": "BCP 50 PILOV + AFUR",
    "category": "Umum",
    "brand": "PILOV",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2050%20PILOV%20%2B%20AFUR",
    "variants": [
      {
        "sku": "BCP50 PLV",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "154",
    "name": "BCP 50 PRESTIL + AFUR",
    "category": "Umum",
    "brand": "PRESTIL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2050%20PRESTIL%20%2B%20AFUR",
    "variants": [
      {
        "sku": "BCP50 PRSTL",
        "label": "PCS",
        "price": 67500,
        "unit": "PCS"
      }
    ],
    "basePrice": 67500,
    "priceLabel": "Rp67.500"
  },
  {
    "id": "155",
    "name": "BCP 50 X 40 RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2050%20X%2040%20RRT",
    "variants": [
      {
        "sku": "BCP50 RRT",
        "label": "PCS",
        "price": 57500,
        "unit": "PCS"
      }
    ],
    "basePrice": 57500,
    "priceLabel": "Rp57.500"
  },
  {
    "id": "156",
    "name": "BCP 75 PRESTIL + AFUR",
    "category": "Umum",
    "brand": "PRESTIL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2075%20PRESTIL%20%2B%20AFUR",
    "variants": [
      {
        "sku": "BCP75 PRSTL",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "157",
    "name": "BCP 75 X 40 RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2075%20X%2040%20RRT",
    "variants": [
      {
        "sku": "BCP75 RRT",
        "label": "PCS",
        "price": 77500,
        "unit": "PCS"
      }
    ],
    "basePrice": 77500,
    "priceLabel": "Rp77.500"
  },
  {
    "id": "158",
    "name": "BCP 96 PILOV + AFUR",
    "category": "Umum",
    "brand": "PILOV",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2096%20PILOV%20%2B%20AFUR",
    "variants": [
      {
        "sku": "BCP96 PLV",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "159",
    "name": "BCP 96 PRESTIL + AFUR",
    "category": "Umum",
    "brand": "PRESTIL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2096%20PRESTIL%20%2B%20AFUR",
    "variants": [
      {
        "sku": "BCP96 PRSTL",
        "label": "PCS",
        "price": 92600,
        "unit": "PCS"
      }
    ],
    "basePrice": 92600,
    "priceLabel": "Rp92.600"
  },
  {
    "id": "160",
    "name": "BCP 96 X 43 RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%2096%20X%2043%20RRT",
    "variants": [
      {
        "sku": "BCP96 RRT SU",
        "label": "PCS",
        "price": 87500,
        "unit": "PCS"
      }
    ],
    "basePrice": 87500,
    "priceLabel": "Rp87.500"
  },
  {
    "id": "161",
    "name": "BCP HM 60 X 45 \"YOZURI\"",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%20HM%2060%20X%2045%20%22YOZURI%22",
    "variants": [
      {
        "sku": "BCP60 YZ",
        "label": "PCS",
        "price": 662055,
        "unit": "PCS"
      }
    ],
    "basePrice": 662055,
    "priceLabel": "Rp662.055"
  },
  {
    "id": "162",
    "name": "BCP HM 75 X 40 \"YOZURI\"",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BCP%20HM%2075%20X%2040%20%22YOZURI%22",
    "variants": [
      {
        "sku": "BCP75 YZ",
        "label": "PCS",
        "price": 715000,
        "unit": "PCS"
      }
    ],
    "basePrice": 715000,
    "priceLabel": "Rp715.000"
  },
  {
    "id": "163",
    "name": "BEARING GEROBAK PASIRTOKIO 20MM",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BEARING%20GEROBAK%20PASIRTOKI",
    "variants": [
      {
        "sku": "BEARING 20MM TK",
        "label": "PCS",
        "price": 3750,
        "unit": "PCS"
      }
    ],
    "basePrice": 3750,
    "priceLabel": "Rp3.750"
  },
  {
    "id": "164",
    "name": "BETEL TOPI 10 RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%2010%20RRT",
    "variants": [
      {
        "sku": "BTTP 10 RRT",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "165",
    "name": "BETEL TOPI 10\" JUMBO BIASA",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%2010%22%20JUMBO%20BIAS",
    "variants": [
      {
        "sku": "BTTP RRT10 TK",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "166",
    "name": "BETEL TOPI 12 RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%2012%20RRT",
    "variants": [
      {
        "sku": "BTTP 12 RRT",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "167",
    "name": "BETEL TOPI 12 X 16 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%2012%20X%2016%20HIOSHI",
    "variants": [
      {
        "sku": "BT12HSH",
        "label": "PCS",
        "price": 20520,
        "unit": "PCS"
      }
    ],
    "basePrice": 20520,
    "priceLabel": "Rp20.520"
  },
  {
    "id": "168",
    "name": "BETEL TOPI 12\" JUMBO BIASA",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%2012%22%20JUMBO%20BIAS",
    "variants": [
      {
        "sku": "BTTP RRT12 TK",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "169",
    "name": "BETEL TOPI 8 RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%208%20RRT",
    "variants": [
      {
        "sku": "BTTP 8 RRT",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "170",
    "name": "BETEL TOPI 8 X 16 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%208%20X%2016%20HIOSHI",
    "variants": [
      {
        "sku": "BT8HSH",
        "label": "PCS",
        "price": 13680,
        "unit": "PCS"
      }
    ],
    "basePrice": 13680,
    "priceLabel": "Rp13.680"
  },
  {
    "id": "171",
    "name": "BETEL TOPI 8\" JUMBO BIASA",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%208%22%20JUMBO%20BIASA",
    "variants": [
      {
        "sku": "BTTP RRT8 TK",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "172",
    "name": "BETEL TOPI JUMBO 10' VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%20JUMBO%2010'%20VPR",
    "variants": [
      {
        "sku": "BTJB 10",
        "label": "PCS",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 22500,
    "priceLabel": "Rp22.500"
  },
  {
    "id": "173",
    "name": "BETEL TOPI JUMBO 12' VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%20JUMBO%2012'%20VPR",
    "variants": [
      {
        "sku": "BTJB 12",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "174",
    "name": "BETEL TOPI JUMBO 8' VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%20JUMBO%208'%20VPR",
    "variants": [
      {
        "sku": "BTJB 8",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "175",
    "name": "BETEL TOPI LANCIP 10 X 16 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%20LANCIP%2010%20X%2016",
    "variants": [
      {
        "sku": "BT10HSH RUNCING",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "176",
    "name": "BETEL TOPI PAPAK 10 X 16 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%20PAPAK%2010%20X%2016%20",
    "variants": [
      {
        "sku": "BT10HSH",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "177",
    "name": "BETEL TOPI RRT (FAWI) 10",
    "category": "Umum",
    "brand": "FAWI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BETEL%20TOPI%20RRT%20(FAWI)%2010",
    "variants": [
      {
        "sku": "BTTP RRT8",
        "label": "8",
        "price": 70909.09,
        "unit": "PCS"
      },
      {
        "sku": "BTTP RRT10",
        "label": "10",
        "price": 97500,
        "unit": "PCS"
      },
      {
        "sku": "BTTP RRT12",
        "label": "12",
        "price": 106363.64,
        "unit": "PCS"
      }
    ],
    "basePrice": 70909.09,
    "priceLabel": "Rp70.909,09 - Rp106.363,64"
  },
  {
    "id": "178",
    "name": "BLENDER COSMOS CB-171 P",
    "category": "Rumah tangga",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BLENDER%20COSMOS%20CB-171%20P",
    "variants": [
      {
        "sku": "MCOBLE01",
        "label": "PCS",
        "price": 230000,
        "unit": "PCS"
      }
    ],
    "basePrice": 230000,
    "priceLabel": "Rp230.000"
  },
  {
    "id": "179",
    "name": "BLENDER MASPION BL-1262 PL",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BLENDER%20MASPION%20BL-1262%20P",
    "variants": [
      {
        "sku": "MNOBLE01",
        "label": "PCS",
        "price": 315000,
        "unit": "PCS"
      }
    ],
    "basePrice": 315000,
    "priceLabel": "Rp315.000"
  },
  {
    "id": "180",
    "name": "BLENDER MIYAKO BL-101 PL",
    "category": "Rumah tangga",
    "brand": "MIYAKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BLENDER%20MIYAKO%20BL-101%20PL",
    "variants": [
      {
        "sku": "MMIBLE01",
        "label": "PCS",
        "price": 215000,
        "unit": "PCS"
      }
    ],
    "basePrice": 215000,
    "priceLabel": "Rp215.000"
  },
  {
    "id": "181",
    "name": "BODEM / PALU PON ULIR 16 LBS",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%20%2F%20PALU%20PON%20ULIR%2016%20",
    "variants": [
      {
        "sku": "BDM 16LBS",
        "label": "PCS",
        "price": 148200,
        "unit": "PCS"
      }
    ],
    "basePrice": 148200,
    "priceLabel": "Rp148.200"
  },
  {
    "id": "182",
    "name": "BODEM / PALU PON ULIR 18 LBS",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%20%2F%20PALU%20PON%20ULIR%2018%20",
    "variants": [
      {
        "sku": "BDM 18LBS",
        "label": "PCS",
        "price": 166725,
        "unit": "PCS"
      }
    ],
    "basePrice": 166725,
    "priceLabel": "Rp166.725"
  },
  {
    "id": "183",
    "name": "BODEM / PALU PON ULIR 20 LBS",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%20%2F%20PALU%20PON%20ULIR%2020%20",
    "variants": [
      {
        "sku": "BDM 20LBS",
        "label": "PCS",
        "price": 190000,
        "unit": "PCS"
      }
    ],
    "basePrice": 190000,
    "priceLabel": "Rp190.000"
  },
  {
    "id": "184",
    "name": "BODEM 10 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%2010%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 10LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "185",
    "name": "BODEM 12 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%2012%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 12LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "186",
    "name": "BODEM 14 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%2014%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 14LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "187",
    "name": "BODEM 16 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%2016%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 16LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "188",
    "name": "BODEM 18 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%2018%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 18LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "189",
    "name": "BODEM 20 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%2020%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 20LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "190",
    "name": "BODEM 4 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%204%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 4LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "191",
    "name": "BODEM 6 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%206%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 6LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "192",
    "name": "BODEM 8 LB YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODEM%208%20LB%20YUSTAR",
    "variants": [
      {
        "sku": "BDM 8LB YS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "193",
    "name": "BODY BIASA (B) BOSTON",
    "category": "Umum",
    "brand": "BUSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20BIASA%20(B)%20BOSTON",
    "variants": [
      {
        "sku": "MBUBOD01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "194",
    "name": "BODY BIASA (B) KODAI SB403AB",
    "category": "Umum",
    "brand": "KODAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20BIASA%20(B)%20KODAI%20SB40",
    "variants": [
      {
        "sku": "MKOBOD01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "195",
    "name": "BODY DORONG 940 A MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20DORONG%20940%20A%20MULLER",
    "variants": [
      {
        "sku": "MMUBOD01",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "196",
    "name": "BODY DORONG MALVIN",
    "category": "Umum",
    "brand": "MALVIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20DORONG%20MALVIN",
    "variants": [
      {
        "sku": "MMABOD01",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "197",
    "name": "BODY PELOR  STAR CLASSIC",
    "category": "Umum",
    "brand": "STAR CLASSIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20%20STAR%20CLASSIC",
    "variants": [
      {
        "sku": "MSTBOD01",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "198",
    "name": "BODY PELOR 8016 MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%208016%20MULLER",
    "variants": [
      {
        "sku": "MMUBOD03",
        "label": "PCS",
        "price": 180000,
        "unit": "PCS"
      }
    ],
    "basePrice": 180000,
    "priceLabel": "Rp180.000"
  },
  {
    "id": "199",
    "name": "BODY PELOR 9018 MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%209018%20MULLER",
    "variants": [
      {
        "sku": "MMUBOD02",
        "label": "PCS",
        "price": 250000,
        "unit": "PCS"
      }
    ],
    "basePrice": 250000,
    "priceLabel": "Rp250.000"
  },
  {
    "id": "200",
    "name": "BODY PELOR ALM A5601 EASTGUARD",
    "category": "Umum",
    "brand": "EASTGUARD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20ALM%20A5601%20EAST",
    "variants": [
      {
        "sku": "MEABOD01",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "201",
    "name": "BODY PELOR CLASSIC",
    "category": "Umum",
    "brand": "CLASSIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20CLASSIC",
    "variants": [
      {
        "sku": "BDPL CLS",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "202",
    "name": "BODY PELOR GOMEO 8545 SN",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20GOMEO%208545%20SN",
    "variants": [
      {
        "sku": "BDPL 8545SN",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "203",
    "name": "BODY PELOR GOMEO SS 7016",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20GOMEO%20SS%207016",
    "variants": [
      {
        "sku": "BDPL SS7016",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "204",
    "name": "BODY PELOR HSJ",
    "category": "Umum",
    "brand": "HSJ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20HSJ",
    "variants": [
      {
        "sku": "MHSBOD01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "205",
    "name": "BODY PELOR ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20ISCO",
    "variants": [
      {
        "sku": "BDPL ISCO",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "206",
    "name": "BODY PELOR ISCO PER SET",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20ISCO%20PER%20SET",
    "variants": [
      {
        "sku": "BDPL ISCO SET",
        "label": "PCS",
        "price": 31000,
        "unit": "PCS"
      }
    ],
    "basePrice": 31000,
    "priceLabel": "Rp31.000"
  },
  {
    "id": "207",
    "name": "BODY PELOR ISCO PLAT SS304",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BODY%20PELOR%20ISCO%20PLAT%20SS30",
    "variants": [
      {
        "sku": "BDPL ISCO SS304",
        "label": "PCS",
        "price": 34375,
        "unit": "PCS"
      }
    ],
    "basePrice": 34375,
    "priceLabel": "Rp34.375"
  },
  {
    "id": "208",
    "name": "BOR 10MM RYU RDR 10-3 REB",
    "category": "Power tools",
    "brand": "RYU",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%2010MM%20RYU%20RDR%2010-3%20REB",
    "variants": [
      {
        "sku": "RDREBRYU",
        "label": "PCS",
        "price": 400000,
        "unit": "PCS"
      }
    ],
    "basePrice": 400000,
    "priceLabel": "Rp400.000"
  },
  {
    "id": "209",
    "name": "BOR BATERAI IMPACT MODERN M-15",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20BATERAI%20IMPACT%20MODERN",
    "variants": [
      {
        "sku": "MMOMES06",
        "label": "PCS",
        "price": 630000,
        "unit": "PCS"
      }
    ],
    "basePrice": 630000,
    "priceLabel": "Rp630.000"
  },
  {
    "id": "210",
    "name": "BOR BETON BOSCH 6",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20BETON%20BOSCH%206",
    "variants": [
      {
        "sku": "BB BSCH 6",
        "label": "6",
        "price": 12183.36,
        "unit": "PCS"
      },
      {
        "sku": "BB BSCH 8",
        "label": "8",
        "price": 16200,
        "unit": "PCS"
      }
    ],
    "basePrice": 12183.36,
    "priceLabel": "Rp12.183,36 - Rp16.200"
  },
  {
    "id": "211",
    "name": "BOR BETON EXTREME 4 X 80MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20BETON%20EXTREME%204%20X%2080M",
    "variants": [
      {
        "sku": "BB EXT 4X80 HS",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "212",
    "name": "BOR BETON GOMEO 6\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20BETON%20GOMEO%206%22",
    "variants": [
      {
        "sku": "BB GM 6",
        "label": "PCS",
        "price": 2700,
        "unit": "PCS"
      }
    ],
    "basePrice": 2700,
    "priceLabel": "Rp2.700"
  },
  {
    "id": "213",
    "name": "BOR BETON GOMEO 8\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20BETON%20GOMEO%208%22",
    "variants": [
      {
        "sku": "BB GM 8",
        "label": "PCS",
        "price": 4200,
        "unit": "PCS"
      }
    ],
    "basePrice": 4200,
    "priceLabel": "Rp4.200"
  },
  {
    "id": "214",
    "name": "BOR BETON SDS 8",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20BETON%20SDS%208",
    "variants": [
      {
        "sku": "BB SDS 8",
        "label": "PCS",
        "price": 25600,
        "unit": "PCS"
      }
    ],
    "basePrice": 25600,
    "priceLabel": "Rp25.600"
  },
  {
    "id": "215",
    "name": "BOR IMPACT CORDLESS BOSCH GSB 120 LI GEN 3",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20IMPACT%20CORDLESS%20BOSCH",
    "variants": [
      {
        "sku": "BBICGSB120",
        "label": "PCS",
        "price": 1320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1320000,
    "priceLabel": "Rp1.320.000"
  },
  {
    "id": "216",
    "name": "BOR KUNING 10\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20KUNING%2010%22%20GOMEO",
    "variants": [
      {
        "sku": "BOR KNG 10",
        "label": "PCS",
        "price": 8250,
        "unit": "PCS"
      }
    ],
    "basePrice": 8250,
    "priceLabel": "Rp8.250"
  },
  {
    "id": "217",
    "name": "BOR KUNING 3\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20KUNING%203%22%20GOMEO",
    "variants": [
      {
        "sku": "BOR KNG 3",
        "label": "PCS",
        "price": 1125,
        "unit": "PCS"
      }
    ],
    "basePrice": 1125,
    "priceLabel": "Rp1.125"
  },
  {
    "id": "218",
    "name": "BOR RYU 13MM IMPACT RID13-1RE",
    "category": "Power tools",
    "brand": "RYU",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOR%20RYU%2013MM%20IMPACT%20RID13",
    "variants": [
      {
        "sku": "MRYMES02",
        "label": "PCS",
        "price": 560000,
        "unit": "PCS"
      }
    ],
    "basePrice": 560000,
    "priceLabel": "Rp560.000"
  },
  {
    "id": "219",
    "name": "BOTOL MIMUM PLASTIK 800 ML",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOTOL%20MIMUM%20PLASTIK%20800%20M",
    "variants": [
      {
        "sku": "BOTMIP8",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "220",
    "name": "BOTOL MINUM PLASTIK 1 L",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOTOL%20MINUM%20PLASTIK%201%20L",
    "variants": [
      {
        "sku": "BOTMIPL1",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "221",
    "name": "BOX INBOW BROCO B1015350 HITAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOX%20INBOW%20BROCO%20B1015350%20",
    "variants": [
      {
        "sku": "MBRKOT01",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "222",
    "name": "BOX MCB BROCO 17101 PUTIH",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOX%20MCB%20BROCO%2017101%20PUTIH",
    "variants": [
      {
        "sku": "MBRBOX01",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "223",
    "name": "BOX MCB BROCO 17102 HITAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BOX%20MCB%20BROCO%2017102%20HITAM",
    "variants": [
      {
        "sku": "MBRBOX02",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "224",
    "name": "BULU KUAS ROLL KAPAL 4\" (2 PCS)",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BULU%20KUAS%20ROLL%20KAPAL%204%22%20(",
    "variants": [
      {
        "sku": "BL RL KPL HH",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "225",
    "name": "BULU KUAS ROLL STANDAT",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BULU%20KUAS%20ROLL%20STANDAT",
    "variants": [
      {
        "sku": "MBLKRSTD",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "226",
    "name": "BULU ROL DOMBA SUPRA (2 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BULU%20ROL%20DOMBA%20SUPRA%20(2%20P",
    "variants": [
      {
        "sku": "BUDOSUP",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "227",
    "name": "BURNER API BESAR POLOS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20API%20BESAR%20POLOS",
    "variants": [
      {
        "sku": "MNOBUR06",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "228",
    "name": "BURNER API BESAR TOPI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20API%20BESAR%20TOPI",
    "variants": [
      {
        "sku": "MNOBUR07",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "229",
    "name": "BURNER API LILIN KECIL RINNAI BARU",
    "category": "Umum",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20API%20LILIN%20KECIL%20RI",
    "variants": [
      {
        "sku": "MRIBUR05",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "230",
    "name": "BURNER API LILIN LAMA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20API%20LILIN%20LAMA",
    "variants": [
      {
        "sku": "MNOBUR05",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "231",
    "name": "BURNER COSMOS A",
    "category": "Umum",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20COSMOS%20A",
    "variants": [
      {
        "sku": "MCOBUR02",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "232",
    "name": "BURNER COSMOS B",
    "category": "Umum",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20COSMOS%20B",
    "variants": [
      {
        "sku": "MCOBUR01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "233",
    "name": "BURNER HP 2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20HP%202",
    "variants": [
      {
        "sku": "MNOBUR01",
        "label": "2",
        "price": 18000,
        "unit": "PCS"
      },
      {
        "sku": "MNOBUR02",
        "label": "3",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000 - Rp20.000"
  },
  {
    "id": "234",
    "name": "BURNER JAPAN SERBAGUNA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20JAPAN%20SERBAGUNA",
    "variants": [
      {
        "sku": "MNOBUR04",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "235",
    "name": "BURNER QUANTUM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20QUANTUM",
    "variants": [
      {
        "sku": "MNOBUR03",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "236",
    "name": "BURNER RINNAI KANAN",
    "category": "Umum",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20RINNAI%20KANAN",
    "variants": [
      {
        "sku": "MRIBUR01",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "237",
    "name": "BURNER RINNAI KIRI",
    "category": "Umum",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20RINNAI%20KIRI",
    "variants": [
      {
        "sku": "MRIBUR02",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "238",
    "name": "BURNER RINNAI TORNADO",
    "category": "Umum",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20RINNAI%20TORNADO",
    "variants": [
      {
        "sku": "MRIBUR04",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "239",
    "name": "BURNER RINNAI TURBO",
    "category": "Umum",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BURNER%20RINNAI%20TURBO",
    "variants": [
      {
        "sku": "MRIBUR03",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "240",
    "name": "BUSA POLES 4”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=BUSA%20POLES%204%E2%80%9D",
    "variants": [
      {
        "sku": "MNOBUS01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "241",
    "name": "CABLE TIES 10 X 2.5MM MIX COLOR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%2010%20X%202.5MM%20MIX",
    "variants": [
      {
        "sku": "CB TIES 100 MC HS",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "242",
    "name": "CABLE TIES 100 HITAM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20100%20HITAM",
    "variants": [
      {
        "sku": "MCATI10H",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "243",
    "name": "CABLE TIES 100 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20100%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB02",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "244",
    "name": "CABLE TIES 100 PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20100%20PUTIH",
    "variants": [
      {
        "sku": "MCATI10P",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "245",
    "name": "CABLE TIES 100 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20100%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "246",
    "name": "CABLE TIES 15 X 2.5MM MIX COLOR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%2015%20X%202.5MM%20MIX",
    "variants": [
      {
        "sku": "CB TIES 150 MC HS",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "247",
    "name": "CABLE TIES 150 HITAM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20150%20HITAM",
    "variants": [
      {
        "sku": "MCATI15H",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "248",
    "name": "CABLE TIES 150 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20150%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB04",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "249",
    "name": "CABLE TIES 150 PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20150%20PUTIH",
    "variants": [
      {
        "sku": "MCATI15P",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "250",
    "name": "CABLE TIES 150 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20150%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB03",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "251",
    "name": "CABLE TIES 20 X 2.5MM MIX COLOR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%2020%20X%202.5MM%20MIX",
    "variants": [
      {
        "sku": "CB TIES 200 MC HS",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "252",
    "name": "CABLE TIES 200 HITAM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20200%20HITAM",
    "variants": [
      {
        "sku": "MCATI20H",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "253",
    "name": "CABLE TIES 200 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20200%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB06",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "254",
    "name": "CABLE TIES 200 PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20200%20PUTIH",
    "variants": [
      {
        "sku": "MCATI20P",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "255",
    "name": "CABLE TIES 200 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20200%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB05",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "256",
    "name": "CABLE TIES 25 X 2.5MM MIX COLOR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%2025%20X%202.5MM%20MIX",
    "variants": [
      {
        "sku": "CB TIES 250 MC HS",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "257",
    "name": "CABLE TIES 250 HITAM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20250%20HITAM",
    "variants": [
      {
        "sku": "MCATI25H",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "258",
    "name": "CABLE TIES 250 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20250%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB08",
        "label": "PCS",
        "price": 34000,
        "unit": "PCS"
      }
    ],
    "basePrice": 34000,
    "priceLabel": "Rp34.000"
  },
  {
    "id": "259",
    "name": "CABLE TIES 250 PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20250%20PUTIH",
    "variants": [
      {
        "sku": "MCATI25P",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "260",
    "name": "CABLE TIES 250 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20250%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB07",
        "label": "PCS",
        "price": 34000,
        "unit": "PCS"
      }
    ],
    "basePrice": 34000,
    "priceLabel": "Rp34.000"
  },
  {
    "id": "261",
    "name": "CABLE TIES 30 X 2.5MM MIX COLOR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%2030%20X%202.5MM%20MIX",
    "variants": [
      {
        "sku": "CB TIES 300 MC HS",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "262",
    "name": "CABLE TIES 300 HITAM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20300%20HITAM",
    "variants": [
      {
        "sku": "MCATI30H",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "263",
    "name": "CABLE TIES 300 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20300%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB10",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "264",
    "name": "CABLE TIES 300 PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20300%20PUTIH",
    "variants": [
      {
        "sku": "MCATI30P",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "265",
    "name": "CABLE TIES 300 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20300%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB09",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "266",
    "name": "CABLE TIES 400 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20400%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB12",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "267",
    "name": "CABLE TIES 400 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20400%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB11",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "268",
    "name": "CABLE TIES 500 HITAM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20500%20HITAM%20HASS",
    "variants": [
      {
        "sku": "MHACAB14",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "269",
    "name": "CABLE TIES 500 PUTIH HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20500%20PUTIH%20HASS",
    "variants": [
      {
        "sku": "MHACAB13",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "270",
    "name": "CABLE TIES PUTIH 500",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CABLE%20TIES%20PUTIH%20500",
    "variants": [
      {
        "sku": "CB TIES PTH500",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "271",
    "name": "CANGKIR ALUMINIUM VIOLIN 11 CM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CANGKIR%20ALUMINIUM%20VIOLIN%20",
    "variants": [
      {
        "sku": "CKRALVIO",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "272",
    "name": "CAT KAYU & BESI AVIAN 301 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20301",
    "variants": [
      {
        "sku": "MAVCAT04",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "273",
    "name": "CAT KAYU & BESI AVIAN 470 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20470",
    "variants": [
      {
        "sku": "MAVCAT05",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "274",
    "name": "CAT KAYU & BESI AVIAN 480 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20480",
    "variants": [
      {
        "sku": "MAVCAT01",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "275",
    "name": "CAT KAYU & BESI AVIAN 650 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20650",
    "variants": [
      {
        "sku": "MAVCAT06",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "276",
    "name": "CAT KAYU & BESI AVIAN 657 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20657",
    "variants": [
      {
        "sku": "MAVCAT07",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "277",
    "name": "CAT KAYU & BESI AVIAN 732 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20732",
    "variants": [
      {
        "sku": "MAVCAT02",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "278",
    "name": "CAT KAYU & BESI AVIAN 911 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20911",
    "variants": [
      {
        "sku": "MAVCAT03",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "279",
    "name": "CAT KAYU & BESI AVIAN SB 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20SB%20",
    "variants": [
      {
        "sku": "MAVCAT08",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "280",
    "name": "CAT KAYU & BESI AVIAN SW 200 CC",
    "category": "Umum",
    "brand": "AVIAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CAT%20KAYU%20%26%20BESI%20AVIAN%20SW%20",
    "variants": [
      {
        "sku": "MAVCAT09",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "281",
    "name": "CATOK PIPA PRO NO.2 (1/2 - 3.1/2) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATOK%20PIPA%20PRO%20NO.2%20(1%2F2%20",
    "variants": [
      {
        "sku": "CATK PP NO2 HS",
        "label": "PCS",
        "price": 300000,
        "unit": "PCS"
      }
    ],
    "basePrice": 300000,
    "priceLabel": "Rp300.000"
  },
  {
    "id": "282",
    "name": "CATUT / TANG KAKATUA 9 FUKUDA",
    "category": "Umum",
    "brand": "FUKUDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20%2F%20TANG%20KAKATUA%209%20FU",
    "variants": [
      {
        "sku": "CT FK9",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "283",
    "name": "CATUT / TANG KAKATUA HIOSHI HD 9\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20%2F%20TANG%20KAKATUA%20HIOS",
    "variants": [
      {
        "sku": "CT HD9",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "284",
    "name": "CATUT BC CAMEL 9'",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20BC%20CAMEL%209'",
    "variants": [
      {
        "sku": "MCACAT01",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "285",
    "name": "CATUT BC GRT 9'",
    "category": "Alat tukang",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20BC%20GRT%209'",
    "variants": [
      {
        "sku": "MGRCAT01",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "286",
    "name": "CATUT BC HPP 9'",
    "category": "Alat tukang",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20BC%20HPP%209'",
    "variants": [
      {
        "sku": "MHPCAT01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "287",
    "name": "CATUT BC HSJ 9'",
    "category": "Alat tukang",
    "brand": "HSJ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20BC%20HSJ%209'",
    "variants": [
      {
        "sku": "MHSCAT01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "288",
    "name": "CATUT HIOSHI 9",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20HIOSHI%209",
    "variants": [
      {
        "sku": "CT HIOSHI 9",
        "label": "PCS",
        "price": 24937.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 24937.5,
    "priceLabel": "Rp24.937,5"
  },
  {
    "id": "289",
    "name": "CATUT KAKATUA 9” TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20KAKATUA%209%E2%80%9D%20TEKIRO",
    "variants": [
      {
        "sku": "MTECAT01",
        "label": "PCS",
        "price": 47000,
        "unit": "PCS"
      }
    ],
    "basePrice": 47000,
    "priceLabel": "Rp47.000"
  },
  {
    "id": "290",
    "name": "CATUT MURAH WANLY 9'",
    "category": "Alat tukang",
    "brand": "WANLY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CATUT%20MURAH%20WANLY%209'",
    "variants": [
      {
        "sku": "MWACAT01",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "291",
    "name": "CB 100 MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%20100%20MODERN",
    "variants": [
      {
        "sku": "MMOCBM01",
        "label": "PCS",
        "price": 4500,
        "unit": "PCS"
      }
    ],
    "basePrice": 4500,
    "priceLabel": "Rp4.500"
  },
  {
    "id": "292",
    "name": "CB 21 MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%2021%20MODERN",
    "variants": [
      {
        "sku": "MMOCBM04",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "293",
    "name": "CB 411 MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%20411%20MODERN",
    "variants": [
      {
        "sku": "MMOCBM03",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "294",
    "name": "CB 51 MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%2051%20MODERN",
    "variants": [
      {
        "sku": "MMOCBM02",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "295",
    "name": "CB 64 MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%2064%20MODERN",
    "variants": [
      {
        "sku": "MMOCBM05",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "296",
    "name": "CB MAKITA 100 A ORIGINAL",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%20MAKITA%20100%20A%20ORIGINAL",
    "variants": [
      {
        "sku": "MMACBM01",
        "label": "SET",
        "price": 22000,
        "unit": "SET"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "297",
    "name": "CB MAKITA 459 ORIGINAL",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%20MAKITA%20459%20ORIGINAL",
    "variants": [
      {
        "sku": "MMACBM04",
        "label": "SET",
        "price": 38000,
        "unit": "SET"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "298",
    "name": "CB MAKITA 51 A ORIGINAL",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%20MAKITA%2051%20A%20ORIGINAL",
    "variants": [
      {
        "sku": "MMACBM03",
        "label": "SET",
        "price": 20000,
        "unit": "SET"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "299",
    "name": "CB MAKITA 64 A ORIGINAL",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CB%20MAKITA%2064%20A%20ORIGINAL",
    "variants": [
      {
        "sku": "MMACBM02",
        "label": "SET",
        "price": 20000,
        "unit": "SET"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "300",
    "name": "CETOK BULAT 6\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20BULAT%206%22",
    "variants": [
      {
        "sku": "MNOCET01",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "301",
    "name": "CETOK BULAT 8\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20BULAT%208%22",
    "variants": [
      {
        "sku": "MNOCET02",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "302",
    "name": "CETOK HEBEL BATA RINGAN 10 CM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20HEBEL%20BATA%20RINGAN%201",
    "variants": [
      {
        "sku": "CTK HB 10",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "303",
    "name": "CETOK KARET BULAT 7\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20KARET%20BULAT%207%22%20HIOS",
    "variants": [
      {
        "sku": "CTK KRT BLT 247 HS",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "304",
    "name": "CETOK KARET LANCIP 7\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20KARET%20LANCIP%207%22%20HIO",
    "variants": [
      {
        "sku": "CTK KRT LCP 237 HS",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "305",
    "name": "CETOK KAYU BULAT 7\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20KAYU%20BULAT%207%22%20HIOSH",
    "variants": [
      {
        "sku": "CTK KY BLT",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "306",
    "name": "CETOK KAYU LANCIP 7' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20KAYU%20LANCIP%207'%20HIOS",
    "variants": [
      {
        "sku": "CTK LNCP 7",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "307",
    "name": "CETOK KORALTEX GLX",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20KORALTEX%20GLX",
    "variants": [
      {
        "sku": "CTK KR GLX",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "308",
    "name": "CETOK LANCIP 6' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20LANCIP%206'%20HIOSHI",
    "variants": [
      {
        "sku": "CTK LNCP 6",
        "label": "PCS",
        "price": 156750,
        "unit": "PCS"
      }
    ],
    "basePrice": 156750,
    "priceLabel": "Rp156.750"
  },
  {
    "id": "309",
    "name": "CETOK OVAL 6\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20OVAL%206%22",
    "variants": [
      {
        "sku": "MNOCET03",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "310",
    "name": "CETOK OVAL 7\" BISON",
    "category": "Umum",
    "brand": "BISON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20OVAL%207%22%20BISON",
    "variants": [
      {
        "sku": "MBICET01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "311",
    "name": "CETOK OVAL GLX 7\"",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CETOK%20OVAL%20GLX%207%22",
    "variants": [
      {
        "sku": "MGLCET02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "312",
    "name": "CHECK VALVE KUNINGAN 1/2\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CHECK%20VALVE%20KUNINGAN%201%2F2%22",
    "variants": [
      {
        "sku": "CH VALVE 1/2 HS",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "313",
    "name": "CHECK VALVE KUNINGAN 3/4\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CHECK%20VALVE%20KUNINGAN%203%2F4%22",
    "variants": [
      {
        "sku": "CH VALVE 3/4 HS",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "314",
    "name": "COCA COLA 250ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=COCA%20COLA%20250ML",
    "variants": [
      {
        "sku": "COCL250",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "315",
    "name": "CONTAINER 10 L",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%2010%20L",
    "variants": [
      {
        "sku": "CONT10L",
        "label": "PCS",
        "price": 31000,
        "unit": "PCS"
      }
    ],
    "basePrice": 31000,
    "priceLabel": "Rp31.000"
  },
  {
    "id": "316",
    "name": "CONTAINER 15 L",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%2015%20L",
    "variants": [
      {
        "sku": "CONT15L",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "317",
    "name": "CONTAINER RODA 30 BENING HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2030%20BENING%20",
    "variants": [
      {
        "sku": "MNOCON05",
        "label": "PCS",
        "price": 88000,
        "unit": "PCS"
      }
    ],
    "basePrice": 88000,
    "priceLabel": "Rp88.000"
  },
  {
    "id": "318",
    "name": "CONTAINER RODA 30 PUTIH HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2030%20PUTIH%20H",
    "variants": [
      {
        "sku": "MNOCON04",
        "label": "PCS",
        "price": 88000,
        "unit": "PCS"
      }
    ],
    "basePrice": 88000,
    "priceLabel": "Rp88.000"
  },
  {
    "id": "319",
    "name": "CONTAINER RODA 30 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2030%20SILVER",
    "variants": [
      {
        "sku": "MNOCON03",
        "label": "PCS",
        "price": 66000,
        "unit": "PCS"
      }
    ],
    "basePrice": 66000,
    "priceLabel": "Rp66.000"
  },
  {
    "id": "320",
    "name": "CONTAINER RODA 40 PUTIH HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2040%20PUTIH%20H",
    "variants": [
      {
        "sku": "MNOCON02",
        "label": "PCS",
        "price": 198000,
        "unit": "PCS"
      }
    ],
    "basePrice": 198000,
    "priceLabel": "Rp198.000"
  },
  {
    "id": "321",
    "name": "CONTAINER RODA 40 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2040%20SILVER",
    "variants": [
      {
        "sku": "MNOCON01",
        "label": "PCS",
        "price": 185000,
        "unit": "PCS"
      }
    ],
    "basePrice": 185000,
    "priceLabel": "Rp185.000"
  },
  {
    "id": "322",
    "name": "CONTAINER RODA 45 BENING HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2045%20BENING%20",
    "variants": [
      {
        "sku": "MNOCON07",
        "label": "PCS",
        "price": 115000,
        "unit": "PCS"
      }
    ],
    "basePrice": 115000,
    "priceLabel": "Rp115.000"
  },
  {
    "id": "323",
    "name": "CONTAINER RODA 45 PUTIH HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2045%20PUTIH%20H",
    "variants": [
      {
        "sku": "MNOCON08",
        "label": "PCS",
        "price": 115000,
        "unit": "PCS"
      }
    ],
    "basePrice": 115000,
    "priceLabel": "Rp115.000"
  },
  {
    "id": "324",
    "name": "CONTAINER RODA 45 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2045%20SILVER",
    "variants": [
      {
        "sku": "MNOCON06",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "325",
    "name": "CONTAINER RODA 60 BENING HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2060%20BENING%20",
    "variants": [
      {
        "sku": "MNOCON10",
        "label": "PCS",
        "price": 190000,
        "unit": "PCS"
      }
    ],
    "basePrice": 190000,
    "priceLabel": "Rp190.000"
  },
  {
    "id": "326",
    "name": "CONTAINER RODA 60 PUTIH HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2060%20PUTIH%20H",
    "variants": [
      {
        "sku": "MNOCON11",
        "label": "PCS",
        "price": 190000,
        "unit": "PCS"
      }
    ],
    "basePrice": 190000,
    "priceLabel": "Rp190.000"
  },
  {
    "id": "327",
    "name": "CONTAINER RODA 60 SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CONTAINER%20RODA%2060%20SILVER",
    "variants": [
      {
        "sku": "MNOCON09",
        "label": "PCS",
        "price": 104000,
        "unit": "PCS"
      }
    ],
    "basePrice": 104000,
    "priceLabel": "Rp104.000"
  },
  {
    "id": "328",
    "name": "COUPLING NUT WRENCH TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=COUPLING%20NUT%20WRENCH%20TEKIR",
    "variants": [
      {
        "sku": "MTECOU01",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "329",
    "name": "CUP WHEEL MOLLAR 4",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUP%20WHEEL%20MOLLAR%204",
    "variants": [
      {
        "sku": "MMOCUP02",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "330",
    "name": "CUTTER WANLY",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTER%20WANLY",
    "variants": [
      {
        "sku": "MCUTTER",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "331",
    "name": "CUTTING WD 4\" (PAK)",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTING%20WD%204%22%20(PAK)",
    "variants": [
      {
        "sku": "CUTWD4",
        "label": "PCS",
        "price": 3250,
        "unit": "PCS"
      }
    ],
    "basePrice": 3250,
    "priceLabel": "Rp3.250"
  },
  {
    "id": "332",
    "name": "CUTTING WHEEL 14\"",
    "category": "Umum",
    "brand": "WD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTING%20WHEEL%2014%22",
    "variants": [
      {
        "sku": "CUTWD 14",
        "label": "PCS",
        "price": 30839.13,
        "unit": "PCS"
      }
    ],
    "basePrice": 30839.13,
    "priceLabel": "Rp30.839,13"
  },
  {
    "id": "333",
    "name": "CUTTING WHEEL 4\" (WD)",
    "category": "Umum",
    "brand": "WD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTING%20WHEEL%204%22%20(WD)",
    "variants": [
      {
        "sku": "CUTWD 4",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "334",
    "name": "CUTTING WHEEL 4\" WD (3 PCS)",
    "category": "Alat tukang",
    "brand": "WD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTING%20WHEEL%204%22%20WD%20(3%20PC",
    "variants": [
      {
        "sku": "CUTWD 4-PAKET",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "335",
    "name": "CUTTING WHEEL 7” MOLLAR",
    "category": "Umum",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTING%20WHEEL%207%E2%80%9D%20MOLLAR",
    "variants": [
      {
        "sku": "MMOCUT01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "336",
    "name": "CUTTING WHEEL GRT 4”",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=CUTTING%20WHEEL%20GRT%204%E2%80%9D",
    "variants": [
      {
        "sku": "MGRCUT02",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "337",
    "name": "DEMOLITION HAMMER MODERN M-DH35",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DEMOLITION%20HAMMER%20MODERN%20",
    "variants": [
      {
        "sku": "MMODEM01",
        "label": "PCS",
        "price": 1700000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1700000,
    "priceLabel": "Rp1.700.000"
  },
  {
    "id": "338",
    "name": "DEMPUL KAYU CAP CEMARA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DEMPUL%20KAYU%20CAP%20CEMARA",
    "variants": [
      {
        "sku": "MDMPKCM",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "339",
    "name": "DIAMOND WHEEL BOSCH STD ECO KERING",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20BOSCH%20STD%20E",
    "variants": [
      {
        "sku": "DMD BSCH ECO",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "340",
    "name": "DIAMOND WHEEL BOSCH STD HIJAU BASAH",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20BOSCH%20STD%20H",
    "variants": [
      {
        "sku": "DMD BSH STD",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "341",
    "name": "DIAMOND WHEEL BOSCH TURBO",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20BOSCH%20TURBO",
    "variants": [
      {
        "sku": "DMD WH01",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "342",
    "name": "DIAMOND WHEEL CUP 3\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20CUP%203%22",
    "variants": [
      {
        "sku": "DMDWHCU3",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "343",
    "name": "DIAMOND WHEEL CUP 4\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20CUP%204%22",
    "variants": [
      {
        "sku": "DMDWHCU4",
        "label": "PAK",
        "price": 35000,
        "unit": "PAK"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "344",
    "name": "DIAMOND WHEEL GOMEO DRY",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20GOMEO%20DRY",
    "variants": [
      {
        "sku": "DMD WH GM",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "345",
    "name": "DIAMOND WHEEL MULLER BIRU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20MULLER%20BIRU",
    "variants": [
      {
        "sku": "DMDWHMB",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "346",
    "name": "DIAMOND WHEEL SCHLIEPER DRY",
    "category": "Alat tukang",
    "brand": "SCHLIEPER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20SCHLIEPER%20D",
    "variants": [
      {
        "sku": "MSCDIA01",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "347",
    "name": "DIAMOND WHEEL TOHO TURBO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20TOHO%20TURBO",
    "variants": [
      {
        "sku": "DMDWHTHT",
        "label": "PCS",
        "price": 185000,
        "unit": "PCS"
      }
    ],
    "basePrice": 185000,
    "priceLabel": "Rp185.000"
  },
  {
    "id": "348",
    "name": "DIAMOND WHEEL TURBO GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20TURBO%20GOMEO",
    "variants": [
      {
        "sku": "DMD WH TRGM",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "349",
    "name": "DIAMOND WHEEL TURBO MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DIAMOND%20WHEEL%20TURBO%20MAXTE",
    "variants": [
      {
        "sku": "DMD TR MAX",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "350",
    "name": "DONGKRAK BOTOL 2 TON TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DONGKRAK%20BOTOL%202%20TON%20TEKI",
    "variants": [
      {
        "sku": "TKRDNGB2T",
        "label": "PCS",
        "price": 250000,
        "unit": "PCS"
      }
    ],
    "basePrice": 250000,
    "priceLabel": "Rp250.000"
  },
  {
    "id": "351",
    "name": "DONGKRAK BUAYA 2T 5.5 KG PLASTIC",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DONGKRAK%20BUAYA%202T%205.5%20KG%20",
    "variants": [
      {
        "sku": "DONGKRAK",
        "label": "PCS",
        "price": 275000,
        "unit": "PCS"
      }
    ],
    "basePrice": 275000,
    "priceLabel": "Rp275.000"
  },
  {
    "id": "352",
    "name": "DOP TS 1” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOP%20TS%201%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJADOP03",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "353",
    "name": "DOP TS 1/2” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOP%20TS%201%2F2%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJADOP01",
        "label": "PCS",
        "price": 1500,
        "unit": "PCS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "354",
    "name": "DOP TS 3/4” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOP%20TS%203%2F4%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJADOP02",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "355",
    "name": "DOUBLE TAPE BENING 1M",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOUBLE%20TAPE%20BENING%201M",
    "variants": [
      {
        "sku": "MDBLTBNG",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "356",
    "name": "DOUBLE TAPE DEXTONE MERAH",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOUBLE%20TAPE%20DEXTONE%20MERAH",
    "variants": [
      {
        "sku": "MDELEM08",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "357",
    "name": "DOUBLE TAPE FOAM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOUBLE%20TAPE%20FOAM",
    "variants": [
      {
        "sku": "DB TAPE",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "358",
    "name": "DOWNLIGHT LUBY 207 11W 3 WARNA",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOWNLIGHT%20LUBY%20207%2011W%203%20",
    "variants": [
      {
        "sku": "MLUDOW06",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "359",
    "name": "DOWNLIGHT LUBY 207 3,5W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOWNLIGHT%20LUBY%20207%203%2C5W",
    "variants": [
      {
        "sku": "MLUDOW05",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "360",
    "name": "DOWNLIGHT LUBY 207 7W",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOWNLIGHT%20LUBY%20207%207W",
    "variants": [
      {
        "sku": "DLLB2077",
        "label": "PCS",
        "price": 72000,
        "unit": "PCS"
      }
    ],
    "basePrice": 72000,
    "priceLabel": "Rp72.000"
  },
  {
    "id": "361",
    "name": "DOWNLIGHT LUBY 207 7W 3 WARNA",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOWNLIGHT%20LUBY%20207%207W%203%20W",
    "variants": [
      {
        "sku": "DLLB207W",
        "label": "PCS",
        "price": 93000,
        "unit": "PCS"
      }
    ],
    "basePrice": 93000,
    "priceLabel": "Rp93.000"
  },
  {
    "id": "362",
    "name": "DOWNLIGHT LUBY 301 BULAT 12 W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOWNLIGHT%20LUBY%20301%20BULAT%20",
    "variants": [
      {
        "sku": "MLUDOW01",
        "label": "9W",
        "price": 60000,
        "unit": "PCS"
      },
      {
        "sku": "MLUDOW03",
        "label": "12 W",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000 - Rp90.000"
  },
  {
    "id": "363",
    "name": "DOWNLIGHT LUBY 302 KOTAK 12 W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DOWNLIGHT%20LUBY%20302%20KOTAK%20",
    "variants": [
      {
        "sku": "MLUDOW02",
        "label": "9W",
        "price": 73000,
        "unit": "PCS"
      },
      {
        "sku": "MLUDOW04",
        "label": "12 W",
        "price": 190000,
        "unit": "PCS"
      }
    ],
    "basePrice": 73000,
    "priceLabel": "Rp73.000 - Rp190.000"
  },
  {
    "id": "364",
    "name": "DUDUKAN BOR MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DUDUKAN%20BOR%20MODERN",
    "variants": [
      {
        "sku": "MMODUD01",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "365",
    "name": "DUDUKAN GERINDA MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DUDUKAN%20GERINDA%20MODERN",
    "variants": [
      {
        "sku": "MMODUD02",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "366",
    "name": "DYNABOLT M10 X 50",
    "category": "Mur Baut",
    "brand": "WOWO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DYNABOLT%20M10%20X%2050",
    "variants": [
      {
        "sku": "MDNB3717",
        "label": "50",
        "price": 1750,
        "unit": "PCS"
      },
      {
        "sku": "MDNB3727",
        "label": "65",
        "price": 2000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB3730",
        "label": "77",
        "price": 2250,
        "unit": "PCS"
      },
      {
        "sku": "MDNB3740",
        "label": "97",
        "price": 2750,
        "unit": "PCS"
      }
    ],
    "basePrice": 1750,
    "priceLabel": "Rp1.750 - Rp2.750"
  },
  {
    "id": "367",
    "name": "DYNABOLT M12 X 129",
    "category": "Mur Baut",
    "brand": "WOWO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DYNABOLT%20M12%20X%20129",
    "variants": [
      {
        "sku": "MDNB5022",
        "label": "60",
        "price": 3700,
        "unit": "PCS"
      },
      {
        "sku": "MDNB5030",
        "label": "75",
        "price": 4500,
        "unit": "PCS"
      },
      {
        "sku": "MDNB5040",
        "label": "99",
        "price": 5500,
        "unit": "PCS"
      },
      {
        "sku": "MDNB5050",
        "label": "129",
        "price": 6500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3700,
    "priceLabel": "Rp3.700 - Rp6.500"
  },
  {
    "id": "368",
    "name": "DYNABOLT M16 X 111",
    "category": "Mur Baut",
    "brand": "WOWO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DYNABOLT%20M16%20X%20111",
    "variants": [
      {
        "sku": "MDNB6222",
        "label": "65",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB6232",
        "label": "85",
        "price": 15500,
        "unit": "PCS"
      },
      {
        "sku": "MDNB6240",
        "label": "111",
        "price": 19000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB6256",
        "label": "147",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000 - Rp24.000"
  },
  {
    "id": "369",
    "name": "DYNABOLT M20 X 107",
    "category": "Mur Baut",
    "brand": "WOWO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DYNABOLT%20M20%20X%20107",
    "variants": [
      {
        "sku": "MDNB7532",
        "label": "75",
        "price": 32000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB7540",
        "label": "107",
        "price": 40000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB7556",
        "label": "151",
        "price": 52000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB7568",
        "label": "188",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000 - Rp65.000"
  },
  {
    "id": "370",
    "name": "DYNABOLT M8 X 40",
    "category": "Mur Baut",
    "brand": "WOWO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=DYNABOLT%20M8%20X%2040",
    "variants": [
      {
        "sku": "MDNB3114",
        "label": "40",
        "price": 1000,
        "unit": "PCS"
      },
      {
        "sku": "MDNB3124",
        "label": "65",
        "price": 1500,
        "unit": "PCS"
      },
      {
        "sku": "MDNB3134",
        "label": "85",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000 - Rp2.000"
  },
  {
    "id": "371",
    "name": "ELECTRIC HAND BLOWER IWA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ELECTRIC%20HAND%20BLOWER%20IWA",
    "variants": [
      {
        "sku": "HAND BLW IWA",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "372",
    "name": "EMBER 35L + TUTUP HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%2035L%20%2B%20TUTUP%20HYPER",
    "variants": [
      {
        "sku": "MNOEMB09",
        "label": "PCS",
        "price": 81000,
        "unit": "PCS"
      }
    ],
    "basePrice": 81000,
    "priceLabel": "Rp81.000"
  },
  {
    "id": "373",
    "name": "EMBER 35L + TUTUP SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%2035L%20%2B%20TUTUP%20SILVER",
    "variants": [
      {
        "sku": "MNOEMB08",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "374",
    "name": "EMBER 45 LTR + TUTUP HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%2045%20LTR%20%2B%20TUTUP%20HYPE",
    "variants": [
      {
        "sku": "EMB45TTH",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "375",
    "name": "EMBER 45L + TUTUP HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%2045L%20%2B%20TUTUP%20HYPER",
    "variants": [
      {
        "sku": "MNOEMB11",
        "label": "PCS",
        "price": 98000,
        "unit": "PCS"
      }
    ],
    "basePrice": 98000,
    "priceLabel": "Rp98.000"
  },
  {
    "id": "376",
    "name": "EMBER 45L + TUTUP SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%2045L%20%2B%20TUTUP%20SILVER",
    "variants": [
      {
        "sku": "MNOEMB10",
        "label": "PCS",
        "price": 58000,
        "unit": "PCS"
      }
    ],
    "basePrice": 58000,
    "priceLabel": "Rp58.000"
  },
  {
    "id": "377",
    "name": "EMBER 4G TANPA TUTUP HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%204G%20TANPA%20TUTUP%20HYPE",
    "variants": [
      {
        "sku": "MNOEMB03",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "378",
    "name": "EMBER 4G TANPA TUTUP HYPER PRINT",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%204G%20TANPA%20TUTUP%20HYPE",
    "variants": [
      {
        "sku": "MNOEMB04",
        "label": "PCS",
        "price": 46000,
        "unit": "PCS"
      }
    ],
    "basePrice": 46000,
    "priceLabel": "Rp46.000"
  },
  {
    "id": "379",
    "name": "EMBER 4G TANPA TUTUP SUPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%204G%20TANPA%20TUTUP%20SUPE",
    "variants": [
      {
        "sku": "MNOEMB02",
        "label": "PCS",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 27000,
    "priceLabel": "Rp27.000"
  },
  {
    "id": "380",
    "name": "EMBER 6G TANPA TUTUP HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%206G%20TANPA%20TUTUP%20HYPE",
    "variants": [
      {
        "sku": "MNOEMB06",
        "label": "PCS",
        "price": 56000,
        "unit": "PCS"
      }
    ],
    "basePrice": 56000,
    "priceLabel": "Rp56.000"
  },
  {
    "id": "381",
    "name": "EMBER 6G TANPA TUTUP HYPER PRINT",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%206G%20TANPA%20TUTUP%20HYPE",
    "variants": [
      {
        "sku": "MNOEMB07",
        "label": "PCS",
        "price": 62000,
        "unit": "PCS"
      }
    ],
    "basePrice": 62000,
    "priceLabel": "Rp62.000"
  },
  {
    "id": "382",
    "name": "EMBER 6G TANPA TUTUP SUPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%206G%20TANPA%20TUTUP%20SUPE",
    "variants": [
      {
        "sku": "MNOEMB05",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "383",
    "name": "EMBER JUMBO 105L HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%20105L%20HYPER",
    "variants": [
      {
        "sku": "MNOEMB19",
        "label": "PCS",
        "price": 209000,
        "unit": "PCS"
      }
    ],
    "basePrice": 209000,
    "priceLabel": "Rp209.000"
  },
  {
    "id": "384",
    "name": "EMBER JUMBO 105L PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%20105L%20PREM",
    "variants": [
      {
        "sku": "MNOEMB18",
        "label": "PCS",
        "price": 147000,
        "unit": "PCS"
      }
    ],
    "basePrice": 147000,
    "priceLabel": "Rp147.000"
  },
  {
    "id": "385",
    "name": "EMBER JUMBO 105L SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%20105L%20SILVER",
    "variants": [
      {
        "sku": "MNOEMB17",
        "label": "PCS",
        "price": 118000,
        "unit": "PCS"
      }
    ],
    "basePrice": 118000,
    "priceLabel": "Rp118.000"
  },
  {
    "id": "386",
    "name": "EMBER JUMBO 75L HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%2075L%20HYPER",
    "variants": [
      {
        "sku": "MNOEMB14",
        "label": "PCS",
        "price": 161000,
        "unit": "PCS"
      }
    ],
    "basePrice": 161000,
    "priceLabel": "Rp161.000"
  },
  {
    "id": "387",
    "name": "EMBER JUMBO 75L PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%2075L%20PREM",
    "variants": [
      {
        "sku": "MNOEMB13",
        "label": "PCS",
        "price": 113000,
        "unit": "PCS"
      }
    ],
    "basePrice": 113000,
    "priceLabel": "Rp113.000"
  },
  {
    "id": "388",
    "name": "EMBER JUMBO 75L SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%2075L%20SILVER",
    "variants": [
      {
        "sku": "MNOEMB12",
        "label": "PCS",
        "price": 81000,
        "unit": "PCS"
      }
    ],
    "basePrice": 81000,
    "priceLabel": "Rp81.000"
  },
  {
    "id": "389",
    "name": "EMBER JUMBO 85L TNP TUTUP PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%2085L%20TNP%20TUTUP",
    "variants": [
      {
        "sku": "MNOEMB16",
        "label": "PCS",
        "price": 128000,
        "unit": "PCS"
      }
    ],
    "basePrice": 128000,
    "priceLabel": "Rp128.000"
  },
  {
    "id": "390",
    "name": "EMBER JUMBO 85L TNP TUTUP SILVER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EMBER%20JUMBO%2085L%20TNP%20TUTUP",
    "variants": [
      {
        "sku": "MNOEMB15",
        "label": "PCS",
        "price": 93000,
        "unit": "PCS"
      }
    ],
    "basePrice": 93000,
    "priceLabel": "Rp93.000"
  },
  {
    "id": "391",
    "name": "ENGSEL DOLPHIN 3' BESI",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20DOLPHIN%203'%20BESI",
    "variants": [
      {
        "sku": "ENG DPH3",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "392",
    "name": "ENGSEL DOLPHIN 4' BESI",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20DOLPHIN%204'%20BESI",
    "variants": [
      {
        "sku": "ENG DPH4",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "393",
    "name": "ENGSEL DOLPHIN 5' BESI",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20DOLPHIN%205'%20BESI",
    "variants": [
      {
        "sku": "ENG DPH5",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "394",
    "name": "ENGSEL DOLPHIN SS 3'",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20DOLPHIN%20SS%203'",
    "variants": [
      {
        "sku": "ENG DPHSS3",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "395",
    "name": "ENGSEL DOLPHIN SS 4'",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20DOLPHIN%20SS%204'",
    "variants": [
      {
        "sku": "ENG DPHSS4",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "396",
    "name": "ENGSEL DOLPHIN SS 5'",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20DOLPHIN%20SS%205'",
    "variants": [
      {
        "sku": "ENG DPHSS5",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "397",
    "name": "ENGSEL GDO 3 SN",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GDO%203%20SN",
    "variants": [
      {
        "sku": "ENG GDO3SN",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "398",
    "name": "ENGSEL GDO 4 SN",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GDO%204%20SN",
    "variants": [
      {
        "sku": "ENG GDO4SN",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "399",
    "name": "ENGSEL GOMEO 3' BLACK",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%203'%20BLACK",
    "variants": [
      {
        "sku": "ENG GM 3BLK",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "400",
    "name": "ENGSEL GOMEO 3' GP",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%203'%20GP",
    "variants": [
      {
        "sku": "ENG GM3GP",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "401",
    "name": "ENGSEL GOMEO 3' SN",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%203'%20SN",
    "variants": [
      {
        "sku": "ENG GM3SN",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "402",
    "name": "ENGSEL GOMEO 4' BLACK",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%204'%20BLACK",
    "variants": [
      {
        "sku": "ENG GM 4BLK",
        "label": "PCS",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 22500,
    "priceLabel": "Rp22.500"
  },
  {
    "id": "403",
    "name": "ENGSEL GOMEO 4' GP",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%204'%20GP",
    "variants": [
      {
        "sku": "ENG GM4GP",
        "label": "PCS",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 22500,
    "priceLabel": "Rp22.500"
  },
  {
    "id": "404",
    "name": "ENGSEL GOMEO 4' SN",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%204'%20SN",
    "variants": [
      {
        "sku": "ENG GM4SN",
        "label": "PCS",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 22500,
    "priceLabel": "Rp22.500"
  },
  {
    "id": "405",
    "name": "ENGSEL GOMEO 5' BLACK",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%205'%20BLACK",
    "variants": [
      {
        "sku": "ENG GM 5BLK",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "406",
    "name": "ENGSEL GOMEO 5' GP",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%205'%20GP",
    "variants": [
      {
        "sku": "ENG GM5GP",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "407",
    "name": "ENGSEL GOMEO 5' SN",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GOMEO%205'%20SN",
    "variants": [
      {
        "sku": "ENG GM5SN",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "408",
    "name": "ENGSEL GRT 3' SN",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GRT%203'%20SN",
    "variants": [
      {
        "sku": "ENG GRT 3SN",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "409",
    "name": "ENGSEL GRT 4' GP",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GRT%204'%20GP",
    "variants": [
      {
        "sku": "ENG GRT 4GP",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "410",
    "name": "ENGSEL GRT 4' SN",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GRT%204'%20SN",
    "variants": [
      {
        "sku": "ENG GRT 4SN",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "411",
    "name": "ENGSEL GRT 5' SN",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20GRT%205'%20SN",
    "variants": [
      {
        "sku": "ENG GRT 5SN",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "412",
    "name": "ENGSEL H 110 X 55",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20H%20110%20X%2055",
    "variants": [
      {
        "sku": "MENGH11055",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "413",
    "name": "ENGSEL H 80 X 45",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20H%2080%20X%2045",
    "variants": [
      {
        "sku": "MENGH8045",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "414",
    "name": "ENGSEL HPP 3 GP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20HPP%203%20GP",
    "variants": [
      {
        "sku": "ENG HPP3GP",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "415",
    "name": "ENGSEL JENDELA 3\" BLACK ONAT",
    "category": "Umum",
    "brand": "ONAT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20JENDELA%203%22%20BLACK%20O",
    "variants": [
      {
        "sku": "MONENG01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "416",
    "name": "ENGSEL JENDELA 3\" GP AMANI",
    "category": "Umum",
    "brand": "AMANI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20JENDELA%203%22%20GP%20AMAN",
    "variants": [
      {
        "sku": "MAMENG01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "417",
    "name": "ENGSEL JENDELA 3\" GP GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20JENDELA%203%22%20GP%20GOME",
    "variants": [
      {
        "sku": "MGOENG13",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "418",
    "name": "ENGSEL OLIQ 3 SN",
    "category": "Umum",
    "brand": "OLIQ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20OLIQ%203%20SN",
    "variants": [
      {
        "sku": "ENG OLIQ3SN",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "419",
    "name": "ENGSEL PVC 5\" ELGLADIO",
    "category": "Umum",
    "brand": "ELGLADIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20PVC%205%22%20ELGLADIO",
    "variants": [
      {
        "sku": "MELENG01",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "420",
    "name": "ENGSEL SALON 9 PTH ESLON",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20SALON%209%20PTH%20ESLON",
    "variants": [
      {
        "sku": "ENG SLN 9 PTH",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "421",
    "name": "ENGSEL SENDOK BENGKOK MT16 HUBEN",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20SENDOK%20BENGKOK%20MT1",
    "variants": [
      {
        "sku": "MHUENG01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "422",
    "name": "ENGSEL SENDOK LURUS MT-0 HUBEN",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20SENDOK%20LURUS%20MT-0%20",
    "variants": [
      {
        "sku": "MHUENG02",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "423",
    "name": "ENGSEL SENDOK LURUS SM-0 HUBEN",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20SENDOK%20LURUS%20SM-0%20",
    "variants": [
      {
        "sku": "MHUENG04",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "424",
    "name": "ENGSEL SENDOK SLOWMO BENGKOK SM-16 HUBEN",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20SENDOK%20SLOWMO%20BENG",
    "variants": [
      {
        "sku": "MHUENG03",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "425",
    "name": "ENGSEL STAINLESS MULLER 3”",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20STAINLESS%20MULLER%203",
    "variants": [
      {
        "sku": "MMUENG01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "426",
    "name": "ENGSEL STAINLESS MULLER 4”",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20STAINLESS%20MULLER%204",
    "variants": [
      {
        "sku": "MMUENG02",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "427",
    "name": "ENGSEL STAINLESS MULLER 5”",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20STAINLESS%20MULLER%205",
    "variants": [
      {
        "sku": "MMUENG03",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "428",
    "name": "ENGSEL TIPIS 2.5 GP GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%202.5%20GP%20GOMEO",
    "variants": [
      {
        "sku": "ENG TPS 2.5 GM",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "429",
    "name": "ENGSEL TIPIS 2.5 GP MJP",
    "category": "Umum",
    "brand": "MJP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%202.5%20GP%20MJP",
    "variants": [
      {
        "sku": "ENG TPS 2.5",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "430",
    "name": "ENGSEL TIPIS 2.5\" RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%202.5%22%20RRT",
    "variants": [
      {
        "sku": "ENG TPS 2.5 RRT",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "431",
    "name": "ENGSEL TIPIS 2\" GP GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%202%22%20GP%20GOMEO",
    "variants": [
      {
        "sku": "ENG TPS2 GP",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "432",
    "name": "ENGSEL TIPIS 3\" GP GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%203%22%20GP%20GOMEO",
    "variants": [
      {
        "sku": "ENG TPS3 GP",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "433",
    "name": "ENGSEL TIPIS 3\" RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%203%22%20RRT",
    "variants": [
      {
        "sku": "ENG TPS 3 RRT",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "434",
    "name": "ENGSEL TIPIS IGM 3 SS",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%20IGM%203%20SS",
    "variants": [
      {
        "sku": "ENG TPS 3 SS",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "435",
    "name": "ENGSEL TIPIS S/S 2 1/2'' IGM",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%20S%2FS%202%201%2F2''%20",
    "variants": [
      {
        "sku": "MIGENG03",
        "label": "PSG",
        "price": 7000,
        "unit": "PSG"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "436",
    "name": "ENGSEL TIPIS S/S 2'' IGM",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TIPIS%20S%2FS%202''%20IGM",
    "variants": [
      {
        "sku": "MIGENG01",
        "label": "PSG",
        "price": 6000,
        "unit": "PSG"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "437",
    "name": "ENGSEL TREGO 3 GP",
    "category": "Umum",
    "brand": "TREGO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TREGO%203%20GP",
    "variants": [
      {
        "sku": "ENG TR3GP",
        "label": "PCS",
        "price": 98700,
        "unit": "PCS"
      }
    ],
    "basePrice": 98700,
    "priceLabel": "Rp98.700"
  },
  {
    "id": "438",
    "name": "ENGSEL TREGO 3 SN",
    "category": "Umum",
    "brand": "TREGO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TREGO%203%20SN",
    "variants": [
      {
        "sku": "ENG TR3SN",
        "label": "PCS",
        "price": 98700,
        "unit": "PCS"
      }
    ],
    "basePrice": 98700,
    "priceLabel": "Rp98.700"
  },
  {
    "id": "439",
    "name": "ENGSEL TREGO 4 SN",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TREGO%204%20SN",
    "variants": [
      {
        "sku": "ENG TR4SN",
        "label": "PCS",
        "price": 142410,
        "unit": "PCS"
      }
    ],
    "basePrice": 142410,
    "priceLabel": "Rp142.410"
  },
  {
    "id": "440",
    "name": "ENGSEL TREGO 5 SN",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ENGSEL%20TREGO%205%20SN",
    "variants": [
      {
        "sku": "ENG TR5SN",
        "label": "PCS",
        "price": 172490,
        "unit": "PCS"
      }
    ],
    "basePrice": 172490,
    "priceLabel": "Rp172.490"
  },
  {
    "id": "441",
    "name": "EXTENTION BAR 1/2” X 3” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EXTENTION%20BAR%201%2F2%E2%80%9D%20X%203%E2%80%9D%20T",
    "variants": [
      {
        "sku": "MTEEXT01",
        "label": "PCS",
        "price": 46000,
        "unit": "PCS"
      }
    ],
    "basePrice": 46000,
    "priceLabel": "Rp46.000"
  },
  {
    "id": "442",
    "name": "EXTENTION BAR 1/2” X 5” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EXTENTION%20BAR%201%2F2%E2%80%9D%20X%205%E2%80%9D%20T",
    "variants": [
      {
        "sku": "MTEEXT02",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "443",
    "name": "EXTENTION BAR 3/4” X 16” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=EXTENTION%20BAR%203%2F4%E2%80%9D%20X%2016%E2%80%9D%20",
    "variants": [
      {
        "sku": "MTEEXT03",
        "label": "PCS",
        "price": 305000,
        "unit": "PCS"
      }
    ],
    "basePrice": 305000,
    "priceLabel": "Rp305.000"
  },
  {
    "id": "444",
    "name": "FAN BELT MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FAN%20BELT%20MODERN",
    "variants": [
      {
        "sku": "MMOFAN01",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "445",
    "name": "FANTA STROBERI 250ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FANTA%20STROBERI%20250ML",
    "variants": [
      {
        "sku": "FNTST250",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "446",
    "name": "FEELER GAUGE 13 BLADES HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FEELER%20GAUGE%2013%20BLADES%20HA",
    "variants": [
      {
        "sku": "MHAFEE01",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "447",
    "name": "FEELER GAUGE MOLLAR 17 BLADES",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FEELER%20GAUGE%20MOLLAR%2017%20BL",
    "variants": [
      {
        "sku": "FEGAMOLL",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "448",
    "name": "FIBER TAPE 1' 30 M",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FIBER%20TAPE%201'%2030%20M",
    "variants": [
      {
        "sku": "FIBERTAPE",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "449",
    "name": "FIBERTAPE PROFIX",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FIBERTAPE%20PROFIX",
    "variants": [
      {
        "sku": "FIBERTAPE PR",
        "label": "PCS",
        "price": 2650,
        "unit": "PCS"
      }
    ],
    "basePrice": 2650,
    "priceLabel": "Rp2.650"
  },
  {
    "id": "450",
    "name": "FISHER S10 (10PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S10%20(10PCS)",
    "variants": [
      {
        "sku": "MNOFIS08",
        "label": "BKS",
        "price": 3000,
        "unit": "BKS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "451",
    "name": "FISHER S10 (BOX)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S10%20(BOX)",
    "variants": [
      {
        "sku": "MNOFIS04",
        "label": "PCS",
        "price": 130,
        "unit": "PCS"
      }
    ],
    "basePrice": 130,
    "priceLabel": "Rp130"
  },
  {
    "id": "452",
    "name": "FISHER S12 (10PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S12%20(10PCS)",
    "variants": [
      {
        "sku": "MNOFIS09",
        "label": "BKS",
        "price": 3500,
        "unit": "BKS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "453",
    "name": "FISHER S12 (BOX)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S12%20(BOX)",
    "variants": [
      {
        "sku": "MNOFIS05",
        "label": "PCS",
        "price": 130,
        "unit": "PCS"
      }
    ],
    "basePrice": 130,
    "priceLabel": "Rp130"
  },
  {
    "id": "454",
    "name": "FISHER S5 (10PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S5%20(10PCS)",
    "variants": [
      {
        "sku": "MNOFIS06",
        "label": "BKS",
        "price": 1500,
        "unit": "BKS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "455",
    "name": "FISHER S5 (BOX)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S5%20(BOX)",
    "variants": [
      {
        "sku": "MNOFIS01",
        "label": "PCS",
        "price": 75,
        "unit": "PCS"
      }
    ],
    "basePrice": 75,
    "priceLabel": "Rp75"
  },
  {
    "id": "456",
    "name": "FISHER S6 (10PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S6%20(10PCS)",
    "variants": [
      {
        "sku": "MFISS610",
        "label": "BKS",
        "price": 2000,
        "unit": "BKS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "457",
    "name": "FISHER S6 (BOX)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S6%20(BOX)",
    "variants": [
      {
        "sku": "MNOFIS02",
        "label": "PCS",
        "price": 90,
        "unit": "PCS"
      }
    ],
    "basePrice": 90,
    "priceLabel": "Rp90"
  },
  {
    "id": "458",
    "name": "FISHER S8 (10PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S8%20(10PCS)",
    "variants": [
      {
        "sku": "MNOFIS07",
        "label": "BKS",
        "price": 2500,
        "unit": "BKS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "459",
    "name": "FISHER S8 (BOX)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FISHER%20S8%20(BOX)",
    "variants": [
      {
        "sku": "MNOFIS03",
        "label": "PCS",
        "price": 110,
        "unit": "PCS"
      }
    ],
    "basePrice": 110,
    "priceLabel": "Rp110"
  },
  {
    "id": "460",
    "name": "FITTING GANTUNG 216L BROCO HITAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FITTING%20GANTUNG%20216L%20BROC",
    "variants": [
      {
        "sku": "MBRFIT01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "461",
    "name": "FITTING KOMBINASI 226L BROCO HITAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FITTING%20KOMBINASI%20226L%20BR",
    "variants": [
      {
        "sku": "MBRFIT03",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "462",
    "name": "FITTING PLAFON 210L BROCO",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FITTING%20PLAFON%20210L%20BROCO",
    "variants": [
      {
        "sku": "MBRFIT02",
        "label": "PCS",
        "price": 5500,
        "unit": "PCS"
      }
    ],
    "basePrice": 5500,
    "priceLabel": "Rp5.500"
  },
  {
    "id": "463",
    "name": "FLAME GUN GAS TORCH",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FLAME%20GUN%20GAS%20TORCH",
    "variants": [
      {
        "sku": "MFLAMGUN",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "464",
    "name": "FLAP DISC TAIYO 100",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FLAP%20DISC%20TAIYO%20100",
    "variants": [
      {
        "sku": "FLAPTA60",
        "label": "60",
        "price": 9000,
        "unit": "PCS"
      },
      {
        "sku": "FLAPTA80",
        "label": "80",
        "price": 9000,
        "unit": "PCS"
      },
      {
        "sku": "FLAPT100",
        "label": "100",
        "price": 9000,
        "unit": "PCS"
      },
      {
        "sku": "FLAPT120",
        "label": "120",
        "price": 9000,
        "unit": "PCS"
      },
      {
        "sku": "FLAPT150",
        "label": "150",
        "price": 9000,
        "unit": "PCS"
      },
      {
        "sku": "FLAPT180",
        "label": "180",
        "price": 9000,
        "unit": "PCS"
      },
      {
        "sku": "FLAPT240",
        "label": "240",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "465",
    "name": "FLOODLIGHT LUBY 503 100W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FLOODLIGHT%20LUBY%20503%20100W",
    "variants": [
      {
        "sku": "MLUFLO02",
        "label": "10W",
        "price": 52000,
        "unit": "PCS"
      },
      {
        "sku": "MLUFLO03",
        "label": "20W",
        "price": 71000,
        "unit": "PCS"
      },
      {
        "sku": "MLUFLO04",
        "label": "30W",
        "price": 92000,
        "unit": "PCS"
      },
      {
        "sku": "MLUFLO05",
        "label": "50W",
        "price": 131000,
        "unit": "PCS"
      },
      {
        "sku": "MLUFLO06",
        "label": "100W",
        "price": 216000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52000,
    "priceLabel": "Rp52.000 - Rp216.000"
  },
  {
    "id": "466",
    "name": "FLOODLIGHT LUBY 701 50W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FLOODLIGHT%20LUBY%20701%2050W",
    "variants": [
      {
        "sku": "MLUFLO01",
        "label": "PCS",
        "price": 310000,
        "unit": "PCS"
      }
    ],
    "basePrice": 310000,
    "priceLabel": "Rp310.000"
  },
  {
    "id": "467",
    "name": "FOOD CHOPPER MASPION MFC-202 GL",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOD%20CHOPPER%20MASPION%20MFC-",
    "variants": [
      {
        "sku": "MFCM202GL",
        "label": "PCS",
        "price": 360000,
        "unit": "PCS"
      }
    ],
    "basePrice": 360000,
    "priceLabel": "Rp360.000"
  },
  {
    "id": "468",
    "name": "FOOD PROCESSOR COSMOS FP-313",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOD%20PROCESSOR%20COSMOS%20FP-",
    "variants": [
      {
        "sku": "MFPCFP313",
        "label": "PCS",
        "price": 330000,
        "unit": "PCS"
      }
    ],
    "basePrice": 330000,
    "priceLabel": "Rp330.000"
  },
  {
    "id": "469",
    "name": "FOOD PROCESSOR COSMOS FP-32",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOD%20PROCESSOR%20COSMOS%20FP-",
    "variants": [
      {
        "sku": "MFPRCFP32",
        "label": "PCS",
        "price": 405000,
        "unit": "PCS"
      }
    ],
    "basePrice": 405000,
    "priceLabel": "Rp405.000"
  },
  {
    "id": "470",
    "name": "FOOT KLEP BEST 1\"",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOT%20KLEP%20BEST%201%22",
    "variants": [
      {
        "sku": "FTKLBST2",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "471",
    "name": "FOOT KLEP BEST 3/4",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOT%20KLEP%20BEST%203%2F4",
    "variants": [
      {
        "sku": "FTKLBST1",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "472",
    "name": "FOOT KLEP JUMBO 3/4 CAB",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOT%20KLEP%20JUMBO%203%2F4%20CAB",
    "variants": [
      {
        "sku": "FTKLJMB1",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "473",
    "name": "FOOT KLEP JUMBO 3/4 HANJIN",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOT%20KLEP%20JUMBO%203%2F4%20HANJI",
    "variants": [
      {
        "sku": "FTKLJMBH",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "474",
    "name": "FOOT KLEP KUNINGAN (JAPAN STYLE) 3/4\" HIOSHI PRO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOT%20KLEP%20KUNINGAN%20(JAPAN",
    "variants": [
      {
        "sku": "FOOT KL 3/4 HS",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "475",
    "name": "FOOT KLEP KUNINGAN 1/2\" (JAPAN STYLE) HIOSHI PRO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FOOT%20KLEP%20KUNINGAN%201%2F2%22%20(",
    "variants": [
      {
        "sku": "FOOT KL 1/2 HS",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "476",
    "name": "FRESTEA APPLE LEMONGRASS 350ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FRESTEA%20APPLE%20LEMONGRASS%20",
    "variants": [
      {
        "sku": "FRTAL350",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "477",
    "name": "FRESTEA BLACKCURRANT 350ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FRESTEA%20BLACKCURRANT%20350M",
    "variants": [
      {
        "sku": "FRTBL350",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "478",
    "name": "FRESTEA GREEN HONEY MINT 350ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FRESTEA%20GREEN%20HONEY%20MINT%20",
    "variants": [
      {
        "sku": "FRGHM350",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "479",
    "name": "FRESTEA JASMINE LYCHEE HONEY 350ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=FRESTEA%20JASMINE%20LYCHEE%20HO",
    "variants": [
      {
        "sku": "FRJLH350",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "480",
    "name": "GANCO KROX (DANDANG) 5 LB",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GANCO%20KROX%20(DANDANG)%205%20LB",
    "variants": [
      {
        "sku": "GC KROX",
        "label": "PCS",
        "price": 654750,
        "unit": "PCS"
      }
    ],
    "basePrice": 654750,
    "priceLabel": "Rp654.750"
  },
  {
    "id": "481",
    "name": "GARPU BESI MURAH",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GARPU%20BESI%20MURAH",
    "variants": [
      {
        "sku": "GARPUSS",
        "label": "PCS",
        "price": 1500,
        "unit": "PCS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "482",
    "name": "GAS PORTABLE TOKAI 235 GR",
    "category": "Rumah tangga",
    "brand": "TOKAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GAS%20PORTABLE%20TOKAI%20235%20GR",
    "variants": [
      {
        "sku": "MTOGAS01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "483",
    "name": "GAYUNG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GAYUNG%20HYPER",
    "variants": [
      {
        "sku": "MNOGAY01",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "484",
    "name": "GELAS PLASTIK LUCKY",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GELAS%20PLASTIK%20LUCKY",
    "variants": [
      {
        "sku": "GELPLLU",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "485",
    "name": "GEMBOK HITAM 20MM GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20HITAM%2020MM%20GRT",
    "variants": [
      {
        "sku": "MGRGEM01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "486",
    "name": "GEMBOK HITAM 25MM GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20HITAM%2025MM%20GRT",
    "variants": [
      {
        "sku": "MGRGEM02",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "487",
    "name": "GEMBOK HITAM 30MM GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20HITAM%2030MM%20GRT",
    "variants": [
      {
        "sku": "MGRGEM03",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "488",
    "name": "GEMBOK HITAM 40MM GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20HITAM%2040MM%20GRT",
    "variants": [
      {
        "sku": "MGRGEM04",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "489",
    "name": "GEMBOK HITAM 50MM GLX",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20HITAM%2050MM%20GLX",
    "variants": [
      {
        "sku": "MGLGEM02",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "490",
    "name": "GEMBOK HITAM 60MM GLX",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20HITAM%2060MM%20GLX",
    "variants": [
      {
        "sku": "GMB HTM50 GLX",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "491",
    "name": "GEMBOK JODOH 30 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2030%20PANJANG%20H",
    "variants": [
      {
        "sku": "GMJD 30 PJG",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "492",
    "name": "GEMBOK JODOH 30 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2030%20PENDEK%20HI",
    "variants": [
      {
        "sku": "GMJD 30 PDK",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "493",
    "name": "GEMBOK JODOH 40 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2040%20PANJANG%20H",
    "variants": [
      {
        "sku": "GMJD 40 PJG",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "494",
    "name": "GEMBOK JODOH 40 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2040%20PENDEK%20HI",
    "variants": [
      {
        "sku": "GMJD 40 PDK",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "495",
    "name": "GEMBOK JODOH 50 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2050%20PANJANG%20H",
    "variants": [
      {
        "sku": "GMJD 50 PJG",
        "label": "PCS",
        "price": 52000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52000,
    "priceLabel": "Rp52.000"
  },
  {
    "id": "496",
    "name": "GEMBOK JODOH 50 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2050%20PENDEK%20HI",
    "variants": [
      {
        "sku": "GMJD 50 PDK",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "497",
    "name": "GEMBOK JODOH 60 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2060%20PANJANG%20H",
    "variants": [
      {
        "sku": "GMJD 60 PJG",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "498",
    "name": "GEMBOK JODOH 60 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20JODOH%2060%20PENDEK%20HI",
    "variants": [
      {
        "sku": "GMJD 60 PDK",
        "label": "PCS",
        "price": 58000,
        "unit": "PCS"
      }
    ],
    "basePrice": 58000,
    "priceLabel": "Rp58.000"
  },
  {
    "id": "499",
    "name": "GEMBOK KECIL ECO WARNA 20 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KECIL%20ECO%20WARNA%2020",
    "variants": [
      {
        "sku": "GMB KC ECO20",
        "label": "PCS",
        "price": 68400,
        "unit": "PCS"
      }
    ],
    "basePrice": 68400,
    "priceLabel": "Rp68.400"
  },
  {
    "id": "500",
    "name": "GEMBOK KECIL ECO WARNA 25 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KECIL%20ECO%20WARNA%2025",
    "variants": [
      {
        "sku": "GMB KC ECO25",
        "label": "PCS",
        "price": 72675,
        "unit": "PCS"
      }
    ],
    "basePrice": 72675,
    "priceLabel": "Rp72.675"
  },
  {
    "id": "501",
    "name": "GEMBOK KECIL ECO WARNA 30 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KECIL%20ECO%20WARNA%2030",
    "variants": [
      {
        "sku": "GMB KC ECO30",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "502",
    "name": "GEMBOK KECIL ECO WARNA 40 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KECIL%20ECO%20WARNA%2040",
    "variants": [
      {
        "sku": "GMB KC ECO40",
        "label": "PCS",
        "price": 118060.53,
        "unit": "PCS"
      }
    ],
    "basePrice": 118060.53,
    "priceLabel": "Rp118.060,53"
  },
  {
    "id": "503",
    "name": "GEMBOK KOPER WARNA",
    "category": "Umum",
    "brand": "BONUCCI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KOPER%20WARNA",
    "variants": [
      {
        "sku": "MBOGEM01",
        "label": "SET",
        "price": 40000,
        "unit": "SET"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "504",
    "name": "GEMBOK KUNING 20MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2020MM%20HPP",
    "variants": [
      {
        "sku": "MHPGEM01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "505",
    "name": "GEMBOK KUNING 25MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2025MM%20HPP",
    "variants": [
      {
        "sku": "MHPGEM02",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "506",
    "name": "GEMBOK KUNING 30MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2030MM%20KEEP",
    "variants": [
      {
        "sku": "MKEGEM01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "507",
    "name": "GEMBOK KUNING 30MM NISHIO",
    "category": "Umum",
    "brand": "NISHIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2030MM%20NISHIO",
    "variants": [
      {
        "sku": "MNIGEM01",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "508",
    "name": "GEMBOK KUNING 40MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2040MM%20KEEP",
    "variants": [
      {
        "sku": "MKEGEM02",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "509",
    "name": "GEMBOK KUNING 40MM NISHIO",
    "category": "Umum",
    "brand": "NISHIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2040MM%20NISHIO",
    "variants": [
      {
        "sku": "MNIGEM02",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "510",
    "name": "GEMBOK KUNING 50MM NISHIO",
    "category": "Umum",
    "brand": "NISHIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2050MM%20NISHIO",
    "variants": [
      {
        "sku": "MNIGEM03",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "511",
    "name": "GEMBOK KUNING 60MM NISHIO",
    "category": "Umum",
    "brand": "NISHIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20KUNING%2060MM%20NISHIO",
    "variants": [
      {
        "sku": "MNIGEM04",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "512",
    "name": "GEMBOK LEHER PANJANG 30MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2030MM",
    "variants": [
      {
        "sku": "MHPGEM03",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "513",
    "name": "GEMBOK LEHER PANJANG 30MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2030MM",
    "variants": [
      {
        "sku": "MVEGEM01",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "514",
    "name": "GEMBOK LEHER PANJANG 40MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2040MM",
    "variants": [
      {
        "sku": "MHPGEM04",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "515",
    "name": "GEMBOK LEHER PANJANG 40MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2040MM",
    "variants": [
      {
        "sku": "MKEGEM03",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "516",
    "name": "GEMBOK LEHER PANJANG 40MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2040MM",
    "variants": [
      {
        "sku": "MVEGEM02",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "517",
    "name": "GEMBOK LEHER PANJANG 50MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2050MM",
    "variants": [
      {
        "sku": "MHPGEM05",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "518",
    "name": "GEMBOK LEHER PANJANG 50MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2050MM",
    "variants": [
      {
        "sku": "MKEGEM04",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "519",
    "name": "GEMBOK LEHER PANJANG 50MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2050MM",
    "variants": [
      {
        "sku": "MVEGEM03",
        "label": "PCS",
        "price": 19000,
        "unit": "PCS"
      }
    ],
    "basePrice": 19000,
    "priceLabel": "Rp19.000"
  },
  {
    "id": "520",
    "name": "GEMBOK LEHER PANJANG 60MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2060MM",
    "variants": [
      {
        "sku": "MHPGEM06",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "521",
    "name": "GEMBOK LEHER PANJANG 60MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2060MM",
    "variants": [
      {
        "sku": "MKEGEM05",
        "label": "PCS",
        "price": 175000,
        "unit": "PCS"
      }
    ],
    "basePrice": 175000,
    "priceLabel": "Rp175.000"
  },
  {
    "id": "522",
    "name": "GEMBOK LEHER PANJANG 60MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PANJANG%2060MM",
    "variants": [
      {
        "sku": "MVEGEM04",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "523",
    "name": "GEMBOK LEHER PENDEK 30MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2030MM%20",
    "variants": [
      {
        "sku": "MHPGEM07",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "524",
    "name": "GEMBOK LEHER PENDEK 30MM VERRIZ / OLIQ",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2030MM%20",
    "variants": [
      {
        "sku": "MNOGEM04",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "525",
    "name": "GEMBOK LEHER PENDEK 40MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2040MM%20",
    "variants": [
      {
        "sku": "MHPGEM08",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "526",
    "name": "GEMBOK LEHER PENDEK 40MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2040MM%20",
    "variants": [
      {
        "sku": "MKEGEM06",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "527",
    "name": "GEMBOK LEHER PENDEK 40MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2040MM%20",
    "variants": [
      {
        "sku": "MVEGEM05",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "528",
    "name": "GEMBOK LEHER PENDEK 50MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2050MM%20",
    "variants": [
      {
        "sku": "MHPGEM09",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "529",
    "name": "GEMBOK LEHER PENDEK 50MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2050MM%20",
    "variants": [
      {
        "sku": "MKEGEM07",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "530",
    "name": "GEMBOK LEHER PENDEK 50MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2050MM%20",
    "variants": [
      {
        "sku": "MVEGEM06",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "531",
    "name": "GEMBOK LEHER PENDEK 60MM HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2060MM%20",
    "variants": [
      {
        "sku": "MHPGEM10",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "532",
    "name": "GEMBOK LEHER PENDEK 60MM KEEP",
    "category": "Umum",
    "brand": "KEEP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2060MM%20",
    "variants": [
      {
        "sku": "MKEGEM08",
        "label": "PCS",
        "price": 175000,
        "unit": "PCS"
      }
    ],
    "basePrice": 175000,
    "priceLabel": "Rp175.000"
  },
  {
    "id": "533",
    "name": "GEMBOK LEHER PENDEK 60MM VERRIZ",
    "category": "Umum",
    "brand": "VERRIZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20LEHER%20PENDEK%2060MM%20",
    "variants": [
      {
        "sku": "MVEGEM07",
        "label": "PCS",
        "price": 21000,
        "unit": "PCS"
      }
    ],
    "basePrice": 21000,
    "priceLabel": "Rp21.000"
  },
  {
    "id": "534",
    "name": "GEMBOK OVAL 30 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2030%20PANJANG%20HI",
    "variants": [
      {
        "sku": "GM OV PJG 30",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "535",
    "name": "GEMBOK OVAL 30 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2030%20PENDEK%20HIO",
    "variants": [
      {
        "sku": "GM OV PDK 30",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "536",
    "name": "GEMBOK OVAL 40 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2040%20PANJANG%20HI",
    "variants": [
      {
        "sku": "GM OV PJG 40",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "537",
    "name": "GEMBOK OVAL 40 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2040%20PENDEK%20HIO",
    "variants": [
      {
        "sku": "GM OV PDK 40",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "538",
    "name": "GEMBOK OVAL 50 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2050%20PANJANG%20HI",
    "variants": [
      {
        "sku": "GM OV PJG 50",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "539",
    "name": "GEMBOK OVAL 50 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2050%20PENDEK%20HIO",
    "variants": [
      {
        "sku": "GM OV PDK 50",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "540",
    "name": "GEMBOK OVAL 60 PANJANG HIOSHI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2060%20PANJANG%20HI",
    "variants": [
      {
        "sku": "GM OV PJG 60",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "541",
    "name": "GEMBOK OVAL 60 PENDEK HIOSHI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEMBOK%20OVAL%2060%20PENDEK%20HIO",
    "variants": [
      {
        "sku": "GM OV PDK 60",
        "label": "PCS",
        "price": 57000,
        "unit": "PCS"
      }
    ],
    "basePrice": 57000,
    "priceLabel": "Rp57.000"
  },
  {
    "id": "542",
    "name": "GERGAJI BATA RINGAN 18\" (GG KAYU) HIOSHI HD",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20BATA%20RINGAN%2018%22%20(",
    "variants": [
      {
        "sku": "GR BR HD18 HS",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "543",
    "name": "GERGAJI BESI 12' ENGKOL 001E",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20BESI%2012'%20ENGKOL%200",
    "variants": [
      {
        "sku": "GRBS EKL 12",
        "label": "PCS",
        "price": 277875,
        "unit": "PCS"
      }
    ],
    "basePrice": 277875,
    "priceLabel": "Rp277.875"
  },
  {
    "id": "544",
    "name": "GERGAJI BESI GG KARET 001A",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20BESI%20GG%20KARET%20001",
    "variants": [
      {
        "sku": "GRBS KRT 001A",
        "label": "PCS",
        "price": 235125,
        "unit": "PCS"
      }
    ],
    "basePrice": 235125,
    "priceLabel": "Rp235.125"
  },
  {
    "id": "545",
    "name": "GERGAJI GOROK 18” ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20GOROK%2018%E2%80%9D%20ESSEN",
    "variants": [
      {
        "sku": "MESGER01",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "546",
    "name": "GERGAJI GOROK SERI GRT 14-16-18",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20GOROK%20SERI%20GRT%2014",
    "variants": [
      {
        "sku": "GR SERI GRT",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "547",
    "name": "GERGAJI KOPI GG BESI 14 TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20KOPI%20GG%20BESI%2014%20T",
    "variants": [
      {
        "sku": "GR KOPI BS 14 TK",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "548",
    "name": "GERGAJI KOPI GOROK 15\" (GG PIPA) HIOSHI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20KOPI%20GOROK%2015%22%20(G",
    "variants": [
      {
        "sku": "GR KOPI 15",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "549",
    "name": "GERGAJI LANCIP 14” TJAP MATA",
    "category": "Umum",
    "brand": "TJAP MATA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20LANCIP%2014%E2%80%9D%20TJAP%20M",
    "variants": [
      {
        "sku": "MTJGER01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "550",
    "name": "GERGAJI SANDFLEX",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GERGAJI%20SANDFLEX",
    "variants": [
      {
        "sku": "GRGSAND",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "551",
    "name": "GEROBAK ANGKONG BESI KODACHI",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEROBAK%20ANGKONG%20BESI%20KODA",
    "variants": [
      {
        "sku": "GERBEKOD",
        "label": "PCS",
        "price": 565000,
        "unit": "PCS"
      }
    ],
    "basePrice": 565000,
    "priceLabel": "Rp565.000"
  },
  {
    "id": "552",
    "name": "GEROBAK ARTCO MERAH ORIGINAL",
    "category": "Umum",
    "brand": "ARCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEROBAK%20ARTCO%20MERAH%20ORIGI",
    "variants": [
      {
        "sku": "GRARCO NI",
        "label": "PCS",
        "price": 700000,
        "unit": "PCS"
      }
    ],
    "basePrice": 700000,
    "priceLabel": "Rp700.000"
  },
  {
    "id": "553",
    "name": "GEROBAK BESI GDO",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEROBAK%20BESI%20GDO",
    "variants": [
      {
        "sku": "GRBKBGDO",
        "label": "PCS",
        "price": 550000,
        "unit": "PCS"
      }
    ],
    "basePrice": 550000,
    "priceLabel": "Rp550.000"
  },
  {
    "id": "554",
    "name": "GEROBAK BESI ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEROBAK%20BESI%20ISCO",
    "variants": [
      {
        "sku": "GRISCO BS TBL",
        "label": "PCS",
        "price": 580000,
        "unit": "PCS"
      }
    ],
    "basePrice": 580000,
    "priceLabel": "Rp580.000"
  },
  {
    "id": "555",
    "name": "GEROBAK PVC ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GEROBAK%20PVC%20ISCO",
    "variants": [
      {
        "sku": "GRISCO PVC",
        "label": "PCS",
        "price": 430000,
        "unit": "PCS"
      }
    ],
    "basePrice": 430000,
    "priceLabel": "Rp430.000"
  },
  {
    "id": "556",
    "name": "GLAZING MP BLACK (LEM BOTOL) 260ML",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GLAZING%20MP%20BLACK%20(LEM%20BOT",
    "variants": [
      {
        "sku": "LEM GLAZ BL",
        "label": "PCS",
        "price": 25500,
        "unit": "PCS"
      }
    ],
    "basePrice": 25500,
    "priceLabel": "Rp25.500"
  },
  {
    "id": "557",
    "name": "GLAZING MP WHITE (LEM BOTOL) 260ML",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GLAZING%20MP%20WHITE%20(LEM%20BOT",
    "variants": [
      {
        "sku": "LEM GLAZ WH",
        "label": "PCS",
        "price": 25500,
        "unit": "PCS"
      }
    ],
    "basePrice": 25500,
    "priceLabel": "Rp25.500"
  },
  {
    "id": "558",
    "name": "GLUE GUN 60W KENMASTER",
    "category": "Umum",
    "brand": "KENMASTER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GLUE%20GUN%2060W%20KENMASTER",
    "variants": [
      {
        "sku": "MKEGLU01",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "559",
    "name": "GLUE STICK BESAR (3 PCS)",
    "category": "Umum",
    "brand": "ONE DROP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GLUE%20STICK%20BESAR%20(3%20PCS)",
    "variants": [
      {
        "sku": "GL STICK B",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "560",
    "name": "GLUE STICK KECIL (4 PCS)",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GLUE%20STICK%20KECIL%20(4%20PCS)",
    "variants": [
      {
        "sku": "GL STICK",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "561",
    "name": "GOROK / GERGAJI KAYU MANTAP 14 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20%2F%20GERGAJI%20KAYU%20MANT",
    "variants": [
      {
        "sku": "GR KY MNTP14",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "562",
    "name": "GOROK / GERGAJI KAYU MANTAP 16 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20%2F%20GERGAJI%20KAYU%20MANT",
    "variants": [
      {
        "sku": "GR KY MNTP16",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "563",
    "name": "GOROK / GERGAJI KAYU MANTAP 18 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20%2F%20GERGAJI%20KAYU%20MANT",
    "variants": [
      {
        "sku": "GR KY MNTP18",
        "label": "PCS",
        "price": 248216,
        "unit": "PCS"
      }
    ],
    "basePrice": 248216,
    "priceLabel": "Rp248.216"
  },
  {
    "id": "564",
    "name": "GOROK / GERGAJI KAYU MANTAP SERI HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20%2F%20GERGAJI%20KAYU%20MANT",
    "variants": [
      {
        "sku": "GR KY MNTP SERI",
        "label": "PCS",
        "price": 241224,
        "unit": "PCS"
      }
    ],
    "basePrice": 241224,
    "priceLabel": "Rp241.224"
  },
  {
    "id": "565",
    "name": "GOROK / GERGAJI KOPI (GG KAYU) 14\" HIOSHI HD",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20%2F%20GERGAJI%20KOPI%20(GG%20",
    "variants": [
      {
        "sku": "GR KOPI HD14",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "566",
    "name": "GOROK BATA RINGAN HEBEL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20BATA%20RINGAN%20HEBEL",
    "variants": [
      {
        "sku": "MNOGOR03",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "567",
    "name": "GOROK BATA RINGAN HEBEL 18”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20BATA%20RINGAN%20HEBEL%201",
    "variants": [
      {
        "sku": "MNOGOR02",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "568",
    "name": "GOROK GOMEO 18” (KAYU + KARET)",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20GOMEO%2018%E2%80%9D%20(KAYU%20%2B%20K",
    "variants": [
      {
        "sku": "MGOGOR01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "569",
    "name": "GOROK KARET ORANGE 18\" YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20KARET%20ORANGE%2018%22%20YU",
    "variants": [
      {
        "sku": "GR 18 YS",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "570",
    "name": "GOROK KAYU 18' EXTREME HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20KAYU%2018'%20EXTREME%20HI",
    "variants": [
      {
        "sku": "GR HS 18EX",
        "label": "PCS",
        "price": 34616.52,
        "unit": "PCS"
      }
    ],
    "basePrice": 34616.52,
    "priceLabel": "Rp34.616,52"
  },
  {
    "id": "571",
    "name": "GOROK KOPI CAB SAMURAI",
    "category": "Umum",
    "brand": "CAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20KOPI%20CAB%20SAMURAI",
    "variants": [
      {
        "sku": "GR KOPI CAB",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "572",
    "name": "GOROK SCHLIEPER 18”",
    "category": "Umum",
    "brand": "SCHLIEPER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20SCHLIEPER%2018%E2%80%9D",
    "variants": [
      {
        "sku": "MSCGOR03",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "573",
    "name": "GOROK SCHLIEPER 20”",
    "category": "Umum",
    "brand": "SCHLIEPER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20SCHLIEPER%2020%E2%80%9D",
    "variants": [
      {
        "sku": "MSCGOR04",
        "label": "PCS",
        "price": 150000,
        "unit": "PCS"
      }
    ],
    "basePrice": 150000,
    "priceLabel": "Rp150.000"
  },
  {
    "id": "574",
    "name": "GOROK SERI AWS 14-16-18",
    "category": "Umum",
    "brand": "AWS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20SERI%20AWS%2014-16-18",
    "variants": [
      {
        "sku": "GR SERI AWS",
        "label": "PCS",
        "price": 195000,
        "unit": "PCS"
      }
    ],
    "basePrice": 195000,
    "priceLabel": "Rp195.000"
  },
  {
    "id": "575",
    "name": "GOROK SERI HIOSHI 14-18",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20SERI%20HIOSHI%2014-18",
    "variants": [
      {
        "sku": "GR SERI HS",
        "label": "PCS",
        "price": 223250,
        "unit": "PCS"
      }
    ],
    "basePrice": 223250,
    "priceLabel": "Rp223.250"
  },
  {
    "id": "576",
    "name": "GOROK SET 3 PCS (14,16,18)",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20SET%203%20PCS%20(14%2C16%2C18",
    "variants": [
      {
        "sku": "MNOGOR01",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "577",
    "name": "GOROK VEGAZ 14”",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GOROK%20VEGAZ%2014%E2%80%9D",
    "variants": [
      {
        "sku": "MVEGOR02",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "578",
    "name": "GRAJI BATA RINGAN / GOROK HEBEL GOMEO 18\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRAJI%20BATA%20RINGAN%20%2F%20GOROK",
    "variants": [
      {
        "sku": "GR HB 18",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "579",
    "name": "GRAJI DOBEL MYROS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRAJI%20DOBEL%20MYROS",
    "variants": [
      {
        "sku": "GR DBLMY",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "580",
    "name": "GRAJI GOROK GOMEO 18",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRAJI%20GOROK%20GOMEO%2018",
    "variants": [
      {
        "sku": "GR GM 18",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "581",
    "name": "GRENDEL ALM 2'' MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20ALM%202''%20MULLER",
    "variants": [
      {
        "sku": "MMUGRE01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "582",
    "name": "GRENDEL ALM 3'' MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20ALM%203''%20MULLER",
    "variants": [
      {
        "sku": "MMUGRE02",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "583",
    "name": "GRENDEL ALM 3\" GP HSJ",
    "category": "Umum",
    "brand": "HSJ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20ALM%203%22%20GP%20HSJ",
    "variants": [
      {
        "sku": "MHSGRE01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "584",
    "name": "GRENDEL ALM 4'' MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20ALM%204''%20MULLER",
    "variants": [
      {
        "sku": "MMUGRE03",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "585",
    "name": "Grendel Babet 2” Kuning",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=Grendel%20Babet%202%E2%80%9D%20Kuning",
    "variants": [
      {
        "sku": "GRDBB2GP",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "586",
    "name": "GRENDEL BABET 2\" PUTIH",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20BABET%202%22%20PUTIH",
    "variants": [
      {
        "sku": "GRDBBT2P",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "587",
    "name": "GRENDEL BABET 3” PUTIH",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20BABET%203%E2%80%9D%20PUTIH",
    "variants": [
      {
        "sku": "GRDBB3P",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "588",
    "name": "GRENDEL BULAT HITAM 6",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20BULAT%20HITAM%206",
    "variants": [
      {
        "sku": "GBH 6",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "589",
    "name": "GRENDEL BULAT OCP 2' KURA",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20BULAT%20OCP%202'%20KURA",
    "variants": [
      {
        "sku": "GB OCP2",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "590",
    "name": "GRENDEL BULAT OCP 3' KURA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20BULAT%20OCP%203'%20KURA",
    "variants": [
      {
        "sku": "GB OCP3",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "591",
    "name": "GRENDEL BULAT OCP 4' KURA",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20BULAT%20OCP%204'%20KURA",
    "variants": [
      {
        "sku": "GB OCP4",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "592",
    "name": "GRENDEL DP 10'' KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%2010''%20KZK",
    "variants": [
      {
        "sku": "MKZGRE08",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "593",
    "name": "GRENDEL DP 12' KZK",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%2012'%20KZK",
    "variants": [
      {
        "sku": "MKZGRE12",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "594",
    "name": "GRENDEL DP 2'' KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%202''%20KZK",
    "variants": [
      {
        "sku": "MKZGRE02",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "595",
    "name": "GRENDEL DP 3' KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%203'%20KZK",
    "variants": [
      {
        "sku": "GR DP 3",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "596",
    "name": "GRENDEL DP 4' KZK",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%204'%20KZK",
    "variants": [
      {
        "sku": "GR DP 4",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "597",
    "name": "GRENDEL DP 5'' KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%205''%20KZK",
    "variants": [
      {
        "sku": "MKZGRE05",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "598",
    "name": "GRENDEL DP 6'' KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%206''%20KZK",
    "variants": [
      {
        "sku": "MKZGRE06",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "599",
    "name": "GRENDEL DP 8'' KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20DP%208''%20KZK",
    "variants": [
      {
        "sku": "MKZGRE07",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "600",
    "name": "GRENDEL JEPIT COKLAT KURA",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20JEPIT%20COKLAT%20KURA",
    "variants": [
      {
        "sku": "GJ CKLT KR",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "601",
    "name": "GRENDEL JEPIT PUTIH KURA",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20JEPIT%20PUTIH%20KURA",
    "variants": [
      {
        "sku": "GJ PTH KR",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "602",
    "name": "GRENDEL OTOMATIS 2\" CAB",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20OTOMATIS%202%22%20CAB",
    "variants": [
      {
        "sku": "GRDOTCAB",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "603",
    "name": "GRENDEL OVERVAL 2\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20OVERVAL%202%22%20GOMEO",
    "variants": [
      {
        "sku": "GO 2 GM",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "604",
    "name": "GRENDEL OVERVAL 2\" PUTIH KURA",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20OVERVAL%202%22%20PUTIH%20",
    "variants": [
      {
        "sku": "GO 2 PTH KR",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "605",
    "name": "GRENDEL OVERVAL 3\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20OVERVAL%203%22%20GOMEO",
    "variants": [
      {
        "sku": "GO 3 GM",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "606",
    "name": "GRENDEL PER COKLAT REYNER",
    "category": "Umum",
    "brand": "REYNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20PER%20COKLAT%20REYNER",
    "variants": [
      {
        "sku": "MREGRE01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "607",
    "name": "GRENDEL PER KUNING REYNER",
    "category": "Umum",
    "brand": "REYNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20PER%20KUNING%20REYNER",
    "variants": [
      {
        "sku": "MREGRE03",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "608",
    "name": "GRENDEL PER PUTIH REYNER",
    "category": "Umum",
    "brand": "REYNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20PER%20PUTIH%20REYNER",
    "variants": [
      {
        "sku": "MREGRE02",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "609",
    "name": "GRENDEL PER SILVER REYNER",
    "category": "Umum",
    "brand": "REYNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20PER%20SILVER%20REYNER",
    "variants": [
      {
        "sku": "MREGRE04",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "610",
    "name": "GRENDEL PVC",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20PVC",
    "variants": [
      {
        "sku": "MNOGRE03",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "611",
    "name": "GRENDEL S/S 18'' BELOCA",
    "category": "Umum",
    "brand": "BELOCA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20S%2FS%2018''%20BELOCA",
    "variants": [
      {
        "sku": "MBEGRE01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "612",
    "name": "GRENDEL S/S 24'' BELOCA",
    "category": "Umum",
    "brand": "BELOCA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20S%2FS%2024''%20BELOCA",
    "variants": [
      {
        "sku": "MBEGRE02",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "613",
    "name": "GRENDEL STAINLESS 10\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%2010%22%20GOM",
    "variants": [
      {
        "sku": "GR SS10 NI",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "614",
    "name": "GRENDEL STAINLESS 12\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%2012%22%20GOM",
    "variants": [
      {
        "sku": "GR SS12 NI",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "615",
    "name": "GRENDEL STAINLESS 2\" DOLPHIN",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%202%22%20DOLP",
    "variants": [
      {
        "sku": "GR SS2",
        "label": "PCS",
        "price": 46545.45,
        "unit": "PCS"
      }
    ],
    "basePrice": 46545.45,
    "priceLabel": "Rp46.545,45"
  },
  {
    "id": "616",
    "name": "GRENDEL STAINLESS 2\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%202%22%20GOME",
    "variants": [
      {
        "sku": "GR SS2 NI",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "617",
    "name": "GRENDEL STAINLESS 2\" OVAL GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%202%22%20OVAL",
    "variants": [
      {
        "sku": "GR SS2 OVAL GM",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "618",
    "name": "GRENDEL STAINLESS 3\" DOLPHIN",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%203%22%20DOLP",
    "variants": [
      {
        "sku": "GR SS3",
        "label": "PCS",
        "price": 60000.01,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000.01,
    "priceLabel": "Rp60.000,01"
  },
  {
    "id": "619",
    "name": "GRENDEL STAINLESS 3\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%203%22%20GOME",
    "variants": [
      {
        "sku": "GR SS3 NI",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "620",
    "name": "GRENDEL STAINLESS 3\" OVAL GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%203%22%20OVAL",
    "variants": [
      {
        "sku": "GR SS3 OVAL GM",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "621",
    "name": "GRENDEL STAINLESS 4\" DOLPHIN",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%204%22%20DOLP",
    "variants": [
      {
        "sku": "GR SS4",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "622",
    "name": "GRENDEL STAINLESS 4\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%204%22%20GOME",
    "variants": [
      {
        "sku": "GR SS4 NI",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "623",
    "name": "GRENDEL STAINLESS 4\" OVAL GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%204%22%20OVAL",
    "variants": [
      {
        "sku": "GR SS4 OVAL GM",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "624",
    "name": "GRENDEL STAINLESS 6\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%206%22%20GOME",
    "variants": [
      {
        "sku": "GR SS6 NI",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "625",
    "name": "GRENDEL STAINLESS 6\" OVAL GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%206%22%20OVAL",
    "variants": [
      {
        "sku": "GR SS6 OVAL GM",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "626",
    "name": "GRENDEL STAINLESS 8\" GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20STAINLESS%208%22%20GOME",
    "variants": [
      {
        "sku": "GR SS8 NI",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "627",
    "name": "GRENDEL TANAM 6''+12'' S/S MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRENDEL%20TANAM%206''%2B12''%20S%2F",
    "variants": [
      {
        "sku": "MMUGRE04",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "628",
    "name": "GRINDING WHEEL 4\"(BATU SLEP) CUTTING SLEP",
    "category": "Umum",
    "brand": "WD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GRINDING%20WHEEL%204%22(BATU%20SL",
    "variants": [
      {
        "sku": "GRINDWD 4",
        "label": "PCS",
        "price": 4976.68,
        "unit": "PCS"
      }
    ],
    "basePrice": 4976.68,
    "priceLabel": "Rp4.976,68"
  },
  {
    "id": "629",
    "name": "GULUNGAN KABEL / SELANG",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GULUNGAN%20KABEL%20%2F%20SELANG",
    "variants": [
      {
        "sku": "GULKASLG",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "630",
    "name": "GUNTING DAHAN HPP",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20DAHAN%20HPP",
    "variants": [
      {
        "sku": "GNT DH HPPS8",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "631",
    "name": "GUNTING HOLO 10 VEGAZ",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20HOLO%2010%20VEGAZ",
    "variants": [
      {
        "sku": "GNT HL10 VG",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "632",
    "name": "GUNTING HOLO CRV 10\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20HOLO%20CRV%2010%22%20HIOS",
    "variants": [
      {
        "sku": "GNT HOLO 10",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "633",
    "name": "GUNTING HOLO HEAVY DUTY CAMEL",
    "category": "Umum",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20HOLO%20HEAVY%20DUTY%20C",
    "variants": [
      {
        "sku": "GNTGHOLO",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "634",
    "name": "GUNTING HOLO REG CAMEL",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20HOLO%20REG%20CAMEL",
    "variants": [
      {
        "sku": "MCAGUN02",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "635",
    "name": "GUNTING HOLO TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20HOLO%20TORA",
    "variants": [
      {
        "sku": "GNT HL TORA",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "636",
    "name": "GUNTING HOLO WANLY 10'",
    "category": "Alat tukang",
    "brand": "WANLY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20HOLO%20WANLY%2010'",
    "variants": [
      {
        "sku": "MWAGUN01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "637",
    "name": "GUNTING KAWAT / BETON HD36",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20KAWAT%20%2F%20BETON%20HD3",
    "variants": [
      {
        "sku": "GNTKWT HD36",
        "label": "PCS",
        "price": 182192.2,
        "unit": "PCS"
      }
    ],
    "basePrice": 182192.2,
    "priceLabel": "Rp182.192,2"
  },
  {
    "id": "638",
    "name": "GUNTING KAWAT EXTREME 30 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20KAWAT%20EXTREME%2030%20",
    "variants": [
      {
        "sku": "GNTKWT30HS",
        "label": "PCS",
        "price": 142500,
        "unit": "PCS"
      }
    ],
    "basePrice": 142500,
    "priceLabel": "Rp142.500"
  },
  {
    "id": "639",
    "name": "GUNTING KAWAT EXTREME 36 (UPGRADE)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20KAWAT%20EXTREME%2036%20",
    "variants": [
      {
        "sku": "GNTKWT36HS",
        "label": "PCS",
        "price": 178125,
        "unit": "PCS"
      }
    ],
    "basePrice": 178125,
    "priceLabel": "Rp178.125"
  },
  {
    "id": "640",
    "name": "GUNTING KAWAT EXTREME 42 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20KAWAT%20EXTREME%2042%20",
    "variants": [
      {
        "sku": "GNT KWT EXTR",
        "label": "PCS",
        "price": 313500,
        "unit": "PCS"
      }
    ],
    "basePrice": 313500,
    "priceLabel": "Rp313.500"
  },
  {
    "id": "641",
    "name": "GUNTING KERTAS ECO 16 CM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20KERTAS%20ECO%2016%20CM%20",
    "variants": [
      {
        "sku": "GNT 16CM ECO",
        "label": "PCS",
        "price": 5408.31,
        "unit": "PCS"
      }
    ],
    "basePrice": 5408.31,
    "priceLabel": "Rp5.408,31"
  },
  {
    "id": "642",
    "name": "GUNTING KODOK WANLY",
    "category": "Umum",
    "brand": "WANLY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20KODOK%20WANLY",
    "variants": [
      {
        "sku": "MWAGUN02",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "643",
    "name": "GUNTING PAGAR / RUMPUT HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20PAGAR%20%2F%20RUMPUT%20HI",
    "variants": [
      {
        "sku": "GNT PG HS",
        "label": "PCS",
        "price": 26919.2,
        "unit": "PCS"
      }
    ],
    "basePrice": 26919.2,
    "priceLabel": "Rp26.919,2"
  },
  {
    "id": "644",
    "name": "GUNTING PAGAR GG BESI KENMASTER",
    "category": "Alat tukang",
    "brand": "KENMASTER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20PAGAR%20GG%20BESI%20KEN",
    "variants": [
      {
        "sku": "MGPGRBSK",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "645",
    "name": "GUNTING PIPA CAMEL",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20PIPA%20CAMEL",
    "variants": [
      {
        "sku": "MCAGUN01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "646",
    "name": "GUNTING S/S 6' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20S%2FS%206'%20HIOSHI",
    "variants": [
      {
        "sku": "GNT 6 SS",
        "label": "PCS",
        "price": 10567.14,
        "unit": "PCS"
      }
    ],
    "basePrice": 10567.14,
    "priceLabel": "Rp10.567,14"
  },
  {
    "id": "647",
    "name": "GUNTING SENG HOLO TEKIRO 10\"",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20SENG%20HOLO%20TEKIRO%20",
    "variants": [
      {
        "sku": "GUNHLTEK",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "648",
    "name": "GUNTING SENG KOREA CAMEL",
    "category": "Umum",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20SENG%20KOREA%20CAMEL",
    "variants": [
      {
        "sku": "GNTGKR",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "649",
    "name": "GUNTING STAINLESS HIOSHI HD 6”",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=GUNTING%20STAINLESS%20HIOSHI%20",
    "variants": [
      {
        "sku": "GUSSHIO6",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "650",
    "name": "HAK ANGIN SEGI 6 (2 PCS)",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAK%20ANGIN%20SEGI%206%20(2%20PCS)",
    "variants": [
      {
        "sku": "HAANG6",
        "label": "BKS",
        "price": 20000,
        "unit": "BKS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "651",
    "name": "HAK ANGIN ULIR  BESI GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAK%20ANGIN%20ULIR%20%20BESI%20GOME",
    "variants": [
      {
        "sku": "HA ULIR",
        "label": "PCS",
        "price": 20500,
        "unit": "PCS"
      }
    ],
    "basePrice": 20500,
    "priceLabel": "Rp20.500"
  },
  {
    "id": "652",
    "name": "HAK BUKA NO.4 TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAK%20BUKA%20NO.4%20TOKIO",
    "variants": [
      {
        "sku": "HA BK 4",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "653",
    "name": "HAND SHOWER + FILTER ISCO SC-23",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20%2B%20FILTER%20ISCO",
    "variants": [
      {
        "sku": "HSSC23",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "654",
    "name": "HAND SHOWER ISCO SC-18",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20ISCO%20SC-18",
    "variants": [
      {
        "sku": "HSSC18",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "655",
    "name": "HAND SHOWER ISCO SC-22",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20ISCO%20SC-22",
    "variants": [
      {
        "sku": "HSSC22",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "656",
    "name": "HAND SHOWER ISCO SC-24",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20ISCO%20SC-24",
    "variants": [
      {
        "sku": "HSSC24",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "657",
    "name": "HAND SHOWER ISCO SC-27",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20ISCO%20SC-27",
    "variants": [
      {
        "sku": "HSSC27",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "658",
    "name": "HAND SHOWER ONDA SO KUL (BLISTER)",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20ONDA%20SO%20KUL%20(",
    "variants": [
      {
        "sku": "SWRCHSO28OND",
        "label": "PCS",
        "price": 156500,
        "unit": "PCS"
      }
    ],
    "basePrice": 156500,
    "priceLabel": "Rp156.500"
  },
  {
    "id": "659",
    "name": "HAND SHOWER ONDA SO TUL",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HAND%20SHOWER%20ONDA%20SO%20TUL",
    "variants": [
      {
        "sku": "SWRCHSOTULOND",
        "label": "PCS",
        "price": 159500,
        "unit": "PCS"
      }
    ],
    "basePrice": 159500,
    "priceLabel": "Rp159.500"
  },
  {
    "id": "660",
    "name": "HANGER WARNA ZELIG",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HANGER%20WARNA%20ZELIG",
    "variants": [
      {
        "sku": "MNOHAN01",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "661",
    "name": "HELM PROYEK BIRU",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HELM%20PROYEK%20BIRU",
    "variants": [
      {
        "sku": "HELMPRBH",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "662",
    "name": "HELM PROYEK KUNING",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HELM%20PROYEK%20KUNING",
    "variants": [
      {
        "sku": "HELMPRKH",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "663",
    "name": "HELM PROYEK ORANGE",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HELM%20PROYEK%20ORANGE",
    "variants": [
      {
        "sku": "HELMPROH",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "664",
    "name": "HELM PROYEK PUTIH",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HELM%20PROYEK%20PUTIH",
    "variants": [
      {
        "sku": "HELMPRPH",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "665",
    "name": "HOLE SAW BESI 12MM KUGEL",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOLE%20SAW%20BESI%2012MM%20KUGEL",
    "variants": [
      {
        "sku": "HLSBS12",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "666",
    "name": "HOLE SAW BESI 14MM KUGEL",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOLE%20SAW%20BESI%2014MM%20KUGEL",
    "variants": [
      {
        "sku": "HOSA14KU",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "667",
    "name": "HOLE SAW BESI 25MM KUGEL",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOLE%20SAW%20BESI%2025MM%20KUGEL",
    "variants": [
      {
        "sku": "HOLEBS25",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "668",
    "name": "HOLE SAW BESI 30MM KUGEL / LAZARO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOLE%20SAW%20BESI%2030MM%20KUGEL%20",
    "variants": [
      {
        "sku": "HOSBS30",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "669",
    "name": "HOT PLATE STEAK BULAT SUNRISE",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOT%20PLATE%20STEAK%20BULAT%20SUN",
    "variants": [
      {
        "sku": "MSUHOT01",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "670",
    "name": "HOT PLATE STEAK OVAL SUNRISE",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOT%20PLATE%20STEAK%20OVAL%20SUNR",
    "variants": [
      {
        "sku": "MSUHOT03",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "671",
    "name": "HOT PLATE STEAK SAPI SUNRISE",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=HOT%20PLATE%20STEAK%20SAPI%20SUNR",
    "variants": [
      {
        "sku": "MSUHOT02",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "672",
    "name": "ISI CUTTER BIASA",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20CUTTER%20BIASA",
    "variants": [
      {
        "sku": "ISICUTR",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "673",
    "name": "ISI CUTTER D-150 888",
    "category": "Alat tukang",
    "brand": "888",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20CUTTER%20D-150%20888",
    "variants": [
      {
        "sku": "MISC1588",
        "label": "PAK",
        "price": 6000,
        "unit": "PAK"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "674",
    "name": "ISI STAPLES MASAKI",
    "category": "Umum",
    "brand": "MASAKI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20STAPLES%20MASAKI",
    "variants": [
      {
        "sku": "MMAISI01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "675",
    "name": "ISI STAPLES PAKU TEMBAK HUBEN F15",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20STAPLES%20PAKU%20TEMBAK%20H",
    "variants": [
      {
        "sku": "MHUISI01",
        "label": "BOX",
        "price": 18000,
        "unit": "BOX"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "676",
    "name": "ISI STAPLES PAKU TEMBAK HUBEN F20",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20STAPLES%20PAKU%20TEMBAK%20H",
    "variants": [
      {
        "sku": "MHUISI04",
        "label": "BOX",
        "price": 23000,
        "unit": "BOX"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "677",
    "name": "ISI STAPLES PAKU TEMBAK HUBEN F25",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20STAPLES%20PAKU%20TEMBAK%20H",
    "variants": [
      {
        "sku": "MHUISI02",
        "label": "BOX",
        "price": 26000,
        "unit": "BOX"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "678",
    "name": "ISI STAPLES PAKU TEMBAK HUBEN F30",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20STAPLES%20PAKU%20TEMBAK%20H",
    "variants": [
      {
        "sku": "MHUISI03",
        "label": "BOX",
        "price": 30000,
        "unit": "BOX"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "679",
    "name": "ISI STAPLES XENON F20",
    "category": "Umum",
    "brand": "XENON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISI%20STAPLES%20XENON%20F20",
    "variants": [
      {
        "sku": "MXEISI01",
        "label": "BOX",
        "price": 23000,
        "unit": "BOX"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "680",
    "name": "ISOLASI HITAM LISTRIK 20Y NACHI",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISOLASI%20HITAM%20LISTRIK%2020Y",
    "variants": [
      {
        "sku": "MBRISO01",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "681",
    "name": "ISOLASI KERTAS 1”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISOLASI%20KERTAS%201%E2%80%9D",
    "variants": [
      {
        "sku": "MNOISO01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "682",
    "name": "ISOLASI KERTAS 2”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISOLASI%20KERTAS%202%E2%80%9D",
    "variants": [
      {
        "sku": "MNOISO02",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "683",
    "name": "ISOLASI LISTRIK NATIONAL",
    "category": "Umum",
    "brand": "SAN EI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISOLASI%20LISTRIK%20NATIONAL",
    "variants": [
      {
        "sku": "IS NAT HTM",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "684",
    "name": "ISOLASI NATIONAL ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ISOLASI%20NATIONAL%20ISCO",
    "variants": [
      {
        "sku": "IS ISCO",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "685",
    "name": "JARUM KARUNG TOKIO 6",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JARUM%20KARUNG%20TOKIO%206",
    "variants": [
      {
        "sku": "JARUM KR 6 TK",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "686",
    "name": "JAS HUJAN PLASTIK BENING",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JAS%20HUJAN%20PLASTIK%20BENING",
    "variants": [
      {
        "sku": "JASHUBPL",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "687",
    "name": "JAS HUJAN PLASTIK WARNA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JAS%20HUJAN%20PLASTIK%20WARNA",
    "variants": [
      {
        "sku": "JASHUWPL",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "688",
    "name": "JEMURAN HANDUK ALUMINIUM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JEMURAN%20HANDUK%20ALUMINIUM",
    "variants": [
      {
        "sku": "RAKHANAL",
        "label": "PCS",
        "price": 205000,
        "unit": "PCS"
      }
    ],
    "basePrice": 205000,
    "priceLabel": "Rp205.000"
  },
  {
    "id": "689",
    "name": "JEMURAN HANDUK PVC NAGOYA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JEMURAN%20HANDUK%20PVC%20NAGOYA",
    "variants": [
      {
        "sku": "JMHANGY",
        "label": "PCS",
        "price": 94000,
        "unit": "PCS"
      }
    ],
    "basePrice": 94000,
    "priceLabel": "Rp94.000"
  },
  {
    "id": "690",
    "name": "JEMURAN HANDUK PVC NEXT STAR",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JEMURAN%20HANDUK%20PVC%20NEXT%20S",
    "variants": [
      {
        "sku": "JEHANEXT",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "691",
    "name": "JEPITAN TIKUS KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JEPITAN%20TIKUS%20KZK",
    "variants": [
      {
        "sku": "MKZJEP01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "692",
    "name": "JET CLEANER LAKONI LAGUNA 70",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20CLEANER%20LAKONI%20LAGUNA",
    "variants": [
      {
        "sku": "JETCLL70",
        "label": "PCS",
        "price": 990000,
        "unit": "PCS"
      }
    ],
    "basePrice": 990000,
    "priceLabel": "Rp990.000"
  },
  {
    "id": "693",
    "name": "JET SHOWER BULAT CHROME SC-61",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20BULAT%20CHROME%20S",
    "variants": [
      {
        "sku": "JS CHR SC61",
        "label": "PCS",
        "price": 30500,
        "unit": "PCS"
      }
    ],
    "basePrice": 30500,
    "priceLabel": "Rp30.500"
  },
  {
    "id": "694",
    "name": "JET SHOWER BULAT PUTIH SC-60",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20BULAT%20PUTIH%20SC",
    "variants": [
      {
        "sku": "JS PTH SC60",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "695",
    "name": "JET SHOWER CHROME SKL",
    "category": "Umum",
    "brand": "SKL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20CHROME%20SKL",
    "variants": [
      {
        "sku": "JS CHR",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "696",
    "name": "JET SHOWER EINER CHROME",
    "category": "Umum",
    "brand": "EINER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20EINER%20CHROME",
    "variants": [
      {
        "sku": "MEIJET01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "697",
    "name": "JET SHOWER EINER PUTIH",
    "category": "Umum",
    "brand": "EINER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20EINER%20PUTIH",
    "variants": [
      {
        "sku": "MEIJET02",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "698",
    "name": "JET SHOWER IGM IS-044 BLACK",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20IGM%20IS-044%20BLA",
    "variants": [
      {
        "sku": "MJETSHIGM044",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "699",
    "name": "JET SHOWER IGM IS-057 CHROME",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20IGM%20IS-057%20CHR",
    "variants": [
      {
        "sku": "MJETSWRIGM057",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "700",
    "name": "JET SHOWER ONDA KUL WHITE",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20ONDA%20KUL%20WHITE",
    "variants": [
      {
        "sku": "SWRCHJK036OND",
        "label": "PCS",
        "price": 101500,
        "unit": "PCS"
      }
    ],
    "basePrice": 101500,
    "priceLabel": "Rp101.500"
  },
  {
    "id": "701",
    "name": "JET SHOWER SET SC-30 PUTIH ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=JET%20SHOWER%20SET%20SC-30%20PUTI",
    "variants": [
      {
        "sku": "JS SC30",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "702",
    "name": "KABEL DUCTING 100X100",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%20100X100",
    "variants": [
      {
        "sku": "KABDUC10",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "703",
    "name": "KABEL DUCTING 16X16 NISO",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%2016X16%20NISO",
    "variants": [
      {
        "sku": "KABDUC16",
        "label": "PCS",
        "price": 6500,
        "unit": "PCS"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "704",
    "name": "KABEL DUCTING 25X25 NISO",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%2025X25%20NISO",
    "variants": [
      {
        "sku": "KABDUC25",
        "label": "PCS",
        "price": 13500,
        "unit": "PCS"
      }
    ],
    "basePrice": 13500,
    "priceLabel": "Rp13.500"
  },
  {
    "id": "705",
    "name": "KABEL DUCTING 40X40 NISO",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%2040X40%20NISO",
    "variants": [
      {
        "sku": "KABDUC40",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "706",
    "name": "KABEL DUCTING 50X100 NISO",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%2050X100%20NISO",
    "variants": [
      {
        "sku": "KABDUC51",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "707",
    "name": "KABEL DUCTING 50X50 NISO",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%2050X50%20NISO",
    "variants": [
      {
        "sku": "KABDUC50",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "708",
    "name": "KABEL DUCTING 60X60 NISO",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20DUCTING%2060X60%20NISO",
    "variants": [
      {
        "sku": "KABDUC60",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "709",
    "name": "KABEL ETERNA NYA 1,5 HITAM",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYA%201%2C5%20HITA",
    "variants": [
      {
        "sku": "KENYA15H",
        "label": "MTR",
        "price": 6000,
        "unit": "MTR"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "710",
    "name": "KABEL ETERNA NYA 1,5 MERAH",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYA%201%2C5%20MERA",
    "variants": [
      {
        "sku": "KENYA15M",
        "label": "MTR",
        "price": 6000,
        "unit": "MTR"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "711",
    "name": "KABEL ETERNA NYM 2 X 1,5",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYM%202%20X%201%2C5",
    "variants": [
      {
        "sku": "KABET215",
        "label": "MTR",
        "price": 20000,
        "unit": "MTR"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "712",
    "name": "KABEL ETERNA NYM 2 X 2,5",
    "category": "Listrik",
    "brand": "ETERNA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYM%202%20X%202%2C5",
    "variants": [
      {
        "sku": "MKBETN25",
        "label": "MTR",
        "price": 25000,
        "unit": "MTR"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "713",
    "name": "KABEL ETERNA NYM 3 X 1,5",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYM%203%20X%201%2C5",
    "variants": [
      {
        "sku": "KABET315",
        "label": "MTR",
        "price": 22000,
        "unit": "MTR"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "714",
    "name": "KABEL ETERNA NYM 3 X 2,5",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYM%203%20X%202%2C5",
    "variants": [
      {
        "sku": "KAETN325",
        "label": "MTR",
        "price": 34000,
        "unit": "MTR"
      }
    ],
    "basePrice": 34000,
    "priceLabel": "Rp34.000"
  },
  {
    "id": "715",
    "name": "KABEL ETERNA NYMHY 2 X 0,75",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ETERNA%20NYMHY%202%20X%200%2C",
    "variants": [
      {
        "sku": "ENYMHY27",
        "label": "MTR",
        "price": 14000,
        "unit": "MTR"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "716",
    "name": "KABEL ROLL GULUNG 10M LAMPU TRM",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ROLL%20GULUNG%2010M%20LAM",
    "variants": [
      {
        "sku": "KRL10TRM",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "717",
    "name": "KABEL ROLL GULUNG 6M GEPENG TRM",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KABEL%20ROLL%20GULUNG%206M%20GEPE",
    "variants": [
      {
        "sku": "KBRL6TRM",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "718",
    "name": "KACAMATA GERINDA BENING",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KACAMATA%20GERINDA%20BENING",
    "variants": [
      {
        "sku": "MKACGRDB",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "719",
    "name": "KACAMATA LAS AUTO GELAP XENON",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KACAMATA%20LAS%20AUTO%20GELAP%20X",
    "variants": [
      {
        "sku": "KCMLASAG",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "720",
    "name": "KACAMATA LAS HITAM XENON",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KACAMATA%20LAS%20HITAM%20XENON",
    "variants": [
      {
        "sku": "MKCLAHTM",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "721",
    "name": "KANEBO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KANEBO",
    "variants": [
      {
        "sku": "MNOKAN01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "722",
    "name": "KAPASITOR BULAT 10UF ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAPASITOR%20BULAT%2010UF%20ISCO",
    "variants": [
      {
        "sku": "KS BLT 10",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "723",
    "name": "KAPASITOR BULAT 12UF ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAPASITOR%20BULAT%2012UF%20ISCO",
    "variants": [
      {
        "sku": "KS BLT 12",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "724",
    "name": "KAPASITOR BULAT 16UF ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAPASITOR%20BULAT%2016UF%20ISCO",
    "variants": [
      {
        "sku": "KS BLT 16",
        "label": "PCS",
        "price": 15100,
        "unit": "PCS"
      }
    ],
    "basePrice": 15100,
    "priceLabel": "Rp15.100"
  },
  {
    "id": "725",
    "name": "KAPASITOR BULAT 8UF ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAPASITOR%20BULAT%208UF%20ISCO",
    "variants": [
      {
        "sku": "KS BLT 8",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "726",
    "name": "KAPSTOK BAJU 4 HOOK",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAPSTOK%20BAJU%204%20HOOK",
    "variants": [
      {
        "sku": "MNOKAP01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "727",
    "name": "KARET KAKI KURSI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KARET%20KAKI%20KURSI",
    "variants": [
      {
        "sku": "MNOKAR01",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "728",
    "name": "KAWAT BENDRAT (PER KG)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20BENDRAT%20(PER%20KG)",
    "variants": [
      {
        "sku": "KAWBEND",
        "label": "KLG",
        "price": 28000,
        "unit": "KLG"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "729",
    "name": "KAWAT CUCI PIRING BESAR NATUNA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20CUCI%20PIRING%20BESAR%20N",
    "variants": [
      {
        "sku": "KWTCPKCN",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "730",
    "name": "KAWAT CUCI PIRING KECIL WIN",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20CUCI%20PIRING%20KECIL%20W",
    "variants": [
      {
        "sku": "KWTCPKCW",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "731",
    "name": "KAWAT LAS NIKKO RD-260 2.0 1 KG",
    "category": "Umum",
    "brand": "NIKKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LAS%20NIKKO%20RD-260%202.",
    "variants": [
      {
        "sku": "MNIKAW01",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "732",
    "name": "KAWAT LAS NIKKO RD-260 2.6 1 KG",
    "category": "Umum",
    "brand": "NIKKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LAS%20NIKKO%20RD-260%202.",
    "variants": [
      {
        "sku": "MNIKAW02",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "733",
    "name": "KAWAT LOKET 1/2 PUTIH PATRI GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LOKET%201%2F2%20PUTIH%20PAT",
    "variants": [
      {
        "sku": "KWL1/2PTH GRT",
        "label": "MTR",
        "price": 20000,
        "unit": "MTR"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "734",
    "name": "KAWAT LOKET 1/2 PVC BLANKE",
    "category": "Umum",
    "brand": "BLANKE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LOKET%201%2F2%20PVC%20BLANK",
    "variants": [
      {
        "sku": "KWL1/2PVC BL",
        "label": "MTR",
        "price": 20000,
        "unit": "MTR"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "735",
    "name": "KAWAT LOKET 1/2 PVC HMI",
    "category": "Umum",
    "brand": "HMI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LOKET%201%2F2%20PVC%20HMI",
    "variants": [
      {
        "sku": "KWL1/2PVC HMI",
        "label": "MTR",
        "price": 20000,
        "unit": "MTR"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "736",
    "name": "KAWAT LOKET 1/2 PVC R2B",
    "category": "Umum",
    "brand": "R2B",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LOKET%201%2F2%20PVC%20R2B",
    "variants": [
      {
        "sku": "KWL1/2PVC NI",
        "label": "MTR",
        "price": 20000,
        "unit": "MTR"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "737",
    "name": "KAWAT LOKET 1/4 PVC BLANKE",
    "category": "Umum",
    "brand": "BLANKE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20LOKET%201%2F4%20PVC%20BLANK",
    "variants": [
      {
        "sku": "KWL1/4PVC BL",
        "label": "MTR",
        "price": 25000,
        "unit": "MTR"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "738",
    "name": "KAWAT SELING GALVANIS 6 MM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KAWAT%20SELING%20GALVANIS%206%20M",
    "variants": [
      {
        "sku": "KWT SL GALV 6",
        "label": "PCS",
        "price": 4400000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4400000,
    "priceLabel": "Rp4.400.000"
  },
  {
    "id": "739",
    "name": "KEBASAN SAPU KASUR",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KEBASAN%20SAPU%20KASUR",
    "variants": [
      {
        "sku": "SAPKASUR",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "740",
    "name": "KEPALA JET SHOWER",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KEPALA%20JET%20SHOWER",
    "variants": [
      {
        "sku": "MNOKEP04",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "741",
    "name": "KERANJANG LAUNDRY DUAL TONE PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20LAUNDRY%20DUAL%20TO",
    "variants": [
      {
        "sku": "MNOKER03",
        "label": "PCS",
        "price": 68000,
        "unit": "PCS"
      }
    ],
    "basePrice": 68000,
    "priceLabel": "Rp68.000"
  },
  {
    "id": "742",
    "name": "KERANJANG LAUNDRY HELMUT HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20LAUNDRY%20HELMUT%20",
    "variants": [
      {
        "sku": "KRJLHEHY",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "743",
    "name": "KERANJANG LAUNDRY HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20LAUNDRY%20HYPER",
    "variants": [
      {
        "sku": "MNOKER04",
        "label": "PCS",
        "price": 78000,
        "unit": "PCS"
      }
    ],
    "basePrice": 78000,
    "priceLabel": "Rp78.000"
  },
  {
    "id": "744",
    "name": "KERANJANG LAUNDRY PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20LAUNDRY%20PREM",
    "variants": [
      {
        "sku": "MNOKER02",
        "label": "PCS",
        "price": 68000,
        "unit": "PCS"
      }
    ],
    "basePrice": 68000,
    "priceLabel": "Rp68.000"
  },
  {
    "id": "745",
    "name": "KERANJANG ROTANO PREM + TUTUP",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20ROTANO%20PREM%20%2B%20T",
    "variants": [
      {
        "sku": "KJGRTPRT",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "746",
    "name": "KERANJANG SAMPAH 121 TR05 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20121%20TR05",
    "variants": [
      {
        "sku": "MNOKER11",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "747",
    "name": "KERANJANG SAMPAH 121 TR05 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20121%20TR05",
    "variants": [
      {
        "sku": "MNOKER10",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "748",
    "name": "KERANJANG SAMPAH BESAR HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20BESAR%20HY",
    "variants": [
      {
        "sku": "MNOKER09",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "749",
    "name": "KERANJANG SAMPAH BULAT HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20BULAT%20HY",
    "variants": [
      {
        "sku": "MNOKER07",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "750",
    "name": "KERANJANG SAMPAH BULAT SUPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20BULAT%20SU",
    "variants": [
      {
        "sku": "MNOKER08",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "751",
    "name": "KERANJANG SAMPAH TANGGUNG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20TANGGUNG",
    "variants": [
      {
        "sku": "MNOKER06",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "752",
    "name": "KERANJANG SAMPAH TANGGUNG PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20TANGGUNG",
    "variants": [
      {
        "sku": "MNOKER05",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "753",
    "name": "KERANJANG SAMPAH TR06 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20TR06%20HYP",
    "variants": [
      {
        "sku": "MNOKER12",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "754",
    "name": "KERANJANG SAMPAH TR06 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SAMPAH%20TR06%20PRE",
    "variants": [
      {
        "sku": "MNOKER13",
        "label": "PCS",
        "price": 19000,
        "unit": "PCS"
      }
    ],
    "basePrice": 19000,
    "priceLabel": "Rp19.000"
  },
  {
    "id": "755",
    "name": "KERANJANG SERBAGUNA BESAR",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SERBAGUNA%20BESAR",
    "variants": [
      {
        "sku": "KERSBGBS",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "756",
    "name": "KERANJANG SERBAGUNA KECIL",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SERBAGUNA%20KECIL",
    "variants": [
      {
        "sku": "KERSBGKC",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "757",
    "name": "KERANJANG SERBAGUNA NAMPAN",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KERANJANG%20SERBAGUNA%20NAMPA",
    "variants": [
      {
        "sku": "KERSBGNM",
        "label": "PCS",
        "price": 21000,
        "unit": "PCS"
      }
    ],
    "basePrice": 21000,
    "priceLabel": "Rp21.000"
  },
  {
    "id": "758",
    "name": "KEREKAN SUMUR ECO (HIJAU) HKS002",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KEREKAN%20SUMUR%20ECO%20(HIJAU)",
    "variants": [
      {
        "sku": "KR SUMUR HJ",
        "label": "PCS",
        "price": 15732,
        "unit": "PCS"
      }
    ],
    "basePrice": 15732,
    "priceLabel": "Rp15.732"
  },
  {
    "id": "759",
    "name": "KESET BULU",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KESET%20BULU",
    "variants": [
      {
        "sku": "KESETBL",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "760",
    "name": "KESET CENDOL",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KESET%20CENDOL",
    "variants": [
      {
        "sku": "KESETCND",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "761",
    "name": "KESET HANDUK MOTIF",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KESET%20HANDUK%20MOTIF",
    "variants": [
      {
        "sku": "KESHANMO",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "762",
    "name": "KESET KAIN PERCA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KESET%20KAIN%20PERCA",
    "variants": [
      {
        "sku": "KESKAPER",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "763",
    "name": "KESET MIKA PRINT",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KESET%20MIKA%20PRINT",
    "variants": [
      {
        "sku": "KESETMPR",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "764",
    "name": "KESET SERABUT",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KESET%20SERABUT",
    "variants": [
      {
        "sku": "KESETSRB",
        "label": "PCS",
        "price": 21000,
        "unit": "PCS"
      }
    ],
    "basePrice": 21000,
    "priceLabel": "Rp21.000"
  },
  {
    "id": "765",
    "name": "KIKIR BULAT",
    "category": "Umum",
    "brand": "OREGON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20BULAT",
    "variants": [
      {
        "sku": "KKR BLT",
        "label": "PCS",
        "price": 52500,
        "unit": "PCS"
      }
    ],
    "basePrice": 52500,
    "priceLabel": "Rp52.500"
  },
  {
    "id": "766",
    "name": "KIKIR CHAIN SAW TEKIRO 4,8 X 200",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20CHAIN%20SAW%20TEKIRO%204%2C",
    "variants": [
      {
        "sku": "MTEKIK01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "767",
    "name": "KIKIR GRT 4'",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20GRT%204'",
    "variants": [
      {
        "sku": "KKR GRT 4",
        "label": "PCS",
        "price": 54625,
        "unit": "PCS"
      }
    ],
    "basePrice": 54625,
    "priceLabel": "Rp54.625"
  },
  {
    "id": "768",
    "name": "KIKIR GRT 5'",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20GRT%205'",
    "variants": [
      {
        "sku": "KKR GRT 5",
        "label": "PCS",
        "price": 71250,
        "unit": "PCS"
      }
    ],
    "basePrice": 71250,
    "priceLabel": "Rp71.250"
  },
  {
    "id": "769",
    "name": "KIKIR INDIA 3,5\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20INDIA%203%2C5%22",
    "variants": [
      {
        "sku": "KIKIN35",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "770",
    "name": "KIKIR INDIA 4\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20INDIA%204%22",
    "variants": [
      {
        "sku": "MNOKIK02",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "771",
    "name": "KIKIR PLAT HALUS 8\" TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20PLAT%20HALUS%208%22%20TEKIR",
    "variants": [
      {
        "sku": "KIKPH8TK",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "772",
    "name": "KIKIR SEGITIGA TEKIRO 4”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIKIR%20SEGITIGA%20TEKIRO%204%E2%80%9D",
    "variants": [
      {
        "sku": "MTEKIK02",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "773",
    "name": "KIPAS ANGIN COSMOS DINDING 16-WFC",
    "category": "Rumah tangga",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20COSMOS%20DINDIN",
    "variants": [
      {
        "sku": "MCOKIP01",
        "label": "PCS",
        "price": 300000,
        "unit": "PCS"
      }
    ],
    "basePrice": 300000,
    "priceLabel": "Rp300.000"
  },
  {
    "id": "774",
    "name": "KIPAS ANGIN COSMOS MEJA 12-DSE",
    "category": "Rumah tangga",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20COSMOS%20MEJA%201",
    "variants": [
      {
        "sku": "MCOKIP02",
        "label": "PCS",
        "price": 270000,
        "unit": "PCS"
      }
    ],
    "basePrice": 270000,
    "priceLabel": "Rp270.000"
  },
  {
    "id": "775",
    "name": "KIPAS ANGIN COSMOS MEJA 9-LDA",
    "category": "Rumah tangga",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20COSMOS%20MEJA%209",
    "variants": [
      {
        "sku": "MCOKIP03",
        "label": "PCS",
        "price": 205000,
        "unit": "PCS"
      }
    ],
    "basePrice": 205000,
    "priceLabel": "Rp205.000"
  },
  {
    "id": "776",
    "name": "KIPAS ANGIN COSMOS STAND FAN 16-SDB",
    "category": "Rumah tangga",
    "brand": "COSMOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20COSMOS%20STAND%20",
    "variants": [
      {
        "sku": "MCOKIP04",
        "label": "PCS",
        "price": 285000,
        "unit": "PCS"
      }
    ],
    "basePrice": 285000,
    "priceLabel": "Rp285.000"
  },
  {
    "id": "777",
    "name": "KIPAS ANGIN MASPION DINDING MWF-31 K",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20DINDI",
    "variants": [
      {
        "sku": "MNOKIP01",
        "label": "PCS",
        "price": 375000,
        "unit": "PCS"
      }
    ],
    "basePrice": 375000,
    "priceLabel": "Rp375.000"
  },
  {
    "id": "778",
    "name": "KIPAS ANGIN MASPION DINDING MWF-37 K",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20DINDI",
    "variants": [
      {
        "sku": "MNOKIP02",
        "label": "PCS",
        "price": 400000,
        "unit": "PCS"
      }
    ],
    "basePrice": 400000,
    "priceLabel": "Rp400.000"
  },
  {
    "id": "779",
    "name": "KIPAS ANGIN MASPION DINDING MWF-41 K",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20DINDI",
    "variants": [
      {
        "sku": "MNOKIP03",
        "label": "PCS",
        "price": 430000,
        "unit": "PCS"
      }
    ],
    "basePrice": 430000,
    "priceLabel": "Rp430.000"
  },
  {
    "id": "780",
    "name": "KIPAS ANGIN MASPION KOTAK EX-2109 T",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20KOTAK",
    "variants": [
      {
        "sku": "MNOKIP04",
        "label": "PCS",
        "price": 340000,
        "unit": "PCS"
      }
    ],
    "basePrice": 340000,
    "priceLabel": "Rp340.000"
  },
  {
    "id": "781",
    "name": "KIPAS ANGIN MASPION MEJA EX-307",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20MEJA%20",
    "variants": [
      {
        "sku": "MNOKIP05",
        "label": "PCS",
        "price": 310000,
        "unit": "PCS"
      }
    ],
    "basePrice": 310000,
    "priceLabel": "Rp310.000"
  },
  {
    "id": "782",
    "name": "KIPAS ANGIN MASPION MEJA F-23 D",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20MEJA%20",
    "variants": [
      {
        "sku": "MNOKIP06",
        "label": "PCS",
        "price": 240000,
        "unit": "PCS"
      }
    ],
    "basePrice": 240000,
    "priceLabel": "Rp240.000"
  },
  {
    "id": "783",
    "name": "KIPAS ANGIN MASPION ORBIT MOF-401 P",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MASPION%20ORBIT",
    "variants": [
      {
        "sku": "MNOKIP07",
        "label": "PCS",
        "price": 530000,
        "unit": "PCS"
      }
    ],
    "basePrice": 530000,
    "priceLabel": "Rp530.000"
  },
  {
    "id": "784",
    "name": "KIPAS ANGIN MIYAKO DINDING KAW-1662 GB",
    "category": "Rumah tangga",
    "brand": "MIYAKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MIYAKO%20DINDIN",
    "variants": [
      {
        "sku": "MMIKIP01",
        "label": "PCS",
        "price": 285000,
        "unit": "PCS"
      }
    ],
    "basePrice": 285000,
    "priceLabel": "Rp285.000"
  },
  {
    "id": "785",
    "name": "KIPAS ANGIN MIYAKO MEJA KAD-1227 PL",
    "category": "Rumah tangga",
    "brand": "MIYAKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MIYAKO%20MEJA%20K",
    "variants": [
      {
        "sku": "MMIKIP02",
        "label": "PCS",
        "price": 230000,
        "unit": "PCS"
      }
    ],
    "basePrice": 230000,
    "priceLabel": "Rp230.000"
  },
  {
    "id": "786",
    "name": "KIPAS ANGIN MIYAKO MEJA KAD-927 BPL",
    "category": "Rumah tangga",
    "brand": "MIYAKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MIYAKO%20MEJA%20K",
    "variants": [
      {
        "sku": "MMIKIP03",
        "label": "PCS",
        "price": 182000,
        "unit": "PCS"
      }
    ],
    "basePrice": 182000,
    "priceLabel": "Rp182.000"
  },
  {
    "id": "787",
    "name": "KIPAS ANGIN MIYAKO STAND FAN KAS-1607 PL",
    "category": "Rumah tangga",
    "brand": "MIYAKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KIPAS%20ANGIN%20MIYAKO%20STAND%20",
    "variants": [
      {
        "sku": "MMIKIP04",
        "label": "PCS",
        "price": 270000,
        "unit": "PCS"
      }
    ],
    "basePrice": 270000,
    "priceLabel": "Rp270.000"
  },
  {
    "id": "788",
    "name": "KLEM 1” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%201%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJAKLE03",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "789",
    "name": "KLEM AW 1/2” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20AW%201%2F2%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJAKLE01",
        "label": "PCS",
        "price": 1000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000"
  },
  {
    "id": "790",
    "name": "KLEM AW 3/4” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20AW%203%2F4%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJAKLE02",
        "label": "PCS",
        "price": 1500,
        "unit": "PCS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "791",
    "name": "KLEM F TEKIRO 12”",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20F%20TEKIRO%2012%E2%80%9D",
    "variants": [
      {
        "sku": "MTEKLE02",
        "label": "PCS",
        "price": 240000,
        "unit": "PCS"
      }
    ],
    "basePrice": 240000,
    "priceLabel": "Rp240.000"
  },
  {
    "id": "792",
    "name": "KLEM F TEKIRO 6”",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20F%20TEKIRO%206%E2%80%9D",
    "variants": [
      {
        "sku": "MTEKLE01",
        "label": "PCS",
        "price": 165000,
        "unit": "PCS"
      }
    ],
    "basePrice": 165000,
    "priceLabel": "Rp165.000"
  },
  {
    "id": "793",
    "name": "KLEM SELANG STAINLESS 1/2",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20SELANG%20STAINLESS%201%2F2",
    "variants": [
      {
        "sku": "KLSLSS12",
        "label": "1/2",
        "price": 600,
        "unit": "PCS"
      },
      {
        "sku": "KLSLSS34",
        "label": "3/4",
        "price": 600,
        "unit": "PCS"
      }
    ],
    "basePrice": 600,
    "priceLabel": "Rp600"
  },
  {
    "id": "794",
    "name": "KLEM SELANG STAINLESS 1/2 (5 PCS)",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20SELANG%20STAINLESS%201%2F2",
    "variants": [
      {
        "sku": "KLSLSS12-PAKET",
        "label": "BKS",
        "price": 10000,
        "unit": "BKS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "795",
    "name": "KLEM SELANG STAINLESS 3/4 (5 PCS)",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KLEM%20SELANG%20STAINLESS%203%2F4",
    "variants": [
      {
        "sku": "KLSLSS34-PAKET",
        "label": "BKS",
        "price": 10000,
        "unit": "BKS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "796",
    "name": "KNEE DRAT DALAM 1/2 X 3/4 KUNINGAN",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KNEE%20DRAT%20DALAM%201%2F2%20X%203%2F4",
    "variants": [
      {
        "sku": "MKNEEDD01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "797",
    "name": "KNEE DRAT DALAM 3/4 KUNINGAN",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KNEE%20DRAT%20DALAM%203%2F4%20KUNIN",
    "variants": [
      {
        "sku": "KNDDPL34",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "798",
    "name": "KNEE TS 1” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KNEE%20TS%201%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJAKNE03",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "799",
    "name": "KNEE TS 1/2” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KNEE%20TS%201%2F2%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJAKNE01",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "800",
    "name": "KNEE TS 3/4” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KNEE%20TS%203%2F4%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJAKNE02",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "801",
    "name": "KOMPOR COR SUNRISE SR 30 AUTO",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20COR%20SUNRISE%20SR%2030%20",
    "variants": [
      {
        "sku": "MSUKOM01",
        "label": "PCS",
        "price": 390000,
        "unit": "PCS"
      }
    ],
    "basePrice": 390000,
    "priceLabel": "Rp390.000"
  },
  {
    "id": "802",
    "name": "KOMPOR COR SUNRISE SR 40 AUTO",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20COR%20SUNRISE%20SR%2040%20",
    "variants": [
      {
        "sku": "MSUKOM02",
        "label": "PCS",
        "price": 390000,
        "unit": "PCS"
      }
    ],
    "basePrice": 390000,
    "priceLabel": "Rp390.000"
  },
  {
    "id": "803",
    "name": "KOMPOR JOS KMA 202 SUNRISE",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20JOS%20KMA%20202%20SUNRIS",
    "variants": [
      {
        "sku": "MSUKOM03",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "804",
    "name": "KOMPOR JOS KMA 203 SUNRISE",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20JOS%20KMA%20203%20SUNRIS",
    "variants": [
      {
        "sku": "MSUKOM04",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "805",
    "name": "KOMPOR JOS KMA 768 SUNRISE",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20JOS%20KMA%20768%20SUNRIS",
    "variants": [
      {
        "sku": "MSUKOM05",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "806",
    "name": "KOMPOR MAWAR SUNRISE SR 30 SL",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20MAWAR%20SUNRISE%20SR%203",
    "variants": [
      {
        "sku": "MSUKOM09",
        "label": "PCS",
        "price": 540000,
        "unit": "PCS"
      }
    ],
    "basePrice": 540000,
    "priceLabel": "Rp540.000"
  },
  {
    "id": "807",
    "name": "KOMPOR MAWAR SUNRISE SR 305 AUTO",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20MAWAR%20SUNRISE%20SR%203",
    "variants": [
      {
        "sku": "MSUKOM11",
        "label": "PCS",
        "price": 280000,
        "unit": "PCS"
      }
    ],
    "basePrice": 280000,
    "priceLabel": "Rp280.000"
  },
  {
    "id": "808",
    "name": "KOMPOR MAWAR SUNRISE SR 5E AUTO",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20MAWAR%20SUNRISE%20SR%205",
    "variants": [
      {
        "sku": "MSUKOM10",
        "label": "PCS",
        "price": 470000,
        "unit": "PCS"
      }
    ],
    "basePrice": 470000,
    "priceLabel": "Rp470.000"
  },
  {
    "id": "809",
    "name": "KOMPOR MIYAKO 2 TUNGKU KG-302C",
    "category": "Rumah tangga",
    "brand": "MIYAKO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20MIYAKO%202%20TUNGKU%20KG",
    "variants": [
      {
        "sku": "MMIKOM01",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "810",
    "name": "KOMPOR RINNAI 1 TUNGKU RI-201S",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%201%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM01",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "811",
    "name": "KOMPOR RINNAI 1 TUNGKU RI-511C",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%201%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM02",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "812",
    "name": "KOMPOR RINNAI 2 TUNGKU RI-522C",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%202%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM03",
        "label": "PCS",
        "price": 415000,
        "unit": "PCS"
      }
    ],
    "basePrice": 415000,
    "priceLabel": "Rp415.000"
  },
  {
    "id": "813",
    "name": "KOMPOR RINNAI 2 TUNGKU RI-522E",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%202%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM04",
        "label": "PCS",
        "price": 450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 450000,
    "priceLabel": "Rp450.000"
  },
  {
    "id": "814",
    "name": "KOMPOR RINNAI 2 TUNGKU RI-712A",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%202%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM05",
        "label": "PCS",
        "price": 625000,
        "unit": "PCS"
      }
    ],
    "basePrice": 625000,
    "priceLabel": "Rp625.000"
  },
  {
    "id": "815",
    "name": "KOMPOR RINNAI 2 TUNGKU RI-712BGX",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%202%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM06",
        "label": "PCS",
        "price": 700000,
        "unit": "PCS"
      }
    ],
    "basePrice": 700000,
    "priceLabel": "Rp700.000"
  },
  {
    "id": "816",
    "name": "KOMPOR RINNAI 2 TUNGKU RI-712T",
    "category": "Rumah tangga",
    "brand": "RINNAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20RINNAI%202%20TUNGKU%20RI",
    "variants": [
      {
        "sku": "MRIKOM07",
        "label": "PCS",
        "price": 720000,
        "unit": "PCS"
      }
    ],
    "basePrice": 720000,
    "priceLabel": "Rp720.000"
  },
  {
    "id": "817",
    "name": "KOMPOR SUNRISE SR 12 E",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20SUNRISE%20SR%2012%20E",
    "variants": [
      {
        "sku": "MSUKOM06",
        "label": "PCS",
        "price": 1150000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1150000,
    "priceLabel": "Rp1.150.000"
  },
  {
    "id": "818",
    "name": "KOMPOR SUNRISE SR 30 SL",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20SUNRISE%20SR%2030%20SL",
    "variants": [
      {
        "sku": "MSUKOM07",
        "label": "PCS",
        "price": 540000,
        "unit": "PCS"
      }
    ],
    "basePrice": 540000,
    "priceLabel": "Rp540.000"
  },
  {
    "id": "819",
    "name": "KOMPOR SUNRISE SR 5 E",
    "category": "Rumah tangga",
    "brand": "SUNRISE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOMPOR%20SUNRISE%20SR%205%20E",
    "variants": [
      {
        "sku": "MSUKOM08",
        "label": "PCS",
        "price": 380000,
        "unit": "PCS"
      }
    ],
    "basePrice": 380000,
    "priceLabel": "Rp380.000"
  },
  {
    "id": "820",
    "name": "KONEKTOR KABEL LAS FEMALE 10-25 LAZARO",
    "category": "Alat teknik",
    "brand": "LAZARO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KONEKTOR%20KABEL%20LAS%20FEMALE",
    "variants": [
      {
        "sku": "MLAKON01",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "821",
    "name": "KONEKTOR KABEL LAS MALE 10-25 LAZARO",
    "category": "Alat teknik",
    "brand": "LAZARO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KONEKTOR%20KABEL%20LAS%20MALE%201",
    "variants": [
      {
        "sku": "MLAKON02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "822",
    "name": "KONEKTOR KABEL LAS MALE 35-50 LAZARO",
    "category": "Alat teknik",
    "brand": "LAZARO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KONEKTOR%20KABEL%20LAS%20MALE%203",
    "variants": [
      {
        "sku": "MLAKON03",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "823",
    "name": "KONEKTOR KABEL LAS MALE 50-70 LAZARO",
    "category": "Alat teknik",
    "brand": "LAZARO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KONEKTOR%20KABEL%20LAS%20MALE%205",
    "variants": [
      {
        "sku": "MLAKON04",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "824",
    "name": "KONEKTOR LED STRIP HUBEN 8MM",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KONEKTOR%20LED%20STRIP%20HUBEN%20",
    "variants": [
      {
        "sku": "KONLEDSH",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "825",
    "name": "KOP KACA 1 HEAD PRESSURE GAUGE HASSTON 2200-011",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KOP%20KACA%201%20HEAD%20PRESSURE%20",
    "variants": [
      {
        "sku": "MHAKOP01",
        "label": "PCS",
        "price": 250000,
        "unit": "PCS"
      }
    ],
    "basePrice": 250000,
    "priceLabel": "Rp250.000"
  },
  {
    "id": "826",
    "name": "KRAN ANGIN KOMPRESOR 1/4 HATO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGIN%20KOMPRESOR%201%2F4%20",
    "variants": [
      {
        "sku": "KRKMHATO",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "827",
    "name": "KRAN ANGIN KOMPRESOR 1/4\" HASSTON 3950-103",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGIN%20KOMPRESOR%201%2F4%22",
    "variants": [
      {
        "sku": "MHAKRA02",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "828",
    "name": "KRAN ANGIN KOMPRESOR 3/8\" HASSTON 3950-102",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGIN%20KOMPRESOR%203%2F8%22",
    "variants": [
      {
        "sku": "MHAKRA01",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "829",
    "name": "KRAN ANGSA FLEXIBEL MEJA WF2035 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBEL%20MEJA%20",
    "variants": [
      {
        "sku": "KR FLEX WF2035",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "830",
    "name": "KRAN ANGSA FLEXIBEL SKL",
    "category": "Umum",
    "brand": "SKL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBEL%20SKL",
    "variants": [
      {
        "sku": "KR ANG FL",
        "label": "PCS",
        "price": 68364.32,
        "unit": "PCS"
      }
    ],
    "basePrice": 68364.32,
    "priceLabel": "Rp68.364,32"
  },
  {
    "id": "831",
    "name": "KRAN ANGSA FLEXIBEL ULIR SKL",
    "category": "Umum",
    "brand": "SKL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBEL%20ULIR%20",
    "variants": [
      {
        "sku": "KR ANG FLUL",
        "label": "PCS",
        "price": 68364.32,
        "unit": "PCS"
      }
    ],
    "basePrice": 68364.32,
    "priceLabel": "Rp68.364,32"
  },
  {
    "id": "832",
    "name": "KRAN ANGSA FLEXIBLE 977 EXECUTIVE 1/2",
    "category": "Umum",
    "brand": "EXECUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBLE%20977%20E",
    "variants": [
      {
        "sku": "KR ANGEXE01",
        "label": "PCS",
        "price": 74272.8,
        "unit": "PCS"
      }
    ],
    "basePrice": 74272.8,
    "priceLabel": "Rp74.272,8"
  },
  {
    "id": "833",
    "name": "KRAN ANGSA FLEXIBLE EINER",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBLE%20EINER",
    "variants": [
      {
        "sku": "MKRGFLEI",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "834",
    "name": "KRAN ANGSA FLEXIBLE S/S ISCO WF501",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBLE%20S%2FS%20I",
    "variants": [
      {
        "sku": "KR FLEX WF501",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "835",
    "name": "KRAN ANGSA FLEXIBLE WARNA",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBLE%20WARNA",
    "variants": [
      {
        "sku": "MKRFLWR",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "836",
    "name": "KRAN ANGSA FLEXIBLE WF2037 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20FLEXIBLE%20WF203",
    "variants": [
      {
        "sku": "KR FLEX WF2037",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "837",
    "name": "KRAN ANGSA JOPEX",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20JOPEX",
    "variants": [
      {
        "sku": "MKRAGSJP",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "838",
    "name": "KRAN ANGSA PATEN 976 EXECUTIVE 1/2",
    "category": "Umum",
    "brand": "EXECUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20PATEN%20976%20EXEC",
    "variants": [
      {
        "sku": "KR ANGPT01",
        "label": "PCS",
        "price": 33636.41,
        "unit": "PCS"
      }
    ],
    "basePrice": 33636.41,
    "priceLabel": "Rp33.636,41"
  },
  {
    "id": "839",
    "name": "KRAN ANGSA PVC CAB WARNA",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20PVC%20CAB%20WARNA",
    "variants": [
      {
        "sku": "MKRACABW",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "840",
    "name": "KRAN ANGSA PVC ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20PVC%20ISCO",
    "variants": [
      {
        "sku": "KR ANGPVC ISCO",
        "label": "PCS",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 22500,
    "priceLabel": "Rp22.500"
  },
  {
    "id": "841",
    "name": "KRAN ANGSA PVC SOLIGEN W2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ANGSA%20PVC%20SOLIGEN%20W2",
    "variants": [
      {
        "sku": "KRASOLW2",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "842",
    "name": "KRAN CABANG CAMEL",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CABANG%20CAMEL",
    "variants": [
      {
        "sku": "KRCABCML",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "843",
    "name": "KRAN CABANG IGM IK-058",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CABANG%20IGM%20IK-058",
    "variants": [
      {
        "sku": "MIGKRA04",
        "label": "PCS",
        "price": 185000,
        "unit": "PCS"
      }
    ],
    "basePrice": 185000,
    "priceLabel": "Rp185.000"
  },
  {
    "id": "844",
    "name": "KRAN CABANG ONDA K 406 CTG 1/2",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CABANG%20ONDA%20K%20406%20CT",
    "variants": [
      {
        "sku": "MXRSTK406COND",
        "label": "PCS",
        "price": 178500,
        "unit": "PCS"
      }
    ],
    "basePrice": 178500,
    "priceLabel": "Rp178.500"
  },
  {
    "id": "845",
    "name": "KRAN CABANG ONDA K-TUL 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CABANG%20ONDA%20K-TUL%201%2F",
    "variants": [
      {
        "sku": "ACSCHKTU12OND",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "846",
    "name": "KRAN CABANG SPOT",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CABANG%20SPOT",
    "variants": [
      {
        "sku": "KRCABSP",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "847",
    "name": "KRAN CABANG/DOUBLE ISCO S/S WD 201",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CABANG%2FDOUBLE%20ISCO%20S",
    "variants": [
      {
        "sku": "KR CBNG WD201",
        "label": "PCS",
        "price": 28500,
        "unit": "PCS"
      }
    ],
    "basePrice": 28500,
    "priceLabel": "Rp28.500"
  },
  {
    "id": "848",
    "name": "KRAN CHROME BALING WT1039 / KRAN TEMBOK",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20CHROME%20BALING%20WT1039",
    "variants": [
      {
        "sku": "KR TGK WT1039",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "849",
    "name": "KRAN DAPUR ONDA V 637 T 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DAPUR%20ONDA%20V%20637%20T%201",
    "variants": [
      {
        "sku": "STPKNV637TOND",
        "label": "PCS",
        "price": 97000,
        "unit": "PCS"
      }
    ],
    "basePrice": 97000,
    "priceLabel": "Rp97.000"
  },
  {
    "id": "850",
    "name": "KRAN DAPUR TANAM ONDA V-SUS 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DAPUR%20TANAM%20ONDA%20V-S",
    "variants": [
      {
        "sku": "KRNSTVSU12OND",
        "label": "PCS",
        "price": 179500,
        "unit": "PCS"
      }
    ],
    "basePrice": 179500,
    "priceLabel": "Rp179.500"
  },
  {
    "id": "851",
    "name": "KRAN DAPUR TANAM ONDA V-SUS FLEXIBEL 1/2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DAPUR%20TANAM%20ONDA%20V-S",
    "variants": [
      {
        "sku": "KRNSTFLTANOND",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "852",
    "name": "KRAN DAPUR TANAM V-TUL FLEXI ONDA",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DAPUR%20TANAM%20V-TUL%20FL",
    "variants": [
      {
        "sku": "KRNBSTBK 12OND",
        "label": "PCS",
        "price": 187000,
        "unit": "PCS"
      }
    ],
    "basePrice": 187000,
    "priceLabel": "Rp187.000"
  },
  {
    "id": "853",
    "name": "KRAN DAPUR TEMBOK ONDA V-SUS FLEXI 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DAPUR%20TEMBOK%20ONDA%20V-",
    "variants": [
      {
        "sku": "KRNSTFL TEMOND",
        "label": "PCS",
        "price": 251000,
        "unit": "PCS"
      }
    ],
    "basePrice": 251000,
    "priceLabel": "Rp251.000"
  },
  {
    "id": "854",
    "name": "KRAN DAPUR TEMBOK ONDA V-TUL FLEXIBEL",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DAPUR%20TEMBOK%20ONDA%20V-",
    "variants": [
      {
        "sku": "KRNBSTNM12OND",
        "label": "PCS",
        "price": 187000,
        "unit": "PCS"
      }
    ],
    "basePrice": 187000,
    "priceLabel": "Rp187.000"
  },
  {
    "id": "855",
    "name": "KRAN DISPENSER DORONG BIRU",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DISPENSER%20DORONG%20BIR",
    "variants": [
      {
        "sku": "KRDISDRB",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "856",
    "name": "KRAN DISPENSER DORONG MERAH",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DISPENSER%20DORONG%20MER",
    "variants": [
      {
        "sku": "KRDISDRM",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "857",
    "name": "KRAN DISPENSER PENCET BIRU",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DISPENSER%20PENCET%20BIR",
    "variants": [
      {
        "sku": "KRDISPNB",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "858",
    "name": "KRAN DISPENSER PENCET MERAH",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DISPENSER%20PENCET%20MER",
    "variants": [
      {
        "sku": "KRDISPNM",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "859",
    "name": "KRAN DOUBLE BALING WD1039 / KRAN CABANG ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DOUBLE%20BALING%20WD1039",
    "variants": [
      {
        "sku": "KR CBNG WD1039",
        "label": "PCS",
        "price": 32500,
        "unit": "PCS"
      }
    ],
    "basePrice": 32500,
    "priceLabel": "Rp32.500"
  },
  {
    "id": "860",
    "name": "KRAN DOUBLE BALING WD1139 / KRAN CABANG ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DOUBLE%20BALING%20WD1139",
    "variants": [
      {
        "sku": "KR CBNG WD1139",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "861",
    "name": "KRAN DOUBLE ENGKOL WD1131 / KRAN CABANG ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DOUBLE%20ENGKOL%20WD1131",
    "variants": [
      {
        "sku": "KR CBNG WD1131",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "862",
    "name": "KRAN DOUBLE ENGKOL WD1135 / KRAN CABANG ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20DOUBLE%20ENGKOL%20WD1135",
    "variants": [
      {
        "sku": "KR CBNG WD1135",
        "label": "PCS",
        "price": 31500,
        "unit": "PCS"
      }
    ],
    "basePrice": 31500,
    "priceLabel": "Rp31.500"
  },
  {
    "id": "863",
    "name": "KRAN INJAK PEDAL BULAT / PJG",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20INJAK%20PEDAL%20BULAT%20%2F%20",
    "variants": [
      {
        "sku": "KR INJAK",
        "label": "PCS",
        "price": 210000,
        "unit": "PCS"
      }
    ],
    "basePrice": 210000,
    "priceLabel": "Rp210.000"
  },
  {
    "id": "864",
    "name": "KRAN ISCO 1/2 8005",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ISCO%201%2F2%208005",
    "variants": [
      {
        "sku": "MKRIS01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "865",
    "name": "KRAN ISCO 3/4 8005",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20ISCO%203%2F4%208005",
    "variants": [
      {
        "sku": "MKRIS02",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "866",
    "name": "KRAN JOPEX 1/2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20JOPEX%201%2F2",
    "variants": [
      {
        "sku": "MKRJPX01",
        "label": "1/2",
        "price": 45000,
        "unit": "PCS"
      },
      {
        "sku": "MJOKRA01",
        "label": "3/4",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000 - Rp65.000"
  },
  {
    "id": "867",
    "name": "KRAN JOPX 3/4",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20JOPX%203%2F4",
    "variants": [
      {
        "sku": "MKRJPX02",
        "label": "PCS",
        "price": 58000,
        "unit": "PCS"
      }
    ],
    "basePrice": 58000,
    "priceLabel": "Rp58.000"
  },
  {
    "id": "868",
    "name": "KRAN MEJA FLEXIBLE WARNA WF5020 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20MEJA%20FLEXIBLE%20WARNA%20",
    "variants": [
      {
        "sku": "KR MJ WF5020",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "869",
    "name": "KRAN MIXER ONDA BATH-TUL 1/2\"",
    "category": "Sanitary",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20MIXER%20ONDA%20BATH-TUL%20",
    "variants": [
      {
        "sku": "MXRSTBT121OND",
        "label": "PCS",
        "price": 616000,
        "unit": "PCS"
      }
    ],
    "basePrice": 616000,
    "priceLabel": "Rp616.000"
  },
  {
    "id": "870",
    "name": "KRAN MODEL ONDA 1/2",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20MODEL%20ONDA%201%2F2",
    "variants": [
      {
        "sku": "KRMDLON1",
        "label": "1/2",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "KRMDLON2",
        "label": "3/4",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000 - Rp13.000"
  },
  {
    "id": "871",
    "name": "KRAN PANAS DINGIN WHC6701 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PANAS%20DINGIN%20WHC6701",
    "variants": [
      {
        "sku": "KR PD WHC6701",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "872",
    "name": "KRAN PLASTIK HD 1/2",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PLASTIK%20HD%201%2F2",
    "variants": [
      {
        "sku": "KR 1/2 HD",
        "label": "PCS",
        "price": 92500,
        "unit": "PCS"
      }
    ],
    "basePrice": 92500,
    "priceLabel": "Rp92.500"
  },
  {
    "id": "873",
    "name": "KRAN PVC 1/2 HK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PVC%201%2F2%20HK%20HIOSHI",
    "variants": [
      {
        "sku": "KR HK 1/2 HS",
        "label": "PCS",
        "price": 110124,
        "unit": "PCS"
      }
    ],
    "basePrice": 110124,
    "priceLabel": "Rp110.124"
  },
  {
    "id": "874",
    "name": "KRAN PVC 1/2 SINLOG",
    "category": "Umum",
    "brand": "SINLOG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PVC%201%2F2%20SINLOG",
    "variants": [
      {
        "sku": "MSIKRA01",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "875",
    "name": "KRAN PVC 1/2' (TEMBOK)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PVC%201%2F2'%20(TEMBOK)",
    "variants": [
      {
        "sku": "KR PVC 1/2",
        "label": "PCS",
        "price": 109250,
        "unit": "PCS"
      }
    ],
    "basePrice": 109250,
    "priceLabel": "Rp109.250"
  },
  {
    "id": "876",
    "name": "KRAN PVC 3/4 SINLOG",
    "category": "Umum",
    "brand": "SINLOG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PVC%203%2F4%20SINLOG",
    "variants": [
      {
        "sku": "MSIKRA02",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "877",
    "name": "KRAN PVC 3/4' (TEMBOK)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PVC%203%2F4'%20(TEMBOK)",
    "variants": [
      {
        "sku": "KR PVC 3/4",
        "label": "PCS",
        "price": 114000,
        "unit": "PCS"
      }
    ],
    "basePrice": 114000,
    "priceLabel": "Rp114.000"
  },
  {
    "id": "878",
    "name": "KRAN PVC TAMAN OWNER TOPI",
    "category": "Umum",
    "brand": "OWNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20PVC%20TAMAN%20OWNER%20TOPI",
    "variants": [
      {
        "sku": "KRTMN OWN",
        "label": "PCS",
        "price": 50473.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 50473.5,
    "priceLabel": "Rp50.473,5"
  },
  {
    "id": "879",
    "name": "KRAN SHOWER A 1/2 946 EXECUTIVE",
    "category": "Umum",
    "brand": "EXECUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20SHOWER%20A%201%2F2%20946%20EXE",
    "variants": [
      {
        "sku": "KR SH01",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "880",
    "name": "KRAN SHOWER A WSL 1001",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20SHOWER%20A%20WSL%201001",
    "variants": [
      {
        "sku": "KR SH WSL1001",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "881",
    "name": "KRAN SHOWER ISCO WST2001",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20SHOWER%20ISCO%20WST2001",
    "variants": [
      {
        "sku": "KR SH WST2001",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "882",
    "name": "KRAN TAMAN / KRAN TEMBOK WT101 SS304 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20%2F%20KRAN%20TEMBOK%20",
    "variants": [
      {
        "sku": "KR TMN WT101",
        "label": "PCS",
        "price": 19000,
        "unit": "PCS"
      }
    ],
    "basePrice": 19000,
    "priceLabel": "Rp19.000"
  },
  {
    "id": "883",
    "name": "KRAN TAMAN ABS 1/2 SS 8005",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20ABS%201%2F2%20SS%20800",
    "variants": [
      {
        "sku": "KRTMN 1/2 8005",
        "label": "PCS",
        "price": 33500,
        "unit": "PCS"
      }
    ],
    "basePrice": 33500,
    "priceLabel": "Rp33.500"
  },
  {
    "id": "884",
    "name": "KRAN TAMAN ABS 1/2 SS 8117 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20ABS%201%2F2%20SS%20811",
    "variants": [
      {
        "sku": "KRTMN 1/2 8117",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "885",
    "name": "KRAN TAMAN ABS 3/4 SS 8005",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20ABS%203%2F4%20SS%20800",
    "variants": [
      {
        "sku": "KRTMN 3/4 8005",
        "label": "PCS",
        "price": 36000,
        "unit": "PCS"
      }
    ],
    "basePrice": 36000,
    "priceLabel": "Rp36.000"
  },
  {
    "id": "886",
    "name": "KRAN TAMAN ABS WARNA 1/2\" ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20ABS%20WARNA%201%2F2%22",
    "variants": [
      {
        "sku": "KR TMN ABS 1/2",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "887",
    "name": "KRAN TAMAN ABS WARNA 3/4\" ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20ABS%20WARNA%203%2F4%22",
    "variants": [
      {
        "sku": "KR TMN ABS 3/4",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "888",
    "name": "KRAN TAMAN AMICO 1/2",
    "category": "Umum",
    "brand": "AMICO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20AMICO%201%2F2",
    "variants": [
      {
        "sku": "MAMKRA01",
        "label": "1/2",
        "price": 25000,
        "unit": "PCS"
      },
      {
        "sku": "MAMKRA02",
        "label": "3/4",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000 - Rp27.000"
  },
  {
    "id": "889",
    "name": "KRAN TAMAN JEMPOL CC80 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20JEMPOL%20CC80%20IS",
    "variants": [
      {
        "sku": "KR TMN CC80 ISCO",
        "label": "PCS",
        "price": 37500,
        "unit": "PCS"
      }
    ],
    "basePrice": 37500,
    "priceLabel": "Rp37.500"
  },
  {
    "id": "890",
    "name": "KRAN TAMAN JEMPOL HPP",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20JEMPOL%20HPP",
    "variants": [
      {
        "sku": "MKRJEMHP",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "891",
    "name": "KRAN TAMAN KUNINGAN PANJANG 3/4",
    "category": "Umum",
    "brand": "NICHIE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20KUNINGAN%20PANJA",
    "variants": [
      {
        "sku": "KR TMN KNG 3/4",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "892",
    "name": "KRAN TAMAN PVC 1/2 8005 YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20PVC%201%2F2%208005%20Y",
    "variants": [
      {
        "sku": "KR TMN 1/2 YS",
        "label": "PCS",
        "price": 32307.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 32307.6,
    "priceLabel": "Rp32.307,6"
  },
  {
    "id": "893",
    "name": "KRAN TAMAN PVC 1/2 9005 YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20PVC%201%2F2%209005%20Y",
    "variants": [
      {
        "sku": "KR TMN 1/2 YS 9005",
        "label": "PCS",
        "price": 32307.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 32307.6,
    "priceLabel": "Rp32.307,6"
  },
  {
    "id": "894",
    "name": "KRAN TAMAN SOLIGEN 1/2",
    "category": "Umum",
    "brand": "SOLIGEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20SOLIGEN%201%2F2",
    "variants": [
      {
        "sku": "MSOKRA01",
        "label": "1/2",
        "price": 25000,
        "unit": "PCS"
      },
      {
        "sku": "MSOKRA02",
        "label": "3/4",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000 - Rp27.000"
  },
  {
    "id": "895",
    "name": "KRAN TAMAN TRANSPARANT 206 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20TRANSPARANT%2020",
    "variants": [
      {
        "sku": "KR TMN 206",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "896",
    "name": "KRAN TAMAN TWO WAY TRANSPARAN GRT",
    "category": "Sanitary",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TAMAN%20TWO%20WAY%20TRANSP",
    "variants": [
      {
        "sku": "KR TMN GRT",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "897",
    "name": "KRAN TEMBOK 1/2 927 EXECUTIVE",
    "category": "Umum",
    "brand": "EXECUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%201%2F2%20927%20EXECU",
    "variants": [
      {
        "sku": "KR TB01",
        "label": "PCS",
        "price": 20454.55,
        "unit": "PCS"
      }
    ],
    "basePrice": 20454.55,
    "priceLabel": "Rp20.454,55"
  },
  {
    "id": "898",
    "name": "KRAN TEMBOK 3/4 927 EXECUTIVE",
    "category": "Umum",
    "brand": "EXECUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%203%2F4%20927%20EXECU",
    "variants": [
      {
        "sku": "KR TB02",
        "label": "PCS",
        "price": 20909.09,
        "unit": "PCS"
      }
    ],
    "basePrice": 20909.09,
    "priceLabel": "Rp20.909,09"
  },
  {
    "id": "899",
    "name": "KRAN TEMBOK BC 1/2 ONDA",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20BC%201%2F2%20ONDA",
    "variants": [
      {
        "sku": "BC ONDA 1/2",
        "label": "PCS",
        "price": 37500,
        "unit": "PCS"
      }
    ],
    "basePrice": 37500,
    "priceLabel": "Rp37.500"
  },
  {
    "id": "900",
    "name": "KRAN TEMBOK BC 3/4 ONDA",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20BC%203%2F4%20ONDA",
    "variants": [
      {
        "sku": "BC ONDA 3/4 NEW",
        "label": "PCS",
        "price": 74000,
        "unit": "PCS"
      }
    ],
    "basePrice": 74000,
    "priceLabel": "Rp74.000"
  },
  {
    "id": "901",
    "name": "KRAN TEMBOK BL 3/4 ONDA",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20BL%203%2F4%20ONDA",
    "variants": [
      {
        "sku": "BL ONDA 3/4 NEW",
        "label": "PCS",
        "price": 53000,
        "unit": "PCS"
      }
    ],
    "basePrice": 53000,
    "priceLabel": "Rp53.000"
  },
  {
    "id": "902",
    "name": "KRAN TEMBOK IGM IK-059",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20IGM%20IK-059",
    "variants": [
      {
        "sku": "MIGKRA02",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "903",
    "name": "KRAN TEMBOK ONDA A 801 T 1/2",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20ONDA%20A%20801%20T%20",
    "variants": [
      {
        "sku": "A801 T ONDA 1/2",
        "label": "PCS",
        "price": 77000,
        "unit": "PCS"
      }
    ],
    "basePrice": 77000,
    "priceLabel": "Rp77.000"
  },
  {
    "id": "904",
    "name": "KRAN TEMBOK ONDA A-SUS 1/2",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20ONDA%20A-SUS%201%2F",
    "variants": [
      {
        "sku": "A SUS ONDA 1/2",
        "label": "PCS",
        "price": 108000,
        "unit": "PCS"
      }
    ],
    "basePrice": 108000,
    "priceLabel": "Rp108.000"
  },
  {
    "id": "905",
    "name": "KRAN TEMBOK ONDA CLS 02 1/2",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20ONDA%20CLS%2002%201",
    "variants": [
      {
        "sku": "CLS 02 ONDA 1/2",
        "label": "PCS",
        "price": 79500,
        "unit": "PCS"
      }
    ],
    "basePrice": 79500,
    "priceLabel": "Rp79.500"
  },
  {
    "id": "906",
    "name": "KRAN TEMBOK PVC WILMER HIT",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TEMBOK%20PVC%20WILMER%20HI",
    "variants": [
      {
        "sku": "MKRPVWIL",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "907",
    "name": "KRAN TIMAH 1/2 SINLOG",
    "category": "Umum",
    "brand": "SINLOG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TIMAH%201%2F2%20SINLOG",
    "variants": [
      {
        "sku": "MSIKRA03",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "908",
    "name": "KRAN TIMAH 3/4 SINLOG",
    "category": "Umum",
    "brand": "SINLOG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TIMAH%203%2F4%20SINLOG",
    "variants": [
      {
        "sku": "MSIKRA04",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "909",
    "name": "KRAN TWO WAY MDN 1007",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20TWO%20WAY%20MDN%201007",
    "variants": [
      {
        "sku": "MKRTWMDN",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "910",
    "name": "KRAN WASTAFEL 933 EXECUTIVE",
    "category": "Umum",
    "brand": "EXECUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20WASTAFEL%20933%20EXECUTI",
    "variants": [
      {
        "sku": "KR WT933",
        "label": "PCS",
        "price": 31454.54,
        "unit": "PCS"
      }
    ],
    "basePrice": 31454.54,
    "priceLabel": "Rp31.454,54"
  },
  {
    "id": "911",
    "name": "KRAN WASTAFEL ABS IGM IK-050",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20WASTAFEL%20ABS%20IGM%20IK-",
    "variants": [
      {
        "sku": "KR WTIGM IK050",
        "label": "PCS",
        "price": 14090.91,
        "unit": "PCS"
      }
    ],
    "basePrice": 14090.91,
    "priceLabel": "Rp14.090,91"
  },
  {
    "id": "912",
    "name": "KRAN WASTAFEL ONDA Y 321 C 1/2\"",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KRAN%20WASTAFEL%20ONDA%20Y%20321%20",
    "variants": [
      {
        "sku": "BSTCHY321COND",
        "label": "PCS",
        "price": 184000,
        "unit": "PCS"
      }
    ],
    "basePrice": 184000,
    "priceLabel": "Rp184.000"
  },
  {
    "id": "913",
    "name": "KUAS 1/2”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%201%2F2%E2%80%9D",
    "variants": [
      {
        "sku": "MNOKUA02",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "914",
    "name": "KUAS 3/4”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%203%2F4%E2%80%9D",
    "variants": [
      {
        "sku": "MNOKUA03",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "915",
    "name": "KUAS CAT 1.5\" 633",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%201.5%22%20633",
    "variants": [
      {
        "sku": "KUAS 1.5",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "916",
    "name": "KUAS CAT 1\" 633",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%201%22%20633",
    "variants": [
      {
        "sku": "KUAS 1",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "917",
    "name": "KUAS CAT 2.5\" 633",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%202.5%22%20633",
    "variants": [
      {
        "sku": "KUAS 2.5",
        "label": "PCS",
        "price": 4500,
        "unit": "PCS"
      }
    ],
    "basePrice": 4500,
    "priceLabel": "Rp4.500"
  },
  {
    "id": "918",
    "name": "KUAS CAT 2.5\" PROFIX",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%202.5%22%20PROFIX",
    "variants": [
      {
        "sku": "KUAS 2.5 PRO",
        "label": "PCS",
        "price": 26250,
        "unit": "PCS"
      }
    ],
    "basePrice": 26250,
    "priceLabel": "Rp26.250"
  },
  {
    "id": "919",
    "name": "KUAS CAT 2\" 633",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%202%22%20633",
    "variants": [
      {
        "sku": "KUAS 2",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "920",
    "name": "KUAS CAT 3\" 633",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%203%22%20633",
    "variants": [
      {
        "sku": "KUAS 3",
        "label": "PCS",
        "price": 5500,
        "unit": "PCS"
      }
    ],
    "basePrice": 5500,
    "priceLabel": "Rp5.500"
  },
  {
    "id": "921",
    "name": "KUAS CAT 3\" PROFIX",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%203%22%20PROFIX",
    "variants": [
      {
        "sku": "KUAS 3 PRO",
        "label": "PCS",
        "price": 31500,
        "unit": "PCS"
      }
    ],
    "basePrice": 31500,
    "priceLabel": "Rp31.500"
  },
  {
    "id": "922",
    "name": "KUAS CAT 4\" 633",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%204%22%20633",
    "variants": [
      {
        "sku": "KUAS 4",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "923",
    "name": "KUAS CAT 5\" 633",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%205%22%20633",
    "variants": [
      {
        "sku": "KUAS 5",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "924",
    "name": "KUAS CAT PUTIH 1,5\" HMV",
    "category": "Umum",
    "brand": "HUMVEE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%201%2C5%22%20HMV",
    "variants": [
      {
        "sku": "KUAS 1.5 HMV",
        "label": "PCS",
        "price": 16740,
        "unit": "PCS"
      }
    ],
    "basePrice": 16740,
    "priceLabel": "Rp16.740"
  },
  {
    "id": "925",
    "name": "KUAS CAT PUTIH 1,5\" LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%201%2C5%22%20LEON",
    "variants": [
      {
        "sku": "KUAS 1.5 LEON",
        "label": "PCS",
        "price": 14250,
        "unit": "PCS"
      }
    ],
    "basePrice": 14250,
    "priceLabel": "Rp14.250"
  },
  {
    "id": "926",
    "name": "KUAS CAT PUTIH 1\" HMV",
    "category": "Umum",
    "brand": "HMV",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%201%22%20HMV",
    "variants": [
      {
        "sku": "KUAS 1 HMV",
        "label": "PCS",
        "price": 11160,
        "unit": "PCS"
      }
    ],
    "basePrice": 11160,
    "priceLabel": "Rp11.160"
  },
  {
    "id": "927",
    "name": "KUAS CAT PUTIH 1\" LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%201%22%20LEON",
    "variants": [
      {
        "sku": "KUAS 1 LEON",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "928",
    "name": "KUAS CAT PUTIH 2,5\" HMV",
    "category": "Umum",
    "brand": "HUMVEE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%202%2C5%22%20HMV",
    "variants": [
      {
        "sku": "KUAS 2.5 HMV",
        "label": "PCS",
        "price": 27900,
        "unit": "PCS"
      }
    ],
    "basePrice": 27900,
    "priceLabel": "Rp27.900"
  },
  {
    "id": "929",
    "name": "KUAS CAT PUTIH 2\" LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%202%22%20LEON",
    "variants": [
      {
        "sku": "KUAS 2 LEON",
        "label": "PCS",
        "price": 21000,
        "unit": "PCS"
      }
    ],
    "basePrice": 21000,
    "priceLabel": "Rp21.000"
  },
  {
    "id": "930",
    "name": "KUAS CAT PUTIH 3\" LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%203%22%20LEON",
    "variants": [
      {
        "sku": "KUAS 3 LEON",
        "label": "PCS",
        "price": 31500,
        "unit": "PCS"
      }
    ],
    "basePrice": 31500,
    "priceLabel": "Rp31.500"
  },
  {
    "id": "931",
    "name": "KUAS CAT PUTIH 4\" HMV",
    "category": "Umum",
    "brand": "HUMVEE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%204%22%20HMV",
    "variants": [
      {
        "sku": "KUAS 4 HMV",
        "label": "PCS",
        "price": 40500,
        "unit": "PCS"
      }
    ],
    "basePrice": 40500,
    "priceLabel": "Rp40.500"
  },
  {
    "id": "932",
    "name": "KUAS CAT PUTIH 5\" HMV",
    "category": "Umum",
    "brand": "HUMVEE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%205%22%20HMV",
    "variants": [
      {
        "sku": "KUAS 5 HMV",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "933",
    "name": "KUAS CAT PUTIH 5\" LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20CAT%20PUTIH%205%22%20LEON",
    "variants": [
      {
        "sku": "KUAS 5 LEON",
        "label": "PCS",
        "price": 57500,
        "unit": "PCS"
      }
    ],
    "basePrice": 57500,
    "priceLabel": "Rp57.500"
  },
  {
    "id": "934",
    "name": "KUAS ETERNA 1,5\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ETERNA%201%2C5%22",
    "variants": [
      {
        "sku": "MKUAETR2",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "935",
    "name": "KUAS ETERNA 1\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ETERNA%201%22",
    "variants": [
      {
        "sku": "MKUAETR1",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "936",
    "name": "KUAS ETERNA 2,5\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ETERNA%202%2C5%22",
    "variants": [
      {
        "sku": "MKUAETR4",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "937",
    "name": "KUAS ETERNA 2\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ETERNA%202%22",
    "variants": [
      {
        "sku": "MKUAETR3",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "938",
    "name": "KUAS ETERNA 3\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ETERNA%203%22",
    "variants": [
      {
        "sku": "MKUAETR5",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "939",
    "name": "KUAS ETERNA 4\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ETERNA%204%22",
    "variants": [
      {
        "sku": "MKUAETR6",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "940",
    "name": "KUAS FW 1,5",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20FW%201%2C5",
    "variants": [
      {
        "sku": "MKUASFW2",
        "label": "PCS",
        "price": 6500,
        "unit": "PCS"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "941",
    "name": "KUAS FW 1\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20FW%201%22",
    "variants": [
      {
        "sku": "MKUASFW1",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "942",
    "name": "KUAS FW 2,5\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20FW%202%2C5%22",
    "variants": [
      {
        "sku": "MKUASFW4",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "943",
    "name": "KUAS FW 2\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20FW%202%22",
    "variants": [
      {
        "sku": "MKUASFW3",
        "label": "PCS",
        "price": 8500,
        "unit": "PCS"
      }
    ],
    "basePrice": 8500,
    "priceLabel": "Rp8.500"
  },
  {
    "id": "944",
    "name": "KUAS FW 3\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20FW%203%22",
    "variants": [
      {
        "sku": "MKUASFW5",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "945",
    "name": "KUAS FW 4\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20FW%204%22",
    "variants": [
      {
        "sku": "MKUASFW6",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "946",
    "name": "KUAS LUKIS 6\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20LUKIS%206%22",
    "variants": [
      {
        "sku": "MKUALKS6",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "947",
    "name": "KUAS LUKIS 8\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20LUKIS%208%22",
    "variants": [
      {
        "sku": "MKUALKS8",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "948",
    "name": "KUAS PRIMA 2\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20PRIMA%202%22",
    "variants": [
      {
        "sku": "KUASPRM2",
        "label": "PCS",
        "price": 8500,
        "unit": "PCS"
      }
    ],
    "basePrice": 8500,
    "priceLabel": "Rp8.500"
  },
  {
    "id": "949",
    "name": "KUAS ROLL ETERNA",
    "category": "Umum",
    "brand": "ETERNA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20ETERNA",
    "variants": [
      {
        "sku": "METKUA01",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "950",
    "name": "KUAS ROLL GRT 9\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20GRT%209%22",
    "variants": [
      {
        "sku": "KUAS R GRT",
        "label": "PCS",
        "price": 183300,
        "unit": "PCS"
      }
    ],
    "basePrice": 183300,
    "priceLabel": "Rp183.300"
  },
  {
    "id": "951",
    "name": "KUAS ROLL KAPAL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20KAPAL",
    "variants": [
      {
        "sku": "KUAS R KPL",
        "label": "PCS",
        "price": 8500,
        "unit": "PCS"
      }
    ],
    "basePrice": 8500,
    "priceLabel": "Rp8.500"
  },
  {
    "id": "952",
    "name": "KUAS ROLL KAPAL HD4 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20KAPAL%20HD4%20HIOSH",
    "variants": [
      {
        "sku": "KUAS R HD4",
        "label": "PCS",
        "price": 118750,
        "unit": "PCS"
      }
    ],
    "basePrice": 118750,
    "priceLabel": "Rp118.750"
  },
  {
    "id": "953",
    "name": "KUAS ROLL LEON 9\"",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20LEON%209%22",
    "variants": [
      {
        "sku": "KUAS R 9",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "954",
    "name": "KUAS ROLL PRO 9 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20PRO%209%20HIOSHI",
    "variants": [
      {
        "sku": "KUAS R PRO9",
        "label": "PCS",
        "price": 25175,
        "unit": "PCS"
      }
    ],
    "basePrice": 25175,
    "priceLabel": "Rp25.175"
  },
  {
    "id": "955",
    "name": "KUAS ROLL STALLION",
    "category": "Umum",
    "brand": "STALLION",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20STALLION",
    "variants": [
      {
        "sku": "MSTKUA02",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "956",
    "name": "KUAS ROLL STALLION 9'",
    "category": "Umum",
    "brand": "STALLION",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20STALLION%209'",
    "variants": [
      {
        "sku": "KUAS R STL",
        "label": "PCS",
        "price": 53000,
        "unit": "PCS"
      }
    ],
    "basePrice": 53000,
    "priceLabel": "Rp53.000"
  },
  {
    "id": "957",
    "name": "KUAS ROLL STANDAT",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20ROLL%20STANDAT",
    "variants": [
      {
        "sku": "MKROLSTD",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "958",
    "name": "KUAS TAIYO 1,5",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20TAIYO%201%2C5",
    "variants": [
      {
        "sku": "MKUATAI2",
        "label": "PCS",
        "price": 6500,
        "unit": "PCS"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "959",
    "name": "KUAS TAIYO 1\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20TAIYO%201%22",
    "variants": [
      {
        "sku": "MKUATAI1",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "960",
    "name": "KUAS TAIYO 2,5",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20TAIYO%202%2C5",
    "variants": [
      {
        "sku": "MKUATAI4",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "961",
    "name": "KUAS TAIYO 2\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20TAIYO%202%22",
    "variants": [
      {
        "sku": "MKUATAI3",
        "label": "PCS",
        "price": 8500,
        "unit": "PCS"
      }
    ],
    "basePrice": 8500,
    "priceLabel": "Rp8.500"
  },
  {
    "id": "962",
    "name": "KUAS TAIYO 3\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20TAIYO%203%22",
    "variants": [
      {
        "sku": "MKUATAI5",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "963",
    "name": "KUAS TAIYO 4\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUAS%20TAIYO%204%22",
    "variants": [
      {
        "sku": "MKUATAI6",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "964",
    "name": "KUNCI BULAT CHROME ARNETTA",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20BULAT%20CHROME%20ARNETT",
    "variants": [
      {
        "sku": "MKUNBLAR",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "965",
    "name": "KUNCI BUSI 1/2\" X 21 TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20BUSI%201%2F2%22%20X%2021%20TEKI",
    "variants": [
      {
        "sku": "KUBS12TK",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "966",
    "name": "KUNCI BUSI 3/8\" X 21 TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20BUSI%203%2F8%22%20X%2021%20TEKI",
    "variants": [
      {
        "sku": "KUBS38TK",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "967",
    "name": "KUNCI ECO PAS 8 PC (6-22) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20ECO%20PAS%208%20PC%20(6-22)",
    "variants": [
      {
        "sku": "KE PAS 8",
        "label": "PCS",
        "price": 78731.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 78731.25,
    "priceLabel": "Rp78.731,25"
  },
  {
    "id": "968",
    "name": "KUNCI ECO RING 8 PC (6-22) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20ECO%20RING%208%20PC%20(6-22",
    "variants": [
      {
        "sku": "KR ECO 8",
        "label": "PCS",
        "price": 92625,
        "unit": "PCS"
      }
    ],
    "basePrice": 92625,
    "priceLabel": "Rp92.625"
  },
  {
    "id": "969",
    "name": "KUNCI ECO RING PAS 8 PC (8-24) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20ECO%20RING%20PAS%208%20PC%20(",
    "variants": [
      {
        "sku": "KR ECO PAS 8",
        "label": "PCS",
        "price": 98325,
        "unit": "PCS"
      }
    ],
    "basePrice": 98325,
    "priceLabel": "Rp98.325"
  },
  {
    "id": "970",
    "name": "KUNCI INGGRIS BIASA 10\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20BIASA%2010%22",
    "variants": [
      {
        "sku": "MNOKUN11",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "971",
    "name": "KUNCI INGGRIS BIASA 12\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20BIASA%2012%22",
    "variants": [
      {
        "sku": "MNOKUN12",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "972",
    "name": "KUNCI INGGRIS BIASA 15\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20BIASA%2015%22",
    "variants": [
      {
        "sku": "MNOKUN13",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "973",
    "name": "KUNCI INGGRIS BIASA 8\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20BIASA%208%22",
    "variants": [
      {
        "sku": "MNOKUN10",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "974",
    "name": "KUNCI INGGRIS ESSEN 10”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20ESSEN%2010%E2%80%9D",
    "variants": [
      {
        "sku": "MESKUN03",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "975",
    "name": "KUNCI INGGRIS ESSEN 6”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20ESSEN%206%E2%80%9D",
    "variants": [
      {
        "sku": "MESKUN01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "976",
    "name": "KUNCI INGGRIS ESSEN 8”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20ESSEN%208%E2%80%9D",
    "variants": [
      {
        "sku": "MESKUN02",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "977",
    "name": "KUNCI INGGRIS HASSTON 6\"",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20HASSTON%206%22",
    "variants": [
      {
        "sku": "MHAKUN01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "978",
    "name": "KUNCI INGGRIS TEKIRO 10”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20TEKIRO%2010%E2%80%9D",
    "variants": [
      {
        "sku": "MTEKUN04",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "979",
    "name": "KUNCI INGGRIS TEKIRO 12”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20TEKIRO%2012%E2%80%9D",
    "variants": [
      {
        "sku": "MTEKUN05",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "980",
    "name": "KUNCI INGGRIS TEKIRO 8”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20INGGRIS%20TEKIRO%208%E2%80%9D",
    "variants": [
      {
        "sku": "MTEKUN03",
        "label": "PCS",
        "price": 74000,
        "unit": "PCS"
      }
    ],
    "basePrice": 74000,
    "priceLabel": "Rp74.000"
  },
  {
    "id": "981",
    "name": "KUNCI KECIL CLASSIC SN/CP",
    "category": "Umum",
    "brand": "CLASSIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20KECIL%20CLASSIC%20SN%2FCP",
    "variants": [
      {
        "sku": "KC KCL CLS",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "982",
    "name": "KUNCI KEPALA BOR BC",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20KEPALA%20BOR%20BC",
    "variants": [
      {
        "sku": "KC KPL BOR BC",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "983",
    "name": "KUNCI L BALLPOINT DREXEL 7'",
    "category": "Alat tukang",
    "brand": "DREXEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20BALLPOINT%20DREXEL%20",
    "variants": [
      {
        "sku": "MDRKUN01",
        "label": "SET",
        "price": 40000,
        "unit": "SET"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "984",
    "name": "KUNCI L BINTANG PANJANG T 40 TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20BINTANG%20PANJANG%20T",
    "variants": [
      {
        "sku": "MKLBNPT40",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "985",
    "name": "KUNCI L CRV LONG (BOX) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20CRV%20LONG%20(BOX)%20HI",
    "variants": [
      {
        "sku": "KC L HS BOX",
        "label": "PCS",
        "price": 55936,
        "unit": "PCS"
      }
    ],
    "basePrice": 55936,
    "priceLabel": "Rp55.936"
  },
  {
    "id": "986",
    "name": "KUNCI L KLEP BINTANG T40 TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20KLEP%20BINTANG%20T40%20",
    "variants": [
      {
        "sku": "MKLKLBNTEKT40",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "987",
    "name": "KUNCI L PENDEK ECER 3MM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20PENDEK%20ECER%203MM",
    "variants": [
      {
        "sku": "MNOKUN16",
        "label": "3MM",
        "price": 5000,
        "unit": "BOX"
      },
      {
        "sku": "MNOKUN17",
        "label": "4MM",
        "price": 6000,
        "unit": "BOX"
      },
      {
        "sku": "MNOKUN18",
        "label": "6MM",
        "price": 9000,
        "unit": "BOX"
      },
      {
        "sku": "MNOKUN19",
        "label": "8MM",
        "price": 12000,
        "unit": "BOX"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000 - Rp12.000"
  },
  {
    "id": "988",
    "name": "KUNCI L SET 10 PC HTM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%2010%20PC%20HTM%20HIO",
    "variants": [
      {
        "sku": "KC L SET HS",
        "label": "PCS",
        "price": 8358,
        "unit": "PCS"
      }
    ],
    "basePrice": 8358,
    "priceLabel": "Rp8.358"
  },
  {
    "id": "989",
    "name": "KUNCI L SET 10 PC PTH HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%2010%20PC%20PTH%20HIO",
    "variants": [
      {
        "sku": "KC L SET PTH",
        "label": "PCS",
        "price": 9109.61,
        "unit": "PCS"
      }
    ],
    "basePrice": 9109.61,
    "priceLabel": "Rp9.109,61"
  },
  {
    "id": "990",
    "name": "KUNCI L SET BALLPOINT TEKIRO HK-BP1204",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%20BALLPOINT%20TEK",
    "variants": [
      {
        "sku": "MTEKUN01",
        "label": "PCS",
        "price": 192000,
        "unit": "PCS"
      }
    ],
    "basePrice": 192000,
    "priceLabel": "Rp192.000"
  },
  {
    "id": "991",
    "name": "KUNCI L SET BINTANG TEKIRO LUBANG PJG",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%20BINTANG%20TEKIR",
    "variants": [
      {
        "sku": "KLBLTKPJ",
        "label": "SET",
        "price": 200000,
        "unit": "SET"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "992",
    "name": "KUNCI L SET PANJANG TEKIRO HK-LS1200",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%20PANJANG%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN02",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "993",
    "name": "KUNCI L SET PENDEK TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%20PENDEK%20TEKIRO",
    "variants": [
      {
        "sku": "KLPDKTKR",
        "label": "SET",
        "price": 85000,
        "unit": "SET"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "994",
    "name": "KUNCI L SET PENDEK WANLY",
    "category": "Alat tukang",
    "brand": "WANLY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20L%20SET%20PENDEK%20WANLY",
    "variants": [
      {
        "sku": "MWAKUN01",
        "label": "SET",
        "price": 10000,
        "unit": "SET"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "995",
    "name": "KUNCI LACI 101 FERZA",
    "category": "Umum",
    "brand": "FERZA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20101%20FERZA",
    "variants": [
      {
        "sku": "MFEKUN01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "996",
    "name": "KUNCI LACI 101 TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20101%20TOP",
    "variants": [
      {
        "sku": "MTOKUN02",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "997",
    "name": "KUNCI LACI 181 M2 HUBEN",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20181%20M2%20HUBEN",
    "variants": [
      {
        "sku": "MHUKUN09",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "998",
    "name": "KUNCI LACI 2\" CAMEL",
    "category": "Umum",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%202%22%20CAMEL",
    "variants": [
      {
        "sku": "MCAKUN01",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "999",
    "name": "KUNCI LACI 508 KECIL MERCY",
    "category": "Umum",
    "brand": "MERCY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20508%20KECIL%20MERC",
    "variants": [
      {
        "sku": "MMEKUN01",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1000",
    "name": "KUNCI LACI 808 BESAR",
    "category": "Umum",
    "brand": "808",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20808%20BESAR",
    "variants": [
      {
        "sku": "M80KUN02",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1001",
    "name": "KUNCI LACI 808 KECIL",
    "category": "Umum",
    "brand": "808",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20808%20KECIL",
    "variants": [
      {
        "sku": "M80KUN01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1002",
    "name": "KUNCI LACI CAMLOCK 103-30 HUBEN",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20CAMLOCK%20103-30",
    "variants": [
      {
        "sku": "MHUKUN10",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1003",
    "name": "KUNCI LACI GERGAJI HUBEN HL-140",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20GERGAJI%20HUBEN%20",
    "variants": [
      {
        "sku": "MHUKUN01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1004",
    "name": "KUNCI LACI HUBEN 103-30",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20HUBEN%20103-30",
    "variants": [
      {
        "sku": "MHUKUN07",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1005",
    "name": "KUNCI LACI HUBEN 138-22",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20HUBEN%20138-22",
    "variants": [
      {
        "sku": "MHUKUN05",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1006",
    "name": "KUNCI LACI HUBEN 181 M2",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20HUBEN%20181%20M2",
    "variants": [
      {
        "sku": "MHUKUN06",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1007",
    "name": "KUNCI LACI HUBEN TUSUK 105",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20HUBEN%20TUSUK%2010",
    "variants": [
      {
        "sku": "MHUKUN02",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1008",
    "name": "KUNCI LACI MEKAR HUBEN 202",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20LACI%20MEKAR%20HUBEN%2020",
    "variants": [
      {
        "sku": "MHUKUN04",
        "label": "202",
        "price": 15000,
        "unit": "PCS"
      },
      {
        "sku": "MHUKUN03",
        "label": "505",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000 - Rp15.000"
  },
  {
    "id": "1009",
    "name": "KUNCI MAHKOTA TIPE A",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20MAHKOTA%20TIPE%20A",
    "variants": [
      {
        "sku": "MNOKUN14",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1010",
    "name": "KUNCI MAHKOTA TIPE B",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20MAHKOTA%20TIPE%20B",
    "variants": [
      {
        "sku": "KUMAHBG",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1011",
    "name": "KUNCI MESIN GERINDA",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20MESIN%20GERINDA",
    "variants": [
      {
        "sku": "MKUNGRD",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1012",
    "name": "KUNCI OIL FILTER TEKIRO 6”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20OIL%20FILTER%20TEKIRO%206",
    "variants": [
      {
        "sku": "MTEKUN25",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1013",
    "name": "KUNCI OIL FILTER TEKIRO 9”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20OIL%20FILTER%20TEKIRO%209",
    "variants": [
      {
        "sku": "MTEKUN26",
        "label": "PCS",
        "price": 116000,
        "unit": "PCS"
      }
    ],
    "basePrice": 116000,
    "priceLabel": "Rp116.000"
  },
  {
    "id": "1014",
    "name": "KUNCI PAS 12 X 13 DIAMOND",
    "category": "Umum",
    "brand": "DIAMOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%2012%20X%2013%20DIAMOND",
    "variants": [
      {
        "sku": "KC PAS 12X13",
        "label": "PCS",
        "price": 2300,
        "unit": "PCS"
      }
    ],
    "basePrice": 2300,
    "priceLabel": "Rp2.300"
  },
  {
    "id": "1015",
    "name": "KUNCI PAS ECO 10 X 11 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2010%20X%2011%20HIO",
    "variants": [
      {
        "sku": "KP ECO 10X11",
        "label": "PCS",
        "price": 6555,
        "unit": "PCS"
      }
    ],
    "basePrice": 6555,
    "priceLabel": "Rp6.555"
  },
  {
    "id": "1016",
    "name": "KUNCI PAS ECO 10 X 12 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2010%20X%2012%20HIO",
    "variants": [
      {
        "sku": "KP ECO 10X12",
        "label": "PCS",
        "price": 5492.19,
        "unit": "PCS"
      }
    ],
    "basePrice": 5492.19,
    "priceLabel": "Rp5.492,19"
  },
  {
    "id": "1017",
    "name": "KUNCI PAS ECO 12 X 13 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2012%20X%2013%20HIO",
    "variants": [
      {
        "sku": "KP ECO 12X13",
        "label": "PCS",
        "price": 7374.37,
        "unit": "PCS"
      }
    ],
    "basePrice": 7374.37,
    "priceLabel": "Rp7.374,37"
  },
  {
    "id": "1018",
    "name": "KUNCI PAS ECO 14 X 15 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2014%20X%2015%20HIO",
    "variants": [
      {
        "sku": "KP ECO 14X15",
        "label": "PCS",
        "price": 8093.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 8093.75,
    "priceLabel": "Rp8.093,75"
  },
  {
    "id": "1019",
    "name": "KUNCI PAS ECO 16 X 17 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2016%20X%2017%20HIO",
    "variants": [
      {
        "sku": "KP ECO 16X17",
        "label": "PCS",
        "price": 10175,
        "unit": "PCS"
      }
    ],
    "basePrice": 10175,
    "priceLabel": "Rp10.175"
  },
  {
    "id": "1020",
    "name": "KUNCI PAS ECO 18 X 19 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2018%20X%2019%20HIO",
    "variants": [
      {
        "sku": "KP ECO 18X19",
        "label": "PCS",
        "price": 10868.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 10868.75,
    "priceLabel": "Rp10.868,75"
  },
  {
    "id": "1021",
    "name": "KUNCI PAS ECO 19 X 21 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2019%20X%2021%20HIO",
    "variants": [
      {
        "sku": "KP ECO 19X21",
        "label": "PCS",
        "price": 10545,
        "unit": "PCS"
      }
    ],
    "basePrice": 10545,
    "priceLabel": "Rp10.545"
  },
  {
    "id": "1022",
    "name": "KUNCI PAS ECO 24 X 27 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%2024%20X%2027%20HIO",
    "variants": [
      {
        "sku": "KP ECO 24X27",
        "label": "PCS",
        "price": 17575,
        "unit": "PCS"
      }
    ],
    "basePrice": 17575,
    "priceLabel": "Rp17.575"
  },
  {
    "id": "1023",
    "name": "KUNCI PAS ECO 8 X 10 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%208%20X%2010%20HIOS",
    "variants": [
      {
        "sku": "KP ECO 8X10",
        "label": "PCS",
        "price": 5052.81,
        "unit": "PCS"
      }
    ],
    "basePrice": 5052.81,
    "priceLabel": "Rp5.052,81"
  },
  {
    "id": "1024",
    "name": "KUNCI PAS ECO 8 X 9 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20ECO%208%20X%209%20HIOSH",
    "variants": [
      {
        "sku": "KP ECO 8X9",
        "label": "PCS",
        "price": 5318.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 5318.75,
    "priceLabel": "Rp5.318,75"
  },
  {
    "id": "1025",
    "name": "KUNCI PAS SATIN 12 X 14 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20SATIN%2012%20X%2014%20H",
    "variants": [
      {
        "sku": "KP SATIN 12X14",
        "label": "PCS",
        "price": 6590.63,
        "unit": "PCS"
      }
    ],
    "basePrice": 6590.63,
    "priceLabel": "Rp6.590,63"
  },
  {
    "id": "1026",
    "name": "KUNCI PAS SATIN 14 X 17 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20SATIN%2014%20X%2017%20H",
    "variants": [
      {
        "sku": "KP SATIN 14X17",
        "label": "PCS",
        "price": 7689.06,
        "unit": "PCS"
      }
    ],
    "basePrice": 7689.06,
    "priceLabel": "Rp7.689,06"
  },
  {
    "id": "1027",
    "name": "KUNCI PAS SATIN 17 X 19 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20SATIN%2017%20X%2019%20H",
    "variants": [
      {
        "sku": "KP SATIN 17X19",
        "label": "PCS",
        "price": 10325.31,
        "unit": "PCS"
      }
    ],
    "basePrice": 10325.31,
    "priceLabel": "Rp10.325,31"
  },
  {
    "id": "1028",
    "name": "KUNCI PAS SATIN 22 X 24 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PAS%20SATIN%2022%20X%2024%20H",
    "variants": [
      {
        "sku": "KP SATIN 22X24",
        "label": "PCS",
        "price": 16625,
        "unit": "PCS"
      }
    ],
    "basePrice": 16625,
    "priceLabel": "Rp16.625"
  },
  {
    "id": "1029",
    "name": "KUNCI PINTU ALM A1 BL ORCHAD",
    "category": "Umum",
    "brand": "ORCAD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20ALM%20A1%20BL%20ORC",
    "variants": [
      {
        "sku": "MORKUN05",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "1030",
    "name": "KUNCI PINTU ALM A1 WH ORCHAD",
    "category": "Umum",
    "brand": "ORCAD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20ALM%20A1%20WH%20ORC",
    "variants": [
      {
        "sku": "MORKUN04",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "1031",
    "name": "KUNCI PINTU ALM P2 BL ORCHAD",
    "category": "Umum",
    "brand": "ORCAD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20ALM%20P2%20BL%20ORC",
    "variants": [
      {
        "sku": "MORKUN01",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1032",
    "name": "KUNCI PINTU ALM P2 WH ORCHAD",
    "category": "Umum",
    "brand": "ORCAD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20ALM%20P2%20WH%20ORC",
    "variants": [
      {
        "sku": "MORKUN02",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1033",
    "name": "KUNCI PINTU BABET KECIL NETZ",
    "category": "Umum",
    "brand": "NETZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BABET%20KECIL%20N",
    "variants": [
      {
        "sku": "MNEKUN01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1034",
    "name": "KUNCI PINTU BESAR BOSTON LXS",
    "category": "Umum",
    "brand": "BOSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20BOSTON%20",
    "variants": [
      {
        "sku": "MBOKUN01",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1035",
    "name": "KUNCI PINTU BESAR BULAT TP9001-1 GP GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20BULAT%20T",
    "variants": [
      {
        "sku": "MGOKUN30",
        "label": "PCS",
        "price": 165000,
        "unit": "PCS"
      }
    ],
    "basePrice": 165000,
    "priceLabel": "Rp165.000"
  },
  {
    "id": "1036",
    "name": "KUNCI PINTU BESAR CAB 9006 SN/GP",
    "category": "Umum",
    "brand": "CAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20CAB%20900",
    "variants": [
      {
        "sku": "MCAKUN02",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1037",
    "name": "KUNCI PINTU BESAR GOMEO 9001-1 KUNING",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20GOMEO%209",
    "variants": [
      {
        "sku": "KP GM 9001-1",
        "label": "PCS",
        "price": 165000,
        "unit": "PCS"
      }
    ],
    "basePrice": 165000,
    "priceLabel": "Rp165.000"
  },
  {
    "id": "1038",
    "name": "KUNCI PINTU BESAR HITAM OWNER",
    "category": "Umum",
    "brand": "OWNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20HITAM%20O",
    "variants": [
      {
        "sku": "KP BS HTM OWN",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1039",
    "name": "KUNCI PINTU BESAR KOTAK TP9012-2 CP GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20KOTAK%20T",
    "variants": [
      {
        "sku": "MGOKUN29",
        "label": "PCS",
        "price": 165000,
        "unit": "PCS"
      }
    ],
    "basePrice": 165000,
    "priceLabel": "Rp165.000"
  },
  {
    "id": "1040",
    "name": "KUNCI PINTU BESAR L888 SN/CP GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20BESAR%20L888%20SN",
    "variants": [
      {
        "sku": "MGRKUN03",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1041",
    "name": "KUNCI PINTU GOMEO 9001-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209001-2",
    "variants": [
      {
        "sku": "KP GM 9001-2",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1042",
    "name": "KUNCI PINTU GOMEO 9002-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209002-1",
    "variants": [
      {
        "sku": "KP GM 9002-1",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1043",
    "name": "KUNCI PINTU GOMEO 9002-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209002-2",
    "variants": [
      {
        "sku": "KP GM 9002-2",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1044",
    "name": "KUNCI PINTU GOMEO 9009-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209009-1",
    "variants": [
      {
        "sku": "KP GM 9009-1",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1045",
    "name": "KUNCI PINTU GOMEO 9009-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209009-2",
    "variants": [
      {
        "sku": "KP GM 9009-2",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1046",
    "name": "KUNCI PINTU GOMEO 9010-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209010-2",
    "variants": [
      {
        "sku": "KP GM 9010-2",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1047",
    "name": "KUNCI PINTU GOMEO 9011-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209011-1",
    "variants": [
      {
        "sku": "KP GM 9011-1",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1048",
    "name": "KUNCI PINTU GOMEO 9011-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209011-2",
    "variants": [
      {
        "sku": "KP GM 9011-2",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1049",
    "name": "KUNCI PINTU GOMEO 9012-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209012-1",
    "variants": [
      {
        "sku": "KP GM 9012-1",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1050",
    "name": "KUNCI PINTU GOMEO 9012-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209012-2",
    "variants": [
      {
        "sku": "KP GM 9012-2",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1051",
    "name": "KUNCI PINTU GOMEO 9501 GY",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209501%20GY",
    "variants": [
      {
        "sku": "KP GM 9501 GY",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1052",
    "name": "KUNCI PINTU GOMEO 9502 GY",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20GOMEO%209502%20GY",
    "variants": [
      {
        "sku": "KP GM 9502 GY",
        "label": "PCS",
        "price": 200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1053",
    "name": "KUNCI PINTU KECIL BABET 006 SN/CP CLASSIC",
    "category": "Umum",
    "brand": "CLASSIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20KECIL%20BABET%200",
    "variants": [
      {
        "sku": "MCLKUN02",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1054",
    "name": "KUNCI PINTU KECIL BABET 007 SN/CP CLASSIC",
    "category": "Umum",
    "brand": "CLASSIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20KECIL%20BABET%200",
    "variants": [
      {
        "sku": "MCLKUN03",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1055",
    "name": "KUNCI PINTU KECIL PLAT WANLY",
    "category": "Umum",
    "brand": "WANLY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20KECIL%20PLAT%20WA",
    "variants": [
      {
        "sku": "MWAKUN02",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1056",
    "name": "KUNCI PINTU KOTAK SN BM02 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20KOTAK%20SN%20BM02",
    "variants": [
      {
        "sku": "KP KT BLK ISCO",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1057",
    "name": "KUNCI PINTU SMART LOCK ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20SMART%20LOCK%20IS",
    "variants": [
      {
        "sku": "KC SMRT LOCK",
        "label": "PCS",
        "price": 900000,
        "unit": "PCS"
      }
    ],
    "basePrice": 900000,
    "priceLabel": "Rp900.000"
  },
  {
    "id": "1058",
    "name": "KUNCI PINTU SMARTLOCK ISCO BLACK",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20SMARTLOCK%20ISC",
    "variants": [
      {
        "sku": "MISKUN07",
        "label": "PCS",
        "price": 990000,
        "unit": "PCS"
      }
    ],
    "basePrice": 990000,
    "priceLabel": "Rp990.000"
  },
  {
    "id": "1059",
    "name": "KUNCI PINTU TANGGUNG AMANI",
    "category": "Umum",
    "brand": "AMANI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TANGGUNG%20AMAN",
    "variants": [
      {
        "sku": "MAMKUN01",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1060",
    "name": "KUNCI PINTU TANGGUNG BULAT GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TANGGUNG%20BULA",
    "variants": [
      {
        "sku": "MGOKUN31",
        "label": "Standard",
        "price": 145000,
        "unit": "PCS"
      },
      {
        "sku": "MGOKUN32",
        "label": "Standard",
        "price": 145000,
        "unit": "PCS"
      }
    ],
    "basePrice": 145000,
    "priceLabel": "Rp145.000"
  },
  {
    "id": "1061",
    "name": "KUNCI PINTU TANGGUNG HITAM HSJ",
    "category": "Umum",
    "brand": "HSJ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TANGGUNG%20HITA",
    "variants": [
      {
        "sku": "MHSKUN01",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1062",
    "name": "KUNCI PINTU TANGGUNG KOTAK GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TANGGUNG%20KOTA",
    "variants": [
      {
        "sku": "MGRKUN05",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1063",
    "name": "KUNCI PINTU TANGGUNG MULLER DUS BIRU",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TANGGUNG%20MULL",
    "variants": [
      {
        "sku": "MMUKUN01",
        "label": "PCS",
        "price": 230000,
        "unit": "PCS"
      }
    ],
    "basePrice": 230000,
    "priceLabel": "Rp230.000"
  },
  {
    "id": "1064",
    "name": "KUNCI PINTU TANGGUNG PLAT 6125 ONAT",
    "category": "Umum",
    "brand": "ONAT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TANGGUNG%20PLAT",
    "variants": [
      {
        "sku": "MONKUN13",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1065",
    "name": "KUNCI PINTU TGG BABET BULAT MU-03 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TGG%20BABET%20BUL",
    "variants": [
      {
        "sku": "KP TGG MU-03",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1066",
    "name": "KUNCI PINTU TGG BABET KOTAK MU-05 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TGG%20BABET%20KOT",
    "variants": [
      {
        "sku": "KP TGG MU-05",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1067",
    "name": "KUNCI PINTU TGG GRT 888 (GP)",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TGG%20GRT%20888%20(",
    "variants": [
      {
        "sku": "KP TGG GRT888",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1068",
    "name": "KUNCI PINTU TGG GRT 999 (GP)",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TGG%20GRT%20999%20(",
    "variants": [
      {
        "sku": "KP TGG GRT999",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1069",
    "name": "KUNCI PINTU TGG MU-04 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TGG%20MU-04%20ISC",
    "variants": [
      {
        "sku": "KP TGG MU-04",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1070",
    "name": "KUNCI PINTU TGG MU-06 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PINTU%20TGG%20MU-06%20ISC",
    "variants": [
      {
        "sku": "KP TGG MU-06",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1071",
    "name": "KUNCI PIPA PRO KARET 10' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%2010'%20",
    "variants": [
      {
        "sku": "KCPP KRT 10",
        "label": "PCS",
        "price": 40080.93,
        "unit": "PCS"
      }
    ],
    "basePrice": 40080.93,
    "priceLabel": "Rp40.080,93"
  },
  {
    "id": "1072",
    "name": "KUNCI PIPA PRO KARET 12' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%2012'%20",
    "variants": [
      {
        "sku": "KCPP KRT 12",
        "label": "PCS",
        "price": 42750,
        "unit": "PCS"
      }
    ],
    "basePrice": 42750,
    "priceLabel": "Rp42.750"
  },
  {
    "id": "1073",
    "name": "KUNCI PIPA PRO KARET 14' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%2014'%20",
    "variants": [
      {
        "sku": "KCPP KRT 14",
        "label": "PCS",
        "price": 55218.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 55218.75,
    "priceLabel": "Rp55.218,75"
  },
  {
    "id": "1074",
    "name": "KUNCI PIPA PRO KARET 18' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%2018'%20",
    "variants": [
      {
        "sku": "KCPP KRT 18",
        "label": "PCS",
        "price": 76518.46,
        "unit": "PCS"
      }
    ],
    "basePrice": 76518.46,
    "priceLabel": "Rp76.518,46"
  },
  {
    "id": "1075",
    "name": "KUNCI PIPA PRO KARET 24' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%2024'%20",
    "variants": [
      {
        "sku": "KCPP KRT 24",
        "label": "PCS",
        "price": 109319.83,
        "unit": "PCS"
      }
    ],
    "basePrice": 109319.83,
    "priceLabel": "Rp109.319,83"
  },
  {
    "id": "1076",
    "name": "KUNCI PIPA PRO KARET 36' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%2036'%20",
    "variants": [
      {
        "sku": "KCPP KRT 36",
        "label": "PCS",
        "price": 218631.58,
        "unit": "PCS"
      }
    ],
    "basePrice": 218631.58,
    "priceLabel": "Rp218.631,58"
  },
  {
    "id": "1077",
    "name": "KUNCI PIPA PRO KARET 8' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20PIPA%20PRO%20KARET%208'%20H",
    "variants": [
      {
        "sku": "KCPP KRT 8",
        "label": "PCS",
        "price": 32795.05,
        "unit": "PCS"
      }
    ],
    "basePrice": 32795.05,
    "priceLabel": "Rp32.795,05"
  },
  {
    "id": "1078",
    "name": "KUNCI RING ECO 10 X 11 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2010%20X%2011%20HI",
    "variants": [
      {
        "sku": "KR ECO 10X11",
        "label": "PCS",
        "price": 7210.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 7210.5,
    "priceLabel": "Rp7.210,5"
  },
  {
    "id": "1079",
    "name": "KUNCI RING ECO 10 X 12 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2010%20X%2012%20HI",
    "variants": [
      {
        "sku": "KR ECO 10X12",
        "label": "PCS",
        "price": 6810.31,
        "unit": "PCS"
      }
    ],
    "basePrice": 6810.31,
    "priceLabel": "Rp6.810,31"
  },
  {
    "id": "1080",
    "name": "KUNCI RING ECO 12 X 13 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2012%20X%2013%20HI",
    "variants": [
      {
        "sku": "KR ECO 12X13",
        "label": "PCS",
        "price": 8685.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 8685.5,
    "priceLabel": "Rp8.685,5"
  },
  {
    "id": "1081",
    "name": "KUNCI RING ECO 14 X 15 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2014%20X%2015%20HI",
    "variants": [
      {
        "sku": "KR ECO 14X15",
        "label": "PCS",
        "price": 9943.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 9943.75,
    "priceLabel": "Rp9.943,75"
  },
  {
    "id": "1082",
    "name": "KUNCI RING ECO 16 X 17 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2016%20X%2017%20HI",
    "variants": [
      {
        "sku": "KR ECO 16X17",
        "label": "PCS",
        "price": 11562.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 11562.5,
    "priceLabel": "Rp11.562,5"
  },
  {
    "id": "1083",
    "name": "KUNCI RING ECO 17 X 19 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2017%20X%2019%20HI",
    "variants": [
      {
        "sku": "KR ECO 17X19",
        "label": "PCS",
        "price": 12082.81,
        "unit": "PCS"
      }
    ],
    "basePrice": 12082.81,
    "priceLabel": "Rp12.082,81"
  },
  {
    "id": "1084",
    "name": "KUNCI RING ECO 18 X 19 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2018%20X%2019%20HI",
    "variants": [
      {
        "sku": "KR ECO 18X19",
        "label": "PCS",
        "price": 14748.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 14748.75,
    "priceLabel": "Rp14.748,75"
  },
  {
    "id": "1085",
    "name": "KUNCI RING ECO 20 X 22 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2020%20X%2022%20HI",
    "variants": [
      {
        "sku": "KR ECO 20X22",
        "label": "PCS",
        "price": 19656.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 19656.25,
    "priceLabel": "Rp19.656,25"
  },
  {
    "id": "1086",
    "name": "KUNCI RING ECO 22 X 24 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2022%20X%2024%20HI",
    "variants": [
      {
        "sku": "KR ECO 22X24",
        "label": "PCS",
        "price": 23750,
        "unit": "PCS"
      }
    ],
    "basePrice": 23750,
    "priceLabel": "Rp23.750"
  },
  {
    "id": "1087",
    "name": "KUNCI RING ECO 24 X 27 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2024%20X%2027%20HI",
    "variants": [
      {
        "sku": "KR ECO 24X27",
        "label": "PCS",
        "price": 27750,
        "unit": "PCS"
      }
    ],
    "basePrice": 27750,
    "priceLabel": "Rp27.750"
  },
  {
    "id": "1088",
    "name": "KUNCI RING ECO 30 X 32 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%2030%20X%2032%20HI",
    "variants": [
      {
        "sku": "KR ECO 30X32",
        "label": "PCS",
        "price": 39312.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 39312.5,
    "priceLabel": "Rp39.312,5"
  },
  {
    "id": "1089",
    "name": "KUNCI RING ECO 8 X 10 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%208%20X%2010%20HIO",
    "variants": [
      {
        "sku": "KR ECO 8X10",
        "label": "PCS",
        "price": 5931.56,
        "unit": "PCS"
      }
    ],
    "basePrice": 5931.56,
    "priceLabel": "Rp5.931,56"
  },
  {
    "id": "1090",
    "name": "KUNCI RING ECO 8 X 9 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20ECO%208%20X%209%20HIOS",
    "variants": [
      {
        "sku": "KR ECO 8X9",
        "label": "PCS",
        "price": 6012.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 6012.5,
    "priceLabel": "Rp6.012,5"
  },
  {
    "id": "1091",
    "name": "KUNCI RING PAS 10MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2010MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN10",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "1092",
    "name": "KUNCI RING PAS 11MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2011MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN11",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1093",
    "name": "KUNCI RING PAS 12MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2012MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN12",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1094",
    "name": "KUNCI RING PAS 13MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2013MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN13",
        "label": "PCS",
        "price": 34000,
        "unit": "PCS"
      }
    ],
    "basePrice": 34000,
    "priceLabel": "Rp34.000"
  },
  {
    "id": "1095",
    "name": "KUNCI RING PAS 14MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2014MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN14",
        "label": "PCS",
        "price": 36000,
        "unit": "PCS"
      }
    ],
    "basePrice": 36000,
    "priceLabel": "Rp36.000"
  },
  {
    "id": "1096",
    "name": "KUNCI RING PAS 15MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2015MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN15",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "1097",
    "name": "KUNCI RING PAS 16MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2016MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN16",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "1098",
    "name": "KUNCI RING PAS 17MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2017MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN17",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "1099",
    "name": "KUNCI RING PAS 18MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2018MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN18",
        "label": "PCS",
        "price": 46000,
        "unit": "PCS"
      }
    ],
    "basePrice": 46000,
    "priceLabel": "Rp46.000"
  },
  {
    "id": "1100",
    "name": "KUNCI RING PAS 19MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2019MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN19",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "1101",
    "name": "KUNCI RING PAS 20MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2020MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN20",
        "label": "PCS",
        "price": 58000,
        "unit": "PCS"
      }
    ],
    "basePrice": 58000,
    "priceLabel": "Rp58.000"
  },
  {
    "id": "1102",
    "name": "KUNCI RING PAS 21MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2021MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN21",
        "label": "PCS",
        "price": 62000,
        "unit": "PCS"
      }
    ],
    "basePrice": 62000,
    "priceLabel": "Rp62.000"
  },
  {
    "id": "1103",
    "name": "KUNCI RING PAS 22MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2022MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN22",
        "label": "PCS",
        "price": 72000,
        "unit": "PCS"
      }
    ],
    "basePrice": 72000,
    "priceLabel": "Rp72.000"
  },
  {
    "id": "1104",
    "name": "KUNCI RING PAS 23MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2023MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN23",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1105",
    "name": "KUNCI RING PAS 24MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2024MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN24",
        "label": "PCS",
        "price": 87000,
        "unit": "PCS"
      }
    ],
    "basePrice": 87000,
    "priceLabel": "Rp87.000"
  },
  {
    "id": "1106",
    "name": "KUNCI RING PAS 32MM TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%2032MM%20TEKIR",
    "variants": [
      {
        "sku": "MTEKUN32",
        "label": "PCS",
        "price": 135000,
        "unit": "PCS"
      }
    ],
    "basePrice": 135000,
    "priceLabel": "Rp135.000"
  },
  {
    "id": "1107",
    "name": "KUNCI RING PAS 6MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%206MM%20TEKIRO",
    "variants": [
      {
        "sku": "MTEKUN06",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1108",
    "name": "KUNCI RING PAS 7MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%207MM%20TEKIRO",
    "variants": [
      {
        "sku": "MTEKUN07",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1109",
    "name": "KUNCI RING PAS 8MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%208MM%20TEKIRO",
    "variants": [
      {
        "sku": "MTEKUN08",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "1110",
    "name": "KUNCI RING PAS 9MM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%209MM%20TEKIRO",
    "variants": [
      {
        "sku": "MTEKUN09",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "1111",
    "name": "KUNCI RING PAS ECO 10 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2010%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 10",
        "label": "PCS",
        "price": 6555,
        "unit": "PCS"
      }
    ],
    "basePrice": 6555,
    "priceLabel": "Rp6.555"
  },
  {
    "id": "1112",
    "name": "KUNCI RING PAS ECO 12 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2012%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 12",
        "label": "PCS",
        "price": 7866,
        "unit": "PCS"
      }
    ],
    "basePrice": 7866,
    "priceLabel": "Rp7.866"
  },
  {
    "id": "1113",
    "name": "KUNCI RING PAS ECO 14 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2014%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 14",
        "label": "PCS",
        "price": 9177,
        "unit": "PCS"
      }
    ],
    "basePrice": 9177,
    "priceLabel": "Rp9.177"
  },
  {
    "id": "1114",
    "name": "KUNCI RING PAS ECO 17 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2017%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 17",
        "label": "PCS",
        "price": 12290.15,
        "unit": "PCS"
      }
    ],
    "basePrice": 12290.15,
    "priceLabel": "Rp12.290,15"
  },
  {
    "id": "1115",
    "name": "KUNCI RING PAS ECO 19 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2019%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 19",
        "label": "PCS",
        "price": 13929.37,
        "unit": "PCS"
      }
    ],
    "basePrice": 13929.37,
    "priceLabel": "Rp13.929,37"
  },
  {
    "id": "1116",
    "name": "KUNCI RING PAS ECO 22 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2022%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 22",
        "label": "PCS",
        "price": 16187.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 16187.5,
    "priceLabel": "Rp16.187,5"
  },
  {
    "id": "1117",
    "name": "KUNCI RING PAS ECO 24 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%2024%20MM%20",
    "variants": [
      {
        "sku": "KRP ECO 24",
        "label": "PCS",
        "price": 20812.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 20812.5,
    "priceLabel": "Rp20.812,5"
  },
  {
    "id": "1118",
    "name": "KUNCI RING PAS ECO 8 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20ECO%208%20MM%20H",
    "variants": [
      {
        "sku": "KRP ECO 8",
        "label": "PCS",
        "price": 5899.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 5899.5,
    "priceLabel": "Rp5.899,5"
  },
  {
    "id": "1119",
    "name": "KUNCI RING PAS HASSTON 10MM",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20HASSTON%2010",
    "variants": [
      {
        "sku": "MHAKUN04",
        "label": "8MM",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "MHAKUN05",
        "label": "10MM",
        "price": 13000,
        "unit": "PCS"
      },
      {
        "sku": "MHAKUN06",
        "label": "12MM",
        "price": 14000,
        "unit": "PCS"
      },
      {
        "sku": "MHAKUN07",
        "label": "14MM",
        "price": 20000,
        "unit": "PCS"
      },
      {
        "sku": "MHAKUN08",
        "label": "17MM",
        "price": 30000,
        "unit": "PCS"
      },
      {
        "sku": "MHAKUN10",
        "label": "22MM",
        "price": 45000,
        "unit": "PCS"
      },
      {
        "sku": "MHAKUN09",
        "label": "24MM",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000 - Rp65.000"
  },
  {
    "id": "1120",
    "name": "KUNCI RING PAS SATIN 22 MM HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20SATIN%2022%20M",
    "variants": [
      {
        "sku": "KRP SATIN 22",
        "label": "PCS",
        "price": 16187.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 16187.5,
    "priceLabel": "Rp16.187,5"
  },
  {
    "id": "1121",
    "name": "KUNCI RING PAS SET 8 PCS HIOSHI",
    "category": "Alat tukang",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20SET%208%20PCS%20",
    "variants": [
      {
        "sku": "MKRP8SHI",
        "label": "PCS",
        "price": 170000,
        "unit": "PCS"
      }
    ],
    "basePrice": 170000,
    "priceLabel": "Rp170.000"
  },
  {
    "id": "1122",
    "name": "KUNCI RING PAS SET 8-22 DIAMOND",
    "category": "Umum",
    "brand": "DIAMOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20SET%208-22%20D",
    "variants": [
      {
        "sku": "KC RP SET",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1123",
    "name": "KUNCI RING PAS SET 8-24MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20PAS%20SET%208-24MM",
    "variants": [
      {
        "sku": "MESKUN04",
        "label": "PCS",
        "price": 248000,
        "unit": "PCS"
      }
    ],
    "basePrice": 248000,
    "priceLabel": "Rp248.000"
  },
  {
    "id": "1124",
    "name": "KUNCI RING SATIN 14 X 17 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20SATIN%2014%20X%2017%20",
    "variants": [
      {
        "sku": "KR SATIN 14X17",
        "label": "PCS",
        "price": 9885.94,
        "unit": "PCS"
      }
    ],
    "basePrice": 9885.94,
    "priceLabel": "Rp9.885,94"
  },
  {
    "id": "1125",
    "name": "KUNCI RING SATIN 19 X 21 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20SATIN%2019%20X%2021%20",
    "variants": [
      {
        "sku": "KR SATIN 19X21",
        "label": "PCS",
        "price": 17575,
        "unit": "PCS"
      }
    ],
    "basePrice": 17575,
    "priceLabel": "Rp17.575"
  },
  {
    "id": "1126",
    "name": "KUNCI RING SATIN 21 X 23 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20SATIN%2021%20X%2023%20",
    "variants": [
      {
        "sku": "KR SATIN 21X23",
        "label": "PCS",
        "price": 21375,
        "unit": "PCS"
      }
    ],
    "basePrice": 21375,
    "priceLabel": "Rp21.375"
  },
  {
    "id": "1127",
    "name": "KUNCI RING SATIN 30 X 32 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20SATIN%2030%20X%2032%20",
    "variants": [
      {
        "sku": "KR SATIN 30X32",
        "label": "PCS",
        "price": 40375,
        "unit": "PCS"
      }
    ],
    "basePrice": 40375,
    "priceLabel": "Rp40.375"
  },
  {
    "id": "1128",
    "name": "KUNCI RING SET 6-22 DIAMOND",
    "category": "Umum",
    "brand": "DIAMOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20RING%20SET%206-22%20DIAMO",
    "variants": [
      {
        "sku": "KC RG SET 6",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "1129",
    "name": "KUNCI SOCK SET 10 PCS HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOCK%20SET%2010%20PCS%20HAS",
    "variants": [
      {
        "sku": "MHAKUN02",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "1130",
    "name": "KUNCI SOCK SET 10 PCS VIPER",
    "category": "Alat tukang",
    "brand": "VIPER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOCK%20SET%2010%20PCS%20VIP",
    "variants": [
      {
        "sku": "MVIKUN01",
        "label": "SET",
        "price": 45000,
        "unit": "SET"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1131",
    "name": "KUNCI SOCK SET 21 PCS VPR",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOCK%20SET%2021%20PCS%20VPR",
    "variants": [
      {
        "sku": "MVPKUN01",
        "label": "SET",
        "price": 45000,
        "unit": "SET"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1132",
    "name": "KUNCI SOCK SET 25 PCS HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOCK%20SET%2025%20PCS%20HAS",
    "variants": [
      {
        "sku": "MHAKUN03",
        "label": "PCS",
        "price": 900000,
        "unit": "PCS"
      }
    ],
    "basePrice": 900000,
    "priceLabel": "Rp900.000"
  },
  {
    "id": "1133",
    "name": "KUNCI SOK T 10 BIASA",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T%2010%20BIASA",
    "variants": [
      {
        "sku": "MVPKUN03",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1134",
    "name": "KUNCI SOK T 12 BIASA",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T%2012%20BIASA",
    "variants": [
      {
        "sku": "MNOKUN02",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1135",
    "name": "KUNCI SOK T 14 BIASA",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T%2014%20BIASA",
    "variants": [
      {
        "sku": "MVPKUN04",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1136",
    "name": "KUNCI SOK T 17 BIASA",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T%2017%20BIASA",
    "variants": [
      {
        "sku": "MVPKUN05",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "1137",
    "name": "KUNCI SOK T 8 BIASA",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T%208%20BIASA",
    "variants": [
      {
        "sku": "MVPKUN02",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1138",
    "name": "KUNCI SOK T TEKIRO 10",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T%20TEKIRO%2010",
    "variants": [
      {
        "sku": "MTEKUN27",
        "label": "8",
        "price": 30000,
        "unit": "PCS"
      },
      {
        "sku": "MTEKUN28",
        "label": "10",
        "price": 30000,
        "unit": "PCS"
      },
      {
        "sku": "MTEKUN29",
        "label": "12",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1139",
    "name": "KUNCI SOK T10 MM",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20T10%20MM",
    "variants": [
      {
        "sku": "KC SOK T8",
        "label": "8 MM",
        "price": 11000,
        "unit": "PCS"
      },
      {
        "sku": "KC SOK T9",
        "label": "9 MM",
        "price": 11000,
        "unit": "PCS"
      },
      {
        "sku": "KC SOK T10",
        "label": "10 MM",
        "price": 11000,
        "unit": "PCS"
      },
      {
        "sku": "KC SOK T12",
        "label": "12 MM",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "1140",
    "name": "KUNCI SOK Y 10 X 11 X 13",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%2010%20X%2011%20X%2013",
    "variants": [
      {
        "sku": "KC Y 10X11X13",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1141",
    "name": "KUNCI SOK Y 10 X 12 X 14",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%2010%20X%2012%20X%2014",
    "variants": [
      {
        "sku": "KC Y 10X12X14",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1142",
    "name": "KUNCI SOK Y 10-12-14 BIASA",
    "category": "Alat tukang",
    "brand": "OLIQ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%2010-12-14%20BIAS",
    "variants": [
      {
        "sku": "MOLKUN03",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1143",
    "name": "KUNCI SOK Y 12 X 14 X 17",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%2012%20X%2014%20X%2017",
    "variants": [
      {
        "sku": "KC Y 12X14X17",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1144",
    "name": "KUNCI SOK Y 12-14-17 BIASA",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%2012-14-17%20BIAS",
    "variants": [
      {
        "sku": "MVPKUN06",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "1145",
    "name": "KUNCI SOK Y 8 X 10 X 12",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%208%20X%2010%20X%2012",
    "variants": [
      {
        "sku": "KC Y 8X10X12",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1146",
    "name": "KUNCI SOK Y 8 X 9 X 10",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%208%20X%209%20X%2010",
    "variants": [
      {
        "sku": "KC Y 8X9X10",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1147",
    "name": "KUNCI SOK Y 8-10-12 BIASA",
    "category": "Alat tukang",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%208-10-12%20BIASA",
    "variants": [
      {
        "sku": "MVPKUN07",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1148",
    "name": "KUNCI SOK Y 8-9-10 BIASA",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%208-9-10%20BIASA",
    "variants": [
      {
        "sku": "SOKY8910",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1149",
    "name": "KUNCI SOK Y TEKIRO 10-12-14",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%20TEKIRO%2010-12-",
    "variants": [
      {
        "sku": "MTEKUN31",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1150",
    "name": "KUNCI SOK Y TEKIRO 8-10-12",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20SOK%20Y%20TEKIRO%208-10-1",
    "variants": [
      {
        "sku": "MTEKUN30",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1151",
    "name": "KUNCI TANGGUNG PROFIX 601-2",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TANGGUNG%20PROFIX%20601",
    "variants": [
      {
        "sku": "KP TGG PROF601",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1152",
    "name": "KUNCI TANGGUNG PROFIX 602-2",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TANGGUNG%20PROFIX%20602",
    "variants": [
      {
        "sku": "KP TGG PROF602",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1153",
    "name": "KUNCI TANGGUNG PROFIX 603-1",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TANGGUNG%20PROFIX%20603",
    "variants": [
      {
        "sku": "KP TGG PROF603-1",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1154",
    "name": "KUNCI TANGGUNG PROFIX 603-2",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TANGGUNG%20PROFIX%20603",
    "variants": [
      {
        "sku": "KP TGG PROF603",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1155",
    "name": "KUNCI TANGGUNG PROFIX 605-2",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TANGGUNG%20PROFIX%20605",
    "variants": [
      {
        "sku": "KP TGG PROF605",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1156",
    "name": "KUNCI TANGGUNG VERDASCE BLACK GOLD",
    "category": "Umum",
    "brand": "VERDASCE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TANGGUNG%20VERDASCE%20B",
    "variants": [
      {
        "sku": "KC TGG VRDS BLK",
        "label": "PCS",
        "price": 84787.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 84787.5,
    "priceLabel": "Rp84.787,5"
  },
  {
    "id": "1157",
    "name": "KUNCI TGG GOMEO 8301-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208301-1",
    "variants": [
      {
        "sku": "KP TGG GM 8301-1",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1158",
    "name": "KUNCI TGG GOMEO 8301-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208301-2",
    "variants": [
      {
        "sku": "KP TGG GM 8301-2",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1159",
    "name": "KUNCI TGG GOMEO 8301-3",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208301-3",
    "variants": [
      {
        "sku": "KP TGG GM 8301-3",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1160",
    "name": "KUNCI TGG GOMEO 8302-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208302-1",
    "variants": [
      {
        "sku": "KP TGG GM 8302-1",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1161",
    "name": "KUNCI TGG GOMEO 8302-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208302-2",
    "variants": [
      {
        "sku": "KP TGG GM 8302-2",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1162",
    "name": "KUNCI TGG GOMEO 8302-3",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208302-3",
    "variants": [
      {
        "sku": "KP TGG GM 8302-3",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1163",
    "name": "KUNCI TGG GOMEO 8309-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208309-1",
    "variants": [
      {
        "sku": "KP TGG GM 8309-1",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1164",
    "name": "KUNCI TGG GOMEO 8309-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208309-2",
    "variants": [
      {
        "sku": "KP TGG GM 8309-2",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1165",
    "name": "KUNCI TGG GOMEO 8311-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208311-1",
    "variants": [
      {
        "sku": "KP TGG GM 8311-1",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1166",
    "name": "KUNCI TGG GOMEO 8311-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208311-2",
    "variants": [
      {
        "sku": "KP TGG GM 8311-2",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1167",
    "name": "KUNCI TGG GOMEO 8312-1",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208312-1",
    "variants": [
      {
        "sku": "KP TGG GM 8312-1",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1168",
    "name": "KUNCI TGG GOMEO 8312-2",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208312-2",
    "variants": [
      {
        "sku": "KP TGG GM 8312-2",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1169",
    "name": "KUNCI TGG GOMEO 8501 GY",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208501%20GY",
    "variants": [
      {
        "sku": "KP TGG GM 8501 GY",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1170",
    "name": "KUNCI TGG GOMEO 8502 GY",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%208502%20GY",
    "variants": [
      {
        "sku": "KP TGG GM 8502 GY",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1171",
    "name": "KUNCI TGG GOMEO SS 868",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KUNCI%20TGG%20GOMEO%20SS%20868",
    "variants": [
      {
        "sku": "KP TGG GM SS868",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1172",
    "name": "KURSI BAKSO HELMUT",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20BAKSO%20HELMUT",
    "variants": [
      {
        "sku": "KURBAHEL",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1173",
    "name": "KURSI SEGI TANGGUNG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20SEGI%20TANGGUNG%20HYPER",
    "variants": [
      {
        "sku": "MNOKUR02",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "1174",
    "name": "KURSI SEGI TANGGUNG PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20SEGI%20TANGGUNG%20PREM",
    "variants": [
      {
        "sku": "MNOKUR01",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1175",
    "name": "KURSI SENDER DEWASA ANYAM PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20SENDER%20DEWASA%20ANYAM",
    "variants": [
      {
        "sku": "MNOKUR06",
        "label": "PCS",
        "price": 86000,
        "unit": "PCS"
      }
    ],
    "basePrice": 86000,
    "priceLabel": "Rp86.000"
  },
  {
    "id": "1176",
    "name": "KURSI SENDER LOVE POLOS HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20SENDER%20LOVE%20POLOS%20H",
    "variants": [
      {
        "sku": "MNOKUR04",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1177",
    "name": "KURSI SENDER LOVE PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20SENDER%20LOVE%20PREM",
    "variants": [
      {
        "sku": "MNOKUR05",
        "label": "PCS",
        "price": 39000,
        "unit": "PCS"
      }
    ],
    "basePrice": 39000,
    "priceLabel": "Rp39.000"
  },
  {
    "id": "1178",
    "name": "KURSI SENDER LOVE PRINTING",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=KURSI%20SENDER%20LOVE%20PRINTIN",
    "variants": [
      {
        "sku": "MNOKUR03",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1179",
    "name": "LAKBAN BENING 72 Y",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAKBAN%20BENING%2072%20Y",
    "variants": [
      {
        "sku": "LK BNG 72",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1180",
    "name": "LAKBAN BENING DAIICHI",
    "category": "Umum",
    "brand": "DAICHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAKBAN%20BENING%20DAIICHI",
    "variants": [
      {
        "sku": "LK BNG DCH",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1181",
    "name": "LAKBAN COKLAT 90 Y",
    "category": "Umum",
    "brand": "NIHON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAKBAN%20COKLAT%2090%20Y",
    "variants": [
      {
        "sku": "LK CKLT 90",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1182",
    "name": "LAKBAN HITAM 80 Y",
    "category": "Umum",
    "brand": "NIHON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAKBAN%20HITAM%2080%20Y",
    "variants": [
      {
        "sku": "LK HTM 80",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "1183",
    "name": "LAKER ARTCO",
    "category": "Umum",
    "brand": "ARTCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAKER%20ARTCO",
    "variants": [
      {
        "sku": "LAKER AR",
        "label": "Standard",
        "price": 15000,
        "unit": "PCS"
      },
      {
        "sku": "MLAKART",
        "label": "Standard",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000 - Rp15.000"
  },
  {
    "id": "1184",
    "name": "LAKER TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAKER%20TOKIO",
    "variants": [
      {
        "sku": "LAKER TK",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1185",
    "name": "LAMPU LUBY CAPSULE 10W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2010W%2065",
    "variants": [
      {
        "sku": "MLULAM14",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1186",
    "name": "LAMPU LUBY CAPSULE 14W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2014W%2065",
    "variants": [
      {
        "sku": "MLULAM15",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1187",
    "name": "LAMPU LUBY CAPSULE 18W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2018W%2065",
    "variants": [
      {
        "sku": "MLULAM16",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1188",
    "name": "LAMPU LUBY CAPSULE 28W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2028W%2065",
    "variants": [
      {
        "sku": "MLULAM17",
        "label": "PCS",
        "price": 57000,
        "unit": "PCS"
      }
    ],
    "basePrice": 57000,
    "priceLabel": "Rp57.000"
  },
  {
    "id": "1189",
    "name": "LAMPU LUBY CAPSULE 38W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2038W%2065",
    "variants": [
      {
        "sku": "MLULAM18",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1190",
    "name": "LAMPU LUBY CAPSULE 45W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2045W%2065",
    "variants": [
      {
        "sku": "MLULAM19",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1191",
    "name": "LAMPU LUBY CAPSULE 50W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%2050W%2065",
    "variants": [
      {
        "sku": "MLULAM20",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "1192",
    "name": "LAMPU LUBY CAPSULE 5W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CAPSULE%205W%20650",
    "variants": [
      {
        "sku": "MLULAM13",
        "label": "PCS",
        "price": 29000,
        "unit": "PCS"
      }
    ],
    "basePrice": 29000,
    "priceLabel": "Rp29.000"
  },
  {
    "id": "1193",
    "name": "LAMPU LUBY CLASSIC 12W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2012W%2065",
    "variants": [
      {
        "sku": "MLULAM24",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1194",
    "name": "LAMPU LUBY CLASSIC 15W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2015W%2065",
    "variants": [
      {
        "sku": "MLULAM25",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1195",
    "name": "LAMPU LUBY CLASSIC 18W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2018W%2065",
    "variants": [
      {
        "sku": "MLULAM26",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1196",
    "name": "LAMPU LUBY CLASSIC 24W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2024W%2065",
    "variants": [
      {
        "sku": "MLULAM27",
        "label": "PCS",
        "price": 66000,
        "unit": "PCS"
      }
    ],
    "basePrice": 66000,
    "priceLabel": "Rp66.000"
  },
  {
    "id": "1197",
    "name": "LAMPU LUBY CLASSIC 30W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2030W%2065",
    "variants": [
      {
        "sku": "MLULAM28",
        "label": "PCS",
        "price": 86000,
        "unit": "PCS"
      }
    ],
    "basePrice": 86000,
    "priceLabel": "Rp86.000"
  },
  {
    "id": "1198",
    "name": "LAMPU LUBY CLASSIC 40W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2040W%2065",
    "variants": [
      {
        "sku": "MLULAM29",
        "label": "PCS",
        "price": 115000,
        "unit": "PCS"
      }
    ],
    "basePrice": 115000,
    "priceLabel": "Rp115.000"
  },
  {
    "id": "1199",
    "name": "LAMPU LUBY CLASSIC 50W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%2050W%2065",
    "variants": [
      {
        "sku": "MLULAM30",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "1200",
    "name": "LAMPU LUBY CLASSIC 5W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%205W%20650",
    "variants": [
      {
        "sku": "MLULAM21",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1201",
    "name": "LAMPU LUBY CLASSIC 7W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%207W%20650",
    "variants": [
      {
        "sku": "MLULAM22",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1202",
    "name": "LAMPU LUBY CLASSIC 9W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20CLASSIC%209W%20650",
    "variants": [
      {
        "sku": "MLULAM23",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "1203",
    "name": "LAMPU LUBY NEW ALADDIN 10W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20NEW%20ALADDIN%2010",
    "variants": [
      {
        "sku": "MLULAM03",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1204",
    "name": "LAMPU LUBY NEW ALADDIN 12W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20NEW%20ALADDIN%2012",
    "variants": [
      {
        "sku": "MLULAM04",
        "label": "12W",
        "price": 95000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM05",
        "label": "16W",
        "price": 105000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM06",
        "label": "28W",
        "price": 155000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000 - Rp155.000"
  },
  {
    "id": "1205",
    "name": "LAMPU LUBY NEW ALADDIN 6W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20NEW%20ALADDIN%206W",
    "variants": [
      {
        "sku": "MLULAM01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1206",
    "name": "LAMPU LUBY NEW ALADDIN 8W 6500K",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20NEW%20ALADDIN%208W",
    "variants": [
      {
        "sku": "MLULAM02",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1207",
    "name": "LAMPU LUBY SUMO 12W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAMPU%20LUBY%20SUMO%2012W",
    "variants": [
      {
        "sku": "MLULAM07",
        "label": "12W",
        "price": 21000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM08",
        "label": "16W",
        "price": 27000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM09",
        "label": "22W",
        "price": 33000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM10",
        "label": "30W",
        "price": 46000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM11",
        "label": "40W",
        "price": 65000,
        "unit": "PCS"
      },
      {
        "sku": "MLULAM12",
        "label": "48W",
        "price": 80000,
        "unit": "PCS"
      },
      {
        "sku": "LLUBSM58",
        "label": "58W",
        "price": 87000,
        "unit": "PCS"
      }
    ],
    "basePrice": 21000,
    "priceLabel": "Rp21.000 - Rp87.000"
  },
  {
    "id": "1208",
    "name": "LAP MICRO FIBER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LAP%20MICRO%20FIBER",
    "variants": [
      {
        "sku": "LAPMCFBR",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1209",
    "name": "LED STRIP MATA KECIL HUBEN NATURAL 2835-120",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LED%20STRIP%20MATA%20KECIL%20HUBE",
    "variants": [
      {
        "sku": "LEDSTHBN",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1210",
    "name": "LED STRIP MATA KECIL HUBEN WHITE 2835-120",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LED%20STRIP%20MATA%20KECIL%20HUBE",
    "variants": [
      {
        "sku": "LEDSTHBW",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1211",
    "name": "LEM 5 MENIT HANDSOME",
    "category": "Umum",
    "brand": "HANDSOME",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%205%20MENIT%20HANDSOME",
    "variants": [
      {
        "sku": "LEM 5MNT HD",
        "label": "PCS",
        "price": 5250,
        "unit": "PCS"
      }
    ],
    "basePrice": 5250,
    "priceLabel": "Rp5.250"
  },
  {
    "id": "1212",
    "name": "LEM 5 MENIT ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%205%20MENIT%20ISCO",
    "variants": [
      {
        "sku": "MISLEM05",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1213",
    "name": "LEM ALIPHATIC SAKATA 500 GR",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20ALIPHATIC%20SAKATA%20500%20",
    "variants": [
      {
        "sku": "LALSA500",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1214",
    "name": "LEM BOTOL SEALANT PUTIH YZR",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20SEALANT%20PUTIH%20Y",
    "variants": [
      {
        "sku": "LEM PTH YZR",
        "label": "PCS",
        "price": 20425,
        "unit": "PCS"
      }
    ],
    "basePrice": 20425,
    "priceLabel": "Rp20.425"
  },
  {
    "id": "1215",
    "name": "LEM BOTOL SOLIGEN CLEAR",
    "category": "Umum",
    "brand": "SOLIGEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20SOLIGEN%20CLEAR",
    "variants": [
      {
        "sku": "MSOLEM01",
        "label": "PCS",
        "price": 32500,
        "unit": "PCS"
      }
    ],
    "basePrice": 32500,
    "priceLabel": "Rp32.500"
  },
  {
    "id": "1216",
    "name": "LEM BOTOL SOLIGEN HITAM",
    "category": "Umum",
    "brand": "SOLIGEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20SOLIGEN%20HITAM",
    "variants": [
      {
        "sku": "MSOLEM02",
        "label": "PCS",
        "price": 32500,
        "unit": "PCS"
      }
    ],
    "basePrice": 32500,
    "priceLabel": "Rp32.500"
  },
  {
    "id": "1217",
    "name": "LEM BOTOL SOLIGEN PUTIH",
    "category": "Umum",
    "brand": "SOLIGEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20SOLIGEN%20PUTIH",
    "variants": [
      {
        "sku": "MSOLEM03",
        "label": "PCS",
        "price": 32500,
        "unit": "PCS"
      }
    ],
    "basePrice": 32500,
    "priceLabel": "Rp32.500"
  },
  {
    "id": "1218",
    "name": "LEM BOTOL VEGAZ CLEAR",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20VEGAZ%20CLEAR",
    "variants": [
      {
        "sku": "MVELEM01",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1219",
    "name": "LEM BOTOL VEGAZ HITAM",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20VEGAZ%20HITAM",
    "variants": [
      {
        "sku": "MVELEM02",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1220",
    "name": "LEM BOTOL VEGAZ PUTIH",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20BOTOL%20VEGAZ%20PUTIH",
    "variants": [
      {
        "sku": "MVELEM03",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1221",
    "name": "LEM DEXTONE 5 MENIT 12 GR",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20DEXTONE%205%20MENIT%2012%20GR",
    "variants": [
      {
        "sku": "MDELEM03",
        "label": "12 GR",
        "price": 14000,
        "unit": "PCS"
      },
      {
        "sku": "MDELEM02",
        "label": "48 GR",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000 - Rp22.500"
  },
  {
    "id": "1222",
    "name": "LEM DEXTONE AUTO SEALER 30 GR",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20DEXTONE%20AUTO%20SEALER%203",
    "variants": [
      {
        "sku": "MDELEM06",
        "label": "30 GR",
        "price": 15000,
        "unit": "PCS"
      },
      {
        "sku": "MDELEM07",
        "label": "70 GR",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000 - Rp25.000"
  },
  {
    "id": "1223",
    "name": "LEM DEXTONE KALENG",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20DEXTONE%20KALENG",
    "variants": [
      {
        "sku": "MDELEM11",
        "label": "Standard",
        "price": 15000,
        "unit": "PCS"
      },
      {
        "sku": "LEM DEXTONE KLNG",
        "label": "100 GR",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000 - Rp15.000"
  },
  {
    "id": "1224",
    "name": "LEM DEXTONE RED SILICONE BESAR",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20DEXTONE%20RED%20SILICONE%20",
    "variants": [
      {
        "sku": "MDELEM10",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "1225",
    "name": "LEM DEXTONE RED SILICONE KECIL",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20DEXTONE%20RED%20SILICONE%20",
    "variants": [
      {
        "sku": "MDELEM09",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "1226",
    "name": "LEM DEXTONE SEALANT 30 GR",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20DEXTONE%20SEALANT%2030%20GR",
    "variants": [
      {
        "sku": "MDELEM04",
        "label": "30 GR",
        "price": 15000,
        "unit": "PCS"
      },
      {
        "sku": "MDELEM05",
        "label": "70 GR",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000 - Rp25.000"
  },
  {
    "id": "1227",
    "name": "LEM FOX 400 GR",
    "category": "Umum",
    "brand": "FOX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20FOX%20400%20GR",
    "variants": [
      {
        "sku": "LEM FOX 400",
        "label": "400 GR",
        "price": 7276.1,
        "unit": "PCS"
      },
      {
        "sku": "LEM FOX 700",
        "label": "700 GR",
        "price": 14339.9,
        "unit": "PCS"
      }
    ],
    "basePrice": 7276.1,
    "priceLabel": "Rp7.276,1 - Rp14.339,9"
  },
  {
    "id": "1228",
    "name": "LEM ISARPLAST TUBE 40 GR",
    "category": "Umum",
    "brand": "ISARPLAST",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20ISARPLAST%20TUBE%2040%20GR",
    "variants": [
      {
        "sku": "LEM ISR 40",
        "label": "PCS",
        "price": 5720,
        "unit": "PCS"
      }
    ],
    "basePrice": 5720,
    "priceLabel": "Rp5.720"
  },
  {
    "id": "1229",
    "name": "LEM KAYU PUTIH Q BOND 350 GR",
    "category": "Umum",
    "brand": "Q-BOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20KAYU%20PUTIH%20Q%20BOND%20350",
    "variants": [
      {
        "sku": "LEM KY",
        "label": "350 GR",
        "price": 12500,
        "unit": "PCS"
      },
      {
        "sku": "LEM QBOND700",
        "label": "700 GR",
        "price": 17000,
        "unit": "PCS"
      },
      {
        "sku": "LEM QBOND750",
        "label": "750 GR",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500 - Rp17.000"
  },
  {
    "id": "1230",
    "name": "LEM KAYU PUTIH Q BOND 700 GR 203A",
    "category": "Umum",
    "brand": "Q-BOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20KAYU%20PUTIH%20Q%20BOND%20700",
    "variants": [
      {
        "sku": "LEM KY 203A",
        "label": "PCS",
        "price": 15504,
        "unit": "PCS"
      }
    ],
    "basePrice": 15504,
    "priceLabel": "Rp15.504"
  },
  {
    "id": "1231",
    "name": "LEM KAYU PUTIH Q BOND PUR 24 X 500",
    "category": "Umum",
    "brand": "Q-BOND",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20KAYU%20PUTIH%20Q%20BOND%20PUR",
    "variants": [
      {
        "sku": "LEM PUR500",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "1232",
    "name": "LEM KOREA TETES DEXTONE",
    "category": "Umum",
    "brand": "DEXTONE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20KOREA%20TETES%20DEXTONE",
    "variants": [
      {
        "sku": "MDELEM01",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1233",
    "name": "LEM KOREA TETES HI-Q",
    "category": "Umum",
    "brand": "HI-Q",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20KOREA%20TETES%20HI-Q",
    "variants": [
      {
        "sku": "MHILEM01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1234",
    "name": "LEM KUNING HPL 650 GR Q BOND",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20KUNING%20HPL%20650%20GR%20Q%20B",
    "variants": [
      {
        "sku": "LEHPL650",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1235",
    "name": "LEM PIPA NIPPON PLAST TUBE",
    "category": "Umum",
    "brand": "NIPPONPLAST",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20PIPA%20NIPPON%20PLAST%20TUB",
    "variants": [
      {
        "sku": "LEM NIPLST",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1236",
    "name": "LEM PRALON TUBE Q PLAST",
    "category": "Umum",
    "brand": "QPLAST",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20PRALON%20TUBE%20Q%20PLAST",
    "variants": [
      {
        "sku": "LEM PRL TUBE",
        "label": "PCS",
        "price": 5145,
        "unit": "PCS"
      }
    ],
    "basePrice": 5145,
    "priceLabel": "Rp5.145"
  },
  {
    "id": "1237",
    "name": "LEM PVC PLAS 100 GR (FOX)",
    "category": "Umum",
    "brand": "FOX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20PVC%20PLAS%20100%20GR%20(FOX)",
    "variants": [
      {
        "sku": "LEM PVC 100",
        "label": "PCS",
        "price": 12432,
        "unit": "PCS"
      }
    ],
    "basePrice": 12432,
    "priceLabel": "Rp12.432"
  },
  {
    "id": "1238",
    "name": "LEM Q PLAST 100 GR",
    "category": "Umum",
    "brand": "QPLAST",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20Q%20PLAST%20100%20GR",
    "variants": [
      {
        "sku": "LEM PRL KLNG K",
        "label": "100 GR",
        "price": 18000,
        "unit": "PCS"
      },
      {
        "sku": "LEM PRL KLNG",
        "label": "400 GR",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000 - Rp50.000"
  },
  {
    "id": "1239",
    "name": "LEM SEALANT BESAR HANDSOME",
    "category": "Umum",
    "brand": "HANDSOME",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SEALANT%20BESAR%20HANDSOM",
    "variants": [
      {
        "sku": "LEM KC HAND",
        "label": "PCS",
        "price": 102500,
        "unit": "PCS"
      }
    ],
    "basePrice": 102500,
    "priceLabel": "Rp102.500"
  },
  {
    "id": "1240",
    "name": "LEM SILICONE BLACK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SILICONE%20BLACK%20HIOSHI",
    "variants": [
      {
        "sku": "SILBLCK",
        "label": "PCS",
        "price": 17812.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 17812.5,
    "priceLabel": "Rp17.812,5"
  },
  {
    "id": "1241",
    "name": "LEM SILICONE CLEAR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SILICONE%20CLEAR%20HIOSHI",
    "variants": [
      {
        "sku": "SILCLR",
        "label": "PCS",
        "price": 17812.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 17812.5,
    "priceLabel": "Rp17.812,5"
  },
  {
    "id": "1242",
    "name": "LEM SILICONE ONE DROP BLACK / HITAM",
    "category": "Umum",
    "brand": "ONE DROP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SILICONE%20ONE%20DROP%20BLA",
    "variants": [
      {
        "sku": "LEM SIL ODBL",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "1243",
    "name": "LEM SILICONE ONE DROP CLEAR",
    "category": "Umum",
    "brand": "ONE DROP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SILICONE%20ONE%20DROP%20CLE",
    "variants": [
      {
        "sku": "LEM SIL ODCL",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "1244",
    "name": "LEM SILICONE ONE DROP PUTIH",
    "category": "Umum",
    "brand": "ONE DROP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SILICONE%20ONE%20DROP%20PUT",
    "variants": [
      {
        "sku": "LEM SIL ODWHT",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "1245",
    "name": "LEM SILICONE WHITE HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SILICONE%20WHITE%20HIOSHI",
    "variants": [
      {
        "sku": "SILWHT",
        "label": "PCS",
        "price": 17812.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 17812.5,
    "priceLabel": "Rp17.812,5"
  },
  {
    "id": "1246",
    "name": "LEM SOSIS BLACK",
    "category": "Umum",
    "brand": "HANDSOME",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SOSIS%20BLACK",
    "variants": [
      {
        "sku": "LEM SS BC",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1247",
    "name": "LEM SOSIS BLACK ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SOSIS%20BLACK%20ISCO",
    "variants": [
      {
        "sku": "LEM SS BC IS",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1248",
    "name": "LEM SOSIS CLEAR ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SOSIS%20CLEAR%20ISCO",
    "variants": [
      {
        "sku": "LEM SS CLR",
        "label": "PCS",
        "price": 28900,
        "unit": "PCS"
      }
    ],
    "basePrice": 28900,
    "priceLabel": "Rp28.900"
  },
  {
    "id": "1249",
    "name": "LEM SOSIS WHITE",
    "category": "Umum",
    "brand": "HANDSOME",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SOSIS%20WHITE",
    "variants": [
      {
        "sku": "LEM SS WH",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1250",
    "name": "LEM SOSIS WHITE ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20SOSIS%20WHITE%20ISCO",
    "variants": [
      {
        "sku": "LEM SS WH IS",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1251",
    "name": "LEM TIKUS FOX 75 GR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEM%20TIKUS%20FOX%2075%20GR",
    "variants": [
      {
        "sku": "LEM TKS",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1252",
    "name": "LEMARI SUSUN 2 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEMARI%20SUSUN%202%20HYPER",
    "variants": [
      {
        "sku": "MNOLEM03",
        "label": "PCS",
        "price": 230000,
        "unit": "PCS"
      }
    ],
    "basePrice": 230000,
    "priceLabel": "Rp230.000"
  },
  {
    "id": "1253",
    "name": "LEMARI SUSUN 2 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEMARI%20SUSUN%202%20PREM",
    "variants": [
      {
        "sku": "MNOLEM05",
        "label": "PCS",
        "price": 148000,
        "unit": "PCS"
      }
    ],
    "basePrice": 148000,
    "priceLabel": "Rp148.000"
  },
  {
    "id": "1254",
    "name": "LEMARI SUSUN 3 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEMARI%20SUSUN%203%20PREM",
    "variants": [
      {
        "sku": "MNOLEM06",
        "label": "PCS",
        "price": 205000,
        "unit": "PCS"
      }
    ],
    "basePrice": 205000,
    "priceLabel": "Rp205.000"
  },
  {
    "id": "1255",
    "name": "LEMARI SUSUN 4 HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEMARI%20SUSUN%204%20HYPER",
    "variants": [
      {
        "sku": "MNOLEM04",
        "label": "PCS",
        "price": 390000,
        "unit": "PCS"
      }
    ],
    "basePrice": 390000,
    "priceLabel": "Rp390.000"
  },
  {
    "id": "1256",
    "name": "LEMARI SUSUN 4 PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LEMARI%20SUSUN%204%20PREM",
    "variants": [
      {
        "sku": "MNOLEM07",
        "label": "PCS",
        "price": 262000,
        "unit": "PCS"
      }
    ],
    "basePrice": 262000,
    "priceLabel": "Rp262.000"
  },
  {
    "id": "1257",
    "name": "LINGGIS BESAR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LINGGIS%20BESAR",
    "variants": [
      {
        "sku": "MNOLIN04",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1258",
    "name": "LINGGIS KECIL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LINGGIS%20KECIL",
    "variants": [
      {
        "sku": "MNOLIN03",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1259",
    "name": "LOT KERUCUT 200 GR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LOT%20KERUCUT%20200%20GR",
    "variants": [
      {
        "sku": "MNOLOT05",
        "label": "200 GR",
        "price": 13000,
        "unit": "PCS"
      },
      {
        "sku": "MNOLOT06",
        "label": "400 GR",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000 - Rp23.000"
  },
  {
    "id": "1260",
    "name": "LOT PELURU 200 GR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=LOT%20PELURU%20200%20GR",
    "variants": [
      {
        "sku": "MNOLOT07",
        "label": "200 GR",
        "price": 18000,
        "unit": "PCS"
      },
      {
        "sku": "MNOLOT08",
        "label": "300 GR",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000 - Rp20.000"
  },
  {
    "id": "1261",
    "name": "MAGIC COM COSMOS CRJ 1001",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20COSMOS%20CRJ%201001",
    "variants": [
      {
        "sku": "MMGC1001",
        "label": "1001",
        "price": 280000,
        "unit": "PCS"
      },
      {
        "sku": "MMGC1803",
        "label": "1803",
        "price": 250000,
        "unit": "PCS"
      }
    ],
    "basePrice": 250000,
    "priceLabel": "Rp250.000 - Rp280.000"
  },
  {
    "id": "1262",
    "name": "MAGIC COM COSMOS CRJ-3305",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20COSMOS%20CRJ-3305",
    "variants": [
      {
        "sku": "MMGC3305",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "1263",
    "name": "MAGIC COM COSMOS CRJ-3307",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20COSMOS%20CRJ-3307",
    "variants": [
      {
        "sku": "MMGC3307",
        "label": "PCS",
        "price": 350000,
        "unit": "PCS"
      }
    ],
    "basePrice": 350000,
    "priceLabel": "Rp350.000"
  },
  {
    "id": "1264",
    "name": "MAGIC COM MASPION MRJ-109 SS",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20MASPION%20MRJ-109",
    "variants": [
      {
        "sku": "MMGM109",
        "label": "PCS",
        "price": 440000,
        "unit": "PCS"
      }
    ],
    "basePrice": 440000,
    "priceLabel": "Rp440.000"
  },
  {
    "id": "1265",
    "name": "MAGIC COM MASPION MRJ-1892",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20MASPION%20MRJ-189",
    "variants": [
      {
        "sku": "MMGM1892",
        "label": "PCS",
        "price": 420000,
        "unit": "PCS"
      }
    ],
    "basePrice": 420000,
    "priceLabel": "Rp420.000"
  },
  {
    "id": "1266",
    "name": "MAGIC COM MIYAKO MCM-508",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20MIYAKO%20MCM-508",
    "variants": [
      {
        "sku": "MMGM508",
        "label": "PCS",
        "price": 235000,
        "unit": "PCS"
      }
    ],
    "basePrice": 235000,
    "priceLabel": "Rp235.000"
  },
  {
    "id": "1267",
    "name": "MAGIC COM MIYAKO MCM-528",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20MIYAKO%20MCM-528",
    "variants": [
      {
        "sku": "MMGM528",
        "label": "PCS",
        "price": 260000,
        "unit": "PCS"
      }
    ],
    "basePrice": 260000,
    "priceLabel": "Rp260.000"
  },
  {
    "id": "1268",
    "name": "MAGIC COM MIYAKO MCM-612",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20MIYAKO%20MCM-612",
    "variants": [
      {
        "sku": "MMGM612",
        "label": "PCS",
        "price": 240000,
        "unit": "PCS"
      }
    ],
    "basePrice": 240000,
    "priceLabel": "Rp240.000"
  },
  {
    "id": "1269",
    "name": "MAGIC COM YONG MA SMC 7063",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20YONG%20MA%20SMC%20706",
    "variants": [
      {
        "sku": "MMGY7063",
        "label": "PCS",
        "price": 820000,
        "unit": "PCS"
      }
    ],
    "basePrice": 820000,
    "priceLabel": "Rp820.000"
  },
  {
    "id": "1270",
    "name": "MAGIC COM YONG MA SMC5061 1 LTR",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20YONG%20MA%20SMC5061",
    "variants": [
      {
        "sku": "MMGY5061",
        "label": "PCS",
        "price": 675000,
        "unit": "PCS"
      }
    ],
    "basePrice": 675000,
    "priceLabel": "Rp675.000"
  },
  {
    "id": "1271",
    "name": "MAGIC COM YONG MA SMC8073 2 LTR",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGIC%20COM%20YONG%20MA%20SMC8073",
    "variants": [
      {
        "sku": "MMGY8073",
        "label": "PCS",
        "price": 700000,
        "unit": "PCS"
      }
    ],
    "basePrice": 700000,
    "priceLabel": "Rp700.000"
  },
  {
    "id": "1272",
    "name": "MAGNET PINTU DOLPHIN",
    "category": "Umum",
    "brand": "DOLPHIN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MAGNET%20PINTU%20DOLPHIN",
    "variants": [
      {
        "sku": "MDOMAG01",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1273",
    "name": "MARKING KRAYON BIRU HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MARKING%20KRAYON%20BIRU%20HIOSH",
    "variants": [
      {
        "sku": "MR KR BR HS",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1274",
    "name": "MATA BLENDER LAS NO 2 YAMATO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BLENDER%20LAS%20NO%202%20YAM",
    "variants": [
      {
        "sku": "MTBDLA2",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1275",
    "name": "MATA BOR AUGERBITS 10MM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20AUGERBITS%2010MM%20H",
    "variants": [
      {
        "sku": "MHAMAT01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1276",
    "name": "MATA BOR AUGERBITS 13MM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20AUGERBITS%2013MM%20H",
    "variants": [
      {
        "sku": "MHAMAT02",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1277",
    "name": "MATA BOR AUGERBITS 16MM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20AUGERBITS%2016MM%20H",
    "variants": [
      {
        "sku": "MHAMAT03",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1278",
    "name": "MATA BOR AUGERBITS 19MM HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20AUGERBITS%2019MM%20H",
    "variants": [
      {
        "sku": "MHAMAT04",
        "label": "PCS",
        "price": 52000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52000,
    "priceLabel": "Rp52.000"
  },
  {
    "id": "1279",
    "name": "MATA BOR BESI KUNING 3MM GDO",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BESI%20KUNING%203MM%20",
    "variants": [
      {
        "sku": "MTBBKN3",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1280",
    "name": "MATA BOR BETON 10MM BRANCH",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%2010MM%20BRANC",
    "variants": [
      {
        "sku": "MMTBBBR10",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1281",
    "name": "MATA BOR BETON 10MM GDO",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%2010MM%20GDO",
    "variants": [
      {
        "sku": "MGDMAT03",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1282",
    "name": "MATA BOR BETON 12MM GDO",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%2012MM%20GDO",
    "variants": [
      {
        "sku": "MGDMAT04",
        "label": "PCS",
        "price": 36000,
        "unit": "PCS"
      }
    ],
    "basePrice": 36000,
    "priceLabel": "Rp36.000"
  },
  {
    "id": "1283",
    "name": "MATA BOR BETON 4MM GDO",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%204MM%20GDO",
    "variants": [
      {
        "sku": "MGDMAT01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1284",
    "name": "MATA BOR BETON 5MM GDO",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%205MM%20GDO",
    "variants": [
      {
        "sku": "MGDMAT02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1285",
    "name": "MATA BOR BETON 6MM GDO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%206MM%20GDO",
    "variants": [
      {
        "sku": "MB BTN6",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1286",
    "name": "MATA BOR BETON 8MM BRANCH",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%208MM%20BRANCH",
    "variants": [
      {
        "sku": "MMTBBBRN",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1287",
    "name": "MATA BOR BETON 8MM GDO",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%208MM%20GDO",
    "variants": [
      {
        "sku": "MGDMAT05",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1288",
    "name": "MATA BOR BETON GOMEO 6",
    "category": "Alat tukang",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20GOMEO%206",
    "variants": [
      {
        "sku": "MGOMAT01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "1289",
    "name": "MATA BOR BETON HASSTON 10MM X 120",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20HASSTON%2010",
    "variants": [
      {
        "sku": "MHAMAT11",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1290",
    "name": "MATA BOR BETON MAKITA 10",
    "category": "Alat tukang",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20MAKITA%2010",
    "variants": [
      {
        "sku": "MMAMAT03",
        "label": "10",
        "price": 35000,
        "unit": "PCS"
      },
      {
        "sku": "MMAMAT04",
        "label": "12",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000 - Rp38.000"
  },
  {
    "id": "1291",
    "name": "MATA BOR BETON SDS 10MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20SDS%2010MM%20E",
    "variants": [
      {
        "sku": "MESMAT05",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1292",
    "name": "MATA BOR BETON SDS 6MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20SDS%206MM%20ES",
    "variants": [
      {
        "sku": "MESMAT07",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1293",
    "name": "MATA BOR BETON SDS 8MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20SDS%208MM%20ES",
    "variants": [
      {
        "sku": "MESMAT06",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1294",
    "name": "MATA BOR BETON SET 5 PCS HASSTON",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BETON%20SET%205%20PCS%20",
    "variants": [
      {
        "sku": "MTBBSHA",
        "label": "SET",
        "price": 55000,
        "unit": "SET"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1295",
    "name": "MATA BOR BOBOK FLAT ESSEN",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BOBOK%20FLAT%20ESSEN",
    "variants": [
      {
        "sku": "MTBBFLES",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1296",
    "name": "MATA BOR BOBOK SDS PIPIH TJAP MATA",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BOBOK%20SDS%20PIPIH%20",
    "variants": [
      {
        "sku": "MMTBSDSPTM",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1297",
    "name": "MATA BOR BOBOK SDS POINT TJAP MATA",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20BOBOK%20SDS%20POINT%20",
    "variants": [
      {
        "sku": "MTBPPTM",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1298",
    "name": "MATA BOR COLOK 10 YOZURI",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20COLOK%2010%20YOZURI",
    "variants": [
      {
        "sku": "MTB CLK YZ 10",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1299",
    "name": "MATA BOR COLOK 12 YOZURI",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20COLOK%2012%20YOZURI",
    "variants": [
      {
        "sku": "MTB CLK YZ 12",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "1300",
    "name": "MATA BOR COLOK 6 YOZURI",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20COLOK%206%20YOZURI",
    "variants": [
      {
        "sku": "MTB CLK YZ 6",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1301",
    "name": "MATA BOR COLOK 8 YOZURI",
    "category": "Umum",
    "brand": "YOZURI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20COLOK%208%20YOZURI",
    "variants": [
      {
        "sku": "MTB CLK YZ 8",
        "label": "PCS",
        "price": 19000,
        "unit": "PCS"
      }
    ],
    "basePrice": 19000,
    "priceLabel": "Rp19.000"
  },
  {
    "id": "1302",
    "name": "MATA BOR ENGSEL SENDOK 15MM",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20ENGSEL%20SENDOK%2015",
    "variants": [
      {
        "sku": "MTBESN15",
        "label": "15MM",
        "price": 32000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN16",
        "label": "16MM",
        "price": 34000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN18",
        "label": "18MM",
        "price": 36000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN22",
        "label": "22MM",
        "price": 40000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN25",
        "label": "25MM",
        "price": 45000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN28",
        "label": "28MM",
        "price": 50000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN30",
        "label": "30MM",
        "price": 53000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN32",
        "label": "32MM",
        "price": 58000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN35",
        "label": "35MM",
        "price": 60000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN38",
        "label": "38MM",
        "price": 64000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN40",
        "label": "40MM",
        "price": 68000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN45",
        "label": "45MM",
        "price": 76000,
        "unit": "PCS"
      },
      {
        "sku": "MTBESN50",
        "label": "50MM",
        "price": 82000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000 - Rp82.000"
  },
  {
    "id": "1303",
    "name": "MATA BOR KIPAS SET 3 PCS BLITZ",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KIPAS%20SET%203%20PCS%20",
    "variants": [
      {
        "sku": "MBORKPS3",
        "label": "SET",
        "price": 40000,
        "unit": "SET"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1304",
    "name": "MATA BOR KIPAS SET 6 PCS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KIPAS%20SET%206%20PCS",
    "variants": [
      {
        "sku": "MBORKPS6",
        "label": "SET",
        "price": 60000,
        "unit": "SET"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1305",
    "name": "MATA BOR KUNING 1,5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%201%2C5'",
    "variants": [
      {
        "sku": "MB KNG1,5",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "1306",
    "name": "MATA BOR KUNING 10'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%2010'",
    "variants": [
      {
        "sku": "MB KNG10",
        "label": "PCS",
        "price": 8300,
        "unit": "PCS"
      }
    ],
    "basePrice": 8300,
    "priceLabel": "Rp8.300"
  },
  {
    "id": "1307",
    "name": "MATA BOR KUNING 11'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%2011'",
    "variants": [
      {
        "sku": "MB KNG11",
        "label": "PCS",
        "price": 8142.76,
        "unit": "PCS"
      }
    ],
    "basePrice": 8142.76,
    "priceLabel": "Rp8.142,76"
  },
  {
    "id": "1308",
    "name": "MATA BOR KUNING 12'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%2012'",
    "variants": [
      {
        "sku": "MB KNG12",
        "label": "PCS",
        "price": 8921.78,
        "unit": "PCS"
      }
    ],
    "basePrice": 8921.78,
    "priceLabel": "Rp8.921,78"
  },
  {
    "id": "1309",
    "name": "MATA BOR KUNING 2,5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%202%2C5'",
    "variants": [
      {
        "sku": "MB KNG2,5",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "1310",
    "name": "MATA BOR KUNING 2'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%202'",
    "variants": [
      {
        "sku": "MB KNG2",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "1311",
    "name": "MATA BOR KUNING 3,5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%203%2C5'",
    "variants": [
      {
        "sku": "MB KNG3,5",
        "label": "PCS",
        "price": 1365,
        "unit": "PCS"
      }
    ],
    "basePrice": 1365,
    "priceLabel": "Rp1.365"
  },
  {
    "id": "1312",
    "name": "MATA BOR KUNING 3'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%203'",
    "variants": [
      {
        "sku": "MB KNG3",
        "label": "PCS",
        "price": 954,
        "unit": "PCS"
      }
    ],
    "basePrice": 954,
    "priceLabel": "Rp954"
  },
  {
    "id": "1313",
    "name": "MATA BOR KUNING 4,5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%204%2C5'",
    "variants": [
      {
        "sku": "MB KNG4,5",
        "label": "PCS",
        "price": 1430,
        "unit": "PCS"
      }
    ],
    "basePrice": 1430,
    "priceLabel": "Rp1.430"
  },
  {
    "id": "1314",
    "name": "MATA BOR KUNING 4'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%204'",
    "variants": [
      {
        "sku": "MB KNG4",
        "label": "PCS",
        "price": 1398.18,
        "unit": "PCS"
      }
    ],
    "basePrice": 1398.18,
    "priceLabel": "Rp1.398,18"
  },
  {
    "id": "1315",
    "name": "MATA BOR KUNING 5,5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%205%2C5'",
    "variants": [
      {
        "sku": "MB KNG5,5",
        "label": "PCS",
        "price": 1748.18,
        "unit": "PCS"
      }
    ],
    "basePrice": 1748.18,
    "priceLabel": "Rp1.748,18"
  },
  {
    "id": "1316",
    "name": "MATA BOR KUNING 5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%205'",
    "variants": [
      {
        "sku": "MB KNG5",
        "label": "PCS",
        "price": 1695.47,
        "unit": "PCS"
      }
    ],
    "basePrice": 1695.47,
    "priceLabel": "Rp1.695,47"
  },
  {
    "id": "1317",
    "name": "MATA BOR KUNING 6,5'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%206%2C5'",
    "variants": [
      {
        "sku": "MB KNG6,5",
        "label": "PCS",
        "price": 3233,
        "unit": "PCS"
      }
    ],
    "basePrice": 3233,
    "priceLabel": "Rp3.233"
  },
  {
    "id": "1318",
    "name": "MATA BOR KUNING 6'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%206'",
    "variants": [
      {
        "sku": "MB KNG6",
        "label": "PCS",
        "price": 1907,
        "unit": "PCS"
      }
    ],
    "basePrice": 1907,
    "priceLabel": "Rp1.907"
  },
  {
    "id": "1319",
    "name": "MATA BOR KUNING 7'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%207'",
    "variants": [
      {
        "sku": "MB KNG7",
        "label": "PCS",
        "price": 3977.27,
        "unit": "PCS"
      }
    ],
    "basePrice": 3977.27,
    "priceLabel": "Rp3.977,27"
  },
  {
    "id": "1320",
    "name": "MATA BOR KUNING 8'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%208'",
    "variants": [
      {
        "sku": "MB KNG8",
        "label": "PCS",
        "price": 4177.67,
        "unit": "PCS"
      }
    ],
    "basePrice": 4177.67,
    "priceLabel": "Rp4.177,67"
  },
  {
    "id": "1321",
    "name": "MATA BOR KUNING 9'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20KUNING%209'",
    "variants": [
      {
        "sku": "MB KNG9",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1322",
    "name": "MATA BOR MULTIFUNGSI 10 MM IWA",
    "category": "Umum",
    "brand": "IWA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%2010%20M",
    "variants": [
      {
        "sku": "MB MTF 10",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1323",
    "name": "MATA BOR MULTIFUNGSI 10MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%2010MM",
    "variants": [
      {
        "sku": "MESMAT01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1324",
    "name": "MATA BOR MULTIFUNGSI 12MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%2012MM",
    "variants": [
      {
        "sku": "MESMAT02",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1325",
    "name": "MATA BOR MULTIFUNGSI 6 MM IWA",
    "category": "Umum",
    "brand": "IWA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%206%20MM",
    "variants": [
      {
        "sku": "MB MTF 6",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1326",
    "name": "MATA BOR MULTIFUNGSI 6MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%206MM%20",
    "variants": [
      {
        "sku": "MESMAT03",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1327",
    "name": "MATA BOR MULTIFUNGSI 8 MM IWA",
    "category": "Umum",
    "brand": "IWA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%208%20MM",
    "variants": [
      {
        "sku": "MB MTF 8",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1328",
    "name": "MATA BOR MULTIFUNGSI 8MM ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20MULTIFUNGSI%208MM%20",
    "variants": [
      {
        "sku": "MESMAT04",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1329",
    "name": "MATA BOR NACHI 10MM",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20NACHI%2010MM",
    "variants": [
      {
        "sku": "MTBNCH3",
        "label": "3MM",
        "price": 25000,
        "unit": "PCS"
      },
      {
        "sku": "MTBNCH5",
        "label": "5MM",
        "price": 35000,
        "unit": "PCS"
      },
      {
        "sku": "MTBRNAC6",
        "label": "6MM",
        "price": 42000,
        "unit": "PCS"
      },
      {
        "sku": "MTBNCH8",
        "label": "8MM",
        "price": 65000,
        "unit": "PCS"
      },
      {
        "sku": "MTBNCH10",
        "label": "10MM",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000 - Rp105.000"
  },
  {
    "id": "1330",
    "name": "MATA BOR PAGODA 3-12MM",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20PAGODA%203-12MM",
    "variants": [
      {
        "sku": "MPGD312",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1331",
    "name": "MATA BOR PAGODA 4-20MM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20PAGODA%204-20MM",
    "variants": [
      {
        "sku": "MNOMAT26",
        "label": "20MM",
        "price": 45000,
        "unit": "PCS"
      },
      {
        "sku": "MNOMAT25",
        "label": "32MM",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000 - Rp70.000"
  },
  {
    "id": "1332",
    "name": "MATA BOR PAGODA MEIJER 3 - 12 MM",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20PAGODA%20MEIJER%203%20",
    "variants": [
      {
        "sku": "MNOMAT02",
        "label": "PAK",
        "price": 30000,
        "unit": "PAK"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1333",
    "name": "MATA BOR PAGODA SET 3 PCS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20PAGODA%20SET%203%20PCS",
    "variants": [
      {
        "sku": "MNOMAT27",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1334",
    "name": "MATA BOR SDS / COLOK MAKITA 12",
    "category": "Alat tukang",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20SDS%20%2F%20COLOK%20MAKI",
    "variants": [
      {
        "sku": "MMAMAT07",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "1335",
    "name": "MATA BOR TOMBAK 10MM TJAP MATA",
    "category": "Alat tukang",
    "brand": "TJAP MATA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20TOMBAK%2010MM%20TJAP",
    "variants": [
      {
        "sku": "MTJMAT03",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1336",
    "name": "MATA BOR TOMBAK 6MM TJAP MATA",
    "category": "Alat tukang",
    "brand": "TJAP MATA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20TOMBAK%206MM%20TJAP%20",
    "variants": [
      {
        "sku": "MTJMAT01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1337",
    "name": "MATA BOR TOMBAK 8MM TJAP MATA",
    "category": "Alat tukang",
    "brand": "TJAP MATA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20BOR%20TOMBAK%208MM%20TJAP%20",
    "variants": [
      {
        "sku": "MTJMAT02",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1338",
    "name": "MATA CIRCLE BULL 7' X 24T",
    "category": "Alat tukang",
    "brand": "BULL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20CIRCLE%20BULL%207'%20X%2024T",
    "variants": [
      {
        "sku": "MBUMAT01",
        "label": "PCS",
        "price": 110000,
        "unit": "PCS"
      }
    ],
    "basePrice": 110000,
    "priceLabel": "Rp110.000"
  },
  {
    "id": "1339",
    "name": "MATA CIRCLE MODERN 4\" X 24T",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20CIRCLE%20MODERN%204%22%20X%202",
    "variants": [
      {
        "sku": "MMOMAT06",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1340",
    "name": "MATA CIRCLE MOLLAR 10' X 120 T",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20CIRCLE%20MOLLAR%2010'%20X%20",
    "variants": [
      {
        "sku": "MMOMAT04",
        "label": "PCS",
        "price": 190000,
        "unit": "PCS"
      }
    ],
    "basePrice": 190000,
    "priceLabel": "Rp190.000"
  },
  {
    "id": "1341",
    "name": "MATA CIRCLE MOLLAR 7 X 100 T",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20CIRCLE%20MOLLAR%207%20X%2010",
    "variants": [
      {
        "sku": "MMOMAT02",
        "label": "PCS",
        "price": 115000,
        "unit": "PCS"
      }
    ],
    "basePrice": 115000,
    "priceLabel": "Rp115.000"
  },
  {
    "id": "1342",
    "name": "MATA CIRCLE MOLLAR 7 X 80 T",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20CIRCLE%20MOLLAR%207%20X%2080",
    "variants": [
      {
        "sku": "MMOMAT03",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1343",
    "name": "MATA GRAJI GLX FLEX 18T",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20GRAJI%20GLX%20FLEX%2018T",
    "variants": [
      {
        "sku": "GLX FLEX18",
        "label": "PCS",
        "price": 5500,
        "unit": "PCS"
      }
    ],
    "basePrice": 5500,
    "priceLabel": "Rp5.500"
  },
  {
    "id": "1344",
    "name": "MATA GRAJI VPR FLEX 18T",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20GRAJI%20VPR%20FLEX%2018T",
    "variants": [
      {
        "sku": "VPR FLEX 18",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1345",
    "name": "MATA GRAJI VPR FLEX 24T",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20GRAJI%20VPR%20FLEX%2024T",
    "variants": [
      {
        "sku": "VPR FLEX 24",
        "label": "PCS",
        "price": 900.9,
        "unit": "PCS"
      }
    ],
    "basePrice": 900.9,
    "priceLabel": "Rp900,9"
  },
  {
    "id": "1346",
    "name": "MATA JIG SAW SET 5 PCS NO. 1",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20JIG%20SAW%20SET%205%20PCS%20NO",
    "variants": [
      {
        "sku": "MNOMAT22",
        "label": "1",
        "price": 20000,
        "unit": "PCS"
      },
      {
        "sku": "MNOMAT23",
        "label": "10",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000 - Rp27.000"
  },
  {
    "id": "1347",
    "name": "MATA JIG SAW SET 5 PCS T101AO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20JIG%20SAW%20SET%205%20PCS%20T1",
    "variants": [
      {
        "sku": "MNOMAT24",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1348",
    "name": "MATA OBENG ANGIN (RING) PH2 VPR",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20OBENG%20ANGIN%20(RING)%20P",
    "variants": [
      {
        "sku": "MTOBRVPR",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1349",
    "name": "MATA OBENG ANGIN +- PH2 X 65MM TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20OBENG%20ANGIN%20%2B-%20PH2%20X",
    "variants": [
      {
        "sku": "MTOAP2TK",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1350",
    "name": "MATA OBENG KETOK PH2 (-) TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20OBENG%20KETOK%20PH2%20(-)%20",
    "variants": [
      {
        "sku": "MTEMAT03",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1351",
    "name": "MATA OBENG KETOK PH2 (+) TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20OBENG%20KETOK%20PH2%20(%2B)%20",
    "variants": [
      {
        "sku": "MTEMAT02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1352",
    "name": "MATA PROFIL SET 12 PCS BENZ",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20PROFIL%20SET%2012%20PCS%20BE",
    "variants": [
      {
        "sku": "MTPRSETB",
        "label": "SET",
        "price": 150000,
        "unit": "SET"
      }
    ],
    "basePrice": 150000,
    "priceLabel": "Rp150.000"
  },
  {
    "id": "1353",
    "name": "MATA SERKEL BOSCH 5/8",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SERKEL%20BOSCH%205%2F8",
    "variants": [
      {
        "sku": "MT SRK BSCH",
        "label": "PCS",
        "price": 125441.11,
        "unit": "PCS"
      }
    ],
    "basePrice": 125441.11,
    "priceLabel": "Rp125.441,11"
  },
  {
    "id": "1354",
    "name": "MATA SOCK HASSTON 1/2\" 6 PT 10MM",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20HASSTON%201%2F2%22%206%20",
    "variants": [
      {
        "sku": "MHAMAT05",
        "label": "8MM",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "MHAMAT06",
        "label": "10MM",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "MHAMAT07",
        "label": "12MM",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "MHAMAT08",
        "label": "14MM",
        "price": 12000,
        "unit": "PCS"
      },
      {
        "sku": "MHAMAT09",
        "label": "19MM",
        "price": 16000,
        "unit": "PCS"
      },
      {
        "sku": "MHAMAT10",
        "label": "24MM",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000 - Rp20.000"
  },
  {
    "id": "1355",
    "name": "MATA SOCK PANJANG TEKIRO 10MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK10",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1356",
    "name": "MATA SOCK PANJANG TEKIRO 12MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK12",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1357",
    "name": "MATA SOCK PANJANG TEKIRO 14MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK14",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1358",
    "name": "MATA SOCK PANJANG TEKIRO 17MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK17",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1359",
    "name": "MATA SOCK PANJANG TEKIRO 19MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK19",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1360",
    "name": "MATA SOCK PANJANG TEKIRO 22MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK22",
        "label": "PCS",
        "price": 52000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52000,
    "priceLabel": "Rp52.000"
  },
  {
    "id": "1361",
    "name": "MATA SOCK PANJANG TEKIRO 24MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK24",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1362",
    "name": "MATA SOCK PANJANG TEKIRO 8MM 1/2\" 6 PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20PANJANG%20TEKIRO%20",
    "variants": [
      {
        "sku": "MTSPTK8",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1363",
    "name": "MATA SOCK ROFING FREED",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20ROFING%20FREED",
    "variants": [
      {
        "sku": "MTSROFF",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1364",
    "name": "MATA SOCK ROFING PENDEK BLACKFOOT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20ROFING%20PENDEK%20B",
    "variants": [
      {
        "sku": "MTSORPBF",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1365",
    "name": "MATA SOCK TEKIRO 1/2” 6 PT 17MM",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20TEKIRO%201%2F2%E2%80%9D%206%20P",
    "variants": [
      {
        "sku": "MTEMAT01",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1366",
    "name": "MATA SOCK TEKIRO 22MM 1/2” 6PT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOCK%20TEKIRO%2022MM%201%2F2",
    "variants": [
      {
        "sku": "MTSOTK22",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "1367",
    "name": "MATA SOK BINTANG 1/2 T40 TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOK%20BINTANG%201%2F2%20T40%20",
    "variants": [
      {
        "sku": "MTEMAT06",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1368",
    "name": "MATA SOK BINTANG 1/2 T45 TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOK%20BINTANG%201%2F2%20T45%20",
    "variants": [
      {
        "sku": "MTEMAT07",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1369",
    "name": "MATA SOK BINTANG 1/2 T50 TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOK%20BINTANG%201%2F2%20T50%20",
    "variants": [
      {
        "sku": "MTEMAT08",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1370",
    "name": "MATA SOK ROFING TEKIRO 10 X 65MM",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOK%20ROFING%20TEKIRO%2010",
    "variants": [
      {
        "sku": "MTEMAT05",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1371",
    "name": "MATA SOK ROFING TEKIRO 8 X 65MM",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MATA%20SOK%20ROFING%20TEKIRO%208%20",
    "variants": [
      {
        "sku": "MTEMAT04",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1372",
    "name": "MCB 10A 17310C BROCO",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MCB%2010A%2017310C%20BROCO",
    "variants": [
      {
        "sku": "MBRMCB03",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "1373",
    "name": "MCB 16A 17316C BROCO",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MCB%2016A%2017316C%20BROCO",
    "variants": [
      {
        "sku": "MBRMCB04",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "1374",
    "name": "MCB 2A 17302C BROCO",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MCB%202A%2017302C%20BROCO",
    "variants": [
      {
        "sku": "MBRMCB01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1375",
    "name": "MCB 4A 17304C BROCO",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MCB%204A%2017304C%20BROCO",
    "variants": [
      {
        "sku": "MBRMCB02",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1376",
    "name": "MESIN AMPLAS MODERN M-2500B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20AMPLAS%20MODERN%20M-250",
    "variants": [
      {
        "sku": "MMOMES22",
        "label": "PCS",
        "price": 365000,
        "unit": "PCS"
      }
    ],
    "basePrice": 365000,
    "priceLabel": "Rp365.000"
  },
  {
    "id": "1377",
    "name": "MESIN BOR 10MM BOSCH GBM 400",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%2010MM%20BOSCH%20GBM%20",
    "variants": [
      {
        "sku": "BBGBM400",
        "label": "PCS",
        "price": 460000,
        "unit": "PCS"
      }
    ],
    "basePrice": 460000,
    "priceLabel": "Rp460.000"
  },
  {
    "id": "1378",
    "name": "MESIN BOR 10MM MODERN M-2100B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%2010MM%20MODERN%20M-2",
    "variants": [
      {
        "sku": "MMOMES24",
        "label": "PCS",
        "price": 245000,
        "unit": "PCS"
      }
    ],
    "basePrice": 245000,
    "priceLabel": "Rp245.000"
  },
  {
    "id": "1379",
    "name": "MESIN BOR 10MM MODERN M-2100C",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%2010MM%20MODERN%20M-2",
    "variants": [
      {
        "sku": "MMOMES03",
        "label": "PCS",
        "price": 280000,
        "unit": "PCS"
      }
    ],
    "basePrice": 280000,
    "priceLabel": "Rp280.000"
  },
  {
    "id": "1380",
    "name": "MESIN BOR 13MM BOSCH GSB 600",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%2013MM%20BOSCH%20GSB%20",
    "variants": [
      {
        "sku": "BBGSB600",
        "label": "PCS",
        "price": 650000,
        "unit": "PCS"
      }
    ],
    "basePrice": 650000,
    "priceLabel": "Rp650.000"
  },
  {
    "id": "1381",
    "name": "MESIN BOR 13MM MODERN M-2150",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%2013MM%20MODERN%20M-2",
    "variants": [
      {
        "sku": "MOD2150",
        "label": "PCS",
        "price": 380000,
        "unit": "PCS"
      }
    ],
    "basePrice": 380000,
    "priceLabel": "Rp380.000"
  },
  {
    "id": "1382",
    "name": "MESIN BOR BATERAI 10MM MODERN M-12V",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20BATERAI%2010MM%20MO",
    "variants": [
      {
        "sku": "MMOMES05",
        "label": "PCS",
        "price": 450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 450000,
    "priceLabel": "Rp450.000"
  },
  {
    "id": "1383",
    "name": "MESIN BOR BATERAI 10MM MODERN M-13 SET",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20BATERAI%2010MM%20MO",
    "variants": [
      {
        "sku": "MMOMES01",
        "label": "PCS",
        "price": 450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 450000,
    "priceLabel": "Rp450.000"
  },
  {
    "id": "1384",
    "name": "MESIN BOR BETON 13MM MODERN M-2130B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20BETON%2013MM%20MODE",
    "variants": [
      {
        "sku": "MMOMES04",
        "label": "PCS",
        "price": 400000,
        "unit": "PCS"
      }
    ],
    "basePrice": 400000,
    "priceLabel": "Rp400.000"
  },
  {
    "id": "1385",
    "name": "MESIN BOR CORDLESS 10MM HDT",
    "category": "Power tools",
    "brand": "HDT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20CORDLESS%2010MM%20H",
    "variants": [
      {
        "sku": "MBCS10MD",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "1386",
    "name": "MESIN BOR LISTRIK 10MM MODERN JIZ-10B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20LISTRIK%2010MM%20MO",
    "variants": [
      {
        "sku": "MMOMES23",
        "label": "PCS",
        "price": 260000,
        "unit": "PCS"
      }
    ],
    "basePrice": 260000,
    "priceLabel": "Rp260.000"
  },
  {
    "id": "1387",
    "name": "MESIN BOR OBENG CORDLESS 47 PCS",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20OBENG%20CORDLESS%20",
    "variants": [
      {
        "sku": "BOROBCRD",
        "label": "PCS",
        "price": 180000,
        "unit": "PCS"
      }
    ],
    "basePrice": 180000,
    "priceLabel": "Rp180.000"
  },
  {
    "id": "1388",
    "name": "MESIN BOR TUNER MINI MODERN M-2310",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20BOR%20TUNER%20MINI%20MODE",
    "variants": [
      {
        "sku": "MNOMES15",
        "label": "PCS",
        "price": 450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 450000,
    "priceLabel": "Rp450.000"
  },
  {
    "id": "1389",
    "name": "MESIN CIRCULAR SAW MODERN M-2600L (LASER)",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20CIRCULAR%20SAW%20MODERN",
    "variants": [
      {
        "sku": "MMOMES07",
        "label": "PCS",
        "price": 650000,
        "unit": "PCS"
      }
    ],
    "basePrice": 650000,
    "priceLabel": "Rp650.000"
  },
  {
    "id": "1390",
    "name": "MESIN CIRCULAR SAW SM10\"X40T ESSEN",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20CIRCULAR%20SAW%20SM10%22X",
    "variants": [
      {
        "sku": "CIRCULARSAW SM10",
        "label": "PCS",
        "price": 87200,
        "unit": "PCS"
      }
    ],
    "basePrice": 87200,
    "priceLabel": "Rp87.200"
  },
  {
    "id": "1391",
    "name": "MESIN CUT OFF 14\" MODERN M-2480D",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20CUT%20OFF%2014%22%20MODERN%20",
    "variants": [
      {
        "sku": "MMOMES09",
        "label": "PCS",
        "price": 1275000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1275000,
    "priceLabel": "Rp1.275.000"
  },
  {
    "id": "1392",
    "name": "MESIN CUT OFF 14\" MODERN M-2490",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20CUT%20OFF%2014%22%20MODERN%20",
    "variants": [
      {
        "sku": "MMOMES08",
        "label": "PCS",
        "price": 1550000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1550000,
    "priceLabel": "Rp1.550.000"
  },
  {
    "id": "1393",
    "name": "MESIN CUT OFF 7\" RYU RCO180",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20CUT%20OFF%207%22%20RYU%20RCO1",
    "variants": [
      {
        "sku": "CUT7RYU",
        "label": "PCS",
        "price": 1020000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1020000,
    "priceLabel": "Rp1.020.000"
  },
  {
    "id": "1394",
    "name": "MESIN GERINDA BATERAI CORDLESS MODERN MG-20LI",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20BATERAI%20COR",
    "variants": [
      {
        "sku": "MMOMES10",
        "label": "PCS",
        "price": 1450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1450000,
    "priceLabel": "Rp1.450.000"
  },
  {
    "id": "1395",
    "name": "MESIN GERINDA BOSCH GWS 700",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20BOSCH%20GWS%207",
    "variants": [
      {
        "sku": "GBGWS700",
        "label": "PCS",
        "price": 450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 450000,
    "priceLabel": "Rp450.000"
  },
  {
    "id": "1396",
    "name": "MESIN GERINDA MINI MODERN M-2310",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20MINI%20MODERN",
    "variants": [
      {
        "sku": "MMOMES15",
        "label": "PCS",
        "price": 425000,
        "unit": "PCS"
      }
    ],
    "basePrice": 425000,
    "priceLabel": "Rp425.000"
  },
  {
    "id": "1397",
    "name": "MESIN GERINDA MODERN M-2300B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20MODERN%20M-23",
    "variants": [
      {
        "sku": "MMOMES12",
        "label": "PCS",
        "price": 310000,
        "unit": "PCS"
      }
    ],
    "basePrice": 310000,
    "priceLabel": "Rp310.000"
  },
  {
    "id": "1398",
    "name": "MESIN GERINDA MODERN M-2350B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20MODERN%20M-23",
    "variants": [
      {
        "sku": "MMOMES13",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "1399",
    "name": "MESIN GERINDA MODERN M-2360",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20MODERN%20M-23",
    "variants": [
      {
        "sku": "MMOMES14",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "1400",
    "name": "MESIN GERINDA MODERN SIM-100B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20MODERN%20SIM-",
    "variants": [
      {
        "sku": "MMOMES11",
        "label": "PCS",
        "price": 300000,
        "unit": "PCS"
      }
    ],
    "basePrice": 300000,
    "priceLabel": "Rp300.000"
  },
  {
    "id": "1401",
    "name": "MESIN GERINDA RYU RSG100-6",
    "category": "Power tools",
    "brand": "RYU",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20GERINDA%20RYU%20RSG100-",
    "variants": [
      {
        "sku": "MRYMES01",
        "label": "PCS",
        "price": 420000,
        "unit": "PCS"
      }
    ],
    "basePrice": 420000,
    "priceLabel": "Rp420.000"
  },
  {
    "id": "1402",
    "name": "MESIN HEAT GUN MODERN M-2050",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20HEAT%20GUN%20MODERN%20M-2",
    "variants": [
      {
        "sku": "MMOMES16",
        "label": "PCS",
        "price": 370000,
        "unit": "PCS"
      }
    ],
    "basePrice": 370000,
    "priceLabel": "Rp370.000"
  },
  {
    "id": "1403",
    "name": "MESIN IMPACT WRENCH MODERN M-65",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20IMPACT%20WRENCH%20MODER",
    "variants": [
      {
        "sku": "MMOMES02",
        "label": "PCS",
        "price": 1400000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1400000,
    "priceLabel": "Rp1.400.000"
  },
  {
    "id": "1404",
    "name": "MESIN JENSET",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20JENSET",
    "variants": [
      {
        "sku": "M JENSET",
        "label": "PCS",
        "price": 16000000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000000,
    "priceLabel": "Rp16.000.000"
  },
  {
    "id": "1405",
    "name": "MESIN JIG SAW MODERN M-2200",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20JIG%20SAW%20MODERN%20M-22",
    "variants": [
      {
        "sku": "MMOMES17",
        "label": "PCS",
        "price": 320000,
        "unit": "PCS"
      }
    ],
    "basePrice": 320000,
    "priceLabel": "Rp320.000"
  },
  {
    "id": "1406",
    "name": "MESIN LAS LAKONI 450W 123IX",
    "category": "Alat teknik",
    "brand": "LAKONI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20LAS%20LAKONI%20450W%20123",
    "variants": [
      {
        "sku": "MLL450WX",
        "label": "PCS",
        "price": 650000,
        "unit": "PCS"
      }
    ],
    "basePrice": 650000,
    "priceLabel": "Rp650.000"
  },
  {
    "id": "1407",
    "name": "MESIN M0600B MAKITA MT",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20M0600B%20MAKITA%20MT",
    "variants": [
      {
        "sku": "M0600B",
        "label": "PCS",
        "price": 425000,
        "unit": "PCS"
      }
    ],
    "basePrice": 425000,
    "priceLabel": "Rp425.000"
  },
  {
    "id": "1408",
    "name": "MESIN M0801B MAKITA MT",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20M0801B%20MAKITA%20MT",
    "variants": [
      {
        "sku": "M0801B",
        "label": "PCS",
        "price": 650000,
        "unit": "PCS"
      }
    ],
    "basePrice": 650000,
    "priceLabel": "Rp650.000"
  },
  {
    "id": "1409",
    "name": "MESIN M0900B MAKITA MT",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20M0900B%20MAKITA%20MT",
    "variants": [
      {
        "sku": "M0900B",
        "label": "PCS",
        "price": 450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 450000,
    "priceLabel": "Rp450.000"
  },
  {
    "id": "1410",
    "name": "MESIN M0910B MAKITA MT",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20M0910B%20MAKITA%20MT",
    "variants": [
      {
        "sku": "M0910B",
        "label": "PCS",
        "price": 550000,
        "unit": "PCS"
      }
    ],
    "basePrice": 550000,
    "priceLabel": "Rp550.000"
  },
  {
    "id": "1411",
    "name": "MESIN M1902B MAKITA MT",
    "category": "Umum",
    "brand": "MAKITA MT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20M1902B%20MAKITA%20MT",
    "variants": [
      {
        "sku": "M1902B",
        "label": "PCS",
        "price": 975000,
        "unit": "PCS"
      }
    ],
    "basePrice": 975000,
    "priceLabel": "Rp975.000"
  },
  {
    "id": "1412",
    "name": "MESIN PLANER BODY MERAH MODERN M-2920",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20PLANER%20BODY%20MERAH%20M",
    "variants": [
      {
        "sku": "MMOMES26",
        "label": "PCS",
        "price": 500000,
        "unit": "PCS"
      }
    ],
    "basePrice": 500000,
    "priceLabel": "Rp500.000"
  },
  {
    "id": "1413",
    "name": "MESIN PLANER MODERN M-2900",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20PLANER%20MODERN%20M-290",
    "variants": [
      {
        "sku": "MMOMES25",
        "label": "PCS",
        "price": 500000,
        "unit": "PCS"
      }
    ],
    "basePrice": 500000,
    "priceLabel": "Rp500.000"
  },
  {
    "id": "1414",
    "name": "MESIN POLES 7\" MODERN M-3200C",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20POLES%207%22%20MODERN%20M-3",
    "variants": [
      {
        "sku": "MMOMES18",
        "label": "PCS",
        "price": 725000,
        "unit": "PCS"
      }
    ],
    "basePrice": 725000,
    "priceLabel": "Rp725.000"
  },
  {
    "id": "1415",
    "name": "MESIN TRIMMER MODERN M-2700",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20TRIMMER%20MODERN%20M-27",
    "variants": [
      {
        "sku": "MMOMES19",
        "label": "PCS",
        "price": 420000,
        "unit": "PCS"
      }
    ],
    "basePrice": 420000,
    "priceLabel": "Rp420.000"
  },
  {
    "id": "1416",
    "name": "MESIN TRIMMER MODERN M-2750",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20TRIMMER%20MODERN%20M-27",
    "variants": [
      {
        "sku": "MMOMES20",
        "label": "PCS",
        "price": 420000,
        "unit": "PCS"
      }
    ],
    "basePrice": 420000,
    "priceLabel": "Rp420.000"
  },
  {
    "id": "1417",
    "name": "MESIN TRIMMER MODERN M-3800",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MESIN%20TRIMMER%20MODERN%20M-38",
    "variants": [
      {
        "sku": "MMOMES21",
        "label": "PCS",
        "price": 465000,
        "unit": "PCS"
      }
    ],
    "basePrice": 465000,
    "priceLabel": "Rp465.000"
  },
  {
    "id": "1418",
    "name": "METERAN AIR BESI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20AIR%20BESI",
    "variants": [
      {
        "sku": "MNOMET01",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "1419",
    "name": "METERAN AIR PVC MIAMI",
    "category": "Umum",
    "brand": "MIAMI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20AIR%20PVC%20MIAMI",
    "variants": [
      {
        "sku": "MTR AIR PVC",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1420",
    "name": "METERAN BANGJO 3M HIOSHI",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20BANGJO%203M%20HIOSHI",
    "variants": [
      {
        "sku": "METBGHI3",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1421",
    "name": "METERAN BANGJO 5M HIOSHI",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20BANGJO%205M%20HIOSHI",
    "variants": [
      {
        "sku": "MMTRBNGHIO",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1422",
    "name": "METERAN BANGJO 7,5M HIOSHI",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20BANGJO%207%2C5M%20HIOSH",
    "variants": [
      {
        "sku": "MTBAN75H",
        "label": "PCS",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 27000,
    "priceLabel": "Rp27.000"
  },
  {
    "id": "1423",
    "name": "METERAN JALAN 30 MTR TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20JALAN%2030%20MTR%20TOKI",
    "variants": [
      {
        "sku": "MTR JLN 30M",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1424",
    "name": "METERAN LASER TORA 100M",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20LASER%20TORA%20100M",
    "variants": [
      {
        "sku": "MTLST100",
        "label": "PCS",
        "price": 850000,
        "unit": "PCS"
      }
    ],
    "basePrice": 850000,
    "priceLabel": "Rp850.000"
  },
  {
    "id": "1425",
    "name": "METERAN LASER TORA 60M",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20LASER%20TORA%2060M",
    "variants": [
      {
        "sku": "MTLSTR60",
        "label": "PCS",
        "price": 600000,
        "unit": "PCS"
      }
    ],
    "basePrice": 600000,
    "priceLabel": "Rp600.000"
  },
  {
    "id": "1426",
    "name": "METERAN OTOMAT 3M HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20OTOMAT%203M%20HIOSHI",
    "variants": [
      {
        "sku": "MTR OTM 3",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "1427",
    "name": "METERAN OTOMAT 5M HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20OTOMAT%205M%20HIOSHI",
    "variants": [
      {
        "sku": "MTR OTM 5",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1428",
    "name": "METERAN OTOMAT 7,5M HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20OTOMAT%207%2C5M%20HIOSH",
    "variants": [
      {
        "sku": "MTR OTM 7.5",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1429",
    "name": "METERAN TANCAP / TANAH 100 M",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20TANCAP%20%2F%20TANAH%2010",
    "variants": [
      {
        "sku": "MNOMET04",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1430",
    "name": "METERAN TANCAP / TANAH 30 M",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20TANCAP%20%2F%20TANAH%2030",
    "variants": [
      {
        "sku": "MNOMET02",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1431",
    "name": "METERAN TANCAP / TANAH 50 M",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20TANCAP%20%2F%20TANAH%2050",
    "variants": [
      {
        "sku": "MNOMET03",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1432",
    "name": "METERAN TRANSPARAN TEKIRO 3M",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20TRANSPARAN%20TEKIRO",
    "variants": [
      {
        "sku": "MTEMET01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1433",
    "name": "METERAN TRANSPARAN TEKIRO 5M",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20TRANSPARAN%20TEKIRO",
    "variants": [
      {
        "sku": "MTEMET02",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1434",
    "name": "METERAN TRANSPARAN TEKIRO 7,5M",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=METERAN%20TRANSPARAN%20TEKIRO",
    "variants": [
      {
        "sku": "MTEMET03",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1435",
    "name": "MINUTE MAID PULPY ORANGE 300ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MINUTE%20MAID%20PULPY%20ORANGE%20",
    "variants": [
      {
        "sku": "MMPORG3",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1436",
    "name": "MITER SAW 10\" SLIDING MODERN M-3780",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MITER%20SAW%2010%22%20SLIDING%20MOD",
    "variants": [
      {
        "sku": "MMOMIT02",
        "label": "PCS",
        "price": 2200000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2200000,
    "priceLabel": "Rp2.200.000"
  },
  {
    "id": "1437",
    "name": "MITER SAW 7\" MODERN M-3700B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MITER%20SAW%207%22%20MODERN%20M-370",
    "variants": [
      {
        "sku": "MMOMIT01",
        "label": "PCS",
        "price": 950000,
        "unit": "PCS"
      }
    ],
    "basePrice": 950000,
    "priceLabel": "Rp950.000"
  },
  {
    "id": "1438",
    "name": "MUR TANDON 1/2 X 3/4",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MUR%20TANDON%201%2F2%20X%203%2F4",
    "variants": [
      {
        "sku": "MURTD1/2",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "1439",
    "name": "MUR TANDON 3/4 X 1",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=MUR%20TANDON%203%2F4%20X%201",
    "variants": [
      {
        "sku": "MURTD3/4",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1440",
    "name": "NO DROP 001 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NO%20DROP%20001%201%20KG",
    "variants": [
      {
        "sku": "ND0011KG",
        "label": "PCS",
        "price": 72500,
        "unit": "PCS"
      }
    ],
    "basePrice": 72500,
    "priceLabel": "Rp72.500"
  },
  {
    "id": "1441",
    "name": "NO DROP 009 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NO%20DROP%20009%201%20KG",
    "variants": [
      {
        "sku": "ND0091KG",
        "label": "1 KG",
        "price": 72500,
        "unit": "PCS"
      },
      {
        "sku": "ND0094KG",
        "label": "4 KG",
        "price": 266000,
        "unit": "PCS"
      }
    ],
    "basePrice": 72500,
    "priceLabel": "Rp72.500 - Rp266.000"
  },
  {
    "id": "1442",
    "name": "NO DROP 024 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NO%20DROP%20024%201%20KG",
    "variants": [
      {
        "sku": "ND0241KG",
        "label": "1 KG",
        "price": 72500,
        "unit": "PCS"
      },
      {
        "sku": "ND0244KG",
        "label": "4 KG",
        "price": 266000,
        "unit": "PCS"
      }
    ],
    "basePrice": 72500,
    "priceLabel": "Rp72.500 - Rp266.000"
  },
  {
    "id": "1443",
    "name": "NO DROP 033 1 KG",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NO%20DROP%20033%201%20KG",
    "variants": [
      {
        "sku": "NODR0331",
        "label": "1 KG",
        "price": 72500,
        "unit": "PCS"
      },
      {
        "sku": "NODR0334",
        "label": "4 KG",
        "price": 266000,
        "unit": "PCS"
      }
    ],
    "basePrice": 72500,
    "priceLabel": "Rp72.500 - Rp266.000"
  },
  {
    "id": "1444",
    "name": "NUTRIBOOST BLUEBERRY 300ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NUTRIBOOST%20BLUEBERRY%20300M",
    "variants": [
      {
        "sku": "NTRBBLB3",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1445",
    "name": "NUTRIBOOST ORANGE 300ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NUTRIBOOST%20ORANGE%20300ML",
    "variants": [
      {
        "sku": "NTRBORG3",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1446",
    "name": "NUTRIBOOST STRAWBERRY 300ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=NUTRIBOOST%20STRAWBERRY%20300",
    "variants": [
      {
        "sku": "NTRBSTR3",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1447",
    "name": "OBENG 2 WAY / OBB WARNA N0.290 3X5 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%202%20WAY%20%2F%20OBB%20WARNA%20N",
    "variants": [
      {
        "sku": "OBBPVC290",
        "label": "PCS",
        "price": 23750,
        "unit": "PCS"
      }
    ],
    "basePrice": 23750,
    "priceLabel": "Rp23.750"
  },
  {
    "id": "1448",
    "name": "OBENG 2 WAY WARNA PLASTIK 3X5 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%202%20WAY%20WARNA%20PLASTIK",
    "variants": [
      {
        "sku": "OBBPVC3",
        "label": "PCS",
        "price": 21591,
        "unit": "PCS"
      }
    ],
    "basePrice": 21591,
    "priceLabel": "Rp21.591"
  },
  {
    "id": "1449",
    "name": "OBENG 30 CM (-) GG KARET TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%2030%20CM%20(-)%20GG%20KARET%20",
    "variants": [
      {
        "sku": "OBPJMKTK",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1450",
    "name": "OBENG 30 CM (+) GG KARET TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%2030%20CM%20(%2B)%20GG%20KARET%20",
    "variants": [
      {
        "sku": "OBPJPKTK",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1451",
    "name": "OBENG BOLAK BALIK / OBB EXTREME 4'",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20%2F%20OBB%20E",
    "variants": [
      {
        "sku": "OBB EXT4",
        "label": "PCS",
        "price": 74100,
        "unit": "PCS"
      }
    ],
    "basePrice": 74100,
    "priceLabel": "Rp74.100"
  },
  {
    "id": "1452",
    "name": "OBENG BOLAK BALIK / OBB USA 4\" MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20%2F%20OBB%20U",
    "variants": [
      {
        "sku": "OBB USA 4",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1453",
    "name": "OBENG BOLAK BALIK / OBB USA HSJ",
    "category": "Umum",
    "brand": "HSJ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20%2F%20OBB%20U",
    "variants": [
      {
        "sku": "OBB USA HSJ",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1454",
    "name": "OBENG BOLAK BALIK / OBB USA LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20%2F%20OBB%20U",
    "variants": [
      {
        "sku": "OBB USA LEON",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1455",
    "name": "OBENG BOLAK BALIK TRANSPARAN 4\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20TRANSPA",
    "variants": [
      {
        "sku": "MNOOBE03",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1456",
    "name": "OBENG BOLAK BALIK TRANSPARAN 6\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20TRANSPA",
    "variants": [
      {
        "sku": "MNOOBE06",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1457",
    "name": "OBENG BOLAK BALIK USA 4\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20BOLAK%20BALIK%20USA%204%22",
    "variants": [
      {
        "sku": "MNOOBE05",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1458",
    "name": "OBENG CEBOL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20CEBOL",
    "variants": [
      {
        "sku": "MNOOBE01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1459",
    "name": "OBENG HP JAM SET 6 PCS TORA",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20HP%20JAM%20SET%206%20PCS%20TO",
    "variants": [
      {
        "sku": "OBHPSTR",
        "label": "SET",
        "price": 90000,
        "unit": "SET"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1460",
    "name": "OBENG HP SET KENMASTER 31 IN 1",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20HP%20SET%20KENMASTER%2031",
    "variants": [
      {
        "sku": "MOBHPKNM",
        "label": "SET",
        "price": 22000,
        "unit": "SET"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1461",
    "name": "OBENG HP TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20HP%20TORA",
    "variants": [
      {
        "sku": "OB HP TORA",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1462",
    "name": "OBENG KETOK BOLAK BALIK TRANSPARAN 4\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20KETOK%20BOLAK%20BALIK%20T",
    "variants": [
      {
        "sku": "MNOOBE04",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1463",
    "name": "OBENG KETOK KARET 2800 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20KETOK%20KARET%202800%20HI",
    "variants": [
      {
        "sku": "OB KTK HS",
        "label": "PCS",
        "price": 47369.96,
        "unit": "PCS"
      }
    ],
    "basePrice": 47369.96,
    "priceLabel": "Rp47.369,96"
  },
  {
    "id": "1464",
    "name": "OBENG KETOK SET 5 PCS TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20KETOK%20SET%205%20PCS%20TEK",
    "variants": [
      {
        "sku": "MTEOBE01",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "1465",
    "name": "OBENG MATA ANGIN PH2",
    "category": "Umum",
    "brand": "BOSCH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20MATA%20ANGIN%20PH2",
    "variants": [
      {
        "sku": "OB MT ANGIN",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1466",
    "name": "OBENG PANJANG PLUS ARMADA",
    "category": "Umum",
    "brand": "ARMADA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20PANJANG%20PLUS%20ARMADA",
    "variants": [
      {
        "sku": "MAROBE01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1467",
    "name": "OBENG RADIO SET 12\"",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20RADIO%20SET%2012%22",
    "variants": [
      {
        "sku": "MNOOBE07",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1468",
    "name": "OBENG SET KENMASTER 31 IN 1",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20SET%20KENMASTER%2031%20IN",
    "variants": [
      {
        "sku": "OBSEKNM",
        "label": "SET",
        "price": 25000,
        "unit": "SET"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1469",
    "name": "OBENG SET PLUS MINUS POPEYE",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20SET%20PLUS%20MINUS%20POPE",
    "variants": [
      {
        "sku": "OBSETPOP",
        "label": "SET",
        "price": 30000,
        "unit": "SET"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1470",
    "name": "OBENG TESPEN CHROME",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20TESPEN%20CHROME",
    "variants": [
      {
        "sku": "OBTESCH",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1471",
    "name": "OBENG TESPEN HISUKA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20TESPEN%20HISUKA",
    "variants": [
      {
        "sku": "MNOOBE02",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1472",
    "name": "OBENG TESTPEN 2 WAY JUMBO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20TESTPEN%202%20WAY%20JUMBO",
    "variants": [
      {
        "sku": "0BB TESTJM",
        "label": "PCS",
        "price": 4963.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 4963.75,
    "priceLabel": "Rp4.963,75"
  },
  {
    "id": "1473",
    "name": "OBENG TWO WAY TEKIRO SD-TW0849",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20TWO%20WAY%20TEKIRO%20SD-T",
    "variants": [
      {
        "sku": "MTEOBE02",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1474",
    "name": "OBENG USA TREX 4\"",
    "category": "Umum",
    "brand": "TREX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OBENG%20USA%20TREX%204%22",
    "variants": [
      {
        "sku": "MTROBE01",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1475",
    "name": "OIL CAN GNT 250CC",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OIL%20CAN%20GNT%20250CC",
    "variants": [
      {
        "sku": "MOILCANG",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1476",
    "name": "OTOMATIS POMPA AIR ISCO 1/4",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OTOMATIS%20POMPA%20AIR%20ISCO%201",
    "variants": [
      {
        "sku": "MISOTO05",
        "label": "1/4",
        "price": 50000,
        "unit": "PCS"
      },
      {
        "sku": "MISOTO04",
        "label": "3/8",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1477",
    "name": "OTOMATIS POMPA SC-125 1/4 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OTOMATIS%20POMPA%20SC-125%201%2F4",
    "variants": [
      {
        "sku": "PMP OT SC125 1/4",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1478",
    "name": "OTOMATIS POMPA SC-125 3/8 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OTOMATIS%20POMPA%20SC-125%203%2F8",
    "variants": [
      {
        "sku": "PMP OT SC125 IS",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "1479",
    "name": "OVERVAL 2,5\" TOP",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%202%2C5%22%20TOP",
    "variants": [
      {
        "sku": "OVER2TOP",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1480",
    "name": "OVERVAL 3” SOLAR",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%203%E2%80%9D%20SOLAR",
    "variants": [
      {
        "sku": "OVERSOL3",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1481",
    "name": "OVERVAL 300MM VOXY",
    "category": "Umum",
    "brand": "VOXY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20300MM%20VOXY",
    "variants": [
      {
        "sku": "MVOOVE01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1482",
    "name": "OVERVAL 400MM VOXY",
    "category": "Umum",
    "brand": "VOXY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20400MM%20VOXY",
    "variants": [
      {
        "sku": "MVOOVE02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1483",
    "name": "OVERVAL 500MM VOXY",
    "category": "Umum",
    "brand": "VOXY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20500MM%20VOXY",
    "variants": [
      {
        "sku": "MVOOVE03",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1484",
    "name": "OVERVAL PLAT GOMEO 2.5\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20PLAT%20GOMEO%202.5%22",
    "variants": [
      {
        "sku": "OVPL 2.5 GM",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1485",
    "name": "OVERVAL PLAT GOMEO 2\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20PLAT%20GOMEO%202%22",
    "variants": [
      {
        "sku": "OVPL 2 GM",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "1486",
    "name": "OVERVAL PLAT GOMEO 3\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20PLAT%20GOMEO%203%22",
    "variants": [
      {
        "sku": "OVPL 3 GM",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1487",
    "name": "OVERVAL PLAT GOMEO 4\"",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20PLAT%20GOMEO%204%22",
    "variants": [
      {
        "sku": "OVPL 4 GM",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1488",
    "name": "OVERVAL S/S  2 1/2'' TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20S%2FS%20%202%201%2F2''%20TOP",
    "variants": [
      {
        "sku": "MTOOVE02",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "1489",
    "name": "OVERVAL S/S 2'' TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20S%2FS%202''%20TOP",
    "variants": [
      {
        "sku": "MTOOVE01",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1490",
    "name": "OVERVAL S/S 3'' TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=OVERVAL%20S%2FS%203''%20TOP",
    "variants": [
      {
        "sku": "MTOOVE03",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1491",
    "name": "PACUL JAGO + GG",
    "category": "Alat tukang",
    "brand": "JAGO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PACUL%20JAGO%20%2B%20GG",
    "variants": [
      {
        "sku": "MPCLJGGG",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1492",
    "name": "PACUL JAGO TANPA GAGANG",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PACUL%20JAGO%20TANPA%20GAGANG",
    "variants": [
      {
        "sku": "PACTPGG",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1493",
    "name": "PAKU BETON CTJ 1 1/2\"",
    "category": "Alat tukang",
    "brand": "CTJ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20CTJ%201%201%2F2%22",
    "variants": [
      {
        "sku": "MCTPAK01-PAKET",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1494",
    "name": "PAKU BETON FRT 2\" (20 PCS)",
    "category": "Alat tukang",
    "brand": "FRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20FRT%202%22%20(20%20PCS",
    "variants": [
      {
        "sku": "MNOPAK01-PAKET",
        "label": "BKS",
        "price": 9000,
        "unit": "BKS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "1495",
    "name": "PAKU BETON GRT 2 1/2\" (10 PCS)",
    "category": "Alat tukang",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20GRT%202%201%2F2%22%20(10",
    "variants": [
      {
        "sku": "MGRPAK01-PAKET",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1496",
    "name": "PAKU BETON HITAM 100 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%20100%20HIOS",
    "variants": [
      {
        "sku": "PBH 100",
        "label": "PCS",
        "price": 20500,
        "unit": "PCS"
      }
    ],
    "basePrice": 20500,
    "priceLabel": "Rp20.500"
  },
  {
    "id": "1497",
    "name": "PAKU BETON HITAM 125 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%20125%20HIOS",
    "variants": [
      {
        "sku": "PBH 125",
        "label": "PCS",
        "price": 16397.3,
        "unit": "PCS"
      }
    ],
    "basePrice": 16397.3,
    "priceLabel": "Rp16.397,3"
  },
  {
    "id": "1498",
    "name": "PAKU BETON HITAM 20 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2020%20HIOSH",
    "variants": [
      {
        "sku": "PBH 20",
        "label": "PCS",
        "price": 16031.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 16031.25,
    "priceLabel": "Rp16.031,25"
  },
  {
    "id": "1499",
    "name": "PAKU BETON HITAM 25 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2025%20HIOSH",
    "variants": [
      {
        "sku": "PBH 25",
        "label": "PCS",
        "price": 16031.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 16031.25,
    "priceLabel": "Rp16.031,25"
  },
  {
    "id": "1500",
    "name": "PAKU BETON HITAM 30 (250 GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2030%20(250%20",
    "variants": [
      {
        "sku": "PBH 30 250GR",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1501",
    "name": "PAKU BETON HITAM 40 (250 GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2040%20(250%20",
    "variants": [
      {
        "sku": "PBH 40 250GR",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1502",
    "name": "PAKU BETON HITAM 50 (250 GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2050%20(250%20",
    "variants": [
      {
        "sku": "PBH 50 250GR",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1503",
    "name": "PAKU BETON HITAM 50 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2050%20HIOSH",
    "variants": [
      {
        "sku": "PBH 50",
        "label": "PCS",
        "price": 22550,
        "unit": "PCS"
      }
    ],
    "basePrice": 22550,
    "priceLabel": "Rp22.550"
  },
  {
    "id": "1504",
    "name": "PAKU BETON HITAM 60 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2060%20HIOSH",
    "variants": [
      {
        "sku": "PBH 63",
        "label": "PCS",
        "price": 20500,
        "unit": "PCS"
      }
    ],
    "basePrice": 20500,
    "priceLabel": "Rp20.500"
  },
  {
    "id": "1505",
    "name": "PAKU BETON HITAM 70 (250 GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2070%20(250%20",
    "variants": [
      {
        "sku": "PBH 70 250GR",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1506",
    "name": "PAKU BETON HITAM 70 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HITAM%2070%20HIOSH",
    "variants": [
      {
        "sku": "PBH 70",
        "label": "PCS",
        "price": 20500,
        "unit": "PCS"
      }
    ],
    "basePrice": 20500,
    "priceLabel": "Rp20.500"
  },
  {
    "id": "1507",
    "name": "PAKU BETON HTM 30 HIOSHI (20 PCS)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%2030%20HIOSHI%20",
    "variants": [
      {
        "sku": "PBH 30",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1508",
    "name": "PAKU BETON HTM 40 HIOSHI (20 PCS)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%2040%20HIOSHI%20",
    "variants": [
      {
        "sku": "PBH 40",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "1509",
    "name": "PAKU BETON HTM GDO 100MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%20100MM%20",
    "variants": [
      {
        "sku": "MGDPAK18",
        "label": "BKS",
        "price": 30000,
        "unit": "BKS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1510",
    "name": "PAKU BETON HTM GDO 20MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2020MM%20(",
    "variants": [
      {
        "sku": "MGDPAK10",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1511",
    "name": "PAKU BETON HTM GDO 25MM",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2025MM",
    "variants": [
      {
        "sku": "MGDPAK05",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1512",
    "name": "PAKU BETON HTM GDO 25MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2025MM%20(",
    "variants": [
      {
        "sku": "MGDPAK11",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1513",
    "name": "PAKU BETON HTM GDO 30MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2030MM%20(",
    "variants": [
      {
        "sku": "MGDPAK12",
        "label": "BKS",
        "price": 7000,
        "unit": "BKS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1514",
    "name": "PAKU BETON HTM GDO 40MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2040MM%20(",
    "variants": [
      {
        "sku": "MGDPAK13",
        "label": "BKS",
        "price": 10000,
        "unit": "BKS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1515",
    "name": "PAKU BETON HTM GDO 50MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2050MM%20(",
    "variants": [
      {
        "sku": "MGDPAK14",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1516",
    "name": "PAKU BETON HTM GDO 60MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2060MM%20(",
    "variants": [
      {
        "sku": "MGDPAK15",
        "label": "BKS",
        "price": 15000,
        "unit": "BKS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1517",
    "name": "PAKU BETON HTM GDO 70MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2070MM%20(",
    "variants": [
      {
        "sku": "MGDPAK16",
        "label": "BKS",
        "price": 20000,
        "unit": "BKS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1518",
    "name": "PAKU BETON HTM GDO 80MM (10 PCS)",
    "category": "Alat tukang",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20HTM%20GDO%2080MM%20(",
    "variants": [
      {
        "sku": "MGDPAK17",
        "label": "BKS",
        "price": 25000,
        "unit": "BKS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1519",
    "name": "PAKU BETON KUNING 1.1/2 HIOSHI (250GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%201.1%2F2%20H",
    "variants": [
      {
        "sku": "PB KNG 1.1/2 HS",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1520",
    "name": "PAKU BETON KUNING 1.1/2 TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%201.1%2F2%20T",
    "variants": [
      {
        "sku": "PB KNG1.1/2",
        "label": "PCS",
        "price": 13871,
        "unit": "PCS"
      }
    ],
    "basePrice": 13871,
    "priceLabel": "Rp13.871"
  },
  {
    "id": "1521",
    "name": "PAKU BETON KUNING 1.1/4 HIOSHI (250GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%201.1%2F4%20H",
    "variants": [
      {
        "sku": "PB KNG 1.1/4 HS",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1522",
    "name": "PAKU BETON KUNING 2 HIOSHI (250GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%202%20HIOSH",
    "variants": [
      {
        "sku": "PB KNG 2 HS",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1523",
    "name": "PAKU BETON KUNING 2 TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%202%20TORA",
    "variants": [
      {
        "sku": "PB KNG2",
        "label": "PCS",
        "price": 19206,
        "unit": "PCS"
      }
    ],
    "basePrice": 19206,
    "priceLabel": "Rp19.206"
  },
  {
    "id": "1524",
    "name": "PAKU BETON KUNING 3 HIOSHI (250GR)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%203%20HIOSH",
    "variants": [
      {
        "sku": "PB KNG 3 HS",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1525",
    "name": "PAKU BETON KUNING 3 TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%203%20TORA",
    "variants": [
      {
        "sku": "PB KNG3",
        "label": "PCS",
        "price": 25608,
        "unit": "PCS"
      }
    ],
    "basePrice": 25608,
    "priceLabel": "Rp25.608"
  },
  {
    "id": "1526",
    "name": "PAKU BETON KUNING EIFFEL 2\" (10 PCS)",
    "category": "Alat tukang",
    "brand": "EIFFEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20KUNING%20EIFFEL%20",
    "variants": [
      {
        "sku": "MEIPAK03",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1527",
    "name": "PAKU BETON PUTIH HD 1.1/2\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%201.1%2F2",
    "variants": [
      {
        "sku": "PBHD1.1/2",
        "label": "PCS",
        "price": 22550,
        "unit": "PCS"
      }
    ],
    "basePrice": 22550,
    "priceLabel": "Rp22.550"
  },
  {
    "id": "1528",
    "name": "PAKU BETON PUTIH HD 1.1/4\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%201.1%2F4",
    "variants": [
      {
        "sku": "PBHD1.1/4",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1529",
    "name": "PAKU BETON PUTIH HD 1\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%201%22",
    "variants": [
      {
        "sku": "PBHD1",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1530",
    "name": "PAKU BETON PUTIH HD 2.1/2\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%202.1%2F2",
    "variants": [
      {
        "sku": "PBHD2.1/2",
        "label": "PCS",
        "price": 18050,
        "unit": "PCS"
      }
    ],
    "basePrice": 18050,
    "priceLabel": "Rp18.050"
  },
  {
    "id": "1531",
    "name": "PAKU BETON PUTIH HD 2\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%202%22",
    "variants": [
      {
        "sku": "PBHD2",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1532",
    "name": "PAKU BETON PUTIH HD 3\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%203%22",
    "variants": [
      {
        "sku": "PBHD3",
        "label": "PCS",
        "price": 9089.6,
        "unit": "PCS"
      }
    ],
    "basePrice": 9089.6,
    "priceLabel": "Rp9.089,6"
  },
  {
    "id": "1533",
    "name": "PAKU BETON PUTIH HD 4\"",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20HD%204%22",
    "variants": [
      {
        "sku": "PBHD4",
        "label": "GR",
        "price": 22550,
        "unit": "GR"
      }
    ],
    "basePrice": 22550,
    "priceLabel": "Rp22.550"
  },
  {
    "id": "1534",
    "name": "PAKU BETON PUTIH UNO 1 1/2\" (20 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%201%201%2F",
    "variants": [
      {
        "sku": "MUNPAK10",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1535",
    "name": "PAKU BETON PUTIH UNO 1 1/4\" (20 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%201%201%2F",
    "variants": [
      {
        "sku": "MUNPAK09",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1536",
    "name": "PAKU BETON PUTIH UNO 1\" (20 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%201%22%20(",
    "variants": [
      {
        "sku": "MUNPAK08",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1537",
    "name": "PAKU BETON PUTIH UNO 2 1/2\" (10 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%202%201%2F",
    "variants": [
      {
        "sku": "MUNPAK14",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1538",
    "name": "PAKU BETON PUTIH UNO 2\" (20 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%202%22%20(",
    "variants": [
      {
        "sku": "MUNPAK11",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1539",
    "name": "PAKU BETON PUTIH UNO 3\" (10 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%203%22%20(",
    "variants": [
      {
        "sku": "MUNPAK12",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1540",
    "name": "PAKU BETON PUTIH UNO 4\" (10 PCS)",
    "category": "Alat tukang",
    "brand": "UNO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BETON%20PUTIH%20UNO%204%22%20(",
    "variants": [
      {
        "sku": "MUNPAK13",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1541",
    "name": "PAKU BIASA 2\" (PER 250 GRAM)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BIASA%202%22%20(PER%20250%20GR",
    "variants": [
      {
        "sku": "PAKBIA2",
        "label": "GR",
        "price": 6000,
        "unit": "GR"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1542",
    "name": "PAKU BIASA 3” (250 GRAM)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20BIASA%203%E2%80%9D%20(250%20GRAM)",
    "variants": [
      {
        "sku": "PAKBIA3",
        "label": "GR",
        "price": 6000,
        "unit": "GR"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1543",
    "name": "PAKU KALSIBOARD 1'",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20KALSIBOARD%201'",
    "variants": [
      {
        "sku": "PK KALSI VPR",
        "label": "BOX",
        "price": 25000,
        "unit": "BOX"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1544",
    "name": "PAKU KALSIBOARD MATRIX",
    "category": "Umum",
    "brand": "MATRIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20KALSIBOARD%20MATRIX",
    "variants": [
      {
        "sku": "PK KALSI MTR",
        "label": "PCS",
        "price": 16750,
        "unit": "PCS"
      }
    ],
    "basePrice": 16750,
    "priceLabel": "Rp16.750"
  },
  {
    "id": "1545",
    "name": "PAKU PINES FREDER (50 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20PINES%20FREDER%20(50%20PCS",
    "variants": [
      {
        "sku": "MPKPNSFR-PAKET",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1546",
    "name": "PAKU PINES FREDER 1000 PCS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20PINES%20FREDER%201000%20PC",
    "variants": [
      {
        "sku": "MPKPNSFR",
        "label": "PCS",
        "price": 42,
        "unit": "PCS"
      }
    ],
    "basePrice": 42,
    "priceLabel": "Rp42"
  },
  {
    "id": "1547",
    "name": "PAKU RIVET 540 (20 PCS)",
    "category": "Alat tukang",
    "brand": "FIT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20RIVET%20540%20(20%20PCS)",
    "variants": [
      {
        "sku": "MFIPAK02",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1548",
    "name": "PAKU RIVET ECER",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20RIVET%20ECER",
    "variants": [
      {
        "sku": "PAKRIVE",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1549",
    "name": "PAKU RIVET SIP 435",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20RIVET%20SIP%20435",
    "variants": [
      {
        "sku": "PK RV SIP 435",
        "label": "435",
        "price": 52500,
        "unit": "PCS"
      },
      {
        "sku": "PK RV SIP 440",
        "label": "440",
        "price": 60500,
        "unit": "PCS"
      },
      {
        "sku": "PK RV SIP 450",
        "label": "450",
        "price": 61000,
        "unit": "PCS"
      },
      {
        "sku": "PK RV SIP 540",
        "label": "540",
        "price": 87000,
        "unit": "PCS"
      },
      {
        "sku": "PK RV SIP 550",
        "label": "550",
        "price": 78000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52500,
    "priceLabel": "Rp52.500 - Rp87.000"
  },
  {
    "id": "1550",
    "name": "PAKU SENG ERDOS 2\"",
    "category": "Umum",
    "brand": "ERDOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20SENG%20ERDOS%202%22",
    "variants": [
      {
        "sku": "PK SG ER2",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "1551",
    "name": "PAKU SENG GRT 2\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20SENG%20GRT%202%22",
    "variants": [
      {
        "sku": "PK SG GRT2",
        "label": "PCS",
        "price": 106500,
        "unit": "PCS"
      }
    ],
    "basePrice": 106500,
    "priceLabel": "Rp106.500"
  },
  {
    "id": "1552",
    "name": "PAKU SENG ULIR 3\" ERDOS",
    "category": "Umum",
    "brand": "ERDOS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAKU%20SENG%20ULIR%203%22%20ERDOS",
    "variants": [
      {
        "sku": "PK SG ULIR 3",
        "label": "PCS",
        "price": 147500,
        "unit": "PCS"
      }
    ],
    "basePrice": 147500,
    "priceLabel": "Rp147.500"
  },
  {
    "id": "1553",
    "name": "PALU BODEM GG FIBER 2 LB HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20BODEM%20GG%20FIBER%202%20LB%20",
    "variants": [
      {
        "sku": "PL BDM 2LB",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "1554",
    "name": "PALU KAMBING 12OZ POLOS GG FIBER",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%2012OZ%20POLOS%20G",
    "variants": [
      {
        "sku": "PL KMB 12P",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1555",
    "name": "PALU KAMBING 12OZ RINTIK GG FIBER",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%2012OZ%20RINTIK%20",
    "variants": [
      {
        "sku": "PL KMB 12R",
        "label": "PCS",
        "price": 37000,
        "unit": "PCS"
      }
    ],
    "basePrice": 37000,
    "priceLabel": "Rp37.000"
  },
  {
    "id": "1556",
    "name": "PALU KAMBING 16OZ POLOS GG FIBER",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%2016OZ%20POLOS%20G",
    "variants": [
      {
        "sku": "PL KMB 16P",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1557",
    "name": "PALU KAMBING 16OZ RINTIK GG FIBER",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%2016OZ%20RINTIK%20",
    "variants": [
      {
        "sku": "PL KMB 16R",
        "label": "PCS",
        "price": 42000,
        "unit": "PCS"
      }
    ],
    "basePrice": 42000,
    "priceLabel": "Rp42.000"
  },
  {
    "id": "1558",
    "name": "PALU KAMBING 8OZ POLOS GG FIBER",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%208OZ%20POLOS%20GG",
    "variants": [
      {
        "sku": "PL KMB 8P",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1559",
    "name": "PALU KAMBING 8OZ RINTIK GG FIBER",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%208OZ%20RINTIK%20G",
    "variants": [
      {
        "sku": "PL KMB 8R",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1560",
    "name": "PALU KAMBING GG KAYU 8OZ POLOS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%20GG%20KAYU%208OZ%20",
    "variants": [
      {
        "sku": "PLKK8POL",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1561",
    "name": "PALU KAMBING GG KAYU HIOSHI 8OZ",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%20GG%20KAYU%20HIOS",
    "variants": [
      {
        "sku": "MPLKMBHIO8",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1562",
    "name": "PALU KAMBING PIPA 12OZ R YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%20PIPA%2012OZ%20R%20",
    "variants": [
      {
        "sku": "PL PP 12R",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "1563",
    "name": "PALU KAMBING PIPA 8OZ R YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KAMBING%20PIPA%208OZ%20R%20Y",
    "variants": [
      {
        "sku": "PL PP 8R",
        "label": "PCS",
        "price": 22500,
        "unit": "PCS"
      }
    ],
    "basePrice": 22500,
    "priceLabel": "Rp22.500"
  },
  {
    "id": "1564",
    "name": "PALU KARET 12 OZ",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KARET%2012%20OZ",
    "variants": [
      {
        "sku": "MPALKR12",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1565",
    "name": "PALU KARET 16 OZ",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KARET%2016%20OZ",
    "variants": [
      {
        "sku": "MPALKR16",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1566",
    "name": "PALU KARET 8 OZ",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KARET%208%20OZ",
    "variants": [
      {
        "sku": "MPALKR08",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1567",
    "name": "PALU KARET JUMBO 24 OZ",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KARET%20JUMBO%2024%20OZ",
    "variants": [
      {
        "sku": "MPALKR24",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1568",
    "name": "PALU KONDE 1 LB GG KAYU",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KONDE%201%20LB%20GG%20KAYU",
    "variants": [
      {
        "sku": "PALKO1KY",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1569",
    "name": "PALU KONDE 1,5 LB GG KAYU",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20KONDE%201%2C5%20LB%20GG%20KAYU",
    "variants": [
      {
        "sku": "PALKON15",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "1570",
    "name": "PALU MINI 8OZ YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20MINI%208OZ%20YUSTAR",
    "variants": [
      {
        "sku": "PL MINI 8OZ",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1571",
    "name": "PALU TUKANG 100 GG FIBER",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20TUKANG%20100%20GG%20FIBER",
    "variants": [
      {
        "sku": "PALT100F",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "1572",
    "name": "PALU TUKANG 200 GG FIBER",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20TUKANG%20200%20GG%20FIBER",
    "variants": [
      {
        "sku": "PALTF200",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1573",
    "name": "PALU TUKANG 300 GG FIBER",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PALU%20TUKANG%20300%20GG%20FIBER",
    "variants": [
      {
        "sku": "PALT300F",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1574",
    "name": "PAYUNG JUMBO WARNA KAPAL",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAYUNG%20JUMBO%20WARNA%20KAPAL",
    "variants": [
      {
        "sku": "PAYJMBWK",
        "label": "PCS",
        "price": 63000,
        "unit": "PCS"
      }
    ],
    "basePrice": 63000,
    "priceLabel": "Rp63.000"
  },
  {
    "id": "1575",
    "name": "PAYUNG LIPAT MOTIF AGOYA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAYUNG%20LIPAT%20MOTIF%20AGOYA",
    "variants": [
      {
        "sku": "PAYLIMAG",
        "label": "PCS",
        "price": 57000,
        "unit": "PCS"
      }
    ],
    "basePrice": 57000,
    "priceLabel": "Rp57.000"
  },
  {
    "id": "1576",
    "name": "PAYUNG LIPAT POLOS SAKURA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAYUNG%20LIPAT%20POLOS%20SAKURA",
    "variants": [
      {
        "sku": "PAYLIPSA",
        "label": "PCS",
        "price": 36000,
        "unit": "PCS"
      }
    ],
    "basePrice": 36000,
    "priceLabel": "Rp36.000"
  },
  {
    "id": "1577",
    "name": "PAYUNG MOBIL AGOYA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAYUNG%20MOBIL%20AGOYA",
    "variants": [
      {
        "sku": "PAYMBLAG",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "1578",
    "name": "PAYUNG WARNA KAPAL",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PAYUNG%20WARNA%20KAPAL",
    "variants": [
      {
        "sku": "PAYWRKA",
        "label": "PCS",
        "price": 46000,
        "unit": "PCS"
      }
    ],
    "basePrice": 46000,
    "priceLabel": "Rp46.000"
  },
  {
    "id": "1579",
    "name": "PEL DUA MACAN",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PEL%20DUA%20MACAN",
    "variants": [
      {
        "sku": "PELDUAMC",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "1580",
    "name": "PEL NAGOYA",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PEL%20NAGOYA",
    "variants": [
      {
        "sku": "PELNGY",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1581",
    "name": "PELAMPUNG BOLA 1/2 KUNINGAN BONUCCI",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20BOLA%201%2F2%20KUNING",
    "variants": [
      {
        "sku": "PELB12KB",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1582",
    "name": "PELAMPUNG BOLA 1/2 PVC",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20BOLA%201%2F2%20PVC",
    "variants": [
      {
        "sku": "MNOPEL02",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1583",
    "name": "PELAMPUNG BOLA 3/4 KUNINGAN BONUCCI",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20BOLA%203%2F4%20KUNING",
    "variants": [
      {
        "sku": "PELB34KB",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1584",
    "name": "PELAMPUNG BOLA 3/4 PVC",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20BOLA%203%2F4%20PVC",
    "variants": [
      {
        "sku": "MNOPEL03",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1585",
    "name": "PELAMPUNG BOLA KUNINGAN 1/2 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20BOLA%20KUNINGAN%201",
    "variants": [
      {
        "sku": "PLBOLAKNG1/2",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "1586",
    "name": "PELAMPUNG BOLA KUNINGAN 3/4 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20BOLA%20KUNINGAN%203",
    "variants": [
      {
        "sku": "PLBOLAKNG3/4",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "1587",
    "name": "PELAMPUNG L SC-07 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20L%20SC-07%20ISCO",
    "variants": [
      {
        "sku": "PLMP L SC07",
        "label": "PCS",
        "price": 37500,
        "unit": "PCS"
      }
    ],
    "basePrice": 37500,
    "priceLabel": "Rp37.500"
  },
  {
    "id": "1588",
    "name": "PELAMPUNG OTOMATIS RADAR ST-70 AB",
    "category": "Umum",
    "brand": "RADAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20OTOMATIS%20RADAR%20",
    "variants": [
      {
        "sku": "MRAPEL01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1589",
    "name": "PELAMPUNG RADAR ST70",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20RADAR%20ST70",
    "variants": [
      {
        "sku": "PL RADAR ST70",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1590",
    "name": "PELAMPUNG T SC-07 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20T%20SC-07%20ISCO",
    "variants": [
      {
        "sku": "PLMP T SC07",
        "label": "PCS",
        "price": 37500,
        "unit": "PCS"
      }
    ],
    "basePrice": 37500,
    "priceLabel": "Rp37.500"
  },
  {
    "id": "1591",
    "name": "PELAMPUNG WATERLEVEL ST70 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PELAMPUNG%20WATERLEVEL%20ST70",
    "variants": [
      {
        "sku": "PLMPG SC70",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1592",
    "name": "PEMANTIK API",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PEMANTIK%20API",
    "variants": [
      {
        "sku": "MPMTKAPI",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "1593",
    "name": "PENGADUK SEMEN CAT BESAR",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGADUK%20SEMEN%20CAT%20BESAR",
    "variants": [
      {
        "sku": "MMXRBES",
        "label": "PCS",
        "price": 33000,
        "unit": "PCS"
      }
    ],
    "basePrice": 33000,
    "priceLabel": "Rp33.000"
  },
  {
    "id": "1594",
    "name": "PENGADUK SEMEN CAT KECIL",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGADUK%20SEMEN%20CAT%20KECIL",
    "variants": [
      {
        "sku": "MMXRKEC",
        "label": "PCS",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000"
  },
  {
    "id": "1595",
    "name": "PENGKI + SAPU MINI HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGKI%20%2B%20SAPU%20MINI%20HYPER",
    "variants": [
      {
        "sku": "MNOPEN06",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1596",
    "name": "PENGKI + SAPU MINI PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGKI%20%2B%20SAPU%20MINI%20PREM",
    "variants": [
      {
        "sku": "MNOPEN05",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1597",
    "name": "PENGKI REYNER",
    "category": "Umum",
    "brand": "REYNER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGKI%20REYNER",
    "variants": [
      {
        "sku": "PENGKI RYR",
        "label": "PCS",
        "price": 8500,
        "unit": "PCS"
      }
    ],
    "basePrice": 8500,
    "priceLabel": "Rp8.500"
  },
  {
    "id": "1598",
    "name": "PENGKI WARNA HELMUT",
    "category": "Umum",
    "brand": "HELMUT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGKI%20WARNA%20HELMUT",
    "variants": [
      {
        "sku": "PENGKI HLM",
        "label": "PCS",
        "price": 81000,
        "unit": "PCS"
      }
    ],
    "basePrice": 81000,
    "priceLabel": "Rp81.000"
  },
  {
    "id": "1599",
    "name": "PENGKI ZELIG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGKI%20ZELIG%20HYPER",
    "variants": [
      {
        "sku": "MNOPEN04",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "1600",
    "name": "PENGKI ZELIG PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PENGKI%20ZELIG%20PREM",
    "variants": [
      {
        "sku": "MNOPEN03",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "1601",
    "name": "PILOX DITON 8020 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208020%20300CC",
    "variants": [
      {
        "sku": "DIT80203",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1602",
    "name": "PILOX DITON 808 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20808%20300CC",
    "variants": [
      {
        "sku": "DIT8083C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1603",
    "name": "PILOX DITON 8139 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208139%20300CC",
    "variants": [
      {
        "sku": "DIT81393",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1604",
    "name": "PILOX DITON 814 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20814%20300CC",
    "variants": [
      {
        "sku": "DIT8143C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1605",
    "name": "PILOX DITON 8173 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208173%20300CC",
    "variants": [
      {
        "sku": "DIT81733",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1606",
    "name": "PILOX DITON 823 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20823%20300CC",
    "variants": [
      {
        "sku": "DIT8233C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1607",
    "name": "PILOX DITON 835 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20835%20300CC",
    "variants": [
      {
        "sku": "DIT8353C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1608",
    "name": "PILOX DITON 836 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20836%20300CC",
    "variants": [
      {
        "sku": "DIT8363C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1609",
    "name": "PILOX DITON 837 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20837%20300CC",
    "variants": [
      {
        "sku": "DIT8373C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1610",
    "name": "PILOX DITON 839 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20839%20300CC",
    "variants": [
      {
        "sku": "DIT8393C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1611",
    "name": "PILOX DITON 840 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20840%20300CC",
    "variants": [
      {
        "sku": "DIT8403C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1612",
    "name": "PILOX DITON 841 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20841%20300CC",
    "variants": [
      {
        "sku": "DIT8413C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1613",
    "name": "PILOX DITON 8431 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208431%20300CC",
    "variants": [
      {
        "sku": "DIT84313",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1614",
    "name": "PILOX DITON 8502 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208502%20300CC",
    "variants": [
      {
        "sku": "DIT85023",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1615",
    "name": "PILOX DITON 8540 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208540%20300CC",
    "variants": [
      {
        "sku": "DIT85403",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1616",
    "name": "PILOX DITON 8580 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%208580%20300CC",
    "variants": [
      {
        "sku": "DIT85803",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1617",
    "name": "PILOX DITON 884 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20884%20300CC",
    "variants": [
      {
        "sku": "DIT8843C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1618",
    "name": "PILOX DITON 886 300CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20886%20300CC",
    "variants": [
      {
        "sku": "DIT8863C",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1619",
    "name": "PILOX DITON 9120 400CC",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%209120%20400CC",
    "variants": [
      {
        "sku": "DIT91204",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1620",
    "name": "PILOX DITON HIGH TEMP BLACK",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PILOX%20DITON%20HIGH%20TEMP%20BLA",
    "variants": [
      {
        "sku": "DITHTBL",
        "label": "PCS",
        "price": 60500,
        "unit": "PCS"
      }
    ],
    "basePrice": 60500,
    "priceLabel": "Rp60.500"
  },
  {
    "id": "1621",
    "name": "PIPA PRALON POWER AW 3/4",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PIPA%20PRALON%20POWER%20AW%203%2F4",
    "variants": [
      {
        "sku": "PRPWAW34",
        "label": "MTR",
        "price": 12000,
        "unit": "MTR"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1622",
    "name": "PIRING PLASTIK ZELIG",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PIRING%20PLASTIK%20ZELIG",
    "variants": [
      {
        "sku": "PIRPLZEL",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1623",
    "name": "PISAU PLANER TCT 10MM MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PISAU%20PLANER%20TCT%2010MM%20MOD",
    "variants": [
      {
        "sku": "MMOPIS02",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "1624",
    "name": "PISAU PLANER TCT 7MM MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PISAU%20PLANER%20TCT%207MM%20MODE",
    "variants": [
      {
        "sku": "MMOPIS01",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1625",
    "name": "PLITUR BOYO S600 0,5 L",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PLITUR%20BOYO%20S600%200%2C5%20L",
    "variants": [
      {
        "sku": "BOYOS600",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1626",
    "name": "PLITUR BOYO S601 0,5 L",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PLITUR%20BOYO%20S601%200%2C5%20L",
    "variants": [
      {
        "sku": "BOYOS601",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1627",
    "name": "PLITUR BOYO S603 0,5 L",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PLITUR%20BOYO%20S603%200%2C5%20L",
    "variants": [
      {
        "sku": "BOYOS603",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1628",
    "name": "PLITUR BOYO S607 0,5 L",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PLITUR%20BOYO%20S607%200%2C5%20L",
    "variants": [
      {
        "sku": "BOYOS607",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1629",
    "name": "PLITUR BOYO VERNIS S 0,5 L",
    "category": "Cat",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PLITUR%20BOYO%20VERNIS%20S%200%2C5%20",
    "variants": [
      {
        "sku": "BOYOVER",
        "label": "PCS",
        "price": 48000,
        "unit": "PCS"
      }
    ],
    "basePrice": 48000,
    "priceLabel": "Rp48.000"
  },
  {
    "id": "1630",
    "name": "POMPA CELUP SAN EI 135 NON AUTO",
    "category": "Umum",
    "brand": "SAN EI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20CELUP%20SAN%20EI%20135%20NO",
    "variants": [
      {
        "sku": "PMP CLP SAN EI",
        "label": "PCS",
        "price": 490000,
        "unit": "PCS"
      }
    ],
    "basePrice": 490000,
    "priceLabel": "Rp490.000"
  },
  {
    "id": "1631",
    "name": "POMPA GALON ELEKTRIK MIYAKO",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20GALON%20ELEKTRIK%20MIYA",
    "variants": [
      {
        "sku": "PMPGLEMI",
        "label": "PCS",
        "price": 71000,
        "unit": "PCS"
      }
    ],
    "basePrice": 71000,
    "priceLabel": "Rp71.000"
  },
  {
    "id": "1632",
    "name": "POMPA GEMUK 500CC TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20GEMUK%20500CC%20TEKIRO",
    "variants": [
      {
        "sku": "MTEPOM01",
        "label": "PCS",
        "price": 220000,
        "unit": "PCS"
      }
    ],
    "basePrice": 220000,
    "priceLabel": "Rp220.000"
  },
  {
    "id": "1633",
    "name": "POMPA INJAK CAB",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20INJAK%20CAB",
    "variants": [
      {
        "sku": "MPINISCO",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1634",
    "name": "POMPA OTOMATIS SC-125 TEXAS",
    "category": "Umum",
    "brand": "TEXAS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20OTOMATIS%20SC-125%20TEX",
    "variants": [
      {
        "sku": "PMP OT SC-125",
        "label": "PCS",
        "price": 29000,
        "unit": "PCS"
      }
    ],
    "basePrice": 29000,
    "priceLabel": "Rp29.000"
  },
  {
    "id": "1635",
    "name": "POMPA OTOMATIS SC-130 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20OTOMATIS%20SC-130%20ISC",
    "variants": [
      {
        "sku": "PMP OT SC130 IS",
        "label": "PCS",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 27000,
    "priceLabel": "Rp27.000"
  },
  {
    "id": "1636",
    "name": "POMPA SEPEDA + MTR CHROME VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SEPEDA%20%2B%20MTR%20CHROME",
    "variants": [
      {
        "sku": "P SPD VPR",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1637",
    "name": "POMPA SEPEDA MINI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SEPEDA%20MINI",
    "variants": [
      {
        "sku": "P SPD MINI",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1638",
    "name": "POMPA SEPEDA PEG PVC TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SEPEDA%20PEG%20PVC%20TOKI",
    "variants": [
      {
        "sku": "P SPD TOKIO",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1639",
    "name": "POMPA SHIMIZU PS116 BIT",
    "category": "Umum",
    "brand": "SHIMIZU",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SHIMIZU%20PS116%20BIT",
    "variants": [
      {
        "sku": "PMP SMZ PS116",
        "label": "PCS",
        "price": 502503,
        "unit": "PCS"
      }
    ],
    "basePrice": 502503,
    "priceLabel": "Rp502.503"
  },
  {
    "id": "1640",
    "name": "POMPA SIBEL INOTO 2 IN (0,25 HP)",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SIBEL%20INOTO%202%20IN%20(0",
    "variants": [
      {
        "sku": "PMPI2025",
        "label": "PCS",
        "price": 1828000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1828000,
    "priceLabel": "Rp1.828.000"
  },
  {
    "id": "1641",
    "name": "POMPA SIBEL INOTO 3 IN (0,25 HP)",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SIBEL%20INOTO%203%20IN%20(0",
    "variants": [
      {
        "sku": "PMPI3025",
        "label": "PCS",
        "price": 1585000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1585000,
    "priceLabel": "Rp1.585.000"
  },
  {
    "id": "1642",
    "name": "POMPA SIBEL INOTO 3 IN (0,5 HP)",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SIBEL%20INOTO%203%20IN%20(0",
    "variants": [
      {
        "sku": "PMPI305",
        "label": "PCS",
        "price": 1815000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1815000,
    "priceLabel": "Rp1.815.000"
  },
  {
    "id": "1643",
    "name": "POMPA SIBEL INOTO 4 IN (0,5 HP)",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SIBEL%20INOTO%204%20IN%20(0",
    "variants": [
      {
        "sku": "PMPI405",
        "label": "PCS",
        "price": 2165000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2165000,
    "priceLabel": "Rp2.165.000"
  },
  {
    "id": "1644",
    "name": "POMPA SIBEL SCREW INOTO EGD 0,5 HP",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20SIBEL%20SCREW%20INOTO%20E",
    "variants": [
      {
        "sku": "INEGD05",
        "label": "PCS",
        "price": 1425000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1425000,
    "priceLabel": "Rp1.425.000"
  },
  {
    "id": "1645",
    "name": "POMPA TABUNG SEPEDA PVC HITAM",
    "category": "Alat tukang",
    "brand": "VIPER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20TABUNG%20SEPEDA%20PVC%20H",
    "variants": [
      {
        "sku": "MVIPOM01",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1646",
    "name": "POMPA TABUNG SEPEDA STAINLESS",
    "category": "Alat tukang",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POMPA%20TABUNG%20SEPEDA%20STAIN",
    "variants": [
      {
        "sku": "MGRPOM01",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "1647",
    "name": "POT HELMUT HYPER 45",
    "category": "Umum",
    "brand": "HELMUT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POT%20HELMUT%20HYPER%2045",
    "variants": [
      {
        "sku": "POT HLMT",
        "label": "PCS",
        "price": 525200.14,
        "unit": "PCS"
      }
    ],
    "basePrice": 525200.14,
    "priceLabel": "Rp525.200,14"
  },
  {
    "id": "1648",
    "name": "POTONG RUMPUT CORDLESS 12V",
    "category": "Power tools",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=POTONG%20RUMPUT%20CORDLESS%2012",
    "variants": [
      {
        "sku": "PTRMPC12",
        "label": "PCS",
        "price": 350000,
        "unit": "PCS"
      }
    ],
    "basePrice": 350000,
    "priceLabel": "Rp350.000"
  },
  {
    "id": "1649",
    "name": "PRESS CONTROL / AUTOMATIC PUMP",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PRESS%20CONTROL%20%2F%20AUTOMATIC",
    "variants": [
      {
        "sku": "PR CTRL PUMP",
        "label": "PCS",
        "price": 288750,
        "unit": "PCS"
      }
    ],
    "basePrice": 288750,
    "priceLabel": "Rp288.750"
  },
  {
    "id": "1650",
    "name": "PRESSURE CONTROL SC88 ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=PRESSURE%20CONTROL%20SC88%20ISC",
    "variants": [
      {
        "sku": "PRES CTRL",
        "label": "PCS",
        "price": 220000,
        "unit": "PCS"
      }
    ],
    "basePrice": 220000,
    "priceLabel": "Rp220.000"
  },
  {
    "id": "1651",
    "name": "RAK CUCI PIRING",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAK%20CUCI%20PIRING",
    "variants": [
      {
        "sku": "MNORAK03",
        "label": "PCS",
        "price": 67000,
        "unit": "PCS"
      }
    ],
    "basePrice": 67000,
    "priceLabel": "Rp67.000"
  },
  {
    "id": "1652",
    "name": "RAK SEPATU PREM 3 SUSUN",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAK%20SEPATU%20PREM%203%20SUSUN",
    "variants": [
      {
        "sku": "MNORAK04",
        "label": "PCS",
        "price": 53000,
        "unit": "PCS"
      }
    ],
    "basePrice": 53000,
    "priceLabel": "Rp53.000"
  },
  {
    "id": "1653",
    "name": "RAK SEPATU PREM 4 SUSUN",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAK%20SEPATU%20PREM%204%20SUSUN",
    "variants": [
      {
        "sku": "MNORAK05",
        "label": "PCS",
        "price": 67000,
        "unit": "PCS"
      }
    ],
    "basePrice": 67000,
    "priceLabel": "Rp67.000"
  },
  {
    "id": "1654",
    "name": "RAK SIKAT GIGI BESAR/LARGE",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAK%20SIKAT%20GIGI%20BESAR%2FLARG",
    "variants": [
      {
        "sku": "MNORAK01",
        "label": "PCS",
        "price": 29500,
        "unit": "PCS"
      }
    ],
    "basePrice": 29500,
    "priceLabel": "Rp29.500"
  },
  {
    "id": "1655",
    "name": "RAK SIKAT GIGI MEDIUM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAK%20SIKAT%20GIGI%20MEDIUM",
    "variants": [
      {
        "sku": "MNORAK02",
        "label": "PCS",
        "price": 26500,
        "unit": "PCS"
      }
    ],
    "basePrice": 26500,
    "priceLabel": "Rp26.500"
  },
  {
    "id": "1656",
    "name": "RAKET NYAMUK LUBY L-3838",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAKET%20NYAMUK%20LUBY%20L-3838",
    "variants": [
      {
        "sku": "RLUB3838",
        "label": "PCS",
        "price": 82000,
        "unit": "PCS"
      }
    ],
    "basePrice": 82000,
    "priceLabel": "Rp82.000"
  },
  {
    "id": "1657",
    "name": "RAKET NYAMUK LUBY L-3881",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAKET%20NYAMUK%20LUBY%20L-3881",
    "variants": [
      {
        "sku": "RLUB3881",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1658",
    "name": "RAKET NYAMUK LUBY L-3882",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAKET%20NYAMUK%20LUBY%20L-3882",
    "variants": [
      {
        "sku": "RLUB3882",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1659",
    "name": "RAKET NYAMUK LUBY L-3883",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RAKET%20NYAMUK%20LUBY%20L-3883",
    "variants": [
      {
        "sku": "RLUB3883",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1660",
    "name": "RANTAI ANJING 25 CM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RANTAI%20ANJING%2025%20CM",
    "variants": [
      {
        "sku": "MNORAN03",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1661",
    "name": "RANTAI ANJING 30 CM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RANTAI%20ANJING%2030%20CM",
    "variants": [
      {
        "sku": "MNORAN04",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "1662",
    "name": "RANTAI ANJING 35 CM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RANTAI%20ANJING%2035%20CM",
    "variants": [
      {
        "sku": "MNORAN05",
        "label": "PCS",
        "price": 21000,
        "unit": "PCS"
      }
    ],
    "basePrice": 21000,
    "priceLabel": "Rp21.000"
  },
  {
    "id": "1663",
    "name": "RANTAI ANJING 40 CM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RANTAI%20ANJING%2040%20CM",
    "variants": [
      {
        "sku": "MNORAN06",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1664",
    "name": "RANTAI ANJING KALEP 2.5 MM",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RANTAI%20ANJING%20KALEP%202.5%20M",
    "variants": [
      {
        "sku": "RTAJ KL2.5",
        "label": "2.5 MM",
        "price": 18000,
        "unit": "PCS"
      },
      {
        "sku": "RTAJ KL3",
        "label": "3 MM",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000 - Rp22.000"
  },
  {
    "id": "1665",
    "name": "RASKAM KAZOET (GARIS)",
    "category": "Umum",
    "brand": "KAZOET",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RASKAM%20KAZOET%20(GARIS)",
    "variants": [
      {
        "sku": "RASKAM KZ",
        "label": "PCS",
        "price": 52500,
        "unit": "PCS"
      }
    ],
    "basePrice": 52500,
    "priceLabel": "Rp52.500"
  },
  {
    "id": "1666",
    "name": "RASKAM PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RASKAM%20PUTIH",
    "variants": [
      {
        "sku": "MNORAS04",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1667",
    "name": "RASKAM REYNER PTH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RASKAM%20REYNER%20PTH",
    "variants": [
      {
        "sku": "RASKAM RYN",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1668",
    "name": "RASKAM TEBAL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RASKAM%20TEBAL",
    "variants": [
      {
        "sku": "MNORAS03",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1669",
    "name": "REFILL ISI TUBLES BAN HASSTON 0230-105 (30 PCS)",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=REFILL%20ISI%20TUBLES%20BAN%20HAS",
    "variants": [
      {
        "sku": "MHAREF01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1670",
    "name": "REGULATOR HP METER WINN GAS",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=REGULATOR%20HP%20METER%20WINN%20G",
    "variants": [
      {
        "sku": "REGHPMWG",
        "label": "PCS",
        "price": 98000,
        "unit": "PCS"
      }
    ],
    "basePrice": 98000,
    "priceLabel": "Rp98.000"
  },
  {
    "id": "1671",
    "name": "REGULATOR KOMPOR + SELANG KOMPLIT",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=REGULATOR%20KOMPOR%20%2B%20SELANG",
    "variants": [
      {
        "sku": "MREGSLGK",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1672",
    "name": "REL LACI HUBEN FE37 400 (PSG)",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=REL%20LACI%20HUBEN%20FE37%20400%20(",
    "variants": [
      {
        "sku": "HFE37400",
        "label": "SET",
        "price": 33000,
        "unit": "SET"
      }
    ],
    "basePrice": 33000,
    "priceLabel": "Rp33.000"
  },
  {
    "id": "1673",
    "name": "REXCO 18 CONTACT CLEANER 500ML",
    "category": "Alat teknik",
    "brand": "REXCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=REXCO%2018%20CONTACT%20CLEANER%20",
    "variants": [
      {
        "sku": "MRECON01",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1674",
    "name": "REXCO 50 MULTI PURPOSE LUBRICANT 350ML",
    "category": "Alat teknik",
    "brand": "REXCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=REXCO%2050%20MULTI%20PURPOSE%20LU",
    "variants": [
      {
        "sku": "MREMUL01",
        "label": "350ML",
        "price": 52000,
        "unit": "PCS"
      },
      {
        "sku": "MREMUL02",
        "label": "500ML",
        "price": 58000,
        "unit": "PCS"
      }
    ],
    "basePrice": 52000,
    "priceLabel": "Rp52.000 - Rp58.000"
  },
  {
    "id": "1675",
    "name": "RING BAUT 10 (25 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%2010%20(25%20PCS)",
    "variants": [
      {
        "sku": "RBAU10P",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1676",
    "name": "RING BAUT 3 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%203%20(50%20PCS)",
    "variants": [
      {
        "sku": "RIBAM3",
        "label": "BKS",
        "price": 15000,
        "unit": "BKS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1677",
    "name": "RING BAUT 6",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%206",
    "variants": [
      {
        "sku": "RINBAU6",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1678",
    "name": "RING BAUT 6 X 18",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%206%20X%2018",
    "variants": [
      {
        "sku": "RIBAU618",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1679",
    "name": "RING BAUT 6 X 18 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%206%20X%2018%20(50%20PCS)",
    "variants": [
      {
        "sku": "RIB618P",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1680",
    "name": "RING BAUT M10",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%20M10",
    "variants": [
      {
        "sku": "MRIBAU10",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1681",
    "name": "RING BAUT M11",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%20M11",
    "variants": [
      {
        "sku": "RIBAM11",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1682",
    "name": "RING BAUT M12",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%20M12",
    "variants": [
      {
        "sku": "RIBAUM12",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1683",
    "name": "RING BAUT M3",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%20M3",
    "variants": [
      {
        "sku": "RINBAU3",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1684",
    "name": "RING BAUT M8",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%20M8",
    "variants": [
      {
        "sku": "MRINBAU8",
        "label": "PCS",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1685",
    "name": "RING BAUT M8 (25 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RING%20BAUT%20M8%20(25%20PCS)",
    "variants": [
      {
        "sku": "RBAU8P",
        "label": "BKS",
        "price": 2500,
        "unit": "BKS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "1686",
    "name": "RODA / BAN MATI GUNDUL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20%2F%20BAN%20MATI%20GUNDUL",
    "variants": [
      {
        "sku": "RDMT GUNDUL",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "1687",
    "name": "RODA / BAN MATI IGM",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20%2F%20BAN%20MATI%20IGM",
    "variants": [
      {
        "sku": "RDMT IGM",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "1688",
    "name": "RODA / BAN MATI LUMBA2",
    "category": "Umum",
    "brand": "LUMBA LUMBA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20%2F%20BAN%20MATI%20LUMBA2",
    "variants": [
      {
        "sku": "RDMT LUMBA",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "1689",
    "name": "RODA / BAN MATI SANSHAN",
    "category": "Umum",
    "brand": "SANSHAN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20%2F%20BAN%20MATI%20SANSHAN",
    "variants": [
      {
        "sku": "RDMT SAN",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "1690",
    "name": "RODA / BAN MATI TEXAS WARNA",
    "category": "Umum",
    "brand": "TEXAS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20%2F%20BAN%20MATI%20TEXAS%20WAR",
    "variants": [
      {
        "sku": "RDMT TEX",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "1691",
    "name": "RODA 2\" REM MERAH (DB) SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%202%22%20REM%20MERAH%20(DB)%20SS",
    "variants": [
      {
        "sku": "RD REM MR 2",
        "label": "PCS",
        "price": 10331.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 10331.25,
    "priceLabel": "Rp10.331,25"
  },
  {
    "id": "1692",
    "name": "RODA BULAT RRT",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20BULAT%20RRT",
    "variants": [
      {
        "sku": "RD BLT RRT",
        "label": "PCS",
        "price": 15500,
        "unit": "PCS"
      }
    ],
    "basePrice": 15500,
    "priceLabel": "Rp15.500"
  },
  {
    "id": "1693",
    "name": "RODA GEPENG PUTIH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20GEPENG%20PUTIH",
    "variants": [
      {
        "sku": "RDGP PTH",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1694",
    "name": "RODA GEPENG PVC MATI TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20GEPENG%20PVC%20MATI%20TOKI",
    "variants": [
      {
        "sku": "RDGP PVC MATI",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1695",
    "name": "RODA GEPENG/KARET MERAH",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20GEPENG%2FKARET%20MERAH",
    "variants": [
      {
        "sku": "RDGP MRH",
        "label": "PCS",
        "price": 19000,
        "unit": "PCS"
      }
    ],
    "basePrice": 19000,
    "priceLabel": "Rp19.000"
  },
  {
    "id": "1696",
    "name": "RODA HIDUP ABU 3\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20ABU%203%22%20SSS",
    "variants": [
      {
        "sku": "RD HDP ABU 3",
        "label": "PCS",
        "price": 19250,
        "unit": "PCS"
      }
    ],
    "basePrice": 19250,
    "priceLabel": "Rp19.250"
  },
  {
    "id": "1697",
    "name": "RODA HIDUP KARET ABU 2\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20ABU%202%22%20S",
    "variants": [
      {
        "sku": "RD HDP KRT ABU 2",
        "label": "PCS",
        "price": 10500,
        "unit": "PCS"
      }
    ],
    "basePrice": 10500,
    "priceLabel": "Rp10.500"
  },
  {
    "id": "1698",
    "name": "RODA HIDUP KARET ABU 2\" W/REM SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20ABU%202%22%20W",
    "variants": [
      {
        "sku": "RD HDP KRT ABU 2 REM",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "1699",
    "name": "RODA HIDUP KARET ABU 3\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20ABU%203%22%20S",
    "variants": [
      {
        "sku": "RD HDP KRT ABU 3",
        "label": "PCS",
        "price": 19250,
        "unit": "PCS"
      }
    ],
    "basePrice": 19250,
    "priceLabel": "Rp19.250"
  },
  {
    "id": "1700",
    "name": "RODA HIDUP KARET HITAM 3\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20HITAM%203%22",
    "variants": [
      {
        "sku": "RD HDP KRT HTM 3",
        "label": "PCS",
        "price": 9500,
        "unit": "PCS"
      }
    ],
    "basePrice": 9500,
    "priceLabel": "Rp9.500"
  },
  {
    "id": "1701",
    "name": "RODA HIDUP KARET HITAM 4\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20HITAM%204%22",
    "variants": [
      {
        "sku": "RD HDP KRT HTM 4",
        "label": "PCS",
        "price": 16250,
        "unit": "PCS"
      }
    ],
    "basePrice": 16250,
    "priceLabel": "Rp16.250"
  },
  {
    "id": "1702",
    "name": "RODA HIDUP KARET HITAM 5\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20HITAM%205%22",
    "variants": [
      {
        "sku": "RD HDP KRT HTM 5",
        "label": "PCS",
        "price": 21875,
        "unit": "PCS"
      }
    ],
    "basePrice": 21875,
    "priceLabel": "Rp21.875"
  },
  {
    "id": "1703",
    "name": "RODA HIDUP KARET HITAM 8\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20KARET%20HITAM%208%22",
    "variants": [
      {
        "sku": "RD HDP KRT HTM 8",
        "label": "PCS",
        "price": 57500,
        "unit": "PCS"
      }
    ],
    "basePrice": 57500,
    "priceLabel": "Rp57.500"
  },
  {
    "id": "1704",
    "name": "RODA HIDUP MERAH 2\" PPU DB SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20MERAH%202%22%20PPU%20D",
    "variants": [
      {
        "sku": "RD HDP RED 2 DB",
        "label": "PCS",
        "price": 10331.24,
        "unit": "PCS"
      }
    ],
    "basePrice": 10331.24,
    "priceLabel": "Rp10.331,24"
  },
  {
    "id": "1705",
    "name": "RODA HIDUP NYLON MERAH + REM 2\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20NYLON%20MERAH%20%2B%20",
    "variants": [
      {
        "sku": "RD HDP NY MRH REM 2",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1706",
    "name": "RODA HIDUP NYLON PUTIH 2' SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20NYLON%20PUTIH%202'",
    "variants": [
      {
        "sku": "RD HDP NY PTH 2",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "1707",
    "name": "RODA HIDUP WITH REM 3\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20WITH%20REM%203%22%20SS",
    "variants": [
      {
        "sku": "RD HDP REM 3",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1708",
    "name": "RODA HIDUP WITH REM 5\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20WITH%20REM%205%22%20SS",
    "variants": [
      {
        "sku": "RD HDP REM 5",
        "label": "PCS",
        "price": 28125,
        "unit": "PCS"
      }
    ],
    "basePrice": 28125,
    "priceLabel": "Rp28.125"
  },
  {
    "id": "1709",
    "name": "RODA HIDUP WITH REM 6\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HIDUP%20WITH%20REM%206%22%20SS",
    "variants": [
      {
        "sku": "RD HDP REM 6",
        "label": "PCS",
        "price": 61250,
        "unit": "PCS"
      }
    ],
    "basePrice": 61250,
    "priceLabel": "Rp61.250"
  },
  {
    "id": "1710",
    "name": "RODA HUBEN SD 12",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HUBEN%20SD%2012",
    "variants": [
      {
        "sku": "MHUROD01",
        "label": "12",
        "price": 28000,
        "unit": "PCS"
      },
      {
        "sku": "MHUROD02",
        "label": "338",
        "price": 13000,
        "unit": "PCS"
      },
      {
        "sku": "MHUROD04",
        "label": "380",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000 - Rp28.000"
  },
  {
    "id": "1711",
    "name": "RODA HUBEN SD 31-41",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20HUBEN%20SD%2031-41",
    "variants": [
      {
        "sku": "MHUROD03",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1712",
    "name": "RODA KARET HIDUP TOKIO 3'",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20HIDUP%20TOKIO%203'",
    "variants": [
      {
        "sku": "RD HDP TK3",
        "label": "PCS",
        "price": 11970,
        "unit": "PCS"
      }
    ],
    "basePrice": 11970,
    "priceLabel": "Rp11.970"
  },
  {
    "id": "1713",
    "name": "RODA KARET HIDUP TOKIO 4'",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20HIDUP%20TOKIO%204'",
    "variants": [
      {
        "sku": "RD HDP TK4",
        "label": "PCS",
        "price": 20520,
        "unit": "PCS"
      }
    ],
    "basePrice": 20520,
    "priceLabel": "Rp20.520"
  },
  {
    "id": "1714",
    "name": "RODA KARET MATI TOKIO 3'",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20MATI%20TOKIO%203'",
    "variants": [
      {
        "sku": "RD MT TK3",
        "label": "PCS",
        "price": 10687.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 10687.5,
    "priceLabel": "Rp10.687,5"
  },
  {
    "id": "1715",
    "name": "RODA KARET MATI TOKIO 4'",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20MATI%20TOKIO%204'",
    "variants": [
      {
        "sku": "RD MT TK4",
        "label": "PCS",
        "price": 17955,
        "unit": "PCS"
      }
    ],
    "basePrice": 17955,
    "priceLabel": "Rp17.955"
  },
  {
    "id": "1716",
    "name": "RODA KARET REM (MERAH) TOKIO 3'",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20REM%20(MERAH)%20TO",
    "variants": [
      {
        "sku": "RD REM 3",
        "label": "PCS",
        "price": 16200,
        "unit": "PCS"
      }
    ],
    "basePrice": 16200,
    "priceLabel": "Rp16.200"
  },
  {
    "id": "1717",
    "name": "RODA KARET REM (MERAH) TOKIO 4'",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20REM%20(MERAH)%20TO",
    "variants": [
      {
        "sku": "RD REM 4",
        "label": "PCS",
        "price": 18382.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 18382.5,
    "priceLabel": "Rp18.382,5"
  },
  {
    "id": "1718",
    "name": "RODA KARET REM TOKIO 6'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20KARET%20REM%20TOKIO%206'",
    "variants": [
      {
        "sku": "RD REM 6",
        "label": "PCS",
        "price": 68000,
        "unit": "PCS"
      }
    ],
    "basePrice": 68000,
    "priceLabel": "Rp68.000"
  },
  {
    "id": "1719",
    "name": "RODA LORI BIRU TOKIO 8 AS 25",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20LORI%20BIRU%20TOKIO%208%20AS",
    "variants": [
      {
        "sku": "RD LORI",
        "label": "PCS",
        "price": 35625,
        "unit": "PCS"
      }
    ],
    "basePrice": 35625,
    "priceLabel": "Rp35.625"
  },
  {
    "id": "1720",
    "name": "RODA MATI HITAM 4\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20MATI%20HITAM%204%22%20SSS",
    "variants": [
      {
        "sku": "RD MT HTM 4",
        "label": "PCS",
        "price": 15250,
        "unit": "PCS"
      }
    ],
    "basePrice": 15250,
    "priceLabel": "Rp15.250"
  },
  {
    "id": "1721",
    "name": "RODA MATI HITAM 5'' SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20MATI%20HITAM%205''%20SSS",
    "variants": [
      {
        "sku": "RD MT HTM 5",
        "label": "PCS",
        "price": 18750,
        "unit": "PCS"
      }
    ],
    "basePrice": 18750,
    "priceLabel": "Rp18.750"
  },
  {
    "id": "1722",
    "name": "RODA MATI HITAM 6\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20MATI%20HITAM%206%22%20SSS",
    "variants": [
      {
        "sku": "RD MT HTM 6",
        "label": "PCS",
        "price": 41875,
        "unit": "PCS"
      }
    ],
    "basePrice": 41875,
    "priceLabel": "Rp41.875"
  },
  {
    "id": "1723",
    "name": "RODA MATI MERAH 2\" PPU DB SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20MATI%20MERAH%202%22%20PPU%20DB",
    "variants": [
      {
        "sku": "RD MT RED 2 DB",
        "label": "PCS",
        "price": 8431.24,
        "unit": "PCS"
      }
    ],
    "basePrice": 8431.24,
    "priceLabel": "Rp8.431,24"
  },
  {
    "id": "1724",
    "name": "RODA NYLON PTH HIDUP TOKIO 50MM /2\"",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20NYLON%20PTH%20HIDUP%20TOKI",
    "variants": [
      {
        "sku": "RDGP HDP PTH TK",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "1725",
    "name": "RODA ONLY 3'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20ONLY%203'",
    "variants": [
      {
        "sku": "RD 3",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1726",
    "name": "RODA ONLY 4'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20ONLY%204'",
    "variants": [
      {
        "sku": "RD 4",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1727",
    "name": "RODA ONLY 6'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20ONLY%206'",
    "variants": [
      {
        "sku": "RD 6",
        "label": "PCS",
        "price": 23500,
        "unit": "PCS"
      }
    ],
    "basePrice": 23500,
    "priceLabel": "Rp23.500"
  },
  {
    "id": "1728",
    "name": "RODA ONLY 8'",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20ONLY%208'",
    "variants": [
      {
        "sku": "RD 8",
        "label": "PCS",
        "price": 33000,
        "unit": "PCS"
      }
    ],
    "basePrice": 33000,
    "priceLabel": "Rp33.000"
  },
  {
    "id": "1729",
    "name": "RODA ONLY BIRU HV DUTY 6\" GLX",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20ONLY%20BIRU%20HV%20DUTY%206%22",
    "variants": [
      {
        "sku": "RDBR HVDT 6",
        "label": "PCS",
        "price": 31000,
        "unit": "PCS"
      }
    ],
    "basePrice": 31000,
    "priceLabel": "Rp31.000"
  },
  {
    "id": "1730",
    "name": "RODA ONLY BIRU HV DUTY 8\" GLX",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20ONLY%20BIRU%20HV%20DUTY%208%22",
    "variants": [
      {
        "sku": "RDBR HVDT 8",
        "label": "PCS",
        "price": 41000,
        "unit": "PCS"
      }
    ],
    "basePrice": 41000,
    "priceLabel": "Rp41.000"
  },
  {
    "id": "1731",
    "name": "RODA PP HIDUP NYLON 5\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20PP%20HIDUP%20NYLON%205%22%20SS",
    "variants": [
      {
        "sku": "RD PP HDP NY 5",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "1732",
    "name": "RODA PP MATI NYLON 5\" SSS",
    "category": "Umum",
    "brand": "SSS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=RODA%20PP%20MATI%20NYLON%205%22%20SSS",
    "variants": [
      {
        "sku": "RD PP MT NY 5",
        "label": "PCS",
        "price": 20500,
        "unit": "PCS"
      }
    ],
    "basePrice": 20500,
    "priceLabel": "Rp20.500"
  },
  {
    "id": "1733",
    "name": "ROL METER 3M FIT",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%203M%20FIT",
    "variants": [
      {
        "sku": "ROL3MFIT",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "1734",
    "name": "ROL METER 3M KOFUKU",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%203M%20KOFUKU",
    "variants": [
      {
        "sku": "ROL3MKOF",
        "label": "PCS",
        "price": 14000,
        "unit": "PCS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "1735",
    "name": "ROL METER 5M FIT",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%205M%20FIT",
    "variants": [
      {
        "sku": "ROL5MFIT",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "1736",
    "name": "ROL METER 5M KOFUKU",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%205M%20KOFUKU",
    "variants": [
      {
        "sku": "ROL5MKOF",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1737",
    "name": "ROL METER 5M VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%205M%20VPR",
    "variants": [
      {
        "sku": "MVPROL05",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1738",
    "name": "ROL METER 7,5M FIT",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%207%2C5M%20FIT",
    "variants": [
      {
        "sku": "ROL7MFIT",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1739",
    "name": "ROL METER 7.5 MM VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%207.5%20MM%20VPR",
    "variants": [
      {
        "sku": "MVPROL04",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1740",
    "name": "ROL METER ESSEN 3M",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%20ESSEN%203M",
    "variants": [
      {
        "sku": "MESROL03",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1741",
    "name": "ROL METER ESSEN 5M",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%20ESSEN%205M",
    "variants": [
      {
        "sku": "MESROL04",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1742",
    "name": "ROL METER ESSEN 7,5M",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%20ESSEN%207%2C5M",
    "variants": [
      {
        "sku": "MESROL05",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1743",
    "name": "ROL METER RACHET 5M HIOSHI",
    "category": "Alat tukang",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROL%20METER%20RACHET%205M%20HIOSH",
    "variants": [
      {
        "sku": "MTR RCH 5 HS",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1744",
    "name": "ROLL 10 METER AUTOSTOP ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%2010%20METER%20AUTOSTOP%20IS",
    "variants": [
      {
        "sku": "MTR 10 ISCO",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1745",
    "name": "ROLL 3 METER HIOSHI ECO CLASSIC",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%203%20METER%20HIOSHI%20ECO%20C",
    "variants": [
      {
        "sku": "MTR HS 3 CLS",
        "label": "PCS",
        "price": 82000,
        "unit": "PCS"
      }
    ],
    "basePrice": 82000,
    "priceLabel": "Rp82.000"
  },
  {
    "id": "1746",
    "name": "ROLL 5 METER AUTOSTOP ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%205%20METER%20AUTOSTOP%20ISC",
    "variants": [
      {
        "sku": "MTR 5 ISCO",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1747",
    "name": "ROLL 5 METER HIOSHI ECO CLASSIC",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%205%20METER%20HIOSHI%20ECO%20C",
    "variants": [
      {
        "sku": "MTR HS 5 CLS",
        "label": "PCS",
        "price": 116000,
        "unit": "PCS"
      }
    ],
    "basePrice": 116000,
    "priceLabel": "Rp116.000"
  },
  {
    "id": "1748",
    "name": "ROLL 5 MTR HIOSHI ECO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%205%20MTR%20HIOSHI%20ECO",
    "variants": [
      {
        "sku": "MTRHS5 ECO",
        "label": "PCS",
        "price": 87875,
        "unit": "PCS"
      }
    ],
    "basePrice": 87875,
    "priceLabel": "Rp87.875"
  },
  {
    "id": "1749",
    "name": "ROLL 7,5 METER HIOSHI ECO CLASSIC",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%207%2C5%20METER%20HIOSHI%20ECO",
    "variants": [
      {
        "sku": "MTR HS 7.5 CLS",
        "label": "PCS",
        "price": 206250,
        "unit": "PCS"
      }
    ],
    "basePrice": 206250,
    "priceLabel": "Rp206.250"
  },
  {
    "id": "1750",
    "name": "ROLL METER 3 MTR  VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%203%20MTR%20%20VPR",
    "variants": [
      {
        "sku": "MTR VPR 3",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "1751",
    "name": "ROLL METER 5 MTR VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%205%20MTR%20VPR",
    "variants": [
      {
        "sku": "MTR VPR 5",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1752",
    "name": "ROLL METER BANG JO 3 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20BANG%20JO%203%20MTR%20",
    "variants": [
      {
        "sku": "MTR BJ 3 HS",
        "label": "PCS",
        "price": 55062,
        "unit": "PCS"
      }
    ],
    "basePrice": 55062,
    "priceLabel": "Rp55.062"
  },
  {
    "id": "1753",
    "name": "ROLL METER BANG JO 5 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20BANG%20JO%205%20MTR%20",
    "variants": [
      {
        "sku": "MTR BJ 5 HS",
        "label": "PCS",
        "price": 74727,
        "unit": "PCS"
      }
    ],
    "basePrice": 74727,
    "priceLabel": "Rp74.727"
  },
  {
    "id": "1754",
    "name": "ROLL METER BANG JO 7,5 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20BANG%20JO%207%2C5%20MT",
    "variants": [
      {
        "sku": "MTR BJ 7.5 HS",
        "label": "PCS",
        "price": 129789,
        "unit": "PCS"
      }
    ],
    "basePrice": 129789,
    "priceLabel": "Rp129.789"
  },
  {
    "id": "1755",
    "name": "ROLL METER ESSEN 3 MTR",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20ESSEN%203%20MTR",
    "variants": [
      {
        "sku": "MTRES3",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1756",
    "name": "ROLL METER ESSEN 5 MTR",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20ESSEN%205%20MTR",
    "variants": [
      {
        "sku": "MTRES5",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "1757",
    "name": "ROLL METER ESSEN 7,5",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20ESSEN%207%2C5",
    "variants": [
      {
        "sku": "MTRES7,5",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1758",
    "name": "ROLL METER EXTREME 3M (AUTOSTOP) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20EXTREME%203M%20(AU",
    "variants": [
      {
        "sku": "MTRES3 EXTR",
        "label": "PCS",
        "price": 152000,
        "unit": "PCS"
      }
    ],
    "basePrice": 152000,
    "priceLabel": "Rp152.000"
  },
  {
    "id": "1759",
    "name": "ROLL METER EXTREME 5M (AUTOSTOP) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20EXTREME%205M%20(AU",
    "variants": [
      {
        "sku": "MTRES5 EXTR",
        "label": "PCS",
        "price": 194750,
        "unit": "PCS"
      }
    ],
    "basePrice": 194750,
    "priceLabel": "Rp194.750"
  },
  {
    "id": "1760",
    "name": "ROLL METER MERAH PUTIH 3 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20MERAH%20PUTIH%203%20",
    "variants": [
      {
        "sku": "MTR MP 3 HS",
        "label": "PCS",
        "price": 73625,
        "unit": "PCS"
      }
    ],
    "basePrice": 73625,
    "priceLabel": "Rp73.625"
  },
  {
    "id": "1761",
    "name": "ROLL METER MERAH PUTIH 5 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20MERAH%20PUTIH%205%20",
    "variants": [
      {
        "sku": "MTR MP 5 HS",
        "label": "PCS",
        "price": 102125,
        "unit": "PCS"
      }
    ],
    "basePrice": 102125,
    "priceLabel": "Rp102.125"
  },
  {
    "id": "1762",
    "name": "ROLL METER MERAH PUTIH 7.5 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20MERAH%20PUTIH%207.",
    "variants": [
      {
        "sku": "MTR MP 7.5 HS",
        "label": "PCS",
        "price": 190000,
        "unit": "PCS"
      }
    ],
    "basePrice": 190000,
    "priceLabel": "Rp190.000"
  },
  {
    "id": "1763",
    "name": "ROLL METER TRANSPARAN AXELL 5 MTR",
    "category": "Umum",
    "brand": "AXELL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20TRANSPARAN%20AXE",
    "variants": [
      {
        "sku": "MTR TRSP 5",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "1764",
    "name": "ROLL METER UPGRADE 3 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20UPGRADE%203%20MTR%20",
    "variants": [
      {
        "sku": "MTR UG3 HS",
        "label": "PCS",
        "price": 85737.5,
        "unit": "PCS"
      }
    ],
    "basePrice": 85737.5,
    "priceLabel": "Rp85.737,5"
  },
  {
    "id": "1765",
    "name": "ROLL METER UPGRADE 5 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20UPGRADE%205%20MTR%20",
    "variants": [
      {
        "sku": "MTR UG5 HS",
        "label": "PCS",
        "price": 92268.75,
        "unit": "PCS"
      }
    ],
    "basePrice": 92268.75,
    "priceLabel": "Rp92.268,75"
  },
  {
    "id": "1766",
    "name": "ROLL METER UPGRADE 7,5 MTR HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METER%20UPGRADE%207%2C5%20MT",
    "variants": [
      {
        "sku": "MTR UG7.5 HS",
        "label": "PCS",
        "price": 198550,
        "unit": "PCS"
      }
    ],
    "basePrice": 198550,
    "priceLabel": "Rp198.550"
  },
  {
    "id": "1767",
    "name": "ROLL METERAN 3 STOP 7,5 MTR VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20METERAN%203%20STOP%207%2C5%20M",
    "variants": [
      {
        "sku": "MTR VPR 7.5",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1768",
    "name": "ROLL MTR FIBER 100 M (METERAN JALAN)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20MTR%20FIBER%20100%20M%20(MET",
    "variants": [
      {
        "sku": "MTR JLN 100M",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1769",
    "name": "ROLL MTR FIBER 50 M (METERAN JALAN)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROLL%20MTR%20FIBER%2050%20M%20(METE",
    "variants": [
      {
        "sku": "MTR JLN 50M",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1770",
    "name": "ROMPI PROYEK JARING HIJAU",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROMPI%20PROYEK%20JARING%20HIJAU",
    "variants": [
      {
        "sku": "RMP HJ",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1771",
    "name": "ROMPI PROYEK JARING ORANGE",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=ROMPI%20PROYEK%20JARING%20ORANG",
    "variants": [
      {
        "sku": "RMP ORG",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1772",
    "name": "SAKLAR BOR MODERN M-2100B",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20BOR%20MODERN%20M-2100B",
    "variants": [
      {
        "sku": "MMOSAK02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1773",
    "name": "SAKLAR BOR MODERN M-2100C",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20BOR%20MODERN%20M-2100C",
    "variants": [
      {
        "sku": "MMOSAK05",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1774",
    "name": "SAKLAR DOUBLE BROCO 16620 CREAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20DOUBLE%20BROCO%2016620",
    "variants": [
      {
        "sku": "MBRSAK04",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1775",
    "name": "SAKLAR DOUBLE BROCO 6622U CREAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20DOUBLE%20BROCO%206622U",
    "variants": [
      {
        "sku": "MBRSAK02",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1776",
    "name": "SAKLAR DOUBLE BROCO G16255 PUTIH",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20DOUBLE%20BROCO%20G1625",
    "variants": [
      {
        "sku": "MBRSAK06",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1777",
    "name": "SAKLAR DOUBLE OUTBOW PANASONIC",
    "category": "Listrik",
    "brand": "PANASONIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20DOUBLE%20OUTBOW%20PANA",
    "variants": [
      {
        "sku": "MSADOPAN",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1778",
    "name": "SAKLAR GERINDA/PROFIL MODERN",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20GERINDA%2FPROFIL%20MOD",
    "variants": [
      {
        "sku": "MMOSAK03",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1779",
    "name": "SAKLAR LEBAR TUNGGAL BROCO G16155 PUTIH",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20LEBAR%20TUNGGAL%20BROC",
    "variants": [
      {
        "sku": "MBRSAK05",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "1780",
    "name": "SAKLAR PASAH PLANER MODERN M-2900",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20PASAH%20PLANER%20MODER",
    "variants": [
      {
        "sku": "MMOSAK01",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1781",
    "name": "SAKLAR SINGLE BROCO 16210",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20SINGLE%20BROCO%2016210",
    "variants": [
      {
        "sku": "MBRSAK03",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1782",
    "name": "SAKLAR SINGLE BROCO 6621U CREAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20SINGLE%20BROCO%206621U",
    "variants": [
      {
        "sku": "MBRSAK01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1783",
    "name": "SAKLAR TRIMMER MODERN M-2700",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAKLAR%20TRIMMER%20MODERN%20M-2",
    "variants": [
      {
        "sku": "MMOSAK04",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "1784",
    "name": "SAMBUNGAN SELANG PVC",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAMBUNGAN%20SELANG%20PVC",
    "variants": [
      {
        "sku": "SAMSLPVC",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1785",
    "name": "SAPU CLEAN ART",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAPU%20CLEAN%20ART",
    "variants": [
      {
        "sku": "SAPUCLA",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1786",
    "name": "SAPU HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAPU%20HYPER",
    "variants": [
      {
        "sku": "MNOSAP01",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "1787",
    "name": "SAPU LIDI GG PANJANG 2 MACAN MERAH",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAPU%20LIDI%20GG%20PANJANG%202%20MA",
    "variants": [
      {
        "sku": "SAPLDPJG",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1788",
    "name": "SAPU LIDI TANPA GAGANG",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SAPU%20LIDI%20TANPA%20GAGANG",
    "variants": [
      {
        "sku": "SAPLTGG",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "1789",
    "name": "SARINGAN GOT ANTI KECOA",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20ANTI%20KECOA",
    "variants": [
      {
        "sku": "SARGOTAK",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1790",
    "name": "SARINGAN GOT IGM",
    "category": "Umum",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20IGM",
    "variants": [
      {
        "sku": "MSRGNIGM",
        "label": "PCS",
        "price": 130000,
        "unit": "PCS"
      }
    ],
    "basePrice": 130000,
    "priceLabel": "Rp130.000"
  },
  {
    "id": "1791",
    "name": "SARINGAN GOT MODEL TOTO BOLZANO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20MODEL%20TOTO%20B",
    "variants": [
      {
        "sku": "MNOSAR03",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1792",
    "name": "SARINGAN GOT PVC WARNA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20PVC%20WARNA",
    "variants": [
      {
        "sku": "MNOSAR04",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1793",
    "name": "SARINGAN GOT S/S LEON",
    "category": "Umum",
    "brand": "LEON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20S%2FS%20LEON",
    "variants": [
      {
        "sku": "SGT SS LEON",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1794",
    "name": "SARINGAN GOT STAINLESS GOMEO",
    "category": "Umum",
    "brand": "GOMEO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20STAINLESS%20GO",
    "variants": [
      {
        "sku": "MGOSAR01",
        "label": "PCS",
        "price": 42500,
        "unit": "PCS"
      }
    ],
    "basePrice": 42500,
    "priceLabel": "Rp42.500"
  },
  {
    "id": "1795",
    "name": "SARINGAN GOT STAINLESS IGM IS073 CHROME 20CM",
    "category": "Sanitary",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20STAINLESS%20IG",
    "variants": [
      {
        "sku": "MSRGCH20",
        "label": "PCS",
        "price": 220000,
        "unit": "PCS"
      }
    ],
    "basePrice": 220000,
    "priceLabel": "Rp220.000"
  },
  {
    "id": "1796",
    "name": "SARINGAN GOT STAINLESS IGM IS073 GREY 20CM",
    "category": "Sanitary",
    "brand": "IGM",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20STAINLESS%20IG",
    "variants": [
      {
        "sku": "MSRGSI20",
        "label": "PCS",
        "price": 220000,
        "unit": "PCS"
      }
    ],
    "basePrice": 220000,
    "priceLabel": "Rp220.000"
  },
  {
    "id": "1797",
    "name": "SARINGAN GOT TEBAL S/S ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARINGAN%20GOT%20TEBAL%20S%2FS%20IS",
    "variants": [
      {
        "sku": "SGT SS ISCO",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1798",
    "name": "SARUNG TANGAN BINTIK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20BINTIK%20HIOS",
    "variants": [
      {
        "sku": "SRG TGN BT HS",
        "label": "PCS",
        "price": 29716,
        "unit": "PCS"
      }
    ],
    "basePrice": 29716,
    "priceLabel": "Rp29.716"
  },
  {
    "id": "1799",
    "name": "SARUNG TANGAN BINTIK HITAM MTHR",
    "category": "Umum",
    "brand": "MATAHARI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20BINTIK%20HITA",
    "variants": [
      {
        "sku": "SRG TGN BT HTM",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "1800",
    "name": "SARUNG TANGAN BINTIK MATAHARI",
    "category": "Umum",
    "brand": "MATAHARI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20BINTIK%20MATA",
    "variants": [
      {
        "sku": "SRG TGN BT",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1801",
    "name": "SARUNG TANGAN KAIN ABU ABU",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20KAIN%20ABU%20AB",
    "variants": [
      {
        "sku": "MSRGKAAB",
        "label": "PSG",
        "price": 3000,
        "unit": "PSG"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1802",
    "name": "SARUNG TANGAN KARET SATAKA",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20KARET%20SATAK",
    "variants": [
      {
        "sku": "SRTGNKST",
        "label": "PSG",
        "price": 15000,
        "unit": "PSG"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1803",
    "name": "SARUNG TANGAN KARET WILMER",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20KARET%20WILME",
    "variants": [
      {
        "sku": "MSRGKRTW",
        "label": "PSG",
        "price": 10000,
        "unit": "PSG"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1804",
    "name": "SARUNG TANGAN LAS KULIT 14\" BIRU HASSTON 4050-006",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20LAS%20KULIT%201",
    "variants": [
      {
        "sku": "MHASAR01",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "1805",
    "name": "SARUNG TANGAN LATEX GUNTERO",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20LATEX%20GUNTE",
    "variants": [
      {
        "sku": "MSRGLGUN",
        "label": "PSG",
        "price": 13000,
        "unit": "PSG"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1806",
    "name": "SARUNG TANGAN LATEX MEIJER",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20LATEX%20MEIJE",
    "variants": [
      {
        "sku": "MSRGLMEI",
        "label": "PSG",
        "price": 13000,
        "unit": "PSG"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1807",
    "name": "SARUNG TANGAN POLOS HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SARUNG%20TANGAN%20POLOS%20HIOSH",
    "variants": [
      {
        "sku": "SRG TGN PL HS",
        "label": "PCS",
        "price": 22724,
        "unit": "PCS"
      }
    ],
    "basePrice": 22724,
    "priceLabel": "Rp22.724"
  },
  {
    "id": "1808",
    "name": "SCROLL SAW 16\" VARIABEL SPEED MODERN M-400A",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SCROLL%20SAW%2016%22%20VARIABEL%20S",
    "variants": [
      {
        "sku": "MMOSCR01",
        "label": "PCS",
        "price": 1450000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1450000,
    "priceLabel": "Rp1.450.000"
  },
  {
    "id": "1809",
    "name": "SEAL DAB 125 KOTAK",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEAL%20DAB%20125%20KOTAK",
    "variants": [
      {
        "sku": "SEAL DAB",
        "label": "PCS",
        "price": 3850,
        "unit": "PCS"
      }
    ],
    "basePrice": 3850,
    "priceLabel": "Rp3.850"
  },
  {
    "id": "1810",
    "name": "SEAL TAPE JUMBO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEAL%20TAPE%20JUMBO",
    "variants": [
      {
        "sku": "MNOSEA01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1811",
    "name": "SEAL TAPE KECIL (2 PCS)",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEAL%20TAPE%20KECIL%20(2%20PCS)",
    "variants": [
      {
        "sku": "MNOSEA02",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1812",
    "name": "SEAL TAPE ONDA KECIL 1/2 (2 PCS)",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEAL%20TAPE%20ONDA%20KECIL%201%2F2%20",
    "variants": [
      {
        "sku": "ACSPVST172OND",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1813",
    "name": "SEAL TAPE TANGGUNG (2 PCS)",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEAL%20TAPE%20TANGGUNG%20(2%20PCS",
    "variants": [
      {
        "sku": "MNOSEA03",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1814",
    "name": "SEALTAPE ECO 12X10 (1/2) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEALTAPE%20ECO%2012X10%20(1%2F2)%20",
    "variants": [
      {
        "sku": "S TAPE 1/2 HS",
        "label": "PCS",
        "price": 926.25,
        "unit": "PCS"
      }
    ],
    "basePrice": 926.25,
    "priceLabel": "Rp926,25"
  },
  {
    "id": "1815",
    "name": "SEKOP AMICO",
    "category": "Umum",
    "brand": "AMICO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEKOP%20AMICO",
    "variants": [
      {
        "sku": "SKP AMICO",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "1816",
    "name": "SEKOP ECO PAPAK HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEKOP%20ECO%20PAPAK%20HIOSHI",
    "variants": [
      {
        "sku": "SKP HS",
        "label": "PCS",
        "price": 506250,
        "unit": "PCS"
      }
    ],
    "basePrice": 506250,
    "priceLabel": "Rp506.250"
  },
  {
    "id": "1817",
    "name": "SEKOP REYNER",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEKOP%20REYNER",
    "variants": [
      {
        "sku": "SEKOPRYN",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1818",
    "name": "SELANG AIR TRILIUN DOFF 3/4",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20AIR%20TRILIUN%20DOFF%203",
    "variants": [
      {
        "sku": "SLTRDF34",
        "label": "3/4",
        "price": 7000,
        "unit": "MTR"
      },
      {
        "sku": "SLTR5/8DF",
        "label": "5/8",
        "price": 6000,
        "unit": "MTR"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000 - Rp7.000"
  },
  {
    "id": "1819",
    "name": "SELANG AIR TRILIUN DOFF 5/8 METERAN",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20AIR%20TRILIUN%20DOFF%205",
    "variants": [
      {
        "sku": "SLTR5/8DF-PAKET",
        "label": "MTR",
        "price": 6500,
        "unit": "MTR"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  },
  {
    "id": "1820",
    "name": "SELANG AIR TRILIUN SFLEX 3/4",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20AIR%20TRILIUN%20SFLEX%20",
    "variants": [
      {
        "sku": "SLTR34SF",
        "label": "3/4",
        "price": 15000,
        "unit": "MTR"
      },
      {
        "sku": "SLTRSF58",
        "label": "5/8",
        "price": 10000,
        "unit": "MTR"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000 - Rp15.000"
  },
  {
    "id": "1821",
    "name": "SELANG AIR TRILIUN SFLEX 5/8 METERAN",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20AIR%20TRILIUN%20SFLEX%20",
    "variants": [
      {
        "sku": "SLTRSF58-PAKET",
        "label": "MTR",
        "price": 10000,
        "unit": "MTR"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1822",
    "name": "SELANG BAK CUCI PIRING",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20BAK%20CUCI%20PIRING",
    "variants": [
      {
        "sku": "MNOSEL09",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1823",
    "name": "SELANG FLEXIBEL 30 CM ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20FLEXIBEL%2030%20CM%20ISC",
    "variants": [
      {
        "sku": "SL FLX 30",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1824",
    "name": "SELANG FLEXIBEL 40 CM ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20FLEXIBEL%2040%20CM%20ISC",
    "variants": [
      {
        "sku": "SL FLX 40",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1825",
    "name": "SELANG FLEXIBEL 50 CM ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20FLEXIBEL%2050%20CM%20ISC",
    "variants": [
      {
        "sku": "SL FLX 50",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1826",
    "name": "SELANG FLEXIBLE ANYAM 30",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20FLEXIBLE%20ANYAM%2030",
    "variants": [
      {
        "sku": "MNOSEL04",
        "label": "30",
        "price": 20000,
        "unit": "PCS"
      },
      {
        "sku": "MNOSEL05",
        "label": "40",
        "price": 23000,
        "unit": "PCS"
      },
      {
        "sku": "MNOSEL06",
        "label": "50",
        "price": 28000,
        "unit": "PCS"
      },
      {
        "sku": "MNOSEL07",
        "label": "60",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000 - Rp32.000"
  },
  {
    "id": "1827",
    "name": "SELANG GAS SOLID",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20GAS%20SOLID",
    "variants": [
      {
        "sku": "MNOSEL03",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1828",
    "name": "SELANG KOMPRESOR 100M LAZARO",
    "category": "Alat teknik",
    "brand": "LAZARO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20100M%20LAZ",
    "variants": [
      {
        "sku": "MLASEL02",
        "label": "PCS",
        "price": 750000,
        "unit": "PCS"
      }
    ],
    "basePrice": 750000,
    "priceLabel": "Rp750.000"
  },
  {
    "id": "1829",
    "name": "SELANG KOMPRESOR 10M LAZARO",
    "category": "Alat teknik",
    "brand": "LAZARO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%2010M%20LAZA",
    "variants": [
      {
        "sku": "MLASEL01",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "1830",
    "name": "SELANG KOMPRESOR 15M + CONNECTOR HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%2015M%20%2B%20CO",
    "variants": [
      {
        "sku": "MHASEL01",
        "label": "PCS",
        "price": 285000,
        "unit": "PCS"
      }
    ],
    "basePrice": 285000,
    "priceLabel": "Rp285.000"
  },
  {
    "id": "1831",
    "name": "SELANG KOMPRESOR 9M PU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%209M%20PU",
    "variants": [
      {
        "sku": "SLK9MPU",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1832",
    "name": "SELANG KOMPRESOR SPIRAL 12M PE",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%201",
    "variants": [
      {
        "sku": "SLKS12PE",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "1833",
    "name": "SELANG KOMPRESOR SPIRAL 12M PU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%201",
    "variants": [
      {
        "sku": "SLKS12PU",
        "label": "PCS",
        "price": 125000,
        "unit": "PCS"
      }
    ],
    "basePrice": 125000,
    "priceLabel": "Rp125.000"
  },
  {
    "id": "1834",
    "name": "SELANG KOMPRESOR SPIRAL 15M PE",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%201",
    "variants": [
      {
        "sku": "SLKS15PE",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1835",
    "name": "SELANG KOMPRESOR SPIRAL 15M PU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%201",
    "variants": [
      {
        "sku": "SLKS15PU",
        "label": "PCS",
        "price": 150000,
        "unit": "PCS"
      }
    ],
    "basePrice": 150000,
    "priceLabel": "Rp150.000"
  },
  {
    "id": "1836",
    "name": "SELANG KOMPRESOR SPIRAL 4M PE",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%204",
    "variants": [
      {
        "sku": "SLKMS4PE",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1837",
    "name": "SELANG KOMPRESOR SPIRAL 4M PU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%204",
    "variants": [
      {
        "sku": "SLKMS4PU",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1838",
    "name": "SELANG KOMPRESOR SPIRAL 6M PE",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%206",
    "variants": [
      {
        "sku": "SLKMS6PE",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1839",
    "name": "SELANG KOMPRESOR SPIRAL 6M PU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%206",
    "variants": [
      {
        "sku": "SLKMS6PU",
        "label": "PCS",
        "price": 77000,
        "unit": "PCS"
      }
    ],
    "basePrice": 77000,
    "priceLabel": "Rp77.000"
  },
  {
    "id": "1840",
    "name": "SELANG KOMPRESOR SPIRAL 9M PE",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%209",
    "variants": [
      {
        "sku": "SLKS9PE",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "1841",
    "name": "SELANG KOMPRESOR SPIRAL 9M PU",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20KOMPRESOR%20SPIRAL%209",
    "variants": [
      {
        "sku": "SLKMS9PU",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "1842",
    "name": "SELANG MESIN CUCI 1,5 MTR HPP",
    "category": "Umum",
    "brand": "HPP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20MESIN%20CUCI%201%2C5%20MTR",
    "variants": [
      {
        "sku": "SL MSN CC 1.5",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1843",
    "name": "SELANG MESIN CUCI 1,5M",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20MESIN%20CUCI%201%2C5M",
    "variants": [
      {
        "sku": "MNOSEL08",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1844",
    "name": "SELANG POMPA TABUNG TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20POMPA%20TABUNG%20TOKIO",
    "variants": [
      {
        "sku": "SL PP TBG",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "1845",
    "name": "SELANG REGULATOR KOMPOR",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20REGULATOR%20KOMPOR",
    "variants": [
      {
        "sku": "MSLGREGK",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1846",
    "name": "SELANG SHOWER",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20SHOWER",
    "variants": [
      {
        "sku": "MSLGSHWR",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1847",
    "name": "SELANG SHOWER FLEXIBLE",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20SHOWER%20FLEXIBLE",
    "variants": [
      {
        "sku": "SLG SHW FLX",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1848",
    "name": "SELANG TUKANG 1/4",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SELANG%20TUKANG%201%2F4",
    "variants": [
      {
        "sku": "MSLTK14",
        "label": "MTR",
        "price": 5000,
        "unit": "MTR"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1849",
    "name": "SEMPROTAN AIR PISTOL 506",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEMPROTAN%20AIR%20PISTOL%20506",
    "variants": [
      {
        "sku": "S AIR PVC03",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1850",
    "name": "SEMPROTAN BURUNG 1 LTR",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEMPROTAN%20BURUNG%201%20LTR",
    "variants": [
      {
        "sku": "MSMBUR02",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1851",
    "name": "SEMPROTAN BURUNG 1/2 LTR",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEMPROTAN%20BURUNG%201%2F2%20LTR",
    "variants": [
      {
        "sku": "MSMBUR01",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "1852",
    "name": "SEMPROTAN LURUS KUNINGAN",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEMPROTAN%20LURUS%20KUNINGAN",
    "variants": [
      {
        "sku": "MNOSEM01",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1853",
    "name": "SENDOK BESI MURAH",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENDOK%20BESI%20MURAH",
    "variants": [
      {
        "sku": "SENDOKSS",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "1854",
    "name": "SENTER LUBY 2673",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%202673",
    "variants": [
      {
        "sku": "MLUSEN09",
        "label": "2673",
        "price": 115000,
        "unit": "PCS"
      },
      {
        "sku": "MLUSEN01",
        "label": "2871",
        "price": 48000,
        "unit": "PCS"
      },
      {
        "sku": "MLUSEN07",
        "label": "8908",
        "price": 32000,
        "unit": "PCS"
      }
    ],
    "basePrice": 32000,
    "priceLabel": "Rp32.000 - Rp115.000"
  },
  {
    "id": "1855",
    "name": "SENTER LUBY 2675 B",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%202675%20B",
    "variants": [
      {
        "sku": "MLUSEN08",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "1856",
    "name": "SENTER LUBY 2879 PUTIH",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%202879%20PUTIH",
    "variants": [
      {
        "sku": "MLUSEN03",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "1857",
    "name": "SENTER LUBY 2880 KUNING",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%202880%20KUNING",
    "variants": [
      {
        "sku": "MLUSEN04",
        "label": "PCS",
        "price": 115000,
        "unit": "PCS"
      }
    ],
    "basePrice": 115000,
    "priceLabel": "Rp115.000"
  },
  {
    "id": "1858",
    "name": "SENTER LUBY 2883 PUTIH",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%202883%20PUTIH",
    "variants": [
      {
        "sku": "MLUSEN02",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1859",
    "name": "SENTER LUBY 2911 PUTIH",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%202911%20PUTIH",
    "variants": [
      {
        "sku": "MLUSEN05",
        "label": "PCS",
        "price": 105000,
        "unit": "PCS"
      }
    ],
    "basePrice": 105000,
    "priceLabel": "Rp105.000"
  },
  {
    "id": "1860",
    "name": "SENTER LUBY 770 C",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%20770%20C",
    "variants": [
      {
        "sku": "MLUSEN10",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "1861",
    "name": "SENTER LUBY 8916 A",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SENTER%20LUBY%208916%20A",
    "variants": [
      {
        "sku": "MLUSEN06",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "1862",
    "name": "SEPATU BOOT ANDO ALL SIZE",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SEPATU%20BOOT%20ANDO%20ALL%20SIZE",
    "variants": [
      {
        "sku": "BOOTANDO",
        "label": "PSG",
        "price": 120000,
        "unit": "PSG"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "1863",
    "name": "SERAT FIBER",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SERAT%20FIBER",
    "variants": [
      {
        "sku": "SERFIBER",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1864",
    "name": "SERBET KOTAK KOTAK",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SERBET%20KOTAK%20KOTAK",
    "variants": [
      {
        "sku": "SERBETKT",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1865",
    "name": "SERBET PF888 55 X 65",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SERBET%20PF888%2055%20X%2065",
    "variants": [
      {
        "sku": "SRPF5565",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "1866",
    "name": "SETRIKA MASPION EX-1010 BB",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SETRIKA%20MASPION%20EX-1010%20B",
    "variants": [
      {
        "sku": "MNOSET01",
        "label": "PCS",
        "price": 132000,
        "unit": "PCS"
      }
    ],
    "basePrice": 132000,
    "priceLabel": "Rp132.000"
  },
  {
    "id": "1867",
    "name": "SETRIKA MASPION HA-110",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SETRIKA%20MASPION%20HA-110",
    "variants": [
      {
        "sku": "MNOSET02",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "1868",
    "name": "SETRIKA MASPION HA-340",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SETRIKA%20MASPION%20HA-340",
    "variants": [
      {
        "sku": "MNOSET03",
        "label": "PCS",
        "price": 150000,
        "unit": "PCS"
      }
    ],
    "basePrice": 150000,
    "priceLabel": "Rp150.000"
  },
  {
    "id": "1869",
    "name": "SHOWER KOTAK",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SHOWER%20KOTAK",
    "variants": [
      {
        "sku": "MSHWKTK",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "1870",
    "name": "SHOWER KOTAK TEMBOK SKL",
    "category": "Umum",
    "brand": "SKL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SHOWER%20KOTAK%20TEMBOK%20SKL",
    "variants": [
      {
        "sku": "SHW KT",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "1871",
    "name": "SHOWER TIANG IGM IS-054",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SHOWER%20TIANG%20IGM%20IS-054",
    "variants": [
      {
        "sku": "IGMIS054",
        "label": "PCS",
        "price": 380000,
        "unit": "PCS"
      }
    ],
    "basePrice": 380000,
    "priceLabel": "Rp380.000"
  },
  {
    "id": "1872",
    "name": "SIFON WASTAFEL PVC",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIFON%20WASTAFEL%20PVC",
    "variants": [
      {
        "sku": "MNOSIF01",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1873",
    "name": "SIFON WASTAFEL STAINLESS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIFON%20WASTAFEL%20STAINLESS",
    "variants": [
      {
        "sku": "MNOSIF03",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1874",
    "name": "SIFONE PVC GLX 1.1/4\"",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIFONE%20PVC%20GLX%201.1%2F4%22",
    "variants": [
      {
        "sku": "SF PVC 1.1/4",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1875",
    "name": "SIFONE WASTAFEL EXECUTIVE KE-935",
    "category": "Umum",
    "brand": "ECEXUTIVE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIFONE%20WASTAFEL%20EXECUTIVE",
    "variants": [
      {
        "sku": "SF KE-935",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "1876",
    "name": "SIKAT BAJA 6 BARIS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20BAJA%206%20BARIS",
    "variants": [
      {
        "sku": "SIKBJ6BR",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1877",
    "name": "SIKAT BAJA GG PLASTIK HITAM TOKIO 6 JL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20BAJA%20GG%20PLASTIK%20HIT",
    "variants": [
      {
        "sku": "SKTBJ PVC HTM",
        "label": "PCS",
        "price": 42750,
        "unit": "PCS"
      }
    ],
    "basePrice": 42750,
    "priceLabel": "Rp42.750"
  },
  {
    "id": "1878",
    "name": "SIKAT BAJA KARAT KUNINGAN",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20BAJA%20KARAT%20KUNINGAN",
    "variants": [
      {
        "sku": "MNOSIK11",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1879",
    "name": "SIKAT BAJA KUNING BENGKOK PLASTIK TOKIO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20BAJA%20KUNING%20BENGKOK",
    "variants": [
      {
        "sku": "SKTBJ KNG PVC",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1880",
    "name": "SIKAT BAJU ENTER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20BAJU%20ENTER",
    "variants": [
      {
        "sku": "SIKBJENT",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1881",
    "name": "SIKAT DORONG + WIPER HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20DORONG%20%2B%20WIPER%20HYPE",
    "variants": [
      {
        "sku": "MNOSIK16",
        "label": "PCS",
        "price": 43000,
        "unit": "PCS"
      }
    ],
    "basePrice": 43000,
    "priceLabel": "Rp43.000"
  },
  {
    "id": "1882",
    "name": "SIKAT DORONG TANGGUNG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20DORONG%20TANGGUNG%20HYP",
    "variants": [
      {
        "sku": "MNOSIK17",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "1883",
    "name": "SIKAT GAGANG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20GAGANG%20HYPER",
    "variants": [
      {
        "sku": "MNOSIK15",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "1884",
    "name": "SIKAT GAGANG PREM",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20GAGANG%20PREM",
    "variants": [
      {
        "sku": "MNOSIK14",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "1885",
    "name": "SIKAT KAWAT BAJA 6 BARIS GDO / NISHIO",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20KAWAT%20BAJA%206%20BARIS%20",
    "variants": [
      {
        "sku": "SKT BAJA",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1886",
    "name": "SIKAT KAWAT KUNING 8'",
    "category": "Umum",
    "brand": "EAGLE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20KAWAT%20KUNING%208'",
    "variants": [
      {
        "sku": "SKT KNG 8",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1887",
    "name": "SIKAT KAWAT LENGKUNG BENGKOK",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20KAWAT%20LENGKUNG%20BENG",
    "variants": [
      {
        "sku": "MNOSIK13",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1888",
    "name": "SIKAT KAWAT MINI SET 3 PCS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20KAWAT%20MINI%20SET%203%20PC",
    "variants": [
      {
        "sku": "MNOSIK12",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1889",
    "name": "SIKAT KEPANG KING",
    "category": "Umum",
    "brand": "KING",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20KEPANG%20KING",
    "variants": [
      {
        "sku": "MKISIK02",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "1890",
    "name": "SIKAT KUNING BENGKOK VEGAZ",
    "category": "Umum",
    "brand": "VEGAZ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20KUNING%20BENGKOK%20VEGA",
    "variants": [
      {
        "sku": "SKT KNG VG",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "1891",
    "name": "SIKAT MANGKOK KING",
    "category": "Umum",
    "brand": "KING",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKAT%20MANGKOK%20KING",
    "variants": [
      {
        "sku": "MKISIK01",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1892",
    "name": "SIKU LAS MAGNET MINI SET 4 PCS HASSTON 3910-008",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20LAS%20MAGNET%20MINI%20SET%20",
    "variants": [
      {
        "sku": "MHASIK01",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "1893",
    "name": "SIKU LUBANG TEBAL",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20LUBANG%20TEBAL",
    "variants": [
      {
        "sku": "SIKLUBTB",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "1894",
    "name": "SIKU LUBANG TIPIS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20LUBANG%20TIPIS",
    "variants": [
      {
        "sku": "SIKULUBT",
        "label": "PCS",
        "price": 36000,
        "unit": "PCS"
      }
    ],
    "basePrice": 36000,
    "priceLabel": "Rp36.000"
  },
  {
    "id": "1895",
    "name": "SIKU MAGNET LAS 3\" TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20MAGNET%20LAS%203%22%20TOKIO",
    "variants": [
      {
        "sku": "SK MGNT 3",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "1896",
    "name": "SIKU RAK 10 X 12 GDO",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%2010%20X%2012%20GDO",
    "variants": [
      {
        "sku": "SR10X12",
        "label": "PCS",
        "price": 62500,
        "unit": "PCS"
      }
    ],
    "basePrice": 62500,
    "priceLabel": "Rp62.500"
  },
  {
    "id": "1897",
    "name": "SIKU RAK 10X12 BIASA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%2010X12%20BIASA",
    "variants": [
      {
        "sku": "SR10X12 NI",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "1898",
    "name": "SIKU RAK 12 X 14 GDO",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%2012%20X%2014%20GDO",
    "variants": [
      {
        "sku": "SR12X14",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "1899",
    "name": "SIKU RAK 12 X 14 MJP",
    "category": "Umum",
    "brand": "MJP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%2012%20X%2014%20MJP",
    "variants": [
      {
        "sku": "SR12X14 MJ",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1900",
    "name": "SIKU RAK 12X14 BIASA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%2012X14%20BIASA",
    "variants": [
      {
        "sku": "SR12X14 NI",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "1901",
    "name": "SIKU RAK 6 X 8",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%206%20X%208",
    "variants": [
      {
        "sku": "SR6X8 NI",
        "label": "PCS",
        "price": 30455,
        "unit": "PCS"
      }
    ],
    "basePrice": 30455,
    "priceLabel": "Rp30.455"
  },
  {
    "id": "1902",
    "name": "SIKU RAK 6 X 8 GDO",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%206%20X%208%20GDO",
    "variants": [
      {
        "sku": "SR6X8",
        "label": "PCS",
        "price": 43500,
        "unit": "PCS"
      }
    ],
    "basePrice": 43500,
    "priceLabel": "Rp43.500"
  },
  {
    "id": "1903",
    "name": "SIKU RAK 8 X 10 GDO",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%208%20X%2010%20GDO",
    "variants": [
      {
        "sku": "SR8X10",
        "label": "PCS",
        "price": 44000,
        "unit": "PCS"
      }
    ],
    "basePrice": 44000,
    "priceLabel": "Rp44.000"
  },
  {
    "id": "1904",
    "name": "SIKU RAK 8 X 10 MJP",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%208%20X%2010%20MJP",
    "variants": [
      {
        "sku": "SR8X10 MJ",
        "label": "PCS",
        "price": 52500,
        "unit": "PCS"
      }
    ],
    "basePrice": 52500,
    "priceLabel": "Rp52.500"
  },
  {
    "id": "1905",
    "name": "SIKU RAK 8 X 10 PROFIX",
    "category": "Umum",
    "brand": "PROFIX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%208%20X%2010%20PROFIX",
    "variants": [
      {
        "sku": "SR8X10 PROF",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1906",
    "name": "SIKU RAK PUTIH 10 X 12 GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%2010%20X%2012%20GR",
    "variants": [
      {
        "sku": "SR10X12 PTH",
        "label": "PCS",
        "price": 55575,
        "unit": "PCS"
      }
    ],
    "basePrice": 55575,
    "priceLabel": "Rp55.575"
  },
  {
    "id": "1907",
    "name": "SIKU RAK PUTIH 12 X 14 GRT",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%2012%20X%2014%20GR",
    "variants": [
      {
        "sku": "SR12X14 PTH",
        "label": "PCS",
        "price": 68875,
        "unit": "PCS"
      }
    ],
    "basePrice": 68875,
    "priceLabel": "Rp68.875"
  },
  {
    "id": "1908",
    "name": "SIKU RAK PUTIH 3X4 BIASA",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%203X4%20BIASA",
    "variants": [
      {
        "sku": "MGLSIK01",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "1909",
    "name": "SIKU RAK PUTIH 4X5 BIASA",
    "category": "Umum",
    "brand": "GLX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%204X5%20BIASA",
    "variants": [
      {
        "sku": "MGLSIK02",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1910",
    "name": "SIKU RAK PUTIH 5 X 6 KR",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%205%20X%206%20KR",
    "variants": [
      {
        "sku": "SR5X6 PTH KR",
        "label": "PCS",
        "price": 29400,
        "unit": "PCS"
      }
    ],
    "basePrice": 29400,
    "priceLabel": "Rp29.400"
  },
  {
    "id": "1911",
    "name": "SIKU RAK PUTIH 5X6 BIASA",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%205X6%20BIASA",
    "variants": [
      {
        "sku": "SR5X6 PTH",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1912",
    "name": "SIKU RAK PUTIH 6X8 BIASA",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%206X8%20BIASA",
    "variants": [
      {
        "sku": "SR6X8 PTH",
        "label": "PCS",
        "price": 7500,
        "unit": "PCS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "1913",
    "name": "SIKU RAK PUTIH 8 X 10 KR",
    "category": "Umum",
    "brand": "KURA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%208%20X%2010%20KR",
    "variants": [
      {
        "sku": "SR8X10 PTH KR",
        "label": "PCS",
        "price": 38500,
        "unit": "PCS"
      }
    ],
    "basePrice": 38500,
    "priceLabel": "Rp38.500"
  },
  {
    "id": "1914",
    "name": "SIKU RAK PUTIH 8X10 BIASA",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20RAK%20PUTIH%208X10%20BIASA",
    "variants": [
      {
        "sku": "SR8X10 PTH",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1915",
    "name": "SIKU TUKANG JUMBO 12\" VPR",
    "category": "Umum",
    "brand": "VPR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20TUKANG%20JUMBO%2012%22%20VPR",
    "variants": [
      {
        "sku": "SKTKG 12 SS",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1916",
    "name": "SIKU TUKANG JUMBO IGM",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20TUKANG%20JUMBO%20IGM",
    "variants": [
      {
        "sku": "SITKJIGM",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "1917",
    "name": "SIKU TUKANG WATERPASS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SIKU%20TUKANG%20WATERPASS",
    "variants": [
      {
        "sku": "SKTWTRP",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1918",
    "name": "SILINDER ALUMINIUM ORCHAD",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20ALUMINIUM%20ORCHAD",
    "variants": [
      {
        "sku": "SIL ALLM",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1919",
    "name": "SILINDER KUNCI BESAR ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20BESAR%20ISCO",
    "variants": [
      {
        "sku": "SLND KCB IS",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1920",
    "name": "SILINDER KUNCI CLASSIC TANGGUNG",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20CLASSIC%20TA",
    "variants": [
      {
        "sku": "SLKNCLTG",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "1921",
    "name": "SILINDER KUNCI KECIL/TGG ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20KECIL%2FTGG%20",
    "variants": [
      {
        "sku": "SLND KCK IS",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1922",
    "name": "SILINDER KUNCI MULLER BIRU",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20MULLER%20BIR",
    "variants": [
      {
        "sku": "SILKUMLB",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "1923",
    "name": "SILINDER KUNCI MULLER HITAM",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20MULLER%20HIT",
    "variants": [
      {
        "sku": "SILKUNMH",
        "label": "PCS",
        "price": 135000,
        "unit": "PCS"
      }
    ],
    "basePrice": 135000,
    "priceLabel": "Rp135.000"
  },
  {
    "id": "1924",
    "name": "SILINDER KUNCI MULLER PUTIH",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20MULLER%20PUT",
    "variants": [
      {
        "sku": "SILKUNMP",
        "label": "PCS",
        "price": 82000,
        "unit": "PCS"
      }
    ],
    "basePrice": 82000,
    "priceLabel": "Rp82.000"
  },
  {
    "id": "1925",
    "name": "SILINDER KUNCI OLIQ",
    "category": "Kunci Pintu & Aksesoris Mebel",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SILINDER%20KUNCI%20OLIQ",
    "variants": [
      {
        "sku": "SILKUNOL",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "1926",
    "name": "SKETMAT JANGKA SORONG DIGITAL 6\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKETMAT%20JANGKA%20SORONG%20DIG",
    "variants": [
      {
        "sku": "MSKTJSDG",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "1927",
    "name": "SKETMAT JANGKA SORONG PLASTIK 6\"",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKETMAT%20JANGKA%20SORONG%20PLA",
    "variants": [
      {
        "sku": "MSKTJSPL",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1928",
    "name": "SKRAP GAGANG FIBER 3\" CHIYO",
    "category": "Umum",
    "brand": "CHIYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20FIBER%203%22%20CHI",
    "variants": [
      {
        "sku": "SKR FB 3 CH",
        "label": "PCS",
        "price": 41000,
        "unit": "PCS"
      }
    ],
    "basePrice": 41000,
    "priceLabel": "Rp41.000"
  },
  {
    "id": "1929",
    "name": "SKRAP GAGANG KARET 2 1/2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KARET%202%201%2F2",
    "variants": [
      {
        "sku": "MNOSKR23",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1930",
    "name": "SKRAP GAGANG KARET 2”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KARET%202%E2%80%9D",
    "variants": [
      {
        "sku": "MNOSKR22",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1931",
    "name": "SKRAP GAGANG KARET 3”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KARET%203%E2%80%9D",
    "variants": [
      {
        "sku": "MNOSKR24",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1932",
    "name": "SKRAP GAGANG KARET 4”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KARET%204%E2%80%9D",
    "variants": [
      {
        "sku": "MNOSKR25",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "1933",
    "name": "SKRAP GAGANG KAYU 2 1/2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KAYU%202%201%2F2",
    "variants": [
      {
        "sku": "MNOSKR19",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1934",
    "name": "SKRAP GAGANG KAYU 2”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KAYU%202%E2%80%9D",
    "variants": [
      {
        "sku": "MNOSKR18",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1935",
    "name": "SKRAP GAGANG KAYU 3”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KAYU%203%E2%80%9D",
    "variants": [
      {
        "sku": "MNOSKR20",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1936",
    "name": "SKRAP GAGANG KAYU 4”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GAGANG%20KAYU%204%E2%80%9D",
    "variants": [
      {
        "sku": "MNOSKR21",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1937",
    "name": "SKRAP GG KARET 2 1/2 YOZURI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%202%201%2F2%20YOZU",
    "variants": [
      {
        "sku": "SKR KRT 2 1/2",
        "label": "PCS",
        "price": 61180,
        "unit": "PCS"
      }
    ],
    "basePrice": 61180,
    "priceLabel": "Rp61.180"
  },
  {
    "id": "1938",
    "name": "SKRAP GG KARET 2 CHIYO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%202%20CHIYO",
    "variants": [
      {
        "sku": "SKR KRT 2 CH",
        "label": "PCS",
        "price": 36000,
        "unit": "PCS"
      }
    ],
    "basePrice": 36000,
    "priceLabel": "Rp36.000"
  },
  {
    "id": "1939",
    "name": "SKRAP GG KARET 2 YOZURI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%202%20YOZURI",
    "variants": [
      {
        "sku": "SKR KRT 2",
        "label": "PCS",
        "price": 58055.45,
        "unit": "PCS"
      }
    ],
    "basePrice": 58055.45,
    "priceLabel": "Rp58.055,45"
  },
  {
    "id": "1940",
    "name": "SKRAP GG KARET 2.1/2 CHIYO",
    "category": "Umum",
    "brand": "CHIYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%202.1%2F2%20CHIY",
    "variants": [
      {
        "sku": "SKR KRT 2.1/2 CH",
        "label": "PCS",
        "price": 38500,
        "unit": "PCS"
      }
    ],
    "basePrice": 38500,
    "priceLabel": "Rp38.500"
  },
  {
    "id": "1941",
    "name": "SKRAP GG KARET 3 CHIYO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%203%20CHIYO",
    "variants": [
      {
        "sku": "SKR KRT 3 CH",
        "label": "PCS",
        "price": 41000,
        "unit": "PCS"
      }
    ],
    "basePrice": 41000,
    "priceLabel": "Rp41.000"
  },
  {
    "id": "1942",
    "name": "SKRAP GG KARET 3 YOZURI",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%203%20YOZURI",
    "variants": [
      {
        "sku": "SKR KRT 3",
        "label": "PCS",
        "price": 63365,
        "unit": "PCS"
      }
    ],
    "basePrice": 63365,
    "priceLabel": "Rp63.365"
  },
  {
    "id": "1943",
    "name": "SKRAP GG KARET 4 CHIYO",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KARET%204%20CHIYO",
    "variants": [
      {
        "sku": "SKR KRT 4 CH",
        "label": "PCS",
        "price": 46000,
        "unit": "PCS"
      }
    ],
    "basePrice": 46000,
    "priceLabel": "Rp46.000"
  },
  {
    "id": "1944",
    "name": "SKRAP GG KAYU 1,5",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KAYU%201%2C5",
    "variants": [
      {
        "sku": "SKR KY 1.5",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1945",
    "name": "SKRAP GG KAYU 2,5",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KAYU%202%2C5",
    "variants": [
      {
        "sku": "SKR KY 2.5",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1946",
    "name": "SKRAP GG KAYU 3",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20GG%20KAYU%203",
    "variants": [
      {
        "sku": "SKR KY 3",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "1947",
    "name": "SKRAP PVC 5' ZELIG",
    "category": "Umum",
    "brand": "ZELIG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20PVC%205'%20ZELIG",
    "variants": [
      {
        "sku": "SKR PVC 5",
        "label": "PCS",
        "price": 1500,
        "unit": "PCS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "1948",
    "name": "SKRAP PVC 5”",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20PVC%205%E2%80%9D",
    "variants": [
      {
        "sku": "SKRPVC5",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1949",
    "name": "SKRAP PVC 7' ZELIG",
    "category": "Umum",
    "brand": "ZELIG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20PVC%207'%20ZELIG",
    "variants": [
      {
        "sku": "SKR PVC 7",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "1950",
    "name": "SKRAP PVC 9' ZELIG",
    "category": "Umum",
    "brand": "ZELIG",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20PVC%209'%20ZELIG",
    "variants": [
      {
        "sku": "SKR PVC 9",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "1951",
    "name": "SKRAP SET S/S KOALA",
    "category": "Umum",
    "brand": "KOALA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20SET%20S%2FS%20KOALA",
    "variants": [
      {
        "sku": "SKR SET SS",
        "label": "SET",
        "price": 25000,
        "unit": "SET"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1952",
    "name": "SKRAP SET STAINLESS",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRAP%20SET%20STAINLESS",
    "variants": [
      {
        "sku": "SKRSETSS",
        "label": "SET",
        "price": 30000,
        "unit": "SET"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "1953",
    "name": "SKRUP CAMEL 5/8 X 5 (+-65 PCS)",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20CAMEL%205%2F8%20X%205%20(%2B-65",
    "variants": [
      {
        "sku": "MCASKR02",
        "label": "BKS",
        "price": 8000,
        "unit": "BKS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1954",
    "name": "SKRUP CEDAR 2 X 9 (10 PCS)",
    "category": "Alat tukang",
    "brand": "CEDAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20CEDAR%202%20X%209%20(10%20PCS",
    "variants": [
      {
        "sku": "MCESKR02",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1955",
    "name": "SKRUP CHW 1",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20CHW%201",
    "variants": [
      {
        "sku": "SKRP CHW 1",
        "label": "1",
        "price": 3650,
        "unit": "PCS"
      },
      {
        "sku": "SKRP CHW 3/4",
        "label": "3/4",
        "price": 3350,
        "unit": "PCS"
      },
      {
        "sku": "SKRP CHW 5/8",
        "label": "5/8",
        "price": 2700,
        "unit": "PCS"
      }
    ],
    "basePrice": 2700,
    "priceLabel": "Rp2.700 - Rp3.650"
  },
  {
    "id": "1956",
    "name": "SKRUP CHW 1.1/2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20CHW%201.1%2F2",
    "variants": [
      {
        "sku": "SKRP CHW 1.1/2",
        "label": "1/2",
        "price": 6400,
        "unit": "PCS"
      },
      {
        "sku": "SKRP CHW 1.1/4",
        "label": "1/4",
        "price": 4550,
        "unit": "PCS"
      }
    ],
    "basePrice": 4550,
    "priceLabel": "Rp4.550 - Rp6.400"
  },
  {
    "id": "1957",
    "name": "SKRUP FAB 10 X 2",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%2010%20X%202",
    "variants": [
      {
        "sku": "SKFAB102",
        "label": "PCS",
        "price": 1000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000"
  },
  {
    "id": "1958",
    "name": "SKRUP FAB 12 X 4",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%2012%20X%204",
    "variants": [
      {
        "sku": "SRFAB124",
        "label": "PCS",
        "price": 1500,
        "unit": "PCS"
      }
    ],
    "basePrice": 1500,
    "priceLabel": "Rp1.500"
  },
  {
    "id": "1959",
    "name": "SKRUP FAB 6 X 1",
    "category": "Umum",
    "brand": "FAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%206%20X%201",
    "variants": [
      {
        "sku": "MFASKR04",
        "label": "1",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "SKRFAB612",
        "label": "1/2",
        "price": 500,
        "unit": "BKS"
      },
      {
        "sku": "MFASKR08",
        "label": "2",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MSKRFAB634",
        "label": "3/4",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MNOSKR31",
        "label": "3/8",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR02",
        "label": "5/8",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1960",
    "name": "SKRUP FAB 6 X 1 1/2",
    "category": "Umum",
    "brand": "FAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%206%20X%201%201%2F2",
    "variants": [
      {
        "sku": "MFASKR06",
        "label": "1/2",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR05",
        "label": "1/4",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR07",
        "label": "3/4",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1961",
    "name": "SKRUP FAB 8 X 1",
    "category": "Umum",
    "brand": "FAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%208%20X%201",
    "variants": [
      {
        "sku": "MFASKR13",
        "label": "1",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR10",
        "label": "1/2",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR17",
        "label": "2",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR19",
        "label": "3",
        "price": 1000,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR12",
        "label": "3/4",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR09",
        "label": "3/8",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR11",
        "label": "5/8",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500 - Rp1.000"
  },
  {
    "id": "1962",
    "name": "SKRUP FAB 8 X 1 1/2",
    "category": "Umum",
    "brand": "FAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%208%20X%201%201%2F2",
    "variants": [
      {
        "sku": "MFASKR15",
        "label": "1/2",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR14",
        "label": "1/4",
        "price": 500,
        "unit": "PCS"
      },
      {
        "sku": "MFASKR16",
        "label": "3/4",
        "price": 500,
        "unit": "PCS"
      }
    ],
    "basePrice": 500,
    "priceLabel": "Rp500"
  },
  {
    "id": "1963",
    "name": "SKRUP FAB 8 X 2 1/2",
    "category": "Umum",
    "brand": "FAB",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20FAB%208%20X%202%201%2F2",
    "variants": [
      {
        "sku": "MFASKR18",
        "label": "PCS",
        "price": 1000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000"
  },
  {
    "id": "1964",
    "name": "SKRUP GYPSUM 1' HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%201'%20HIOSHI",
    "variants": [
      {
        "sku": "SKR GYP 1",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "1965",
    "name": "SKRUP GYPSUM 1\"",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%201%22",
    "variants": [
      {
        "sku": "SKRGYP1",
        "label": "BOX",
        "price": 35000,
        "unit": "BOX"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1966",
    "name": "SKRUP GYPSUM 1\" (100 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%201%22%20(100%20PCS)",
    "variants": [
      {
        "sku": "SKGY1100",
        "label": "BKS",
        "price": 7000,
        "unit": "BKS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "1967",
    "name": "SKRUP GYPSUM 1” (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%201%E2%80%9D%20(50%20PCS)",
    "variants": [
      {
        "sku": "SKRGYP50",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1968",
    "name": "SKRUP GYPSUM 3/4 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%203%2F4%20(50%20PCS)",
    "variants": [
      {
        "sku": "SKRGY34",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1969",
    "name": "SKRUP GYPSUM 6 X 1 1/4 LUMBA",
    "category": "Umum",
    "brand": "LUMBA LUMBA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%206%20X%201%201%2F4%20LU",
    "variants": [
      {
        "sku": "SKR GYP 1.1/4 LMB",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "1970",
    "name": "SKRUP GYPSUM 6 X 1.1/2\" LUMBA2",
    "category": "Umum",
    "brand": "LUMBA LUMBA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%206%20X%201.1%2F2%22%20L",
    "variants": [
      {
        "sku": "SKR GYP 1.1/2 LMB",
        "label": "PCS",
        "price": 630000,
        "unit": "PCS"
      }
    ],
    "basePrice": 630000,
    "priceLabel": "Rp630.000"
  },
  {
    "id": "1971",
    "name": "SKRUP GYPSUM 6 X 1\" LUMBA2",
    "category": "Umum",
    "brand": "LUMBA LUMBA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%206%20X%201%22%20LUMBA",
    "variants": [
      {
        "sku": "SKR GYP 1 LMB",
        "label": "PCS",
        "price": 630000,
        "unit": "PCS"
      }
    ],
    "basePrice": 630000,
    "priceLabel": "Rp630.000"
  },
  {
    "id": "1972",
    "name": "SKRUP GYPSUM 6 X 2\" LUMBA2",
    "category": "Umum",
    "brand": "LUMBA LUMBA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%206%20X%202%22%20LUMBA",
    "variants": [
      {
        "sku": "SKR GYP 2 LMB",
        "label": "PCS",
        "price": 630000,
        "unit": "PCS"
      }
    ],
    "basePrice": 630000,
    "priceLabel": "Rp630.000"
  },
  {
    "id": "1973",
    "name": "SKRUP GYPSUM GRT 1.1/2\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%20GRT%201.1%2F2%22",
    "variants": [
      {
        "sku": "SGYP GRT 1.1/2",
        "label": "PCS",
        "price": 10250,
        "unit": "PCS"
      }
    ],
    "basePrice": 10250,
    "priceLabel": "Rp10.250"
  },
  {
    "id": "1974",
    "name": "SKRUP GYPSUM GRT 1.1/4\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%20GRT%201.1%2F4%22",
    "variants": [
      {
        "sku": "SGYP GRT 1.1/4",
        "label": "PCS",
        "price": 10250,
        "unit": "PCS"
      }
    ],
    "basePrice": 10250,
    "priceLabel": "Rp10.250"
  },
  {
    "id": "1975",
    "name": "SKRUP GYPSUM GRT 1\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%20GRT%201%22",
    "variants": [
      {
        "sku": "SGYP GRT 1",
        "label": "PCS",
        "price": 10250,
        "unit": "PCS"
      }
    ],
    "basePrice": 10250,
    "priceLabel": "Rp10.250"
  },
  {
    "id": "1976",
    "name": "SKRUP GYPSUM GRT 2\"",
    "category": "Umum",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20GYPSUM%20GRT%202%22",
    "variants": [
      {
        "sku": "SGYP GRT 2",
        "label": "PCS",
        "price": 10250,
        "unit": "PCS"
      }
    ],
    "basePrice": 10250,
    "priceLabel": "Rp10.250"
  },
  {
    "id": "1977",
    "name": "SKRUP HAK BUKA NO 12 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20HAK%20BUKA%20NO%2012%20(10%20",
    "variants": [
      {
        "sku": "SKRHB12P",
        "label": "BKS",
        "price": 10000,
        "unit": "BKS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "1978",
    "name": "SKRUP HAK BUKA NO 6",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20HAK%20BUKA%20NO%206",
    "variants": [
      {
        "sku": "SKRHAB6-PAKET",
        "label": "6",
        "price": 5000,
        "unit": "BKS"
      },
      {
        "sku": "SKRHAB6",
        "label": "6",
        "price": 35000,
        "unit": "BOX"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000 - Rp35.000"
  },
  {
    "id": "1979",
    "name": "SKRUP ISP 1/2 X 4 (+-65 PCS)",
    "category": "Alat tukang",
    "brand": "ISP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20ISP%201%2F2%20X%204%20(%2B-65%20P",
    "variants": [
      {
        "sku": "MISSKR03",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1980",
    "name": "SKRUP ISP 3/4 X 6",
    "category": "Alat tukang",
    "brand": "ISP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20ISP%203%2F4%20X%206",
    "variants": [
      {
        "sku": "MISSKR02",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "1981",
    "name": "SKRUP ISP 3/4 X 6 (+-70 PCS)",
    "category": "Alat tukang",
    "brand": "ISP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20ISP%203%2F4%20X%206%20(%2B-70%20P",
    "variants": [
      {
        "sku": "MISSKR04",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1982",
    "name": "SKRUP MATA TUTUP / HAK TUTUP 10 TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20MATA%20TUTUP%20%2F%20HAK%20TU",
    "variants": [
      {
        "sku": "HT 10 TK",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1983",
    "name": "SKRUP MATA TUTUP / HAK TUTUP 2 TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20MATA%20TUTUP%20%2F%20HAK%20TU",
    "variants": [
      {
        "sku": "HT 2 TK",
        "label": "BOX",
        "price": 20000,
        "unit": "BOX"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "1984",
    "name": "SKRUP MATA TUTUP / HAK TUTUP 3 TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20MATA%20TUTUP%20%2F%20HAK%20TU",
    "variants": [
      {
        "sku": "HT 3 TK",
        "label": "PCS",
        "price": 7750,
        "unit": "PCS"
      }
    ],
    "basePrice": 7750,
    "priceLabel": "Rp7.750"
  },
  {
    "id": "1985",
    "name": "SKRUP MATA TUTUP / HAK TUTUP 8 TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20MATA%20TUTUP%20%2F%20HAK%20TU",
    "variants": [
      {
        "sku": "HT 8 TK",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "1986",
    "name": "SKRUP PAB 8 X 1 1/2 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20PAB%208%20X%201%201%2F2%20(50%20P",
    "variants": [
      {
        "sku": "SPAB8112",
        "label": "BKS",
        "price": 15000,
        "unit": "BKS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "1987",
    "name": "SKRUP RRT 1 1/2 X 8 (10 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20RRT%201%201%2F2%20X%208%20(10%20P",
    "variants": [
      {
        "sku": "MNOSKR17",
        "label": "BKS",
        "price": 5000,
        "unit": "BKS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "1988",
    "name": "SKRUP SBS 1 X 6 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SBS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SBS%201%20X%206%20(10%20PCS)",
    "variants": [
      {
        "sku": "MNOSKR01-PAKET",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1989",
    "name": "SKRUP SDS FH 6 X 25 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SDS%20FH%206%20X%2025%20(50%20P",
    "variants": [
      {
        "sku": "SKRFH625-PAKET",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "1990",
    "name": "SKRUP SDS FH 6 X 25 (BOX)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SDS%20FH%206%20X%2025%20(BOX)",
    "variants": [
      {
        "sku": "SKRFH625",
        "label": "BOX",
        "price": 220000,
        "unit": "BOX"
      }
    ],
    "basePrice": 220000,
    "priceLabel": "Rp220.000"
  },
  {
    "id": "1991",
    "name": "SKRUP SDS FH 6 X 32 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SDS%20FH%206%20X%2032%20(50%20P",
    "variants": [
      {
        "sku": "SKRFH632-PAKET",
        "label": "BKS",
        "price": 14000,
        "unit": "BKS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "1992",
    "name": "SKRUP SDS FH 6 X 32 (BOX)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SDS%20FH%206%20X%2032%20(BOX)",
    "variants": [
      {
        "sku": "SKRFH632",
        "label": "BOX",
        "price": 200000,
        "unit": "BOX"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "1993",
    "name": "SKRUP SDS FH 6 X 38 (50 PCS)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SDS%20FH%206%20X%2038%20(50%20P",
    "variants": [
      {
        "sku": "SKRFH638-PAKET",
        "label": "BKS",
        "price": 25000,
        "unit": "BKS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "1994",
    "name": "SKRUP SDS FH 6 X 38 (BOX)",
    "category": "Mur Baut",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SDS%20FH%206%20X%2038%20(BOX)",
    "variants": [
      {
        "sku": "SKRFH638",
        "label": "BOX",
        "price": 300000,
        "unit": "BOX"
      }
    ],
    "basePrice": 300000,
    "priceLabel": "Rp300.000"
  },
  {
    "id": "1995",
    "name": "SKRUP SIP 1 1/2 X 8 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%201%2F2%20X%208%20(10%20P",
    "variants": [
      {
        "sku": "MSISKR01-PAKET",
        "label": "BKS",
        "price": 4500,
        "unit": "BKS"
      }
    ],
    "basePrice": 4500,
    "priceLabel": "Rp4.500"
  },
  {
    "id": "1996",
    "name": "SKRUP SIP 1 1/4 X 7 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%201%2F4%20X%207%20(10%20P",
    "variants": [
      {
        "sku": "MSISKR02-PAKET",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "1997",
    "name": "SKRUP SIP 1 X 6 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%20X%206%20(10%20PCS)",
    "variants": [
      {
        "sku": "MSISKR04-PAKET",
        "label": "BKS",
        "price": 3000,
        "unit": "BKS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "1998",
    "name": "SKRUP SIP 1 X 7",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%20X%207",
    "variants": [
      {
        "sku": "MSISKR03",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "1999",
    "name": "SKRUP SIP 1 X 7 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%20X%207%20(10%20PCS)",
    "variants": [
      {
        "sku": "MSISKR03-PAKET",
        "label": "BKS",
        "price": 4000,
        "unit": "BKS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "2000",
    "name": "SKRUP SIP 1/2 X 3",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%2F2%20X%203",
    "variants": [
      {
        "sku": "MSISKR05",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2001",
    "name": "SKRUP SIP 1/2 X 3 (+-65 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%201%2F2%20X%203%20(%2B-65%20P",
    "variants": [
      {
        "sku": "MSISKR05-PAKET",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2002",
    "name": "SKRUP SIP 2 1/2 X 10 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%202%201%2F2%20X%2010%20(10%20",
    "variants": [
      {
        "sku": "MSISKR08-PAKET",
        "label": "BKS",
        "price": 7500,
        "unit": "BKS"
      }
    ],
    "basePrice": 7500,
    "priceLabel": "Rp7.500"
  },
  {
    "id": "2003",
    "name": "SKRUP SIP 2 X 9 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%202%20X%209%20(10%20PCS)",
    "variants": [
      {
        "sku": "MSISKR07-PAKET",
        "label": "BKS",
        "price": 6000,
        "unit": "BKS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "2004",
    "name": "SKRUP SIP 3 X 12 (10 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%203%20X%2012%20(10%20PCS)",
    "variants": [
      {
        "sku": "MSISKR09-PAKET",
        "label": "BKS",
        "price": 14000,
        "unit": "BKS"
      }
    ],
    "basePrice": 14000,
    "priceLabel": "Rp14.000"
  },
  {
    "id": "2005",
    "name": "SKRUP SIP 5/8 X 5",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%205%2F8%20X%205",
    "variants": [
      {
        "sku": "SKRP SIP 5/8",
        "label": "PCS",
        "price": 5350,
        "unit": "PCS"
      }
    ],
    "basePrice": 5350,
    "priceLabel": "Rp5.350"
  },
  {
    "id": "2006",
    "name": "SKRUP SIP 5/8 X 5 (144 PCS)",
    "category": "Alat tukang",
    "brand": "SIP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SKRUP%20SIP%205%2F8%20X%205%20(144%20PC",
    "variants": [
      {
        "sku": "SKRP SIP 5/8-PAKET",
        "label": "BKS",
        "price": 12000,
        "unit": "BKS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2007",
    "name": "SLONTONG BAK 1\"",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%201%22",
    "variants": [
      {
        "sku": "SLOBAK1",
        "label": "PCS",
        "price": 4500,
        "unit": "PCS"
      }
    ],
    "basePrice": 4500,
    "priceLabel": "Rp4.500"
  },
  {
    "id": "2008",
    "name": "SLONTONG BAK 3/4",
    "category": "Sanitary",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%203%2F4",
    "variants": [
      {
        "sku": "SLOBAK34",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "2009",
    "name": "SLONTONG BAK BIRU 1\"",
    "category": "Umum",
    "brand": "MITSUTOYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%20BIRU%201%22",
    "variants": [
      {
        "sku": "SL BAK BR 1",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "2010",
    "name": "SLONTONG BAK BIRU 3/4",
    "category": "Umum",
    "brand": "MITSUTOYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%20BIRU%203%2F4",
    "variants": [
      {
        "sku": "SL BAK BR",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2011",
    "name": "SLONTONG BAK HIJAU 3/4",
    "category": "Umum",
    "brand": "MITSUTOYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%20HIJAU%203%2F4",
    "variants": [
      {
        "sku": "SL BAK HJ",
        "label": "PCS",
        "price": 12500,
        "unit": "PCS"
      }
    ],
    "basePrice": 12500,
    "priceLabel": "Rp12.500"
  },
  {
    "id": "2012",
    "name": "SLONTONG BAK PINK 1\"",
    "category": "Umum",
    "brand": "MITSUTOYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%20PINK%201%22",
    "variants": [
      {
        "sku": "SL BAK PK 1",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "2013",
    "name": "SLONTONG BAK PINK 3/4",
    "category": "Umum",
    "brand": "MITSUTOYO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SLONTONG%20BAK%20PINK%203%2F4",
    "variants": [
      {
        "sku": "SL BAK PK",
        "label": "PCS",
        "price": 13500,
        "unit": "PCS"
      }
    ],
    "basePrice": 13500,
    "priceLabel": "Rp13.500"
  },
  {
    "id": "2014",
    "name": "SOCKET 1\" JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SOCKET%201%22%20JAYA",
    "variants": [
      {
        "sku": "MJASOC03",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "2015",
    "name": "SOCKET 1/2” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SOCKET%201%2F2%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJASOC01",
        "label": "PCS",
        "price": 2000,
        "unit": "PCS"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "2016",
    "name": "SOCKET 3/4” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SOCKET%203%2F4%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJASOC02",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "2017",
    "name": "SODA API",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SODA%20API",
    "variants": [
      {
        "sku": "SODAAPI",
        "label": "BKS",
        "price": 18000,
        "unit": "BKS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2018",
    "name": "SOLDER LISTRIK 60W TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SOLDER%20LISTRIK%2060W%20TEKIRO",
    "variants": [
      {
        "sku": "SOL60WTK",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "2019",
    "name": "SOLDER LISTRIK HASSTON 40 WATT",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SOLDER%20LISTRIK%20HASSTON%2040",
    "variants": [
      {
        "sku": "MHASOL01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2020",
    "name": "SOLDER LISTRIK MOLLAR 45W",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SOLDER%20LISTRIK%20MOLLAR%2045W",
    "variants": [
      {
        "sku": "MSLDRMO45",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "2021",
    "name": "SPONS CUCI PIRING MY",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPONS%20CUCI%20PIRING%20MY",
    "variants": [
      {
        "sku": "SPONCPMY",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "2022",
    "name": "SPONS CUCI PIRING SUSEMI",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPONS%20CUCI%20PIRING%20SUSEMI",
    "variants": [
      {
        "sku": "SPONCPS",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "2023",
    "name": "SPOTLIGHT LUBY 5301 10W",
    "category": "Rumah tangga",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPOTLIGHT%20LUBY%205301%2010W",
    "variants": [
      {
        "sku": "MLUSPO01",
        "label": "5W",
        "price": 150000,
        "unit": "PCS"
      },
      {
        "sku": "MLUSPO02",
        "label": "10W",
        "price": 186000,
        "unit": "PCS"
      }
    ],
    "basePrice": 150000,
    "priceLabel": "Rp150.000 - Rp186.000"
  },
  {
    "id": "2024",
    "name": "SPRAY GUN ELECTRIC MOLLAR ESG303",
    "category": "Power tools",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPRAY%20GUN%20ELECTRIC%20MOLLAR",
    "variants": [
      {
        "sku": "MSPEMESG",
        "label": "PCS",
        "price": 350000,
        "unit": "PCS"
      }
    ],
    "basePrice": 350000,
    "priceLabel": "Rp350.000"
  },
  {
    "id": "2025",
    "name": "SPRAY GUN F75G ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPRAY%20GUN%20F75G%20ISCO",
    "variants": [
      {
        "sku": "SPRYGUN ISCO",
        "label": "PCS",
        "price": 82000,
        "unit": "PCS"
      }
    ],
    "basePrice": 82000,
    "priceLabel": "Rp82.000"
  },
  {
    "id": "2026",
    "name": "SPRAY GUN F75G MAXTECH / ISCO / GNT",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPRAY%20GUN%20F75G%20MAXTECH%20%2F%20",
    "variants": [
      {
        "sku": "SPRYGUN MTCH",
        "label": "PCS",
        "price": 120000,
        "unit": "PCS"
      }
    ],
    "basePrice": 120000,
    "priceLabel": "Rp120.000"
  },
  {
    "id": "2027",
    "name": "SPRITE CLEAR 250ML",
    "category": "Minuman",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=SPRITE%20CLEAR%20250ML",
    "variants": [
      {
        "sku": "SPRTC250",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "2028",
    "name": "STANG GERGAJI BESI HD-1 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20GERGAJI%20BESI%20HD-1%20H",
    "variants": [
      {
        "sku": "STGRHD1",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "2029",
    "name": "STANG GERGAJI BIASA",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20GERGAJI%20BIASA",
    "variants": [
      {
        "sku": "MNOSTA04",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "2030",
    "name": "STANG GERGAJI PIPA CAB",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20GERGAJI%20PIPA%20CAB",
    "variants": [
      {
        "sku": "MSTGJCAB",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "2031",
    "name": "STANG GERGAJI TRIPLEK",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20GERGAJI%20TRIPLEK",
    "variants": [
      {
        "sku": "MNOSTA03",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "2032",
    "name": "STANG GRAJI BESI GG KARET HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20GRAJI%20BESI%20GG%20KARET",
    "variants": [
      {
        "sku": "STGRHGG01",
        "label": "PCS",
        "price": 235125,
        "unit": "PCS"
      }
    ],
    "basePrice": 235125,
    "priceLabel": "Rp235.125"
  },
  {
    "id": "2033",
    "name": "STANG RACHET 1/2\" 24 T MOLLAR",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20RACHET%201%2F2%22%2024%20T%20MO",
    "variants": [
      {
        "sku": "MMOSTA02",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "2034",
    "name": "STANG RACHET 1/2\" 72 T MOLLAR",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20RACHET%201%2F2%22%2072%20T%20MO",
    "variants": [
      {
        "sku": "MMOSTA01",
        "label": "PCS",
        "price": 80000,
        "unit": "PCS"
      }
    ],
    "basePrice": 80000,
    "priceLabel": "Rp80.000"
  },
  {
    "id": "2035",
    "name": "STANG SOK L 1/2 X 10\" TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20SOK%20L%201%2F2%20X%2010%22%20TEK",
    "variants": [
      {
        "sku": "STSL10TK",
        "label": "PCS",
        "price": 75000,
        "unit": "PCS"
      }
    ],
    "basePrice": 75000,
    "priceLabel": "Rp75.000"
  },
  {
    "id": "2036",
    "name": "STANG SOK L 1/2 X 12\" TEKIRO",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STANG%20SOK%20L%201%2F2%20X%2012%22%20TEK",
    "variants": [
      {
        "sku": "STSL12TK",
        "label": "PCS",
        "price": 77000,
        "unit": "PCS"
      }
    ],
    "basePrice": 77000,
    "priceLabel": "Rp77.000"
  },
  {
    "id": "2037",
    "name": "STAPLES TEMBAK CAMEL",
    "category": "Alat tukang",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STAPLES%20TEMBAK%20CAMEL",
    "variants": [
      {
        "sku": "MCASTA01",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "2038",
    "name": "STAPLES TEMBAK HOMASTER",
    "category": "Alat tukang",
    "brand": "HOMASTER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STAPLES%20TEMBAK%20HOMASTER",
    "variants": [
      {
        "sku": "MHOSTA01",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "2039",
    "name": "STEKER + SAKLAR DENGAN LAMPU INDIKATOR BROCO 13311",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STEKER%20%2B%20SAKLAR%20DENGAN%20LA",
    "variants": [
      {
        "sku": "MBRSTE03",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "2040",
    "name": "STEKER BULAT BROCO 13310L",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STEKER%20BULAT%20BROCO%2013310L",
    "variants": [
      {
        "sku": "MBRSTE02",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2041",
    "name": "STEKER GEPENG 344 BROCO HITAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STEKER%20GEPENG%20344%20BROCO%20H",
    "variants": [
      {
        "sku": "MBRSTE01",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "2042",
    "name": "STEKER KONTRA GEPENG 334 BROCO HITAM",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STEKER%20KONTRA%20GEPENG%20334%20",
    "variants": [
      {
        "sku": "MBRSTEKT",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2043",
    "name": "STEKER T BROCO 13830 PUTIH",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STEKER%20T%20BROCO%2013830%20PUTI",
    "variants": [
      {
        "sku": "MSTB1PTH",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2044",
    "name": "STOP KONTAK + SAKLAR BROCO 525161",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20%2B%20SAKLAR%20BROC",
    "variants": [
      {
        "sku": "MBRSTO03",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2045",
    "name": "STOP KONTAK 1 LUBANG BROCO 15410",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%201%20LUBANG%20BROC",
    "variants": [
      {
        "sku": "MBRSTO04",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "2046",
    "name": "STOP KONTAK 1 LUBANG BROCO 5511U CREAM",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%201%20LUBANG%20BROC",
    "variants": [
      {
        "sku": "MBRSTO01",
        "label": "PCS",
        "price": 17000,
        "unit": "PCS"
      }
    ],
    "basePrice": 17000,
    "priceLabel": "Rp17.000"
  },
  {
    "id": "2047",
    "name": "STOP KONTAK 2 LUBANG BROCO 1532155",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%202%20LUBANG%20BROC",
    "variants": [
      {
        "sku": "MBRSTO06",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "2048",
    "name": "STOP KONTAK 2 LUBANG CREAM 15420 BROCO",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%202%20LUBANG%20CREA",
    "variants": [
      {
        "sku": "MBRSTO05",
        "label": "PCS",
        "price": 33000,
        "unit": "PCS"
      }
    ],
    "basePrice": 33000,
    "priceLabel": "Rp33.000"
  },
  {
    "id": "2049",
    "name": "STOP KONTAK 3 LUBANG BROCO 1533055",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%203%20LUBANG%20BROC",
    "variants": [
      {
        "sku": "MBRSTO07",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "2050",
    "name": "STOP KONTAK 4 LUBANG BROCO 1534055",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%204%20LUBANG%20BROC",
    "variants": [
      {
        "sku": "MBRSTO08",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2051",
    "name": "STOP KONTAK 5 LUBANG BROCO 1535050",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%205%20LUBANG%20BROC",
    "variants": [
      {
        "sku": "MBRSTO09",
        "label": "PCS",
        "price": 58000,
        "unit": "PCS"
      }
    ],
    "basePrice": 58000,
    "priceLabel": "Rp58.000"
  },
  {
    "id": "2052",
    "name": "STOP KONTAK GALLEO BROCO G15155 PUTIH",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20GALLEO%20BROCO%20",
    "variants": [
      {
        "sku": "MBRSTO10",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2053",
    "name": "STOP KONTAK PIOLINE 3 LUBANG 3M",
    "category": "Listrik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20PIOLINE%203%20LUB",
    "variants": [
      {
        "sku": "MPOSTO03",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "2054",
    "name": "STOP KONTAK PIOLINE 3 LUBANG 5M",
    "category": "Listrik",
    "brand": "PIOLINE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20PIOLINE%203%20LUB",
    "variants": [
      {
        "sku": "MPOSTO01",
        "label": "PCS",
        "price": 27000,
        "unit": "PCS"
      }
    ],
    "basePrice": 27000,
    "priceLabel": "Rp27.000"
  },
  {
    "id": "2055",
    "name": "STOP KONTAK PIOLINE 4 LUBANG 3M",
    "category": "Listrik",
    "brand": "PIOLINE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20PIOLINE%204%20LUB",
    "variants": [
      {
        "sku": "MPOSTO02",
        "label": "PCS",
        "price": 24000,
        "unit": "PCS"
      }
    ],
    "basePrice": 24000,
    "priceLabel": "Rp24.000"
  },
  {
    "id": "2056",
    "name": "STOP KONTAK T + ARDE 1383055 BROCO PUTIH",
    "category": "Listrik",
    "brand": "BROCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20T%20%2B%20ARDE%201383",
    "variants": [
      {
        "sku": "MBRSTO02",
        "label": "PCS",
        "price": 26000,
        "unit": "PCS"
      }
    ],
    "basePrice": 26000,
    "priceLabel": "Rp26.000"
  },
  {
    "id": "2057",
    "name": "STOP KONTAK T VISALUX VKA8812W",
    "category": "Listrik",
    "brand": "VISALUX",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KONTAK%20T%20VISALUX%20VKA",
    "variants": [
      {
        "sku": "MVISTO01",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "2058",
    "name": "STOP KRAN ONDA JF 08 ST",
    "category": "Umum",
    "brand": "ONDA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOP%20KRAN%20ONDA%20JF%2008%20ST",
    "variants": [
      {
        "sku": "MXRSTJF08SOND",
        "label": "PCS",
        "price": 96000,
        "unit": "PCS"
      }
    ],
    "basePrice": 96000,
    "priceLabel": "Rp96.000"
  },
  {
    "id": "2059",
    "name": "STOPKONTAK OUTBOUW PANASONIC",
    "category": "Listrik",
    "brand": "PANASONIC",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=STOPKONTAK%20OUTBOUW%20PANASO",
    "variants": [
      {
        "sku": "MSTOUTPN",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2060",
    "name": "TABLE SAW RYU RTS 8",
    "category": "Power tools",
    "brand": "RYU",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TABLE%20SAW%20RYU%20RTS%208",
    "variants": [
      {
        "sku": "RYURTS8",
        "label": "PCS",
        "price": 1050000,
        "unit": "PCS"
      }
    ],
    "basePrice": 1050000,
    "priceLabel": "Rp1.050.000"
  },
  {
    "id": "2061",
    "name": "TALI BAGASI FREED",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TALI%20BAGASI%20FREED",
    "variants": [
      {
        "sku": "MTALBGFR",
        "label": "PCS",
        "price": 23000,
        "unit": "PCS"
      }
    ],
    "basePrice": 23000,
    "priceLabel": "Rp23.000"
  },
  {
    "id": "2062",
    "name": "TALI NYLON 1 MM NICHIE",
    "category": "Umum",
    "brand": "NICHIE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TALI%20NYLON%201%20MM%20NICHIE",
    "variants": [
      {
        "sku": "TALI NY 1 MM",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "2063",
    "name": "TALI TAMBANG 1MM",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TALI%20TAMBANG%201MM",
    "variants": [
      {
        "sku": "TALTAM1",
        "label": "PCS",
        "price": 6000,
        "unit": "PCS"
      }
    ],
    "basePrice": 6000,
    "priceLabel": "Rp6.000"
  },
  {
    "id": "2064",
    "name": "TALI TAMBANG NO 3 (METERAN)",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TALI%20TAMBANG%20NO%203%20(METERA",
    "variants": [
      {
        "sku": "TLTNO3",
        "label": "MTR",
        "price": 1000,
        "unit": "MTR"
      }
    ],
    "basePrice": 1000,
    "priceLabel": "Rp1.000"
  },
  {
    "id": "2065",
    "name": "TALI TAMBANG NO 6 (METERAN)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TALI%20TAMBANG%20NO%206%20(METERA",
    "variants": [
      {
        "sku": "TTMBNO6",
        "label": "MTR",
        "price": 2000,
        "unit": "MTR"
      }
    ],
    "basePrice": 2000,
    "priceLabel": "Rp2.000"
  },
  {
    "id": "2066",
    "name": "TALI TRUCK 5 MTR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TALI%20TRUCK%205%20MTR",
    "variants": [
      {
        "sku": "TALI TR 5 MT",
        "label": "PCS",
        "price": 27500,
        "unit": "PCS"
      }
    ],
    "basePrice": 27500,
    "priceLabel": "Rp27.500"
  },
  {
    "id": "2067",
    "name": "TAMBAL TALANG EKOBIT 10M",
    "category": "Umum",
    "brand": "EKOBIT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TAMBAL%20TALANG%20EKOBIT%2010M",
    "variants": [
      {
        "sku": "MEKTAM01",
        "label": "PCS",
        "price": 160000,
        "unit": "PCS"
      }
    ],
    "basePrice": 160000,
    "priceLabel": "Rp160.000"
  },
  {
    "id": "2068",
    "name": "TAMBAL TALANG LAFUMA BESAR",
    "category": "Umum",
    "brand": "LAFUMA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TAMBAL%20TALANG%20LAFUMA%20BESA",
    "variants": [
      {
        "sku": "MLATAM01",
        "label": "PCS",
        "price": 38000,
        "unit": "PCS"
      }
    ],
    "basePrice": 38000,
    "priceLabel": "Rp38.000"
  },
  {
    "id": "2069",
    "name": "TAMBAL TALANG LAFUMA KECIL",
    "category": "Umum",
    "brand": "LAFUMA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TAMBAL%20TALANG%20LAFUMA%20KECI",
    "variants": [
      {
        "sku": "MLATAM02",
        "label": "PCS",
        "price": 4500,
        "unit": "PCS"
      }
    ],
    "basePrice": 4500,
    "priceLabel": "Rp4.500"
  },
  {
    "id": "2070",
    "name": "TAMBAL TALANG MODERN",
    "category": "Umum",
    "brand": "MODERN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TAMBAL%20TALANG%20MODERN",
    "variants": [
      {
        "sku": "MMOTAM01",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "2071",
    "name": "TAMBAL TALANG SOLIGEN 3M",
    "category": "Umum",
    "brand": "SOLIGEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TAMBAL%20TALANG%20SOLIGEN%203M",
    "variants": [
      {
        "sku": "MSOTAM01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2072",
    "name": "TANG BUAYA 2 TONE 10' (BULAT)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20BUAYA%202%20TONE%2010'%20(BU",
    "variants": [
      {
        "sku": "TANG BY",
        "label": "PCS",
        "price": 34200,
        "unit": "PCS"
      }
    ],
    "basePrice": 34200,
    "priceLabel": "Rp34.200"
  },
  {
    "id": "2073",
    "name": "TANG BUAYA JEPIT ESSEN 10”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20BUAYA%20JEPIT%20ESSEN%2010",
    "variants": [
      {
        "sku": "MESTAN03",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "2074",
    "name": "TANG CRIMPING FIVE WAY TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20CRIMPING%20FIVE%20WAY%20TE",
    "variants": [
      {
        "sku": "MTETAN05",
        "label": "PCS",
        "price": 55000,
        "unit": "PCS"
      }
    ],
    "basePrice": 55000,
    "priceLabel": "Rp55.000"
  },
  {
    "id": "2075",
    "name": "TANG GANTUNG SATIN KOMBINASI 7'",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20GANTUNG%20SATIN%20KOMBIN",
    "variants": [
      {
        "sku": "TANG GNTG",
        "label": "PCS",
        "price": 26220,
        "unit": "PCS"
      }
    ],
    "basePrice": 26220,
    "priceLabel": "Rp26.220"
  },
  {
    "id": "2076",
    "name": "TANG KOMBINASI 8' YUSTAR",
    "category": "Umum",
    "brand": "YUSTAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%208'%20YUSTAR",
    "variants": [
      {
        "sku": "TANG KOM8 YS",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2077",
    "name": "TANG KOMBINASI ESSEN 6'",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20ESSEN%206'",
    "variants": [
      {
        "sku": "TANG KOM6",
        "label": "PCS",
        "price": 20636,
        "unit": "PCS"
      }
    ],
    "basePrice": 20636,
    "priceLabel": "Rp20.636"
  },
  {
    "id": "2078",
    "name": "TANG KOMBINASI ESSEN 8'",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20ESSEN%208'",
    "variants": [
      {
        "sku": "TANG KOM8",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2079",
    "name": "TANG KOMBINASI ESSEN 8”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20ESSEN%208%E2%80%9D",
    "variants": [
      {
        "sku": "MESTAN04",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "2080",
    "name": "TANG KOMBINASI GRT 8'",
    "category": "Alat tukang",
    "brand": "GRT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20GRT%208'",
    "variants": [
      {
        "sku": "MGRTAN01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2081",
    "name": "TANG KOMBINASI KODAI 8'",
    "category": "Alat tukang",
    "brand": "KODAI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20KODAI%208'",
    "variants": [
      {
        "sku": "MKOTAN01",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "2082",
    "name": "TANG KOMBINASI PLN LISTRIK 6\" HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20PLN%20LISTRI",
    "variants": [
      {
        "sku": "MHATAN00",
        "label": "PCS",
        "price": 65000,
        "unit": "PCS"
      }
    ],
    "basePrice": 65000,
    "priceLabel": "Rp65.000"
  },
  {
    "id": "2083",
    "name": "TANG KOMBINASI PLN LISTRIK 7\" HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20PLN%20LISTRI",
    "variants": [
      {
        "sku": "MHATAN01",
        "label": "PCS",
        "price": 78000,
        "unit": "PCS"
      }
    ],
    "basePrice": 78000,
    "priceLabel": "Rp78.000"
  },
  {
    "id": "2084",
    "name": "TANG KOMBINASI PLN LISTRIK 8\" HASSTON",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20PLN%20LISTRI",
    "variants": [
      {
        "sku": "MHATAN02",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "2085",
    "name": "TANG KOMBINASI RRT 7”",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20RRT%207%E2%80%9D",
    "variants": [
      {
        "sku": "TANKRRT7",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2086",
    "name": "TANG KOMBINASI TEKIRO 7”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20TEKIRO%207%E2%80%9D",
    "variants": [
      {
        "sku": "MTETAN03",
        "label": "PCS",
        "price": 63000,
        "unit": "PCS"
      }
    ],
    "basePrice": 63000,
    "priceLabel": "Rp63.000"
  },
  {
    "id": "2087",
    "name": "TANG KOMBINASI TEKIRO 8”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KOMBINASI%20TEKIRO%208%E2%80%9D",
    "variants": [
      {
        "sku": "MTETAN04",
        "label": "PCS",
        "price": 74000,
        "unit": "PCS"
      }
    ],
    "basePrice": 74000,
    "priceLabel": "Rp74.000"
  },
  {
    "id": "2088",
    "name": "TANG KUPAS KABEL GRIP-ON",
    "category": "Alat tukang",
    "brand": "GRIP-ON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KUPAS%20KABEL%20GRIP-ON",
    "variants": [
      {
        "sku": "MGRTAN02",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "2089",
    "name": "TANG KUPAS KABEL TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20KUPAS%20KABEL%20TORA",
    "variants": [
      {
        "sku": "TANG KP KBL",
        "label": "PCS",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 35000,
    "priceLabel": "Rp35.000"
  },
  {
    "id": "2090",
    "name": "TANG LANCIP 6\" HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LANCIP%206%22%20HIOSHI",
    "variants": [
      {
        "sku": "TANG LCP 6",
        "label": "PCS",
        "price": 23598,
        "unit": "PCS"
      }
    ],
    "basePrice": 23598,
    "priceLabel": "Rp23.598"
  },
  {
    "id": "2091",
    "name": "TANG LANCIP ESSEN 6”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LANCIP%20ESSEN%206%E2%80%9D",
    "variants": [
      {
        "sku": "MESTAN06",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "2092",
    "name": "TANG LANCIP FURANO 6'",
    "category": "Alat tukang",
    "brand": "FURANO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LANCIP%20FURANO%206'",
    "variants": [
      {
        "sku": "MFUTAN01",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "2093",
    "name": "TANG LANCIP MDN 6'",
    "category": "Alat tukang",
    "brand": "MDN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LANCIP%20MDN%206'",
    "variants": [
      {
        "sku": "MMDTAN01",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "2094",
    "name": "TANG LANCIP TEKIRO 6”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LANCIP%20TEKIRO%206%E2%80%9D",
    "variants": [
      {
        "sku": "MTETAN01",
        "label": "PCS",
        "price": 57000,
        "unit": "PCS"
      }
    ],
    "basePrice": 57000,
    "priceLabel": "Rp57.000"
  },
  {
    "id": "2095",
    "name": "TANG LAS 800A NICHIE MODEL AMERICA",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LAS%20800A%20NICHIE%20MODE",
    "variants": [
      {
        "sku": "TGLS800N",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2096",
    "name": "TANG LAS AMERICA XENON 800A",
    "category": "Umum",
    "brand": "NICHIE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LAS%20AMERICA%20XENON%2080",
    "variants": [
      {
        "sku": "TANG LAS",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2097",
    "name": "TANG LAS MDL ITALY 200-300A NICHIE",
    "category": "Umum",
    "brand": "NICHIE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LAS%20MDL%20ITALY%20200-30",
    "variants": [
      {
        "sku": "TANG LAS 300A",
        "label": "PCS",
        "price": 16500,
        "unit": "PCS"
      }
    ],
    "basePrice": 16500,
    "priceLabel": "Rp16.500"
  },
  {
    "id": "2098",
    "name": "TANG LAS RHINO 200 A / STANG LAS K",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20LAS%20RHINO%20200%20A%20%2F%20ST",
    "variants": [
      {
        "sku": "TANG LAS K",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "2099",
    "name": "TANG POTONG 6'",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20POTONG%206'",
    "variants": [
      {
        "sku": "TANG PTG 6",
        "label": "PCS",
        "price": 23598,
        "unit": "PCS"
      }
    ],
    "basePrice": 23598,
    "priceLabel": "Rp23.598"
  },
  {
    "id": "2100",
    "name": "TANG POTONG ABUS 6'",
    "category": "Alat tukang",
    "brand": "ABUS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20POTONG%20ABUS%206'",
    "variants": [
      {
        "sku": "MABTAN01",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2101",
    "name": "TANG POTONG ESSEN 6”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20POTONG%20ESSEN%206%E2%80%9D",
    "variants": [
      {
        "sku": "MESTAN05",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "2102",
    "name": "TANG POTONG MINI 4,5 ORANYE HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20POTONG%20MINI%204%2C5%20ORAN",
    "variants": [
      {
        "sku": "TANGMNHSH",
        "label": "PCS",
        "price": 10450,
        "unit": "PCS"
      }
    ],
    "basePrice": 10450,
    "priceLabel": "Rp10.450"
  },
  {
    "id": "2103",
    "name": "TANG POTONG TEKIRO 6”",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20POTONG%20TEKIRO%206%E2%80%9D",
    "variants": [
      {
        "sku": "MTETAN02",
        "label": "PCS",
        "price": 57000,
        "unit": "PCS"
      }
    ],
    "basePrice": 57000,
    "priceLabel": "Rp57.000"
  },
  {
    "id": "2104",
    "name": "TANG RIVET 10,5 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20RIVET%2010%2C5%20HIOSHI",
    "variants": [
      {
        "sku": "TANG RVT HS10",
        "label": "PCS",
        "price": 31464,
        "unit": "PCS"
      }
    ],
    "basePrice": 31464,
    "priceLabel": "Rp31.464"
  },
  {
    "id": "2105",
    "name": "TANG RIVET 11,5 HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20RIVET%2011%2C5%20HIOSHI",
    "variants": [
      {
        "sku": "TANG RVT HS",
        "label": "PCS",
        "price": 85000,
        "unit": "PCS"
      }
    ],
    "basePrice": 85000,
    "priceLabel": "Rp85.000"
  },
  {
    "id": "2106",
    "name": "TANG RIVET ESSEN 10”",
    "category": "Umum",
    "brand": "ESSEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20RIVET%20ESSEN%2010%E2%80%9D",
    "variants": [
      {
        "sku": "MESTAN07",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "2107",
    "name": "TANG RIVET HITAM TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20RIVET%20HITAM%20TEKIRO",
    "variants": [
      {
        "sku": "TGRVHTEK",
        "label": "PCS",
        "price": 98000,
        "unit": "PCS"
      }
    ],
    "basePrice": 98000,
    "priceLabel": "Rp98.000"
  },
  {
    "id": "2108",
    "name": "TANG RIVET MALVIN / OLIQ 10'",
    "category": "Alat tukang",
    "brand": "OLIQ",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20RIVET%20MALVIN%20%2F%20OLIQ%20",
    "variants": [
      {
        "sku": "MOLTAN01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2109",
    "name": "TANG RIVET OTOMATIS KW 1 CAMEL",
    "category": "Umum",
    "brand": "CAMEL",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANG%20RIVET%20OTOMATIS%20KW%201%20",
    "variants": [
      {
        "sku": "TANG RVT",
        "label": "PCS",
        "price": 52273,
        "unit": "PCS"
      }
    ],
    "basePrice": 52273,
    "priceLabel": "Rp52.273"
  },
  {
    "id": "2110",
    "name": "TANGGA ALUMINIUM 2 M",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TANGGA%20ALUMINIUM%202%20M",
    "variants": [
      {
        "sku": "TNGALU2M",
        "label": "PCS",
        "price": 670000,
        "unit": "PCS"
      }
    ],
    "basePrice": 670000,
    "priceLabel": "Rp670.000"
  },
  {
    "id": "2111",
    "name": "TAP AND DIES SET 40 PCS TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TAP%20AND%20DIES%20SET%2040%20PCS%20T",
    "variants": [
      {
        "sku": "MTETAP01",
        "label": "PCS",
        "price": 475000,
        "unit": "PCS"
      }
    ],
    "basePrice": 475000,
    "priceLabel": "Rp475.000"
  },
  {
    "id": "2112",
    "name": "TARIKAN 35 MOTIF MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%2035%20MOTIF%20MULLER",
    "variants": [
      {
        "sku": "MMUTAR03",
        "label": "PSG",
        "price": 190000,
        "unit": "PSG"
      }
    ],
    "basePrice": 190000,
    "priceLabel": "Rp190.000"
  },
  {
    "id": "2113",
    "name": "TARIKAN 37 MOTIF MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%2037%20MOTIF%20MULLER",
    "variants": [
      {
        "sku": "MMUTAR04",
        "label": "PSG",
        "price": 200000,
        "unit": "PSG"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "2114",
    "name": "TARIKAN 42 MOTIF MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%2042%20MOTIF%20MULLER",
    "variants": [
      {
        "sku": "MMUTAR05",
        "label": "PSG",
        "price": 220000,
        "unit": "PSG"
      }
    ],
    "basePrice": 220000,
    "priceLabel": "Rp220.000"
  },
  {
    "id": "2115",
    "name": "TARIKAN 45 MOTIF MULLER",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%2045%20MOTIF%20MULLER",
    "variants": [
      {
        "sku": "MNOTAR01",
        "label": "PSG",
        "price": 240000,
        "unit": "PSG"
      }
    ],
    "basePrice": 240000,
    "priceLabel": "Rp240.000"
  },
  {
    "id": "2116",
    "name": "TARIKAN BULAT KOM PVC",
    "category": "Umum",
    "brand": "GDO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20BULAT%20KOM%20PVC",
    "variants": [
      {
        "sku": "TR COM GDO",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "2117",
    "name": "TARIKAN KOTAK ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20KOTAK%20ISCO",
    "variants": [
      {
        "sku": "MISTAR03",
        "label": "PSG",
        "price": 60000,
        "unit": "PSG"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "2118",
    "name": "TARIKAN LACI 008 CP ONAT",
    "category": "Umum",
    "brand": "ONAT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20008%20CP%20ONAT",
    "variants": [
      {
        "sku": "MONTAR01",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "2119",
    "name": "TARIKAN LACI 008 GP ONAT",
    "category": "Umum",
    "brand": "ONAT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20008%20GP%20ONAT",
    "variants": [
      {
        "sku": "MONTAR02",
        "label": "PCS",
        "price": 7000,
        "unit": "PCS"
      }
    ],
    "basePrice": 7000,
    "priceLabel": "Rp7.000"
  },
  {
    "id": "2120",
    "name": "TARIKAN LACI 086 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20086%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR03",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2121",
    "name": "TARIKAN LACI 086 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20086%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR05",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2122",
    "name": "TARIKAN LACI 086 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20086%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR04",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2123",
    "name": "TARIKAN LACI 087 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20087%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR06",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2124",
    "name": "TARIKAN LACI 087 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20087%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR08",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2125",
    "name": "TARIKAN LACI 087 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20087%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR07",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2126",
    "name": "TARIKAN LACI 088 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20088%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR09",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2127",
    "name": "TARIKAN LACI 088 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20088%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR11",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2128",
    "name": "TARIKAN LACI 088 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20088%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR10",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2129",
    "name": "TARIKAN LACI 091 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20091%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR12",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2130",
    "name": "TARIKAN LACI 091 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20091%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR14",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2131",
    "name": "TARIKAN LACI 091 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20091%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR13",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2132",
    "name": "TARIKAN LACI 093 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20093%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR15",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2133",
    "name": "TARIKAN LACI 093 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20093%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR17",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2134",
    "name": "TARIKAN LACI 093 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20093%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR16",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2135",
    "name": "TARIKAN LACI 095 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20095%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR18",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2136",
    "name": "TARIKAN LACI 095 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20095%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR20",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2137",
    "name": "TARIKAN LACI 095 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20095%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR19",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2138",
    "name": "TARIKAN LACI 097 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20097%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR21",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2139",
    "name": "TARIKAN LACI 097 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20097%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR23",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2140",
    "name": "TARIKAN LACI 097 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20097%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR22",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2141",
    "name": "TARIKAN LACI 098 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20098%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR27",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2142",
    "name": "TARIKAN LACI 159 SN ALPHARD",
    "category": "Umum",
    "brand": "ALPHARD",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20159%20SN%20ALPHA",
    "variants": [
      {
        "sku": "MALTAR01",
        "label": "PCS",
        "price": 13000,
        "unit": "PCS"
      }
    ],
    "basePrice": 13000,
    "priceLabel": "Rp13.000"
  },
  {
    "id": "2143",
    "name": "TARIKAN LACI 186 A TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20186%20A%20TOP",
    "variants": [
      {
        "sku": "MTOTAR24",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2144",
    "name": "TARIKAN LACI 186 GP TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20186%20GP%20TOP",
    "variants": [
      {
        "sku": "MTOTAR26",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2145",
    "name": "TARIKAN LACI 186 SC TOP",
    "category": "Umum",
    "brand": "TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20186%20SC%20TOP",
    "variants": [
      {
        "sku": "MTOTAR25",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2146",
    "name": "TARIKAN LACI 3\" SN TIP TOP",
    "category": "Umum",
    "brand": "TIP TOP",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%203%22%20SN%20TIP%20TO",
    "variants": [
      {
        "sku": "MTITAR01",
        "label": "PCS",
        "price": 2500,
        "unit": "PCS"
      }
    ],
    "basePrice": 2500,
    "priceLabel": "Rp2.500"
  },
  {
    "id": "2147",
    "name": "TARIKAN LACI 4\" SN KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%204%22%20SN%20KZK",
    "variants": [
      {
        "sku": "MKZTAR03",
        "label": "PCS",
        "price": 4000,
        "unit": "PCS"
      }
    ],
    "basePrice": 4000,
    "priceLabel": "Rp4.000"
  },
  {
    "id": "2148",
    "name": "TARIKAN LACI 5\" KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%205%22%20KZK",
    "variants": [
      {
        "sku": "MKZTAR02",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2149",
    "name": "TARIKAN LACI 6\" KZK",
    "category": "Umum",
    "brand": "KZK",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%206%22%20KZK",
    "variants": [
      {
        "sku": "TR LACI 6",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "2150",
    "name": "TARIKAN LACI HUBEN TPA 12-128",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20HUBEN%20TPA%2012",
    "variants": [
      {
        "sku": "MHUTPA03",
        "label": "PCS",
        "price": 15000,
        "unit": "PCS"
      }
    ],
    "basePrice": 15000,
    "priceLabel": "Rp15.000"
  },
  {
    "id": "2151",
    "name": "TARIKAN LACI HUBEN TPA 39-128",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20HUBEN%20TPA%2039",
    "variants": [
      {
        "sku": "MHUTPA02",
        "label": "PCS",
        "price": 20000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000"
  },
  {
    "id": "2152",
    "name": "TARIKAN LACI HUBEN TPA 39-96",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20HUBEN%20TPA%2039",
    "variants": [
      {
        "sku": "MHUTPA01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2153",
    "name": "TARIKAN LACI HUBEN TPS 10-128",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20HUBEN%20TPS%2010",
    "variants": [
      {
        "sku": "MHUTPS02",
        "label": "PCS",
        "price": 10000,
        "unit": "PCS"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "2154",
    "name": "TARIKAN LACI HUBEN TPS 10-156",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20HUBEN%20TPS%2010",
    "variants": [
      {
        "sku": "MHUTPS03",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2155",
    "name": "TARIKAN LACI HUBEN TPS 10-96",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20HUBEN%20TPS%2010",
    "variants": [
      {
        "sku": "MHUTPS01",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2156",
    "name": "TARIKAN LACI LINTAH AC 888",
    "category": "Umum",
    "brand": "888",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20LINTAH%20AC%2088",
    "variants": [
      {
        "sku": "M88TAR03",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "2157",
    "name": "TARIKAN LACI LINTAH KUNING 888",
    "category": "Umum",
    "brand": "888",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20LINTAH%20KUNIN",
    "variants": [
      {
        "sku": "M88TAR02",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "2158",
    "name": "TARIKAN LACI LINTAH PUTIH 888",
    "category": "Umum",
    "brand": "888",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20LINTAH%20PUTIH",
    "variants": [
      {
        "sku": "M88TAR01",
        "label": "PCS",
        "price": 3000,
        "unit": "PCS"
      }
    ],
    "basePrice": 3000,
    "priceLabel": "Rp3.000"
  },
  {
    "id": "2159",
    "name": "TARIKAN LACI PIPA 16CM SN",
    "category": "Umum",
    "brand": "HANDLE",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20LACI%20PIPA%2016CM%20SN",
    "variants": [
      {
        "sku": "MHATAR01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2160",
    "name": "TARIKAN PINTU KAYU ISCO",
    "category": "Umum",
    "brand": "ISCO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20PINTU%20KAYU%20ISCO",
    "variants": [
      {
        "sku": "TR PTKY ISCO",
        "label": "PCS",
        "price": 60000,
        "unit": "PCS"
      }
    ],
    "basePrice": 60000,
    "priceLabel": "Rp60.000"
  },
  {
    "id": "2161",
    "name": "TARIKAN S/S 701-350 MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20S%2FS%20701-350%20MULLE",
    "variants": [
      {
        "sku": "MMUTAR01",
        "label": "PSG",
        "price": 180000,
        "unit": "PSG"
      }
    ],
    "basePrice": 180000,
    "priceLabel": "Rp180.000"
  },
  {
    "id": "2162",
    "name": "TARIKAN S/S 701-450 MULLER",
    "category": "Umum",
    "brand": "MULLER",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TARIKAN%20S%2FS%20701-450%20MULLE",
    "variants": [
      {
        "sku": "MMUTAR02",
        "label": "PSG",
        "price": 200000,
        "unit": "PSG"
      }
    ],
    "basePrice": 200000,
    "priceLabel": "Rp200.000"
  },
  {
    "id": "2163",
    "name": "TATAH FIBER GANTUNG 1 (25MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%201%20(25",
    "variants": [
      {
        "sku": "TTH FBGT 1",
        "label": "PCS",
        "price": 209475,
        "unit": "PCS"
      }
    ],
    "basePrice": 209475,
    "priceLabel": "Rp209.475"
  },
  {
    "id": "2164",
    "name": "TATAH FIBER GANTUNG 1.1/2 (38MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%201.1%2F2",
    "variants": [
      {
        "sku": "TTH FBGT 1.1/2",
        "label": "PCS",
        "price": 235980,
        "unit": "PCS"
      }
    ],
    "basePrice": 235980,
    "priceLabel": "Rp235.980"
  },
  {
    "id": "2165",
    "name": "TATAH FIBER GANTUNG 1.1/4 (32MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%201.1%2F4",
    "variants": [
      {
        "sku": "TTH FBGT 1.1/4",
        "label": "PCS",
        "price": 222300,
        "unit": "PCS"
      }
    ],
    "basePrice": 222300,
    "priceLabel": "Rp222.300"
  },
  {
    "id": "2166",
    "name": "TATAH FIBER GANTUNG 1/2 (13MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%201%2F2%20(",
    "variants": [
      {
        "sku": "TTH FBGT 1/2",
        "label": "PCS",
        "price": 183825,
        "unit": "PCS"
      }
    ],
    "basePrice": 183825,
    "priceLabel": "Rp183.825"
  },
  {
    "id": "2167",
    "name": "TATAH FIBER GANTUNG 3/4 (20MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%203%2F4%20(",
    "variants": [
      {
        "sku": "TTH FBGT 3/4",
        "label": "PCS",
        "price": 200925,
        "unit": "PCS"
      }
    ],
    "basePrice": 200925,
    "priceLabel": "Rp200.925"
  },
  {
    "id": "2168",
    "name": "TATAH FIBER GANTUNG 3/8 (10MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%203%2F8%20(",
    "variants": [
      {
        "sku": "TTH FBGT 3/8",
        "label": "PCS",
        "price": 173052,
        "unit": "PCS"
      }
    ],
    "basePrice": 173052,
    "priceLabel": "Rp173.052"
  },
  {
    "id": "2169",
    "name": "TATAH FIBER GANTUNG 5/8 (16MM) HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20FIBER%20GANTUNG%205%2F8%20(",
    "variants": [
      {
        "sku": "TTH FBGT 5/8",
        "label": "PCS",
        "price": 196650,
        "unit": "PCS"
      }
    ],
    "basePrice": 196650,
    "priceLabel": "Rp196.650"
  },
  {
    "id": "2170",
    "name": "TATAH GG KARET 1 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%201%20MAXTECH",
    "variants": [
      {
        "sku": "PAHATKY9",
        "label": "PCS",
        "price": 279000,
        "unit": "PCS"
      }
    ],
    "basePrice": 279000,
    "priceLabel": "Rp279.000"
  },
  {
    "id": "2171",
    "name": "TATAH GG KARET 1.1/2 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%201.1%2F2%20MAXT",
    "variants": [
      {
        "sku": "PAHATKY6",
        "label": "PCS",
        "price": 241364,
        "unit": "PCS"
      }
    ],
    "basePrice": 241364,
    "priceLabel": "Rp241.364"
  },
  {
    "id": "2172",
    "name": "TATAH GG KARET 1.1/4 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%201.1%2F4%20MAXT",
    "variants": [
      {
        "sku": "PAHATKY5",
        "label": "PCS",
        "price": 297000,
        "unit": "PCS"
      }
    ],
    "basePrice": 297000,
    "priceLabel": "Rp297.000"
  },
  {
    "id": "2173",
    "name": "TATAH GG KARET 1/2 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%201%2F2%20MAXTEC",
    "variants": [
      {
        "sku": "PAHATKY8",
        "label": "PCS",
        "price": 229500,
        "unit": "PCS"
      }
    ],
    "basePrice": 229500,
    "priceLabel": "Rp229.500"
  },
  {
    "id": "2174",
    "name": "TATAH GG KARET 1/4 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%201%2F4%20MAXTEC",
    "variants": [
      {
        "sku": "PAHATKY2",
        "label": "PCS",
        "price": 155455,
        "unit": "PCS"
      }
    ],
    "basePrice": 155455,
    "priceLabel": "Rp155.455"
  },
  {
    "id": "2175",
    "name": "TATAH GG KARET 3/4 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%203%2F4%20MAXTEC",
    "variants": [
      {
        "sku": "PAHATKY4",
        "label": "PCS",
        "price": 261000,
        "unit": "PCS"
      }
    ],
    "basePrice": 261000,
    "priceLabel": "Rp261.000"
  },
  {
    "id": "2176",
    "name": "TATAH GG KARET 3/8 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%203%2F8%20MAXTEC",
    "variants": [
      {
        "sku": "PAHATKY7",
        "label": "PCS",
        "price": 220500,
        "unit": "PCS"
      }
    ],
    "basePrice": 220500,
    "priceLabel": "Rp220.500"
  },
  {
    "id": "2177",
    "name": "TATAH GG KARET 5/16 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%205%2F16%20MAXTE",
    "variants": [
      {
        "sku": "PAHATKY1",
        "label": "PCS",
        "price": 157500,
        "unit": "PCS"
      }
    ],
    "basePrice": 157500,
    "priceLabel": "Rp157.500"
  },
  {
    "id": "2178",
    "name": "TATAH GG KARET 5/8 MAXTECH",
    "category": "Umum",
    "brand": "MAXTECH",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20GG%20KARET%205%2F8%20MAXTEC",
    "variants": [
      {
        "sku": "PAHATKY3",
        "label": "PCS",
        "price": 238500,
        "unit": "PCS"
      }
    ],
    "basePrice": 238500,
    "priceLabel": "Rp238.500"
  },
  {
    "id": "2179",
    "name": "TATAH KAYU 1 1/2”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20KAYU%201%201%2F2%E2%80%9D",
    "variants": [
      {
        "sku": "MNOTAT14",
        "label": "PCS",
        "price": 53000,
        "unit": "PCS"
      }
    ],
    "basePrice": 53000,
    "priceLabel": "Rp53.000"
  },
  {
    "id": "2180",
    "name": "TATAH KAYU 1 1/4”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20KAYU%201%201%2F4%E2%80%9D",
    "variants": [
      {
        "sku": "MNOTAT13",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2181",
    "name": "TATAH KAYU 1”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20KAYU%201%E2%80%9D",
    "variants": [
      {
        "sku": "MNOTAT12",
        "label": "PCS",
        "price": 40000,
        "unit": "PCS"
      }
    ],
    "basePrice": 40000,
    "priceLabel": "Rp40.000"
  },
  {
    "id": "2182",
    "name": "TATAH KAYU 1/2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAH%20KAYU%201%2F2",
    "variants": [
      {
        "sku": "MNOTAT09",
        "label": "1/2",
        "price": 30000,
        "unit": "PCS"
      },
      {
        "sku": "MNOTAT06",
        "label": "1/4",
        "price": 20000,
        "unit": "PCS"
      },
      {
        "sku": "MNOTAT11",
        "label": "3/4",
        "price": 36000,
        "unit": "PCS"
      },
      {
        "sku": "MNOTAT08",
        "label": "3/8",
        "price": 26000,
        "unit": "PCS"
      },
      {
        "sku": "MNOTAT07",
        "label": "5/16",
        "price": 23000,
        "unit": "PCS"
      },
      {
        "sku": "MNOTAT10",
        "label": "5/8",
        "price": 33000,
        "unit": "PCS"
      }
    ],
    "basePrice": 20000,
    "priceLabel": "Rp20.000 - Rp36.000"
  },
  {
    "id": "2183",
    "name": "TATAKAN AMPLAS HALUS 4'",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAKAN%20AMPLAS%20HALUS%204'",
    "variants": [
      {
        "sku": "MNOTAT01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2184",
    "name": "TATAKAN AMPLAS KASAR",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAKAN%20AMPLAS%20KASAR",
    "variants": [
      {
        "sku": "TTK AMP K",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2185",
    "name": "TATAKAN AMPLAS KASAR 4\" (2 PCS)",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAKAN%20AMPLAS%20KASAR%204%22%20(",
    "variants": [
      {
        "sku": "MNOTAT03",
        "label": "PAK",
        "price": 10000,
        "unit": "PAK"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "2186",
    "name": "TATAKAN AMPLAS KASAR 5'",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TATAKAN%20AMPLAS%20KASAR%205'",
    "variants": [
      {
        "sku": "MNOTAT04",
        "label": "PAK",
        "price": 10000,
        "unit": "PAK"
      }
    ],
    "basePrice": 10000,
    "priceLabel": "Rp10.000"
  },
  {
    "id": "2187",
    "name": "TEE TS 1” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEE%20TS%201%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJATEE03",
        "label": "PCS",
        "price": 8000,
        "unit": "PCS"
      }
    ],
    "basePrice": 8000,
    "priceLabel": "Rp8.000"
  },
  {
    "id": "2188",
    "name": "TEE TS 1/2” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEE%20TS%201%2F2%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJATEE01",
        "label": "PCS",
        "price": 3500,
        "unit": "PCS"
      }
    ],
    "basePrice": 3500,
    "priceLabel": "Rp3.500"
  },
  {
    "id": "2189",
    "name": "TEE TS 3/4” JAYA",
    "category": "Umum",
    "brand": "JAYA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEE%20TS%203%2F4%E2%80%9D%20JAYA",
    "variants": [
      {
        "sku": "MJATEE02",
        "label": "PCS",
        "price": 4500,
        "unit": "PCS"
      }
    ],
    "basePrice": 4500,
    "priceLabel": "Rp4.500"
  },
  {
    "id": "2190",
    "name": "TEMBAKAN LEM SOSIS",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEMBAKAN%20LEM%20SOSIS",
    "variants": [
      {
        "sku": "GUN SS",
        "label": "PCS",
        "price": 100000,
        "unit": "PCS"
      }
    ],
    "basePrice": 100000,
    "priceLabel": "Rp100.000"
  },
  {
    "id": "2191",
    "name": "TEMBAKAN LEM TEBAL TOKIO",
    "category": "Umum",
    "brand": "TOKIO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEMBAKAN%20LEM%20TEBAL%20TOKIO",
    "variants": [
      {
        "sku": "TMBK LEM TK",
        "label": "PCS",
        "price": 17500,
        "unit": "PCS"
      }
    ],
    "basePrice": 17500,
    "priceLabel": "Rp17.500"
  },
  {
    "id": "2192",
    "name": "TEMPAT BEKAL PUTIH",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEMPAT%20BEKAL%20PUTIH",
    "variants": [
      {
        "sku": "TMPBEKPT",
        "label": "PCS",
        "price": 11000,
        "unit": "PCS"
      }
    ],
    "basePrice": 11000,
    "priceLabel": "Rp11.000"
  },
  {
    "id": "2193",
    "name": "TEMPAT BEKAL WARNA AGOGO",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEMPAT%20BEKAL%20WARNA%20AGOGO",
    "variants": [
      {
        "sku": "BOXBKLAG",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2194",
    "name": "TEMPAT SAMPAH 10L PREM CHOCO",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TEMPAT%20SAMPAH%2010L%20PREM%20CH",
    "variants": [
      {
        "sku": "MNOTEM02",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "2195",
    "name": "TESPEN DC GNT",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TESPEN%20DC%20GNT",
    "variants": [
      {
        "sku": "TESDCGNT",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2196",
    "name": "TESPEN DC TEKIRO",
    "category": "Alat teknik",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TESPEN%20DC%20TEKIRO",
    "variants": [
      {
        "sku": "MTETES01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "2197",
    "name": "TILE GROUT NO DROP 1 KG",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TILE%20GROUT%20NO%20DROP%201%20KG",
    "variants": [
      {
        "sku": "TIGRND1",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2198",
    "name": "TIMAH SOLDER 100GR MOLLAR",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMAH%20SOLDER%20100GR%20MOLLAR",
    "variants": [
      {
        "sku": "MMOTIM02",
        "label": "PCS",
        "price": 28000,
        "unit": "PCS"
      }
    ],
    "basePrice": 28000,
    "priceLabel": "Rp28.000"
  },
  {
    "id": "2199",
    "name": "TIMAH SOLDER 50GR MOLLAR",
    "category": "Alat tukang",
    "brand": "MOLLAR",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMAH%20SOLDER%2050GR%20MOLLAR",
    "variants": [
      {
        "sku": "MMOTIM01",
        "label": "PCS",
        "price": 18000,
        "unit": "PCS"
      }
    ],
    "basePrice": 18000,
    "priceLabel": "Rp18.000"
  },
  {
    "id": "2200",
    "name": "TIMBANGAN BARANG MODERN 150KG",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20BARANG%20MODERN%201",
    "variants": [
      {
        "sku": "MMOTIM04",
        "label": "150KG",
        "price": 650000,
        "unit": "PCS"
      },
      {
        "sku": "MMOTIM05",
        "label": "300KG",
        "price": 800000,
        "unit": "PCS"
      }
    ],
    "basePrice": 650000,
    "priceLabel": "Rp650.000 - Rp800.000"
  },
  {
    "id": "2201",
    "name": "TIMBANGAN BULAT 10 KG HIOSHI ECO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20BULAT%2010%20KG%20HIO",
    "variants": [
      {
        "sku": "TIMB BLT 10KG",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "2202",
    "name": "TIMBANGAN BULAT 15 KG HIOSHI ECO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20BULAT%2015%20KG%20HIO",
    "variants": [
      {
        "sku": "TIMB BLT 15KG",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "2203",
    "name": "TIMBANGAN BULAT 20 KG HIOSHI ECO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20BULAT%2020%20KG%20HIO",
    "variants": [
      {
        "sku": "TIMB BLT 20KG",
        "label": "PCS",
        "price": 225000,
        "unit": "PCS"
      }
    ],
    "basePrice": 225000,
    "priceLabel": "Rp225.000"
  },
  {
    "id": "2204",
    "name": "TIMBANGAN BULAT 5 KG HIOSHI ECO",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20BULAT%205%20KG%20HIOS",
    "variants": [
      {
        "sku": "TIMB BLT 5KG",
        "label": "PCS",
        "price": 133000,
        "unit": "PCS"
      }
    ],
    "basePrice": 133000,
    "priceLabel": "Rp133.000"
  },
  {
    "id": "2205",
    "name": "TIMBANGAN DIGITAL MODERN 40KG",
    "category": "Power tools",
    "brand": "MODERN POWER TOOLS",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20DIGITAL%20MODERN%20",
    "variants": [
      {
        "sku": "MMOTIM03",
        "label": "PCS",
        "price": 300000,
        "unit": "PCS"
      }
    ],
    "basePrice": 300000,
    "priceLabel": "Rp300.000"
  },
  {
    "id": "2206",
    "name": "TIMBANGAN GANTUNG 100 KG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20GANTUNG%20100%20KG%20",
    "variants": [
      {
        "sku": "TIMB GNT 100KG",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "2207",
    "name": "TIMBANGAN GANTUNG 150 KG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20GANTUNG%20150%20KG%20",
    "variants": [
      {
        "sku": "TIMB GNT 150KG",
        "label": "PCS",
        "price": 165000,
        "unit": "PCS"
      }
    ],
    "basePrice": 165000,
    "priceLabel": "Rp165.000"
  },
  {
    "id": "2208",
    "name": "TIMBANGAN GANTUNG 50 KG HIOSHI",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20GANTUNG%2050%20KG%20H",
    "variants": [
      {
        "sku": "TIMB GNT 50KG",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "2209",
    "name": "TIMBANGAN PER 25 KG",
    "category": "Rumah tangga",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIMBANGAN%20PER%2025%20KG",
    "variants": [
      {
        "sku": "TIMPER25",
        "label": "25 KG",
        "price": 30000,
        "unit": "PCS"
      },
      {
        "sku": "TIMPER50",
        "label": "50 KG",
        "price": 35000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000 - Rp35.000"
  },
  {
    "id": "2210",
    "name": "TIP ON BULAT HUBEN T0-1",
    "category": "Umum",
    "brand": "HUBEN",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TIP%20ON%20BULAT%20HUBEN%20T0-1",
    "variants": [
      {
        "sku": "MHUTIP01",
        "label": "PCS",
        "price": 5000,
        "unit": "PCS"
      }
    ],
    "basePrice": 5000,
    "priceLabel": "Rp5.000"
  },
  {
    "id": "2211",
    "name": "TOOL BOX KENMASTER B380",
    "category": "Alat teknik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TOOL%20BOX%20KENMASTER%20B380",
    "variants": [
      {
        "sku": "TBKMB380",
        "label": "PCS",
        "price": 70000,
        "unit": "PCS"
      }
    ],
    "basePrice": 70000,
    "priceLabel": "Rp70.000"
  },
  {
    "id": "2212",
    "name": "TOPENG LAS AUTO GELAP MOLLAR",
    "category": "Perlengkapan Safety",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TOPENG%20LAS%20AUTO%20GELAP%20MOL",
    "variants": [
      {
        "sku": "MTPAGMLR",
        "label": "PCS",
        "price": 90000,
        "unit": "PCS"
      }
    ],
    "basePrice": 90000,
    "priceLabel": "Rp90.000"
  },
  {
    "id": "2213",
    "name": "TOPENG LAS MODEL PEGANG HASSTON 4450-010",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TOPENG%20LAS%20MODEL%20PEGANG%20H",
    "variants": [
      {
        "sku": "MHATOP02",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2214",
    "name": "TOPENG LAS TOPI HASSTON 4450-011",
    "category": "Alat teknik",
    "brand": "HASSTON",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TOPENG%20LAS%20TOPI%20HASSTON%204",
    "variants": [
      {
        "sku": "MHATOP01",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "2215",
    "name": "TREKER 2 KAKI 3” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TREKER%202%20KAKI%203%E2%80%9D%20TEKIRO",
    "variants": [
      {
        "sku": "MTETRE01",
        "label": "PCS",
        "price": 95000,
        "unit": "PCS"
      }
    ],
    "basePrice": 95000,
    "priceLabel": "Rp95.000"
  },
  {
    "id": "2216",
    "name": "TREKER 2 KAKI 4” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TREKER%202%20KAKI%204%E2%80%9D%20TEKIRO",
    "variants": [
      {
        "sku": "MTETRE02",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "2217",
    "name": "TREKER 3 KAKI 3” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TREKER%203%20KAKI%203%E2%80%9D%20TEKIRO",
    "variants": [
      {
        "sku": "MTETRE03",
        "label": "PCS",
        "price": 140000,
        "unit": "PCS"
      }
    ],
    "basePrice": 140000,
    "priceLabel": "Rp140.000"
  },
  {
    "id": "2218",
    "name": "TREKER 3 KAKI 4” TEKIRO",
    "category": "Umum",
    "brand": "TEKIRO",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TREKER%203%20KAKI%204%E2%80%9D%20TEKIRO",
    "variants": [
      {
        "sku": "MTETRE04",
        "label": "PCS",
        "price": 145000,
        "unit": "PCS"
      }
    ],
    "basePrice": 145000,
    "priceLabel": "Rp145.000"
  },
  {
    "id": "2219",
    "name": "TROWEL KAYU LANCIP",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TROWEL%20KAYU%20LANCIP",
    "variants": [
      {
        "sku": "CTK LNCP",
        "label": "PCS",
        "price": 228000,
        "unit": "PCS"
      }
    ],
    "basePrice": 228000,
    "priceLabel": "Rp228.000"
  },
  {
    "id": "2220",
    "name": "TROWEL KAYU SEGI ( CETOK KORALTEX)",
    "category": "Umum",
    "brand": "HIOSHI",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=TROWEL%20KAYU%20SEGI%20(%20CETOK%20",
    "variants": [
      {
        "sku": "CTK KRTEX",
        "label": "PCS",
        "price": 213750,
        "unit": "PCS"
      }
    ],
    "basePrice": 213750,
    "priceLabel": "Rp213.750"
  },
  {
    "id": "2221",
    "name": "VAN BELT TORA",
    "category": "Umum",
    "brand": "TORA",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=VAN%20BELT%20TORA",
    "variants": [
      {
        "sku": "VAN BELT TORA",
        "label": "PCS",
        "price": 12000,
        "unit": "PCS"
      }
    ],
    "basePrice": 12000,
    "priceLabel": "Rp12.000"
  },
  {
    "id": "2222",
    "name": "WALL LAMP LUBY LBWL 6W 3102",
    "category": "Listrik",
    "brand": "LUBY",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WALL%20LAMP%20LUBY%20LBWL%206W%2031",
    "variants": [
      {
        "sku": "WLLB3102",
        "label": "PCS",
        "price": 272000,
        "unit": "PCS"
      }
    ],
    "basePrice": 272000,
    "priceLabel": "Rp272.000"
  },
  {
    "id": "2223",
    "name": "WATERMUR ABU-ABU 1 X 3/4",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERMUR%20ABU-ABU%201%20X%203%2F4",
    "variants": [
      {
        "sku": "WATERMUR",
        "label": "PCS",
        "price": 9000,
        "unit": "PCS"
      }
    ],
    "basePrice": 9000,
    "priceLabel": "Rp9.000"
  },
  {
    "id": "2224",
    "name": "WATERMUR BENING 1 X 1/2",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERMUR%20BENING%201%20X%201%2F2",
    "variants": [
      {
        "sku": "WTRMUR1/2",
        "label": "1/2",
        "price": 2409,
        "unit": "PCS"
      },
      {
        "sku": "WTRMUR3/4",
        "label": "3/4",
        "price": 2650,
        "unit": "PCS"
      }
    ],
    "basePrice": 2409,
    "priceLabel": "Rp2.409 - Rp2.650"
  },
  {
    "id": "2225",
    "name": "WATERPASS ALUMINIUM 18”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERPASS%20ALUMINIUM%2018%E2%80%9D",
    "variants": [
      {
        "sku": "MNOWAT04",
        "label": "PCS",
        "price": 25000,
        "unit": "PCS"
      }
    ],
    "basePrice": 25000,
    "priceLabel": "Rp25.000"
  },
  {
    "id": "2226",
    "name": "WATERPASS ALUMINIUM 24”",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERPASS%20ALUMINIUM%2024%E2%80%9D",
    "variants": [
      {
        "sku": "MNOWAT05",
        "label": "PCS",
        "price": 30000,
        "unit": "PCS"
      }
    ],
    "basePrice": 30000,
    "priceLabel": "Rp30.000"
  },
  {
    "id": "2227",
    "name": "WATERPASS MAGNET ONAT 18”",
    "category": "Umum",
    "brand": "ONAT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERPASS%20MAGNET%20ONAT%2018%E2%80%9D",
    "variants": [
      {
        "sku": "MONWAT01",
        "label": "PCS",
        "price": 45000,
        "unit": "PCS"
      }
    ],
    "basePrice": 45000,
    "priceLabel": "Rp45.000"
  },
  {
    "id": "2228",
    "name": "WATERPASS MAGNET ONAT 24”",
    "category": "Umum",
    "brand": "ONAT",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERPASS%20MAGNET%20ONAT%2024%E2%80%9D",
    "variants": [
      {
        "sku": "MONWAT02",
        "label": "PCS",
        "price": 50000,
        "unit": "PCS"
      }
    ],
    "basePrice": 50000,
    "priceLabel": "Rp50.000"
  },
  {
    "id": "2229",
    "name": "WATERPASS MINI",
    "category": "Alat tukang",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WATERPASS%20MINI",
    "variants": [
      {
        "sku": "WTPSMINI",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "2230",
    "name": "WIPER GAGANG TANGGUNG HYPER",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WIPER%20GAGANG%20TANGGUNG%20HYP",
    "variants": [
      {
        "sku": "MNOWIP01",
        "label": "PCS",
        "price": 16000,
        "unit": "PCS"
      }
    ],
    "basePrice": 16000,
    "priceLabel": "Rp16.000"
  },
  {
    "id": "2231",
    "name": "WIPER LANTAI GG PANJANG HANDY",
    "category": "Plastik",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WIPER%20LANTAI%20GG%20PANJANG%20H",
    "variants": [
      {
        "sku": "WIPGGPJG",
        "label": "PCS",
        "price": 22000,
        "unit": "PCS"
      }
    ],
    "basePrice": 22000,
    "priceLabel": "Rp22.000"
  },
  {
    "id": "2232",
    "name": "WOOL WHEEL",
    "category": "Umum",
    "brand": "",
    "image": "https://placehold.co/400x300/eef1f0/1a211e?text=WOOL%20WHEEL",
    "variants": [
      {
        "sku": "MNOWOO01",
        "label": "PCS",
        "price": 6500,
        "unit": "PCS"
      }
    ],
    "basePrice": 6500,
    "priceLabel": "Rp6.500"
  }
];
