import React, { useContext } from "react";
import carritoImg from "../imgProductos/carritoImg.png";
import { Container } from "react-bootstrap";
import { carritoContext } from "../contex/CarritoProvider";


export default function CartWidget() { 
    
    const {cantidadTotal} = useContext(carritoContext);

    
    return (
        <>
            <div className={Container} id="contadorCart">
                <img src={carritoImg} alt="imagen carrito" />
                <div id="contador">{cantidadTotal()}</div>
            </div>    
         </>
   )
} 