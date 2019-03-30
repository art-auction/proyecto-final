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
        <div className="container profile-art">
        <h1>{this.state.profile.username}</h1>
        <div className="row">

            <div className="col-md-4">
                {this.state.profile.obras ? <img src={this.state.profile.obras.pic1} ></img>: null}
                
            </div>
            <div className="col-md-4">
    
                {this.state.profile.obras ? <img src={this.state.profile.obras.pic2} ></img>: null}

            </div><div className="col-md-4">
    
                {this.state.profile.obras ? <img src={this.state.profile.obras.pic3} ></img>: null}

            </div>
            <AddImage addingImage={this.getProfile}/>

            </div>

        </div>
    
    )
}




}





export default ArtistProfile