
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "componentes/menu";
import Sobre from "paginas/sobreMim";
import Inicio from "paginas/inicio";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import ScrollToTop from "componentes/scrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />
    
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobre />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
