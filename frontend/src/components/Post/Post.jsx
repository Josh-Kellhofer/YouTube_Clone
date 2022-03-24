import React, { useState } from "react";
import "./Post.css";

const Post = (props) => {

    const [comment, setComment] = useState("");

    const handleSubmit = (event) => {
      event.preventdefault();
      props.postNewComment(comment);
      setComment("");
    }

    return (
         <div>
          <form className="post-container" onSubmit={handleSubmit}>
            <div>
                <label className = 'comment-label' htmlFor="Comment">COMMENT:{" "}</label>
                <input type= "text" id = 'Comment' className="comment-box" value = {comment} onChange ={(event) => setComment(event.target.value)} />
            </div>
            <div className="comment-container">
                <button type = 'submit' className="comm-button">CLICK HERE TO POST</button>
            </div>
          </form>
        </div>
      );
    };
    
    export default Post;
