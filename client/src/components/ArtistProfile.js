import React, { Component } from 'react'
import Apiservice from "../service/apiservice"
import AddImage from "../components/addimage"

class ArtistProfile extends Component{

constructor(props){
    super(props)
    this.state = {
        profile: {},
        loggedInUser: null 
    
    }
   
    this.serviceProfile = new Apiservice()
}

getProfile(){
    return this.serviceProfile.getObra(this.props.match.params.id)
   
    .then(response => this.setState({profile: response}))
        //
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
deleteObra = (id)=>{

    this.serviceProfile.delete(id)
    .then(res=>this.getProfile())
    

}

componentDidMount(){
    this.getProfile()

}
componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
}
render(){
    if(this.props.loggedInUser){
        console.log(this.props.loggedInUser._id)
    }

    //console.log(this.state.profile.obras)
    return(
        <div className="container profile-container">
        
        <div className="row">
       
        <div className="col-md-4 inf-artist">
        <h1>{this.state.profile.username}</h1>
       
        <p>El señor {this.state.profile.username} es un artista muy respetado en su país.
         Su estilo realista está influenciado por la obra de grandes maestros rusos del gupo "Los Itinerantes" y de otros grandes maestros del barroco</p>
    {this.props.loggedInUser !== null && this.props.loggedInUser._id === this.state.profile._id ? <AddImage  addingImage={this.getProfile}/> : null}
         
        </div>
        <article className="col-md-8 profile-art">
            <div className="container">
            <div className="row">
           
            
    {this.state.profile.obras ? this.state.profile.obras.map(arg=> {
        
    return (
        
        <div className="col-md-6">
        <img src={arg.image}/>
        {this.props.loggedInUser !== null && this.props.loggedInUser._id === this.state.profile._id ? <button className="btn btn-danger" onClick={() => this.deleteObra(arg._id)}>Delete</button> : null}
        
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