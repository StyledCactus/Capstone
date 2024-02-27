import React, {useState} from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';




function Dates(){

    const [selectedDate , setSelectedDate] = useState(new Date());
    const [selectedTime , setSelectedTime] = useState(null);
    const [validTimes, setValidTimes] = useState([]);

    const fetchValidTimes = async () => {
        try{
            const times = await fetchAPI(selectedDate);
            setValidTimes(times);
        } catch (error) {
            console.error('Error fetching Valid Times', error);
        }
    }

const handleSubmit = async () => {
    const formData = {
        date: selectedDate,
        time: selectedTime
    }
try{
    const success = await submitAPI(formData);
    if (success) {
        console.log('Form submitted successfully')
    } else {
        console.error('Failed to submit form');
    }
} catch (error) {
    console.error('Failed to submit formData.')
}


}

const navigate = useNavigate();

    const submitForm = async (formData) => {
        try {
            const success = await submitAPI(formData);
    if (success) {
        navigate('/confirmed-booking');
    }
}
 catch (error) {
    console.error('Error submitting form data:', error)
}
    }
    return(
<>
<h1 className="Date">DATE</h1>
<DatePicker className="DateBut"
selected={selectedDate}
onChange={date => setSelectedDate(date)}
dateFormat="MMMM d, yyyy"
minDate={new Date()}
withPortal
//filterDate={date => date.getday() !== 6 && date.getDay() !== 0}
/>
<h1 className="Time">TIME</h1>
<DatePicker className="TimeOne"
selected={selectedTime}
onChange={(time) => setSelectedTime(time)}
showTimeSelect
showTimeSelectOnly
timeIntervals={15}
timeCaption="Time"
dateFormat="h:mm aa"
withPortal
/>
<button className="FetchAPIone" onClick={fetchValidTimes}>Fetch Valid Times</button>
<button className="HandleSubmitAPI" onClick={handleSubmit}>Submit</button>

</>
    )
}

export default Dates;