import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icônes modernes

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyle =
    "pb-1 border-b-3 border-transparent transition-all hover:text-red-600";
  const activeStyle = "border-b-red-600 font-semibold";

  const links = [
    { to: "/home", label: "Accueil" },
    { to: "/newproducts", label: "Nouveautés" },
    { to: "/categories", label: "Catégories" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-[#fbf9f9] text-black shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <h1 className="font-bold text-lg md:text-xl">Miabé Mercerie</h1>

        {/* Bouton burger (mobile uniquement) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Liens de navigation */}
        <ul
          className={`${
            isOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-[#fbf9f9] shadow-md p-6 space-y-4 z-10"
              : "hidden"
          } md:flex md:flex-row md:static md:space-y-0 md:space-x-8 font-mono text-base`}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)} // ferme le menu mobile
                className={({ isActive }) =>
                  isActive ? `${baseStyle} ${activeStyle}` : baseStyle
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
