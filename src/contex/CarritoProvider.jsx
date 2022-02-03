import React, {createContext, useState} from 'react';

export const carritoContext = createContext();

const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    
    const addCarrito = (producto, cantidad) => {
        
        setCarrito([...carrito, {item: producto, cantidad: cantidad}]);     
    
    }

    return (
        <>
            <carritoContext.Provider value={{carrito, addCarrito}}>
                {children}
            </carritoContext.Provider>
        </>
    )
};

export default CarritoProvider;



 
