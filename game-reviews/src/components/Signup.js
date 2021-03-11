import { useState } from 'react';
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
                    className="formInput"
                    placeholder="Enter Username"
                />

                <label>Email Address</label>
                <input type="email"
                    className="formInput"
                    placeholder="Enter email"
                />
                <div className="emailHelp">
                    We'll never share your email with anyone else.
                </div>


                <div className="form-group">
                    <label> Password </label>
                    <input type="password"
                        className="formInput"
                        placeholder="Password">
                    </input>
                </div>

                <div className="form-group">
                    <label> Confirm Password </label>
                    <input type="password"
                        className="formInput"
                        placeholder="Confirm Password">
                    </input>
                </div>

                <button type="submit"
                    className="submit-btn"
                >
                    Sign Up
                    </button>

            </form>
        </div>
    )
}
