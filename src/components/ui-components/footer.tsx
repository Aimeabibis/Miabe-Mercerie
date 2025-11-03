import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#fbf9f9] text-gray-700 py-6 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Nom */}
        <h2 className="font-bold text-lg text-gray-400">Localisation</h2>

        {/* Links */}
        <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-black"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-black"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-black"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-black"
            >
              <Linkedin size={24} />
            </a>
          </div>

        {/* Droits */}
        <p className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Abibis Mercerie — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
