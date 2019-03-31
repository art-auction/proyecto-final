import React, { Component } from 'react';

import { Redirect } from 'react-router';


class Subasta extends Component {

    constructor(props){

        super(props)

        this.state = {
            loggedInUser: this.props.User
        }

    }


    render(){
        console.log(this.state.loggedInUser)

        if(this.state.loggedInUser) {return (
            <div className="subasta-form">
                <p>Bienvenidos a la subasta del siglo!!!</p>
            </div>
        )} else return (<Redirect to= '/' />)

             
       
    
}
}   

export default Subasta
