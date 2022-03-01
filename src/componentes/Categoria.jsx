import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Item from "./Item.jsx"
import { getFirestore } from '../firebase/firebase'
import Loader from "./Loader";

export default function Categoria() {
  
    const [loading, setLoading] = useState(false);
    const { categoriaId } = useParams();
    const [arrayDeProductos, setArraydeProductos] = useState([]);
       
    useEffect(() => {
        
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items").where("categoria", "==", categoriaId);
    
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
      .catch((err)=>{console.log(err);})  
      .finally(() => setLoading(false)) 
        console.log(categoriaId)

    }, [categoriaId]);

 return (
        <>
            <div className="flex">
                    { loading ? <Loader/> : arrayDeProductos.map(item => {return <Item key={item.id} item={item} />})}
            </div>     
        </>
)}