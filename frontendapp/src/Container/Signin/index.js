import React from 'react'
import Layout from '../../Components/Layout'
import { Container, Card, CardGroup, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Signin() {
    return (
        <div>
            <Layout>
                <div style={{
                    backgroundImage: "url(/img/signinup.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize : "cover",
                    width: '100%',
                    height: '100%',
                    minHeight:"100vh"
                }}>

                    <div className="container detailedform">
                        <Form className="onlyform">
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
