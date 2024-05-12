import React, { useEffect, useState } from "react";
import Link from "next/link";

import Cart from "./Cart";
import Dashboard from "./Dashboard";

import { Tiro_Devanagari_Sanskrit } from "next/font/google";
import Search from "./Search";
import Logo from "./Logo";

const TiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["latin"],
});

const navItems = [
  { label: "INICIO", href: "/home" },
  { label: "PRODUCTOS", href: "/products" },
  { label: "CONTACTO", href: "/contact" },
  { label: "REGISTRARSE", href: "/register" },
];

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [scrolling, setScrolling] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-30 sticky top-0 mt-4 z-20 ${
          scrolling ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Search />
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>

            <div className="hidden md:flex gap-4 z-50">
              <Cart />
              <Dashboard />
            </div>
          </div>
          {/* Menú de navegación */}
          <div
            className=" flex justify-center mb-2 align-center gap-x-14 sm:hidden"
            style={{
              display: showNav ? "none" : "flex",
              fontFamily: TiroDevanagariSanskrit.className,
            }}
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                <Link href={item.href}>
                  <div>{item.label}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
