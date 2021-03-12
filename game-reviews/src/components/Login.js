import React from 'react'
import './Login.css'

export default function Login() {


    return (
        <div>
            <h1 className="page-header">Login</h1>
            <form className="form-container">
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
                    className="btn btn-primary"
                >
                    Login
                    </button>
            </form>
        </div>
    )
}
