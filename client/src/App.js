import React, { Component } from 'react';
import authService from './components/auth/auth-service';
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
    this.service = new authService()
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  toggleLogin = () => {
    if(this.state.showSignup) this.setState({showSignup: !this.state.showSignup})
    this.setState({showLogin: !this.state.showLogin})
    this.ceckLoggedin()
  }

  toggleSignup = () => {
    console.log("entra")
    if(this.state.showLogin) this.setState({showLogin: !this.state.showLogin})    
    this.setState({showSignup: !this.state.showSignup})
  }

  ceckLoggedin = () => {
    this.service.loggedin()
      .then(e=>{
        console.log(e)
        if(e) this.setState({ ...this.state, loggedInUser:true})
      })

  }

  logoutUser = () => {
    this.service.logout()
        .then(() => {
            this.setState({ loggedInUser: false });
           // this.props.setUser(null);
        })
}


  render() {
    return (
      <div className="App">
      <Navbar toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} logoutUser={this.logoutUser} loggedInUser={this.state.loggedInUser}/>
      <Login show={this.state.showLogin} toggleLogin={this.toggleLogin}/>
      <Signup show={this.state.showSignup} toggleSignup={this.toggleSignup} />
 
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
