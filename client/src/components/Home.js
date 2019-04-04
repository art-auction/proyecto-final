import React from "react"
import video from '../Video/A0453_1507_H3_807_1165_Videvo.mp4'



const Home = () =>{



return(
    <div>
        <video autoPlay="autoplay" loop="loop" id="video_background" muted>
            <source src="https://res.cloudinary.com/dqphzmuq1/video/upload/v1554364685/paintings/A0450_1507_H3_807_1163_Videvo.mp4" type="video/mp4" />
        </video>
    </div>
)
}


export default Home