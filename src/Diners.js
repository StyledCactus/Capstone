import React, { createContext, useContext, useState} from "react";
import { useDinersContext } from "./CartNumbers";
import { useNavigate } from "react-router-dom";
import Dates from "./Date";

function Diners(){


    const {
        valueOne,
        raiseValueOne,
        lowerValueOne,
        valueTwo,
        raiseValueTwo,
        lowerValueTwo,
        valueThree,
        raiseValueThree,
        lowerValueThree,
    } = useDinersContext();

    const lowerValueOneHandler = () => {
        if (valueOne > 1) { 
            lowerValueOne();
        }
    }
    
    const lowerValueTwoHandler = () => {
        if (valueTwo > 1) { 
            lowerValueTwo();
        }
    }
    
    const lowerValueThreeHandler = () => {
        if (valueThree > 1) { 
            lowerValueThree();
        }
    }


const Bookcon = () => {
    console.log('Book Now Worked')
}
const Navigate = useNavigate();
const bookNowClick = () => {
    Navigate('/BookNow')
}

const [isDateSelected, setIsDateSelected] = useState(false);
const [isTimeSelected, setIsTimeSelected] = useState(false);

const handleDateChange = (date) => {
    setIsDateSelected(true);
    
}

const handleTimeChange = (time) => {
    setIsTimeSelected(true)
    
}

    return(
        <>
        <h1 className="diners">NUMBERS OF PEOPLE</h1>
        <div className="dinerSlid">
        <button className="MinusOne" onClick={lowerValueOneHandler}>-</button>
        <span className="ValueOne">{valueOne}</span>
        <button className="PlusOne" onClick={raiseValueOne}>+</button>
        </div>
        <button className="SubmitOne" onClick={bookNowClick} disabled={!isDateSelected && !isTimeSelected}>Book Now</button>
        <Dates  
        onDateChange={handleDateChange} 
        onTimeChange={handleTimeChange} 
        setIsDateSelected={setIsDateSelected}
        setIsTimeSelected={setIsTimeSelected}
        />
        </>
    )
}



export default Diners;