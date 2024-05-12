import Image from "next/image";
import cart from "../../../../../public/icons/cart.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Cart = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setToken(JSON.parse(userToken!));
      setIsLoggedIn(!!userToken);
      if (userToken) {
        router.push("/cart");
      } else {
        router.push("/login");
      }
    }
  };

  return (
    <Link href="/cart" onClick={handleSubmit}>
      <Image src={cart} alt="carrito" width={50} height={50} />
    </Link>
  );
};

export default Cart;
