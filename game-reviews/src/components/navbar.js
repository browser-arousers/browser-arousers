
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
                    <a href="/" className="navLogo">
                        <h3>P</h3>
                        <h3 className="G1">G</h3>
                        <p>tips</p>
                    </a>
                    <div className = "menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                            <a href= "/Reviews" className="nav-links" onClick={closeMobileMenu}>
                            Reviews
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Signup" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href= "/Login" className="nav-links" onClick={closeMobileMenu}>
                            Login
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
