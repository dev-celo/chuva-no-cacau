import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UltimasNoticias = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastDocId, setLastDocId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768);

  const fetchPosts = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const url = lastDocId && !reset
        ? `http://localhost:3001/api/posts?lastDocId=${lastDocId}`
        : `http://localhost:3001/api/posts`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.posts || data.posts.length === 0) {
        setHasMore(false);
        return;
      }

      if (reset) {
        setPosts(data.posts);
      } else {
        setPosts(prev => [...prev, ...data.posts]);
      }

      setLastDocId(data.lastDocId);
      setHasMore(Boolean(data.lastDocId));
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(true);

    const handleResize = () => setIsMdUp(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white rounded-2xl shadow-sm p-4 md:p-6 w-full md:w-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-neutral-200">
        Últimas Notícias
      </h2>

      <div className="space-y-4 md:space-y-6">
        {posts.map(post => (
          <Link key={post.id} to={`/noticias/${post.id}`} className="hover:text-blue-600">
            <article className="flex flex-col gap-4 md:gap-6 border-b border-dashed border-neutral-200 last:border-b-0 pb-4 md:pb-6 cursor-pointer">
              
              {/* Imagem sempre em cima */}
              <div className="w-full flex-shrink-0">
                {post.imagem ? (
                  <img
                    src={post.imagem}
                    alt={post.titulo}
                    className="h-32 md:h-40 w-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="h-32 md:h-40 bg-neutral-100 rounded-xl w-full"></div>
                )}
              </div>

              <div className="w-full space-y-1 md:space-y-2">
                <h3 className="text-md md:text-lg font-semibold">{post.titulo}</h3>
                <p className="text-sm md:text-base text-neutral-600">{post.subtitulo}</p>
                <p className="text-xs md:text-sm text-neutral-500 italic">
                  {new Date(post.data).toLocaleDateString("pt-BR")}
                </p>

                {/* Somente mostra chamadaNoticia em md+ */}
                {isMdUp && post.chamadaNoticia && (
                  <p className="text-sm md:text-base text-neutral-600 border-l-2 border-neutral-300 pl-2">
                    {post.chamadaNoticia}
                  </p>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-4 md:mt-6 gap-2 md:gap-4">
        {hasMore && (
          <button
            onClick={() => { setPage(prev => prev + 1); fetchPosts(); }}
            disabled={loading}
            className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            {loading ? "Carregando..." : "Ver mais"}
          </button>
        )}

        {page > 1 && (
          <button
            onClick={() => { setPage(1); setLastDocId(null); fetchPosts(true); }}
            className="w-full md:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer"
          >
            Ver menos
          </button>
        )}
      </div>
    </section>
  );
};

export default UltimasNoticias;
