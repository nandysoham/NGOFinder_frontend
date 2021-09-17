import React from 'react'
import Layout from '../../Components/Layout'
import { Container, Card, CardGroup, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Signin(props) {
    return (
        <div>
            <Layout mode = {props.mode} Togglemode = {props.Togglemode}>
                <div style={{
                    backgroundImage: props.mode ? "url(/img/signinupblack.jpg)" :"url(/img/signinup.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    width: '100%',
                    height: '100%',
                    minHeight: "100vh"
                }}>

                    <div className="container detailedform">
                        <Form className="onlyform">
                        <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name of Organisation</Form.Label>
                                    <Form.Control type="Text" placeholder="Enter name of your Organisation" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>
                            

                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Reconfirm password" />
                                </Form.Group>

                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
  </Button>
                        </Form>
                    </div>

                </div>
            </Layout>
        </div>
    )
}
