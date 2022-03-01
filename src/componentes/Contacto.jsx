import React, { useState, useContext, useRef } from "react";
import { carritoContext } from "../contex/CarritoProvider"
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'

export default function Contacto() {

    const {carrito, sumaTotal} = useContext(carritoContext);
    
    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: carrito,
            total: sumaTotal(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (

        <>
            {orderId && (<h1>Felicitaciones tu order se registro bajo el ID: {orderId}</h1>)}

            <div id="contactoForm">
                <h3 id = "tituloForm">Ingresá tus datos:</h3>
                <br />

                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" />
                <br />
                <br />
                
                <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" />
                <br />
                <br />
                
                <input type="text" name="email" ref={emailRef} placeholder="Email" />
                <br />
                <br />

                <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                <br />
                <br />

                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                <br />
                <br />

                <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                <br />
                <br />

                <button onClick={() => handleClick()} id="btnForm">Enviar datos</button>
            </div>
        </>
    )
}
