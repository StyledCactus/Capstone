import { render, screen } from "@testing-library/react";
import React, {useState} from "react";
import Headerbook from "./Headerbook";
import numberLine from "./Numberline";
import { useDinersContext } from "./CartNumbers";

function Diners(){

    // const [valueOne, setValueOne] = useState(0)
    // const [valueTwo , setValueTwo] = useState(0)
    // const [valueThree , setValueThree] = useState(0)

    // const raiseValueOne = () => {
    //     setValueOne(prevValue => prevValue + 1);
    // }

    // const lowerValueOne = () => {
    //     setValueOne(prevValue => Math.max(0, prevValue - 1));
    // }

    // const raiseValueTwo = () => {
    //     setValueTwo(prevValue => prevValue + 1);
    // }

    // const lowerValueTwo = () => {
    //     setValueTwo(prevValue => Math.max(0, prevValue - 1));
    // }

    // const raiseValueThree = () => {
    //     setValueThree(prevValue => prevValue + 1);
    // }

    // const lowerValueThree = () => {
    //     setValueThree(prevValue => Math.max(0, prevValue - 1));
    // }

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

const Bookcon = () => {
    console.log('Book Now Worked')
}
    return(
        <>
        <h1 className="diners">NUMBERS OF DINERS</h1>
        <h1 className="adults">ADULTS</h1>
        <div className="dinerSlid">
        <button className="MinusOne" onClick={lowerValueOne}>-</button>
        <span className="ValueOne">{valueOne}</span>
        <button className="PlusOne" onClick={raiseValueOne}>+</button>
        </div>
        <hr className='lineSeven'></hr>
        <div className="dinerSlidTwo">
        <button className="MinusOne" onClick={lowerValueTwo}>-</button>
        <span className="ValueOne">{valueTwo}</span>
        <button className="PlusOne" onClick={raiseValueTwo}>+</button>
        </div>
        <hr className='lineEight'></hr>
        <h1 className="tod">TEENS</h1>
        <div className="dinerSlidThree">
        <button className="MinusOne" onClick={lowerValueThree}>-</button>
        <span className="ValueOne">{valueThree}</span>
        <button className="PlusOne" onClick={raiseValueThree}>+</button>
        </div>
        <hr className='lineNine'></hr>
        <h1 className="babies">KIDS</h1>
        <button className="SubmitOne" onClick={Bookcon}>Book Now</button>
        </>
    )
}



export default Diners;