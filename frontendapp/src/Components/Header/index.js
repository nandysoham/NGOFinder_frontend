
import React,{useState,useEffect} from 'react';


import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import ToggleMode from '../ToggleMode'
import axios from "axios"
// import '../ToggleMode/Toggle.css';
import "./header.css"
export default function Header(props) {

    // const getMode = () => {
    //     return JSON.parse(localStorage.getItem("Mode")) || false;
    // }


    // const [dark, setMode] = useState(getMode);

    // useEffect(() => {
    //     localStorage.setItem("Mode", JSON.stringify(dark))
    // }, [dark]);
    const [profile, setprofile] = useState({})

    let dark = props.mode;

    let history = useHistory()

    const onclicksignout = () => {
        console.log("hello in onclicksignout")
        if (localStorage.getItem("type") == "indiv") {
            localStorage.removeItem("type")
            localStorage.removeItem("indivtoken")
            // localStorage.removeItem("user")
            history.push("/indiv/signin")
        }

        if (localStorage.getItem("type") == "company") {
            localStorage.removeItem("type")
            localStorage.removeItem("companytoken")
            history.push("/company/signin")
            // localStorage.removeItem("user")

        }
    }

    const fetchindivuser = ()=>{

        


    }

    useEffect(()=>{
        if(localStorage.getItem("indivtoken")){
           const indivdata =  fetchindivuser()
           console.log(indivdata)


           var options = {
            method: 'GET',
            url: 'http://localhost:2000/api/indiv/getindivdetails',
            headers : {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem("indivtoken")
            }
          };

          axios.request(options).then(function (response) {
            // console.log(response.data);
            setprofile(response.data.userindiv)
            // profilepicture
            // profile.profilePicture[0].img
            console.log(profile.profilePicture);
            
        }).catch(function (error) {
            console.error(error);

        });
                        
        }

    },[])

    return (
        // <div className = "container">
        <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"} expand="lg" style={{width:"100vw"}}>
            {/* <Link to="/" className="navbar-brand">  NGO Helper</Link> */}
            <Container >
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

                    <Nav >
                        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
{/* {"http://localhost:2000/staticimdiv/"+profile.profilePicture[0].img} */}
                        {/* this whole part needs to be activated with the same classes as in bootsrap so that the design remains the same */}
                        {localStorage.getItem("indivtoken") || localStorage.getItem("companytoken") ?
                           <>  
                                <h6 style={{padding:"7px"}}> Hi {profile.name} ! </h6>
                                <div className="profile-image" style={{overflow:"hidden"}}>
                                    
                                    <img src={profile.profilePicture ? "http://localhost:2000/staticindiv/"+profile.profilePicture[0].img : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"}  className="profile-image img-circle" style={{
                                    transform:"scale(1.5)"
                                }}/>

                                </div>
                                 
                                
                                <NavDropdown  id="basic-nav-dropdown"> 
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/company/viewcompany/bydistance">View NGOs</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" ><Link to="#" role="button" onClick={onclicksignout} > Logout</Link> </NavDropdown.Item>
                                </NavDropdown>
                                {/* <li className="nav-item">
                                    <NavLink to="/" className="nav-link" onClick={onclicksignout}> Logout </NavLink>

                                </li> */}

                            </>

                            :
                            <>
                                <li className="nav-item">
                                    <NavLink to="signin" className="nav-link"> SignIn </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="signup" className="nav-link"> SignUp </NavLink>

                                </li>
                            </>

                        }


                        <li className="nav-item">
                            <ToggleMode dark={props.dark} Togglemode={props.Togglemode}></ToggleMode>
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
