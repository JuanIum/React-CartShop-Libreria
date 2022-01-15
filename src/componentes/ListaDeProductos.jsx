import React, {useState} from "react";
import Productos from "./Productos.jsx"

export default function ListaDeProductos(){
    
    const [arrayDeProductos, setArraydeProductos] = useState([{ nombre: "La Mandrágora", stock: 5 }, { nombre: "El nombre de la Rosa", stock: 6 }, { nombre: "Drácula", stock: 7 }])
    
    return(

        <>
            {
                arrayDeProductos.map(item => {
                return <Productos item = {item}/>})
            }  
        </>

)}