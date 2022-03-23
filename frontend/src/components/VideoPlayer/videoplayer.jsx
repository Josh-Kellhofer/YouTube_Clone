import React from "react";
import "./VideoPlayer.css";


const VideoPlayer = (props) => {

    let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return (  
        <div><iframe id="ytplayer" type="text/html" width="500" height="360"
        src= {jssrc}
        frameborder="0"></iframe>
          <div><h2>TITLE: {props.title}</h2></div>
          <div><h2>DESCRIPTION: {props.description}</h2></div>
        </div>
    );
}
 
export default VideoPlayer;