import React from "react";
import "./VideoPlayer.css";


const VideoPlayer = (props) => {

    let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return (  
        <div><iframe id="ytplayer" type="text/html" width="500" height="360"
        src= {jssrc}
        frameborder="0"></iframe>
          <div className="video-description-title-contain"><h4>TITLE: {props.title}</h4>
          
          <div><h4>DESCRIPTION: {props.description}</h4></div>
        </div>
        </div>
    );
}
 
export default VideoPlayer;