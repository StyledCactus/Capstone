import Lemon from './images/Lemon.png';
import Menu from './images/Menu Button.png'
import Basket from './images/Basket.png'
import './App.css';

function Header() {
    return(
       <header className='header'>
        <a href='' className='headerButtonOne'>
            <img className='Menu' src= {Menu} alt="Menu Button"></img>
        </a>
        <a href='' className='headerButtonTwo'>
            <img className='Lemon' src = {Lemon} alt="Lemon Logo"></img>
        </a>
        <a href='' className='headerButtonThree'>
            <img className='Basket' src = {Basket} alt ="Basket Icon"></img>
        </a>
       </header>
    )

}

export default Header;