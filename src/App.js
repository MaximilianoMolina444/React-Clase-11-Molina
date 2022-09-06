import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carrousel from './components/Carrousel';
import Productos from './components/Productos';
import Titulos from './components/Titulos';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import TestApiContainer from './components/test/TestApiContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  let tituloPrincipal = {text: "Somos Ramona Customs"};
  let tituloProductos = {text: "Nuestros Productos"};  
  function onAdd(){
    console.log("agregado al carrito")
  };
     
  return (
    <div className="App">
      {/* <TestApiContainer/>} */}
      <NavBar/>
      <Titulos item={tituloPrincipal}/>
      <Carrousel/>
      <Titulos item={tituloProductos}/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
