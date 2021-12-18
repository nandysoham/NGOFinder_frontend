import React,{useState,useEffect} from 'react';
import axios from "axios"
import './indivDash.css'
import { Link } from 'react-router-dom'

import Layout from '../../Components/Layout'
import Showprofile from './Showprofile';
import Blogsbyauthor from './Blogsbyauthor';

const IndivDash = (props) => {
    

    const [profile, setprofile] = useState({})
    useEffect(() => {
        var options = {
            method: 'POST',
            url: 'http://localhost:2000/api/indiv/getindivdetails',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("indivtoken")
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

    }, [])

    const togglesidebar =()=>{
        document.getElementById("websidebar").style.width = "0";
        document.getElementById("mainbody").style.marginLeft = "0";
    }

return (


    <div>
        <div className="container">
            {/* col-md-3 */}
            <div className="" id="websidebar" style={{
                backgroundColor: "#06213c",
                // opacity: "70%",
                height: "100%",
                minHeight: "100vh",
                width: "250px",
                top: 0,
                left: 0,
                position: 'fixed',
                overflowY :'scroll',
                zIndex : 1

            }}>

                <div className="container" style={{
                    height: "auto",
                    backgroundColor: "#0a1928",
                    marginBottom: "10px",
                    color:"white",
                    fontSize:"30px"
                    
                }}>
                    NGO Helper
                    

                </div>

                <div className="container">
                <img src={profile.profilePicture ? "http://localhost:2000/staticindiv/"+profile.profilePicture[0].img : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"}  className="profile-image img-circle" style={{
                        // transform:"scale(2.0)",
                        height:"80px",
                        width:"80px",
                        marginTop:"20px",
                        borderRadius:"50%",
                        opacity:"100%"
                    }}/>
                    <div className="container my-3" style = {{color:"whitesmoke"}}>
                        {profile.name}!
                    </div>
                </div>

                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</Link>
                    <Link class="nav-link" id="v-pills-NGOs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-NGOs" type="button" role="tab" aria-controls="v-pills-NGOs" aria-selected="false">NGOs</Link>
                    <Link class="nav-link" id="v-pills-blogs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-blogs" type="button" role="tab" aria-controls="v-pills-blogs" aria-selected="false">Blogs</Link>
                    <Link class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</Link>


                    {/* <Link to="/" class="nav-link" id="v-pills-back-tab" >Back</Link> */}
                    <button class="nav-link" id="v-pills-back-tab" onClick={togglesidebar}>hide</button>


                    
                </div>

                



            </div>
            {/* col-md-10 */}
            <Layout mode={props.mode} Togglemode={props.Togglemode}>
            <div className="container" id="mainbody" style={{
                
                height: "100%",
                minHeight: "100vh",
                width:"80vw",

                top: "10px",
                right: "10px",
                marginLeft : "250px",

                // position: 'relative'

            }}>
                
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <Showprofile profile={profile}/>
                    </div>
                    <div class="tab-pane fade" id="v-pills-NGOs" role="tabpanel" aria-labelledby="v-pills-NGOs-tab">hello to the ngos</div>
                    <div class="tab-pane fade" id="v-pills-blogs" role="tabpanel" aria-labelledby="v-pills-blogs-tab">
                        <Blogsbyauthor profile = {profile}/>
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                </div>


            </div>

            </Layout>
            
        </div>
    </div>


)
}

export default IndivDash
