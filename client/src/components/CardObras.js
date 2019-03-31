import React from "react"
import { Link } from 'react-router-dom'
//import ArtistProfile from "./ArtistProfile"
import Button from 'react-bootstrap/Button'
 const CardObras = artist =>{

return(
    <div className="container">
    <div className="row">

    <main className="artists-obras">

          <div className="col-md-6 profile-img cont-obras">
            
                {/*<img className="card-img-top rounded-circle" src={artist.profileImg} alt="Card image cap"></img>*/}
               
                    <h5 className="card-title">{artist.username}</h5>
                    
                   <Link className="btn btn-sm btn-outline-dark" onClick={console.log(artist)} to={`/artist-profile/${artist._id}`}>Perfil de artista</Link>
                   
                   
                </div>
               
          

    <div className="col-md-6 ">
   <div className="container">
   <div className="row">
    <div className="col-md-6">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras[0]} alt="Card image cap"></img>
                <div className="card-body">
                <Button variant="outline-info">Subasta</Button>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras[1]} alt="Card image cap"></img>
                <div className="card-body">
                <Button variant="outline-info">Subasta</Button>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras[2]} alt="Card image cap"></img>
                <div className="card-body">
                <Button variant="outline-info">Subasta</Button>
                   
                    
                    
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </main>
        </div>
        </div>
)



}

export default CardObras