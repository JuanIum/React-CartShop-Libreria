import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap/";

export default function NavBar({ arrayDeLink }) {

    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand><Link id="navLogo" to = "/">Librería <br/> online</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        {arrayDeLink.map(link => {
                            return <Link id = "navBar" to ={link.enlace}> {link.seccion}</Link>
                        })}
                        <Link to="/carrito" id="navCart"><CartWidget /> </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

