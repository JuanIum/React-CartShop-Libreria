import React, {createContext, useState} from 'react';

export const carritoContext = createContext();

const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    
    const enCarrito = (id) => { 
    
        return carrito.some(element => element.item.id === id)
        
    }
    
    const addCarrito = (producto, cantidad) => {
        if (enCarrito(producto.id)){
            const indexItem = carrito.findIndex(element => element.item.id === producto.id);
            carrito[indexItem].cantidad = carrito[indexItem].cantidad + cantidad;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, { item: producto, cantidad: cantidad }]);             
        }
    }

    const sumaTotal = () => {

        return carrito.reduce((a, b) => a + (b.item.precio * b.cantidad), 0);
    
    }  

    const cantidadTotal = () => {

        return carrito.reduce((a, b) => a + b.cantidad, 0);
    
    }
    
    const borrarProducto = (id) => {
        const carritoActualizado = carrito.filter(element => element.item.id !== id);
        setCarrito(carritoActualizado);
    }
    

    const borrarCarrito = () => {

        return setCarrito([]);
        
    }
    
    return (
        <>
            <carritoContext.Provider value={{carrito, addCarrito, borrarProducto, borrarCarrito, sumaTotal, cantidadTotal}}>
                {children}
            </carritoContext.Provider>
        </>
    )
};

export default CarritoProvider;



 
