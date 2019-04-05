import React from "react"




const Home = () =>{



return(
    <div>
        <video autoPlay="autoplay" loop="loop" id="video_background" muted>
            <source src="https://res.cloudinary.com/dqphzmuq1/video/upload/v1554364685/paintings/A0450_1507_H3_807_1163_Videvo.mp4" type="video/mp4" />
        </video>
        <img className="img-title" src="https://res.cloudinary.com/dqphzmuq1/image/upload/v1554439244/paintings/51630b57ef0d6_1.png"/>
    </div>
)
}


export default Home