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
            <div className='NavContent'>
                <h1 className='name'>Little Lemon</h1>
                <h2 className='chicago'>Chicago</h2>
                <h3 className='desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
                <button className='reserve' onClick={ReserveClick}>Reserve a Table</button>
            </div>
        <img className='firstImg' src={firstimg}></img>
        </div>
    );
}

export default Nav;