import './App.css';
import Menu from "./components/Menu/Menu.jsx";
import Campanha from "./components/Campanha/Campanha.jsx";
import Denuncia from "./components/Denuncia/Denuncia.jsx";
import Sobre from "./components/Sobre/Sobre.jsx";
import Footer from "./components/Footer/Footer.jsx"; // 👈 Importa o Footer

function App() {
  return (
    <>
      <Menu />
      <Sobre />
      <Denuncia />
      <Campanha />
      <Footer /> {/* 👈 Adiciona o Footer aqui */}
    </>
  );
}

export default App;
