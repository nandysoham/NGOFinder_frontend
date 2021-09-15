import React from 'react'

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export default function Header(props) {
    return (
        // <div className = "container">
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/" className="navbar-brand"> NGO Helper</Link>
            <Container>
                {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}

                        {/* this whole part needs to be activated with the same classes as in bootsrap so that the design remains the same */}
                        <li className="nav-item">
                            <NavLink to="signin" className="nav-link"> Signin </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="signup" className="nav-link"> Signup </NavLink>

                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        // </div>
    )
}
