import { Link } from "react-router-dom"


const Nav = () => {
    return (
    <nav>
        <ul>
            <li><Link to="/" className="nav-item">Homepage</Link></li>
            <li><Link to="/About" className="nav-item">About</Link></li>
            <li><Link to="/Menu" className="nav-item">Menu</Link></li>
            <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
            <li><Link to="/Orderonline" className="nav-item">Order online</Link></li>
            <li><Link to="/Login" className="nav-item">Login</Link></li>
        </ul>
    </nav>
    )
}

export default Nav