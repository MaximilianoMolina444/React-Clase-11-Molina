import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Carrousel from "./components/Carrousel";
import Titulos from "./components/Titulos";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let tituloPrincipal = { text: "Somos Ramona Customs" };
  let tituloProductos = { text: "Nuestros Productos" };

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Titulos item={tituloPrincipal} />
      <Carrousel />
      <Titulos item={tituloProductos} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
