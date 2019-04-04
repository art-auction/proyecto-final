import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';





class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '', 
      password: '', 
      role: "User",
      Redirect:false
    };
    this.service = new AuthService();
  }


  handleFormSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const role = this.state.role;
    this.service.login(username, password, role)
    .then( response => {
        // this.setState({ username: "", password: "" , Redirect:true});
        this.setState({ 
          username: "",
         password: "" , 
         role: "",
         Redirect:true,
        } ,() => {
          this.props.toggleLogin();
        });

       //this.props.getUser(response)
        // window.location.assign("/signup")
        
      })
      .catch( error => {
        this.setState({...this.state, err:"fail login"});
        console.log(error)} )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    console.log(value, "<----")
    this.setState({[name]: value});
  }
    
  render(){
    let classes = 'Login ';
    classes += this.props.show ? 'show' : 'hide'
  
    
    return(

      


      <div className={classes}>
      <i class="fas fa-exclamation-triangle" onClick ={this.props.toggleLogin}></i>
        <div className="login-form">
        
          <form onSubmit={this.handleFormSubmit}>
          
            <label>Username:</label><br></br>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/><br></br>


            <label>Password:</label><br></br>
            <i class="fas fa-key"></i>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /><br></br>


            <label for="rol">Tipo de usuario</label><br></br>
                <select onChange={ e => this.handleChange(e)} name="role" id="">
                  <option value="User">User</option>
                  <option value="Artist">Artist</option>
                  
                </select><br></br>
            
            <input type="submit" value="Iniciar sesion" /><br></br>


            {this.state.err ? 
            <div className="login-form">
              <p>por favor registrese!!</p>
            </div>

                   :  null}
          </form>
          
              <Link to={"/signup"}> </Link>
          
        </div>
      </div>
    )
  }
}











export default Login;


