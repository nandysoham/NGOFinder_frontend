import React from 'react'
import { Card,Button } from 'react-bootstrap'
import "./blogcard.css"
import parse from 'html-react-parser'

export default function Blogcard(props) {
    return (
    // eslint-disable-next-line
        <Card className = "cardcustomclass" style={{display:"inline-block", overflow:"hidden", width: '30rem', minHeight: '30rem',  borderRadius:"15px", backgroundColor:props.mode ? "#2c2c2c" : "white" , color: props.mode ? "white" : "black"}} className ="my-4">
            <Card.Img className="cardimgid" variant="top" src={"http://localhost:2000/static/"+props.baseimgurl} style={{ height:"20rem",borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <h6>By {props.name}</h6>
                <Card.Text>
                    {parse(props.desc)}
                </Card.Text>
                <Button variant="dark" href={props.linktourl}>Read more...</Button>
            </Card.Body>
        </Card>
    )
}

