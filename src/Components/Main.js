import Homepage from "./Homepage"
import About from "./About"
import Menu from "./Menu"
import BookingPage from "./BookingPage"
import Orderonline from "./Orderonline"
import Login from "./Login"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { useReducer, useState } from "react"


const Main = () => {
    const initializeTimes =  {
    state: ["12:00", "13:00"],
    }

    const updateTimes = (state, action) => {
        switch(action.type){
            case 'update': {
                return({state: ["12:00","13:00","14:00","15:00","16:00","17:00","18:00"]})
            }
        }
        throw Error('Unknown action: ' + action.type);
    }
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)
    return (
    <>
    <main>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/Bookingpage" element={<BookingPage state={state} dispatch={dispatch} />}></Route>
            <Route path="/Orderonline" element={<Orderonline />}></Route>
            <Route path="/Login" element={<Login />}></Route>
        </Routes>

    </main>
    </>
    )
}

export default Main