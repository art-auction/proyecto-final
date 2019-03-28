
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/auth/auth-service';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



class NavbarComponent extends Component {

    constructor(props) {

        super(props)

        this.state = { loggedInUser: null }

        this.service = new authService()
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    }


    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.setUser(null);
            })
    }

    render() {

       // if (this.state.loggedInUser) {

            return (

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand >Art & auction</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="mr-auto">

                    <Link className="link-nav" to='/' href="#features">Ver pinturas</Link>                                   
                    
                  </Nav>

                  <Nav>
                    <button className="link-nav" onClick={this.props.toggleLogin}>Iniciar Sesión</button>
                  {/* <Link className="link-nav" to='/login' href="#pricing">Iniciar sesion</Link>      */}
                    
                  </Nav>

                  <Nav>
                  <button className="link-nav" onClick={this.props.toggleSignup}>Registrate</button>
            {/*<Link className="link-nav" to="/signup">Registrate</Link> */}             
                    
                  </Nav>
                  <Nav>
                    <Link className="link-nav" to="/">Cerrar sesion</Link>              
                    
                  </Nav>
                </Navbar.Collapse>

              </Navbar>

              
            )

            }

        }

        
           





export default NavbarComponent;