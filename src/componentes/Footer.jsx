import React from "react";
import { Nav } from "react-bootstrap/";

export default function Footer({ arrayDeLink }) {

    return (
        <>
            <footer className="page-footer font-small pt-4" id = "colorFooter">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase" id="letrasBlancas">Acerca de nosotros</h5>
                            <p id="letrasBlancas"><br/> La Librería online es un espacio de venta online <br/> de libros (novelas y cuentos) con los títulos más <br/> destacados de la literatura. Para mayor informacion <br/> mandanos un correo a libreriaonline@gmail.com <br/> y sacate todas las dudas!</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase" id="letrasBlancas">Enlaces</h5>
                            <ul className="list-unstyled">
                                {arrayDeLink.map(link => {
                                    return <Nav.Link href={link.enlace} id="letrasBlancas"> {link.seccion}</Nav.Link>
                                })}
                                <Nav.Link href="/carrito" id="letrasBlancas">Carrito</Nav.Link>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="footer-copyright text-center py-3" id="letrasBlancas">© 2022 Copyright:
                    <a href="/" id="sinEstilo"> libreriaonlineapp.com</a>
                </div>

            </footer>
        </>
    )
}
