import './App.css';
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer"

function App() {

  const arrayDeLink = [{ seccion: "Home", enlace: "/" }, { seccion: "Productos", enlace: "/productos" }, { seccion: "Contáctenos", enlace: "/contactenos" }];
  
  return (
        <>
      <div className='App'>
        <Navbar arrayDeLink={arrayDeLink}/>        
      <ItemListContainer greeting="Lista de productos" />
      </div>  
    </>
  );
}

export default App;
