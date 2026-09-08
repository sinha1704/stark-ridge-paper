export interface PaperCardItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  likes: number;
  specs: {
    gsm: string;
    finish: string;
    use: string;
    eco: string;
  };
}

export const CATEGORIES = [
  { id: "all", label: "All Papers" },
  { id: "kraft", label: "Kraft Liners" },
  { id: "fluting", label: "Corrugated Fluting" },
  { id: "luxury", label: "Luxury Rigid Board" },
  { id: "barrier", label: "Eco Food Barrier" },
  { id: "cups", label: "Cup & Bowl Stock" },
  { id: "custom", label: "Custom Embossed" },
];

export const PAPER_ITEMS: PaperCardItem[] = [
  {
    id: "1",
    title: "Virgin Kraft Liner",
    category: "kraft",
    tag: "100% Recyclable",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    likes: 1284,
    specs: {
      gsm: "120 - 450 GSM",
      finish: "Natural Unbleached Kraft",
      use: "Cartons & Heavy Sacks",
      eco: "FSC Mix Certified",
    },
  },
  {
    id: "2",
    title: "Corrugated Fluting Medium",
    category: "fluting",
    tag: "High Crush Strength",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    likes: 890,
    specs: {
      gsm: "90 - 180 GSM",
      finish: "High-Rigidity Ribbed",
      use: "Shipping Box Flutes",
      eco: "100% Recycled Fibers",
    },
  },
  {
    id: "3",
    title: "Tactile Artisan Rigid Board",
    category: "luxury",
    tag: "Zero Plastic",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    likes: 2150,
    specs: {
      gsm: "600 - 1800 GSM",
      finish: "Velvet Matte Smooth",
      use: "Jewelry & Perfume Boxes",
      eco: "Acid-Free Archival",
    },
  },
  {
    id: "4",
    title: "Aqueous Barrier Food Board",
    category: "barrier",
    tag: "Food Safe (No PE)",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    likes: 1640,
    specs: {
      gsm: "210 - 350 GSM",
      finish: "Greaseproof Dispersion",
      use: "Bakery & Takeout Bowls",
      eco: "Compostable EN 13432",
    },
  },
  {
    id: "5",
    title: "Insulated Eco Cupstock",
    category: "cups",
    tag: "Home Compostable",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    likes: 954,
    specs: {
      gsm: "190 - 320 GSM",
      finish: "Heat-Sealable Silk",
      use: "Hot Coffee & Soup Cups",
      eco: "Plastic-Free Polymer",
    },
  },
  {
    id: "6",
    title: "Custom Textured Parchment",
    category: "custom",
    tag: "Bespoke Watermark",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    likes: 1420,
    specs: {
      gsm: "45 - 200 GSM",
      finish: "Antique Linen Fleck",
      use: "Brand Apparel & Wraps",
      eco: "Hemp & Cotton Pulp",
    },
  },
];
