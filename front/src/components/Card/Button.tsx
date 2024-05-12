"use client";

import { Product } from "@/types/product/types";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export const Button: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  const handleAdd = () => {
    router.push(`/products/${product.id}`);
  };
  return (
    <button
      onClick={handleAdd}
      className="text-xl font-bold ml-auto bg-orange w-20 h-10 flex items-center justify-center rounded-full hover:bg-orangeFull"
    >
      Ver +
    </button>
  );
};
export default Button;
