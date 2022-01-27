import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap/";

export default function Footer({ arrayDeLink }) {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="./">Librería online</Navbar.Brand>
                    <Nav className="me-auto">
                        {arrayDeLink.map(link => {
                            return <Nav.Link href={link.enlace}> {link.seccion}</Nav.Link>
                        })}
                        <Nav.Link href="./"><CartWidget /> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
