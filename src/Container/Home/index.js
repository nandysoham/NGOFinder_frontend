import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../Components/Layout'


import "./gradient.css"
export default function Home(props) {

    useEffect(()=>{
        if (props.mode) {
            document.body.style.backgroundColor = "#2c2c2c"
        }
        else{
            document.body.style.backgroundColor = "white"
        }
    }, [props.mode])

    return (
        <div>
            <Layout mode={props.mode} Togglemode={props.Togglemode}>
                <div style={{position:"relative"}}>
                    <img

                        src={`${process.env.REACT_APP_BACKEND_URL}/staticerrors/woods.jpg`}
                        alt="First slide"
                        style={{ minHeight: "90vh", width: "100vw" }}
                    />


                    <div className="row" style={{position:"absolute", top:0, right:0, minHeight:"90vh"}}>
                        <div className="col-md-4"> </div>
                        <div className="col-md-8 gradient-text container" style={{fontSize:"50px", display:"flex", alignItems:"center"}}>
                            {/* <h1 className="" style={{}}> */}
                                Wish to be a part of your favourite NGO?...
                        </div>
                        
                    </div>
                </div>

                <div className="container">
                    <div className="row" style={{minHeight:"100vh"}}>
                        <div className="col-md-8" style={{minHeight:"100vh", display:"flex",flexDirection:"initial", alignItems:"center"}}>
                            <img src="https://res.cloudinary.com/dtwahiflz/image/upload/v1717936628/EcoImg/web_related/Screenshot_2024-06-09_at_6.01.32_PM_s7ffrm.png" alt="" style={{borderRadius:"5%", height:"40vh", width:"auto", boxShadow:"0 0 20px white"}} />
                        </div>
                        <div className="col-md-4 container " style={{minHeight:"100vh",display:"flex",flexDirection:"initial", alignItems:"center"}}>
                            <div>
                            <h1 className="gradient-text my-2">The Search ends here... </h1>
                            <h3 className="gradient-text2 my-2"> Find all your NGOs near you!</h3>
                            <Link to="/company/viewcompany/bydistance"><button className="btn btn-success my-5"> Take me to NGOs Quick!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row" style={{minHeight:"100vh"}}>
                        
                        <div className="col-md-4 container " style={{minHeight:"100vh",display:"flex",flexDirection:"initial", alignItems:"center"}}>
                            <div>
                            <h1 className="gradient-text my-2">Or Wish to reach out to people about their experiences... </h1>
                            <h3 className="gradient-text2 my-2"> We got you covered</h3>
                            <Link to="/blogs"><button className="btn btn-success my-5"> Jump to blogs!</button> </Link>
                            </div>
                        </div>
                        <div className="col-md-8" style={{minHeight:"100vh", display:"flex",flexDirection:"initial", alignItems:"center"}}>
                            <img src="https://res.cloudinary.com/dtwahiflz/image/upload/v1717952786/EcoImg/web_related/Screenshot_2024-06-09_at_10.36.11_PM_ychklq.png" 
                            alt="" style={{borderRadius:"5%", height:"50vh", width:"auto", boxShadow:"0 0 20px white"}} />
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    )
}
