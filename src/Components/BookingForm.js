import { useState } from "react"

const BookingForm = (props) => {

    const renderfunction = Object.values(props.state.time).map((t) => {
        return <option>{t}</option>
   })
    const formhandler = (e) => {
        e.preventDefault();
    }
    const [dateField, setDateField] = useState("");
    const [number, setNumber] = useState("");
    const [choice, setChoice] = useState("");
    return (
    <>
    <form className="form-bookform" onSubmit={formhandler}>
        <label htmlFor="book-date">Choose date</label>
        <input type="date" id="book-date" value={dateField} onChange={(e) => {setDateField(e.target.value)}} required></input>
        <label htmlFor="book-time">Choose time</label>
        <select id="book-time" onClick={() => { props.dispatch({ type: 'update' })}} value={props.state.value} required>
            {renderfunction}
        </select>
        <label htmlFor="book-guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="book-guests" value={number} onChange={(e) => {setNumber(e.target.value)}} required></input>
        <label htmlFor="book-occasion">Occasion</label>
        <select id="book-occasion" onChange={(e) => {setChoice(e.target.value)}} value={choice} required>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"></input>
    </form>
    </>
    )
}

export default BookingForm