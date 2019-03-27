import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/auth/Signup';
import { Switch, Route } from 'react-router-dom';

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
  
  
</Switch>
      </div>
    );
  }
}

export default App;
