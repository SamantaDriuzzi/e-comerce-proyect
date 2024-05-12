"use client";
import { BuyProducts } from "@/types/product/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import trash from "../../../public/icons/trash.svg";
import ticket from "../../../public/icons/ticket.svg";
import { createOrder } from "@/helpers/orders/orders";
import { userSession } from "@/types/user/user";
import carrito from "../../../public/images/cart.svg";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import customToastOptions from "@/helpers/alert/alert";

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = useState<BuyProducts[]>([]);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [token, setToken] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setToken(JSON.parse(userToken!));
    }

    // Obtener el carrito del almacenamiento local al cargar el componente
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Función para aumentar la cantidad de un producto en el carrito
  const handleIncreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // Función para disminuir la cantidad de un producto en el carrito
  const handleDecreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity--;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // Función para calcular el total de la compra

  const availableCoupons = [
    { code: "DESC10", discount: 10 }, // 10% de descuento
    { code: "SALE20", discount: 20 }, // 20% de descuento
  ];
  const applyCouponDiscount = () => {
    const coupon = availableCoupons.find(
      (coupon) => coupon.code === discountCode
    );
    if (coupon) {
      setDiscount(coupon.discount);
    } else {
      setDiscount(0); // Restablece el descuento si el cupón no es válido
    }
  };
  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discountAmount = subtotal * (discount / 100);
    return subtotal - discountAmount;
  };
  // Función para manejar el cambio en el descuento
  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(event.target.value);
  };

  const handleRedirect = () => {
    router.push("/products");
  };

  async function handleCheckout() {
    try {
      const orderProduct = new Set(cart.map((item) => item.productId));

      await createOrder(Array.from(orderProduct), token?.token || "");

      setCart([]);
      localStorage.removeItem("cart");
      setDiscount(0);
      toast.success("¡Gracias por tu compra!");
      setTimeout(() => {
        router.push("/dashboard/orders");
      }, 2000);
    } catch (error) {
      toast.error(
        "Ha ocurrido un error al procesar la orden. Por favor, inténtalo de nuevo más tarde."
      );
    }
  }

  return (
    <div className="flex flex-row min-h-screen mt-20 ">
      <div className=" bg-orangeBase h-900 top-0 right-0 w-1/2 absolute z-0"></div>

      {/* Contenedor para los productos */}
      <div className="flex flex-col gap-8 flex-grow w-3/4 z-30">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            // Tarjeta horizontal para cada producto
            <div
              key={index}
              className="flex items-center gap-8 bg-blue p-4 rounded-md shadow-md w-3/6 ml-14"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Precio: ${item.price}</p>
              </div>
              <div className="flex items-center gap-4 bg-orangeBase  hover:bg-orange-full text-gray-800 font-bold py-2 px-4 rounded-l">
                <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(index)}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(index)}>
                <Image src={trash} alt="Eliminar" width={30} height={30} />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center ml-20">
            <Image src={carrito} alt="carrito" width={300} height={300} />
            <div className="text-xl font-bold">
              {" "}
              No tienes productos agregados al carrito
            </div>
            <button
              onClick={handleRedirect}
              className="w-32 mt-4 text-xl font-bold p-3 bg-blue h-auto flex items-center justify-center rounded-full hover:bg-bluePlus"
            >
              Comprar
            </button>
          </div>
        )}
      </div>

      {/* Contenedor para el resumen de la compra en el lado derecho */}
      <div className="flex flex-col justify-start p-4 w-2/4 z-10 gap-8">
        <div className="text-4xl font-bold mb-4">Resumen de su compra:</div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={ticket} alt="ticket" width={30} height={30} />
            <p className="text-xl font-bold">¿Tienes un cupon de descuento?</p>
          </div>
          <label htmlFor="discountInput" className="text-lg font-bold">
            Aplicar (%):
          </label>
          <br />
          <input
            type="text"
            id="discountInput"
            value={discountCode}
            onChange={handleDiscountChange}
            className="border border-gray-300 rounded-md px-2 py-1 w-1/4 bg-gradient-to-r from-bluePlus to-blue hover:bg-orangeFull"
          />
          <button
            onClick={applyCouponDiscount}
            className="w-auto mt-4 text-lg font-bold p-2  h-auto flex items-center justify-center rounded-full bg-gradient-to-r from-bluePlus to-blue hover:bg-orangeFull"
          >
            Aplicar
          </button>
        </div>
        <div className="mt-4 z-50">
          <p className="text-lg font-semibold">
            Subtotal: ${cart.reduce((total, item) => total + item.price, 0)}
          </p>
          <hr className="my-2" />
          <p className="text-2xl font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
          <button
            className="w-auto mt-4 text-xl font-bold p-3  h-auto flex items-center justify-center rounded-full bg-gradient-to-r from-bluePlus to-blue hover:bg-orangeFull"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
          <ToastContainer {...customToastOptions} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
