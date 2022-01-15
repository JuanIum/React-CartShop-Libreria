import React from "react";
import ItemCount from "./ItemCount";

export default function Productos({item}){

    function onAdd() {
        alert(item.nombre + " " + item.stock);
    }
    
    return(
        <>Producto:
            <p>{item.nombre}</p>
            <p>{item.stock}</p>
            <div onClick={() => onAdd()}> Agregar al carrito</div>
            <ItemCount tope={item.stock}/>
        </>
    )
}