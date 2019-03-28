import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/auth/auth-service';

class Navbar extends Component {

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

        if (this.state.loggedInUser) {

            return (
                <nav className="nav-style">
                    <small>Bienvenido, {this.state.loggedInUser.username}</small>
                    <ul>
                        <li>
                            <Link to='/'>Administrar pinturas</Link>
                        </li>
                        <Link to='/'onClick={() => this.logoutUser()}>
                            Cerrar sesión
                        </Link>
                    </ul>
                </nav>
            )
        }

        else {

            return (
                <nav className="nav-style">
                    <ul>
                        <li>
                            <Link to='/obras'>Obras</Link>
                        </li>
                        <li>
                            <Link to='/login'>Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            )
        }
    }

}

export default Navbar;