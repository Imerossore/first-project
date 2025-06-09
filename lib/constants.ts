export const WEBSITE_TITLE = "Diday's Corner";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/location", label: "Location" },
];

export const FEATURED_PRODUCTS = [
  {
    name: "Sippy Mug Tumbler",
    desc: "Durable sippy mug tumbler with custom designs. Perfect for on-the-go use.",
    price: "₱299",
    category: "Mugs",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nordic Mug",
    desc: "Premium ceramic Nordic-style mug with your custom design. Perfect for gifts.",
    price: "₱349",
    category: "Mugs",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Succulent Collection",
    desc: "Handpicked succulent varieties in decorative pots. Low maintenance, high beauty.",
    price: "₱199",
    category: "Custom",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Don Conrado Wine",
    desc: "Premium Don Conrado wine with custom label option. Perfect for special occasions.",
    price: "₱899",
    category: "Custom",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1510896778225-8e3b7a4d8982?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Acrylic Keychains",
    desc: "Durable acrylic keychain with your photo or design. Great for promotional items.",
    price: "₱149",
    category: "Keychains",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Wooden Lamp",
    desc: "Custom wooden lamp with LED lighting. Perfect for home decor.",
    price: "₱899",
    category: "Custom",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Wedding Invitations",
    desc: "Elegant custom wedding invitations with premium paper and design. Make your special day memorable.",
    price: "₱89",
    category: "Cards",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Birthday Cards",
    desc: "Personalized birthday invitation cards with custom themes and colors. Perfect for any age celebration.",
    price: "₱49",
    category: "Cards",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=400&q=80",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    name: "Personalized Mugs",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80",
    items: ["Sippy Mug Tumbler", "Clear Mug", "Nordic Mug"],
  },
  {
    name: "Wine & Beverages",
    image:
      "https://images.unsplash.com/photo-1510896778225-8e3b7a4d8982?auto=format&fit=crop&w=400&q=80",
    items: ["Fruit Wine", "Don Conrado Wine", "Shot Glass"],
  },
  {
    name: "Succulents & Plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80",
    items: ["Various Succulents", "Garden Decor", "Plant Care"],
  },
  {
    name: "Magnets & Keychains",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80",
    items: [
      "ATM-Size Ref Magnets",
      "Face & Number Cut Magnet",
      "Acrylic Magnet",
      "Acrylic Keychains",
    ],
  },
  {
    name: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    items: [
      "Wooden Mirrors",
      "Wooden Lamp",
      "Floating Frame Rosary",
      "Bamboo Fan",
    ],
  },
  {
    name: "Custom Accessories",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    items: [
      "Customized Coin Purse",
      "Candles (Multiple Sizes)",
      "Custom Event Items",
    ],
  },
  {
    name: "Invitations & Cards",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
    items: [
      "Custom Invitations",
      "Vow Booklets",
      "Digital Invitations",
      "Event Cards",
    ],
  },
];
export const DELIVERY_OPTIONS = [
  {
    icon: "Users",
    title: "Meet-ups",
    description: "Pacific, SM, City Mall Sta. Rosa & nearby areas",
    color: "blue",
    bgGradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: "Truck",
    title: "Door-to-Door",
    description: "Personal Rider / Diday's Service",
    color: "amber",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "bg-[#823613]",
  },
  {
    icon: "Bus",
    title: "Bus Shipment",
    description: "Victory Liner, 5 Star, Genesis & more (No COD)",
    color: "purple",
    bgGradient: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-500",
  },
  {
    icon: "MapPin",
    title: "Pick-up",
    description: "P1, Brgy. Sto. Niño, Cabanatuan City",
    color: "orange",
    bgGradient: "from-orange-50 to-red-50",
    iconBg: "bg-orange-500",
  },
];

export const FAQS = [
  {
    question: "How do I place an order?",
    answer:
      "Browse our collection and contact us via WhatsApp (0936-850-7025) or Facebook to place your order with customization details.",
  },
  {
    question: "What delivery options do you offer?",
    answer:
      "We offer meetups (Pacific, SM, City Mall Sta. Rosa), door-to-door delivery, bus shipment (Victory Liner, 5 Star, Genesis), pickup in Cabanatuan, and nationwide shipping.",
  },
  {
    question: "Can I customize any product?",
    answer:
      "Yes! Most products can be personalized. Choose your design for mugs, magnets, keychains, invitations, and more.",
  },
  {
    question: "What's the early reservation discount?",
    answer:
      "Early reservations get 3-10% OFF plus freebies! Contact us to learn more about current promotions.",
  },
];
