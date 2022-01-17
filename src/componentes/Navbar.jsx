import React from "react";
import CartWidget from "./CartWidget"
import { Navbar, Nav, Container} from "react-bootstrap/"

export default function NavBar({arrayDeLink}) { 

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">La Mandrágora - Librería</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link"><CartWidget /> </Nav.Link>
                            <Nav.Link href="#home">Contáctenos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
   )
} 

