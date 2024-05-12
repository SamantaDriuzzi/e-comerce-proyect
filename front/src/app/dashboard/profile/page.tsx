"use client";
import { userSession } from "@/types/user/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import userProfile from "../../../../public/icons/userProfile.svg";

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<userSession | null>(null);

  useEffect(() => {
    // Obtener los datos del usuario del localStorage
    const userSession = localStorage.getItem("userSession");
    if (userSession) {
      // Convertir los datos del usuario de formato JSON a objeto JavaScript
      const userData = JSON.parse(userSession).userData;
      // Establecer los datos del usuario en el estado local
      setUserData(userData);
    } else {
      // Si no se encuentran datos de usuario en el localStorage, redirigir al usuario a la página de inicio de sesión
      router.push("dashboard/login");
    }
  }, []);
  return (
    <div className="mb-20">
      {userData ? (
        <div className="s max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-yellow-100 shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <Image
              className="object-cover object-top w-full"
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <Image
              className="object-cover object-center h-32"
              width={400}
              height={400}
              src={userProfile}
              alt="Icono Perfil"
            />
          </div>
          <div className="text-center mt-2 ">
            <h2 className="font-semibold">{userData.name}</h2>
            <p className="text-gray-500">Cliente en SHOP</p>
          </div>
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22V2h12v4.923h-1V5.5H6v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H6zm0 0V3zm0 15V21zm8.95-4.192l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707z"
                />
              </svg>
              <div>{userData.phone}</div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"
                />
              </svg>
              <div>{userData.address}</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="M32 13.08v13.63l-7.36-7.36l-1.41 1.41L30.46 28H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0l8.83-8.78a7.44 7.44 0 0 1-2-.85l-8.26 8.21L5.31 8h17.5a7.49 7.49 0 0 1-.31-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.2a7.45 7.45 0 0 1-2 .88"
                  className="clr-i-outline--badged clr-i-outline-path-1--badged"
                />
                <circle
                  cx="30"
                  cy="5.86"
                  r="5"
                  fill="currentColor"
                  className="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              <div>{userData.email}</div>
            </li>
          </ul>
          <div className="p-4 border-t mx-8 mt-2">
            <button
              onClick={() => router.push("/products")}
              className="w-1/2 block mx-auto rounded-full bg-orange hover:bg-orangeFull font-semibold text-black px-6 py-2"
            >
              Seguir comprando
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Profile;
