import React, { Component } from 'react';

import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home"
import Navbar from './components/Navbar'

import Obras from "./components/Obras"
import ArtistProfile from './components/ArtistProfile';
class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null, showLogin: false, showSignup:false};
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  toggleLogin = () => {
    this.setState({showLogin: !this.state.showLogin})
  }

  toggleSignup = () => {
    console.log("entra")
    this.setState({showSignup: !this.state.showSignup})
  }


  render() {
    return (
      <div className="App">
      <Navbar toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup}/>
      <Login show={this.state.showLogin} toggleLogin={this.toggleLogin}/>
      <Signup show={this.state.showSignup} />

     



    
       
        <Switch>
  <Route exact path="/artist-profile/:id" component={ArtistProfile}/>
  <Route exact path="/obras" component={Obras}/>
  <Route exact path="/signup" component={Signup}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/" component={Home}/>
  

  
  
   </Switch>
      </div>
    );
  }
}

export default App;
