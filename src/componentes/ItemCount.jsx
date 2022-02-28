import React, { useState } from "react";
import { Button} from "react-bootstrap/"

export default function ItemCount({tope, onAdd}) {

    
    const [cantidad, setCantidad] = useState(1);
    
    function sumar() {
        if(cantidad < tope) setCantidad(cantidad + 1)
    }
    
    function restar() {
        if(cantidad > 1) setCantidad(cantidad - 1) 
    }    
    
    return (

        <>
            <div className="botones">
                <Button variant="primary" onClick={() => onAdd({cantidad})} id="btnAgregar">Agregar al carrito</Button>
            </div>
            <div className="estiloCont">
                <button onClick={() => restar()} id="btnContador">-</button>
                <div id="negrita">{cantidad}</div>
                <button onClick={() => sumar()} id="btnContador">+</button>
            </div>
        </>
)

}