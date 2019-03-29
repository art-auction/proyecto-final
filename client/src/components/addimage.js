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
        width: '40%'
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
         image: ""
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




}

