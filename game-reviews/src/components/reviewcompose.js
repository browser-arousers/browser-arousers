import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import "./reviewcompose.css";

const ReviewCompose = (props) => {
  const [reviewBody, setReview] = useState("");

  const sendDetailsToServer = (e) => {
    e.preventDefault();
    const data = {
      reviewBody: reviewBody,
    };
    console.log(data);
    axios.post({
      //url location to be determined:
      url: "http://localhost:5000/addreview",
      mode: "cors",
      data: data,
    });
  };

  const handleSubmit = (event) => {
    if (event.target.id === "reviewBody") {
      setReview(event.target.value);
    }
  };

  return (
    <div className="reviewComposeSection">
      <form className="reviewCompose" onSubmit={sendDetailsToServer}>
        {/* <div className="userPic">
                <ProfilePicture src={somesourcehere} size="medium" />
            </div> */}
        <div className="inputText">
          <TextareaAutosize
            className="inputTextArea"
            id="reviewBody"
            placeholder="Add Your Review Here!"
            maxLength="560"
            cols="45"
            wrap="hard"
            onChange={handleSubmit}
          />
  
          <div className="reviewComposeButton">
            <button
              className="reviewButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewCompose;
