import { useState } from 'react';
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
        axios({
            method: "POST",
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
                    className="formInput"
                    placeholder="Enter Username"
                />

                <label>Email Address</label>
                <input
                    id="email"
                    onChange={handleSubmit}
                    type="email"
                    className="formInput"
                    placeholder="Enter email"
                />
                <div className="emailHelp">
                    We'll never share your email with anyone else.
                </div>


                <div className="form-group">
                    <label> Password </label>
                    <input
                        id="password"
                        onChange={handleSubmit}
                        type="password"
                        className="formInput"
                        placeholder="Password">
                    </input>
                </div>

                <div className="form-group">
                    <label> Confirm Password </label>
                    <input
                        id="passwordCheck"
                        onChange={handleSubmit}
                        type="password"
                        className="formInput"
                        placeholder="Confirm Password">
                    </input>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                >
                    Sign Up
                    </button>

            </form>
        </div>
    )
}
