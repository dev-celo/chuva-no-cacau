import { useEffect, useState } from "react";

const UltimasNoticias = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastDocId, setLastDocId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // 👈 página atual

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
    fetchPosts(true); // Carrega a primeira página
  }, []);

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200">
        Últimas Notícias
      </h2>

      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="flex flex-col md:flex-row gap-6 border-b border-dashed border-neutral-200 last:border-b-0 pb-6">
            <div className="md:w-1/4">
              {post.imagem ? (
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="h-40 w-full object-cover rounded-xl"
                />
              ) : (
                <div className="h-40 bg-neutral-100 rounded-xl"></div>
              )}
            </div>
            <div className="md:w-3/4 space-y-2">
              <h3 className="text-lg font-semibold">{post.titulo}</h3>
              <p className="text-sm text-neutral-600">{post.subtitulo}</p>
              <p className="text-sm text-neutral-500 italic">
                {new Date(post.data).toLocaleDateString("pt-BR")}
              </p>
              {post.chamadaNoticia && (
                <p className="text-s text-neutral-600 border-l-2 border-neutral-300 pl-2">
                  {post.chamadaNoticia}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        {hasMore && (
          <button
            onClick={() => {
              setPage(prev => prev + 1);
              fetchPosts();
            }}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            {loading ? "Carregando..." : "Ver mais"}
          </button>
        )}

        {page > 1 && (
          <button
            onClick={() => {
              setPage(1);
              setLastDocId(null);
              fetchPosts(true);
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer"
          >
            Ver menos
          </button>
        )}
      </div>
    </section>
  );
};

export default UltimasNoticias;
