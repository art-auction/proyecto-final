import React, {Component} from 'react'
import Apiservice from "../service/apiservice"
import CardObras from "./CardObras"

export default class Obras extends Component{

constructor(){

    super()

    this.state = {
        artists: []
    }
    this.serviceObras = new Apiservice()
    
}

getArtists = ()=>{
   return this.serviceObras.getObras()
     .then(obras=>{
         console.log(obras)
         this.setState({
             artists: obras
         })
     }
        )

 }

componentDidMount(){
    this.getArtists()
}


render(){
    console.log(this.state.artists)
  return(

 <div className="container container-yalose">
    <h1>Obras</h1>
    <hr></hr>
    
<div className="row card-container">
{
    // if()
    this.state.artists.map(artist=><CardObras key={artist._id} {...artist}/>)
    }

</div>

    </div>

  )
}

}