import logo from './logo.svg';
import './App.css';

// this line is a must
// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./Container/Home"

function App() {
  return (
    <>
    <Router>
        <Switch>
        <Route  path='/' exact component = {Home}  />
        </Switch>
    </Router>
      
    </>
  );
}

export default App;
