import BookingForm from "./BookingForm"


const BookingPage = (props) => {
    const renderfunction = Object.values(props.state.time).map((t) => {
        return <option>{t}</option>
   })
    return (
    <>
        <BookingForm renderfunction={renderfunction} state={props.state} dispatch={props.dispatch} />
    </>
    )
}

export default BookingPage