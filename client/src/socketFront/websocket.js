import io from "socket.io-client"


export default class WebsocketConnetction{
    constructor(){
        this.socket = io("http://localhost:5000")
        this.socket.on("mensaje", ({text}) =>{
     this.socket.emit({
         type: "ADD_MESSAGE",
         message: {
             from: "server",
             text
         }
     }
         
     )
        })
    }
  sendMessage(text){
      console.log(`Enviando mensaje: ${text}`)
      this.socket.emit("new_message", {text}  )
  }
}