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
     
        <main className="container nav">  
          <a  class="toggle-menu">&equiv;</a> 

          <div class="menu row">    
          
          

                    <Link  className="title" to='/'><i class="fas fa-home"></i></Link>

                    <Link className="ref-obra link-1" to='/obras'>Obras</Link> 

                    <small>Hola, {this.props.loggedInUser.username}</small><br></br>                            
                
                
                  <div id="cerrar">
                                                   
                
					            <a className="link-nav" onClick={this.props.logoutUser} variant="outline-secondary" >Cerrar Sesion</a>
			          	</div>


          </div>
      </main>
              
            )

            }else{

              return(
            
      <main className="nav">                    
        <a  class="toggle-menu">&equiv;</a>
        
          <div class="menu">
         
               
          <Link  className="title" to='/'><i class="fas fa-home"></i></Link>
                
                <Link className="ref-obra" to='/obras'>Obras</Link>
                
            <ul className="sesion">
                  
                <li>
                  <a  className="responsive" onClick ={this.props.toggleLogin} >Iniciar Sesión</a>                  
                          
                    
                </li> 
                  
                  
                <li>
					         <a  className="responsive" onClick={this.props.toggleSignup} >Registrate</a>
			          </li>
               
            </ul>           

          </div>
        </main>
              
    

              )
            }

        }
      }
        
      
    





export default NavbarComponent;