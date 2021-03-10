//this is just a test page to check the reviewcompose is working
import "gamereview.css";


const UserReview = () => {
    return(
        <div className="reviewBody">
            <UserReview avatar="profile pic" body = "This is a review" score = "8" ageRange = "8-10" author = "user1" timeStamp = "5 oclock"/>
        </div>
    );
};

export default Review;