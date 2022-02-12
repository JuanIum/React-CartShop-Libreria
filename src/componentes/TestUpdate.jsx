import React, { useEffect } from "react";
import { getFirestore } from '../firebase/firebase';

export default function TestUpdate() {

    useEffect(() => {

        const db = getFirestore();
        const docRef = db.collection("items").doc("NmfjHI8fX3uXiyjkH0HV");

        docRef.update({})
            .then(() => {
                console.log('cambio el stock!');
            })
            .catch((err) => {
                console.log(err);
            });


    }, [])


    return (
        <>
        </>
    );
}