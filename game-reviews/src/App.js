import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import HomeBanner from "./components/home-banner";
import Navbar from "./components/navbar";
import CriticReview from "./components/criticReview";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <HomeBanner />
      <CriticReview 
      //couldn't get the image source to show using "../public/images/3d-world-mario-banner.jpg" for some reason. Does it need to be imported in?
      review ={{title:"Super Mario 3D World", src:"https://cdn.gamecloud.net.au/wp-content/uploads/2014/01/3d-world-mario-banner.jpg", body: "Great game!", score: "8/10", agerange:"8-13", author:"John", timestamp: "12:00"}}
      />
      </Router>
    </div>
  );
}

export default App;
