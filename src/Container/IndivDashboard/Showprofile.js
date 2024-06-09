import React from 'react'

const Showprofile = (props) => {
    return (
        <div>
            <div className="text-center my-4" style={{ fontSize:"40px"}}>
                Personal Details
            </div>
            <div className="container">
                Name : {props.profile.name} <br/>
                Email : {props.profile.email} <br/>
                Born on : {props.profile.dob} <br/>
                Phone : {props.profile.phone} <br/>
                Address : {props.profile.addressline1} {props.profile.addressline1} <br/>
                City : {props.profile.city} <br/>
                State : {props.profile.state} <br/>
                Pin : {props.profile.pincode} <br/>
                Country : {props.profile.country} <nr/>

            </div>            
        </div>
    )
}

export default Showprofile
