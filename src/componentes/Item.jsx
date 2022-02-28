import React, { useState, useContext } from "react";
import {Card} from "react-bootstrap/"
import {Link} from "react-router-dom";
import { carritoContext } from "../contex/CarritoProvider";
import ItemCount from "./ItemCount";

export default function Item({ item }) {

    const { addCarrito } = useContext(carritoContext);
    const [mostrarBoton, setMostrarBoton] = useState(true);

    function onAdd({ cantidad }) {
          
          addCarrito(item, cantidad);
          setMostrarBoton(false);
        
    }

    return (
        <>      
            <Card style={{ width: '18rem' }} id = "centrarTexto">
                <Card.Img id = "imgProducto" variant="top" src= {item.imagen} />
                <Card.Body>
                    <Card.Title ><p id = "tituloProducto">{item.titulo}</p></Card.Title>
                    <Card.Text>Precio: ${item.precio}</Card.Text>
                    <Card.Text>Stock: {item.stock}</Card.Text>
                    <div className="botones">
                    <Link id="btn" to={`/item/${item.id}`}>Ver detalle</Link>
                    </div>
                    <div>
                                 {
                                       (mostrarBoton) ?
                                           <ItemCount tope={item.stock} onAdd={onAdd} />
                                           :
                                           <div className="botones">
                                               <Link to= "/carrito" id="terminar">Terminar mi compra</Link>                    
                                           </div>                                       
                                   }
                    </div>                    
                </Card.Body>
            </Card>
        </>
    )
}