import React from 'react'

export default function Blogcard(props) {
    return (
        <div className="card mx-5 my-5" style={{width: "18rem"}}>
            <img className="card-img-top" src={"http://localhost:2000/static/"+props.baseimgurl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
