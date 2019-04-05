import React, { Component } from 'react'
import Apiservice from "../service/apiservice"
import Modal from "react-modal"


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: "50%"
    }
}

Modal.setAppElement('#root')

class AddImage extends Component {

constructor(pros){

super(pros)

this.state = {
modalIsOpen: false,
     obra: {
        title: "",
        price: "",
        año: "",
        image: "",
        description: "",
        author: "",

     }
     

}
this.service = new Apiservice()
this.openModal = this.openModal.bind(this)
this.closeModal = this.closeModal.bind(this)

}
openModal = () => {
    this.setState({ modalIsOpen: true });
}

closeModal = () => {
    this.setState({ modalIsOpen: false });
}
handleSate = e =>{
    const {name, value} = e.target
    this.setState({
      obra:{
          ...this.state.obra, [name] : value
      }


    })
}
handleFileUpload = e =>{
const uploadImage = new FormData()
uploadImage.append("obra", e.target.files[0])

this.service.postNewObra(uploadImage)
.then(response=>{
    this.setState({
        obra:{
            ...this.state.obra, obra : response.secure_url
        }
    })
})
.catch(err=>console.log(err))


}


 handleSubmit = e =>{
    e.preventDefault()
   this.service.postNewObra(this.state.obra)
//    .then(x=> this.props.addingImage()) 
   this.setState({
    obra: {
        title: "",
        price: "",
        año: "",
        image: "",
        description: "",
        author: "",
            
     }
   })
   this.closeModal()

 }




render() {
    return (
        <div> 
            {/* {
                this.user ?
           
           
            : null
        } */}
         <button onClick={this.openModal} className="btn btn-add">Nueva obra</button>
            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>

                <h2>Nueva obra</h2>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control" name="title" value={this.state.obra.title} onChange={(e) => this.handleState(e)} />
                        </div>
              <div className="form-group">
                            <label>Precio</label>
                            <input type="text" className="form-control" name="price" value={this.state.obra.price} onChange={(e) => this.handleState(e)} />
                 </div>
                 
                 <div className="form-group">
                            <label>Año</label>
                            <input type="text" className="form-control" name="año" value={this.state.obra.año} onChange={(e) => this.handleState(e)} />
                 </div>
                 

                    <div className="form-group">
                        <label>Imagen</label>
                        <input type="file" className="form-control" onChange={(e) => this.handleFileUpload(e)} />
                    </div>
                    <div className="form-group">
                            <label>Descripción</label>
                            <input type="text" className="form-control" name="description" value={this.state.obra.description} onChange={(e) => this.handleState(e)} />
                 </div>
                 <div className="form-group">
                            <label>Autor</label>
                            <input type="text" className="form-control" name="author" value={this.state.obra.author} onChange={(e) => this.handleState(e)} />
                 </div>
                 

                 

                    <button type="submit" className="btn btn-primary">Crear</button>

                </form>

            </Modal>
           
        </div>
    )
}




}


export default AddImage 