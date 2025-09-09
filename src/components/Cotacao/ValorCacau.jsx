import { motion } from "framer-motion";

export default function ValorCacau() {
  // Exemplos fictícios de dados (substituir depois por API ou banco de dados)
  const valorDoDia = "R$ 850,00 / arroba";
  const historicoSemana = [
    { dia: "Segunda", valor: "R$ 845,00" },
    { dia: "Terça", valor: "R$ 850,00" },
    { dia: "Quarta", valor: "R$ 852,00" },
    { dia: "Quinta", valor: "R$ 848,00" },
    { dia: "Sexta", valor: "R$ 850,00" },
  ];
  const historicoMes = [
    { semana: "Semana 1", media: "R$ 840,00" },
    { semana: "Semana 2", media: "R$ 845,00" },
    { semana: "Semana 3", media: "R$ 850,00" },
    { semana: "Semana 4", media: "R$ 848,00" },
  ];

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
          <p className="text-4xl font-extrabold">{valorDoDia}</p>
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
                {historicoSemana.map((item, i) => (
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
                {historicoMes.map((item, i) => (
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
