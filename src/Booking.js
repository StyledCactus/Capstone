import Header from "./Header";
import Dates from "./Date";
import Diners from "./Diners";
import { DinersProvider } from "./CartNumbers";
import { useNavigate } from "react-router-dom";
import Footer from "./footerbook";
import { useState } from "react";

console.log("Booking Working")



function Booking(){


    const navigate = useNavigate();
    const Bookclick = () => {
        navigate('/bookNow')
    }

    const [selectedTime, setSelectedTime] = useState(null);

    const handleDateChange = (date) => {
        console.log(date)
    }

    const handleTimeChange = (time) =>{
        console.log(time)
        setSelectedTime(time);
    }

    return(
        <DinersProvider>
    <>
    <Header />
    <div className="quickfix">
    <Dates onDateChange={handleDateChange} onTimeChange={handleTimeChange} setSelectedTime={setSelectedTime}/>
    <Diners />
    </div>
    <Footer />
    <button className="SubmitOne" onClick={Bookclick}>Make Your reservation</button>
    </>

    </DinersProvider>
    )
}

export default Booking;
