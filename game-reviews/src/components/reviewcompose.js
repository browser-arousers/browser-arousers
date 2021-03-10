import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./reviewcompose.css";

const ReviewCompose = (props) => {
  return (




    <div className="reviewCompse">
      {/* <div className="userPic">
                <ProfilePicture src={somesourcehere} size="medium" />
            </div> */}
      <div className="inputText">
        <TextareaAutosize
          className="inputTextArea"
          placeholder="Add Your Review Here!"
          maxLength="560"
          cols="45"
          wrap="hard"
          value={reviewBody}
          onChange={handleTextUseChange}
        />
        <div className="reviewComposeButton">
          <button
            className="reviewButton"
            type="submit"
            //   disabled={!reviewBody}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCompose;