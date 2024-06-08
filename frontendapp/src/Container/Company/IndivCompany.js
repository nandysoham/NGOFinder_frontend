import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../../Components/Layout'
const IndivCompany = () => {
    const { id } = useParams() 
    const [company, setCompany] = useState(null);
    console.log(id)
    useEffect(async ()=>{

        const response = await axios.request({
            url : "http://localhost:2000/api/company/public/companydetails",
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: {
                userid : id
            }
        })
    
        setCompany(response.data.userindiv)
        console.log(company)
        // console.log(response.data.userindiv)
        console.log(response)
        if(company && company.companyPictures.length < 0){
            company.companyPictures = [{
                img : "",
                public_id : ""
            }]
        }

        

    }, [])

    return (
        <Layout>
        <div className="container" style={{minHeight:"100vh", maxWidth:"100vw", }}>
            <div className="imageContainer container" style={{height: "40vh", width:"100vw", backgroundImage: company ? `url(${company.companyPictures[0].img})` : ""}}>

            </div>
            <div className="container">
                <center> <h1> {company?.companyname}</h1></center>
                
            </div>
            <div className="row" style={{margin:"10vh", fontFamily: "sans-serif", fontSize:"20px"}}>
                <div className="col-md-8">
                    <div className="container">
                    {company?.about}
                    </div>        
                </div>
                <div className="col-md-4">
                <div style={{padding:"5px"}}><i className="fa fa-building " >   {"  \t"  + company?.regno + ", "+ company?.country}</i> </div>
                <div style={{padding:"5px"}}><i className="fa fa-map-marker " >   {"  \t"  + company?.state + ", "+ company?.country}</i> </div>
                <div style={{padding:"5px"}}> <i className="fa fa-envelope " >   {"  \t"  + company?.email }</i> </div>
                <div style={{padding:"5px"}}> <i className="fa fa-user " >   {"  \t"  + company?.contactperson }</i> </div>
                <div style={{padding:"5px"}}> <i className="fa fa-phone " >   {"  \t"  + company?.phone }</i> </div>
                {company?.phone2 ? <div style={{padding:"5px"}}> <i className="fa fa-phone " >   {"  \t"  + company?.phone2 }</i> </div> : ""}
                <div style={{padding:"5px"}}> <i className="fa fa-calendar " >   {"  \t"  + company?.established }</i> </div>

                
                </div>
            </div>
            




        </div>
        </Layout>
    )
}

export default IndivCompany
