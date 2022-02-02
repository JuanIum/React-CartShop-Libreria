import React from "react";
import { useContext } from "react";
import carritoContext from "../contex/CarritoProvider"

export default function Carrito() {

    const {carrito} = useContext( carritoContext );
    console.log(carrito);
    
    return (
        <>
            <p>carrito</p>
            <div className="mostrarCarrito">aquí se renderiza el acumulado del carrito</div>
        </>
)

}

