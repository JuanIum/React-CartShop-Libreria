import React from "react";
import ItemList from './ItemList'

export default function ItemListContainer(props){
    return (
        <>
            <p className="greeting">{props.greeting}</p>
            <ItemList />
        </>
   )
} 