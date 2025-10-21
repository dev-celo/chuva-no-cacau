import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900 text-white px-6 py-3 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-chuva-no-cacau-gota-de-agua-caindo-em-cacau.png"
            alt="Logo chuva no cacau com uma gota d'agua caindo em uma cabaça de cacau"
            className="logo ml-2"
          />
        </a>

        {/* HAMBURGUER MENU - MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex md:items-center md:space-x-6 flex-1 justify-end">
          <Link to="/valor-do-cacau">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded text-sm">
              Valor do Cacau
            </button>
          </Link>
          <nav className="flex space-x-6 text-lg items-center">
            {[
              { campo: "Início", href: "/" },
              { campo: "Notícias", href: "/noticias" },
              { campo: "Sobre", href: "/sobre" },
              { campo: "Contato", href: "/contato" },
            ].map((item) => (
              <a
                key={item.campo}
                href={item.href}
                className="nav-link relative inline-block transition duration-300 ease-out transform hover:scale-105"
              >
                {item.campo}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 w-full">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded text-sm w-full">
            Valor do Cacau
          </button>
          <nav className="flex flex-col space-y-2 text-lg items-center">
            {["Início", "Notícias", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link relative inline-block transition duration-300 ease-out transform hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
