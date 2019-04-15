import React from "react"
import ReactPlayer from "react-player";



const Home = () =>{



return(
    //"https://res.cloudinary.com/dqphzmuq1/video/upload/v1554364685/paintings/A0450_1507_H3_807_1163_Videvo.mp4
    //type="video/mp4"
    <div className="home">
    <img className="titulo-flot" src="https://res.cloudinary.com/dqphzmuq1/image/upload/v1555346932/paintings/logo_auction.png"></img> 
        {/* <ReactPlayer id="video_background" url="https://www.youtube.com/watch?v=TmrhNme75Sw"
         playing
         controls
         volume="0"  /> */}
        <video autoPlay="autoplay" loop="loop" id="video_background" muted>
       
            <source src="https://res.cloudinary.com/dqphzmuq1/video/upload/v1555347409/videos/vlc-record-2019-04-15-18h54m51s-Flow__The_Beauty_of_Ink.mp4-.mp4" type="video/mp4"/>
            
        </video> 
   
    </div>
)
}


export default Home