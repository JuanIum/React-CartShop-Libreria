import './App.css';
import React from "react";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Categoria from "./componentes/Categoria";
import Carrito from "./componentes/Carrito";
import CarritoProvider from './contex/CarritoProvider';

function App() {

  const arrayDeLink = [{ seccion: "Home", enlace: "/" }, { seccion: "Novelas", enlace: "/categoria/novela" }, { seccion: "Cuentos", enlace: "/categoria/cuento" }, { seccion: "Contáctenos", enlace: "/contacto" }];
  
  return (
        <>
        <CarritoProvider>

        <BrowserRouter>
          
          <Navbar arrayDeLink={arrayDeLink} /> 

          <Switch>
        
            <Route exact path= "/">
              <ItemListContainer greeting="Libros disponibles" />
            </Route>
            
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            
            <Route path="/categoria/:categoriaId">
              <Categoria />
            </Route>
          
            <Route path="/carrito">
              <Carrito />
            </Route>

          </Switch>
          <Footer arrayDeLink={arrayDeLink}/>

        </BrowserRouter>

        </CarritoProvider>        
    </>
  );
}

export default App;
