import React, { useContext, useState, useEffect } from "react";
import { carritoContext } from "../contex/CarritoProvider";
import CarritoItem from "./CarritoItem";
import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import TestUpdate from "./TestUpdate";

const Carrito = () => {

    const {carrito, borrarCarrito, sumaTotal, cantidadTotal} = useContext(carritoContext);
    const [ total, setTotal ] = useState(0);    
    const [cantTotal, setCantTotal] = useState(0);

    useEffect(() => {
        setTotal(sumaTotal());   
    }, []); 

    useEffect(() => {
        setCantTotal(cantidadTotal());
    }, []); 

    
    return (
        <>
            {carrito.length === 0 ?
            <div>
                <p>No agregaste nada al carrito</p>
                <Link to="/" >Volver a la página principal</Link>
            </div>
            :
            <div className="mostrarCarrito">
                    {carrito.map(element => <CarritoItem key={element.item.id} producto={element} />)}
                    <h1>{cantTotal}</h1>
                    <h1>{total}</h1>                   
                    <Contacto />
                    <TestUpdate />
                    <button onClick={() => { borrarCarrito() }}>Vaciar Carrito</button>
            </div>}          
        </>
)}


export default Carrito;
