import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from '../firebase/firebase'


export default function ItemDetailContainer() {

    
    const { itemId } = useParams();
    const [producto, setProducto] = useState({});
    
    useEffect(() => {
        

        const db = getFirestore();

        const itemCollection = db.collection("items");

        const miItem = itemCollection.doc(itemId);
        
 
        miItem.get()    
      
            .then((doc) => {

        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }

        console.log('item found');
        setItem({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);
      })            

       // let listadoDeProductos = [
         //       { id: "001", nombre: "La Mandrágora", precio: "$100", stock: 5, src: "./foto1.jpg" },
           //     { id: "002", nombre: "El nombre de la Rosa", precio: "$150", stock: 6, src: "./foto2.jpg" },
             //   { id: "003", nombre: "Drácula", precio: "$200", stock: 7, src: "./foto3.jpg" },
               // { id: "004", nombre: "Cuentos de amor, locura y muerte", categoria: "cuento", precio: "$250", stock: 8, src: "./foto4.jpg" }];

       //     listadoDeProductos = listadoDeProductos.filter(item => item.id === itemId);
     //       let miProducto = listadoDeProductos[0];
         //   setProducto(miProducto);

        
    }, [itemId])

        return (
            <>
                <div className="flex">
                    <ItemDetail producto={producto} />
                </div>
            </>
)
    
}