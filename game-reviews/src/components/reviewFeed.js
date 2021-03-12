// import "./reviewFedd.css"
// import GameReview from "./gamereview"

const ReviewFeed = (props) => {

    //so not entirely sure how to call data from React front end if I'm honest
    //fetch ('data') seems too vague 
async function getReview() {
    const response = await fetch('');
    const data = await response.json();
    
} 


//     const createReviewComponents = (reviews) => {
//         if (reviews.length === 0) 
//             return 
//                 <p>There are no reviews available</p>;
//         return reviews.map((review) => <GameReview key={reviews.id} review={review}/>);
//     }

//     // const reviewComponents = createReviewComponents(reviewList);

    return(
        <div className="reviewContainer">
            {reviewComponents}
        </div>
    )

};

export default ReviewFeed;