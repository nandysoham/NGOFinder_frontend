import React, { useState, useEffect, Component } from 'react'
import { useHistory } from 'react-router'
import Layout from '../../Components/Layout'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'
import parse from 'html-react-parser'



const CreateBlog = () => {
    let history = useHistory()

    const [text, settext] = useState('')

    const [about, setabout] = useState('')

    const [title, settitle] = useState('')

    const [profile, setprofile] = useState({})

    const onChange = (e) => {
        settitle(e.target.value)
    }

    const bringprofile = async () => {
        if (localStorage.getItem("indivtoken")) {
            
            var options = {
                method: 'GET',
                url: 'http://localhost:2000/api/indiv/getindivdetails',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem("indivtoken")
                }
            };

            const response = await axios.request(options)
            setprofile(response.data.userindiv)
        }
    }



    const submitblog = async (title, description, about,pics) => {

        // bringprofile()
        console.log("profile --> " , profile);
        console.log("hello you just submitted your form");
        console.log(profile.profilePicture[0]);
        let formData = new FormData();
        formData.append('name', profile.name);
        formData.append('authorPicture', profile.profilePicture[0].img)
        formData.append('title', title);
        formData.append('about', about);
        formData.append('description', description);


        if (pics.length != 0) {
            for (const single_file of pics) {
                formData.append('blogPictures', single_file)
            }
        }


        const response = await fetch("http://localhost:2000/api/blog/create", {

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
    }

    useEffect(()=>{
        if(localStorage.getItem("indivtoken")){
           
           var options = {
            method: 'GET',
            url: 'http://localhost:2000/api/indiv/getindivdetails',
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
                                <div class="form-group" style={{ width: "100vw" }}>
                                    <label for="blogtitle" className="my-2">Title</label>
                                    <input type="text" class="form-control" id="blogtitle" name="blogtitle" value={title} aria-describedby="titleHelp" placeholder="Enter Title" onChange={onChange} />

                                </div>
                            </div>
                            <div className="container">
                            <label for="blogtitle" className="my-2">Please enter something about the blog (not more than 200 letters)</label>
                                <div>

                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={about}
                                        onChange={(event, editor) => {
                                            const data = editor.getData()
                                            setabout(data)
                                        }}

                                    />

                                </div>

                            </div>
                            <div className="container">
                                <label for="blogtitle" className="my-2">Go ahead with your blog</label>
                                <div>

                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={text}
                                        onChange={(event, editor) => {
                                            const data = editor.getData()
                                            settext(data)
                                        }}

                                    />

                                </div>

                                {/* <p>{parse(text)}</p> */}

                                <div class="form-group" >
                                    <label for="blogpictures" className="my-2">Pictures!!!</label>
                                    {/* <input type="file" class="form-control" id="blogpictures" name="blogpictures" aria-describedby="pictureHelp" /> */}
                                    <input className="form-control" type='file' multiple='multiple' accept='image/*' name='blogPictures' id='file' />

                                </div>

                            </div>

                            <button type="submit" class="btn btn-primary my-4 mx-3">Submit</button>
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
