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
import VideoPlayer from "./components/VideoPlayer/videoplayer";
import SearchBar from "./components/SearchBar/searchbar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {


  useEffect(() => {
    getSearchResults()
 }, [])

  const [searchResults, setSearchResults] = useState([""]);

  async function getSearchResults(searchTerm="bob ross"){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyDoI2GmiuXSN53X42hS05oRoeZcY_luhzA&maxResults=5&part=snippet`);
  console.log(response.data)
  setSearchResults(response.data)
}


  return (
    <div className="App">
      <SearchBar getSearchResults={getSearchResults}/>
      <VideoPlayer />
      <Navbar />
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