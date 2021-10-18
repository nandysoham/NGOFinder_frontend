import React,{useState} from 'react'
import Layout from '../../Components/Layout'
import {  Form, Button } from 'react-bootstrap'



import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom'

export default function Signin(props) {

    let history = useHistory()


    const [signin, setsignin] = useState({email:"", password:""})

    const onChange =(e)=>{
        setsignin({...signin,[e.target.name]:e.target.value})
    }


    

    const submitsignin = async(email,password)=>{
        console.log("hello you just submitted your form");
        console.log(email, password);


    
        const response = await fetch("http://localhost:2000/api/indiv/login",{

            method :"POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({email,password})

        })

        const token = await response.json();

        // you can ideally pass a success parameter for everything
        if(token.success){
            console.log(token.authtoken);
            localStorage.setItem("indivtoken",token.authtoken);
            localStorage.setItem("type",token.type)
            // localStorage.setItem("user",token.user)
            history.push("/")
            
        }
        else{
            alert(token.error)
            
        }
    }

    const handleClick = (e)=>{
        e.preventDefault();
        submitsignin(signin.email, signin.password);
        setsignin({email:"", password:""})    // open this if you want your user to reenter the credentials after he logged out
    }

    return (
        <div>
            <Layout mode = {props.mode} Togglemode = {props.Togglemode}>
                <div style={{
                    backgroundImage: props.mode ? "url(/img/signinupblack.jpg)" :"url(/img/signinup.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize : "cover",
                    width: '100%',
                    height: '100%',
                    minHeight:"100vh"
                }}>
                    <div className="container">
                        <h2 className="text-center " style={{color:"white", paddingTop:"80px"}}> User Login</h2>
                    </div>

                    <div className="container detailedform">
                        <Form className="onlyform" onSubmit={handleClick}>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={signin.email} id="email" name="email" onChange={onChange}  />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={signin.password} id="password" name ="password" onChange={onChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>

                </div>
            </Layout>
        </div>
    )
}
