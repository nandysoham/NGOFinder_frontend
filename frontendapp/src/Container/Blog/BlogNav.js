import React from 'react'
import "./Blognav.css"

export default function BlogNav() {
    return (
        <div>
            <ul className="nav nav-tabs justify-content-end ">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Create a Blog</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link active" href="#">Search for Genre</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    )
}
