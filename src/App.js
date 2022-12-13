import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./Pages/MoviesPage";
import SessionsPage from "./Pages/SessionsPage";
import SeatsPage from "./Pages/SeatsPage";
import SucessPage from "./Pages/SucessPage";
import NavBar from "./components/NavBar";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route path="/assentos/:idSessao" element={<SeatsPage />} />
        {/* <Route path="/sucesso" element={<SucessPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
