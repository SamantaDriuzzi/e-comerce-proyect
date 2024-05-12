import Link from "next/link";
const navItems = [
  { href: "/home", label: "Inicio" },
  { href: "/products", label: "Productos" },
  { href: "/contact", label: "Contacto" },
  { href: "/login", label: "Mi Cuenta" },
];
const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-blue grid pt-[120px] top-0 left-0 z-50"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <div
          className="sidebar-nav text-center leading-relaxed text-xl"
          role="navigation"
        >
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.href} passHref>
                <p onClick={toggle}>{item.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
