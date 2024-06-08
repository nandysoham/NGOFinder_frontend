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

          if(localStorage.getItem("weatherCachedData")){
              const weatherCachedData = JSON.parse(localStorage.getItem("weatherCachedData"));
                console.log("Inside here")
              const currentTime = new Date();
              if(currentTime - new Date(weatherCachedData.time) < 1000 * 60 * 60){
                  setlocator(weatherCachedData)
                  return;
              }
             
          }
    
          try {
            axios.request(options).then(function (response) {
                setlocator(response.data)
                const weatherCachedData = {...response.data, time: new Date()}
                localStorage.setItem("weatherCachedData", JSON.stringify(weatherCachedData));
                

            }).catch(function (error) {
                console.error(error);
                
            });
            
              
          } catch (error) {
              console.log(error);

              
          }
    },[])

    return (
        <div>



            <footer className="new_footer_area bg_color " style={{marginTop:"5px", width:"100vw"}} >
                <div className="new_footer_top" style={{backgroundColor: props.mode ? "rgb(40 30 30)" : "white"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new blogs and news!</p>
                                    <form className="f_subscribe_two mailchimp" onSubmit={onsubmithandler} >
                                        <input type="text" name="email" className="form-control memail" value = {email} onChange={onChange} placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit" >Subscribe</button>
                                        <p className="mchimp-errmessage" style={{display:"none"}}></p>
                                        <p className="mchimp-sucmessage" style={{display:"none"}}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Android App</a></li>
                                        <li><a href="#">ios App</a></li>
                                        <li><a href="#">Desktop</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">My tasks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Term &amp; conditions</a></li>
                                        <li><a href="#">Reporting</a></li>
                                        <li><a href="#">Documentation</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fa fa-facebook"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                        <a href="#" className="fa fa-linkedin"></a>
                                        <a href="#" className="fa fa-pinterest"></a>
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
                                        <h6>{locator.current ? "Air Pollution(PM 2.5): "+Math.trunc(locator.current.air_quality.pm2_5)+" ": ""} <i className="fa fa-heart" aria-hidden="true" style={{
                                            color: locator.current ? (locator.current.air_quality.pm2_5 > 150? "red" : (locator.current.air_quality.pm2_5 <= 150 && locator.current.air_quality.pm2_5 > 100 ? "orange" : (locator.current.air_quality.pm2_5 <= 100 && locator.current.air_quality.pm2_5 > 50 ? "yellowgreen" : "green"))): "white" 
                                            }}></i> </h6>
                                        
                                    </div>
                                    
                                    
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© Ecology Team  2021 All rights reserved.</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>Made by <i className="icon_heart"></i>  <a href="http://github.com/nandysoham" target="_blank">nandysoham</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
