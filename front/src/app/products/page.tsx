import ProductCard from "@/components/Card/ProductCard";
import { getProducts } from "@/helpers/products/get/getProducts";
import { Product } from "@/types/product/types";
import { Tiro_Devanagari_Sanskrit } from "next/font/google";

const TiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["latin"],
});
export const Products = async () => {
  const products = await getProducts();

  return (
    <div className="mb-40">
      <div>
        <video autoPlay muted loop className="w-full h-1/6">
          <source src="/video/banner.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      <div
        style={{ fontFamily: TiroDevanagariSanskrit.className }}
        className="text-6xl flex justify-center font-bold p-6 max-sm:text-2xl "
      >
        Todos los productos en tu tienda
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-10 px-60">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
