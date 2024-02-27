import { useNavigate } from 'react-router-dom';
import './App.css';
import firstimg from './images/firstimg.png'




function Nav() {

    const navigate = useNavigate();

    const ReserveClick = () => {
        navigate('/Booking'); 
    };

    return(
        <div className='Nav'>
        <h1 className='name'>Little Lemon</h1>
        <h2 className='chicago'>Chicago</h2>
        <h3 className='desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
        <button className='reserve' onClick={ReserveClick}>Reserve a Table</button>
        <img className='firstImg' src={firstimg}></img>



        {/* <li><a href='/home'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact</a></li>*/}
        </div>
    );
}

export default Nav;