import React, { useContext, useState, useEffect } from "react";
import carritoImg from "./carritoImg.png";
import { Container } from "react-bootstrap";
import { carritoContext } from "../contex/CarritoProvider";


export default function CartWidget() { 
    
    const {cantidadTotal} = useContext(carritoContext);
    const [cantTotal, setCantTotal] = useState(0);
    
    useEffect(() => {
        setCantTotal(cantidadTotal());
    }, []); 
    
    return (
        <>
            <div className={Container} id="contadorCart">
                <img src={carritoImg} alt="imagen carrito" />
                <div id="contador">{cantTotal}</div>
            </div>    
         </>
   )
} 