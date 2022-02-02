import React from "react";
import carrito from "./carrito.png";
import { Container } from "react-bootstrap";

export default function CartWidget(){ 
    return (
        <>
            <div className={Container} id="contadorCart">
                <img src={carrito} alt="imagen carrito" />
                <div id="contador">0</div>
            </div>    
         </>
   )
} 