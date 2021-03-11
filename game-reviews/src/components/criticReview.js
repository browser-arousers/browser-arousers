import "./criticReview.css";

const CriticReview = (props) => {
  return (
    <div className="criticReview">
     
        <img className="cover" alt="none" src={props.review.src}></img>
        <h1 className="title">{props.review.title}</h1>
   
        <p className="body">{props.review.body}</p>
        <h2 className="score">{props.review.score}</h2>
        <h2 className="ageRange">{props.review.agerange}</h2>
    
        <h3 className="author">{props.review.author}</h3>
        <h3 className="timestamp">{props.review.timestamp}</h3>
      </div>
  );
};

export default CriticReview;
