export type Product = {
  id: number;
  name: string;
  description: string;
  extraDetails?: string; // Additional details for the expanded layout
  image: string;
  features: string[];
  gallery?: string[]; // Added gallery property for the new feature
};

export const products: Product[] = [
  {
    id: 1,
    name: "Zink",
    description: "Premium zinc-based material crafted with precision and excellence. Zink offers exceptional durability, corrosion resistance, and a distinctive metallic finish. Perfect for architectural applications, industrial components, and premium product designs. Our Zink material combines strength with elegance, making it ideal for projects that demand both functionality and aesthetic appeal.",
    extraDetails: "Zink's unique self-healing properties make it an ideal choice for exterior cladding in harsh environments. Over time, it develops a beautiful natural patina that protects the material from corrosion, ensuring longevity without maintenance. The malleability of our Zink allows for intricate forming and detailing, enabling architects to achieve complex geometries and fluid forms previously thought impossible with metal.",
    image: "/img1.png",
    features: ["Premium Zinc Alloy", "Corrosion Resistant", "Durable & Long-lasting"],
    gallery: [
      "/img1.png",
      "/img2.png",
      "/img3.jpg",
      "/img4.jpg",
    ]
  },
  // {
  //   id: 2,
  //   name: "Mixed metals",
  //   description: "Innovative composite material combining multiple metal alloys for superior performance. Mixed metals technology creates a unique blend that enhances strength, flexibility, and visual appeal. This advanced material solution offers the best properties of different metals, resulting in products that excel in both form and function. Ideal for modern manufacturing and design applications.",
  //   image: "https://picsum.photos/600/400?random=20",
  //   features: ["Multi-Alloy Composition", "Enhanced Strength", "Versatile Applications"],
  //   gallery: [
  //       "https://picsum.photos/600/400?random=21",
  //       "https://picsum.photos/600/400?random=22",
  //       "https://picsum.photos/600/400?random=23",
  //       "https://picsum.photos/600/400?random=24",
  //   ]
  // },
  // {
  //   id: 3,
  //   name: "zurik",
  //   description: "Cutting-edge material innovation designed for the future. Zurik represents the next generation of metal composites, featuring advanced engineering and premium quality. With exceptional thermal properties, superior finish quality, and unmatched reliability, Zurik is the choice for demanding applications where excellence is non-negotiable. Experience the perfect fusion of technology and craftsmanship.",
  //   image: "https://picsum.photos/600/400?random=30",
  //   features: ["Advanced Composite", "Premium Finish", "High Performance"],
  //   gallery: [
  //       "https://picsum.photos/600/400?random=31",
  //       "https://picsum.photos/600/400?random=32",
  //       "https://picsum.photos/600/400?random=33",
  //       "https://picsum.photos/600/400?random=34",
  //   ]
  // },
];
