import React, { useContext } from "react";
import { carritoContext } from "../contex/CarritoProvider"
import CarritoItem from "./CarritoItem"
import {Link} from "react-router-dom"

const Carrito = () => {

    const {carrito, borrarCarrito} = useContext(carritoContext);
    
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
                <button onClick={() => { borrarCarrito() }}>Vaciar Carrito</button>
            </div>}          
        </>
)

}

export default Carrito;
