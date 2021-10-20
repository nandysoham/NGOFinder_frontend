import React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'



export default function Layout(props) {
    return (
        <>
            <Header mode={props.mode} Togglemode = {props.Togglemode}/>
            {/* <Container> */}
            {props.children}

            {/* </Container> */}
            <Footer mode={props.mode} Togglemode = {props.Togglemode} ></Footer>
            
        </>
    )
}
