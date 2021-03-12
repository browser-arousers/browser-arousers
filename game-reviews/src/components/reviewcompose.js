import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import "./reviewcompose.css";

const ReviewCompose = (props) => {
  const [body, setBody] = useState([]);
  const [title, setTitle] = useState([]);

  const sendDetailsToServer = (e) => {
    e.preventDefault();
    const data = {
      body: body,
      title: title,
    };
    console.log(data);
    axios.post({
      method: "POST",
      //url location to be determined:
      url: "http://localhost:5000/review/addreview",
      mode: "cors",
      data: data,
    });
  };

  const handleSubmit = (event) => {
    if (event.target.id === "body") {
      setBody(event.target.value)
    } else if (event.target.id === "title") {
      setTitle(event.target.value)
    }
  };

  return (
    <div className="reviewComposeSection">
      <form className="reviewCompose" onSubmit={sendDetailsToServer}>
        {/* <div className="userPic">
                <ProfilePicture src={somesourcehere} size="medium" />
            </div> */}
        <input
                    id="title"
                    onChange={handleSubmit}
                    type="text"
                    className="formInput"
                    placeholder="Review Title"
                />
        
        <div className="inputText">
          <TextareaAutosize
            className="inputTextArea"
            id="body"
            placeholder="Add Your Review Here!"
            maxLength="560"
            cols="45"
            wrap="hard"
            onChange={handleSubmit}
          />

          <div className="reviewComposeButton">
            <button className="reviewButton" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewCompose;

// const [user, setUser] = useState([]);

// trying to grab the username using body.username?
//   useEffect(() => {
//   async function getUser(){
//     const url = "http://localhost:5000/review";
//     await axios({url:url, mode:"cors"}).then((response) => {
//       setUser(response.data);
//       localStorage.setItem("username", "ben");
//       console.log(localStorage.getItem("username"));
//     })
//   }
//     getUser();
// }, [])
