import Homepage from "./Homepage"
import About from "./About"
import Menu from "./Menu"
import BookingPage from "./BookingPage"
import Orderonline from "./Orderonline"
import Login from "./Login"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"


const Main = () => {
    return (
    <main>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/Bookingpage" element={<BookingPage />}></Route>
            <Route path="/Orderonline" element={<Orderonline />}></Route>
            <Route path="/Login" element={<Login />}></Route>
        </Routes>

    </main>
    )
}

export default Main