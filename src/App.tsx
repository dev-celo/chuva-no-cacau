import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


function App() {
  return (
    <div className="bg-[#F5F5DC] min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto py-10 px-4 text-[#3E2723]">
        <h2 className="text-3xl font-semibold mb-4">🌱 Bem-vindo ao portal Chuva no Cacau</h2>
        <p className="text-lg">
          Aqui você encontra as notícias mais fresquinhas do mercado de cacau,
          diretamente da Bahia para o mundo. Dados, análises, tendências e
          aquele cheirinho de terra molhada no ar.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default App
