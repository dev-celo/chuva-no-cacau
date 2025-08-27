import { useEffect, useState } from "react";

const LINK_OFICIAL = "https://thecocoapost.com/";

const NoticiasRecentes = () => {
  const [noticias, setNoticias] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Mostra inicialmente 7 notícias

  useEffect(() => {
    fetch('http://localhost:3001/api/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data))
  }, []);

  if (noticias.length === 0) {
    return (
      <div className="p-4 bg-amber-50 text-amber-900 rounded-lg border-l-4 border-amber-500 shadow-sm">
        <p className="font-medium">Limite diário de consultas atingido</p>
        <p className="text-sm mt-1">
          Acesse as notícias diretamente no{" "}
          <a 
            href={LINK_OFICIAL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-amber-700 hover:underline"
          >
            CocoaPost
          </a>
        </p>
      </div>
    );
  }

  // Funções para controlar a quantidade de notícias visíveis
  const mostrarMais = () => setVisibleCount(prev => Math.min(prev + 3, noticias.length));
  const mostrarMenos = () => setVisibleCount(prev => Math.max(prev - 3, 6));

  return (
    <div className="w-full bg-white border-l border-gray-200 p-4 space-y-6">
      <div className="flex items-center justify-between border-b-2 border-amber-200 pb-2">
        <h2 className="text-xl font-bold text-gray-800">
          Notícias do Mundo do Cacau
        </h2>
        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
          Externas
        </span>
      </div>

      <div className="space-y-4 cursor-pointer">
        {noticias.slice(0, visibleCount).map((item, index) => (
          <div
            key={item.id}
            className="group transition-all hover:bg-amber-50/50 rounded-lg p-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 line-clamp-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.resumo}
                </p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-800 flex-shrink-0 mt-1"
                aria-label={`Ler notícia: ${item.titulo}`}
              >
                {/* Ícone */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mt-2 flex justify-end">
              <span className="text-xs text-gray-400">Fonte: CocoaPost</span>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de controle */}
      <div className="flex justify-center gap-4 pt-2">
        {visibleCount < noticias.length && (
          <button 
            onClick={mostrarMais} 
            className="px-4 py-2 bg-amber-200 text-amber-800 rounded hover:bg-amber-300 transition"
          >
            Mais notícias
          </button>
        )}
        {visibleCount > 7 && (
          <button 
            onClick={mostrarMenos} 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Menos notícias
          </button>
        )}
      </div>

      <div className="text-center pt-2">
        <a
          href={LINK_OFICIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-900 hover:underline"
        >
          Ver todas no site
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NoticiasRecentes;
