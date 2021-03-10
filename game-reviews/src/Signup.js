import { useState } from 'react';

import React from 'react'

export default function Signup() {

    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("")
    
    return (
        <div>
            <form className="registrationForm">
                <label>Email Address</label>
                <input type="email"
                    className="form-email"
                    placeholder="Enter email"
                />

            </form>
        </div>
    )
}
