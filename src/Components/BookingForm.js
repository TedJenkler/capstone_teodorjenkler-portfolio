import { useState } from "react"

const BookingForm = (props) => {

    const [dateField, setDateField] = useState("");
  //  const [timeField, setTimeField] = useState("");
    const [number, setNumber] = useState("");
    const [choice, setChoice] = useState("");
   // const times = props.availableTimes.map((t) => {
   //     return <option>{t}</option>
  //  })
    const newtimes = Object.values(props.state).map((t) => {
        return <option>{t}</option>
    })
    console.log(newtimes)
    return (
    <>
    <form className="form-bookform">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={dateField} onChange={(e) => {setDateField(e.target.value)}}></input>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => {props.dispatch()}} value={props.state}>
            {newtimes}
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