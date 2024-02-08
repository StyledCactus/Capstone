import logo from './logo.svg';
import './App.css';
import greeksalad from './images/greeksalad.jpg';

function Footer() {
    return (
    <div className='footer'>
        <div className='Salad'>
            <h2 className='SaladNm'>Greek Salad</h2>
            <h2 className='SaladDesc'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </h2>
            <img className='SaladImg' src={greeksalad}></img>
            <h2 className='SaladPrice'>$12.99</h2>
            <hr className='line'></hr>
        </div>
    </div>
);
}


export default Footer;