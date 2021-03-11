import "./criticReview.css";

const CriticReview = (props) => {
  return (
    
    <div className="criticReview">
        <img className="cover" alt="none" src={props.review.src}/>
        <h1 className="title">{props.review.title}</h1>

        <p className="body">{props.review.body}</p>
        <h2 className="score">Score: {props.review.score}</h2>
        <h2 className="ageRange">Age Range: {props.review.agerange}</h2>

  
        <h3 className="author">Author: {props.review.author}</h3>
        <h3 className="timestamp">Time: {props.review.timestamp}</h3>

    </div>
  );
};

export default CriticReview;
