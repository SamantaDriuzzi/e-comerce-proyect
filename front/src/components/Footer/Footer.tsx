import Logo from "@/app/components/navigation/navbar/Logo";
import iconF from "../../../public/icons/facebook.svg";
import iconI from "../../../public/icons/instagram.svg";
import iconX from "../../../public/icons/redX.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-bluePlus to-blue bottom-0 w-full z-50">
      <div className="w-full ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="m-4">
            <Link
              href="/landing"
              className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Logo />
            </Link>
          </div>

          <div className="mt-4 sm:mb-0">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 lg:gap-4">
              <li>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <Image src={iconF} alt="logo" width={40} height={40} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <Image src={iconI} alt="logo" width={40} height={40} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <Image src={iconX} alt="logo" width={40} height={40} />
                </Link>
              </li>
            </ul>
            <p className="text-sm text-gray-500 sm:text-center">SEGUINOS</p>
          </div>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 gap-5 p-4 ">
            <li>
              <Link href="/home" className="hover:underline me-4 md:me-6">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline me-4 md:me-6">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline me-4 md:me-6">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="hover:underline">
                Mi cuenta
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto 0 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center p-2 ">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            SHOP™
          </Link>
          . Esta página fue creada por Samanta Driuzzi - Alumna de{" "}
          <Link
            href="https://www.soyhenry.com/"
            target="_blank"
            className="font-bold"
          >
            Henry
          </Link>{" "}
          - M4 - 2024.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
