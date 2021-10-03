import React, { useState, useEffect } from 'react'
import Blogcard from './Blogcard';

import axios from 'axios';

import "./Blogdetails.css"
import Spinner from '../../Components/Spinner/Spinner';



export default function Blogdetails(props) {

    // added extra for color matching
    if(props.mode){
        document.body.style.backgroundColor = "#2c3033"
    }
    

    const [recentblogs, setrecentblogs] = useState([])
    const [loader, setloader] = useState(true)

    useEffect(async () => {
        
        let recentblogurl = "http://127.0.0.1:2000/api/blog/recententries";
        axios.get(recentblogurl)
            .then(res => {
                const bloglist = res.data;
                setrecentblogs(bloglist)
        })

        setloader(false)
        
    },[recentblogs, loader])
    return (
        <div className="container" >
            <h2 className="text-center" style={{ margin: "20px", fontFamily: 'Dancing Script' }}><span style={{ fontSize: "50px", color: props.mode ? "white" : "black"}}>Featured Blogs</span></h2>
            {loader ? 
                <Spinner/>
            : 
                <div className="container" style={{maxWidth:"90%"}}>
                    <div className="row">
                        {recentblogs.map((element) => {

                            return <div className="col " style={{ display:"flex", justifyContent :"center", margin:"0px", padding:"0px"}} key={element._id}>
                                <Blogcard linktourl={"http://localhost:2000/api/blog/"+element._id} title={element.title} desc = {element.description} baseimgurl = {element.blogPictures[0].img} mode={props.mode} Togglemode={props.Togglemode}></Blogcard>
                            </div>
                            

                        })}

                    </div>
                </div>
            }
        </div>

    )
}
