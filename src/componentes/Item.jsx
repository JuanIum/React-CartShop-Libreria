import React, { useState, useContext } from "react";
import {Card} from "react-bootstrap/"
import {Link} from "react-router-dom";
import { carritoContext } from "../contex/CarritoProvider";
import ItemCount from "./ItemCount";

export default function Item({ item }) {

    const { addCarrito } = useContext(carritoContext);
    const [mostrarBoton, setMostrarBoton] = useState(true);

    function onAdd({ cantidad }) {
          
          alert("Quiero agregar " + cantidad + " ejemplares de " + item.titulo);
          addCarrito(item, cantidad);
          setMostrarBoton(false);
        
    }

    return (
        <>      
            <Card style={{ width: '18rem' }} id = "centrarTexto">
                <Card.Img id = "imgProducto" variant="top" src= {item.src} />
                <Card.Body>
                    <Card.Title id = "tituloProducto">{item.titulo}</Card.Title>
                    <Card.Text>{item.precio}</Card.Text>
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
                                               <Link to= "/carrito">Terminar mi compra</Link>                    
                                           </div>                                       
                                   }
                    </div>                    
                </Card.Body>
            </Card>
        </>
    )
}