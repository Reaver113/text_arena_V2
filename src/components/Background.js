import React from "react";
import './Background.css'
import VideoBg from "../assets/Village.mp4"

const Background = () => {
    return(
        <div className='videoCont'>
            <video src={VideoBg} autoPlay loop muted disablePictureInPicture />
        </div>
        
    )
}

export default Background