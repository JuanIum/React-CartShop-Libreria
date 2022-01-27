import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function Categoria({productos}) {

    const { categoriaId } = useParams();
    const [arrayDeProductos, setArraydeProductos] = useState([]);
       
    useEffect(() => {
        
        const productos = [
            { id: "001", nombre: "La Mandrágora", autor: "Hanz Heinz Ewers", categoria: "novela", precio: "$100", stock: 5, src:"./foto1.jpg"},
            { id: "002", nombre: "El nombre de la Rosa", autor: "Humberto Eco", categoria: "novela", precio: "$150", stock: 6, src:"./foto2.jpg"},
            { id: "003", nombre: "Drácula", autor: "Brahm Stoker", categoria: "novela", precio: "$200", stock: 7, src: "./foto3.jpg"},
            { id: "004", nombre: "Cuentos de amor, locura y muerte", autor: "Horacio Quiroga", categoria: "cuento", precio: "$250", stock: 8, src:"./foto4.jpg"}];
        
        setArraydeProductos(productos.filter(item => item.categoria === categoriaId));
        
        console.log(categoriaId)

    }, [categoriaId]);

    return (
        <>
            <div id="tituloCategoria">
                <Link to={"/categoria/novela"} id = "sinEstilo">Novelas</Link>
                <Link to={"/categoria/cuento"} id = "sinEstilo">Cuentos</Link>
            </div>
            <div  className="flex">
                {arrayDeProductos.map(item =>
                    <Card style={{ width: '18rem' }} id="itemCategoria">
                        <Card.Img id="imgProducto" variant="top" src= {item.src} />
                        <Card.Body>
                            <Card.Title id="tituloProducto">{item.nombre}</Card.Title>
                            <Card.Text>Autor/a: {item.autor}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    )
} 