import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-[#F5F5DC] min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto py-10 px-4 text-[#3E2723]">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
