import { useState } from 'react';
<<<<<<< HEAD
import Axios from 'axios';
import './Signup.css';
import React from 'react';

export default function Signup(props) {

    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("")

    const sendDetailsToServer = () => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            props.showError('Passwords do not match')
        }
    }

    return (
        <div>
            <form className="form-group">

            <label>Username</label>
                <input type="username"
=======
import axios from 'axios';
import './Signup.css';

export default function Signup(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const sendDetailsToServer = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            password: password,
            passwordCheck: passwordCheck,
            }
            console.log(data);
        axios.post({
            url:"http://localhost:5000/users/register",
            mode:"cors",
            data:data
        })
    }

    const handleSubmit = (event) => {
        if (event.target.id === "username") {
            setUsername(event.target.value)
        } else if (event.target.id === "email") {
            setEmail(event.target.value)
        } else if (event.target.id === "password") {
            setPassword(event.target.value)
        } else if (event.target.id === "passwordCheck") {
            setPasswordCheck(event.target.value)
        }
    }
    return (
        <div>
            <form className="form-group" onSubmit={sendDetailsToServer}>
                

                <label>Username</label>
                <input
                    id="username"
                    onChange={handleSubmit}
                    type="text"
>>>>>>> main
                    className="formInput"
                    placeholder="Enter Username"
                />

                <label>Email Address</label>
<<<<<<< HEAD
                <input type="email"
=======
                <input
                    id="Email"
                    onChange={handleSubmit}
                    type="email"
>>>>>>> main
                    className="formInput"
                    placeholder="Enter email"
                />
                <div className="emailHelp">
                    We'll never share your email with anyone else.
                </div>


                <div className="form-group">
                    <label> Password </label>
<<<<<<< HEAD
                    <input type="password"
=======
                    <input
                        id="password"
                        onChange={handleSubmit}
                        type="password"
>>>>>>> main
                        className="formInput"
                        placeholder="Password">
                    </input>
                </div>

                <div className="form-group">
                    <label> Confirm Password </label>
<<<<<<< HEAD
                    <input type="password"
=======
                    <input
                        id="passwordCheck"
                        onChange={handleSubmit}
                        type="password"
>>>>>>> main
                        className="formInput"
                        placeholder="Confirm Password">
                    </input>
                </div>

<<<<<<< HEAD
                <button type="submit"
=======
                <button
                    type="submit"
>>>>>>> main
                    className="submit-btn"
                >
                    Sign Up
                    </button>

            </form>
        </div>
    )
}
