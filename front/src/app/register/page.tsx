"use client";
import { FormEvent, useState } from "react";
import ReactPasswordChecklist from "react-password-checklist";
import validate from "@/helpers/products/form/validate";
import Image from "next/image";
import registerSvg from "../../../public/images/register.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import customToastOptions from "@/helpers/alert/alert";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FormFields {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

interface Errors {
  [key: string]: string;
}

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    const newErrors = validate({ fieldName: name, fieldValue: value }, errors);
    setErrors(newErrors);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;
    const newErrors: Errors = {};

    Object.keys(form).forEach((fieldName) => {
      const fieldErrors = validate(
        { fieldName, fieldValue: form[fieldName as keyof FormFields] },
        newErrors
      );
      if (Object.keys(fieldErrors).length > 0) {
        valid = false;
        newErrors[fieldName] = fieldErrors[fieldName];
      }
    });

    setErrors(newErrors);

    if (valid) {
      try {
        fetch(`${API_URL}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify(form),
        }).then((response) => response.json());

        toast.success("Registro exitoso ✅");
        setTimeout(() => {
          router.push("/dashboard/login");
        }, 3000);
      } catch (error: any) {
        throw new Error(error);
      }
    } else {
      toast.error("❗ Hay errores en el formulario.");
    }
  };
  const formFields = [
    { label: "Nombre:", name: "name", type: "text", required: true },
    {
      label: "Número de telefono:",
      name: "phone",
      type: "number",
      required: true,
    },
    {
      label: "Dirección:",
      name: "address",
      type: "text",
      required: true,
    },
    { label: "Email:", name: "email", type: "email", required: true },
    {
      label: "Contraseña:",
      name: "password",
      type: "password",
      required: true,
    },
  ];

  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setFullYear(today.getFullYear() - 100);
    return minDate.toISOString().split("T")[0];
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:flex-row lg:items-start p-5 lg:p-20 mb-24">
      <div className=" bg-blue h-1000 top-0 right-0 w-1/2 absolute z-0"></div>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl z-10">
        <div className="flex flex-col lg:flex-row gap-10 z-10 ">
          <div className="w-full lg:w-1/2">
            <Image src={registerSvg} alt="logo" width={600} height={600} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-3xl font-bold mb-4 text-orange">
              Registrarse
            </div>
            <div className="text-sm text-gray-500 mb-6 font-bold">
              ÚNETE A NOSOTROS
            </div>
            {formFields.map((field) => (
              <div key={field.name} className="flex flex-col mb-4">
                <label htmlFor={field.name} className="mb-2 font-bold">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={form[field.name as keyof FormFields]}
                  onChange={handleInputChange}
                  min={field.type === "date" ? getMinDate() : undefined}
                  max={
                    field.type === "date"
                      ? new Date().toISOString().split("T")[0]
                      : undefined
                  }
                  required={field.required}
                  className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-orange"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex flex-col mb-4">
              <label htmlFor="repeatPassword" className="mb-2 font-bold">
                Repetir contraseña:
              </label>
              <input
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                onChange={(e) => setPasswordAgain(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <ReactPasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={form.password}
              valueAgain={passwordAgain}
              messages={{
                minLength: "La contraseña tiene más de 8 caracteres.",
                specialChar: "La contraseña tiene caracteres especiales.",
                number: "La contraseña tiene un número.",
                capital: "La contraseña tiene una letra mayúscula.",
                match: "Las contraseñas coinciden.",
              }}
            />
            <button
              type="submit"
              className="w-full bg-orange hover:bg-orangeFull text-white font-bold py-3 px-6 rounded-lg mt-4 disabled:opacity-50"
              disabled={
                Object.keys(errors).length > 0 ||
                form.password !== passwordAgain
              }
            >
              Registrarse
            </button>
            <div className="flex flex-row justify-center mt-4">
              <div className="text-sm text-gray-400 font-bold mr-2">
                ¿YA ESTÁS REGISTRADO?
              </div>
              <div className="text-sm hover:text-orangeFull text-orange font-bold">
                <Link href="/login">INGRESA AQUÍ</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer {...customToastOptions} />
    </div>
  );
};

export default Register;
