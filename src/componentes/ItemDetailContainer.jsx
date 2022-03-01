import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from '../firebase/firebase'
import Loader from "./Loader";

export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();
    const [producto, setProducto] = useState({});
    
    useEffect(() => {
      setLoading(true);
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
        .catch((err) => { console.log(err); })
        .finally(() => setLoading(false))      
      
    }, [itemId])

        return (
            <>
                <div className="flex">
                  {loading ? <Loader/> : <ItemDetail producto={producto} />}
                </div>
            </>
)
    
}