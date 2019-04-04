import React from "react"
import video from '../Video/A0453_1507_H3_807_1165_Videvo.mp4'



const Home = () =>{



return(
    <div>
        <video autoPlay="autoplay" loop="loop" id="video_background" muted/>
            <source src={video} type="video/mp4" />

    </div>
)
}


export default Home