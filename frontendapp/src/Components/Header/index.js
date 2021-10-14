
import React from 'react';


import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import ToggleMode from '../ToggleMode'

// import '../ToggleMode/Toggle.css';

export default function Header(props) {

    // const getMode = () => {
    //     return JSON.parse(localStorage.getItem("Mode")) || false;
    // }


    // const [dark, setMode] = useState(getMode);

    // useEffect(() => {
    //     localStorage.setItem("Mode", JSON.stringify(dark))
    // }, [dark]);


    let dark = props.mode;

    return (
        // <div className = "container">
        <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"} expand="lg">
            {/* <Link to="/" className="navbar-brand">  NGO Helper</Link> */}
            <Container>
                <Navbar.Brand href="/">NGO Helper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavLink className="nav-item nav-link" to="/aboutus">About Us</NavLink>
                        <NavLink className="nav-item nav-link" to="/contactus">Contact Us</NavLink>
                        <NavLink className="nav-item nav-link" to="/blogs"><strong>Blog</strong></NavLink>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    <Nav>
                        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}

                        {/* this whole part needs to be activated with the same classes as in bootsrap so that the design remains the same */}

                        <li className="nav-item">
                            <NavLink to="signin" className="nav-link"> SignIn </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="signup" className="nav-link"> SignUp </NavLink>

                        </li>

                        <li className="nav-item">
                            <ToggleMode dark = {props.dark} Togglemode = {props.Togglemode}></ToggleMode>
                            {/* <>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        // checked ={dark}
                                        onChange={props.Togglemode}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </> */}
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        // </div>
    )
}
