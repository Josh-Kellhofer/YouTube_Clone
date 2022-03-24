import React from "react";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {

    return (  
        <div><h2>RELATED VIDS</h2>
        <div className="related-vid">
            <div>
            {props.relatedVideos.map((element, index) => {
                if (element.snippet){
                    return (
                    <div className='related-image' key ={index}>
                        <img src= {element.snippet.thumbnails.medium.url} onClick={() => {props.setVideoId(element.id.videoId); props.setDescription(element.snippet.discription); props.setTitle(element.snippet.title)}}  className='related-image'></img>
                    </div>
                    )
                }

            })}
            </div>
        </div>
        </div>
    );
}
 
export default RelatedVideos;