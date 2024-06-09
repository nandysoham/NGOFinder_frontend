import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../../Components/Layout'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

import TextEditor from '../CKEditor/TextEditor';



const CreateBlog = () => {
    let history = useHistory()

    const [text, settext] = useState('')

    const [about, setabout] = useState('')

    const [title, settitle] = useState('')

    const [profile, setprofile] = useState({"name" : "soham"})

    const onChange = (e) => {
        settitle(e.target.value)
    }

    const bringprofile = async () => {
        if (localStorage.getItem("indivtoken")) {
            
            var options = {
                method: 'POST',
                url: `${process.env.REACT_APP_BACKEND_URL}/api/indiv/getindivdetails`,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem("indivtoken")
                }
            };

            const response = await axios.request(options)
            // console.log("fetching the user data");
            console.log(response.data.userindiv)
            let prof = JSON.parse(JSON.stringify(response.data.userindiv))
            console.log("prof ==> " + prof)
            setprofile(prof)
            console.log("at the end of the function "+profile)
        }
    }



    const submitblog = async (title, description, about,pics) => {

        const wait = await bringprofile()
        console.log(wait)
        console.log("before viewing the profile details from the submit blog option")
        console.log("profile --> " , profile);
        console.log("hello you just submitted your form");
        console.log(profile.profilePicture[0]);
        let formData = new FormData();
        formData.append('name', profile.name);
        formData.append('authorPicture', profile.profilePicture[0].img)
        formData.append('title', title);
        formData.append('about', about);
        formData.append('description', description);


        if (pics.length !== 0) {
            for (const single_file of pics) {
                formData.append('blogPictures', single_file)
            }
        }


        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/blog/create`, {

            method: "POST",
            headers: {
                'auth-token': localStorage.getItem("indivtoken"),
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData

        })

        const token = await response.json();

        console.log(token);
    }


    const handleClick = (e) => {
        e.preventDefault();
        const blogPictures = e.target.blogPictures.files;
        console.log(blogPictures)
        console.log(text);
        submitblog(title, text,about, blogPictures)
        console.log("you just clicked it")
        history.push("/blogs");
    }

    useEffect(()=>{
        if(localStorage.getItem("indivtoken")){
           
           var options = {
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/indiv/getindivdetails`,
            headers : {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem("indivtoken")
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

    },[])

    return (
        <div>
            {localStorage.getItem("indivtoken") || localStorage.getItem("companytoken") ?
                <Layout>
                    <div className="container" style={{ padding: "30px" }}>
                        <h2 className="text-center">New Blogs here!!!</h2>
                        <form onSubmit={handleClick}>
                            <div className="container" style={{ padding: "20px", display: "flex", justifyContent: 'center' }}>
                                <div className="form-group" style={{ width: "100vw" }}>
                                    <label for="blogtitle" className="my-2">Title</label>
                                    <input type="text" className="form-control" id="blogtitle" name="blogtitle" value={title} aria-describedby="titleHelp" placeholder="Enter Title" onChange={onChange} />

                                </div>
                            </div>
                            <div className="container">
                            <label for="blogtitle" className="my-2">Please enter something about the blog (not more than 200 letters)</label>
                                <div>

                                    <TextEditor setVar = {setabout}
                                        // editor={ClassicEditor}
                                        // data={about}
                                        // onChange={(event, editor) => {
                                        //     const data = editor.getData()
                                        //     setabout(data)
                                        // }}

                                    />

                                </div>

                            </div>
                            <div className="container">
                                <label for="blogtitle" className="my-2">Go ahead with your blog</label>
                                <div>
                                    
                                    <TextEditor setVar = {settext}
                                        // editor={ClassicEditor}
                                        // data={text}
                                        // onChange={(event, editor) => {
                                        //     const data = editor.getData()
                                        //     settext(data)
                                        // }}

                                    />

                                </div>

                                {/* <p>{parse(text)}</p> */}

                                <div className="form-group" >
                                    <label for="blogpictures" className="my-2">Pictures!!!</label>
                                    {/* <input type="file" className="form-control" id="blogpictures" name="blogpictures" aria-describedby="pictureHelp" /> */}
                                    <input className="form-control" type='file' multiple='multiple' accept='image/*' name='blogPictures' id='file' />

                                </div>

                            </div>

                            <button type="submit" className="btn btn-primary my-4 mx-3">Submit</button>
                        </form>

                    </div>
                </Layout>

                :
                
                history.push("/signin")

            }

        </div>
    )
}

export default CreateBlog
