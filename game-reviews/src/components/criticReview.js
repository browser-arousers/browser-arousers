// import "criticReview.css";

const CriticReview = () => {
  return (
    <div className="criticReview">
      <div className="TopSection">
        <img className="cover"></img>
        <h1 className="gameTitle">Super Mario</h1>
      </div>
      <div className="MainSection">
        <p className="body"></p>
        <h2 className="score"></h2>
        <h2 className="ageRange"></h2>
      </div>
      <div className="BottomSection">
        <h3 className="author"></h3>
        <h3 className="timestamp"></h3>
      </div>
    </div>
  );
};

export default CriticReview;
