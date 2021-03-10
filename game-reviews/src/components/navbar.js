import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
    return (
        <>
        <nav className = "navbar">
            <div className ="navContainer">
                <Link to="/" className="navLogo">
                    <h3>P</h3>
                    <h3 className="G1">G</h3>
                    <p>tips</p>
                </Link>
            </div>
        </nav>
        </>
    )
}