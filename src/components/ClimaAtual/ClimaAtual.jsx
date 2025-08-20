'use client';
import { useEffect, useState } from "react";

export default function ClimaAtual() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/clima')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);  

  if (!dados) return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-pulse text-sky-600">Carregando dados meteorológicos...</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-5 p-4">
      {dados.map((local, index) => (
        <div 
          key={index} 
          className="bg-gradient-to-br from-sky-100 to-blue-200 p-5 rounded-xl shadow-lg border border-blue-100 transition-all hover:shadow-xl hover:scale-[1.02]"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-bold text-sky-800 mb-1">{local.cidade}</h4>
              <span>{local.estado || local.pais}</span>
              <p className="text-sky-600 text-sm">{local.condicao}</p>
            </div>
            {local.icone && (
              <img 
                src={local.icone} 
                alt={local.condicao} 
                className="w-12 h-12 object-contain"
              />
            )}
          </div>
          
          <div className="mt-4 flex items-end justify-between">
            <span className="text-4xl font-bold text-sky-900">{local.temp}°</span>
            <div className="text-right">
              <p className="text-xs text-sky-700">Umidade</p>
              <p className="text-lg font-semibold text-sky-800">{local.umidade}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}