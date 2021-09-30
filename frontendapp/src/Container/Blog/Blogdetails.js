import React, { useState, useEffect } from 'react'
import Blogcard from './Blogcard';
import "./Blogdetails.css"



export default function Blogdetails() {

    const [recentblogs, setrecentblogs] = useState(
        [{ "_id": "6154b00906a13ee1985592d0", "title": "sample title", "name": "soham nandy", "slug": "soham-nandy", "description": "this is a sample description", "blogPictures": [{ "img": "wQ0Zxhh7S-Screenshot 2021-09-22 at 9.01.38 PM.png", "_id": "6154b00906a13ee1985592d1" }], "createdAt": "2021-09-29T18:27:21.152Z", "updatedAt": "2021-09-29T18:27:21.152Z", "__v": 0 }, { "_id": "6154b0dbb71830c699fc3890", "title": "sample title", "name": "soham nandy 2", "slug": "sample-title", "description": "this is a sample description for the second case", "blogPictures": [{ "img": "txTwt00Wv-Screenshot 2021-09-22 at 9.01.38 PM.png", "_id": "6154b0dbb71830c699fc3891" }, { "img": "6Sm9PT33W9-Screenshot 2021-09-09 at 3.03.07 PM.png", "_id": "6154b0dbb71830c699fc3892" }], "createdAt": "2021-09-29T18:30:51.459Z", "updatedAt": "2021-09-29T18:30:51.459Z", "__v": 0 }, { "_id": "6155526eb71830c699fc3894", "title": "blog1", "name": "nordic", "slug": "blog1", "description": "welcome to Scandinavia ! -  feel the nature here  ", "blogPictures": [{ "img": "ylR9xbGlI-signinupblack.jpg", "_id": "6155526eb71830c699fc3895" }, { "img": "anmJp-zS9w-aboutusnight.jpg", "_id": "6155526eb71830c699fc3896" }], "createdAt": "2021-09-30T06:00:14.695Z", "updatedAt": "2021-09-30T06:00:14.695Z", "__v": 0 }]
    )

    useEffect(async () => {

        /**
         
        this fetch api has some problmes in loading the data -->
        this needs to be corrected 

        By soham - 30 th september last work done

        commited before this
         */


        // https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related
        // use this extension if localhost is blocked by cors policy
        let recentblogurl = "http://127.0.0.1:2000/api/blog/recententries";
        const data =  await fetch(recentblogurl, { mode: 'no-cors'}).then(res=>res.json()).catch(res=> console.log(res))
        
        // let parseddata = data.json();
        console.log("this is parsed data "+ data);
        // setrecentblogs(parseddata);
    })
    return (
        <div className="container">
            <h2 className="text-center" style={{ margin: "20px", fontFamily: 'Dancing Script' }}><span style={{ fontSize: "50px" }}>Featured Blogs</span></h2>
            <div className="container">
                <div className="row">
                    {recentblogs.map((element) => {
                        return <Blogcard key={element._id} title={element.title} desc = {element.description} ></Blogcard>

                    })}

                </div>
            </div>
        </div>

    )
}
