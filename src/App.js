import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./Pages/MoviesPage";
import SessionsPage from "./Pages/SessionsPage";
import SeatsPage from "./Pages/SeatsPage";
import SucessPage from "./Pages/SucessPage";
import NavBar from "./components/NavBar";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useState } from "react";

function App() {
  const [successData, setSuccessData] = useState({});
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route
          path="/assentos/:idSessao"
          element={<SeatsPage setSuccessData={setSuccessData} />}
        />
        <Route
          path="/sucesso"
          element={<SucessPage successData={successData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
