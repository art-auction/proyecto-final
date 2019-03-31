import React from "react"
import { Link } from 'react-router-dom'
import ArtistProfile from "./ArtistProfile"

 const CardObras = artist =>{

return(
    <main className="artists-obras">

          <div className="col-sm-4 profile-img">
            
                <img className="card-img-top rounded-circle" src={artist.profileImg} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                   <Link className="btn btn-sm btn-outline-dark" onClick={console.log(artist)} to={`/artist-profile/${artist._id}`}>Perfil de artista</Link>
                   
                   
               
                </div>
                </div>

    
    <div className="col-sm-3">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras[0]} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras[1]} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras[2]} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
                </div>
            </div>
        </div>

        </main>
)



}

export default CardObras