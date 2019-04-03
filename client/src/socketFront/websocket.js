import io from "socket.io-client"


export default class WebsocketConnetction{
    constructor(props){
        // super()
        // this.state = {
        //     pujas: []
        // }
        
        this.socket = io("http://localhost:5000")
        this.socket.on("mensaje", (data) =>{
            //this.setState({})

            console.log(data)
            
    //  this.socket.emit({
    //      type: "ADD_MESSAGE",
    //      message: {
    //          from: "server",
    //          text
    //      }
    //  }
         
    //  )
        })
    }
    render = (data)=>{
     let html = data.map((message,index)=>{
         return (`
         <div className="msg" id="box-msg">

         `)
     })
    }
  sendMessage(text, User){
      console.log(text)
       let message = {}
      console.log(`Enviando mensaje: ${text} del usuario ${User}`)
      this.socket.emit("new_message", message)
      
  }
}