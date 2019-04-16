import React, { Component } from 'react';
import socketIOClient from "socket.io-client"
import Obras from "./Obras"
import Apiservice from "../service/apiservice"
import { Redirect } from 'react-router-dom'

import ReactTimeout from 'react-timeout'
import { isNumber } from 'util';

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
            puja: [],
            winner: "",
            moneyUser: 3000,
            noMoney: false,
            winner: false

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
       .then(obra => {
           this.serviceSubasta.getPuja(this.props.match.params.id)
           .then(puja => {
               console.log(puja.pujaColection[0])

               this.setState({...this.state, obra, puja:puja.pujaColection})})
           })
    }
    componentDidMount(){
        const { endpoint } = this.state
        
        this.getSubastaObra()

        this.socket.on("new_message", msg => {
            console.log(msg)
            const _apuestas = [...this.state.puja];
            console.log(_apuestas)
            _apuestas.push({user:msg.user, money:msg.sms});
            console.log(_apuestas)
            this.setState({
                ...this.state,
                puja: _apuestas
            })
        })
        this.socket.on("winner", msg => {
            console.log(msg.user)
            this.setState({winner:msg.user});
        })
    
    }

    getObraId = (id) => {
        this.setState({...this.state, obraIdSelected: id})
      }
      sendMsg = () => {
        if(this.state.moneyUser - this.state.mensaje >=0){
            this.socket.emit("new_message",{sms: this.state.mensaje, user:this.props.User})
            this.setState({moneyUser:this.state.moneyUser - this.state.mensaje, noMoney:false})
        } else {
            this.setState({noMoney:true})
        }

        //title:this.state.obra.title
        console.log("meeee")
            //this.state.obraIdSelected)
      }
     handleFormSubmit = e =>{
        e.preventDefault()
        if(this.state.moneyUser - this.state.mensaje >=0){
        
        const apuestas = this.state.apuestas
     this.servicePuja.postPujas({sms: this.state.mensaje, user:this.props.User}, this.props.match.params.id)
     .then(response=>{
        //  this.setState({apuestas:response.pujaColection})
         
     })
     .catch(err=>console.log(err))
    }
     }
      
     startSubasta = () => {
        this.props.setTimeout(() => {
            const max = Math.max(...this.state.puja.map(puja => puja.money));
            this.socket.emit("winner",{user:this.state.puja.find(pija => pija.money == max).user})
           // this.setState({...this.state.winner, winner:this.state.winner.max.user})
            // console.log(this.state.puja.find(pija => pija.money == max).user)
        }, 3000)
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
            
            <div className="row col-sm-10">
            <div className="col-md-6 col-sm-8">
            
            {this.state.winner ? <h1>El ganador es: {this.state.winner}</h1>:null}
            <div className="subasta-form">
                <h4>{this.state.obra.title}</h4>
                <hr></hr>
                <img className="subasta-img" src={this.state.obra.image}></img><br></br>
                <strong>{this.state.obra.año}</strong><br></br>
                
                
            </div>
               
       
                
           </div>    
                
          
               
        <div className="col-md-6 col-sm-8 puja-cont">
       
            <p className="tucredito">Tu crédito es: {this.state.moneyUser} CarlosCoin</p>
        <span id="form-puja">
        <form  onSubmit={this.handleFormSubmit}>
                
                       
                        <div className="put-box">
           {
               this.state.puja.map(apuesta => {
               console.log(apuesta)
               return(
                
                   <span>
                  <div class="box sb4">
                   
                       <strong>{apuesta.user.username}, puja: {apuesta.money} <i class="fas fa-gavel"></i> </strong><br></br>
                       </div>
                  
                       </span>
                 
               )
           })}
            </div> 
            {this.state.noMoney ? <p>NO MONEY POBRE</p> : null}
            <input className="input-puja" placeholder="Puja aquí" value={this.state.mensaje} name="mensaje" type="number" onChange = {(e)=>this.handleState(e)} />
                 <input className="input-puja" type="submit" onClick={this.sendMsg}/>
                    </form>
                    </span>
                    {/* <strong>{this.state.mensaje} </strong><br></br> */}
                    
             </div>       
                    {//<button onClick={this.sendMsg} >"SEND"</button>
                    }
                    
             
                    <button className="time" onClick={this.startSubasta}>GO!!!!!</button>
                    
             </div> 
         
               
             
            )
        }

             
    }
}   

export default ReactTimeout(Subasta)
