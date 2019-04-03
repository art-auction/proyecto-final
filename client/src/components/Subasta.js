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
            endpoint: "http://localhost:5000"

           

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
            <main>
            <div className="row">
            <div className="col-md-6">
            
            <div>
                <div className="subasta-form">
                <h2>{this.state.obra.title}</h2>
                <img className="subasta-img" src={this.state.obra.image}></img>
                <strong>{this.state.obra.año}</strong>
                <strong>{this.state.obra.author}</strong>
                </div>
               
                </div>
                
               
                
                </div>
                </div>
               
                <form>
                <label for="puja">Pujas</label>
                 <input className="input-puja" name="puja" type="text" placeholder="introduzca su puja"/>
                 
                 </form><button onClick={this.sendMsg} >"SEND"</button>
                
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
