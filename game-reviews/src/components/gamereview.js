//this is just a test page to check the reviewcompose is working
import "./gamereview.css";
// import fetch from "node-fetch";
// import {useState, useEffect} from 'react';


const UserReview = (props) => {
  // const [user, setUser] = useState({})
  // useEffect(()=>{
  //     async function getData(){
  //         const response = await fetch("http://localhost:5000/users/name/Ste")
  //         const data = await response.json();
  //         setUser(data)
  //     }
  //     getData()
  // },[]);

  return (
    <div className="reviewBody">
      <img className="profilePic" alt="none" src={props.userReview.avatar} />
      <h2 className="userName">User: {props.userReview.author}</h2>
      <h2 className="timeStamp">{props.userReview.timeStamp}</h2>
      <h1 className="score">Score: {props.userReview.score}</h1>
      <h1 className="ageRange">Age-Range: {props.userReview.ageRange}</h1>
      <p className="review">{props.userReview.body}</p>
    </div>
  );
};

export default UserReview;

