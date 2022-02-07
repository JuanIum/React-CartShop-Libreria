import React, { useState, useContext } from "react";
import {Card} from "react-bootstrap/"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { carritoContext } from "../contex/CarritoProvider";
    
export default function ItemDetail({ producto }) {
       
    const { addCarrito } = useContext(carritoContext);
    
    const [mostrarBoton, setMostrarBoton] = useState(true);
       
    function onAdd({ cantidad }) {
          
          alert("Quiero agregar " + cantidad + " ejemplares de " + producto.nombre);
          addCarrito(producto, cantidad);
          setMostrarBoton(false);
        
    }  
       return (
        <>
            <div>
                   {(producto.id) ?
                       <>{
                           <Card style={{ width: '18rem' }}>
                               <Card.Img variant="top" src={producto.src} />
                               <Card.Body>
                                   <Card.Title>{producto.nombre}</Card.Title>
                                   <Card.Text>{producto.precio}</Card.Text>
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