import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const LINK_OFICIAL = "https://tradingeconomics.com/commodity/cocoa";

const Cotacao = () => {
  const [cotacao, setCotacao] = useState(null);
  const [errorLimite, setErrorLimite] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/cotacao")
      .then((res) => res.json())
      .then((data) => setCotacao(data))
      .catch((err) => {
        if (err.message.includes("Limite diário")) {
          setErrorLimite(true);
        } else {
          console.error(err);
        }
      });
  }, []);

  if (errorLimite) {
    return (
      <div className="p-4 bg-yellow-50 text-yellow-800 rounded border border-yellow-400">
        ⚠️ Limite diário de consultas atingido.<br />
        Veja os dados completos em{" "}
        <a
          href={LINK_OFICIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Trading Economics
        </a>
        .
      </div>
    );
  }

  if (!cotacao) {
    return <p className="text-gray-500">Carregando cotação...</p>;
  }

  const isAlta = cotacao.variacao >= 0;
  const precoAtual = cotacao.preco;
  const precoAnterior = precoAtual - cotacao.variacao;

  // Dados mínimos para o gráfico
  const chartData = [
    { name: "Anterior", valor: precoAnterior },
    { name: "Atual", valor: precoAtual },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-base font-semibold text-gray-600">
            {cotacao.bolsa}
          </h4>
          <p className="text-3xl font-extrabold text-gray-900 mt-1">
            {cotacao.preco.toLocaleString("en-US", {
              style: "currency",
              currency: cotacao.moeda,
            })}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Atualizado: {cotacao.horario}
          </p>
        </div>

        <div
          className={`${
            isAlta ? "text-green-600" : "text-red-600"
          } font-bold text-lg flex items-center`}
        >
          {cotacao.variacao.toFixed(2)} {cotacao.moeda} (
          {(cotacao.variacao_percentual).toFixed(2)}%)
          {isAlta ? (
            <ArrowUpRight className="ml-1" size={18} />
          ) : (
            <ArrowDownRight className="ml-1" size={18} />
          )}
        </div>
      </div>

      {/* Mini gráfico elegante */}
      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isAlta ? "#16a34a" : "#dc2626"}
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor={isAlta ? "#16a34a" : "#dc2626"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                fontSize: "12px",
                borderRadius: "8px",
              }}
              formatter={(value) =>
                value.toLocaleString("en-US", {
                  style: "currency",
                  currency: cotacao.moeda,
                })
              }
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke={isAlta ? "#16a34a" : "#dc2626"}
              fillOpacity={1}
              fill="url(#colorValor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Cotacao;
