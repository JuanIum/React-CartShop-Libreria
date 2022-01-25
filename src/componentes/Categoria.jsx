import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Categoria() {

    const { categoriaId } = useParams();
    const [arrayDeProductos, setArraydeProductos] = useState([]);
       
    useEffect(() => {
        
        const productos = [
            { id: "001", nombre: "La Mandrágora", categoria: "novela", precio: "$100", stock: 5, src: "./foto1.jpg" },
            { id: "002", nombre: "El nombre de la Rosa", categoria: "novela", precio: "$150", stock: 6, src: "./foto2.jpg" },
            { id: "003", nombre: "Drácula", categoria: "novela", precio: "$200", stock: 7, src: "./foto3.jpg" },
            { id: "004", nombre: "Cuentos de amor, locura y muerte", categoria: "cuento", precio: "$250", stock: 8, src: "./foto4.jpg" }];
        
        setArraydeProductos(productos.filter(item => item.categoria === categoriaId));
        
        console.log(categoriaId)

    }, [categoriaId]);

    return (        
        <>
            <Link to={"/categoria/novela"}>novelas</Link>
            <br />
            <Link to={"/categoria/cuento"}>cuentos</Link>
            <br />
            <br />
            {arrayDeProductos.map(item => <div>{item.nombre}</div>)}

        </>
    )
}