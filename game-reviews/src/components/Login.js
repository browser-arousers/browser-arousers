import React from 'react'
import './Login.css'

export default function Login() {


    return (
        <div>
            <h2>Login</h2>
            <form>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    id="email"
                    type="email"
                    className="formInput"
                    placeholder="Enter email"
                />
                </div>

                <div className="form-group">
                    <label> Password </label>
                    <input
                        id="password"
                        type="password"
                        className="formInput"
                        placeholder="Password">
                    </input>
                    </div>

                    <button
                    type="submit"
                    className="submit-btn"
                >
                    Login
                    </button>
            </form>
        </div>
    )
}
