import React, { useState, useContext } from "react";
import {Card} from "react-bootstrap/"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { carritoContext } from "../contex/CarritoProvider";
    
export default function ItemDetail({ producto }) {
       
    const { addCarrito } = useContext(carritoContext);
    
    const [mostrarBoton, setMostrarBoton] = useState(true);
       
    function onAdd({ cantidad }) {
          
          alert("Quiero agregar " + cantidad + " ejemplares de " + producto.titulo);
          addCarrito(producto, cantidad);
          setMostrarBoton(false);
        
    }  
       return (
        <>
            <div>
                   {(producto.id) ?
                       <>{
                           <Card style={{ width: '18rem' }}>
                               <Card.Img variant="top" src={producto.imagen} />
                               <Card.Body>
                                   <Card.Title>Título: {producto.titulo}</Card.Title>
                                   <Card.Text>Autor/a: {producto.autor}</Card.Text>
                                   <Card.Text>Año de publicación: {producto.año}</Card.Text> 
                                   <Card.Text><><p>Sinopsis:</p></>{producto.sinopsis}</Card.Text>                                   
                                   <Card.Text>Precio: ${producto.precio}</Card.Text>
                                   <Card.Text>Stock: {producto.stock}</Card.Text>
                                   {
                                       (mostrarBoton) ?
                                           <ItemCount tope={producto.stock} onAdd={onAdd} />
                                           :
                                           <div className="botones">
                                               <Link to= "/carrito">Terminar mi compra</Link>                    
                                           </div>                                       
                                   }
                               </Card.Body>
                           </Card>
                       }</>
                       :
                       <>Procesando...</>
                }
            </div>
        </>
    );
}