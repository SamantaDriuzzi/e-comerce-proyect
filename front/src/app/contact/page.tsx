import React from "react";
import call from "/public/icons/call.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen  mb-32 z-10">
      <div className=" bg-orangeBase h-1000 top-0 left-0 w-1/2 absolute z-0"></div>
      <section className="relative z-20 ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contáctanos
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Déjanos tu consulta o duda
          </p>
          <div className="flex justify-between flex-row">
            <form action="#" className="space-y-8 w-1/2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-lg  text-gray-900 "
                >
                  Tu correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-blue border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@shop.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block font-semibold mb-2 text-lg  text-gray-900 "
                >
                  Consulta
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-blue rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Dejanos saber en qué podemos ayuadarte..."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-lg text-gray-900 "
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-blue rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 d"
                  placeholder="Enviame un mensaje..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-semibold text-center text-black rounded-lg bg-blue sm:w-fit hover:bg-bluePlus "
              >
                Enviar
              </button>
            </form>
            <div className="ml-52 flex flex-col">
              <Image
                src={call}
                width={230}
                height={230}
                alt="call"
                className=" z-10"
              />
              <div className="bg-blue h-36 w-56 absolute z-0 "></div>
              <div className="text-xl z-10">
                Atendemos tu llamada de lunes a viernes de 8:00hr a 13:00hr
              </div>
              <div className="font-bold text-2xl">011 1234 567 89</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
