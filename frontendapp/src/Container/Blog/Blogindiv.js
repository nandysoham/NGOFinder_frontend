import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout'
import axios from "axios"
import Spinner from '../../Components/Spinner/Spinner'
import parse from 'html-react-parser'
import { Carousel } from 'react-bootstrap'

export default function Blogindiv(props) {

    if (props.mode) {
        document.body.style.backgroundColor = "#2c2c2c"
    }

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
        'blogPictures': [],
        "createdAt": "",
        "updatedAt": ""
    })

    useEffect(() => {
        async function fetchData() {
            let recentblogurl = `http://127.0.0.1:2000/api/blog/${id}`;
            axios.get(recentblogurl)
                .then(res => {
                    const updatedblogobj = res.data;
                    setblogobj(updatedblogobj)
                }
                )


        }

        fetchData();
        let updatedate = new Date(blogobj.updatedAt);
        let year = updatedate.getFullYear();
        let month = updatedate.getMonth();
        let day = updatedate.getDate();
        setupdatetime(day + "-" + month + "-" + year);
        setloader(false)

    }, [blogobj, id])


    return (
        <div>
            {/* {console.log(blogobj.blogPictures[0].img)} */}
            <Layout mode={props.mode} Togglemode={props.Togglemode}>
                {loader ?
                    <Spinner> </Spinner>
                    :
                    <div className="row">
                        <div className="col-1 left-sidebar-item" style={{
                            
                        }}>
                            <div className="make-me-sticky" style={{
                                position:"-webkit-sticky",
                                // eslint-disable-next-line 
                                position:"sticky",
                                top: "200px",
                                paddingLeft:"10px",
                                padding: "0 15px"
                            }}>

                                <a target="_blank" rel="noreferrer" href="/"> <i className="fa fa-facebook fa-2x" style={{padding:"7px"}}/></a>
                                <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-linkedin fa-2x" style={{padding:"7px"}}></i></a>
                                <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-instagram fa-2x" style={{padding:"7px"}}></i></a>
                                <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-whatsapp fa-2x" style={{padding:"7px", color :"green"}}></i></a>
                                <a target="_blank" rel="noreferrer" href="/"><i className="fa fa-twitter fa-2x" style={{padding:"7px", color :"turquiose"}}></i></a>
                                                    
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
                                                src={"http://localhost:2000/static/" + element.img}
                                                alt="First slide"
                                                height="600px"
                                            />
                                            <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    })}

                                </Carousel>
                                <h1 className="text-center my-2 " style={{ fontFamily: "Dancing Script" }}>{blogobj.title}</h1>
                                <br />
                                <h6 className="text-center">By {blogobj.name}</h6>
                                <br />

                                <h6 style={{ display: "flex", justifyContent: "right" }}>Updated at {updatetime} </h6>
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


                }

            </Layout>
        </div>
    )
}
