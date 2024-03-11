import React, {useState} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function Dates({ onDateChange, onTimeChange, setIsDateSelected, setIsTimeSelected}){

    const [selectedDate , setSelectedDate] = useState(new Date());
    const [selectedTime , setSelectedTime] = useState(null);

    const closed = date => {
        const day = date.getDay();
        return day === 1;
    }

    const [noType, setNoType] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsDateSelected(true); 
        onDateChange(date);
        setNoType(false)
    }

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        setIsTimeSelected(true); 
        onTimeChange(time);
        setNoType(false)
    }


    return(
<>
<h1 className="Date">DATE</h1>
<DatePicker className="DateBut"
selected={selectedDate}
onChange={handleDateChange}
dateFormat="MMMM d, yyyy"
minDate={new Date()}
withPortal
filterDate={date => !closed(date)}
/>
<h1 className="Time">TIME</h1>
<DatePicker className="TimeOne"
selected={selectedTime}
onChange={handleTimeChange}
showTimeSelect
showTimeSelectOnly
timeIntervals={15}
timeCaption="Time"
dateFormat="h:mm aa"
withPortal
minTime={new Date().setHours(17, 0)}
maxTime={new Date().setHours(20, 0)}
/>
</>
    )
    }

export default Dates;