"use client";

import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import registerSvg from "/public/images/register.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import customToastOptions from "@/helpers/alert/alert";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const formFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Correo Electronico",
      label: "Email:",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña:",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((data) => {
          const { token, user } = data;
          localStorage.setItem(
            "userSession",
            JSON.stringify({ token: token, userData: user })
          );
        });
      toast.success("Ingresaste con éxito");
      setTimeout(() => {
        router.push("/products");
      }, 5000);
    } catch (error: any) {
      toast.error(error.response?.data.message || "Error al registrar usuario");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:flex-row lg:items-start p-5 lg:p-20">
      <div className=" bg-blue h-900 top-0 right-0 w-1/2 absolute z-0"></div>
      <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        className="w-full max-w-4xl z-10"
      >
        <div className="w-full flex items-center justify-center p-20 gap-10">
          <div className="w-full lg:w-1/2">
            <Image src={registerSvg} alt="logo" width={600} height={600} />
          </div>
          <div>
            <div className="text-3xl font-bold mb-1 text-orange">
              Hola de nuevo!
            </div>
            <div className="text-sm text-gray-500 mb-4 font-bold">
              INGRESA PARA CONTINUAR
            </div>
            {formFields.map((field) => (
              <div key={field.name} className="mb-4">
                <label htmlFor={field.name} className="mb-2 font-bold">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof LoginForm]}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
            ))}

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!form.email || !form.password}
              className="bg-orange hover:bg-orangeFull text-black font-bold py-2 px-6 rounded-lg"
            >
              Ingresar
            </button>
            <div className="text-sm text-gray-400 font-bold pt-2">
              ¿NO ESTAS REGISTRADO?
            </div>
            <div className="text-sm hover:text-orangeFull text-orange font-bold  ">
              <Link href="/register">REGISTRATE</Link>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer {...customToastOptions} />
    </div>
  );
};

export default Login;
