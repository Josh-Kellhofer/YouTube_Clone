// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import SearchBar from "./components/SearchBar/SearchBar";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import Post from "./components/Post/Post";
import Comments from "./components/Comments/Comments";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import useAuth from "./hooks/useAuth";

function App() {


  useEffect(() => {
    getSearchResults();
  }, [])
   

 useEffect(() => {
   getRelatedVideos();
   getComments();
    
}, [])

  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState('lLWEXRAnQd0');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([""]);
  const [post, setPostComment] = useState ([""]);
  const[user, token] = useAuth();

  async function getSearchResults(searchTerm="bob ross"){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDoI2GmiuXSN53X42hS05oRoeZcY_luhzA&maxResults=5&part=snippet&type=video`);
  setVideoId(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
  setSearchResults(response.data)
  console.log(response.data.items)
  }

  async function getRelatedVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=5&key=AIzaSyDoI2GmiuXSN53X42hS05oRoeZcY_luhzA`);
    setRelatedVideos(response.data.items)

  }

  async function getComments(){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`);
    setComments(response.data)
  }

  async function postComment(){
    let addComment = {
      video_id: videoId,
      // text: text,
    }
    let response = await axios.post("http://127.0.0.1:8000/api/comment/", addComment, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    setComments(response.data)
    getComments();

  }

  


  return (
   <div className="app-flex-contain">
    <div className="App">
      <Navbar />
      <div className="search-bar"><SearchBar getSearchResults={getSearchResults}/>
      </div>
       <div className="video-player"><VideoPlayer videoId={videoId} description={description} title={title}/></div>
       <div><Post postComment = {postComment}/></div>
       
       {/* <div><Comments comments = {comments}/></div> */}
      
       
       <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addcar" element={<PrivateRoute><AddCarPage/></PrivateRoute>} />
      </Routes>
      <div>
         <div className="app-relatedvids"><RelatedVideos relatedVideos={relatedVideos} setVideoId={setVideoId} setTitle = {setTitle} setDescription = {setDescription}/></div>
       </div>
      {/* </div> */}
      <Footer />
    </div>
    </div>
  );
}

export default App;