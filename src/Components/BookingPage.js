import BookingForm from "./BookingForm"


const BookingPage = (props) => {
    return (
    <>
        <BookingForm state={props.state} dispatch={props.dispatch} // availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} 
        />
    </>
    )
}

export default BookingPage