import React from 'react'
import Header from '../Header'



export default function Layout(props) {
    return (
        <>
            <Header mode={props.mode} Togglemode = {props.Togglemode}/>
            {/* <Container> */}
            {props.children}

            {/* </Container> */}
            
        </>
    )
}
