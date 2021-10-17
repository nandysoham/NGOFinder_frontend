import React,{useState,useEffect} from 'react'
import CompanyContext from "./CompanyContext"
import axios from 'axios';

// context api can handle both varibales and functions

const CompanyState = (props) =>{

    

    const companylist = [
        
    ]

    const [companies, setcompanies] = useState(companylist)


    const fetchcompanies=() => {
        async function fetchData(){
            let companiesbydistanceurl = "http://localhost:2000/api/company/showcompanies/bydistance";
            axios.post(companiesbydistanceurl)
                .then(res => {
                    setcompanies(res.data)
                    // console.log(companies);
            })
         }
        
        fetchData();
    }



    return (
        <CompanyContext.Provider value = {{companies, fetchcompanies}}>
            {props.children}
        </CompanyContext.Provider>
    )

}

export default CompanyState;