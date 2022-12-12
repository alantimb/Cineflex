import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import Sessions from "./components/SessionsPage";
import Seats from "./components/SeatsPage";
import Sucesso from "./components/Sucesso";
import NavBar from "./components/NavBar";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessoes/:idFilme" element={<Sessions />} />
        <Route path="/assentos/idSessao" element={<Seats />} />
        {/* <Route path="/sucesso" element={<Sucesso />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
