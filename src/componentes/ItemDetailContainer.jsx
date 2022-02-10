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
        setProducto({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);
      })            
      
    }, [itemId])

        return (
            <>
                <div className="flex">
                    <ItemDetail producto={producto} />
                </div>
            </>
)
    
}