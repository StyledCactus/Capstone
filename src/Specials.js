import './App.css';
import greeksalad from './images/greeksalad.jpg';
import brushetta from './images/brushetta.png'
import LemonDessert from './images/LemonDessert.png'

function Specials() {

    return(
        <>
        <div className='Salad'>
            <h2 className='SaladNm'>Greek Salad</h2>
            <h2 className='SaladDesc'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </h2>
            <img className='SaladImg' src={greeksalad}></img>
            <h2 className='SaladPrice'>$12.99</h2>
        </div>
        <div className='brushBase'>
            <h2 className='brushNm'>Brushetta</h2>
            <h2 className='brushDesc'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</h2>
            <img className='brushImg' src={brushetta}></img>
            <h2 className='brushPrice'>$7.99</h2>
        </div>
        <div className='Lemondiv'>
            <h2 className='LemonNm'>Lemon Dessert</h2>
            <h2 className='LemonDesc'>Add description</h2>
            <img className='LemonImg' src={LemonDessert}></img>
            <h2 className='LemonPrice'>$6.99</h2>
        </div>
        </>
    )
}

export default Specials;