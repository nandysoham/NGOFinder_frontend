import React from 'react'
import "./Blognav.css"

export default function BlogNav(props) {
    return (
        <div>
            <ul className="nav nav-tabs justify-content-end ">
                <li className="nav-item">
                    <a className="nav-link active mx-1" style={{borderStyle:"none", color: props.mode ? "white" : "black"  ,backgroundColor : props.mode ? "#484848" : "white" }} aria-current="page" href="/blogs">Create a Blog</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link active mx-1" style={{borderStyle:"none",color: props.mode ? "white" : "black"  ,backgroundColor : props.mode ? "#484848" : "white" }} href="/blogs">Search for Genre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active mx-1" style={{borderStyle:"none",color: props.mode ? "white" : "black"  ,backgroundColor : props.mode ? "#484848" : "white" }} href="/blogs">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled mx-1" style={{borderStyle:"none", color: props.mode ? "white" : "black"  ,backgroundColor : props.mode ? "#484848" : "white" }} href="/blogs">Disabled</a>
                </li>
            </ul>
        </div>
    )
}
