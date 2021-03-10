import React, { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import "./ReviewCompose.css";

const ReviewCompose = (props) => {

    return(
        <div className="reviewCompose">
            <div className="profileContainer">
                {/* profile picture  */}
            </div>
            <div className="inputText">
                <TextareaAutosize
                    className="inputTextArea"
                        placeholder={placeholder}
                    maxLength = "560"
                    cols="45"
                    wrap="hard"
                    value={reviewBody}
                    onChange={handleTextUseChange}
            />
        </div>
        <div className="reviewComposeButton">
            <button
            className="reviewButton"
            type="submit"
            // disabled={!reviewBody}
            onClick={handleSubmit}
            >Submit</button>
        </div>
        </div>
    );
};

export default ReviewCompose;