export interface Gift {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
}

export const gifts: Gift[] = [
  {
    id: "1",
    name: "Silver Pooja Thali Set",
    price: 2499,
    category: "Religious Items",
    description: "Exquisite silver-plated pooja thali with traditional design",
    image: "/src/assets/gift-1.jpg",
    fullDescription: "This beautiful silver-plated pooja thali set is perfect for your Durga Puja celebrations. Crafted with intricate traditional designs, this set includes a decorative thali, diyas, kumkum holder, and accessories. The elegant finish and attention to detail make it an ideal gift for loved ones or a precious addition to your pooja room.",
    features: [
      "Premium silver-plated finish",
      "Complete pooja accessories included",
      "Traditional handcrafted design",
      "Perfect for Durga Puja rituals",
      "Comes in elegant gift packaging"
    ]
  },
  {
    id: "2",
    name: "Designer Silk Saree",
    price: 4999,
    category: "Clothing",
    description: "Premium silk saree with golden border and traditional motifs",
    image: "/src/assets/gift-2.jpg",
    fullDescription: "Celebrate Durga Puja in style with this stunning designer silk saree. Featuring a vibrant color palette with intricate golden border work and traditional motifs, this saree embodies elegance and cultural heritage. Made from pure silk, it drapes beautifully and is perfect for festive occasions.",
    features: [
      "100% pure silk fabric",
      "Handwoven golden border",
      "Traditional Indian motifs",
      "Includes matching blouse piece",
      "Dry clean recommended"
    ]
  },
  {
    id: "3",
    name: "Brass Decorative Diya",
    price: 899,
    category: "Home Decor",
    description: "Handcrafted brass diya with intricate traditional carvings",
    image: "/src/assets/gift-3.jpg",
    fullDescription: "Illuminate your home this Durga Puja with this exquisite handcrafted brass diya. Featuring intricate traditional carvings and a sturdy base, this diya adds a warm, festive glow to any space. Perfect for daily pooja or special occasions, it combines functionality with artistic beauty.",
    features: [
      "Pure brass construction",
      "Handcrafted intricate designs",
      "Traditional authentic patterns",
      "Stable base for safety",
      "Easy to clean and maintain"
    ]
  },
  {
    id: "4",
    name: "Premium Sweets Gift Box",
    price: 1299,
    category: "Food & Sweets",
    description: "Assorted traditional Indian sweets in festive packaging",
    image: "/src/assets/gift-4.jpg",
    fullDescription: "Spread joy this Durga Puja with our premium assorted sweets gift box. Featuring a delightful selection of traditional Indian mithai including kaju katli, gulab jamun, rasgulla, and more. Each sweet is freshly made using authentic recipes and premium ingredients, presented in beautiful festive packaging.",
    features: [
      "Assorted traditional sweets",
      "Fresh and high-quality ingredients",
      "Beautiful festive packaging",
      "Perfect gift for loved ones",
      "Hygienically prepared and packed"
    ]
  },
  {
    id: "5",
    name: "Goddess Durga Idol",
    price: 3499,
    category: "Religious Items",
    description: "Handcrafted Durga Maa idol with vibrant traditional colors",
    image: "/src/assets/gift-5.jpg",
    fullDescription: "Bring divine blessings to your home with this magnificent handcrafted Goddess Durga idol. Featuring traditional Bengali style craftsmanship with vibrant colors and intricate detailing, this idol captures the powerful grace of Maa Durga. Perfect for pooja pandals, home altars, or as a meaningful gift.",
    features: [
      "Traditional Bengali craftsmanship",
      "Vibrant hand-painted colors",
      "Detailed facial expressions",
      "Sturdy and durable construction",
      "Comes with ceremonial accessories"
    ]
  },
  {
    id: "6",
    name: "Traditional Jewelry Set",
    price: 5999,
    category: "Jewelry",
    description: "Gold-plated jewelry set with necklace, earrings, and bangles",
    image: "/src/assets/gift-6.jpg",
    fullDescription: "Complete your festive look with this stunning traditional jewelry set. Featuring a beautifully crafted gold-plated necklace, matching earrings, and elegant bangles adorned with red stones. This set combines traditional design elements with contemporary styling, perfect for Durga Puja celebrations and other special occasions.",
    features: [
      "Premium gold-plated finish",
      "Complete jewelry set",
      "Embedded with premium stones",
      "Adjustable and comfortable fit",
      "Comes in luxury gift box"
    ]
  }
];
