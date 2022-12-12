import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme from "./components/Filme";
import Sessoes from "./components/Sessoes";
import Assentos from "./components/Assentos";
import Sucesso from "./components/Sucesso";
import NavBar from "./components/NavBar";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Filme />} />
        {/* <Route path="/sessoes/:idFilme" element={<Sessoes />} /> */}
        {/* <Route path="/assentos/idSessao" element={<Assentos />} /> */}
        {/* <Route path="/sucesso" element={<Sucesso />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
