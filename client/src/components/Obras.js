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
  return(

 <div className="container">
    <h1>Obras</h1>
    <div className="">
<div className="row">
{
    this.state.artists.map(artist=><CardObras key={artist._id} {...artist}/>)
    }

</div>

    </div>
    </div>
  )
}

}