import Lemon from './images/Lemon.png';
import Menu from './images/Menu Button.png'
import Basket from './images/Basket.png'
import './App.css';
import React, {useState} from "react";
import WhiteX from './images/WhiteX.png'
import RedX from './images/RedX.png'


function Header() {

    const [isShowCart, setShowCart] = useState(false);

    const toggleCart = (e) => {
        e.preventDefault();
        setShowCart(!isShowCart);
    };

    const closeCart = () => {
        setShowCart(false);
    }

    return(
       <header className='header'>
        <a href='' className='headerButtonOne'>
            <img className='Menu' src= {Menu} alt="Menu Button"></img>
        </a>
        <a href='' className='headerButtonTwo'>
            <img className='Lemon' src = {Lemon} alt="Lemon Logo"></img>
        </a>
        <a href='CartsShown' className='headerButtonThree' onClick={toggleCart}>
            <img className='Basket' src = {Basket} alt ="Basket Icon"></img>
        </a>
        {isShowCart && (
            <div>
            <div className='overlay' onClick={closeCart}></div>
            <div className='cart'>
                <header className='headerCart'>
                <img className='CartBasket' src={Basket}></img>
                <button className='closeButton' onClick={closeCart}>x</button>
                <h1 className='cartText'>Cart</h1>
                </header>
            </div>
            </div>
        )}
       </header>
    )

}

export default Header;