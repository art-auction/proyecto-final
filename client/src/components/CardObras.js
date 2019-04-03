import React from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'



const CardObras = artist => {

    return (
        <div className="row">

            <main className="artists-obras">

                <div className="col-lg-6 profile-img cont-obras inf-artist" id="artist-text">

                    {/*<img className="card-img-top rounded-circle" src={artist.profileImg} alt="Card image cap"></img>*/}

                    <h5 className="card-title">{artist.username}</h5>
                    <p>El señor {artist.username} es una artista muy respetado en su país.
         Su estilo realista está influenciado por la obra de grandes maestros rusos del gupo "Los Itinerantes" y de otrso grandes maestros del barroco</p>

                    <Link className="btn btn-sm btn-outline-dark" onClick={console.log(artist)} to={`/artist-profile/${artist._id}`}>Perfil de artista</Link>


                </div>

                <div class="col-md-6">
                    <div className="row">

                        {artist.obras.map(obra => {
                            return (
                                <div class="col-md-6">
                                    <div className="card card-obras">
                                        <img className="card-img-top" src={obra.image} alt="imagen -pintura" />
                                        <div className="card-body">
                                        <Link to={`/subasta/${obra._id}`}> <Button variant="outline-info">Subasta</Button></Link>
                                        </div>
                                    </div>
                                </div>)
                        })}




                    </div>
                </div>
            </main>
        </div>
    )



}

export default CardObras