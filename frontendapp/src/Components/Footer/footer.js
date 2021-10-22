import React,{useEffect, useState} from 'react'
import "./footer.css"
import axios from 'axios' 

export default function Footer(props) {

    const [email, setemail] = useState("")


    const onChange = (e)=>{
        setemail(e.target.value)
    }


    const submitemail = async(email)=>{
        
        const response = await fetch("http://localhost:2000/api/addtonewsletter",{

            method :"POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({email})

        })

        const token = await response.json();
        if(token.success == false){
            alert(token.error)
        }
        else{
            setemail("")
        }

       
    }
    const onsubmithandler=(e)=>{
        e.preventDefault();
        submitemail(email)

    }

    const [locator, setlocator] = useState({})


    useEffect(()=>{
        var options = {
            method: 'GET',
            url: `http://localhost:2000/api/getweather`,
           
          };
    
          try {
            axios.request(options).then(function (response) {
                setlocator(response.data)
                console.log(locator);

            }).catch(function (error) {
                console.error(error);
                
            });
            
              
          } catch (error) {
              console.log(error);

              
          }
    },[])

    return (
        <div>



            <footer class="new_footer_area bg_color " style={{marginTop:"5px", width:"100vw"}} >
                <div class="new_footer_top" style={{backgroundColor: props.mode ? "rgb(40 30 30)" : "white"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new blogs and news!</p>
                                    <form class="f_subscribe_two mailchimp" onSubmit={onsubmithandler} >
                                        <input type="text" name="email" class="form-control memail" value = {email} onChange={onChange} placeholder="Email" />
                                        <button class="btn btn_get btn_get_two" type="submit" >Subscribe</button>
                                        <p class="mchimp-errmessage" style={{display:"none"}}></p>
                                        <p class="mchimp-sucmessage" style={{display:"none"}}></p>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Android App</a></li>
                                        <li><a href="#">ios App</a></li>
                                        <li><a href="#">Desktop</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div class="f_social_icon">
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-twitter"></a>
                                        <a href="#" class="fa fa-linkedin"></a>
                                        <a href="#" class="fa fa-pinterest"></a>
                                    </div>
                                </div>
                                <div className="row my-3">
                                <h6 style={{color:"#538ae5"}}> {locator.location ? locator.location.name+","+locator.location.country: ""}</h6>
                                    <div className="col-md-2 mx-3">
                                        <img src={locator.current ? "http:"+locator.current.condition.icon : ""} alt=""/> 
                                    </div>
                                    <div className="col-md-2 mx-3" style={{paddingTop:"20px"}}>
                                    
                                    <h6 > <center>{locator.current ? locator.current.condition.text: ""}</center></h6>
                                    
                                    </div>

                                <h6> {locator.current ? "Temp: "+locator.current.temp_c + " °C": ""} </h6>
                                <h6> {locator.current ? "Humidity: "+locator.current.humidity + " %": ""} </h6>
                                <h6> {locator.current ? "Wind: "+locator.current.wind_kph + " Km/h": ""} </h6>
                                <h6> {locator.current ? "UV: "+locator.current.uv + " %": ""} </h6>

                                    <div className="container">
                                        <h6>{locator.current ? "Air Pollution(PM 2.5): "+Math.trunc(locator.current.air_quality.pm2_5)+" ": ""} <i class="fa fa-heart" aria-hidden="true" style={{
                                            color: locator.current ? (locator.current.air_quality.pm2_5 > 150? "red" : (locator.current.air_quality.pm2_5 <= 150 && locator.current.air_quality.pm2_5 > 100 ? "orange" : (locator.current.air_quality.pm2_5 <= 100 && locator.current.air_quality.pm2_5 > 50 ? "yellowgreen" : "green"))): "white" 
                                            }}></i> </h6>
                                        
                                    </div>
                                    
                                    
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-7">
                                <p class="mb-0 f_400">© Ecology Team  2021 All rights reserved.</p>
                            </div>
                            <div class="col-lg-6 col-sm-5 text-right">
                                <p>Made by <i class="icon_heart"></i>  <a href="http://github.com/nandysoham" target="_blank">nandysoham</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
