import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from "./components/navbar"
import Signup from "./components/Signup"
import Home from "./components/reviewhome"
import HomeBanner from "./components/home-banner";
import './App.css';
// import CriticReview from "./components/criticReview";
// import UserReview from "./components/gamereview";
// import ReviewFeed from "./components/reviewFeed";


function App() {
  return (
    <div className="App">
            <Navbar />
      <BrowserRouter>
      <Route exact path ="/" component={HomeBanner}/>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Reviews" component={Home}></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
