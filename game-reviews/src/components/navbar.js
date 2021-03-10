import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navContainer" onclick={closeMobileMenu}>
                    <Link to="/" className="navLogo">
                        <h3>P</h3>
                        <h3 className="G1">G</h3>
                        <p>tips</p>
                    </Link>
                    <div className = "menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                            <Link to = "/Home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/Signup" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/Login" className="nav-links" onClick={closeMobileMenu}>
                            Login
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}