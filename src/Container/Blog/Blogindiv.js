import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout'
import axios from "axios"
import Spinner from '../../Components/Spinner/Spinner'
import parse from 'html-react-parser'
import { Carousel, OverlayTrigger, Popover } from 'react-bootstrap'
import { Blogcomment } from './Blogcomment'





export default function Blogindiv(props) {

    useEffect(()=>{
        if (props.mode) {
            document.body.style.backgroundColor = "#2c2c2c"
        }
        else{
            document.body.style.backgroundColor = "white"
        }
    }, [props.mode])
    





    // this is using the useParams hook
    const [updatetime, setupdatetime] = useState("")
    const { id } = useParams()
    const [loader, setloader] = useState(true)
    const [blogobj, setblogobj] = useState({
        "_id": "",
        "name": "",
        "title": "",
        "description": "",
        "slug": "",
        "userid": "",
        'blogPictures': [],
        "createdAt": "",
        "updatedAt": ""
       
    })

    /*
     "_id": "",
        "name": "",
        "title": "",
        "description": "",
        "slug": "",
        "userid": "",
        'blogPictures': [],
        "createdAt": "",
        "updatedAt": ""
    */ 

    useEffect(() => {
        async function fetchData() {
            let recentblogurl = `${process.env.REACT_APP_BACKEND_URL}/api/blog/${id}`;
            axios.get(recentblogurl)
                .then(res => {
                    const updatedblogobj = res.data;
                    setblogobj(updatedblogobj)
                }
                )


        }

        fetchData();
        if(blogobj){
            let updatedate = new Date(blogobj.updatedAt);
            let year = updatedate.getFullYear();
            let month = updatedate.getMonth();
            let day = updatedate.getDate();
            setupdatetime(day + "-" + month + "-" + year);
        }
        setloader(false)

    }, [blogobj, id])


    const [authordetails, setauthordetails] = useState()


    const fetchpublicdetails =  (individ) => {

        // console.log('individ  ==> '+individ)
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/indiv/public/indivdetails`,
            headers : {
                'Content-Type': 'application/json',
            },
            data :{
                'userid' : individ,
            }
          };

          if(blogobj){
            axios.request(options).then( (response)=> {
                setauthordetails(response.data.returnable)
              }
    
            ).catch(error => {
                console.log(error)
            });

          } 
          


    }

    useEffect(()=>{
        if(blogobj?.userid){

        fetchpublicdetails(blogobj.userid)
        // console.log(authordetails)

        }

         // eslint-disable-next-line
    }, [blogobj?.userid])



    const renderpopover =(
        <Popover id="popover-basic" >
          <Popover.Header as="h3">
              {authordetails ? 
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                      <img alt="profile" style={{ height: "40px", width: "40px", borderRadius: "50%", transform: "1.5x" }} src={authordetails.profilePicture ? authordetails.profilePicture.img : `${process.env.REACT_APP_BACKEND_URL}/staticindiv/personplaceholder.png`}></img> 
                      </div>

                      <div className="col-md-6">

                        <h5 style={{fontSize:"20px"}}>{"    " + blogobj.name}</h5>
                      </div>
                  </div>
              
                
              </div>

              :
              <div className="container">

              </div>
            }
          
          </Popover.Header>
          <Popover.Body>
          {authordetails ? 
              <div className="container">
                  <p>{authordetails.about.length < 400 ? authordetails.about : authordetails.about.substring(0, 400) + "..."}</p>
                 <i className="fa fa-map-marker " style={{padding:"7px"}}/> {authordetails.city} , {authordetails.country}
                 <br/>
                 <i className="fa fa-envelope " style={{padding:"7px"}}/> {authordetails.email} 
                
              </div>

              :
              <div className="container">

              </div>
        }
            
          </Popover.Body>
        </Popover>
    )


    return (
        <div>
            {/* {console.log(blogobj.blogPictures[0].img)} */}
            <Layout mode={props.mode} Togglemode={props.Togglemode}>
                
                {loader ?
                    <Spinner> </Spinner>
                    :
                    
                        blogobj ? 
                    <>
                    
                        <div className="row">
                            <div className="col-1 left-sidebar-item" style={{

                            }}>
                                <div className="make-me-sticky" style={{
                                    position: "-webkit-sticky",
                                    // eslint-disable-next-line 
                                    position: "sticky",
                                    top: "200px",
                                    paddingLeft: "10px",
                                    padding: "0 15px"
                                }}>

                                    <a target="_blank" rel="noreferrer" href="/"> <i className="fa fa-facebook fa-2x" style={{ padding: "7px" }} /></a>
                                    <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-linkedin fa-2x" style={{ padding: "7px" }}></i></a>
                                    <a target="_blank" rel="noreferrer" href={`https://ig.me/?text=Have a look at this blog at localhost:3000/blogs/${id}`}><i className="fa fa-instagram fa-2x" style={{ padding: "7px" }}></i></a>
                                    
                                    <a target="_blank" rel="noreferrer" href={`https://wa.me/?text=Have a look at this blog at localhost:3000/blogs/${id}`} ><i className="fa fa-whatsapp fa-2x" style={{ padding: "7px", color: "green" }}></i></a>
                                    <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?Have%20a%20look%20at%20this%20blog$20at%20localhost:3000/blogs/${id}`}><i className="fa fa-twitter fa-2x" style={{ padding: "7px", color: "turquiose" }}></i></a>

                                </div>

                            </div>
                            <div className="col-10">
                                <div className="container" style={{ width: "90%", color: props.mode ? "white" : "black" }} >
                                    <Carousel fade >
                                        {blogobj.blogPictures.map((element) => {
                                            return <Carousel.Item key={element._id}>
                                                {/* {console.log("http://localhost:2000/api/blog/"+element.img)} */}
                                                <img
                                                    className="d-block w-100"
                                                    // "http://localhost:2000/static/" +
                                                    src={ element.img}
                                                    alt="First slide"
                                                    height="600px"
                                                />
                                                <Carousel.Caption>
                                                    {/* <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        })}

                                    </Carousel>
                                    <h1 className="text-center my-2 " style={{ fontFamily: "Dancing Script" , color: props.mode ? "white" : "black"}}>{blogobj.title}</h1>
                                    <br />


                                    <h6 className=""  style={{color: props.mode ? "white" : "black"}} >
                                        <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            // overlay={renderTooltip}
                                            overlay = {renderpopover}
                                        >
                                            {/* "http://localhost:2000/staticindiv/" + */}
                                            <img alt="profile" style={{ height: "40px", width: "40px", borderRadius: "50%", transform: "1.5x" }} src={authordetails ?  authordetails.profilePicture.img : `${process.env.REACT_APP_BACKEND_URL}/staticindiv/personplaceholder.png`}></img>
                                        </OverlayTrigger>
                                        {"    " + blogobj.name}</h6>
                                    {/* <br /> */}


                                    <h6 style={{ display: "flex", justifyContent: "right", color: props.mode ? "white" : "black" }}>Updated on {updatetime} </h6>
                                    <br />
                                    <br />
                                    <p style={{ fontSize: "20px" }}>
                                        {/* <span style={{ fontSize: "60px", color: "#4a65ed", fontFamily: "cursive" }}>{parse(blogobj.description).slice(0, 1)}</span>{parse(blogobj.description).slice(1)} */}
                                        {parse(blogobj.description)}
                                        {/* <div dangerouslySetInnerHTML={{ __html: blogobj.description }} /> */}
                                    </p>


                                </div>
                            </div>

                            <div className="col-1">

                            </div>
                        </div>
                        <div className="container commentdiv" style={{ width: "75%", paddingTop: "30px" }}>
                            {/* hey guys this is the comment section */}
                            <Blogcomment blog_id={id} mode = {props.mode}/>


                        </div>

                    </>
                    :

                                    
                    <h2>Blog not found</h2>


                }

            </Layout>
        </div>
    )
}