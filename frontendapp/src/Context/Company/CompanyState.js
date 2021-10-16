import React,{useState,useEffect} from 'react'
import CompanyContext from "./CompanyContext"
import axios from 'axios';

// context api can handle both varibales and functions

const CompanyState = (props) =>{

    

    const companylist = [
        {
            "_id": "61692cffd74a6cdf337c406b",
            "companyname": "Hello Earth",
            "regno": "abc1234",
            "parentcompany": "Saving Planets",
            "email": "cs20b046@iittp.ac.in",
            "established": "2016-01-01T00:00:00.000Z",
            "contactperson": "Soham Nandy",
            "phone": "1234567890",
            "phone2": "2345678901",
            "addressline1": "Salt Lake",
            "addressline2": "Kolkata",
            "city": "Kolkata",
            "state": "West Bengal",
            "country": "India",
            "pincode": "700001",
            "lattitude": "22.5726",
            "longitude": "88.3639",
            "companyPictures": [
                {
                    "img": "t1qf5v4Pr-den3.jpeg",
                    "_id": "61692cffd74a6cdf337c406c"
                },
                {
                    "img": "jAgEUUhFGb-den2.jpeg",
                    "_id": "61692cffd74a6cdf337c406d"
                },
                {
                    "img": "zIZRspepAx-den1.jpeg",
                    "_id": "61692cffd74a6cdf337c406e"
                }
            ],
            "createdAt": "2021-10-15T07:25:51.704Z",
            "updatedAt": "2021-10-15T07:25:51.704Z",
            "__v": 0
        },
        {
            "_id": "6168fd78cd301e9b7c9b8b11",
            "companyname": "Save Scandinavia",
            "regno": "abc1234",
            "parentcompany": "Saving Planets",
            "email": "nandysoham16@gmail.com",
            "established": "2016-01-01T00:00:00.000Z",
            "contactperson": "Nordic Winter",
            "phone": "1234567890",
            "phone2": "2345678901",
            "addressline1": "Connaught Place",
            "addressline2": "Delhi",
            "city": "New Delhi",
            "state": "Delhi NCR",
            "country": "India",
            "pincode": "100001",
            "lattitude": "28.6340",
            "longitude": "77.2177",
            "companyPictures": [
                {
                    "img": "a0lhAcyz8-den3.jpeg",
                    "_id": "6168fd78cd301e9b7c9b8b12"
                },
                {
                    "img": "l_HKf4bqvu-den2.jpeg",
                    "_id": "6168fd78cd301e9b7c9b8b13"
                },
                {
                    "img": "o2UApEWhVZ-den1.jpeg",
                    "_id": "6168fd78cd301e9b7c9b8b14"
                }
            ],
            "createdAt": "2021-10-15T04:03:04.335Z",
            "updatedAt": "2021-10-15T07:20:42.235Z",
            "__v": 0
        },
        {
            "_id": "61693e0740f61a3d17fd7900",
            "companyname": "Hello Nature",
            "regno": "abc1234",
            "parentcompany": "Saving Planets",
            "email": "cs20b018@iittp.ac.in",
            "established": "2016-01-01T00:00:00.000Z",
            "contactperson": "Ishaan Kulkarni",
            "phone": "1234567890",
            "phone2": "2345678901",
            "addressline1": "Beverly Hills",
            "addressline2": "San Francisco",
            "city": "San Francisco",
            "state": "California",
            "country": "US",
            "pincode": "1001011",
            "lattitude": "34.0736",
            "longitude": "-118.4004",
            "companyPictures": [
                {
                    "img": "aUF4djlEr-den3.jpeg",
                    "_id": "61693e0740f61a3d17fd7901"
                },
                {
                    "img": "WWTU4E8CgN-den2.jpeg",
                    "_id": "61693e0740f61a3d17fd7902"
                },
                {
                    "img": "hYrfv-jy2Q-den1.jpeg",
                    "_id": "61693e0740f61a3d17fd7903"
                }
            ],
            "createdAt": "2021-10-15T08:38:31.683Z",
            "updatedAt": "2021-10-15T08:38:31.683Z",
            "__v": 0
        }
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