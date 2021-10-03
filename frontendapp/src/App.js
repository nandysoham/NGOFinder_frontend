import logo from './logo.svg';
import React, { lazy, Suspense, useState, useEffect } from "react";
import './App.css';

// this line is a must
// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./Container/Home"
import Aboutus from "./Container/Aboutus"
import Signin from "./Container/Signin"
import Signup from "./Container/Signup"
import Contactus from "./Container/Contactus"
import BlogIndex from "./Container/Blog/BlogIndex"

function App() {

  // const [mode, setMode] = useState(() => false)  // whether dark or not initital setup

  // this part for storing in local storage
  const getMode = () => {
    return JSON.parse(localStorage.getItem("Mode")) || false;
  }

  const [mode, setMode] = useState(getMode)  // whether dark or not

  useEffect(() => {
    localStorage.setItem("Mode", JSON.stringify(mode))
  }, [mode]);





  const Togglemode = () => {
    if (mode === true) {
      document.body.style.backgroundColor = "white"
      setMode(() => false)
    }
    else {
      document.body.style.backgroundColor = "#1c1c1c"
      setMode(() => true)
    }
  }

  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact component={() => <Home mode={mode} Togglemode={Togglemode} />} />
          {/* only this component needs to be exact */}

          <Route path='/aboutus' component={() => <Aboutus mode={mode} Togglemode={Togglemode} />} />
          <Route path='/signin' component={() => <Signin mode={mode} Togglemode={Togglemode} />} />
          <Route path='/signup' component={() => <Signup mode={mode} Togglemode={Togglemode} />} />
          <Route path='/contactus' component={() => <Contactus mode={mode} Togglemode={Togglemode} />} />
          <Route path='/blogs' exact component={() => <BlogIndex mode={mode} Togglemode={Togglemode} />} />



          {/* earlier */}
          {/* <Route  path='/contactus' component = {Contactus}  mode = {mode}/> */}
        </Switch>

      </Router>

    </>
  );
}

export default App;
