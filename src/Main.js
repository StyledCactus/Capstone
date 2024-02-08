import logo from './logo.svg';
import './App.css';

function Main() {
    return(
        <div className='Main'>
        <h1 className='devliv'>ORDER FOR DELIVERY!</h1>
        <div className='mainbut'>
            <button className='lunch'>Lunch</button>
            <button className='main'>Mains</button>
            <button className='dessert'>Desserts</button>
            <button className='veg'>Vegetables</button>
        </div>
        </div>
    )
}

export default Main;