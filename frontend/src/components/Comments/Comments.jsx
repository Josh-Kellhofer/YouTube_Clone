import React from "react";
import './Comments.css';


const Comments = (props) => {

  return (
    <div className="comments-list">
      <div className="text-list">USERNAME:</div>
      <div className="text-list">COMMENT:</div>
      <div><Comments/></div>
    </div>
  )
}

export default Comments;