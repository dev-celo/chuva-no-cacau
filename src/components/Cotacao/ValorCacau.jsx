import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ValorCacau() {
  const [valoresCacau, setValoresCacau] = useState()

  useEffect(() => {
    fetch("http://localhost:3001/api/preco-cacau")
    .then((res) => res.json())
    .then((data) => setValoresCacau(data))
  }, [])
  console.log(valoresCacau);

  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-10"
      >
        {/* Título */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900">
            Cotação do Cacau
          </h1>
          <p className="text-lg text-emerald-800">
            Acompanhe o valor do cacau em Ipiaú, Ilhéus, Gandu e Região.
          </p>
        </div>

        {/* Valor do dia */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-700 text-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-2">Valor do Dia</h2>
          <p className="text-4xl font-extrabold">{valoresCacau?.valorDoDia}</p>
        </motion.div>

        {/* Histórico da Semana */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-emerald-900">Histórico da Semana</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-emerald-200 text-emerald-900 text-left">
                  <th className="px-4 py-3">Dia</th>
                  <th className="px-4 py-3">Valor</th>
                </tr>
              </thead>
              <tbody>
                {valoresCacau?.historicoDaSemana.map((item, i) => (
                  <tr
                    key={i}
                    className="border-t border-emerald-100 hover:bg-emerald-50"
                  >
                    <td className="px-4 py-3">{item.dia}</td>
                    <td className="px-4 py-3">{item.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Histórico do Mês */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-emerald-900">Histórico do Mês</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-emerald-200 text-emerald-900 text-left">
                  <th className="px-4 py-3">Semana</th>
                  <th className="px-4 py-3">Média</th>
                </tr>
              </thead>
              <tbody>
                {valoresCacau?.historicoDoMes.map((item, i) => (
                  <tr
                    key={i}
                    className="border-t border-emerald-100 hover:bg-emerald-50"
                  >
                    <td className="px-4 py-3">{item.semana}</td>
                    <td className="px-4 py-3">{item.media}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Aviso de responsabilidade */}
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 p-4 rounded-xl text-sm text-center shadow">
          ⚠️ As informações apresentadas são de caráter informativo. Não nos responsabilizamos pela cotação, que pode variar de cidade para cidade e até mesmo de armazém para armazém.
        </div>
      </motion.div>
    </section>
  );
}
