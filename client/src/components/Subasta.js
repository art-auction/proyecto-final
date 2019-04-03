import React, { Component } from 'react';





class Subasta extends Component {

    constructor(props){

        super(props)

        this.state = {
            loggedInUser: this.props.User
        }

    }


    render(){
        console.log(this.props)
        if(!this.props.User){
            return(
                <div>
                    <h1 id="title-subasta">NECESITAS INICIAR SESION INUTIL</h1>
                </div>
            )
        } else {
            console.log("entra")
            return (
                <div className="subasta-form">
                    <p>Bienvenidos a la subasta del siglo!!!</p>
                </div>
            )
        }
    
        

             
    }
}   

export default Subasta
