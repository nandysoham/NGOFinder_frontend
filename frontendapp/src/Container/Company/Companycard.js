import React from 'react'
import "./companycard.css"


const Companycard = (props) => {
    return (
        <div className="card mb-3" style={{
            maxWidth: "1000px", 
            minHeight:"300px",
            boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius:"10px"
            }}>
            <div className="row g-0" style={{minHeight:"300px",borderRadius:"10px"}}>
                <div className="col-md-4" style={{minHeight:"300px",borderRadius:"10pxpx"}}>
                    <img src={"http://localhost:2000/staticcompany/"+props.companyprimaryimg} className="img-fluid rounded-start" style={{minHeight:"300px",borderRadius:"10pxpx"}} alt="..."/>
                    </div>
                    <div className="col-md-8" style={{minHeight:"300px"}}>
                        <div className="card-body" style={{minHeight:"300px"}}>
                            <h5 className="card-title">{props.companyname}</h5>
                            <p className="card-text">{props.companydetails}</p>
                            <div className="container" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <small><i className="fa fa-phone " style={{padding:"7px"}}/> {props.phone} </small> <br/>
                                        <small><i className="fa fa-envelope " style={{padding:"7px"}}/> {props.email} </small> <br/>
                                        <small><i className="fa fa-map-marker " style={{padding:"7px"}}/> {props.city+", "+props.country} </small> <br/>
                                    </div>
                                    <div className="col-md-6" style={{display:"flex", justifyContent:"right"}}>
                                    {/* <p className="card-text" ><small className="text-muted" >Last updated 3 mins ago</small></p> <br/> */}
                                    <div className="container" style={{display:"flexbox", height:"50px",justifyContent:"right"}}>
                                        <button type="button" className="btn btn-dark btn-sm">Read More ...</button>

                                    </div>
                                    
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Companycard
