import React from "react";
import {Card} from "react-bootstrap/"
import {Link} from "react-router-dom";

export default function Item({ item }) {

    return (
        <>      
            <Card style={{ width: '18rem' }} id = "centrarTexto">
                <Card.Img id = "imgProducto" variant="top" src= {item.src} />
                <Card.Body>
                    <Card.Title id = "tituloProducto">{item.nombre}</Card.Title>
                    <Card.Text>{item.precio}</Card.Text>
                    <Card.Text>Stock: {item.stock}</Card.Text>
                    <div className="botones">
                    <Link id="btn" to={`item/${item.id}`}>Ver detalle</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}