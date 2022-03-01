import React, { useContext } from "react";
import { carritoContext } from "../contex/CarritoProvider";
import CarritoItem from "./CarritoItem";
import { Link } from "react-router-dom";
import Contacto from "./Contacto";

const Carrito = () => {

    const {carrito, borrarCarrito, sumaTotal, cantidadTotal} = useContext(carritoContext);
     
    return (
        <>
            {carrito.length === 0 ?
                <div id="bloqueCentrado">
                    <div id="centrarTexto2">
                        <p id="negrita">No agregaste nada al carrito aun...</p>
                        <Link to="/" id="negrita1">Volver a la página principal</Link>
                    </div>
                </div>
                :
                <div className="mostrarCarrito">
                    <h1 id="tituloCarrito">Resumen de compra: </h1>
                    <div id="tabla">
                        {carrito.map(element => <CarritoItem key={element.item.id} producto={element} />)}
                    </div>
                   
                        <h1 id="tituloCarrito">Cantidad de ejemplares: {cantidadTotal()}</h1>
                        <h1 id="tituloCarrito">Monto total: ${sumaTotal()}</h1>
                   
                    <div id="formulario">
                        <p id="parrafoForm">Registrate y finalizá tu compra!</p>
                        <Contacto />
                    </div>
                    <button onClick={() => { borrarCarrito() }} id="btnVaciar">Vaciar Carrito</button>
                </div>}

                </>
)}


export default Carrito;
