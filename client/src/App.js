import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home"
import { Link } from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
      
       
        <Switch>
  <Route exact path="/signup" component={Signup}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/" component={Home}/>
  
  
   </Switch>
      </div>
    );
  }
}

export default App;
