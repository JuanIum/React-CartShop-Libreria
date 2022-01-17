import React, {useState, useEffect} from "react";
import Productos from "./Item.jsx"

export default function PromesaListaDeProductos(){
    
    const [promesaCumplida, setPromesaCumplida] = useState(false);
    const [arrayDeProductos, setArraydeProductos] = useState([{ id: 1, nombre: "La Mandrágora", precio: "$100", stock: 5, src: "./foto1.png" }, { id: 2, nombre: "El nombre de la Rosa", precio: "$150", stock: 6, src: "./foto2.png" }, { id: 3, nombre: "Drácula", precio: "$200", stock: 7, src: "./foto3.png" }])
    
    const promesaDeProductosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayDeProductos);
        }, 3000)
    });

    useEffect(() => {
        promesaDeProductosEnStock
            .then(res =>{
                setPromesaCumplida(true);
                setArraydeProductos(res);
            })

            .catch(err => {
                setPromesaCumplida(true);
                console.log(err);
            })
    })
    
    return (
    <>
        {(promesaCumplida) ? 
            <>
                {
                    arrayDeProductos.map(item => {
                    return <Productos item = {item}/>})
                }  
            </>
            : <>Procesando...</>}
    </>
)}