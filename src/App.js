// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

// this line is a must
// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkModeToggle from "react-dark-mode-toggle";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./Container/Home"
import Aboutus from "./Container/Aboutus"

import Signinoption from "./Container/Signin/signinoption"
import Signin from "./Container/Signin/indivindex"
import CompanySignin from "./Container/Signin/companyindex"

import IndivSignup from "./Container/Signup/IndivSignup"
import Signup from "./Container/Signup"
import Contactus from "./Container/Contactus"
import BlogIndex from "./Container/Blog/BlogIndex"
import Blogindiv from "./Container/Blog/Blogindiv"
import ViewCompany from "./Container/Company/ViewCompany";


import CompanyState from "./Context/Company/CompanyState";
import ErrorPage from "./Container/Error/ErrorPage";
import CreateBlog from "./Container/Blog/CreateBlog";

import IndivDash from "./Container/IndivDashboard/IndivDash"
import CompanyDash from "./Container/CompanyDashboard/CompanyDash";
import IndivCompany from "./Container/Company/IndivCompany";


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
        <CompanyState>
          <Switch>
            <Route exact path='/' component={() => <Home mode={mode} Togglemode={Togglemode} />} />
            {/* only this component needs to be exact */}

            <Route exact path='/aboutus' component={() => <Aboutus mode={mode} Togglemode={Togglemode} />} />

            <Route exact path='/signin' component={() => <Signinoption redirect={"signin"} mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/indiv/signin' component={() => <Signin mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/company/signin' component={() => <CompanySignin mode={mode} Togglemode={Togglemode} />} />

            <Route exact path='/signup' component={() => <Signinoption redirect={"signup"} mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/indiv/signup' component={() => <IndivSignup mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/company/signup' component={() => <Signup mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/contactus' component={() => <Contactus mode={mode} Togglemode={Togglemode} />} />


            <Route exact path='/blogs' component={() => <BlogIndex mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/blogs/:id' component={() => <Blogindiv mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/blog/createblog' component={() => <CreateBlog mode={mode} Togglemode={Togglemode} />} />


            <Route exact path='/company/indivcompany/:id' component={() => <IndivCompany mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/company/viewcompany/bydistance' component={() => <ViewCompany mode={mode} Togglemode={Togglemode} />} />
            <Route exact path='/company/viewdashboard' component={() => <CompanyDash mode={mode} Togglemode={Togglemode} />} />

            <Route exact path='/indiv/viewdashboard' component={() => <IndivDash mode={mode} Togglemode={Togglemode} />} />
            <Route component={() => <ErrorPage />} />

            {/* earlier */}
            {/* <Route  path='/contactus' component = {Contactus}  mode = {mode}/> */}
          </Switch>

          <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 100 }}>
            <DarkModeToggle
              onChange={setMode}
              checked={mode}
              size={80}

            />
          </div>
        </CompanyState>
      </Router>



    </>
  );
}

export default App;
