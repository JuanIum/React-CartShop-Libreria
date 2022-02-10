import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getFirestore } from '../firebase/firebase'

export default function Categoria({productos}) {

    const { categoriaId } = useParams();
    const [arrayDeProductos, setArraydeProductos] = useState([]);
       
    useEffect(() => {
        
        
    const db = getFirestore();
    const itemCollection = db.collection("items")

    itemCollection.get()
      .then((querySnapShot) => {

        if (querySnapShot.size === 0) {
          console.log('no hay documentos con en ese query');
          return
        } 

        console.log('hay documentos');
        setArraydeProductos(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ));
        
      })
      .catch((err)=>{
        console.log(err);
      })  
        
        setArraydeProductos(productos.filter(item => item.categoria === categoriaId));
        
        console.log(categoriaId)

    }, [categoriaId]);

    return (
        <>
            <div  className="flex">
                {arrayDeProductos.map(item =>
                    <Card style={{ width: '18rem' }} id="itemCategoria">
                        <Card.Img id="imgProducto" variant="top" src= {item.src} />
                        <Card.Body>
                            <Card.Title id="tituloProducto">{item.nombre}</Card.Title>
                            <Card.Text>Autor/a: {item.autor}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    )
} 