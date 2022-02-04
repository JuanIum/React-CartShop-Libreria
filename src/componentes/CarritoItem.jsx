
import React, {useContext} from "react";
import { carritoContext } from "../contex/CarritoProvider"

const CarritoItem = ({producto}) => {
    
        const {borrarProducto} = useContext(carritoContext);


    
    return (
        <>
            <div key={producto.item.id}>
                <h3>{producto.item.nombre}</h3>
                <p>Cantidad: {producto.cantidad}</p>
                <button onClick={() => borrarProducto(producto.item.id)}>Borrar</button>
            </div>
        </>
)

}

export default CarritoItem;


