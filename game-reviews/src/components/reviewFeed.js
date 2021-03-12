// import "./reviewFedd.css"
// import GameReview from "./gamereview"
import { useState, useEffect } from "react";
import axios from "axios";

const ReviewFeed = (props) => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        async function getData(){
            const url = "http://localhost:5000/review";
            await axios({url:url, mode:"cors"}).then((response) => {
                setReviews(response.data);
                localStorage.setItem("username", "rob");
                console.log(localStorage.getItem("username"));
            })
        }
        getData()
    }, [])
    
    const reviewItems = reviews.map((review, index) => {
        return(
            <li key={index}>{review.title}</li>
        )
    });

    return(
        <div className="reviewContainer">
            <h1>Review here</h1>
            <ul>{reviewItems}</ul>
        </div>
    )

};

export default ReviewFeed;