import topProducts from "@/helpers/products/topProducts";
import ProductCard from "../Card/ProductCard";
import { Tiro_Devanagari_Sanskrit } from "next/font/google";

const TiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["latin"],
});

const TopProducts = () => {
  const products = topProducts;
  return (
    <div className="mt-20 p-4">
      <div
        className="text-5xl p-5 flex justify-center"
        style={{ fontFamily: TiroDevanagariSanskrit.className }}
      >
        Los productos mas vendidos
      </div>
      <div className="flex flex-wrap items-center p-5 justify-center gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default TopProducts;
