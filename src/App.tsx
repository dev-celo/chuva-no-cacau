import PaginaNoticias from "./pages/PageNoticias/PageNoticias";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticiaDetalhe from "./pages/PageNoticias/NoticiaDetalhe";
import PageSobre from "./pages/PageSobre/PageSobre";
import PageContato from "./pages/PageContato/PageContato";
import PageValorCacau from "./pages/PageValorCacau/PageValorCacau";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<PaginaNoticias />} />
        <Route path="/sobre" element={<PageSobre />} />
        <Route path="/contato" element={<PageContato />} />
        <Route path="/contato" element={<PageContato />} />
        <Route path="/valor-do-cacau" element={<PageValorCacau />} />
        <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
