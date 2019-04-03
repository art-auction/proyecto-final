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
    
    <div className="row card-container">
        {
                this.state.artists.map(artist=><CardObras key={artist._id} {...artist}/>)
            //.artists.map(artist=><CardObras key={artist._id} {...artist}/>)
        }

    </div>
</div>


  )


}

}