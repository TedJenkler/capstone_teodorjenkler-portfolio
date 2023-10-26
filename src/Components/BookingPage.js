import BookingForm from "./BookingForm"


const BookingPage = (props) => {
    return (
    <>
        <BookingForm state={props.state} dispatch={props.dispatch} />
    </>
    )
}

export default BookingPage