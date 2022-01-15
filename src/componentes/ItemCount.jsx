import React, {useState} from "react";

export default function ItemCount({tope}) {

    
    const [cantidad, setCantidad] = useState(0);
    
    function sumar() {
        if(cantidad < tope) setCantidad(cantidad + 1)
    }
    
    function restar() {
        if(cantidad > 1) setCantidad(cantidad - 1) 
    }    
    
    return (

        <>
            <span onClick={()=>restar()}> - </span>
            {cantidad}
            <span onClick={()=>sumar()}> + </span>
            <br />
            <br />
        </>
)

}