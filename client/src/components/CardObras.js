import React from "react"


 const CardObras = artist =>{

return(
    <main className="artists-obras">

          <div className="col-sm-4 profile-img">
            
                <img className="card-img-top rounded-circle" src={artist.profileImg} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
               
                </div>
                </div>
    
    <div className="col-sm-4">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras.pic1} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras.pic2} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card card-obras">
                <img className="card-img-top" src={artist.obras.pic3} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{artist.username}</h5>
                    
                    
                </div>
            </div>
        </div>

        </main>
)



}

export default CardObras