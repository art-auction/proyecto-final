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
}

componentDidMount(){
    this.getProfile()

}
render(){

    console.log(this.state.profile.obras)
    return(
        <div className="container profile-container">
        
        <div className="row">
       
        <div className="col-md-4 inf-artist">
        <h1>{this.state.profile.username}</h1>
        <p>El señor Grigoriciuc es una artista muy respetado en Transilvania</p>
        </div>
        <article className="col-md-8 profile-art">
        <div className="container">
        <div className="row">
           
            <div className="col-md-6">
                {this.state.profile.obras ? <img src={this.state.profile.obras[0]} ></img>: null}
                
            </div>
            <div className="col-md-6">
    
                {this.state.profile.obras ? <img src={this.state.profile.obras[1]} ></img>: null}

            </div>
            <div className="col-md-6">
    
                {this.state.profile.obras ? <img src={this.state.profile.obras[2]} ></img>: null}

            </div>
            <AddImage addingImage={this.getProfile}/>
           
            </div>
            </div>
            </article>
            </div>
           
           
        </div>
    
    )
}




}





export default ArtistProfile