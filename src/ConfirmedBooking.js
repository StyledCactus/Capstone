import React from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";
import Booking from "./Booking";

console.log('ConfirmedBooking Working');

function ConfirmedBooking() {
    return(
        <div>
            <h1>Booking Confirmed</h1>
            <p>Your booking has been confirmed</p>
            <Link to='/Booking'>Go Back to Homepage</Link>
        </div>
    )
}
export default ConfirmedBooking;