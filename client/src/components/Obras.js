import React, {Component} from 'react'
import Apiservice from "../service/apiservice"
import CardObras from "./CardObras"

export default class Obras extends Component{

constructor(){

    super()

    this.state = {
        artists: [],
        obraIdSelected: undefined,

    }
    this.serviceObras = new Apiservice()
    
}

getObraId = (id) => {
    this.props.getObraId(id)
  }


getArtists = ()=>{
   return this.serviceObras.getObras()
     .then(artists=>{
         console.log(artists)
         this.setState({
             artists: artists
         })
     }
        )

 }

componentDidMount(){
    this.getArtists()
}


render(){
   
  return(

 <div className="container container-yalose">
    <h1>Obras</h1>
        <hr></hr>
    
<div className="card-container">
<div className="container">
         
 {
  Array.isArray(this.state.artists) ? this.state.artists.map(artist=><CardObras key={artist._id}  sendId={this.sendMsg} {...artist} getObraId={this.getObraId}/>)
    : null//.artists.map(artist=><CardObras key={artist._id} {...artist}/>)
   }
</div>
    </div>
</div>


  )


}

}