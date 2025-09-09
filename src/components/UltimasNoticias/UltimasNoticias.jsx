import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./UltimasNoticias.css";

const UltimasNoticias = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastDocId, setLastDocId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // wrapper para observar os artigos
  const listRef = useRef(null);

  const fetchPosts = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const url =
        lastDocId && !reset
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
        setPosts((prev) => [...prev, ...data.posts]);
      }

      setLastDocId(data.lastDocId);
      setHasMore(Boolean(data.lastDocId));
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Função que inicia observers nos cards (fallback)
  useEffect(() => {
    if (!listRef.current) return;

    // Selecta todos os artigos .small-screen
    const articles = Array.from(listRef.current.querySelectorAll(".small-screen"));

    // Cria um ResizeObserver para cada artigo (se suportado)
    const observers = [];

    if (typeof ResizeObserver !== "undefined") {
      articles.forEach((el) => {
        // evita criar múltiplos observers no mesmo elemento
        if (el.__ro) return;

        const ro = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // obtém largura inline do entry (compatível com contentBoxSize ou contentRect)
            let inlineSize = entry.contentRect?.width;
            if (entry.contentBoxSize) {
              const box = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
              inlineSize = box.inlineSize ?? inlineSize;
            }

            if (inlineSize <= 350) el.classList.add("small-screen--narrow");
            else el.classList.remove("small-screen--narrow");
          }
        });

        ro.observe(el);
        el.__ro = ro;
        observers.push(ro);
      });
    }

    // cleanup
    return () => {
      observers.forEach((o) => o.disconnect());
      articles.forEach((el) => {
        if (el.__ro) {
          el.__ro.disconnect();
          delete el.__ro;
        }
      });
    };
  }, [posts]); // re-observe sempre que posts mudarem

  // fetch inicial
  useEffect(() => {
    fetchPosts(true);
  }, []);

  return (
    <section className="bg-white rounded-2xl shadow-sm p-4 md:p-6 w-full md:w-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 pb-2 border-b border-neutral-200">
        Últimas Notícias
      </h2>

      {/* wrapper observado */}
      <div className="space-y-6" ref={listRef}>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/noticias/${post.id}`}
            className="group block"
            aria-label={`Abrir notícia ${post.titulo}`}
          >
            {/* NOTE: removi md:flex-row (viewport) e deixei controle via CSS/container query/fallback */}
            <article className="small-screen flex gap-4 border-b border-dashed border-neutral-200 last:border-b-0 pb-6 cursor-pointer hover:bg-neutral-50 rounded-xl p-2 transition">
              {/* imagem com classe específica */}
              <div className="post-image-wrapper">
                {post.imagem ? (
                  <img
                    src={post.imagem}
                    alt={post.titulo}
                    className="post-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="post-image post-image--placeholder" />
                )}
              </div>

              {/* conteúdo */}
              <div className="post-content flex-1">
                <h3 className="text-lg font-semibold group-hover:text-amber-600 transition">
                  {post.titulo}
                </h3>

                <p className="text-sm text-neutral-600 line-clamp-2">
                  {post.subtitulo}
                </p>

                <div className="mt-3 flex flex-col">
                  <p className="text-xs text-neutral-500 italic">
                    {new Date(post.data).toLocaleDateString("pt-BR")}
                  </p>

                  {/* chamada que será escondida por CSS quando o card for estreito (<=350px) */}
                  {post.chamadaNoticia && (
                    <span className="post-callout mt-2 text-sm text-neutral-700 border-l-2 border-amber-100 pl-2">
                      {post.chamadaNoticia}
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-6 gap-3">
        {hasMore && (
          <button
            onClick={() => {
              setPage((prev) => prev + 1);
              fetchPosts();
            }}
            disabled={loading}
            className="w-full md:w-auto px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
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
            className="w-full md:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Ver menos
          </button>
        )}
      </div>
    </section>
  );
};

export default UltimasNoticias;
