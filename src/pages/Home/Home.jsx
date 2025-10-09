import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UltimasNoticias from "../../components/UltimasNoticias/UltimasNoticias";
import ClimaAtual from "../../components/ClimaAtual/ClimaAtual";
import Cotacao from "../../components/Cotacao/Cotacao";
import NoticiasRecentes from "../../components/NoticiasRecentes/NoticiasRecentesSidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/posts")
      .then(res => res.json())
      .then(data => {
        const posts = data?.posts || [];

        const postsFiltrados = posts.filter((p) => p.destaque === true)

        setDestaques(postsFiltrados)
      })
  }, [])

  const destaquePrincipal = destaques.length > 0 ? destaques[0] : null;
  const outrosDestaques = destaques.length > 1 ? destaques.slice(1, 3) : [];



  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900">

      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Destaque Principal */}
        {
          destaquePrincipal && (
            <section
              key={destaquePrincipal.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div
                className="h-64 md:h-80 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${destaquePrincipal.imagem || '/fallback.jpg'})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <span className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    Destaque
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    {destaquePrincipal.titulo}
                  </h2>
                  <p className="mt-2 text-neutral-100">{destaquePrincipal.subtitulo}</p>
                  <div className="flex items-center mt-4 text-sm">
                    <span className="bg-black/20 px-2 py-1 rounded">
                      Por {destaquePrincipal.autor || "Redação"}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{destaquePrincipal.data || "Hoje"}</span>
                  </div>
                </div>
              </div>
            </section>
          )
        }


        {/* Grid de Notícias em Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outrosDestaques.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${noticia.imagem || '/fallback.jpg'})`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
                <p className="text-neutral-600 mb-4">{noticia.subtitulo}</p>
                <div className="flex justify-between items-center text-sm text-neutral-500">
                  <span>{noticia.data || "Hoje"}</span>
                  <span className="font-medium text-emerald-700">Leia mais →</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Seção de Últimas Notícias */}
        <UltimasNoticias />

        {/* Grid de Informações: Cotação + Clima + Notícias Recentes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cotação e Clima */}
          <section className="lg:col-span-2 bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-sky-700 flex items-center">
                <span className="bg-sky-100 p-2 rounded-lg mr-2">📈</span> Cotação do Cacau
              </h2>
              <Cotacao />
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-emerald-700 flex items-center">
                <span className="bg-emerald-100 p-2 rounded-lg mr-2">🌦️</span> Clima nas Regiões
              </h2>
              <ClimaAtual />
            </div>
          </section>

          {/* Notícias Recentes */}
          <section className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
              <span className="bg-yellow-100 p-2 rounded-lg mr-2">📰</span> Notícias do Mercado
            </h2>
            <NoticiasRecentes />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
