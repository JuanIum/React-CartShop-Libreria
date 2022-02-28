
import React, {useContext} from "react";
import { carritoContext } from "../contex/CarritoProvider"

const CarritoItem = ({producto}) => {
    
        const {borrarProducto} = useContext(carritoContext);

    return (
        <>
            <div key={producto.item.id}>
                <img src={producto.item.imagen} alt="imagen producto" />
                <h3>{producto.item.titulo}</h3>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Subtotal: ${producto.cantidad*producto.item.precio}</p>
                <button onClick={() => borrarProducto(producto.item.id)}>Borrar</button>
            </div>
        </>
)

}

export default CarritoItem;


