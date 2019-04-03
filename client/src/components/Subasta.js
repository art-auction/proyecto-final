import React, { Component } from 'react';
// import { threadId } from 'worker_threads';




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
      
          
        

             
    }
}   

export default Subasta
