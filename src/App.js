import './App.css';
import React from "react";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Categoria from './componentes/Categoria';

function App() {

  const arrayDeLink = [{ seccion: "Home", enlace: "/" }, { seccion: "Productos", enlace: "/productos" }, { seccion: "Contáctenos", enlace: "/contacto" }];
  
  return (
        <>
        
        <BrowserRouter>
          
          <Navbar arrayDeLink={arrayDeLink} /> 

          <Switch>
        
            <Route exact path= "/">
              <ItemListContainer greeting="Libros disponibles" />
              <Categoria />
            </Route>
            
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            
            <Route path="/categoria/:categoriaId">
              <Categoria />
            </Route>
          
          </Switch>
          <Footer arrayDeLink={arrayDeLink}/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
