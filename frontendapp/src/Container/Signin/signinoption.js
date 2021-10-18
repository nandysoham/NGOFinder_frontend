import React from 'react'
import Layout from '../../Components/Layout'

import {Link} from "react-router-dom"

import "./signin.css"

const signinoption = (props) => {
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
                        <h2 className="text-center " style={{color:"white",fontSize:"50px", paddingTop:"100px"}}> Hello Mate! Are you a </h2>
                    </div>

                    <div className="container detailedform" style={{padding:"100px"}}>
                        <Link className="choosebutton" to="/indiv/signin"> <i class="fa fa-user" aria-hidden="true"></i>  Individual</Link>
                        <Link className="choosebutton" to="/company/signin"><i class="fa fa-building-o" aria-hidden="true"></i>  NGO</Link>
                        
                    </div>

                </div>
            </Layout>
        </div>

    )
}

export default signinoption
