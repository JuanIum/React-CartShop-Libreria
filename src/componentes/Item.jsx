import React from "react";
import { Button, Card} from "react-bootstrap/"

export default function Productos({ item }) {

    return (
        <>      
            <Card style={{ width: '18rem' }} id = "centrarTexto">
                <Card.Img id = "imgProducto" variant="top" src= {item.src} />
                <Card.Body>
                    <Card.Title id = "tituloProducto">{item.nombre}</Card.Title>
                    <Card.Text>{item.precio}</Card.Text>
                    <Card.Text>Stock: {item.stock}</Card.Text>
                    <div className="botones">
                    <Button variant="primary" className="btn1">Ver detalle</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}