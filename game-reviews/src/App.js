import React from "react";
import HomeBanner from "./components/home-banner";
import Review from "./components/reviewcompose";
import './App.css';
import CriticReview from "./components/criticReview";

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <CriticReview />
      <Review />
    </div>
  );
}

export default App;
