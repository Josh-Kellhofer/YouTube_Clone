// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import SearchBar from "./components/SearchBar/SearchBar";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/videoplayer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import React, { useState, useEffect} from "react";
import SearchBar from "./components/SearchBar/SearchBar";



function App() {

  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    getSearchResults()
  }, [])

  async function getSearchResults(searchTerm="Soweto Gospel Choir Khumbya"){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key={API KEY HERE}`);
    console.log(response.data)
    setSearchResults(response.data)
  }

  return (
    <div className="App">
      <div className="Search-Bar">
        <SearchBar getSearchResults={getSearchResults}/>
      </div>
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