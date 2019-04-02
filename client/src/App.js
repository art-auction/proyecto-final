import React, { Component } from 'react';
import authService from './components/auth/auth-service';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home"
import Navbar from './components/Navbar'
import Subasta from './components/Subasta'
import WebsocketConnetction from  "./socketFront/websocket"


import Obras from "./components/Obras"
import ArtistProfile from './components/ArtistProfile';
class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: false, showLogin: false, showSignup:false};
    this.service = new authService()
    this.socket = new WebsocketConnetction()
    this.ceckLoggedin();

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
    this.ceckLoggedin()
  }

  ceckLoggedin = () => {
    this.service.loggedin()
      .then(e=>{
        console.log(e)
        // this.state.loggedInUser = true;
        if(e) this.setState({ ...this.state, loggedInUser:e.username}, () => {})
      })
      .catch(() => {
        this.setState({ ...this.state, loggedInUser:null})
      })

  }

  logoutUser = () => {
    this.service.logout()
        .then(() => {
            this.setState({ loggedInUser: null });
           
        })
}
sendMsg = () => {
  this.socket.sendMessage("PEPE")
}

  render() {

    console.log(this.state.loggedInUser)
    return (
      <div className="App">
      <Navbar toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} logoutUser={this.logoutUser} loggedInUser={this.state.loggedInUser}/>
      <Login show={this.state.showLogin} toggleLogin={this.toggleLogin}/>
      <div className="holaDan" />
      <Signup show={this.state.showSignup} toggleSignup={this.toggleSignup} />
      <div className="holaDan" />
 
        <Switch>
  <Route exact path="/artist-profile/:id" component={ArtistProfile}/>
  <Route exact path="/obras" component={Obras}/>
  <Route exact path="/signup" component={Signup}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/" component={Home}/>
  {this.state.loggedInUser ? <Route exact path="/subasta" User={this.state.loggedInUser} component={Subasta}/>:null}

 
  
       </Switch>
       <button onClick={this.sendMsg}>SEND</button>
      </div>
    );
  }
}

export default App;
