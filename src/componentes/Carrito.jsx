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
            <div>
                <p>No agregaste nada al carrito</p>
                <Link to="/" >Volver a la página principal</Link>
            </div>
            :
            <div className="mostrarCarrito">
                    {carrito.map(element => <CarritoItem key={element.item.id} producto={element} />)}
                    <h1>Cantidad total: {cantidadTotal()}</h1>
                    <h1>Monto total: ${sumaTotal()}</h1>                   
                    <div>
                        <p>Registrate y finalizá tu compra!</p>                        
                        <Contacto />
                    </div>
                    <button onClick={() => { borrarCarrito() }}>Vaciar Carrito</button>
            </div>}          
        </>
)}


export default Carrito;
