export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Bayou Bass Tee",
    price: 34.99,
    category: "T-Shirts",
    description:
      "Lightweight cotton tee featuring a hand-drawn largemouth bass design. Perfect for a day on the water or kicking back at the camp.",
    image: "/images/product-1.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Marsh Runner Hoodie",
    price: 64.99,
    category: "Hoodies",
    description:
      "Heavyweight hoodie built for cool mornings on the marsh. Features a fleece-lined hood and embroidered Reel Fishing logo.",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "Delta Camo Cap",
    price: 28.99,
    category: "Hats",
    description:
      "Structured trucker cap with Louisiana delta camo pattern and mesh back for ventilation on hot southern days.",
    image: "/images/product-3.jpg",
    badge: "New",
  },
  {
    id: 4,
    name: "Redfish Run Tank",
    price: 29.99,
    category: "T-Shirts",
    description:
      "Moisture-wicking performance tank with a bold redfish graphic. Designed to keep you cool when the sun is blazing.",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    name: "Cajun Cast Long Sleeve",
    price: 44.99,
    category: "Long Sleeves",
    description:
      "UPF 50+ sun protection long sleeve with Cajun-inspired artwork. Built for all-day fishing in the Louisiana heat.",
    image: "/images/product-5.jpg",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Swamp Fox Flannel",
    price: 59.99,
    category: "Flannels",
    description:
      "Brushed cotton flannel in mossy earth tones. A southern staple for cool evenings around the fire after a long day of fishing.",
    image: "/images/product-6.jpg",
  },
  {
    id: 7,
    name: "Trophy Catch Snapback",
    price: 32.99,
    category: "Hats",
    description:
      "Flat-brim snapback with leather Reel Fishing patch. Classic western-meets-coastal style for any occasion.",
    image: "/images/product-7.jpg",
  },
  {
    id: 8,
    name: "Cypress Creek Jacket",
    price: 89.99,
    category: "Outerwear",
    description:
      "Water-resistant waxed canvas jacket inspired by the cypress-lined creeks of Louisiana. Built tough for the outdoors.",
    image: "/images/product-8.jpg",
    badge: "Premium",
  },
];

export const categories = [
  "All",
  "T-Shirts",
  "Long Sleeves",
  "Hoodies",
  "Hats",
  "Flannels",
  "Outerwear",
];
