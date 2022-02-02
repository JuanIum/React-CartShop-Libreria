import React, { useState, useContext } from "react";
import {Button, Card} from "react-bootstrap/"
import ItemCount from "./ItemCount";
import { carritoContext } from "../contex/CarritoProvider";
    
export default function ItemDetail({ producto }) {
       
    const { addCarrito } = useContext(carritoContext);
    
    const [mostrarBoton, setMostrarBoton] = useState(true);
       
    function onAdd({ cantidad }) {
          
          alert("Quiero agregar " + cantidad + " ejemplares de " + producto.nombre);
          setMostrarBoton(false);
          addCarrito(producto, cantidad);

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
                                               <Button variant="primary" href ="/carrito">Terminar mi compra</Button>                    
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