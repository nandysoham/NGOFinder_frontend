import logo from './logo.svg';
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

function App() {
  return (
    <>
    <Router>
        <Switch>
        <Route  path='/' exact component = {Home}  /> 
        {/* only this component needs to be exact */}
        
        <Route  path='/aboutus' component = {Aboutus}  />
        <Route  path='/signin' component = {Signin}  />
        <Route  path='/signup' component = {Signup}  />
        <Route  path='/contactus' component = {Contactus}  />
        </Switch>
    </Router>
      
    </>
  );
}

export default App;
