// import React, { useState } from "react";
// import TextareaAutosize from "react-textarea-autosize";
// import "./reviewcompose.css";
// import Review from "./game1review";

// const Review = Review.body;
// console.log(Review)

// const ReviewCompose = (props) => {

// const [reviewBody, setReview] = useState("");

// const handleTextUseChange = (onChangeEvent) =>
//   setReview(onChangeEvent.target.value);

// const handleSubmit = () => {
//   setReview("");
// }

//   constructor(props) {
//     super(props)
//   };

//   return (

//     <div className="reviewCompose">
//       {/* <div className="userPic">
//                 <ProfilePicture src={somesourcehere} size="medium" />
//             </div> */}
//       <div className="inputText">
//         <TextareaAutosize
//           className="inputTextArea"
//           placeholder="Add Your Review Here!"
//           maxLength="560"
//           cols="45"
//           wrap="hard"
//           value={reviewBody}
//           onChange={handleTextUseChange}
//         />
//         <div className="reviewComposeButton">
//           <button
//             className="reviewButton"
//             type="submit"
//             //   disabled={!reviewBody}
//             onClick={handleSubmit}
//           >Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCompose;