"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("cart");
    router.push("/dashboard/login");
  }, []);

  return null;
};

export default Logout;
