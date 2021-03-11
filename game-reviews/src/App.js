import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeBanner from "./components/home-banner"
import Navbar from "./components/navbar"
import Signup from "./components/Signup"

import './App.css';
// import CriticReview from "./components/criticReview";

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
      </Router>
    </div>
  );
}

export default App;
