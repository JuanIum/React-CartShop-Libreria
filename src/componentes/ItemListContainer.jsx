import React from "react";
import PromesaListaDeProductos from './ItemList'

export default function ItemListContainer(props){
    return (
        <>
            <p>{props.greeting}</p>
            <PromesaListaDeProductos />
        </>
   )
} 