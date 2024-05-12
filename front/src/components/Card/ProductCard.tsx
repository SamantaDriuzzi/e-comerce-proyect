import Image from "next/image";
import { Product } from "@/types/product/types";
import Button from "./Button";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col justify-between w-72 bg-blue shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl place-content-between">
      <div className="w-72 h-96 flex flex-col justify-center">
        <Image
          src={product.image}
          alt={product.name}
          className="p-2 "
          width={300}
          height={300}
        />
      </div>
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">
          Stock: {product.stock}
        </span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            $ {product.price}
          </p>
          <Button product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
