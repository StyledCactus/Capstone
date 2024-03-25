import React, {useState} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import NowContent from "./NowContent";


function Dates({ onDateChange, onTimeChange, setIsDateSelected}){

    const [selectedDate , setSelectedDate] = useState(new Date());
    const [selectedTime , setSelectedTime] = useState("17:00");

    const closed = date => {
        const day = date.getDay();
        return day === 1;
    }

    const [noType, setNoType] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toLocaleDateString('en-US');
        onDateChange(formattedDate);
        setNoType(false)
        localStorage.setItem('selectedDate', formattedDate)
        console.log("DATES selected date:", formattedDate)
    }

    const handleTimeChange = (event) => {
        const time = event.target.value;
        onTimeChange(time);
        setSelectedTime(time);
        setNoType(false)
        localStorage.setItem('selectedTime', time);
        console.log("DATES Selected Time:" , time);
    }

    return(
<>
<div className="datecontain">
<h1 className="Date">Choose date</h1>
<DatePicker className="DateBut"
selected={selectedDate}
onChange={handleDateChange}
dateFormat="MMMM d, yyyy"
minDate={new Date()}
withPortal
filterDate={date => !closed(date)}
/>
</div>
<div className="Timecontain">
<h1 className="Time">Choose time</h1>
<select className="TimeOne"
value={selectedTime}
onChange={handleTimeChange}>
    <option value="17:00">17:00</option>
    <option value="17:30">17:30</option>
    <option value="19:30">19:30</option>
    <option value="20:00">20:00</option>
    <option value="21:30">21:30</option>
    <option value="22:30">22:30</option>
    <option value="23:00">23:00</option>
    <option value="23:30">23:30</option>
</select>
</div>
</>
    )
    }

export default Dates;