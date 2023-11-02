import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})