"use client";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handlePageChange = (page: string) => {
    router.push(`/dashboard/${page}`);
    setShowOptions(false); // Ocultar las opciones después de hacer clic en una opción
  };

  return (
    <>
      <div className="relative">
        <div onClick={toggleOptions}>
          <Image
            src="/icons/user.svg"
            width={50}
            height={50}
            alt="Icono de usuario"
            className="cursor-pointer"
          />
        </div>
        {showOptions && (
          <div className="absolute flex flex-col gap-4 right-0 mt-2 w-48 h-64 bg-blue rounded-md shadow-lg z-40">
            <button
              className="text-xl font-semibold hover:bg-orangeBase p-2"
              onClick={() => handlePageChange("login")}
            >
              INICIAR SESIÓN
            </button>
            <button
              className="text-xl font-semibold hover:bg-orangeBase p-2"
              onClick={() => handlePageChange("profile")}
            >
              MI PERFIL
            </button>
            <button
              className="text-xl font-semibold hover:bg-orangeBase p-2"
              onClick={() => handlePageChange("orders")}
            >
              MIS COMPRAS
            </button>
            <button
              className="text-xl font-semibold hover:bg-orangeBase p-2"
              onClick={() => handlePageChange("logout")}
            >
              CERRAR SESIÓN
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
