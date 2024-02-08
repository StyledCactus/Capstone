import './App.css';
import brushetta from './images/brushetta.png'

function Brushetta() {
    return(
        <div className='brushBase'>
            <h2 className='brushNm'>Brushetta</h2>
            <h2 className='brushDesc'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</h2>
            <img className='brushImg' src={brushetta}></img>
            <h2 className='brushPrice'>$7.99</h2>
            <hr className='lineTwo'></hr>
        </div>
    )

}

export default Brushetta;