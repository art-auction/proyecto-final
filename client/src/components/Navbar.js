import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/auth/auth-service';







class NavbarComponent extends Component {

    constructor(props) {

        super(props)
      
        this.state = { loggedInUser: null }

        this.service = new authService()
       
    }


    

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    }


  

    render() {

        if (this.props.loggedInUser) {

            return (
     
        <main className="container">  
          <a  class="toggle-menu">&equiv;</a> 
          
          <div class="menu row nav-principal">               
         
                    <h1 className="title">Art & auction</h1>
                    <a className="close"><i class="fas fa-times"></i></a>

                    <Link className="ref-obra" to='/obras'>Obras</Link> 

                    <small>Hola, {this.props.loggedInUser}</small><br></br>                            
                
                
              <ul className="cerrar">
                  <li id="cerrar">
                                                   
                
					            <a className="link-nav" onClick={this.props.logoutUser} variant="outline-secondary" >Cerrar Sesion</a>
			          	</li>
               
              </ul>    

            </div>
      </main>
              
            )

            }else{

              return(
            
      <main >                    
        <a  class="toggle-menu">&equiv;</a>
        
          <div class="menu">
         
               
            <h1 className="title">Art & auction</h1>
                
                <Link className="ref-obra" to='/obras'>Obras</Link>
                
            <ul className="sesion">
                  
                <li>
                  <a  onClick ={this.props.toggleLogin} >Iniciar Sesión</a>                  
                          
                    
                </li> 
                  
                  
                <li>
					         <a  onClick={this.props.toggleSignup} >Registrate</a>
			          </li>
               
            </ul>           

          </div>
        </main>
              
    

              )
            }

        }
      }
        
      
    





export default NavbarComponent;