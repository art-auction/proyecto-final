import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';


class Subasta extends Component {

    constructor(props){

        super(props)

        this.state = {
            loggedInUser: this.props.User
        }

    }


    render(){
        console.log(this.props)
        // return(
        //     <div>
        //         <p>Pepe</p>
        //     </div>
        // )
        // if(this.props.User == false) {return (
        //     <div className="subasta-form">
        //         <p>Bienvenidos a la subasta del siglo!!!</p>
        //     </div>
        // )} else return (<Redirect to= '/' />)
      
            return (
                    <div className="subasta-form">
                        <p>Bienvenidos a la subasta del siglo!!!</p>
                    </div>
                )
        

             
    }
}   

export default Subasta
