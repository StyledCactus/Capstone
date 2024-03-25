import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NowContent({}) {

    const navigate = useNavigate();
    const Backhome = () => {
        navigate('/')
    }

    const selectedTime = localStorage.getItem('selectedTime')
    const selectedDate = localStorage.getItem('selectedDate')
    const valueOne = parseInt(localStorage.getItem('valueOne'));
    console.log("curent local storge", localStorage)
    const GuVal = valueOne + 1;
    const Occ = localStorage.getItem('selectedOcc')

    return(
        <>
        <div>
        <div className="nowcontentcont">
            <h1 className="Reservedd">Thank you for your reservation</h1>
            <h2 className="sees">SEE YOU SOON</h2>
            </div>
            <div className="Reserveddbox">
                <div className="comcont">
                <h2 className="condet">Confirmation details</h2>
                <h3 className="occ">Occassion: {Occ}</h3>
                <h3 className="gu">Guests: {GuVal}</h3>
                <h3 className="dat">Date: {selectedDate}</h3>
                <h3 className="tim">Time: {selectedTime}</h3>
                </div>
            </div>
            <button className="bacbut" onClick={Backhome}>Back to home</button>
        </div>
        </>
    )
}

export default NowContent;