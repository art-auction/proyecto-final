import React from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'



const CardObras = artist => {

    return (        
        <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-4 obras">


                <h5 className="card-title">{artist.username}</h5>
                <p className="artist-text">El señor {artist.username} es un artista muy respetado en su país.
                    Su estilo realista está influenciado por la obra de grandes maestros rusos
                    del grupo "Los Itinerantes" y de otros grandes maestros del barroco.</p>




                <Link className="btn btn-sm btn-outline-dark" onClick={console.log(artist)} to={`/artist-profile/${artist._id}`}>Perfil de artista</Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
            <div className="row">

            {artist.obras.map(obra => {
                return (
                        <div className="col-sm-12 col-lg-6">
                        
                        <div className="card card-obras ">
                            <img className="card-img-top" src={obra.image} alt="imagen -pintura" />
                            <div className="card-body">
                            <Link to={`/subasta/${obra._id}`}> <Button variant="outline-info">Subasta</Button></Link>

                                {
                                
                                }
                            </div>
                        </div>
                        </div>


                    )
            })}
                    </div>

            </div>
        </div>
       


    )
    
    



}

export default CardObras