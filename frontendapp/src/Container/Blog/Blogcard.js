import React from 'react'
import { Container, Card, CardGroup, Row, Col, Button } from 'react-bootstrap'


export default function Blogcard(props) {
    return (
        <Card style={{ width: '30rem', height: '30rem', borderRadius:"15px", backgroundColor:props.mode ? "#3c3939" : "white" , color: props.mode ? "white" : "black"}} className ="my-4">
            <Card.Img variant="top" src={"http://localhost:2000/static/"+props.baseimgurl} style={{height:"20rem",borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="dark" href={props.linktourl}>Read more...</Button>
            </Card.Body>
        </Card>
    )
}

{/* // src={"http://localhost:2000/static/"+props.baseimgurl}
// {props.title}
// {props.desc} */}