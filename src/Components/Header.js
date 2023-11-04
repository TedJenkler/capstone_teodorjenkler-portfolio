import logo from "../icons_assets/Logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
    <header>
         <Link to="/" className="nav-item"><img src={logo} alt="logo" /></Link>
    </header>
    )
}

export default Header