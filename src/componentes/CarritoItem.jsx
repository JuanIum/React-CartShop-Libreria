
import React, {useContext} from "react";
import { carritoContext } from "../contex/CarritoProvider"

const CarritoItem = ({producto}) => {
    
        const {borrarProducto} = useContext(carritoContext);

    return (
        <>
            <div key={producto.item.id} className="bordeBlanco">
                <img src={producto.item.imagen} alt="imagen producto" />
                <h3>{producto.item.titulo}</h3>
                <p>Cantidad: <strong>{producto.cantidad}</strong></p>
                <p>Subtotal: <strong>${producto.cantidad*producto.item.precio}</strong></p>
                <button onClick={() => borrarProducto(producto.item.id)} id="botonCarrito">Borrar</button>
            </div>
        </>
)

}

export default CarritoItem;


