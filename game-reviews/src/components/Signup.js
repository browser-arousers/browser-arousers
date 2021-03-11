import { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export default function Signup(props) {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        passwordCheck: ""
    });

    const sendDetailsToServer = () => {
        axios.post('http://localhost:5000/users/register', {
            username: username,
            email: email,
            password: password,
            passwordCheck: passwordCheck,
        })
    }

    const handleSubmit = (event) => {
        if (event.target.id === "username") {
            setUser(event.target.value)
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
