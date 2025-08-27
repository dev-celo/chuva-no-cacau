import PaginaNoticias from "./pages/PageNoticias/PageNoticias";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticiaDetalhe from "./pages/PageNoticias/NoticiaDetalhe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<PaginaNoticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
