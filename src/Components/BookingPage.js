import BookingForm from "./BookingForm"


const BookingPage = (props) => {
    return (
    <>
        <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} />
    </>
    )
}

export default BookingPage