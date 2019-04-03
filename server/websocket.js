
module.exports = (io) =>{
    console.log("Estamos listos, SIIIIIIIIIII")

    io.on("connection", socket =>{
        console.log("UN USUARIO CONCETADO")
      socket.emit("mensaje", {text: "Conectado al servidor"})
      socket.on("new_message", (obj)=>{
          console.log("Nuevo mensaje del cliente")
          console.log(obj)

          //socket.broadcast.emit("new_message", obj)
          io.emit("new_message", obj)
      })



    })
}


