import React, { useState, useContext } from "react";
import {Card} from "react-bootstrap/"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { carritoContext } from "../contex/CarritoProvider";
    
export default function ItemDetail({ producto }) {
       
    const { addCarrito } = useContext(carritoContext);
    
    const [mostrarBoton, setMostrarBoton] = useState(true);
       
    function onAdd({ cantidad }) {
          
          addCarrito(producto, cantidad);
          setMostrarBoton(false);
        
    }  
       return (
        <>
            <div>
                   {(producto.id) ?
                       <>{
                           <Card style={{ width: '30rem' }}>
                               <Card.Body>
                                   <Card.Title><><p> <strong>Título: </strong></p></> <p id = "tituloDetail">{producto.titulo}</p></Card.Title>
                                    <Card.Img  id="imgDetail" src={producto.imagen} alt = "imagen producto"/>                               
                                   <Card.Text><><strong>Autor/a: </strong></> {producto.autor}</Card.Text>
                                   <Card.Text><><strong>Año de publicación: </strong></> {producto.año}</Card.Text> 
                                   <Card.Text><><p> <strong>Sinopsis: </strong></p></> <p id = "sinopsis">{producto.sinopsis}</p></Card.Text>                                   
                                   <Card.Text><><strong>Precio: </strong>$</>{producto.precio}</Card.Text>
                                   <Card.Text><><strong>Stock: </strong></> {producto.stock}</Card.Text>
                                   {
                                       (mostrarBoton) ?
                                           <ItemCount tope={producto.stock} onAdd={onAdd} />
                                           :
                                           <div className="botones">
                                               <Link to= "/carrito" id="terminar">Terminar mi compra</Link>                    
                                           </div>                                       
                                   }
                               </Card.Body>
                           </Card>
                       }</>
                       :
                       <><p id="negrita">Procesando...</p></>
                }
            </div>
        </>
    );
}