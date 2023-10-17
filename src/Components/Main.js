import Homepage from "./Homepage"
import About from "./About"
import Menu from "./Menu"
import BookingPage from "./BookingPage"
import Orderonline from "./Orderonline"
import Login from "./Login"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { useState } from "react"


const Main = () => {
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    return (
    <main>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/Bookingpage" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>
            <Route path="/Orderonline" element={<Orderonline />}></Route>
            <Route path="/Login" element={<Login />}></Route>
        </Routes>

    </main>
    )
}

export default Main