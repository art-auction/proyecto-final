import React, { Component } from 'react';
import socketIOClient from "socket.io-client"
import Obras from "./Obras"
import Apiservice from "../service/apiservice"
//import WebsocketConnetction from  "../socketFront/websocket"
// import { threadId } from 'worker_threads';




class Subasta extends Component {

    constructor(props){

        super(props)

        this.state = {
            loggedInUser: this.props.User,
            obraIdSelected: undefined,
            obra: {},
            endpoint: process.env.REACT_APP_API_URL_SOCKET

           

        }
        this.socket = socketIOClient(this.state.endpoint);
        this.serviceSubasta = new Apiservice
        this.socket.on("new_message",(obj)=>{
            console.log(obj)
        })
        this.socket.on("mensaje", (data) =>{
            console.log(data)
         })
        
    }
    getSubastaObra(){
       return this.serviceSubasta.getObraSubasta(this.props.match.params.id)
       .then(response => this.setState({...this.state, obra: response}))
    }
    componentDidMount(){
        const { endpoint } = this.state
        
        this.getSubastaObra()
    
    }

    getObraId = (id) => {
        this.setState({...this.state, obraIdSelected: id})
      }
      sendMsg = () => {
        this.socket.emit("new_message",{title:this.state.obra.title, user:this.props.User})

        console.log("promise")
            //this.state.obraIdSelected)
      }

      handleState = e => {
        const { name, value } = e.target;
 
        this.setState({
            message: {
                ...this.state.coaster, [name]: value
            }
        })
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
            
            <div className="row">
            <div className="col-md-6 col-sm-8">
            
        <div>
            <div className="subasta-form">
                <h2>{this.state.obra.title}</h2>
                <img className="subasta-img" src={this.state.obra.image}></img><br></br>
                <strong>{this.state.obra.año}</strong><br></br>
                
            </div>
               
        </div>
                
               
                
                
            
               
                 
            <div className="puja-tab">
                    <form className="form-puja">
                
                        <input className="input-puja" name="puja" type="text" placeholder="introduzca su puja" onChange = {(e) => this.handleState(e)} />
                 
                    </form><button onClick={this.sendMsg} >"SEND"</button>
             </div> 
             </div> 
             </div>      
                
             
            )
        }
    
        

             
    }
}   

export default Subasta
