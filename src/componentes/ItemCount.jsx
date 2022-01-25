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
            <button onClick={()=>restar()}> - </button>
            {cantidad}
            <button onClick={()=>sumar()}> + </button>
            <br />
            <br />
        </>
)

}