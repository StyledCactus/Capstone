import Lemon from './images/Lemon.png';
import './App.css';
import React, {useState} from "react";
import {  useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();

    const HomeClick = () => {
        navigate('/');
    }

    return(
       <header className='header'>
        <div className='HeaderLinks'>
        <button className='headerButtonTwo' onClick={HomeClick}>
            <img className='Lemon' src = {Lemon} alt="Lemon Logo"></img>
        </button>
        
        <links className="HomeLink">Home</links>
        <links className="AboutLink">About</links>
        <links className="MenuLink" >Menu</links>
        <links className="ReservationLink">Reservations</links>
        <links className="OnOrderLink">Order Online</links>
        <links className="LoginLink">Login</links>
        </div>
       </header>
    )

}

export default Header;