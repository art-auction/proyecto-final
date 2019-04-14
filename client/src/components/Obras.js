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
    
<div className="row card-container">
<div class="livicon-evo" data-options="
  name: brush.svg; 
  style: original; 
  size: 120px; 
  strokeStyle: original; 
  strokeWidth: original; 
  tryToSharpen: true; 
  rotate: none; 
  flipHorizontal: false; 
  flipVertical: false; 
  strokeColor: #22A7F0; 
  strokeColorAction: #b3421b; 
  strokeColorAlt: #F9B32F; 
  strokeColorAltAction: #ab69c6; 
  fillColor: #91e9ff; 
  fillColorAction: #ff926b; 
  solidColor: #6C7A89; 
  solidColorAction: #4C5A69; 
  solidColorBgAction: #ffffff; 
  solidColorBg: #ffffff; 
  colorsOnHover: none; 
  colorsHoverTime: 0.3; 
  colorsWhenMorph: none; 
  brightness: 0.1; 
  saturation: 0.07; 
  morphState: start; 
  morphImage: none; 
  allowMorphImageTransform: false; 
  strokeWidthFactorOnHover: none; 
  strokeWidthOnHoverTime: 0.3; 
  keepStrokeWidthOnResize: false; 
  animated: true; 
  eventType: hover; 
  eventOn: self; 
  autoPlay: false; 
  delay: 0; 
  duration: default; 
  repeat: default; 
  repeatDelay: default; 
  drawOnViewport: false; 
  viewportShift: oneHalf; 
  drawDelay: 0; 
  drawTime: 1; 
  drawStagger: 0.1; 
  drawStartPoint: middle; 
  drawColor: same; 
  drawColorTime: 1; 
  drawReversed: false; 
  drawEase: Power1.easeOut; 
  eraseDelay: 0; 
  eraseTime: 1; 
  eraseStagger: 0.1; 
  eraseStartPoint: middle; 
  eraseReversed: true; 
  eraseEase: Power1.easeOut; 
  touchEvents: false 
"></div>          
 {
  Array.isArray(this.state.artists) ? this.state.artists.map(artist=><CardObras key={artist._id}  sendId={this.sendMsg} {...artist} getObraId={this.getObraId}/>)
    : null//.artists.map(artist=><CardObras key={artist._id} {...artist}/>)
   }

    </div>
</div>


  )


}

}