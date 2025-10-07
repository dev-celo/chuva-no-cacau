import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UltimasNoticias from "../../components/UltimasNoticias/UltimasNoticias";
import NoticiasRecentes from "../../components/NoticiasRecentes/NoticiasRecentesSidebar";

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setNoticia(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!noticia) {
    return <p className="text-center mt-10 text-gray-600">Carregando notícia...</p>;
  }

  // Formatar data
  const dataFormatada = new Date(noticia.data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Conteúdo principal */}
        <article className="flex-1 bg-white rounded-2xl shadow-md p-6">
          {noticia.destaque && (
            <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold mb-4">
              Destaque
            </span>
          )}

          {noticia.imagem && (
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              className="w-full h-64 object-cover rounded-xl mb-6 transition-transform hover:scale-105"
            />
          )}

          <h1 className="text-4xl font-extrabold mb-3 text-gray-900">{noticia.titulo}</h1>
          {noticia.subtitulo && (
            <h2 className="text-xl text-gray-600 mb-4">{noticia.subtitulo}</h2>
          )}

          {noticia.chamadaNoticia && (
            <p className="text-gray-700 italic mb-4 border-l-4 border-blue-500 pl-4">
              {noticia.chamadaNoticia}
            </p>
          )}

          <div className="prose prose-lg max-w-none text-gray-800 mb-6">
            <p>{noticia.post}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {noticia.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Autor: <span className="font-semibold">{noticia.autor}</span>
          </p>
          <p className="text-sm text-gray-500">Publicado em: {dataFormatada}</p>

          <Link
            to="/noticias"
            className="mt-6 inline-block text-blue-600 hover:underline font-medium"
          >
            ← Voltar para notícias
          </Link>
        </article>

        {/* Sidebar com últimas notícias */}
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          <UltimasNoticias />
          <NoticiasRecentes />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default NoticiaDetalhe;
