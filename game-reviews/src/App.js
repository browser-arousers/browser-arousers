import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import HomeBanner from "./components/home-banner"
import Navbar from "./components/navbar"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <HomeBanner />
      </Router>
    </div>
  );
}

export default App;
