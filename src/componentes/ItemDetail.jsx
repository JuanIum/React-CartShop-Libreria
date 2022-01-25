import React from "react";
import { Button, Card} from "react-bootstrap/"
import ItemCount from "./ItemCount";
    
   export default function ItemDetail({ producto }) {

      function onAdd() {
        alert(producto.nombre + " " + producto.stock);
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
                                   <div className="botones">
                                       <Button variant="primary" onClick={() => onAdd()}>Agregar al carrito</Button>
                                   </div>
                                   <ItemCount tope={producto.stock} />
                               </Card.Body>
                           </Card>
                       }</>
                       :
                       <>Loading...</>
                }
            </div>
        </>
    );
}