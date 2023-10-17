import { useState } from "react"

const BookingForm = () => {

    const [dateField, setDateField] = useState("");
    const [timeField, setTimeField] = useState("");
    const [number, setNumber] = useState("");
    const [choice, setChoice] = useState("");
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    const times = availableTimes.map((t) => {
        return <option>{t}</option>
    })
    return (
    <>
    <form className="form-bookform">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={dateField} onChange={(e) => {setDateField(e.target.value)}}></input>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => {setTimeField(e.target.value)}} value={timeField}>
            {times}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} onChange={(e) => {setNumber(e.target.value)}}></input>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => {setChoice(e.target.value)}} value={choice} >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"></input>
    </form>
    </>
    )
}

export default BookingForm