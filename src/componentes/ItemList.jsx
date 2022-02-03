import React, {useState, useEffect} from "react";
import Item from "./Item.jsx"

export default function PromesaListaDeProductos(){
    
    const [promesaCumplida, setPromesaCumplida] = useState(false);
    const [arrayDeProductos, setArraydeProductos] = useState([
        { id:"001", nombre: "La Mandrágora", precio: "$100", stock: 5, src: "./foto1.jpg" },
        { id: "002", nombre: "El nombre de la Rosa", precio: "$150", stock: 6, src: "./foto2.jpg" },
        { id: "003", nombre: "Drácula", precio: "$200", stock: 7, src: "./foto3.jpg" },
        { id: "004", nombre: "Cuentos de amor, locura y muerte", categoria: "cuento", precio: "$250", stock: 8, src: "./foto4.jpg" }])
    
    const promesaDeProductosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayDeProductos);
        }, 1000)
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
            <div className="flex">
            {(promesaCumplida) ?
                <>
                    {
                        arrayDeProductos.map(item => {
                            return <Item key={item.id} item={item} />
                        })
                    }

                </>

                : <>Procesando...</>}
            </div>     
        </>
)}