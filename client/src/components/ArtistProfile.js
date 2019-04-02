import React, { Component } from 'react'
import Apiservice from "../service/apiservice"
import AddImage from "../components/addimage"

class ArtistProfile extends Component{

constructor(props){
    super(props)
    this.state = {profile: {}}
    this.serviceProfile = new Apiservice()
}

getProfile(){
    return this.serviceProfile.getObra(this.props.match.params.id)
   
    .then(response => this.setState({profile: response}))
        //
}

componentDidMount(){
    this.getProfile()

}
render(){

    //console.log(this.state.profile.obras)
    return(
        <div className="container profile-container">
        
        <div className="row">
       
        <div className="col-md-4 inf-artist">
        <h1>{this.state.profile.username}</h1>
       
        <p>El señor {this.state.profile.username} es una artista muy respetado en su país.
         Su estilo realista está influenciado por la obra de grandes maestros rusos del gupo "Los Itinerantes" y de otrso grandes maestros del barroco</p>
         <AddImage  addingImage={this.getProfile}/>
        </div>
        <article className="col-md-8 profile-art">
        <div className="container">
        <div className="row">
           
            
    {this.state.profile.obras ? this.state.profile.obras.map(arg=> {
        {console.log(arg)}
    return (
        
        <div className="col-md-6">
        <img src={arg.image}/>
        </div>
    ) 
    }) : null}
                
            </div>
          </div>
       </article>
            
    </div>
            
           
        </div>
    
    )
}




}





export default ArtistProfile