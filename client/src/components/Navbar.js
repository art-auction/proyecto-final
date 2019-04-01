import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/auth/auth-service';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'




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

                <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand >Art & auction</Navbar.Brand>
                
                
                  <Nav className="mr-auto">
                    
                    <Link className="link-nav obras-nav" to='/obras' href="#features">Obras</Link><br></br> 
                    <small>Bienvenido: {this.props.loggedInUser}</small><br></br>                                  
                    
                  </Nav>

                  
                  
                  <Nav>
                  <Link to='/'><Button className="link-nav" onClick={this.props.logoutUser} variant="outline-secondary">Cerrar sesion</Button> </Link>             
                    
                  </Nav>
              

              </Navbar>

              
            )

            }else{

              return(

                <Navbar className="nav-bar"  collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand >Art & auction</Navbar.Brand>
                

                  <Nav className="mr-auto">

                    <Link className="link-nav" to='/obras' href="#features">Obras</Link>                                   
                    
                  </Nav>

                  <Nav>
                  <Button className="link-nav" onClick ={this.props.toggleLogin}  variant="outline-secondary">Iniciar Sesión</Button>                
                   
                          
                    
                  </Nav>

                  <Nav>
                  <Button className="link-nav" onClick={this.props.toggleSignup} variant="outline-secondary">Registrate</Button>
                  
                                    
                    
                  </Nav>
                  
                

              </Navbar>




              )
            }

        }
      }
        
           





export default NavbarComponent;