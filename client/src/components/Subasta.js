import React, { Component } from 'react';
import Obras from "./Obras"
import Apiservice from "../service/apiservice"
import WebsocketConnetction from  "../socketFront/websocket"
// import { threadId } from 'worker_threads';




class Subasta extends Component {

    constructor(props){

        super(props)

        this.state = {
            loggedInUser: this.props.User,
            obraIdSelected: undefined,
            obra: {}
           

        }
        this.socket = new WebsocketConnetction() 
        this.serviceSubasta = new Apiservice
    }
    getSubastaObra(){
       return this.serviceSubasta.getObraSubasta(this.props.match.params.id)
       .then(response => this.setState({...this.state, obra: response}))
    }
    componentDidMount(){
        this.getSubastaObra()
    
    }

    getObraId = (id) => {
        this.setState({...this.state, obraIdSelected: id})
      }
      sendMsg = () => {
        this.socket.sendMessage(this.state.obra.title)
            //this.state.obraIdSelected)
      }

    render(){
        console.log(this.state.obra)
        if(!this.props.User){
            return(
                <div>
                    <h1 id="title-subasta">NECESITAS INICIAR SESION INUTIL</h1>
                </div>
            )
        } else {
            console.log("entra")
            return (
            <main className="container">
            
            <div className="col-md-6">
            <div className="row">
                <div className="subasta-form">
                <h2>{this.state.obra.title}</h2>
                <img className="subasta-img" src={this.state.obra.image}></img>
                <strong>{this.state.obra.año}</strong>
                <strong>{this.state.obra.author}</strong>
                 <button onClick={this.sendMsg}>SEND</button>
                </div>
                </div>
                </div>
                </main>
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
