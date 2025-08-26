import UltimasNoticias from "../../components/UltimasNoticias/UltimasNoticias";
import ClimaAtual from "../../components/ClimaAtual/ClimaAtual";
import Cotacao from "../../components/Cotacao/Cotacao";
import NoticiasRecentes from "../../components/NoticiasRecentes/NoticiasRecentesSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-10w-xl w-full mx-auto px-4 sm:px-8 py-12 space-y-16">
        
        {/* Destaque Principal */}
        <section className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="h-64 md:h-80 bg-gradient-to-r from-amber-500 to-amber-700 relative">
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <span className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full font-medium">Destaque</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">Preço do cacau atinge máxima histórica com seca na África Ocidental</h2>
              <p className="mt-2 text-neutral-100">Produtores brasileiros se preparam para aumentar exportações enquanto principais competidores enfrentam crise climática.</p>
              <div className="flex items-center mt-4 text-sm">
                <span className="bg-black/20 px-2 py-1 rounded">Por João Silva</span>
                <span className="mx-2">•</span>
                <span>Há 2 horas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Notícias em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Tecnologia aumenta produtividade do cacau em 35%</h3>
              <p className="text-neutral-600 mb-4">Novas técnicas de cultivo e monitoramento estão revolucionando a produção cacaueira no Brasil.</p>
              <div className="flex justify-between items-center text-sm text-neutral-500">
                <span>Há 5 horas</span>
                <span className="font-medium text-emerald-700">Leia mais →</span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Exportação de cacau brasileiro cresce 22% no último trimestre</h3>
              <p className="text-neutral-600 mb-4">Dados divulgados pelo Ministério da Agricultura mostram aumento significativo nas exportações.</p>
              <div className="flex justify-between items-center text-sm text-neutral-500">
                <span>Há 7 horas</span>
                <span className="font-medium text-blue-700">Leia mais →</span>
              </div>
            </div>
          </article>
        </div>

        {/* Seção de Posts Simplificada */}
        <UltimasNoticias />

        {/* Seção de Informações (Cotação + Clima + Notícias Recentes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-sky-700 flex items-center">
              <span className="bg-sky-100 p-2 rounded-lg mr-2">📈</span> Cotação do Cacau
            </h2>
            <Cotacao />

            <h2 className="text-xl font-bold mb-4 text-emerald-700 flex items-center mt-15">
              <span className="bg-emerald-100 p-2 rounded-lg mr-2">🌦️</span> Clima nas Regiões
            </h2>
            <ClimaAtual />
          </section>

          <section className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
              <span className="bg-yellow-100 p-2 rounded-lg mr-2">📰</span> Notícias do Mercado
            </h2>
            <NoticiasRecentes />
          </section>
        </div>
      </div>
    </div>
  );
}
