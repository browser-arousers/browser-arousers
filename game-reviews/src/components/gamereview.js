//this is just a test page to check the reviewcompose is working
import "gamereview.css";
import fetch from "node-fetch";
import {useState, useEffect} from 'react';


const UserReview = () => {
    const [user, setUser] = useState({})
    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:5000/users/name/Ste")
            const data = await response.json();
            setUser(data)

        }
        getData()
    },[]);
        return(
        <div className="reviewBody">
            <h2>{user.name}</h2>
            <UserReview avatar="profile pic" body = "This is a review" score = "8" ageRange = "8-10" author = "user1" timeStamp = "5 oclock"/>
        </div>
    );
};

export default UserReview;