import React, { useState, useEffect } from 'react'
// comment section imports
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'


import axios from "axios"



export const Blogcomment = (props) => {

    /*===================== comment section variables ======================= */
    const [comment, setComment] = useState([])


    const signinUrl = "/signin"
    const signupUrl = "/signup"
    // comment.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })
    /* ====================================================================== */

    const [prevcomment, setprevcomment] = useState([])
    const [profile, setprofile] = useState({})



    // ======================  Protected Hnadler for getting the info of the logged in user=================================
    const fetchindivUserdetails = () => {
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/indiv/getindivdetails`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("indivtoken")
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
            setprofile(response.data.userindiv)
            // profilepicture
            // profile.profilePicture[0].img
            // console.log(profile.profilePicture);

        }).catch(function (error) {
            console.error(error);

        });
    }


    // ======================   Hnadler for getting the details of the person shown in the comments section =================================
    // const fetchpublicdetails =  (individ) => {

    //     // console.log('individ  ==> '+individ)
    //     var options = {
    //         method: 'POST',
    //         url: 'http://localhost:2000/api/indiv/public/indivdetails',
    //         headers : {
    //             'Content-Type': 'application/json',
    //         },
    //         data :{
    //             'userid' : individ,
    //         }
    //       };

    //       axios.request(options).then( (response)=> response.data.returnable
    //         //   console.log("returing the response");
    //         // setpublicdetails(response.data.returnable)


    //     ).catch(error => error

    //     );

    // }

    // ======================   Hnadler for fetching previously posted comments =================================
    const fetchprevcomments = () => {
        // console.log("blog id "+props.blog_id)
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/comments/fetchcomments`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                'blogid': props.blog_id
            }
        };

        axios.request(options).then(function (response) {

            let validarray = [];



            if (response.data.comments.length > 0) {
                response.data.comments.map(async (ele) => {

                    // const resp = await fetchpublicdetails(ele.userid)
                    // const jsresp = await resp.json();
                    // console.log(jsresp);
                    var options2 = {
                        method: 'POST',
                        url: `${process.env.REACT_APP_BACKEND_URL}/api/indiv/public/indivdetails`,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        data: {
                            'userid': ele.userid,
                        }
                    };


                    axios.request(options2).then((resp) => {
                        //   console.log("hello herer")
                        let indvcommenter = resp.data.returnable
                        //   console.log("indivcomment")
                        //   console.log(indvcommenter)
                        let indiv = {
                            "userId": ele.userid,
                            "comId": ele._id,
                            "fullName": indvcommenter.name,
                            "avatarUrl": indvcommenter.profilePicture.img,
                            "text": ele.description,
                        }
                        // console.log(indiv)
                        validarray.push(indiv);

                    }
                        //   console.log("returing the response");
                        // setpublicdetails(response.data.returnable)


                    ).catch(error => {
                        console.log(error)
                    })
                    // let indvcommenter = publicdetails

                    // console.log("publicdetails state ==> " + publicdetails.name);
                    // console.log("comment list  ==> " + indvcommenter)
                    // console.log(indvcommenter);


                })
            }
            // console.log("valid aray!!!")
            // console.log(validarray);
            setprevcomment(validarray)

        }).catch(function (error) {
            console.error(error);

        });

    }

    // ======================   Hnadler for posting a blog =================================
    const postcomment = () => {
        var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/comments/add`,
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("indivtoken")
            },
            data: {
                'blogid': props.blog_id,
                'description': comment[comment.length - 1].text
            }
        };
        axios.request(options).then(function (response) {
            alert("Comment added!")

        }).catch(function (error) {
            console.error(error);

        });

    }

    useEffect(() => {
        fetchindivUserdetails();
        // fetchprevcomments();
        // console.log(comment);

        if (comment.length > 0) {
            // console.log("present here");
            // console.log(comment[comment.length - 1].text);
            postcomment();
            setComment([]);
        }


        // eslint-disable-next-line
    }, [profile, comment, prevcomment])
    // profile, comment, prevcomment

    useEffect(() => {
        fetchprevcomments();
        // eslint-disable-next-line   
    }, [])



    return (
        <div>
            <div className="commentSection" style={{ color: props.mode ? "white" : "black" }}>
                <div className="header">{prevcomment.length} Comments</div>
                {/* {setComment([])} */}

                <CommentSection style={{ color: props.mode ? "white" : "black" }} currentUser={profile._id && { userId: profile._id, avatarUrl: profile.profilePicture[0].img, name: profile.name }} commentsArray={prevcomment}
                    setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl} />
            </div>

        </div>
    )
}
