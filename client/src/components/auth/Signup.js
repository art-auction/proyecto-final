import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
     username: '',
     password: '', 
     role: 'User', 
     Redirect:false,
    };
    this.service = new AuthService();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const role = this.state.role
  
    this.service.signup(username, password, role)
    .then( response => {
       
        this.setState({
            username: "", 
            password: "",
            role: '',
            Redirect: true,
        },() => {
          this.props.toggleSignup();

        });
       
    })
    .catch( error => {
      this.setState({...this.state, err:"fail signup"});
      console.log(error)} )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  
  render(){

    let classes = 'Signup ';
    classes += this.props.show ? 'show' : 'hide'
   

    return(       
      
      
    
      <div className={classes}>
      <i className="far fa-times-circle" onClick ={this.props.toggleSignup}></i>
      
      <div className="form-signup">
      
        <form onSubmit={this.handleFormSubmit}>
       


          <label>Username:</label><br></br>
          <i className="far fa-user"></i>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/><br></br>
          
          <label>Password:</label><br></br>
          <i className="fas fa-key"></i>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /><br></br>
          
          <label htmlFor="rol">Tipo de usuario</label><br></br>
                <select onChange={ e => this.handleChange(e)} name="role">
                  <option value="User">User</option>
                  <option value="Artist">Artist</option>
                  
                </select><br></br>
          
          <input type="submit" value="Registrarse" />
        
  

            {this.state.err ? 
            <div className="signup-form">
              <p>Error de registro!!!</p>
            </div>

                   :  null}
            </form>
        
            <Link to={"/"}> </Link>
            
  
      </div>
      </div>
    )
  }

}

export default Signup;