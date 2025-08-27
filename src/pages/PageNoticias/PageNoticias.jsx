
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UltimasNoticias from "../../components/UltimasNoticias/UltimasNoticias";
import NoticiasRecentes from "../../components/NoticiasRecentes/NoticiasRecentesSidebar";

export default function PaginaNoticias() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-800">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-neutral-900">
          Notícias do Mercado de Cacau
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal - últimas notícias */}
          <div className="lg:col-span-2 space-y-8">
            <UltimasNoticias />
          </div>

          {/* Coluna lateral - notícias recentes */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <NoticiasRecentes />
            </div>
          </aside>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
