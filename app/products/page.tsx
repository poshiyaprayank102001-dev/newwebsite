import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductHeader from "@/components/ProductHeader";
import ProductList from "@/components/ProductList";
import ProductGallery from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "Our Products | Bint Website",
  description: "Discover our premium collection of innovative products designed to enhance your lifestyle",
};

export default function ProductsPage() {
  // Aggregate all gallery images
  const allGalleryImages = products.reduce<string[]>((acc, product) => {
    if (product.gallery) {
      return [...acc, ...product.gallery];
    }
    return acc;
  }, []);

  return (
    <main className="min-h-screen bg-black py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <ProductHeader />
        <ProductList products={products} />
        {allGalleryImages.length > 0 && <ProductGallery images={allGalleryImages} />}
      </div>
    </main>
  );
}
