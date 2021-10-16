import React,{useContext,useEffect} from 'react'
import Layout from '../../Components/Layout'
import CompanyContext from "../../Context/Company/CompanyContext"
import Companycard from './Companycard'


export default function ViewCompany(props){
    const context = useContext(CompanyContext)

    const {companies,fetchcompanies} = context

    useEffect(() => {
        fetchcompanies()
    }, [companies])
    return (
        <div>
            <Layout mode = {props.mode} Togglemode = {props.Togglemode}>
            <h1><center>NGOs near you!</center></h1>
            {console.log(companies)}
            {companies.map((indivcompany)=>{
                return <div className="container my-3" style={{display:"flex", justifyContent:"center"}}>
                    <Companycard className="my-3" 
                    
                        companyname = {indivcompany.companyname}
                        companydetails = {indivcompany.companydetails ? indivcompany.companydetails.slice(0,200): `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        ...
                        `}
                        companyprimaryimg = {indivcompany.companyPictures[0].img}
                        phone = {indivcompany.phone}
                        email = {indivcompany.email}
                        city = {indivcompany.city} 
                        country = {indivcompany.country}
                        />
                </div>
            })}
            </Layout>
        </div>
    )
}
