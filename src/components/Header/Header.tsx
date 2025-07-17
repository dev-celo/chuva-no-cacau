import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between flex-wrap">
        {/* LOGO */}
        <div className="flex items-center space-x-1 text-2xl font-bold">
          <span className="text-sky-400">Chuva</span>
          <span className="text-yellow-700">no Cacau</span>
        </div>

        {/* HAMBURGUER MENU - SOMENTE MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex md:items-center md:space-x-6 flex-1 justify-end">
          {/* INPUT PESQUISA */}
          <input
            type="text"
            placeholder="Pesquisar no site..."
            className="w-1/3 px-4 py-2 rounded text-black bg-white focus:outline-none"
          />

          {/* BOTÃO ÚNICO */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded text-sm">
            Valor do Cacau
          </button>

          {/* LINKS */}
          <nav className="flex space-x-6 text-xl items-center">
            {["Início", "Notícias", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative inline-block text-white transition duration-300 ease-out transform hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 w-full">
          {/* INPUT PESQUISA */}
          <input
            type="text"
            placeholder="Pesquisar no site..."
            className="w-full px-4 py-2 rounded text-black bg-white focus:outline-none"
          />

          {/* BOTÃO ÚNICO */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded text-sm w-full">
            Valor do Cacau
          </button>

          {/* LINKS */}
          <nav className="flex flex-col space-y-2 text-xl items-center">
            {["Início", "Notícias", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative inline-block text-white transition duration-300 ease-out transform hover:scale-105"
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
