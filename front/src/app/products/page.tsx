"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/Card/ProductCard";
import { getProducts } from "@/helpers/products/get/getProducts";
import { Product } from "@/types/product/types";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mb-40">
      <div>
        <video autoPlay muted loop className="w-full h-1/6">
          <source src="/video/banner.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      <div className="text-6xl flex justify-center font-bold p-6 max-sm:text-2xl ">
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
