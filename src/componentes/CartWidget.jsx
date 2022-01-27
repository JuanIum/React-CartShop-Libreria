import React from "react";
import carrito from "./carrito.png";
import { Container } from "react-bootstrap";

export default function CartWidget(){ 
    return (
        <>
            <div className={Container}>
            <img src={carrito} alt="" />
            </div>
         </>
   )
} 