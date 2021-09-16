import React,{useState, useEffect} from 'react';
import './Toggle.css';

export default function ToggleMode() {
    const getMode = ()=>{
        return JSON.parse(localStorage.getItem("Mode")) || false;
    }

    
    const [dark,setMode] = useState(getMode);

    useEffect(()=>{
        localStorage.setItem("Mode",JSON.stringify(dark))
    },[dark]);

    return (
        <>
            <label className="switch">
                <input 
                type="checkbox"
                onChange = {()=>setMode(!dark)}
                />
                    <span className="slider round"></span>
            </label>  
        </>
    )
}

