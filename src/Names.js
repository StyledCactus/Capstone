import { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Names() {

    const [text, setText] = useState('')

    const handleChange = (event, setter) => {
        setter(event.target.value);
    }

    const Navigate = useNavigate();
    const bookDoneClick = () => {
        Navigate('/BookDone')
    }

    const Optional = "(Optional)"

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [isFirstNmSelected, setIsFirstNmSelected] = useState(false);
    const [isLastNmSelected, setIsLastNmSelected] = useState(false);
    const [isEmailSelected, setIsEmailSelected] = useState(false);

    const handleFirstNmChange = (event) => {
        setIsFirstNmSelected(event.target.value.trim() !== '');
        handleChange(event, setFirstName);
    }

    const handleLastNmChange = (event) => {
        setIsLastNmSelected(event.target.value.trim() !== '');
        handleChange(event, setLastName);
    }

    const handleEmailChange = (event) => {
        setIsEmailSelected(event.target.value.trim() !== '');
        handleChange(event, setEmail);
    }

    return(
        <div className="NamesBlur">
        <h1 className="FirstNmText">FIRST NAME</h1>
        <input
        className="FirstName"
        onChange={handleFirstNmChange}
        value={firstName}
        />
        <h1 className="LastNmText">LAST NAME</h1>
        <input
        className="LastName"
        onChange={handleLastNmChange}
        value={lastName}
/>
        <h1 className="EmailText">EMAIL</h1>
        <input
        className="EmailName"
        onChange={handleEmailChange}
        value={email}
        />
        <h1 className="noteText">NOTE {Optional} </h1>
        <textarea
        className="noteName"
        />
        <button className="submitBut" onClick={bookDoneClick} disabled={!firstName || !lastName || !email}>Submit</button>
     </div>
    )
}

export default Names;