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

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {


  useEffect(() => {
    getSearchResults()
 }, [])

  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState('lLWEXRAnQd0');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  async function getSearchResults(searchTerm="bob ross"){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDoI2GmiuXSN53X42hS05oRoeZcY_luhzA&maxResults=5&part=snippet&type=video`);
  setSearchResults(response.data)
  console.log(response.data.items)
}


  return (
    <div className="App">
      <Navbar />
      <div className="search-bar"><SearchBar getSearchResults={getSearchResults}/>
      </div>
       <div className="video-player"><VideoPlayer videoId={videoId} description={description} title={title}/></div>
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
      <Footer />
    </div>
  );
}

export default App;