import React, { useState} from "react";
import { useDinersContext } from "./CartNumbers";
import { useNavigate } from "react-router-dom";


function Diners(){


    const {
        valueOne,
        raiseValueOne,
        lowerValueOne,
    } = useDinersContext();

    const lowerValueOneHandler = () => {
        if (valueOne > 1) { 
            lowerValueOne();
        }
    }

const Bookcon = () => {
    console.log('Book Now Worked')
}
const Navigate = useNavigate();
const bookNowClick = () => {
    
    Navigate('/BookNow')
}
const [selectedOcc , setIsSelectedOcc] = useState("Birthday")


const handleSelectedOcc = (event) => {
    const occ = event.target.value;
    setIsSelectedOcc(occ)
    localStorage.setItem('selectedOcc', occ)
}

    return(
        <>
        <div className="dinerscontain">
        <h1 className="diners">Number of guests</h1>
        <div className="dinerSlid">
        <button className="MinusOne" onClick={lowerValueOneHandler}>-</button>
        <span className="ValueOne">{valueOne}</span>
        <button className="PlusOne" onClick={raiseValueOne}>+</button>
        </div>
        <div className="ocascontain">
            <h1 className="Ocassion">Occassion</h1>
            <select className="Occsel" value={selectedOcc} onChange={handleSelectedOcc}>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
            </select>
        </div>
        </div>
        </>
    )
}



export default Diners;