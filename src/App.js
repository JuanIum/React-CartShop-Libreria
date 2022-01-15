import './App.css';
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer"
import ListaDeProductos from './componentes/ListaDeProductos'

function App() {

  const arrayDeLink = [{ seccion: "Home", enlace: "/" }, { seccion: "Productos", enlace: "/productos" }, { seccion: "Contáctenos", enlace: "/contactenos" }];
  
  return (
        <>
      <div className='App'>
        <Navbar arrayDeLink={arrayDeLink}/>        
        <ItemListContainer greeting="Lista de productos" />
        <ListaDeProductos />
      </div>  
    </>
  );
}

export default App;
