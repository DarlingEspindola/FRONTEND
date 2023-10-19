import logo from "./logo.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Carrusel from "./components/Carrusel";
import { Route, Routes, Link } from "react-router-dom";
import Calendario from "./Pages/Calendario";
import Home from "./Pages/Home";
import Controles from "./Pages/Controles";
import Medicamentos from "./Pages/Medicamentos";
import Tips from "./Pages/Tips";
import Busqueda from "./Pages/Busqueda";

function App() {
  const config = {
    titulo: "Kumelsalud",
    autor: "grupo4",
  };
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/controles" element={<Controles />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/busqueda" element={<Busqueda />} />
        </Routes>
      </Main>
      <Footer autor={config.autor} />
    </>
  );
}

export default App;
