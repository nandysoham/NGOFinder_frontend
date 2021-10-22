import React, { useState, useEffect } from 'react'
import Blogcard from './Blogcard';

import axios from 'axios';

import "./Blogdetails.css"
import Spinner from '../../Components/Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default function Blogdetails(props) {

    // added extra for color matching
    if (props.mode) {
        document.body.style.backgroundColor = "#1c1c1c"
    }


    const [recentblogs, setrecentblogs] = useState([])
    const [loader, setloader] = useState(true)
    const [pageno, setpageno] = useState(1)
    const [hasmore, sethasmore] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let recentblogurl = `http://localhost:2000/api/blog/recententries?pageval=${pageno}&perPage=2`;
            axios.get(recentblogurl)
                .then(res => {
                    const bloglist = res.data;
                    setrecentblogs(bloglist.docs)
                    sethasmore(bloglist.hasNextPage)
                    console.log("use effect",recentblogs)
                })

            setloader(false)
            setpageno(pageno + 1)
        }

        fetchData();
        },[])
    // }, [recentblogs, loader])


    const fetchMoreData = ()=>{
        // console.log("hey fetch more")
        setpageno(pageno + 1);
        console.log(pageno);

        if(!hasmore) return;
        async function fetchData() {
            let recentblogurl = `http://localhost:2000/api/blog/recententries?pageval=${pageno}&perPage=2`;
            axios.get(recentblogurl)
                .then(res => {
                    const bloglist = res.data;
                    console.log("after the fetchmore --> " + bloglist.docs);
                    setrecentblogs(recentblogs.concat(bloglist.docs))
                    sethasmore(bloglist.hasNextPage)
                    console.log("page no ", pageno);
                    console.log(recentblogs)
                })

            // setloader(false)
        }

        fetchData();

    }
    return (
        <div className="container" >
            <h2 className="text-center" style={{ margin: "20px", fontFamily: 'Dancing Script' }}><span style={{ fontSize: "50px", color: props.mode ? "white" : "black" }}>Featured Blogs</span></h2>
            {loader ?
                <Spinner />
                :

                <div className="container" style={{ maxWidth: "90%" }}>

                    <InfiniteScroll 
                        style={{width : "100%"}}
                        dataLength={recentblogs.length}
                        next={fetchMoreData}
                        hasMore={hasmore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className="container">
                        <div className="row">
                            {/* {console.log(recentblogs)} */}
                            {recentblogs.map((element,idx) => {

                                return <div className="col " style={{ display: "flex", justifyContent: "center", margin: "0px", padding: "0px" }} key={idx}>
                                    <Blogcard name={element.name} linktourl={"http://localhost:3000/blogs/" + element._id} title={element.title} desc={element.about} baseimgurl={element.blogPictures[0].img} mode={props.mode} Togglemode={props.Togglemode}></Blogcard>
                                </div>


                            })}

                        </div>

                        </div>
                        
                    </InfiniteScroll >


                </div>
            }
        </div>

    )
}
