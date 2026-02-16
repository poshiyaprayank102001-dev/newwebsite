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
    <div className="w-full overflow-hidden">
      <div className="container mx-auto max-w-[1600px]">
        <ProductHeader />
        <ProductList products={products} />
        {allGalleryImages.length > 0 && <ProductGallery images={allGalleryImages} />}
      </div>
    </div>
  );
}
