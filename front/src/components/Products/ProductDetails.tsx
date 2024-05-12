"use client";
import { Product } from "@/types/product/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import customToastOptions from "@/helpers/alert/alert";

const ProductDetails = ({ product }: { product: Product }) => {
  const router = useRouter();
  const [userSession, setUserSession] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
    }
  }, []);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    if (!userSession) {
      toast.error("Debes estar logueado para comprar");
      router.push("/register");
      return;
    }

    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };

    // Obtener el carrito actual del localStorage
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Agregar el nuevo item al carrito
    const updatedCart = [...currentCart, cartItem];

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Mostrar un mensaje de éxito

    toast.success("Producto agregado al carrito");

    setTimeout(() => {
      router.push("/products");
    }, 2000);
  };

  return (
    <div className="flex justify-center min-h-screen p-4">
      <div className=" bg-blue h-900 top-0 left-0 w-1/2 absolute z-0"></div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 w-full">
        <div className="w-full md:w-1/4 relative z-10">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col p-6 z-10 w-full md:w-1/2 gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="text-4xl font-bold text-red-700">
            ${product.price}
          </div>
          <div className="text-lg font-medium text-gray-900 mt-2">
            {product.description}
          </div>
          <div className="flex items-baseline mt-4 mb-6 ">
            <div className="space-x-2 flex bg-orange ">
              <button
                type="button"
                onClick={decrement}
                className="bg-orange hover:bg-orange-full text-gray-800 font-bold py-2 px-4 rounded-l"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="focus:outline-none text-center w-8 bg-orange  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              />
              <button
                type="button"
                onClick={increment}
                className="bg-orange  text-gray-800 font-bold py-2 px-4 rounded-r"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            type="submit"
            className="text-dark font-bold p-2 rounded-lg bg-orange hover:bg-orangeFull"
          >
            Agregar al carrito
          </button>
          <ToastContainer {...customToastOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
