import React from "react"
import { Link } from 'react-router-dom'
//import ArtistProfile from "./ArtistProfile"
import Button from 'react-bootstrap/Button'



const CardObras = artist => {

    return (
        <span className="container">
        <div className="row">

            <main className="artists-obras">

                <div className="col-md-4 profile-img cont-obras inf-artist" id="artist-text">

                    {/*<img className="card-img-top rounded-circle" src={artist.profileImg} alt="Card image cap"></img>*/}

                    <h5 className="card-title">{artist.username}</h5>
                    <p>El señor {artist.username} es una artista muy respetado en su país.
         Su estilo realista está influenciado por la obra de grandes maestros rusos del gupo "Los Itinerantes" y de otrso grandes maestros del barroco</p>

                    <Link className="btn btn-sm btn-outline-dark"  to={`/artist-profile/${artist._id}`}>Perfil de artista</Link>
                  

                </div>

                <div class="col-md-6 col-sm-10 obras-menu">
                    <div className="row">

                        {artist.obras.map(obra => {
                            return (
                                <div class="col-md-6">
                                    <div className="card card-obras">
                                        <img className="card-img-top" src={obra.image} alt="imagen -pintura" />
                                        <div className="card-body">
                                            <Button variant="outline-info" onClick={() => artist.getObraId(obra._id)}>Subasta</Button>
                                        </div>
                                    </div>
                                </div>)
                        })}




                    </div>
                </div>
            </main>
        </div>
        </span>
    )



}

export default CardObras