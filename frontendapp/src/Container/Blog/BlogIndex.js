import React from 'react'
import Layout from '../../Components/Layout'
import Blogdetails from './Blogdetails'
import BlogNav from './BlogNav'


export default function BlogIndex(props) {
    return (
        <div>
            <Layout mode = {props.mode} Togglemode = {props.Togglemode}>

                <BlogNav/>
                <Blogdetails mode={props.mode} Togglemode={props.Togglemode}/>
            </Layout>
            
        </div>
    )
}
