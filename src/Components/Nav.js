import { Link } from "react-router-dom"
import { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
};

    return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li ><Link to="/" className="nav-item">Homepage</Link></li>
        <li ><Link to="/About" className="nav-item">About</Link></li>
        <li ><Link to="/Menu" className="nav-item">Menu</Link></li>
        <li ><Link to="/Bookingpage" className="nav-item">Reservations</Link></li>
        <li ><Link to="/Login" className="nav-item">Login</Link></li>
      </ul>
    </nav>
    )
}

export default Nav