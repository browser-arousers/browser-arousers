import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeBanner from "./components/home-banner"
import Navbar from "./components/navbar"
import Signup from "./components/Signup"
import './App.css';
import CriticReview from "./components/criticReview";
import UserReview from "./components/gamereview";
import ReviewCompose from"./components/reviewcompose";

import "./App.css";
// import ReviewFeed from "./components/reviewFeed";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomeBanner/>
          </Route>
          <Route exact path="/Signup">
            <Signup />
            </Route>
        </Switch>
      <HomeBanner />
      <CriticReview
          //couldn't get the image source to show using "../public/images/3d-world-mario-banner.jpg" for some reason. Does it need to be imported in?
          review={{
            title: "Super Mario 3D World",
            src:
              "https://cdn.gamecloud.net.au/wp-content/uploads/2014/01/3d-world-mario-banner.jpg",
            body: "Great game!",
            score: "8/10",
            agerange: "8-13",
            author: "John",
            timestamp: "12:00",
          }}
        />
        <UserReview
          userReview={{
            avatar: "https://cdn.icon-icons.com/icons2/2200/PNG/512/gamer_avatar_icon_133991.png",
            body: "This is a review",
            score: "8",
            ageRange: "8-10",
            author: "user1",
            timeStamp: "5 oclock",
          }}
        />
        <ReviewCompose />
      </Router>
    </div>
  );
}

export default App;
