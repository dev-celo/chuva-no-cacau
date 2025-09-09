export default function Footer() {
  const year = new Date().getFullYear();

  const footerData = [
    {
      title: "🌐 Fontes de Notícias",
      links: [
        { name: "ICCO", url: "https://www.icco.org" },
        { name: "Comunicaffe", url: "https://www.comunicaffe.com" },
        { name: "Reuters Cacau", url: "https://www.reuters.com" },
      ],
    },
    {
      title: "📬 Contato",
      content: (
        <>
          Desenvolvido por <span className="text-sky-400">Marcelo Henrique</span><br/>
          Email: contato@chuvanocacau.com<br/>
          WhatsApp: (73) 9XXXX-XXXX
        </>
      ),
    },
    {
      title: "📢 Anuncie",
      content: (
        <>
          Quer anunciar seu produto ou serviço?<br/>
          Entre em contato e receba nosso mídia kit.
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded text-sm transition duration-300">
            Solicitar Mídia Kit
          </button>
        </>
      ),
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-neutral-700 pt-8">
        {footerData.map((section) => (
          <div key={section.title}>
            <h2 className="font-bold mb-3 text-yellow-400 text-lg">{section.title}</h2>
            {section.links ? (
              <ul className="text-sm space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed">{section.content}</p>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-xs mt-10 text-gray-400">
        © {year} Chuva no Cacau. Todos os direitos reservados.
      </p>
    </footer>
  );
}
