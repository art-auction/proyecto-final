import React from "react"
import ReactPlayer from "react-player";



const Home = () =>{



return(
    //"https://res.cloudinary.com/dqphzmuq1/video/upload/v1554364685/paintings/A0450_1507_H3_807_1163_Videvo.mp4
    //type="video/mp4"
    <div>
        <h5 className="titulo-flot">Art & auction</h5>
        {/* <ReactPlayer id="video_background" url="https://www.youtube.com/watch?v=TmrhNme75Sw"
         playing
         controls
         volume="0"  /> */}
        <video autoPlay="autoplay" loop="loop" id="video_background" muted>
       
            <source src="https://res.cloudinary.com/dqphzmuq1/video/upload/v1555174313/videos/The_Louvre_Experience_4K_1080p.mp4" type="video/mp4"/>
            
        </video> 
  
    </div>
)
}


export default Home