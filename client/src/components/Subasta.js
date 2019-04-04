import React, { Component } from 'react';
import socketIOClient from "socket.io-client"
import Obras from "./Obras"
import Apiservice from "../service/apiservice"
import { Redirect } from 'react-router-dom'

//import WebsocketConnetction from  "../socketFront/websocket"
// import { threadId } from 'worker_threads';




class Subasta extends Component {

    constructor(props){

        super(props)

        this.state = {
            loggedInUser: this.props.User,
            obraIdSelected: undefined,
            obra: {},
            endpoint: process.env.REACT_APP_API_URL_SOCKET,
            mensaje: "",
            apuestas:[],

           

        }
        this.socket = socketIOClient(this.state.endpoint);
        this.serviceSubasta = new Apiservice
        this.servicePuja = new Apiservice
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

        this.socket.on("new_message", msg => {
            console.log(msg)
            const _apuestas = [...this.state.apuestas];
            _apuestas.push({user:msg.user, money:msg.sms});
            this.setState({
                ...this.state,
                apuestas: _apuestas
            })
        })
    
    }

    getObraId = (id) => {
        this.setState({...this.state, obraIdSelected: id})
      }
      sendMsg = () => {
        this.socket.emit("new_message",{sms: this.state.mensaje, user:this.props.User})
        //title:this.state.obra.title
        console.log("meeee")
            //this.state.obraIdSelected)
      }
     handleFormSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
        const apuestas = this.state.apuestas
     this.servicePuja.postPujas({sms: this.state.mensaje, user:this.props.User}, this.props.match.params.id)
     .then(response=>{
         this.setState({apuestas:[]})
         
     })
     .catch(err=>console.log(err))

     }
      

      handleState = e => {
        const { name, value } = e.target;
        console.log(name, value)
        this.setState({...this.state,[name]:value}, () =>{console.log(this.state)})
    }
       


    render(){
        

        // console.log(this.state.obra)
        if(!this.props.User){
            return(
                <div>
                    <Redirect to="/"></Redirect>
                    <h1 id="title-subasta">NECESITAS INICIAR SESION</h1>
                </div>
            )
        } else {
            // console.log("entra")
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
                
           </div>    
                
            
               
        <div className="col-md-6 col-sm-8">
           {
               this.state.apuestas.map(apuesta => {
               console.log(apuesta)
               return(
                   
                   <div>
                       <strong>{apuesta.user}</strong>
                       <p>{apuesta.money}</p>
                   </div>
               )
           })}
            
                    <form className="form-puja" onSubmit={this.handleFormSubmit}>
                
                        <input className="input-puja" value={this.state.mensaje} name="mensaje" type="text" onChange = {(e)=>this.handleState(e)} />
                 <input type="submit" onClick={this.sendMsg}/>
                    </form>
                    <strong>{this.state.mensaje} </strong><br></br>
                    {//<button onClick={this.sendMsg} >"SEND"</button>
                    }
             </div> 
             </div> 
         
               
             
            )
        }

             
    }
}   

export default Subasta
