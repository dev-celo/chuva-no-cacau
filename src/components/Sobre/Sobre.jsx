import { motion } from "framer-motion";

export default function SobreChuvaNoCacau() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-20 bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-900">
          Chuva no Cacau
        </h1>
        <p className="text-lg md:text-xl text-emerald-800 max-w-lg">
          Notícias, análises e tendências do mercado de cacau direto da Bahia para o mundo. Informação confiável para produtores, investidores e amantes do chocolate.
        </p>
        <button className="px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg text-lg font-medium">
          Explorar Notícias
        </button>
      </motion.div>

      {/* Espaço para Imagem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="w-full h-72 md:h-96 bg-emerald-300 rounded-2xl shadow-xl flex items-center justify-center text-emerald-900 font-semibold">
          Espaço para Imagem do Site
        </div>
      </motion.div>
    </section>
  );
}