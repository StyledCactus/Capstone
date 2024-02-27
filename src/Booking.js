import Headerbook from "./Headerbook"
import BookNav from "./bookNav";
import Reservespot from "./Reservespot";
import Dates from "./Date";
import Diners from "./Diners";
import { DinersProvider } from "./CartNumbers";

console.log("Booking Working")

function Booking(){


    return(
        <DinersProvider>
    <>
    <Headerbook />
    <BookNav />
    <Reservespot />
    <Dates />
    <Diners />
    <hr className='BOTTEMLINEbook'></hr>
    </>
    </DinersProvider>
    )
}

export default Booking;